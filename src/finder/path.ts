/**
 * The route a run has taken through the tree, for the Map views to highlight. Pure data, kept
 * apart from graph.ts so the phone outline does not pull in the dagre layout.
 */
import { tree } from './tree'

export const edgeKey = (source: string, target: string) => `${source}>${target}`

/** The route a run has taken: ids from the root to where it stands, and the edges between them. */
export interface RunPath {
    /** Root first, current stop last. Empty before the run starts. */
    ids: string[]
    edgeKeys: Set<string>
    /** 1-based step number of every question that has been answered. */
    stepOf: Record<string, number>
    /** The question or pattern the run is at, or null before it starts. */
    currentId: string | null
}

export function runPath(started: boolean, steps: { option: { next: string } }[]): RunPath {
    if (!started) return { ids: [], edgeKeys: new Set(), stepOf: {}, currentId: null }

    const ids = [tree.rootId, ...steps.map((step) => step.option.next)]
    const edgeKeys = new Set<string>()
    const stepOf: Record<string, number> = {}
    steps.forEach((step, index) => {
        edgeKeys.add(edgeKey(ids[index], step.option.next))
        stepOf[ids[index]] = index + 1
    })
    return { ids, edgeKeys, stepOf, currentId: ids[ids.length - 1] }
}
