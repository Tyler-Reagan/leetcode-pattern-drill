import styles from './Topbar.module.sass'

import { useLayoutEffect, ChangeEvent, MouseEvent, RefObject, useRef } from 'react'
import { useSidebar } from '@components/Sidebar/SidebarProvider'
import { useView, type View } from '@components/View/ViewProvider'
import { LANGUAGES, useLanguage } from '@components/Language/LanguageProvider'

import clsx from '@/utils/clsx'
import getNavBarHeight from '@utils/getNavBarHeight'
import { cancelPendingScroll } from '@utils/scrollWhenSettled'
import scrollTo from '@utils/scrollTo'
import FontSwitch from '@components/FontSwitch/FontSwitch'
import ThemeSwitch from '@components/ThemeSwitch/ThemeSwitch'
import Github from '@icons/Github'

type Language = (typeof LANGUAGES)[number]

interface TopbarProps {
    forwardedRef: RefObject<HTMLButtonElement | null>
}

const VIEWS: { id: View, label: string }[] = [
    { id: 'finder', label: 'Pattern Finder' },
    { id: 'pareto', label: 'Pareto Set' },
    { id: 'cheatsheet', label: 'Reference' },
]

const LANGUAGE_NAMES: Record<Language, string> = {
    python: 'Python',
    javascript: 'JavaScript',
    java: 'Java',
    cpp: 'C++',
}

export default function Topbar({ forwardedRef }: TopbarProps) {
    const ref = useRef<HTMLElement | null>(null)
    const { isSidebarOpen, showSidebar, hideSidebar, toggleSidebar } = useSidebar()
    const { view, setView } = useView()
    const { selectedLanguage, setSelectedLanguage } = useLanguage()

    useLayoutEffect(() => {
        if (!ref.current) return

        const observer = new ResizeObserver((entries) => {
            for (const entry of entries) {
                const height = entry.borderBoxSize[0].blockSize
                document.documentElement.style.setProperty('--topbar-height', `${height}px`)
            }
        })

        observer.observe(ref.current)
        return () => observer.disconnect()
    }, [])

    const handleTitleClick = (event: MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault()
        window.history.replaceState({}, '', window.location.pathname)
        scrollTo('main', getNavBarHeight() - 2)
    }
    const handleHamburgerClick = () => toggleSidebar()
    const handleViewSelect = (next: View) => {
        if (next === view) return
        cancelPendingScroll()
        setView(next)
        // The sidebar indexes the Reference and the Pareto Set: open it there on wide screens, close it on the Finder.
        if (next === 'finder') hideSidebar()
        else if (!window.matchMedia('(max-width: 768px)').matches) showSidebar()
        window.scrollTo({ top: 0 })
    }
    const handleLanguageChange = (event: ChangeEvent<HTMLSelectElement>) => {
        setSelectedLanguage(event.target.value as Language)
    }

    return (
        <header ref={ref} className={styles.topbar}>
            <div className={styles.container}>
                <div className={styles.leading}>
                    {/* The sidebar indexes the Reference and Pareto sections, which are unmounted in the Finder.
                        The button stays mounted (hidden, not removed) so its slot never shifts the layout. */}
                    <button
                        ref={forwardedRef}
                        type="button"
                        className={clsx(styles.hamburger, view === 'finder' && styles.inactive)}
                        onClick={handleHamburgerClick}
                        aria-label={isSidebarOpen ? 'Hide sections' : 'Show sections'}
                        aria-expanded={isSidebarOpen}
                        aria-controls="sidebar-sections"
                    >
                        <span className={clsx(styles.hamburgerIcon, styles.hamburgerTop, isSidebarOpen && styles.open)} />
                        <span className={clsx(styles.hamburgerIcon, styles.hamburgerMiddle, isSidebarOpen && styles.open)} />
                        <span className={clsx(styles.hamburgerIcon, styles.hamburgerBottom, isSidebarOpen && styles.open)} />
                    </button>

                    <div className={styles.segmented} role="group" aria-label="View">
                        {VIEWS.map(({ id, label }) => (
                            <button
                                key={id}
                                type="button"
                                className={styles.segment}
                                aria-pressed={view === id}
                                onClick={() => handleViewSelect(id)}
                            >
                                {label}
                            </button>
                        ))}
                    </div>
                </div>

                <a href={import.meta.env.BASE_URL} className={styles.wordmark} onClick={handleTitleClick}>
                    <h1 className={styles.title}>Pattern Drill</h1>
                </a>

                <div className={styles.tools}>
                    <label className={styles.select}>
                        <span className={styles.visuallyHidden}>Template language</span>
                        <select value={selectedLanguage} onChange={handleLanguageChange}>
                            {LANGUAGES.map((language) => (
                                <option key={language} value={language}>{LANGUAGE_NAMES[language]}</option>
                            ))}
                        </select>
                        <svg className={styles.selectChevron} viewBox="0 0 12 12" aria-hidden="true">
                            <path d="M2.5 4.5 6 8l3.5-3.5" />
                        </svg>
                    </label>
                    <FontSwitch />
                    <ThemeSwitch />
                    <a
                        href="https://github.com/Tyler-Reagan/leetcode-pattern-drill"
                        aria-label="GitHub source"
                        className={styles.iconLink}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Github />
                    </a>
                </div>
            </div>
        </header>
    )
}
