import styles from './patternfinder.module.sass'

import type { ReactNode } from 'react'

import { getTemplates } from '@/finder/templates'
import type { Leaf } from '@/finder/types'

import clsx from '@utils/clsx'
import Tabs from '@components/Tabs/Tabs'
import { LANGUAGES } from '@components/Language/LanguageProvider'
import type { FinderMode, FinderRun } from './useFinderRun'

// Pieces the Flow card and the Map views both draw, kept apart from PatternFinder.tsx so the
// lazy-loaded map can import them without importing the card that loads it.

export function Kbd({ children }: { children: ReactNode }) {
    return <kbd className={styles.kbd} aria-hidden="true">{children}</kbd>
}

// Flow | Map. Both buttons stay in the tab order; aria-pressed carries the state.
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

// The Map has no clock; this muted line says where the paused run stands instead.
function mapStatus(run: FinderRun): ReactNode {
    if (!run.started) return <>No run, <b>clock not started</b></>
    if (run.leaf) return <>Run complete, <b>{run.leaf.name}</b></>
    return <>Run paused, <b>check {run.steps.length + 1}</b></>
}

// The card strip both Map views open with: title and size, run status, the Flow | Map switch.
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
