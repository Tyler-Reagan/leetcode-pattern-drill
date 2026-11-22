import styles from './Accordion.module.sass'

import { ReactNode, useState } from 'react'

import AnimateHeight from 'react-animate-height'
import clsx from '@utils/clsx'
import Chevron from '@icons/Chevron'
import { useTocLink } from '@components/TableOfContents/useTocLink'

interface AccordionProps {
    title: string
    children: ReactNode
}

export default function Accordion({ title, children }: AccordionProps) {
    const [isOpen, setIsOpen] = useState(false)
    const height = isOpen ? 'auto' : 0
    const buttonClasses = clsx(
        styles.button,
        isOpen && styles.open
    )

    const handleClick = () => setIsOpen(!isOpen)

    return (
        <div className={styles.accordion}>
            <button type="button" className={buttonClasses} onClick={handleClick} aria-expanded={isOpen}>
                <span>{title}</span>
                <Chevron />
            </button>
            <AnimateHeight
                animateOpacity
                height={height}
                duration={400}
            >
                <div className={styles.content}>{children}</div>
            </AnimateHeight>
        </div>
    )
}

interface AccordionLinkProps {
    href: string
    title: string
    hint?: string
}

// A row that looks like an accordion header but has nothing to expand: it links straight to its section.
export function AccordionLink({ href, title, hint }: AccordionLinkProps) {
    const { isCurrent, onClick } = useTocLink(href)

    return (
        <div className={styles.accordion}>
            <a
                href={href}
                data-toc-link
                className={clsx(styles.button, styles.leaf)}
                aria-current={isCurrent ? 'location' : undefined}
                aria-keyshortcuts={hint}
                onClick={onClick}
            >
                <span>{title}</span>
                {hint && <span className={styles.hint} aria-hidden="true">{hint}</span>}
            </a>
        </div>
    )
}
