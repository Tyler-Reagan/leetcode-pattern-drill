import styles from './map.module.sass'
import '@xyflow/react/dist/base.css'

import { useImperativeHandle, useMemo, type Ref } from 'react'
import {
    Controls,
    Handle,
    Panel,
    Position,
    ReactFlow,
    ReactFlowProvider,
    useReactFlow,
    type Edge,
    type Node,
    type NodeProps,
} from '@xyflow/react'

import { buildGraph } from '@/finder/graph'
import { tree } from '@/finder/tree'
import type { RunPath } from '@/finder/path'

import clsx from '@utils/clsx'

type NodeState = 'idle' | 'path' | 'current'

interface MapNodeData extends Record<string, unknown> {
    id: string
    kind: 'question' | 'leaf'
    label: string
    tag: string
    state: NodeState
    inspected: boolean
    onInspect: (id: string) => void
}

type MapNodeType = Node<MapNodeData, 'question' | 'leaf'>

// The button inside is the keyboard way in: React Flow's own node selection never fires onNodeClick.
function MapNode({ data }: NodeProps<MapNodeType>) {
    const isLeaf = data.kind === 'leaf'
    const where = isLeaf ? 'pattern' : 'check'

    return (
        <div
            className={clsx(
                styles.node,
                isLeaf && styles.leaf,
                data.state === 'path' && styles.onPath,
                data.state === 'current' && styles.current,
                data.inspected && styles.inspected,
            )}
        >
            <Handle type="target" position={Position.Left} isConnectable={false} className={styles.handle} />
            <button
                type="button"
                className={styles.nodeButton}
                aria-pressed={data.inspected}
                aria-label={`Inspect ${where}: ${data.label}`}
                onClick={() => data.onInspect(data.id)}
            >
                <span className={styles.nodeTag}>{data.tag}</span>
                <span className={styles.nodeText}>{data.label}</span>
            </button>
            {!isLeaf && <Handle type="source" position={Position.Right} isConnectable={false} className={styles.handle} />}
        </div>
    )
}

const nodeTypes = { question: MapNode, leaf: MapNode }

export interface MapCanvasHandle {
    panTo: (id: string) => void
}

interface MapCanvasProps {
    path: RunPath
    inspectedId: string
    onInspect: (id: string) => void
    ref?: Ref<MapCanvasHandle>
}

function prefersReducedMotion() {
    return typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

function Chart({ path, inspectedId, onInspect, ref }: MapCanvasProps) {
    const { fitView } = useReactFlow()
    const graph = useMemo(() => buildGraph(), [])

    useImperativeHandle(ref, () => ({
        panTo: (id) => {
            fitView({ nodes: [{ id }], maxZoom: 1.1, duration: prefersReducedMotion() ? 0 : 300 })
        },
    }), [fitView])

    const onPath = useMemo(() => new Set(path.ids), [path.ids])

    const nodes = useMemo<MapNodeType[]>(() => graph.nodes.map((n) => {
        const isCurrent = path.currentId === n.id
        const state: NodeState = isCurrent ? 'current' : onPath.has(n.id) ? 'path' : 'idle'
        const step = path.stepOf[n.id]
        let tag: string
        if (n.kind === 'leaf') tag = isCurrent ? 'Result' : n.pattern
        else if (isCurrent) tag = `Now, check ${path.ids.length}`
        else tag = step ? `Step ${step}` : 'Check'

        return {
            id: n.id,
            type: n.kind,
            position: { x: n.x, y: n.y },
            width: n.width,
            height: n.height,
            draggable: false,
            connectable: false,
            focusable: false,
            data: { id: n.id, kind: n.kind, label: n.label, tag, state, inspected: inspectedId === n.id, onInspect },
        }
    }), [graph, path, onPath, inspectedId, onInspect])

    const edges = useMemo<Edge[]>(() => graph.edges.map((e) => {
        const highlighted = path.edgeKeys.has(e.id)
        return {
            id: e.id,
            source: e.source,
            target: e.target,
            type: 'smoothstep',
            selectable: false,
            focusable: false,
            className: highlighted ? styles.edgeOnPath : undefined,
            zIndex: highlighted ? 1 : 0,
        }
    }), [graph, path])

    return (
        <ReactFlow
            nodes={nodes}
            edges={edges}
            nodeTypes={nodeTypes}
            fitView
            fitViewOptions={{ padding: 0.06 }}
            // Opening fitted to the whole tree is unreadable, so start on the current check.
            onInit={(instance) => {
                requestAnimationFrame(() => {
                    instance.fitView({ nodes: [{ id: path.currentId ?? tree.rootId }], maxZoom: 0.9, padding: 0.4 })
                })
            }}
            minZoom={0.15}
            maxZoom={1.6}
            nodesDraggable={false}
            nodesConnectable={false}
            nodesFocusable={false}
            edgesFocusable={false}
            elementsSelectable={false}
            aria-label="Map of every check and pattern. Pan by dragging, zoom with the wheel or the controls."
        >
            <Controls showInteractive={false} position="bottom-left" fitViewOptions={{ padding: 0.06 }} />
            <Panel position="top-left">
                <div className={styles.legend} aria-hidden="true">
                    <span><i className={styles.swatch} />Check</span>
                    <span><i className={clsx(styles.swatch, styles.swatchLeaf)} />Pattern</span>
                    <span><i className={clsx(styles.swatch, styles.swatchPath)} />Your path</span>
                    <span><i className={clsx(styles.swatch, styles.swatchCurrent)} />Current</span>
                </div>
            </Panel>
        </ReactFlow>
    )
}

export default function MapCanvas(props: MapCanvasProps) {
    return (
        <ReactFlowProvider>
            <Chart {...props} />
        </ReactFlowProvider>
    )
}
