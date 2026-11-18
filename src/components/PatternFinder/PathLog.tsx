import styles from './patternfinder.module.sass'

import { tree } from '@/finder/tree'

import clsx from '@utils/clsx'
import type { FinderRun } from './useFinderRun'

const pad = (n: number) => String(n).padStart(2, '0')

export default function PathLog({ run }: { run: FinderRun }) {
    const { started, steps, leaf, node } = run
    const at = steps.length + 1
    const broken = started && !leaf && !node

    return (
        <nav className={styles.log} aria-label="Your path so far">
            <header className={styles.logHead}>
                <p className={styles.stripTitle}>
                    Path log<span className={styles.stripValue}>{steps.length} answered</span>
                </p>
                <p className={styles.logHint}>
                    {steps.length > 0 ? 'Click a step to go back to that check.' : 'Each answer is written here as you go.'}
                </p>
            </header>

            <ol className={styles.logRows}>
                {steps.map((step, index) => (
                    <li key={index}>
                        <button
                            type="button"
                            className={styles.row}
                            aria-label={`Back to question ${index + 1}: ${step.question} You picked: ${step.option.cue}`}
                            onClick={() => run.backtrackTo(index)}
                        >
                            <span className={styles.rowNum} aria-hidden="true">{pad(index + 1)}</span>
                            <span className={styles.rowText}>
                                <span className={styles.rowQuestion}>{step.question}</span>
                                <span className={styles.rowCue}>{step.option.cue}</span>
                            </span>
                            <span className={styles.rowBack} aria-hidden="true">Back</span>
                        </button>
                    </li>
                ))}

                {!started && (
                    <li>
                        <div className={clsx(styles.row, styles.rowReady)}>
                            <span className={styles.rowNum} aria-hidden="true">01</span>
                            <span className={styles.rowText}>
                                <span className={styles.rowQuestion}>Ready</span>
                                <span className={styles.rowLive}>{tree.nodes[tree.rootId].question}</span>
                            </span>
                        </div>
                    </li>
                )}

                {started && node && (
                    <li aria-current="step">
                        <div className={clsx(styles.row, styles.rowCurrent)}>
                            <span className={styles.rowNum} aria-hidden="true">{pad(at)}</span>
                            <span className={styles.rowText}>
                                <span className={styles.rowQuestion}>Now, check {at}</span>
                                <span className={styles.rowLive}>{node.question}</span>
                            </span>
                        </div>
                    </li>
                )}

                {leaf && (
                    <li aria-current="step">
                        <div className={clsx(styles.row, styles.rowResult)}>
                            <span className={styles.rowNum} aria-hidden="true">=</span>
                            <span className={styles.rowText}>
                                <span className={styles.rowQuestion}>Result, {leaf.pattern}</span>
                                <span className={styles.rowLive}>{leaf.name}</span>
                            </span>
                        </div>
                    </li>
                )}

                {broken && (
                    <li aria-current="step">
                        <div className={clsx(styles.row, styles.rowFault)}>
                            <span className={styles.rowNum} aria-hidden="true">!</span>
                            <span className={styles.rowText}>
                                <span className={styles.rowQuestion}>Fault</span>
                                <span className={styles.rowLive}>This path leads nowhere</span>
                            </span>
                        </div>
                    </li>
                )}

                {!leaf && !broken && (
                    <li className={styles.nextWrap} aria-hidden="true">
                        <div className={styles.nextCheck}>
                            <span className={clsx(styles.rowNum, styles.rowNumDashed)}>{pad(at + 1)}</span>
                            <span className={styles.nextLabel}>Next check appears here</span>
                        </div>
                    </li>
                )}
            </ol>
        </nav>
    )
}
