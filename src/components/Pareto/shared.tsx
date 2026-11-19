import styles from './pareto.module.sass'

import clsx from '@utils/clsx'
import type { Difficulty } from '@/pareto/problems'

export const LEDE =
    'A curated list of LeetCode and data structure/algorithm problems designed around the 80/20 rule, ' +
    'focusing on high-impact topics that deliver 90–95% of the results needed for software engineering coding interviews.'

export const CREDIT = 'Credit to Aman Manazir for coming up with this list.'

export function ExternalIcon() {
    return (
        <svg className={styles.ext} viewBox="0 0 12 12" aria-hidden="true">
            <path d="M4.5 2.5h5v5M9.5 2.5 3 9" />
        </svg>
    )
}

const PIPS: Record<Difficulty, number> = { Easy: 1, Medium: 2, Hard: 3 }

export function Diff({ d, label = true }: { d: Difficulty, label?: boolean }) {
    return (
        <span className={clsx(styles.diff, styles[d.toLowerCase() as 'easy' | 'medium' | 'hard'])}>
            <span className={styles.pips} aria-hidden="true">
                {[1, 2, 3].map((i) => <span key={i} className={clsx(styles.pip, i <= PIPS[d] && styles.pipOn)} />)}
            </span>
            <span className={label ? styles.diffLabel : styles.srOnly}>{d}</span>
        </span>
    )
}
