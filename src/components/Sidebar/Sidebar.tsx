import styles from './Sidebar.module.sass'

import { RefObject, useEffect, useRef, useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import { useClickOutside } from '@/hooks/useClickOutside'
import { useSidebar } from '@components/Sidebar/SidebarProvider'
import { useView } from '@components/View/ViewProvider'

import clsx from '@utils/clsx'
import SidebarLinks from './SidebarLinks'

interface SidebarProps {
    hamburgerButtonRef: RefObject<HTMLButtonElement | null>
}

export default function Sidebar({ hamburgerButtonRef }: SidebarProps) {
    const ref = useRef<HTMLElement>(null)
    const { isSidebarOpen, showSidebar, hideSidebar } = useSidebar()
    const { view } = useView()
    // Starts hidden when the sidebar starts closed, so it does not play its exit on load.
    const [shouldHide, setShouldHide] = useState<boolean>(() => !isSidebarOpen)

    const classes = clsx(
        styles.sidebar,
        !isSidebarOpen && styles.exit,
        !isSidebarOpen && shouldHide && styles.hide
    )

    const handleMediaQueryChange = (matches: boolean) => {
        if (matches && isSidebarOpen) hideSidebar()
        else if (!matches && !isSidebarOpen && view === 'cheatsheet') showSidebar()
    }

    // The sidebar only indexes the Reference; it never stays open on the Finder.
    useEffect(() => {
        if (view === 'finder' && isSidebarOpen) hideSidebar()
    }, [view, isSidebarOpen, hideSidebar])

    const isScreenMd = useMediaQuery({ maxWidth: 768 }, undefined, handleMediaQueryChange)

    const hideSidebarMd = () => {
        if (isScreenMd && isSidebarOpen) hideSidebar()
    }
    const handleAnimationStart = () => setShouldHide(false)
    const handleAnimationEnd = () => {
        if (!isSidebarOpen) setShouldHide(true)
    }

    useClickOutside([ref, hamburgerButtonRef], hideSidebarMd)

    return (
        <nav
            ref={ref}
            id="reference-sections"
            aria-label="Reference sections"
            className={classes}
            onAnimationStart={handleAnimationStart}
            onAnimationEndCapture={handleAnimationEnd}
        >
            <h2 className={styles.heading}>Reference</h2>
            <div className={styles.scrollContainer}>
                <SidebarLinks />
            </div>
        </nav>
    )
}
