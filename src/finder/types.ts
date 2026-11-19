export type Language = 'python' | 'javascript' | 'java' | 'cpp'

/** One cue the user can pick. `next` is the id of a TreeNode or a Leaf. */
export interface FinderOption {
    cue: string
    next: string
}

export interface TreeNode {
    id: string
    question: string
    options: FinderOption[]
}

/** A well-known problem that uses a leaf's pattern. Examples to practise on, never a complete list. */
export interface LeafProblem {
    lc: number
    name: string
    /** leetcode.com/problems/<slug> */
    slug: string
    /** A looser fit: the pattern works, but most people reach for another one first. */
    loose?: boolean
}

export interface Leaf {
    id: string
    name: string
    pattern: string
    summary: string
    docsUrl: string
    problems: LeafProblem[]
    /** Ids understood by getTemplates(); empty means "no template yet". */
    templateIds: string[]
}

export interface FinderTree {
    rootId: string
    nodes: Record<string, TreeNode>
    leaves: Record<string, Leaf>
}

export interface TemplateEntry {
    title: string
    code: Record<Language, string>
}
