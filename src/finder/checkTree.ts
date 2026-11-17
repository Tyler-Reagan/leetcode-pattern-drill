/**
 * Structural checks for the Pattern Finder decision tree.
 * Run with: npx --yes tsx src/finder/checkTree.ts
 */
import { tree } from './tree'

const MAX_QUESTIONS = 6

/** Required leaves and their exact templateIds. */
const EXPECTED_LEAVES: Record<string, string[]> = {
    'two-pointers-converging': ['two-pointers-one-input'],
    'two-pointers-two-inputs': ['two-pointers-two-inputs'],
    'two-pointers-fast-slow-inplace': [],
    'sliding-window-fixed': ['sliding-window'],
    'sliding-window-variable': ['sliding-window'],
    'sliding-window-exactly-k': [],
    'prefix-sum-range': ['prefix-sum'],
    'prefix-sum-hashmap': ['hashmap-find-number-of-subarrays'],
    'string-building': ['string-building'],
    'binary-search-classic': ['binary-search'],
    'binary-search-left-bound': ['binary-search-left-insertion'],
    'binary-search-right-bound': ['binary-search-right-insertion'],
    'binary-search-answer-minimize': ['binary-search-greedy-minimum'],
    'binary-search-answer-maximize': ['binary-search-greedy-maximum'],
    'sort-first': [],
    'hashmap-frequency': ['ds-hash-map'],
    'hashmap-sliding-window': ['hashmap-sliding-window'],
    'stack-matching': [],
    'monotonic-stack-increasing': ['stack-monotonic-increasing'],
    'monotonic-stack-decreasing': ['stack-monotonic-decreasing'],
    'monotonic-deque': [],
    'queue-design': [],
    'heap-top-k': ['heap-find-top-k-elements'],
    'heap-merge-k': [],
    'two-heaps': [],
    trie: ['ds-trie'],
    'linked-list-fast-slow': ['linkedlist-fast-and-slow-pointer'],
    'linked-list-reverse': ['linkedlist-reverse'],
    'linked-list-merge-sorted': [],
    'tree-dfs-recursive': ['tree-dfs-recursive'],
    'tree-dfs-iterative': ['tree-dfs-iterative'],
    'tree-bfs': ['tree-bfs'],
    'graph-dfs': ['graph-dfs-recursive', 'graph-dfs-iterative'],
    'graph-bfs-shortest-path': ['graph-bfs'],
    'multi-source-bfs': [],
    'shortest-path-weighted': ['graph-dijkstra', 'graph-bellman-ford'],
    'topological-sort': ['graph-kahn'],
    'union-find': ['ds-union-find', 'ds-union-find-optimized'],
    mst: ['graph-kruskal', 'graph-prim'],
    backtracking: ['backtracking'],
    'backtracking-pruning': [],
    'dp-top-down': ['dp-top-down'],
    'dp-bottom-up': ['dp-bottom-up'],
    'dp-kadane': ['dp-kadane'],
    'dp-unbounded-knapsack': [],
    'dp-01-knapsack': [],
    'dp-sequences': [],
    greedy: [],
    'bit-manipulation': [
        'bitmanipulation-test-kth-bit',
        'bitmanipulation-set-kth-bit',
        'bitmanipulation-clear-kth-bit',
        'bitmanipulation-toggle-kth-bit',
        'bitmanipulation-get-rightmost-bit',
        'bitmanipulation-count-set-bits',
        'bitmanipulation-multiply-power-of-two',
        'bitmanipulation-divide-power-of-two',
        'bitmanipulation-check-power-of-two',
        'bitmanipulation-swap-variables',
    ],
}

const errors: string[] = []
const warnings: string[] = []
const fail = (msg: string) => errors.push(msg)

const { rootId, nodes, leaves } = tree
const isNode = (id: string) => Object.prototype.hasOwnProperty.call(nodes, id)
const isLeaf = (id: string) => Object.prototype.hasOwnProperty.call(leaves, id)

// --- Ids and basic shape ---
if (!isNode(rootId)) fail(`rootId "${rootId}" is not a node`)

for (const [key, node] of Object.entries(nodes)) {
    if (node.id !== key) fail(`node key "${key}" has id "${node.id}"`)
    if (isLeaf(key)) fail(`id "${key}" is both a node and a leaf`)
    if (!node.question.trim()) fail(`node "${key}" has an empty question`)
    if (node.options.length < 2) fail(`node "${key}" has ${node.options.length} option(s); needs at least 2`)
    const seenCues = new Set<string>()
    for (const opt of node.options) {
        if (!isNode(opt.next) && !isLeaf(opt.next)) fail(`node "${key}" option "${opt.cue}" -> unknown "${opt.next}"`)
        if (!opt.cue.trim()) fail(`node "${key}" has an empty cue`)
        if (seenCues.has(opt.cue)) fail(`node "${key}" repeats cue "${opt.cue}"`)
        seenCues.add(opt.cue)
    }
}

for (const [key, leaf] of Object.entries(leaves)) {
    if (leaf.id !== key) fail(`leaf key "${key}" has id "${leaf.id}"`)
    if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(key)) fail(`leaf id "${key}" is not kebab-case`)
    for (const field of ['name', 'pattern', 'summary', 'docsUrl'] as const) {
        if (!leaf[field].trim()) fail(`leaf "${key}" has empty ${field}`)
    }
    if (!leaf.docsUrl.startsWith('https://resources.devweekends.com/dsa-patterns/')) {
        fail(`leaf "${key}" docsUrl is not a devweekends dsa-patterns page: ${leaf.docsUrl}`)
    }
}

// --- Expected leaves and exact templateIds ---
for (const [id, templateIds] of Object.entries(EXPECTED_LEAVES)) {
    const leaf = leaves[id]
    if (!leaf) {
        fail(`expected leaf "${id}" is missing`)
        continue
    }
    const got = [...leaf.templateIds].sort().join(',')
    const want = [...templateIds].sort().join(',')
    if (got !== want) fail(`leaf "${id}" templateIds [${got}] != expected [${want}]`)
}
for (const id of Object.keys(leaves)) {
    if (!(id in EXPECTED_LEAVES)) warnings.push(`extra leaf not in the required list: "${id}"`)
}

// --- Enumerate every root-to-leaf path (DFS, detecting cycles) ---
const paths: string[][] = []
const reachedNodes = new Set<string>()
const reachedLeaves = new Set<string>()

function walk(id: string, path: string[]) {
    if (isLeaf(id)) {
        reachedLeaves.add(id)
        paths.push([...path, id])
        return
    }
    if (!isNode(id)) return // already reported as unknown
    if (path.includes(id)) {
        fail(`cycle: ${[...path, id].join(' -> ')}`)
        return
    }
    reachedNodes.add(id)
    for (const opt of nodes[id].options) walk(opt.next, [...path, id])
}
if (isNode(rootId)) walk(rootId, [])

for (const id of Object.keys(nodes)) if (!reachedNodes.has(id)) fail(`node "${id}" is unreachable from the root`)
for (const id of Object.keys(leaves)) if (!reachedLeaves.has(id)) fail(`leaf "${id}" is unreachable from the root`)

// --- Depth (question nodes per path) ---
const questionsOn = (p: string[]) => p.length - 1
const maxDepth = paths.reduce((m, p) => Math.max(m, questionsOn(p)), 0)
const tooDeep = paths.filter((p) => questionsOn(p) > MAX_QUESTIONS)
for (const p of tooDeep) fail(`path has ${questionsOn(p)} questions (> ${MAX_QUESTIONS}): ${p.join(' -> ')}`)

// Shallowest path to each leaf: what a user who picks the most direct cues sees.
const minDepthByLeaf = new Map<string, number>()
for (const p of paths) {
    const leaf = p[p.length - 1]
    const d = questionsOn(p)
    if (!minDepthByLeaf.has(leaf) || d < minDepthByLeaf.get(leaf)!) minDepthByLeaf.set(leaf, d)
}

const histogram = (values: number[]) => {
    const counts = new Map<number, number>()
    for (const v of values) counts.set(v, (counts.get(v) ?? 0) + 1)
    return [...counts.entries()].sort((a, b) => a[0] - b[0]).map(([d, n]) => `${d} questions: ${n}`)
}

// --- Report ---
const optionCounts = Object.values(nodes).map((n) => n.options.length)
console.log('Pattern Finder tree check')
console.log(`  nodes:  ${Object.keys(nodes).length}`)
console.log(`  leaves: ${Object.keys(leaves).length}`)
console.log(`  root-to-leaf paths: ${paths.length}`)
console.log(`  options per node: min ${Math.min(...optionCounts)}, max ${Math.max(...optionCounts)}`)
console.log(`  max questions on any path: ${maxDepth} (cap ${MAX_QUESTIONS})`)
console.log('  depth distribution over all paths:')
for (const line of histogram(paths.map(questionsOn))) console.log(`    ${line}`)
console.log('  depth distribution of the shortest path to each leaf:')
for (const line of histogram([...minDepthByLeaf.values()])) console.log(`    ${line}`)

if (warnings.length) {
    console.log(`\nWarnings (${warnings.length}):`)
    for (const w of warnings) console.log(`  - ${w}`)
}

if (errors.length) {
    console.error(`\nFAILED with ${errors.length} error(s):`)
    for (const e of errors) console.error(`  - ${e}`)
    process.exit(1)
}
console.log('\nOK: all checks passed')
