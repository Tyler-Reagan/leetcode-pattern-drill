import { useCallback, useEffect, useRef, useState } from 'react'

const TICK_MS = 100

// Time derives from performance.now(), not summed ticks, so a throttled interval
// cannot drift. The interval only triggers re-renders, quantised to whole seconds.
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

    const start = useCallback(() => {
        bankedMs.current = 0
        runningSince.current = performance.now()
        setElapsedMs(0)
        setIsRunning(true)
    }, [])

    const stop = useCallback(() => {
        if (runningSince.current !== null) {
            bankedMs.current = read()
            runningSince.current = null
        }
        setElapsedMs(bankedMs.current)
        setIsRunning(false)
    }, [])

    const resume = useCallback(() => {
        if (runningSince.current === null) {
            runningSince.current = performance.now()
        }
        setElapsedMs(wholeSeconds(read()))
        setIsRunning(true)
    }, [])

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
