import styles from './LinkWithTooltip.module.sass'
import { MouseEvent, useRef, useState } from 'react'
import getNavBarHeight from '@utils/getNavBarHeight'
import scrollTo from '@utils/scrollTo'
import Tooltip from '@components/Tooltip/Tooltip'
import { useView } from '@components/View/ViewProvider'

interface LinkWithTooltipProps {
    href: string
    description: string
}

const SETTLED_FRAMES = 6
const MAX_WAIT_MS = 2000

/** Waits for the element to exist and stop moving, then scrolls to it. */
function scrollWhenSettled(selector: string, offset: number) {
    const start = performance.now()
    let lastTop = -1
    let stableFrames = 0

    const check = () => {
        const el = document.querySelector(selector) as HTMLElement | null
        const timedOut = performance.now() - start > MAX_WAIT_MS
        if (el) {
            stableFrames = el.offsetTop === lastTop ? stableFrames + 1 : 0
            lastTop = el.offsetTop
        }
        if ((el && stableFrames >= SETTLED_FRAMES) || timedOut) {
            scrollTo(selector, offset)
            return
        }
        requestAnimationFrame(check)
    }
    requestAnimationFrame(check)
}

export default function LinkWithTooltip({ href, description }: LinkWithTooltipProps) {
    const ref = useRef<HTMLAnchorElement>(null)
    const { view, setView } = useView()
    const [showTooltip, setShowTooltip] = useState<boolean>(false)
    let hoverTimer: NodeJS.Timeout

    const handleLinkClick = (event: MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault()
        window.history.replaceState({}, '', href)
        clearTimeout(hoverTimer)
        setShowTooltip(false)
        if (view === 'finder') {
            // sections are not mounted yet, and code blocks grow after their
            // first render; scroll once the target's position has settled
            setView('cheatsheet')
            scrollWhenSettled(href, getNavBarHeight() - 2)
            return
        }
        scrollTo(href, getNavBarHeight() - 2)
    }

    const handleMouseEnter = () => {
        hoverTimer = setTimeout(() => {
            setShowTooltip(true)
        }, 700)
    }

    const handleMouseLeave = () => {
        clearTimeout(hoverTimer)
        setShowTooltip(false)
    }

    return (
        <div className={styles.linkWrapper}>
            <a
                ref={ref}
                href={href}
                className={styles.link}
                onClick={handleLinkClick}
                role="button"
                aria-description={description}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                {description}
            </a>
            <Tooltip anchorRef={ref} content={description} showTooltip={showTooltip} />
        </div>
    )
}
