import scrollTo from '@utils/scrollTo'

const SETTLED_FRAMES = 6
const MAX_WAIT_MS = 2000

let pendingFrame = 0

export function cancelPendingScroll() {
    cancelAnimationFrame(pendingFrame)
}

// Code blocks grow after first render, so a new section keeps moving; measuring early lands short.
export default function scrollWhenSettled(selector: string, offset: number) {
    cancelPendingScroll()

    const start = performance.now()
    let lastTop = -1
    let stableFrames = 0

    const check = () => {
        const el = document.querySelector(selector) as HTMLElement | null
        if (el) {
            stableFrames = el.offsetTop === lastTop ? stableFrames + 1 : 0
            lastTop = el.offsetTop
        }

        const timedOut = performance.now() - start > MAX_WAIT_MS
        if (stableFrames >= SETTLED_FRAMES || timedOut) {
            scrollTo(selector, offset)
            return
        }
        pendingFrame = requestAnimationFrame(check)
    }
    pendingFrame = requestAnimationFrame(check)
}
