import styles from './LinkWithTooltip.module.sass'
import { MouseEvent, useEffect, useRef, useState } from 'react'
import getNavBarHeight from '@utils/getNavBarHeight'
import scrollTo from '@utils/scrollTo'
import scrollWhenSettled, { cancelPendingScroll } from '@utils/scrollWhenSettled'
import Tooltip from '@components/Tooltip/Tooltip'
import { useView } from '@components/View/ViewProvider'

interface LinkWithTooltipProps {
    href: string
    description: string
}

// Fired after a sidebar link writes its hash, so every link can re-read which one is current.
const NAV_EVENT = 'pd-nav-link'

export default function LinkWithTooltip({ href, description }: LinkWithTooltipProps) {
    const ref = useRef<HTMLAnchorElement>(null)
    const { view, setView } = useView()
    const [showTooltip, setShowTooltip] = useState<boolean>(false)
    const [hash, setHash] = useState<string>(() => window.location.hash)
    let hoverTimer: NodeJS.Timeout

    useEffect(() => {
        const sync = () => setHash(window.location.hash)
        window.addEventListener(NAV_EVENT, sync)
        window.addEventListener('hashchange', sync)
        return () => {
            window.removeEventListener(NAV_EVENT, sync)
            window.removeEventListener('hashchange', sync)
        }
    }, [])

    const isCurrent = view === 'cheatsheet' && hash === href

    const handleLinkClick = (event: MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault()
        window.history.replaceState({}, '', href)
        window.dispatchEvent(new Event(NAV_EVENT))
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
                aria-current={isCurrent ? 'location' : undefined}
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
