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

export interface Leaf {
    id: string
    name: string
    pattern: string
    summary: string
    docsUrl: string
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
