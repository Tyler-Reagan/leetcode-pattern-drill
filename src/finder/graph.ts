// The tree is a DAG: several options can lead to the same node, so an edge is stored once per
// source and target pair while `parents` keeps every option.
import dagre from '@dagrejs/dagre'

import { edgeKey } from './path'
import { tree } from './tree'

export const QUESTION_WIDTH = 236
export const QUESTION_HEIGHT = 66
export const LEAF_WIDTH = 216
export const LEAF_HEIGHT = 50

export interface GraphNode {
    id: string
    kind: 'question' | 'leaf'
    label: string
    pattern: string
    /** Top-left corner: dagre gives centres, React Flow wants corners. */
    x: number
    y: number
    width: number
    height: number
}

export interface GraphEdge {
    id: string
    source: string
    target: string
}

export interface Parent {
    from: string
    index: number
}

export interface FinderGraph {
    nodes: GraphNode[]
    edges: GraphEdge[]
    parents: Record<string, Parent[]>
}

let cached: FinderGraph | undefined

export function buildGraph(): FinderGraph {
    if (cached) return cached

    const sizes = new Map<string, { width: number; height: number }>()
    const graph = new dagre.graphlib.Graph()
    graph.setGraph({ rankdir: 'LR', nodesep: 10, ranksep: 64, marginx: 24, marginy: 24 })
    graph.setDefaultEdgeLabel(() => ({}))

    for (const id of Object.keys(tree.nodes)) {
        sizes.set(id, { width: QUESTION_WIDTH, height: QUESTION_HEIGHT })
        graph.setNode(id, { width: QUESTION_WIDTH, height: QUESTION_HEIGHT })
    }
    for (const id of Object.keys(tree.leaves)) {
        sizes.set(id, { width: LEAF_WIDTH, height: LEAF_HEIGHT })
        graph.setNode(id, { width: LEAF_WIDTH, height: LEAF_HEIGHT })
    }

    const edges: GraphEdge[] = []
    const parents: Record<string, Parent[]> = {}
    const seen = new Set<string>()
    for (const node of Object.values(tree.nodes)) {
        node.options.forEach((option, index) => {
            parents[option.next] = [...(parents[option.next] ?? []), { from: node.id, index }]
            const id = edgeKey(node.id, option.next)
            if (seen.has(id)) return
            seen.add(id)
            graph.setEdge(node.id, option.next)
            edges.push({ id, source: node.id, target: option.next })
        })
    }

    dagre.layout(graph)

    const nodes: GraphNode[] = []
    const place = (id: string, kind: GraphNode['kind'], label: string, pattern: string) => {
        const { width, height } = sizes.get(id)!
        const spot = graph.node(id)
        nodes.push({ id, kind, label, pattern, x: spot.x - width / 2, y: spot.y - height / 2, width, height })
    }
    for (const node of Object.values(tree.nodes)) place(node.id, 'question', node.question, '')
    for (const leaf of Object.values(tree.leaves)) place(leaf.id, 'leaf', leaf.name, leaf.pattern)

    cached = { nodes, edges, parents }
    return cached
}
