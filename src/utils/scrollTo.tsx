export default function scrollTo(selector: string, offset: number = 0) {
    const targetElement = document.querySelector(selector) as HTMLElement | null
    if (!targetElement) return

    // Document-relative position; offsetTop is relative to the nearest positioned ancestor.
    const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    window.scrollTo({
        top: Math.max(0, targetPosition - offset),
        behavior: reduceMotion ? 'auto' : 'smooth',
    })
}
