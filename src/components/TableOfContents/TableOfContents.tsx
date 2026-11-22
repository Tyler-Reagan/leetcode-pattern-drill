import Accordion, { AccordionLink } from '@components/Accordion/Accordion'
import LinkWithTooltip from '@components/LinkWithTooltip/LinkWithTooltip'

export interface TocLink {
    href: string
    label: string
}

// An entry with `links` is an expandable group; an entry with `href` is a single row that jumps to its
// section. `hint` is an optional keyboard-shortcut label shown on a row.
export interface TocEntry {
    title: string
    links?: TocLink[]
    href?: string
    hint?: string
}

interface TableOfContentsProps {
    entries: TocEntry[]
}

// One table of contents for every view with a sidebar: the Reference and the Pareto Set share its
// markup, behaviour and styling, and differ only in the entries they pass.
export default function TableOfContents({ entries }: TableOfContentsProps) {
    return (
        <>
            {entries.map((entry) => entry.links ? (
                <Accordion key={entry.title} title={entry.title}>
                    {entry.links.map((link) => (
                        <LinkWithTooltip key={link.href} href={link.href} description={link.label} />
                    ))}
                </Accordion>
            ) : entry.href ? (
                <AccordionLink key={entry.href} href={entry.href} title={entry.title} hint={entry.hint} />
            ) : null)}
        </>
    )
}
