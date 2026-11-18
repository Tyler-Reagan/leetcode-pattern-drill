import styles from './patternfinder.module.sass'

import { lazy, Suspense, type ReactNode } from 'react'
import { useMediaQuery } from 'react-responsive'

import type { Leaf, TreeNode } from '@/finder/types'

import clsx from '@utils/clsx'
import PathLog from './PathLog'
import { Kbd, ModeSwitch, Templates } from './shared'
import useFinderRun, { formatClock, type FinderRun } from './useFinderRun'

// React Flow and dagre are heavy and only the Map needs them, so the Map loads on demand.
// Phones get the outline instead and never fetch the chart.
const MapView = lazy(() => import('./MapView'))
const MapOutline = lazy(() => import('./MapOutline'))

type Tone = 'idle' | 'ok' | 'warn' | 'over'

// Same breakpoint as the $phone in patternfinder.module.sass.
const PHONE_QUERY = { maxWidth: 760 }

// Every character of the clock sits in its own fixed cell, so the digits never reflow.
// The first cell is reserved for the overtime sign.
function ClockCells({ text, sign, tone, caption, label }: {
    text: string
    sign: boolean
    tone: Tone
    caption: string
    label: string
}) {
    return (
        <div className={clsx(styles.timer, styles[tone])} role="timer" aria-live="off" aria-label={label}>
            <span className={styles.cells} aria-hidden="true">
                <span className={clsx(styles.cell, styles.signCell)}>{sign ? '+' : ''}</span>
                {text.split('').map((char, index) => (
                    char === ':'
                        ? <span key={index} className={styles.colon}>:</span>
                        : <span key={index} className={styles.cell}>{char}</span>
                ))}
            </span>
            <span className={styles.timerCaption} aria-hidden="true">{caption}</span>
        </div>
    )
}

function RunClock({ run }: { run: FinderRun }) {
    if (!run.started) {
        const text = formatClock(run.budget)
        return <ClockCells text={text} sign={false} tone="idle" caption="budget" label={`Budget ${text}`} />
    }
    if (run.leaf) {
        const text = formatClock(run.elapsedSeconds)
        return (
            <ClockCells
                text={text}
                sign={false}
                tone={run.isOvertime ? 'over' : 'ok'}
                caption="taken"
                label={`Time taken ${text}`}
            />
        )
    }
    if (run.isOvertime) {
        const text = formatClock(run.overSeconds)
        return <ClockCells text={text} sign tone="over" caption="over budget" label={`${text} over budget`} />
    }
    const text = formatClock(run.remainingSeconds)
    return (
        <ClockCells
            text={text}
            sign={false}
            tone={run.isWarn ? 'warn' : 'ok'}
            caption="left"
            label={`${text} left`}
        />
    )
}

// The path on a phone, as a quiet row of dots: a muted dot per answered cue (a button that
// backtracks to that question), one accent dot for where you are, and a dashed tail to a hollow
// end dot. Wider screens get the path log instead.
function StationLine({ run }: { run: FinderRun }) {
    const { started, steps, leaf, node } = run
    const broken = started && !leaf && !node
    const atQuestion = !leaf && !broken

    return (
        <nav className={styles.line} aria-label="Your path so far">
            <ol className={styles.stops}>
                {steps.map((step, index) => (
                    <li key={index} className={clsx(styles.stop, styles.answered)}>
                        <button
                            type="button"
                            className={styles.stopButton}
                            title={`${step.question} ${step.option.cue}`}
                            aria-label={`Back to question ${index + 1}: ${step.question} You picked: ${step.option.cue}`}
                            onClick={() => run.backtrackTo(index)}
                        >
                            <span className={styles.dot} aria-hidden="true" />
                            <span className={styles.cue}>{step.option.cue}</span>
                        </button>
                    </li>
                ))}

                {atQuestion && (
                    <li className={clsx(styles.stop, styles.current, styles.dashedNext)} aria-current="step">
                        <span className={styles.stopInner}>
                            <span className={styles.dot} aria-hidden="true" />
                            <span className={styles.srOnly}>
                                {started ? `Question ${steps.length + 1}, current` : 'Ready to start'}
                            </span>
                        </span>
                    </li>
                )}

                {leaf && (
                    <li className={clsx(styles.stop, styles.reached)} aria-current="step">
                        <span className={styles.stopInner}>
                            <span className={styles.dot} aria-hidden="true" />
                            <span className={styles.srOnly}>Result: {leaf.name}</span>
                        </span>
                    </li>
                )}

                {atQuestion && (
                    <li className={clsx(styles.stop, styles.end)} aria-hidden="true">
                        <span className={styles.stopInner}>
                            <span className={styles.dot} />
                        </span>
                    </li>
                )}

                {broken && (
                    <li className={clsx(styles.stop, styles.fault)} aria-current="step">
                        <span className={styles.stopInner}>
                            <span className={styles.dot} aria-hidden="true" />
                            <span className={styles.srOnly}>This path leads nowhere</span>
                        </span>
                    </li>
                )}
            </ol>
        </nav>
    )
}

function Strip({ label, value, run }: { label: string; value: string; run: FinderRun }) {
    return (
        <header className={styles.strip}>
            <p className={styles.stripTitle}>
                {label}<span className={styles.stripValue}>{value}</span>
            </p>
            <div className={styles.stripEnd}>
                <ModeSwitch mode={run.mode} onMode={run.setMode} />
                <RunClock run={run} />
            </div>
        </header>
    )
}

function Footer({ run }: { run: FinderRun }) {
    return (
        <footer className={styles.footer}>
            {run.started && (run.node || run.leaf) && (
                <button
                    type="button"
                    className={styles.plain}
                    onClick={run.backtrack}
                    disabled={run.steps.length === 0}
                    aria-keyshortcuts="Backspace"
                >
                    Backtrack <Kbd>Bksp</Kbd>
                </button>
            )}
            <button type="button" className={styles.plain} onClick={run.reset} aria-keyshortcuts="Escape">
                Reset <Kbd>Esc</Kbd>
            </button>
        </footer>
    )
}

// Holds the Map's place while its chunk loads, so the switch does not jump.
function MapFallback({ run }: { run: FinderRun }) {
    return (
        <section className={clsx(styles.card, styles.mapFallback)} aria-label="Map" aria-busy="true">
            <header className={styles.strip}>
                <p className={styles.stripTitle}>Map<span className={styles.stripValue}>Loading</span></p>
                <div className={styles.stripEnd}>
                    <ModeSwitch mode={run.mode} onMode={run.setMode} />
                </div>
            </header>
        </section>
    )
}

export default function PatternFinder() {
    const run = useFinderRun()
    const isPhone = useMediaQuery(PHONE_QUERY)

    const renderIdle = () => (
        <>
            <Strip run={run} label="Procedure" value="Ready" />
            <div className={styles.body} key="idle">
                <h2 ref={run.stageRef} tabIndex={-1} className={styles.question}>
                    Name the pattern in {run.budget} seconds
                </h2>
                <p className={styles.lead}>
                    Open the problem, then pick the cue that sounds most like it. Overtime is shown, not enforced.
                </p>
                <div className={styles.actions}>
                    <button type="button" className={styles.primary} onClick={run.start} aria-keyshortcuts="Enter">
                        Start <Kbd>Enter</Kbd>
                    </button>
                </div>
            </div>
        </>
    )

    const renderQuestion = (node: TreeNode) => (
        <>
            <Strip run={run} label="Procedure" value={`Q${run.steps.length + 1}`} />
            <div className={styles.body} key={node.id}>
                <h2 ref={run.stageRef} tabIndex={-1} className={styles.question}>{node.question}</h2>
                <ol className={styles.options}>
                    {node.options.map((option, index) => (
                        <li key={option.cue}>
                            <button
                                type="button"
                                className={styles.option}
                                onClick={() => run.pick(option)}
                                aria-keyshortcuts={index < 9 ? String(index + 1) : undefined}
                            >
                                {index < 9 && <Kbd>{index + 1}</Kbd>}
                                <span className={styles.optionCue}>{option.cue}</span>
                            </button>
                        </li>
                    ))}
                </ol>
            </div>
            <Footer run={run} />
        </>
    )

    const renderLeaf = (leaf: Leaf) => {
        const taken = formatClock(run.elapsedSeconds)

        return (
            <>
                <p className={styles.srOnly} role="status" aria-live="polite">
                    Pattern found: {leaf.name}, {leaf.pattern}. Time taken {taken}.
                </p>
                <Strip run={run} label="Memory item" value="Result" />
                <div className={styles.body} key={leaf.id}>
                    <h2 ref={run.stageRef} tabIndex={-1} className={styles.resultName}>{leaf.name}</h2>
                    <dl className={styles.fields}>
                        <div className={styles.field}>
                            <dt>Pattern</dt>
                            <dd>{leaf.pattern}</dd>
                        </div>
                        <div className={styles.field}>
                            <dt>Time taken</dt>
                            <dd>
                                <span className={styles.figure}>{taken}</span>
                                {run.isOvertime
                                    ? <span className={styles.overNote}>+{formatClock(run.overSeconds)} over the {run.budget}s budget</span>
                                    : <span className={styles.okNote}>within the {run.budget}s budget</span>}
                            </dd>
                        </div>
                    </dl>
                    <p className={styles.summary}>{leaf.summary}</p>
                    <div className={styles.actions}>
                        <button
                            type="button"
                            className={styles.primary}
                            aria-expanded={run.showTemplate}
                            aria-keyshortcuts="T"
                            onClick={run.toggleTemplate}
                        >
                            {run.showTemplate ? 'Hide template' : 'View template'} <Kbd>T</Kbd>
                        </button>
                    </div>
                    {run.showTemplate && <Templates leaf={leaf} />}
                </div>
                <Footer run={run} />
            </>
        )
    }

    const renderBroken = () => (
        <>
            <Strip run={run} label="Procedure" value="Fault" />
            <div className={styles.body} key="broken">
                <h2 ref={run.stageRef} tabIndex={-1} className={styles.question}>This path leads nowhere</h2>
                <p className={styles.lead}>The cue you picked has no next check. Reset and run the procedure again.</p>
            </div>
            <Footer run={run} />
        </>
    )

    let stage: ReactNode
    if (!run.started) stage = renderIdle()
    else if (run.leaf) stage = renderLeaf(run.leaf)
    else if (run.node) stage = renderQuestion(run.node)
    else stage = renderBroken()

    if (run.mode === 'map') {
        return (
            <div className={clsx(styles.finder, styles.mapMode)}>
                <Suspense fallback={<MapFallback run={run} />}>
                    {isPhone ? <MapOutline run={run} /> : <MapView run={run} />}
                </Suspense>
            </div>
        )
    }

    return (
        <div className={styles.finder}>
            {isPhone ? <StationLine run={run} /> : <PathLog run={run} />}
            <section className={styles.card} aria-label="Procedure">
                {stage}
            </section>
        </div>
    )
}
