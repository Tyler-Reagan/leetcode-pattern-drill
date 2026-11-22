import styles from './Content.module.sass'

import { lazy, Suspense } from 'react'

import { useSidebar } from '@components/Sidebar/SidebarProvider'
import { useView } from '@components/View/ViewProvider'
import PatternFinder from '@components/PatternFinder/PatternFinder'
import Pareto from '@components/Pareto/Pareto'


import clsx from '@utils/clsx'

const Cheatsheet = lazy(() => import('@sections/Cheatsheet'))

export default function Content() {
    const { isSidebarOpen } = useSidebar()
    const { view } = useView()
    const classes = clsx(
        styles.main,
        (!isSidebarOpen || view === 'finder') && styles.sidebarHidden
    )

    return (
        <main className={classes}>
            {view === 'finder' ? <PatternFinder /> : view === 'pareto' ? <Pareto /> : <Suspense fallback={null}><Cheatsheet /></Suspense>}
        </main>
    )
}
