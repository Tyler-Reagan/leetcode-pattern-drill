import styles from './LinkWithTooltip.module.sass'
import { useEffect, useRef, useState } from 'react'
import Tooltip from '@components/Tooltip/Tooltip'
import { useTocLink } from '@components/TableOfContents/useTocLink'

interface LinkWithTooltipProps {
    href: string
    description: string
}

export default function LinkWithTooltip({ href, description }: LinkWithTooltipProps) {
    const ref = useRef<HTMLAnchorElement>(null)
    const [showTooltip, setShowTooltip] = useState<boolean>(false)
    // A ref, not a local: a re-render between mouseenter and mouseleave (every link re-renders when the
    // current section changes) would otherwise lose the timer, and the tooltip would pop up after leaving.
    const hoverTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined)

    const hideTooltip = () => {
        clearTimeout(hoverTimer.current)
        setShowTooltip(false)
    }

    const { isCurrent, onClick } = useTocLink(href, hideTooltip)

    const handleMouseEnter = () => {
        clearTimeout(hoverTimer.current)
        hoverTimer.current = setTimeout(() => setShowTooltip(true), 700)
    }

    // Also stop a pending tooltip if the link unmounts (e.g. the view changes) before it fires.
    useEffect(() => () => clearTimeout(hoverTimer.current), [])

    return (
        <div className={styles.linkWrapper}>
            <a
                ref={ref}
                href={href}
                className={styles.link}
                onClick={onClick}
                data-toc-link
                aria-current={isCurrent ? 'location' : undefined}
                aria-description={description}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={hideTooltip}
            >
                {description}
            </a>
            <Tooltip anchorRef={ref} content={description} showTooltip={showTooltip} />
        </div>
    )
}
