import type { TocEntry } from '@components/TableOfContents/TableOfContents'
import { PATTERNS } from '@/pareto/problems'
import { sectionId } from '@components/Pareto/shared'

// Keys 1-9 then 0 jump to a pattern (see Pareto).
const KEYS = '1234567890'

export const PARETO_TOC: TocEntry[] = PATTERNS.map((p, n) => ({
    title: p.name,
    href: `#${sectionId(p.id)}`,
    hint: KEYS[n],
}))
