import { useCallback, useEffect, useRef, useState } from 'react'

const TICK_MS = 100

/**
 * Stopwatch measured against a budget. Time is always derived from
 * performance.now() timestamps, never accumulated per tick, so a throttled
 * or paused interval cannot make the clock drift. The interval only decides
 * when to re-render; while running, `elapsedMs` is quantised to whole seconds.
 */
export default function useCountdown(budgetMs: number) {
    const bankedMs = useRef(0)
    const runningSince = useRef<number | null>(null)
    const [elapsedMs, setElapsedMs] = useState(0)
    const [isRunning, setIsRunning] = useState(false)

    const read = () => {
        const live = runningSince.current === null ? 0 : performance.now() - runningSince.current
        return bankedMs.current + live
    }
    const wholeSeconds = (ms: number) => Math.floor(ms / 1000) * 1000

    useEffect(() => {
        if (!isRunning) return

        const id = setInterval(() => {
            const next = wholeSeconds(read())
            setElapsedMs((prev) => (prev === next ? prev : next))
        }, TICK_MS)

        return () => clearInterval(id)
    }, [isRunning])

    /** Begin from zero. */
    const start = useCallback(() => {
        bankedMs.current = 0
        runningSince.current = performance.now()
        setElapsedMs(0)
        setIsRunning(true)
    }, [])

    /** Freeze the clock at its exact current value. */
    const stop = useCallback(() => {
        if (runningSince.current !== null) {
            bankedMs.current = read()
            runningSince.current = null
        }
        setElapsedMs(bankedMs.current)
        setIsRunning(false)
    }, [])

    /** Continue from the stopped value without resetting. */
    const resume = useCallback(() => {
        if (runningSince.current === null) {
            runningSince.current = performance.now()
        }
        setElapsedMs(wholeSeconds(read()))
        setIsRunning(true)
    }, [])

    /** Zero the clock and stop it. */
    const reset = useCallback(() => {
        bankedMs.current = 0
        runningSince.current = null
        setElapsedMs(0)
        setIsRunning(false)
    }, [])

    const remainingMs = budgetMs - elapsedMs
    const isOvertime = elapsedMs >= budgetMs

    return {
        elapsedMs,
        remainingMs,
        overtimeMs: isOvertime ? elapsedMs - budgetMs : 0,
        isOvertime,
        isRunning,
        start,
        stop,
        resume,
        reset,
    }
}
