import styles from './patternfinder.module.sass'

import { useEffect, useRef, useState } from 'react'

import { tree } from '@/finder/tree'
import { getTemplates } from '@/finder/templates'
import type { FinderOption, Leaf, TreeNode } from '@/finder/types'

import clsx from '@utils/clsx'
import Tabs from '@components/Tabs/Tabs'
import { LANGUAGES } from '@components/Language/LanguageProvider'
import useCountdown from './useCountdown'

const BUDGET_SECONDS = 30
const WARN_SECONDS = 10

interface Step {
    question: string
    option: FinderOption
}

const pad = (n: number) => String(n).padStart(2, '0')

function formatClock(totalSeconds: number) {
    const seconds = Math.max(0, totalSeconds)
    return `${Math.floor(seconds / 60)}:${pad(seconds % 60)}`
}

export default function PatternFinder() {
    const clock = useCountdown(BUDGET_SECONDS * 1000)
    const [started, setStarted] = useState(false)
    const [steps, setSteps] = useState<Step[]>([])
    const [showTemplate, setShowTemplate] = useState(false)
    const stageRef = useRef<HTMLHeadingElement>(null)

    const currentId = steps.length > 0 ? steps[steps.length - 1].option.next : tree.rootId
    const leaf: Leaf | undefined = started ? tree.leaves[currentId] : undefined
    const node: TreeNode | undefined = started ? tree.nodes[currentId] : undefined

    // Option buttons unmount on every step, so hand focus to the new heading.
    useEffect(() => {
        stageRef.current?.focus()
    }, [started, currentId])

    const handleStart = () => {
        setStarted(true)
        clock.start()
    }
    const handlePick = (option: FinderOption) => {
        if (!node) return
        setSteps([...steps, { question: node.question, option }])
        if (tree.leaves[option.next]) clock.stop()
    }
    const handleBacktrack = () => {
        if (steps.length === 0) return
        setSteps(steps.slice(0, -1))
        setShowTemplate(false)
        if (leaf) clock.resume()
    }
    const handleReset = () => {
        clock.reset()
        setStarted(false)
        setSteps([])
        setShowTemplate(false)
    }

    const elapsedClock = formatClock(Math.floor(clock.elapsedMs / 1000))
    const overSeconds = Math.floor(clock.overtimeMs / 1000)

    const renderTimer = () => {
        const seconds = Math.ceil(clock.remainingMs / 1000)
        const state = clock.isOvertime ? 'over' : seconds <= WARN_SECONDS ? 'warn' : 'ok'
        const classes = clsx(
            styles.timer,
            state === 'warn' && styles.warn,
            state === 'over' && styles.over
        )

        return (
            <div className={classes} role="timer" aria-live="off" aria-label="Time on the clock">
                <span className={styles.timerValue}>
                    {clock.isOvertime ? `+${formatClock(overSeconds)}` : formatClock(seconds)}
                </span>
                <span className={styles.timerCaption}>{clock.isOvertime ? 'over budget' : 'left'}</span>
            </div>
        )
    }

    const renderBreadcrumb = () => {
        if (steps.length === 0) return null

        return (
            <nav aria-label="Your path so far">
                <ol className={styles.breadcrumb}>
                    {steps.map((step, index) => (
                        <li key={index} className={styles.crumb} title={step.question}>
                            {step.option.cue}
                        </li>
                    ))}
                </ol>
            </nav>
        )
    }

    const renderIdle = () => (
        <section className={styles.card}>
            <h2 ref={stageRef} tabIndex={-1} className={styles.heading}>Pattern Finder</h2>
            <p className={styles.lead}>
                Read the problem, then pick the cue that sounds most like it. Each answer narrows
                the field until you land on one pattern variant. You have {BUDGET_SECONDS} seconds.
            </p>
            <div className={styles.actions}>
                <button className={clsx(styles.button, styles.primary)} onClick={handleStart}>
                    Start
                </button>
            </div>
        </section>
    )

    const renderQuestion = (current: TreeNode) => (
        <section className={styles.card}>
            <div className={styles.topRow}>
                <span className={styles.step}>Question {steps.length + 1}</span>
                {renderTimer()}
            </div>
            {renderBreadcrumb()}
            <h2 ref={stageRef} tabIndex={-1} className={styles.heading}>{current.question}</h2>
            <ul className={styles.options}>
                {current.options.map((option) => (
                    <li key={option.cue}>
                        <button className={styles.cue} onClick={() => handlePick(option)}>
                            {option.cue}
                        </button>
                    </li>
                ))}
            </ul>
            <div className={styles.actions}>
                <button className={styles.button} onClick={handleBacktrack} disabled={steps.length === 0}>
                    Backtrack
                </button>
                <button className={styles.button} onClick={handleReset}>Reset</button>
            </div>
        </section>
    )

    const renderDocsLink = (current: Leaf) => (
        <a className={styles.docsLink} href={current.docsUrl} target="_blank" rel="noreferrer">
            Read the docs for this pattern
        </a>
    )

    const renderTemplates = (current: Leaf) => {
        const templates = getTemplates(current.id)

        if (templates.length === 0) {
            return (
                <div className={styles.note}>
                    <p><strong>No template yet</strong> for this pattern variant.</p>
                    <p>{current.summary}</p>
                    {renderDocsLink(current)}
                </div>
            )
        }

        return (
            <div className={styles.templates}>
                {templates.map((entry, index) => (
                    <Tabs key={`${current.id}-${index}`} title={entry.title}>
                        {LANGUAGES.map((language) => (
                            <Tabs.Tab key={language} language={language} code={entry.code[language]} />
                        ))}
                    </Tabs>
                ))}
                {renderDocsLink(current)}
            </div>
        )
    }

    const renderTimeTaken = () => (
        <p className={clsx(styles.taken, clock.isOvertime && styles.takenOver)}>
            Time taken <strong>{elapsedClock}</strong>
            {clock.isOvertime
                ? ` (+${formatClock(overSeconds)} over the ${BUDGET_SECONDS}s budget)`
                : ` (within the ${BUDGET_SECONDS}s budget)`}
        </p>
    )

    const renderLeaf = (current: Leaf) => (
        <section className={styles.card}>
            <p className={styles.srOnly} role="status" aria-live="polite">
                Pattern found: {current.name}, {current.pattern}. Time taken {elapsedClock}.
            </p>
            {renderBreadcrumb()}
            <p className={styles.patternLabel}>{current.pattern}</p>
            <h2 ref={stageRef} tabIndex={-1} className={styles.heading}>{current.name}</h2>
            <p className={styles.lead}>{current.summary}</p>
            {renderTimeTaken()}
            <div className={styles.actions}>
                <button className={styles.button} onClick={handleReset}>Reset</button>
                <button className={styles.button} onClick={handleBacktrack}>Backtrack</button>
                <button
                    className={clsx(styles.button, styles.primary)}
                    aria-expanded={showTemplate}
                    onClick={() => setShowTemplate(!showTemplate)}
                >
                    {showTemplate ? 'Hide template' : 'View template'}
                </button>
            </div>
            {showTemplate && renderTemplates(current)}
        </section>
    )

    const renderBroken = () => (
        <section className={styles.card}>
            <h2 ref={stageRef} tabIndex={-1} className={styles.heading}>Something went wrong</h2>
            <p className={styles.lead}>This path leads nowhere. Reset and try again.</p>
            <div className={styles.actions}>
                <button className={styles.button} onClick={handleReset}>Reset</button>
            </div>
        </section>
    )

    const renderStage = () => {
        if (!started) return renderIdle()
        if (leaf) return renderLeaf(leaf)
        if (node) return renderQuestion(node)
        return renderBroken()
    }

    return <div className={styles.finder}>{renderStage()}</div>
}
