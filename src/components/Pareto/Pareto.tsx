import { useEffect } from 'react'
import styles from './pareto.module.sass'

import { COUNTS, PATTERNS, lcUrl } from '@/pareto/problems'
import { NAV_EVENT } from '@components/TableOfContents/useTocLink'
import getNavBarHeight from '@utils/getNavBarHeight'
import scrollTo from '@utils/scrollTo'
import { CREDIT, Diff, ExternalIcon, LEDE, sectionId } from './shared'

const KEYS = '1234567890'

// The pattern index lives in the sidebar (same links as the Reference); the URL hash is the
// shared "current section" state, and NAV_EVENT tells every sidebar link to re-read it.
const markCurrent = (id: string) => {
    const href = `#${sectionId(id)}`
    if (window.location.hash === href) return
    window.history.replaceState({}, '', href)
    window.dispatchEvent(new Event(NAV_EVENT))
}

export default function Pareto() {
    const jump = (id: string) => {
        markCurrent(id)
        scrollTo(`#${sectionId(id)}`, getNavBarHeight() - 2)
    }

    // Scroll spy: the section crossing the upper third of the viewport is the current one.
    useEffect(() => {
        const seen = new Set<string>()
        const observer = new IntersectionObserver((entries) => {
            for (const e of entries) {
                const id = e.target.id.replace('pareto-', '')
                if (e.isIntersecting) seen.add(id)
                else seen.delete(id)
            }
            const first = PATTERNS.find((p) => seen.has(p.id))
            if (first) markCurrent(first.id)
        }, { rootMargin: '-25% 0px -65% 0px' })
        PATTERNS.forEach((p) => {
            const el = document.getElementById(sectionId(p.id))
            if (el) observer.observe(el)
        })
        return () => observer.disconnect()
    }, [])

    // 1-9, 0 jump to a pattern.
    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            const t = e.target as HTMLElement
            if (t.closest('input, textarea, select, [contenteditable]') || e.metaKey || e.ctrlKey || e.altKey) return
            const k = KEYS.indexOf(e.key)
            if (k >= 0 && k < PATTERNS.length) {
                // A shortcut moves the "current" row, so a keyboard-focused table-of-contents link must
                // not keep its focus ring on a different row.
                if (t.closest('#sidebar-sections')) t.blur()
                jump(PATTERNS[k].id)
            }
        }
        window.addEventListener('keydown', onKey)
        return () => window.removeEventListener('keydown', onKey)
    }, [])

    return (
        <div className={styles.root}>
            <div className={styles.a}>
                <header className={styles.aHead}>
                    <h2 className={styles.h2}>The Pareto Set</h2>
                    <p className={styles.lede}>{LEDE}</p>
                    <p className={styles.origin}>{CREDIT}</p>
                    <dl className={styles.aStats}>
                        <div><dt>Problems</dt><dd>{COUNTS.total}</dd></div>
                        <div><dt>Patterns</dt><dd>{COUNTS.patterns}</dd></div>
                        <div><dt>Easy</dt><dd>{COUNTS.easy}</dd></div>
                        <div><dt>Medium</dt><dd>{COUNTS.medium}</dd></div>
                    </dl>
                </header>

                {PATTERNS.map((g) => (
                    <section key={g.id} id={sectionId(g.id)} className={styles.aSection} aria-labelledby={`${sectionId(g.id)}-h`}>
                        <div className={styles.aStrip}>
                            <h3 id={`${sectionId(g.id)}-h`} className={styles.h3}>{g.name}</h3>
                            <p>{g.why}</p>
                            <span className={styles.aCount}>{g.problems.length} problems</span>
                        </div>
                        <ol className={styles.aRows}>
                            {g.problems.map((x) => (
                                <li key={x.slug} className={styles.aRow}>
                                    <span className={styles.aNum}>{x.n}</span>
                                    <span className={styles.aText}>
                                        <a href={lcUrl(x.slug)} target="_blank" rel="noopener noreferrer" className={styles.aLink}>
                                            {x.name}<span className={styles.srOnly}> on LeetCode (opens in a new tab)</span>
                                        </a>
                                        <span className={styles.aMove}>{x.ask}</span>
                                    </span>
                                    <span className={styles.aLc}>LC {x.lc}</span>
                                    <Diff d={x.difficulty} />
                                    <ExternalIcon />
                                </li>
                            ))}
                        </ol>
                    </section>
                ))}
            </div>
        </div>
    )
}
