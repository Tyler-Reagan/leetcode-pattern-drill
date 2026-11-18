import { useCallback, useEffect, useRef, useState } from 'react'

import { tree } from '@/finder/tree'
import type { FinderOption, Leaf, TreeNode } from '@/finder/types'
import useCountdown from './useCountdown'

export const BUDGET_SECONDS = 30
export const WARN_SECONDS = 10

export type FinderMode = 'flow' | 'map'

export interface Step {
    question: string
    option: FinderOption
}

// Keys typed into a form control (the language select included) belong to that control,
// never to the drill.
function isFormControl(target: HTMLElement) {
    if (target.isContentEditable) return true
    if (['INPUT', 'TEXTAREA', 'SELECT', 'OPTION'].includes(target.tagName)) return true
    return target.closest('input, textarea, select, [role="listbox"], [role="combobox"]') !== null
}

const pad = (n: number) => String(n).padStart(2, '0')

export function formatClock(totalSeconds: number) {
    const seconds = Math.max(0, totalSeconds)
    return `${Math.floor(seconds / 60)}:${pad(seconds % 60)}`
}

// Keys: Enter starts, 1-9 picks, Backspace backtracks, T toggles the template, Escape resets, M
// switches mode. Map mode ignores all but M: a reset there would discard the paused run unseen.
export default function useFinderRun() {
    const clock = useCountdown(BUDGET_SECONDS * 1000)
    const [started, setStarted] = useState(false)
    const [steps, setSteps] = useState<Step[]>([])
    const [showTemplate, setShowTemplate] = useState(false)
    const [mode, setModeState] = useState<FinderMode>('flow')
    const stageRef = useRef<HTMLHeadingElement>(null)

    const currentId = steps.length > 0 ? steps[steps.length - 1].option.next : tree.rootId
    const leaf: Leaf | undefined = started ? tree.leaves[currentId] : undefined
    const node: TreeNode | undefined = started ? tree.nodes[currentId] : undefined

    // Option buttons unmount on every step, so hand focus to the new heading.
    useEffect(() => {
        stageRef.current?.focus()
    }, [started, currentId, mode])

    const start = useCallback(() => {
        setStarted(true)
        clock.start()
    }, [clock])

    const pick = useCallback((option: FinderOption) => {
        if (!node) return
        setSteps((prev) => [...prev, { question: node.question, option }])
        if (tree.leaves[option.next]) clock.stop()
    }, [node, clock])

    // Keep the first `keep` steps and drop the rest, returning to question keep + 1.
    // The clock keeps running; leaving a leaf resumes it.
    const backtrackTo = useCallback((keep: number) => {
        if (keep < 0 || keep >= steps.length) return
        setSteps(steps.slice(0, keep))
        setShowTemplate(false)
        if (leaf) clock.resume()
    }, [steps, leaf, clock])

    const backtrack = useCallback(() => backtrackTo(steps.length - 1), [backtrackTo, steps.length])

    const toggleTemplate = useCallback(() => setShowTemplate((prev) => !prev), [])

    // Map pauses the clock and keeps the run. Flow resumes it only for a run that has started
    // and not yet reached a result; a run that never started never gets a clock from here.
    const setMode = useCallback((next: FinderMode) => {
        if (next === mode) return
        setModeState(next)
        if (!started || leaf) return
        if (next === 'map') clock.stop()
        else clock.resume()
    }, [mode, started, leaf, clock])

    const toggleMode = useCallback(() => setMode(mode === 'flow' ? 'map' : 'flow'), [setMode, mode])

    const reset = useCallback(() => {
        clock.reset()
        setStarted(false)
        setSteps([])
        setShowTemplate(false)
    }, [clock])

    useEffect(() => {
        const onKey = (event: KeyboardEvent) => {
            if (event.metaKey || event.ctrlKey || event.altKey) return
            const target = event.target as HTMLElement | null
            if (target && isFormControl(target)) return

            if (event.key === 'm' || event.key === 'M') return event.repeat ? undefined : toggleMode()
            if (mode !== 'flow') return

            if (event.key === 'Escape') return reset()
            if (event.key === 'Backspace' && started && steps.length > 0) {
                event.preventDefault()
                return backtrack()
            }
            // A focused button already answers Enter with its own click.
            if (event.key === 'Enter' && !started && target?.tagName !== 'BUTTON') return start()
            if ((event.key === 't' || event.key === 'T') && leaf) return toggleTemplate()
            if (/^[1-9]$/.test(event.key) && node) {
                const option = node.options[Number(event.key) - 1]
                if (option) pick(option)
            }
        }
        window.addEventListener('keydown', onKey)
        return () => window.removeEventListener('keydown', onKey)
    }, [mode, started, steps.length, node, leaf, pick, backtrack, reset, start, toggleTemplate, toggleMode])

    const remainingSeconds = Math.max(0, Math.ceil(clock.remainingMs / 1000))

    return {
        budget: BUDGET_SECONDS,
        mode,
        setMode,
        toggleMode,
        started,
        steps,
        currentId,
        node,
        leaf,
        isOvertime: clock.isOvertime,
        isWarn: !clock.isOvertime && remainingSeconds <= WARN_SECONDS,
        elapsedSeconds: Math.floor(clock.elapsedMs / 1000),
        remainingSeconds,
        overSeconds: Math.floor(clock.overtimeMs / 1000),
        showTemplate,
        toggleTemplate,
        stageRef,
        start,
        pick,
        backtrack,
        backtrackTo,
        reset,
    }
}

export type FinderRun = ReturnType<typeof useFinderRun>
