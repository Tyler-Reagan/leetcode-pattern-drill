import styles from './map.module.sass'

import { useEffect, useMemo, useState } from 'react'

import { runPath, type RunPath } from '@/finder/path'
import { tree } from '@/finder/tree'
import type { Leaf } from '@/finder/types'

import clsx from '@utils/clsx'
import { MapStrip, Templates } from './shared'
import type { FinderRun, Step } from './useFinderRun'

// The tree is a DAG: a question or pattern can be reached from several options. Each id is
// written out in full once, at its "home" option; every other option that leads to it gets a
// short "see above" button, so the outline stays about as long as the tree has nodes. A node on
// the run's path is always at home on the path, so the path reads as one unbroken trail.
const optionKey = (from: string, index: number) => `${from}#${index}`
const anchorId = (id: string) => `outline-${id}`

function findHomes(path: RunPath, steps: Step[]) {
    const homes = new Map<string, string>([[tree.rootId, '']])
    steps.forEach((step, index) => {
        const from = path.ids[index]
        const at = tree.nodes[from].options.findIndex((option) => option.cue === step.option.cue)
        homes.set(step.option.next, optionKey(from, at))
    })

    const visited = new Set<string>()
    const visit = (id: string) => {
        const node = tree.nodes[id]
        if (!node || visited.has(id)) return
        visited.add(id)
        node.options.forEach((option, index) => {
            const key = optionKey(id, index)
            if (!homes.has(option.next)) homes.set(option.next, key)
            if (homes.get(option.next) === key) visit(option.next)
        })
    }
    visit(tree.rootId)
    return homes
}

// Open every details element around the target, then bring it into view and focus its summary.
function revealOutline(id: string) {
    const target = document.getElementById(anchorId(id))
    if (!target) return
    for (let el: Element | null = target; el; el = el.parentElement) {
        if (el instanceof HTMLDetailsElement) el.open = true
    }
    const summary = target.querySelector('summary')
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    target.scrollIntoView({ block: 'center', behavior: reduced ? 'auto' : 'smooth' })
    summary?.focus({ preventScroll: true })
}

interface ItemProps {
    id: string
    via: string
    depth: number
    path: RunPath
    homes: Map<string, string>
    chosen: Record<string, number>
}

function LeafItem({ leaf, onPath, current }: { leaf: Leaf; onPath: boolean; current: boolean }) {
    const [open, setOpen] = useState(current)

    return (
        <li id={anchorId(leaf.id)} className={clsx(styles.olLeaf, onPath && styles.olOnPath, current && styles.olCurrent)}>
            <details open={open} onToggle={(event) => setOpen(event.currentTarget.open)}>
                <summary>
                    <span>{leaf.name} <span className={styles.olPattern}>{leaf.pattern}</span></span>
                </summary>
                {/* Templates carry highlighted code, so they mount only while their leaf is open. */}
                {open && (
                    <div className={styles.olLeafBody}>
                        <p>{leaf.summary}</p>
                        <Templates leaf={leaf} />
                    </div>
                )}
            </details>
        </li>
    )
}

function Item({ id, via, depth, path, homes, chosen }: ItemProps) {
    const onPath = path.ids.includes(id)
    const current = path.currentId === id
    const leaf = tree.leaves[id]
    const label = leaf ? leaf.name : tree.nodes[id].question

    if (homes.get(id) !== via) {
        return (
            <li className={styles.olRef}>
                <button type="button" onClick={() => revealOutline(id)}>
                    <span className={styles.olRefLabel}>{label}</span>
                    <span className={styles.olRefHint}>See above</span>
                </button>
            </li>
        )
    }

    if (leaf) return <LeafItem leaf={leaf} onPath={onPath} current={current} />

    const node = tree.nodes[id]
    return (
        <li id={anchorId(id)} className={clsx(styles.olQuestion, onPath && styles.olOnPath, current && styles.olCurrent)}>
            <details open={depth === 0 || onPath}>
                <summary>{node.question}</summary>
                <ol className={styles.outline}>
                    {node.options.map((option, index) => (
                        <li key={option.cue} className={clsx(styles.olOption, chosen[id] === index && styles.olChosen)}>
                            <span className={styles.olCue}>{index + 1}. {option.cue}</span>
                            <ul className={styles.outline}>
                                <Item
                                    id={option.next}
                                    via={optionKey(id, index)}
                                    depth={depth + 1}
                                    path={path}
                                    homes={homes}
                                    chosen={chosen}
                                />
                            </ul>
                        </li>
                    ))}
                </ol>
            </details>
        </li>
    )
}

// Map mode on a phone: the same tree as a collapsible, indented outline instead of a chart.
// The path starts open; everything else is a tap away.
export default function MapOutline({ run }: { run: FinderRun }) {
    const { stageRef } = run
    const path = useMemo(() => runPath(run.started, run.steps), [run.started, run.steps])
    const homes = useMemo(() => findHomes(path, run.steps), [path, run.steps])
    const chosen = useMemo(() => {
        const picks: Record<string, number> = {}
        run.steps.forEach((step, index) => {
            picks[path.ids[index]] = tree.nodes[path.ids[index]].options.findIndex((option) => option.cue === step.option.cue)
        })
        return picks
    }, [run.steps, path])

    useEffect(() => {
        stageRef.current?.focus()
    }, [stageRef])

    return (
        <section className={styles.shell} aria-label="Map outline">
            <MapStrip run={run} detail="Outline" />
            <h2 ref={stageRef} tabIndex={-1} className={styles.srOnly}>Outline of every check and pattern</h2>
            <div className={styles.outlineWrap}>
                <ul className={styles.outline}>
                    <Item id={tree.rootId} via="" depth={0} path={path} homes={homes} chosen={chosen} />
                </ul>
            </div>
        </section>
    )
}
