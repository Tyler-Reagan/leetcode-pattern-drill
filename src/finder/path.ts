// Kept apart from graph.ts so the phone outline does not pull in dagre.
import { tree } from './tree'

export const edgeKey = (source: string, target: string) => `${source}>${target}`

export interface RunPath {
    ids: string[]
    edgeKeys: Set<string>
    /** 1-based step number of every answered question. */
    stepOf: Record<string, number>
    /** Null before the run starts. */
    currentId: string | null
}

export const pickedIndex = (questionId: string, step: { option: { cue: string } }) =>
    tree.nodes[questionId].options.findIndex((option) => option.cue === step.option.cue)

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
