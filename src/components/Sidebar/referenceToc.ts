// The Reference's table of contents. Hrefs match the section ids in @sections/Cheatsheet.
import type { TocEntry } from '@components/TableOfContents/TableOfContents'

export const REFERENCE_TOC: TocEntry[] = [
    {
        title: 'Big O',
        links: [
            { href: '#bigo-chart', label: 'Time/Space Complexities' },
            { href: '#bigo-data-structure-operations-table', label: 'Data Structure Operations' },
            { href: '#bigo-sorting-algorithms-table', label: 'Sorting Algorithms' },
        ],
    },
    {
        title: 'Array',
        links: [
            { href: '#array-two-pointers-one-input', label: 'two pointers: one input, opposite ends' },
            { href: '#array-two-pointers-two-inputs', label: 'two pointers: two inputs, exhaust both' },
            { href: '#array-sliding-window', label: 'sliding window' },
            { href: '#array-prefix-sum', label: 'prefix sum' },
            { href: '#array-string-building', label: 'efficient string building' },
        ],
    },
    {
        title: 'Hash Map',
        links: [
            { href: '#hashmap-find-number-of-subarrays', label: 'find number of subarrays that fit an exact criteria' },
            { href: '#hashmap-sliding-window', label: 'sliding window' },
        ],
    },
    {
        title: 'Linked List',
        links: [
            { href: '#linkedlist-fast-and-slow-pointer', label: 'fast and slow pointer' },
            { href: '#linkedlist-reverse', label: 'reverse linked list' },
        ],
    },
    {
        title: 'Stack',
        links: [
            { href: '#stack-monotonic-increasing', label: 'monotonic increasing stack' },
            { href: '#stack-monotonic-decreasing', label: 'monotonic decreasing stack' },
        ],
    },
    {
        title: 'Binary Tree',
        links: [
            { href: '#tree-dfs-recursive', label: 'DFS (recursive)' },
            { href: '#tree-dfs-iterative', label: 'DFS (iterative)' },
            { href: '#tree-bfs', label: 'BFS' },
        ],
    },
    {
        title: 'Graph',
        links: [
            { href: '#graph-dfs-recursive', label: 'DFS (recursive)' },
            { href: '#graph-dfs-iterative', label: 'DFS (iterative)' },
            { href: '#graph-bfs', label: 'BFS' },
            { href: '#graph-multi-source-bfs', label: 'Multi-source BFS' },
            { href: '#graph-dijkstra', label: 'Dijkstra (shortest path)' },
            { href: '#graph-bellman-ford', label: 'Bellman-Ford (shortest path)' },
            { href: '#graph-kahn', label: 'Kahn (topological sort)' },
            { href: '#graph-kruskal', label: 'Kruskal (mst)' },
            { href: '#graph-prim', label: 'Prim (mst)' },
        ],
    },
    {
        title: 'Heap',
        links: [
            { href: '#heap-find-top-k-elements', label: 'find top k elements with heap' },
        ],
    },
    {
        title: 'Binary Search',
        links: [
            { href: '#binarysearch-binary-search', label: 'binary search' },
            { href: '#binarysearch-duplicate-elements-left-insertion', label: 'duplicate elements, left-most insertion point' },
            { href: '#binarysearch-duplicate-elements-right-insertion', label: 'duplicate elements, right-most insertion point' },
            { href: '#binarysearch-greedy-minimum', label: 'greedy (minimum)' },
            { href: '#binarysearch-greedy-maximum', label: 'greedy (maximum)' },
        ],
    },
    {
        title: 'Backtracking',
        links: [
            { href: '#backtracking-backtracking', label: 'backtracking' },
        ],
    },
    {
        title: 'Dynamic Programming',
        links: [
            { href: '#dp-top-down', label: 'top-down DP' },
            { href: '#dp-bottom-up', label: 'bottom-up DP' },
            { href: '#dp-kadane', label: 'Kadane (max-sum subarray)' },
        ],
    },
    {
        title: 'Bit Manipulation',
        links: [
            { href: '#bitmanipulation-test-kth-bit', label: 'test kth bit' },
            { href: '#bitmanipulation-set-kth-bit', label: 'set kth bit' },
            { href: '#bitmanipulation-clear-kth-bit', label: 'clear kth bit' },
            { href: '#bitmanipulation-get-rightmost-bit', label: 'get rightmost bit' },
            { href: '#bitmanipulation-count-set-bits', label: 'count set bits' },
            { href: '#bitmanipulation-multiply-power-of-two', label: 'multiply by 2^k' },
            { href: '#bitmanipulation-divide-power-of-two', label: 'divide by 2^k' },
            { href: '#bitmanipulation-check-power-of-two', label: 'check if number is power of 2' },
            { href: '#bitmanipulation-swap-variables', label: 'swap two variables' },
        ],
    },
    {
        title: 'Matrix',
        links: [
            { href: '#matrix-create-copy', label: 'create / copy' },
            { href: '#matrix-diagonals', label: 'main / anti diagonals' },
            { href: '#matrix-rotate-transpose', label: 'rotate / transpose' },
        ],
    },
    {
        title: 'Data Structures',
        links: [
            { href: '#ds-array', label: 'array' },
            { href: '#ds-hash-map', label: 'hashmap' },
            { href: '#ds-linked-list', label: 'linked list' },
            { href: '#ds-doubly-linked-list', label: 'doubly linked list' },
            { href: '#ds-binary-tree', label: 'binary tree' },
            { href: '#ds-binary-search-tree', label: 'binary search tree' },
            { href: '#ds-graph', label: 'graph' },
            { href: '#ds-union-find', label: 'union find' },
            { href: '#ds-union-find-optimized', label: 'union find optimized' },
            { href: '#ds-trie', label: 'trie' },
        ],
    },
    {
        title: 'Sorting Algorithms',
        links: [
            { href: '#sort-bubble', label: 'bubble sort' },
            { href: '#sort-selection', label: 'selection sort' },
            { href: '#sort-insertion', label: 'insertion sort' },
            { href: '#sort-shell', label: 'shell sort' },
            { href: '#sort-merge', label: 'mergesort' },
            { href: '#sort-quick', label: 'quicksort' },
            { href: '#sort-tim', label: 'timsort' },
            { href: '#sort-heap', label: 'heapsort' },
            { href: '#sort-counting', label: 'counting sort' },
            { href: '#sort-bucket', label: 'bucket sort' },
            { href: '#sort-radix', label: 'radix sort' },
            { href: '#sort-cube', label: 'cubesort' },
            { href: '#sort-bogo', label: 'bogo sort' },
            { href: '#sort-pancake', label: 'pancake sort' },
            { href: '#sort-sleep', label: 'sleep sort' },
        ],
    },
]
