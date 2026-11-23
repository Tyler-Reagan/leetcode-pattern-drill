import { MouseEvent, useEffect, useState } from 'react'
import getNavBarHeight from '@utils/getNavBarHeight'
import scrollTo from '@utils/scrollTo'
import scrollWhenSettled, { cancelPendingScroll } from '@utils/scrollWhenSettled'
import { useView } from '@components/View/ViewProvider'

// Fired after a table-of-contents link writes the URL hash, so every link can re-read which one is current.
export const NAV_EVENT = 'pd-nav-link'

// Shared behaviour of every table-of-contents link (Reference and Pareto Set): the URL hash is the
// "current section", clicking writes it and scrolls there.
export function useTocLink(href: string, onNavigate?: () => void) {
    const { view, setView } = useView()
    const [hash, setHash] = useState<string>(() => window.location.hash)

    useEffect(() => {
        const sync = () => setHash(window.location.hash)
        window.addEventListener(NAV_EVENT, sync)
        window.addEventListener('hashchange', sync)
        return () => {
            window.removeEventListener(NAV_EVENT, sync)
            window.removeEventListener('hashchange', sync)
        }
    }, [])

    const isCurrent = view !== 'finder' && hash === href

    const onClick = (event: MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault()
        window.history.replaceState({}, '', href)
        window.dispatchEvent(new Event(NAV_EVENT))
        onNavigate?.()
        cancelPendingScroll()
        const offset = getNavBarHeight() - 2
        if (view === 'finder') {
            setView('cheatsheet')
            scrollWhenSettled(href, offset)
        } else {
            scrollTo(href, offset)
        }
    }

    return { isCurrent, onClick }
}
