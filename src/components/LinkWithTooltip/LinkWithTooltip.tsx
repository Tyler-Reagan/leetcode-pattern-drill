import styles from './LinkWithTooltip.module.sass'
import { MouseEvent, useRef, useState } from 'react'
import getNavBarHeight from '@utils/getNavBarHeight'
import scrollTo from '@utils/scrollTo'
import scrollWhenSettled, { cancelPendingScroll } from '@utils/scrollWhenSettled'
import Tooltip from '@components/Tooltip/Tooltip'
import { useView } from '@components/View/ViewProvider'

interface LinkWithTooltipProps {
    href: string
    description: string
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
        cancelPendingScroll()
        const offset = getNavBarHeight() - 2
        if (view === 'finder') {
            setView('cheatsheet')
            scrollWhenSettled(href, offset)
        } else {
            scrollTo(href, offset)
        }
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
