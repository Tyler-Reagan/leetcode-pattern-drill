import styles from './map.module.sass'

import { useCallback, useEffect, useMemo, useRef, useState } from 'react'

import { buildGraph } from '@/finder/graph'
import { runPath } from '@/finder/path'
import { tree } from '@/finder/tree'
import { getTemplates } from '@/finder/templates'
import type { Leaf, TreeNode } from '@/finder/types'

import MapCanvas, { type MapCanvasHandle } from './MapCanvas'
import { Kbd, MapStrip, Templates } from './shared'
import type { FinderRun } from './useFinderRun'

type Go = (id: string) => void

// One option's destination, as a link that inspects (and pans the map to) that node.
function Target({ id, go }: { id: string; go: Go }) {
    const leaf = tree.leaves[id]
    if (leaf) {
        return <button type="button" className={`${styles.insLink} ${styles.insLeafLink}`} onClick={() => go(id)}>{leaf.name}</button>
    }
    return <button type="button" className={styles.insLink} onClick={() => go(id)}>{tree.nodes[id].question}</button>
}

function ReachedFrom({ id, go }: { id: string; go: Go }) {
    const parents = buildGraph().parents[id] ?? []
    if (parents.length === 0) return null

    return (
        <div>
            <p className={styles.label}>Reached from</p>
            <ul className={styles.parents}>
                {parents.map((parent) => (
                    <li key={`${parent.from}-${parent.index}`}>
                        <button type="button" className={styles.insLink} onClick={() => go(parent.from)}>
                            {tree.nodes[parent.from].question}
                        </button>
                        <span className={styles.parentCue}>{' '}&ldquo;{tree.nodes[parent.from].options[parent.index].cue}&rdquo;</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

function QuestionBody({ node, run, go }: { node: TreeNode; run: FinderRun; go: Go }) {
    const path = runPath(run.started, run.steps)
    const step = path.stepOf[node.id] ? run.steps[path.stepOf[node.id] - 1] : undefined
    const chosen = step ? node.options.findIndex((option) => option.cue === step.option.cue) : -1

    return (
        <>
            <h3 className={styles.insTitle}>{node.question}</h3>
            {path.currentId === node.id && <p className={styles.insNote}><b>Your run is paused here.</b> Switch back to Flow to answer.</p>}
            {chosen >= 0 && <p className={styles.insNote}>On your path: you picked option {chosen + 1}.</p>}
            <div>
                <p className={styles.label}>{node.options.length} options</p>
                <ol className={styles.insOptions}>
                    {node.options.map((option, index) => (
                        <li key={option.cue} className={index === chosen ? styles.insChosen : undefined}>
                            <Kbd>{index + 1}</Kbd>
                            <div>
                                <div className={styles.insCue}>{option.cue}</div>
                                <div className={styles.insTo}>
                                    <span aria-hidden="true">&rarr;</span>
                                    <Target id={option.next} go={go} />
                                </div>
                            </div>
                        </li>
                    ))}
                </ol>
            </div>
            <ReachedFrom id={node.id} go={go} />
        </>
    )
}

function LeafBody({ leaf, run, go }: { leaf: Leaf; run: FinderRun; go: Go }) {
    const path = runPath(run.started, run.steps)
    // With no template the fallback already repeats the summary, so show it only once.
    const hasTemplates = getTemplates(leaf.id).length > 0

    return (
        <>
            <h3 className={`${styles.insTitle} ${styles.insTitleLeaf}`}>{leaf.name}</h3>
            {path.currentId === leaf.id && <p className={styles.insNote}><b>Your run ended here.</b></p>}
            <dl className={styles.insField}>
                <dt>Pattern</dt>
                <dd>{leaf.pattern}</dd>
            </dl>
            {hasTemplates && <p className={styles.insSummary}>{leaf.summary}</p>}
            <Templates leaf={leaf} />
            <ReachedFrom id={leaf.id} go={go} />
        </>
    )
}

// Read-only look at any check or pattern. No clock: nothing here answers a question.
function Inspect({ id, run, go }: { id: string; run: FinderRun; go: Go }) {
    const ref = useRef<HTMLElement>(null)
    const node = tree.nodes[id]
    const leaf = tree.leaves[id]

    useEffect(() => {
        ref.current?.scrollTo({ top: 0 })
    }, [id])

    return (
        <aside className={styles.inspect} aria-label="Inspect" ref={ref}>
            <div className={styles.insHead}>
                <span className={styles.insHeadTitle}>Inspect</span>
                <span className={styles.label}>{node ? 'Check' : 'Pattern'}</span>
            </div>
            <div className={styles.insBody} key={id}>
                {node && <QuestionBody node={node} run={run} go={go} />}
                {leaf && <LeafBody leaf={leaf} run={run} go={go} />}
            </div>
        </aside>
    )
}

// Map mode on a desktop: the whole tree as a pannable, zoomable chart and an inspect panel.
// The run is kept as it was; only its clock is paused (see useFinderRun).
export default function MapView({ run }: { run: FinderRun }) {
    const canvas = useRef<MapCanvasHandle>(null)
    const path = useMemo(() => runPath(run.started, run.steps), [run.started, run.steps])
    const [inspectedId, setInspectedId] = useState(() => path.currentId ?? tree.rootId)
    const { stageRef } = run

    useEffect(() => {
        stageRef.current?.focus()
    }, [stageRef])

    const inspect = useCallback((id: string) => setInspectedId(id), [])
    const go = useCallback((id: string) => {
        setInspectedId(id)
        canvas.current?.panTo(id)
    }, [])

    return (
        <section className={styles.shell} aria-label="Map">
            <MapStrip run={run} detail={`${Object.keys(tree.nodes).length} checks, ${Object.keys(tree.leaves).length} patterns`} />
            <h2 ref={stageRef} tabIndex={-1} className={styles.srOnly}>Map of every check and pattern</h2>
            <div className={styles.body}>
                <div className={styles.canvas}>
                    <MapCanvas ref={canvas} path={path} inspectedId={inspectedId} onInspect={inspect} />
                </div>
                <Inspect id={inspectedId} run={run} go={go} />
            </div>
        </section>
    )
}
