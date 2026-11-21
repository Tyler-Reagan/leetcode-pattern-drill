import styles from './patternfinder.module.sass'

import type { ReactNode } from 'react'

import { getTemplates } from '@/finder/templates'
import { ALL as PARETO } from '@/pareto/problems'
import type { Leaf } from '@/finder/types'

import clsx from '@utils/clsx'
import Tabs from '@components/Tabs/Tabs'
import { LANGUAGES } from '@components/Language/LanguageProvider'
import type { FinderMode, FinderRun } from './useFinderRun'

// Not in PatternFinder.tsx: the lazy map would otherwise import the card that loads it.

export function Kbd({ children }: { children: ReactNode }) {
    return <kbd className={styles.kbd} aria-hidden="true">{children}</kbd>
}

export function ModeSwitch({ mode, onMode }: { mode: FinderMode; onMode: (mode: FinderMode) => void }) {
    return (
        <div className={styles.seg} role="group" aria-label="View" aria-keyshortcuts="M">
            {(['flow', 'map'] as const).map((value) => (
                <button
                    key={value}
                    type="button"
                    className={clsx(styles.segButton, mode === value && styles.segOn)}
                    aria-pressed={mode === value}
                    onClick={() => onMode(value)}
                >
                    {value === 'flow' ? 'Flow' : 'Map'}
                </button>
            ))}
        </div>
    )
}

export function DocsLink({ leaf }: { leaf: Leaf }) {
    return (
        <a className={styles.docsLink} href={leaf.docsUrl} target="_blank" rel="noreferrer">
            Read the docs for this pattern
        </a>
    )
}

const PARETO_LC = new Set(PARETO.map((q) => q.lc))

// Pareto first, then the rest, looser fits last; stable within each band.
function organise(leaf: Leaf) {
    const rank = (p: Leaf['problems'][number]) => (p.loose ? 2 : PARETO_LC.has(p.lc) ? 0 : 1)
    return [...leaf.problems].sort((x, y) => rank(x) - rank(y))
}

// Both labels share one grid cell, so the button keeps the width of the longer one in either state.
export function ToggleLabel({ open, show, hide }: { open: boolean; show: string; hide: string }) {
    return (
        <span className={styles.toggleLabel}>
            <span aria-hidden={open} className={open ? styles.toggleHidden : undefined}>{show}</span>
            <span aria-hidden={!open} className={open ? undefined : styles.toggleHidden}>{hide}</span>
        </span>
    )
}

export function CommonProblems({ leaf }: { leaf: Leaf }) {
    const items = organise(leaf)

    return (
        <div className={styles.commonProblems}>
            <h4>Common problems <span>examples, not the full set</span></h4>
            <ul className={styles.cpTiles}>
                {items.map((p) => (
                    <li key={p.lc} className={clsx(styles.cpTile, p.loose && styles.cpLoose)}>
                        <span className={styles.cpNum}>LC {p.lc}{p.loose && '*'}</span>
                        <a href={`https://leetcode.com/problems/${p.slug}/`} target="_blank" rel="noreferrer">{p.name}</a>
                    </li>
                ))}
            </ul>
            {items.some((p) => p.loose) && (
                <p className={styles.commonProblemsNote}>* a looser fit: the pattern works, but most people reach for another one first</p>
            )}
        </div>
    )
}

export function Templates({ leaf }: { leaf: Leaf }) {
    const templates = getTemplates(leaf.id)

    if (templates.length === 0) {
        return (
            <div className={clsx(styles.templates, styles.note)}>
                <p><strong>No template yet</strong> for this pattern variant.</p>
                <p>{leaf.summary}</p>
                    <DocsLink leaf={leaf} />
            </div>
        )
    }

    return (
        <div className={styles.templates}>
            {templates.map((entry, index) => (
                <Tabs key={`${leaf.id}-${index}`} title={entry.title}>
                    {LANGUAGES.map((language) => (
                        <Tabs.Tab key={language} language={language} code={entry.code[language]} />
                    ))}
                </Tabs>
            ))}
            <DocsLink leaf={leaf} />
        </div>
    )
}

function mapStatus(run: FinderRun): ReactNode {
    if (!run.started) return <>No run, <b>clock not started</b></>
    if (run.leaf) return <>Run complete, <b>{run.leaf.name}</b></>
    return <>Run paused, <b>check {run.steps.length + 1}</b></>
}

export function MapStrip({ run, detail }: { run: FinderRun; detail: string }) {
    return (
        <header className={styles.strip}>
            <p className={styles.stripTitle}>Map<span className={styles.stripValue}>{detail}</span></p>
            <div className={styles.stripEnd}>
                <span className={styles.mapStatus} role="status">{mapStatus(run)}</span>
                <ModeSwitch mode={run.mode} onMode={run.setMode} />
            </div>
        </header>
    )
}
