// The Pareto set: the problems flagged "Pareto" in the curator's tracker, in the curator's order.
// Source: Notion "LeetCode Tracker: Grind 93 + Pareto" (Pareto = checked, sorted by Pareto #).
// Pattern groups and the `ask` lines are ours; LC numbers, names, slugs and difficulty are the tracker's.

export type Difficulty = 'Easy' | 'Medium' | 'Hard'

export interface ParetoProblem {
    n: number // Pareto # (1-49)
    lc: number
    name: string
    slug: string
    difficulty: Difficulty
    ask: string // what the problem asks, in a line (never the method)
}

export interface ParetoPattern {
    id: string
    name: string
    why: string
    problems: ParetoProblem[]
}

type Row = [n: number, lc: number, name: string, slug: string, d: 'E' | 'M' | 'H', ask: string]

const D: Record<'E' | 'M' | 'H', Difficulty> = { E: 'Easy', M: 'Medium', H: 'Hard' }

const p = ([n, lc, name, slug, d, ask]: Row): ParetoProblem => ({ n, lc, name, slug, difficulty: D[d], ask })

export const PATTERNS: ParetoPattern[] = [
    {
        id: 'arrays-hashing',
        name: 'Arrays & Hashing',
        why: 'Trade memory for lookups. The first move on most problems.',
        problems: [
            [1, 217, 'Contains Duplicate', 'contains-duplicate', 'E', 'Does any value appear at least twice in the array?'],
            [2, 242, 'Valid Anagram', 'valid-anagram', 'E', 'Are two strings made of exactly the same letters?'],
            [3, 1, 'Two Sum', 'two-sum', 'E', 'Find the two numbers in an array that add up to a target.'],
            [4, 49, 'Group Anagrams', 'group-anagrams', 'M', 'Group the strings that are anagrams of each other.'],
            [5, 347, 'Top K Frequent Elements', 'top-k-frequent-elements', 'M', 'Return the k values that appear most often.'],
            [6, 36, 'Valid Sudoku', 'valid-sudoku', 'M', 'Is a partly filled 9×9 board free of repeats in every row, column and box?'],
            [7, 238, 'Product of Array Except Self', 'product-of-array-except-self', 'M', 'For each index, the product of every other element, without division.'],
            [8, 128, 'Longest Consecutive Sequence', 'longest-consecutive-sequence', 'M', 'Length of the longest run of consecutive integers, in O(n).'],
        ].map((r) => p(r as Row)),
    },
    {
        id: 'two-pointers',
        name: 'Two Pointers',
        why: 'Turn a nested loop into one pass from both ends.',
        problems: [
            [9, 125, 'Valid Palindrome', 'valid-palindrome', 'E', 'Is the string a palindrome, ignoring case and non-alphanumerics?'],
            [10, 167, 'Two Sum II - Input Array Is Sorted', 'two-sum-ii-input-array-is-sorted', 'M', 'Two Sum on a sorted array, using constant extra space.'],
            [11, 15, '3Sum', '3sum', 'M', 'Find all unique triplets that sum to zero.'],
            [12, 11, 'Container With Most Water', 'container-with-most-water', 'M', 'Pick two lines that, with the x-axis, hold the most water.'],
        ].map((r) => p(r as Row)),
    },
    {
        id: 'sliding-window',
        name: 'Sliding Window',
        why: 'Grow right, shrink left, keep the window valid.',
        problems: [
            [13, 121, 'Best Time to Buy and Sell Stock', 'best-time-to-buy-and-sell-stock', 'E', 'Maximum profit from one buy followed by one sell.'],
            [14, 3, 'Longest Substring Without Repeating Characters', 'longest-substring-without-repeating-characters', 'M', 'Length of the longest substring with no repeated characters.'],
            [15, 424, 'Longest Repeating Character Replacement', 'longest-repeating-character-replacement', 'M', 'Longest substring that can become one repeated letter with at most k changes.'],
        ].map((r) => p(r as Row)),
    },
    {
        id: 'stack',
        name: 'Stack',
        why: 'The most recent unresolved thing is the next one to resolve.',
        problems: [
            [16, 20, 'Valid Parentheses', 'valid-parentheses', 'E', 'Are all brackets closed in the right order?'],
            [17, 155, 'Min Stack', 'min-stack', 'M', 'Design a stack that returns its minimum in constant time.'],
            [18, 739, 'Daily Temperatures', 'daily-temperatures', 'M', 'For each day, how many days until a warmer one?'],
        ].map((r) => p(r as Row)),
    },
    {
        id: 'binary-search',
        name: 'Binary Search',
        why: 'Discard half the space per step, even when the array is rotated.',
        problems: [
            [19, 704, 'Binary Search', 'binary-search', 'E', 'Find a target in a sorted array in O(log n).'],
            [20, 153, 'Find Minimum in Rotated Sorted Array', 'find-minimum-in-rotated-sorted-array', 'M', 'Find the smallest value in a sorted array rotated at an unknown point.'],
            [21, 33, 'Search in Rotated Sorted Array', 'search-in-rotated-sorted-array', 'M', 'Find a target in a rotated sorted array in O(log n).'],
        ].map((r) => p(r as Row)),
    },
    {
        id: 'linked-list',
        name: 'Linked List',
        why: 'Pointer surgery: dummy heads, fast and slow, reversal.',
        problems: [
            [22, 206, 'Reverse Linked List', 'reverse-linked-list', 'E', 'Reverse a singly linked list.'],
            [23, 21, 'Merge Two Sorted Lists', 'merge-two-sorted-lists', 'E', 'Merge two sorted lists into one sorted list.'],
            [24, 143, 'Reorder List', 'reorder-list', 'M', 'Reorder L0 → L1 → … → Ln into L0 → Ln → L1 → Ln-1 → …, in place.'],
            [25, 19, 'Remove Nth Node From End of List', 'remove-nth-node-from-end-of-list', 'M', 'Remove the nth node from the end of a list in one pass.'],
            [26, 141, 'Linked List Cycle', 'linked-list-cycle', 'E', 'Does a linked list contain a cycle?'],
            [27, 146, 'LRU Cache', 'lru-cache', 'M', 'Design a cache that evicts the least recently used key, with O(1) operations.'],
        ].map((r) => p(r as Row)),
    },
    {
        id: 'tree-recursion',
        name: 'Tree Recursion',
        why: 'Solve the subtree, then combine at the node.',
        problems: [
            [28, 226, 'Invert Binary Tree', 'invert-binary-tree', 'E', 'Mirror a binary tree left to right.'],
            [29, 104, 'Maximum Depth of Binary Tree', 'maximum-depth-of-binary-tree', 'E', 'How many levels deep is a binary tree?'],
            [30, 543, 'Diameter of Binary Tree', 'diameter-of-binary-tree', 'E', 'Length of the longest path between any two nodes in a tree.'],
            [31, 110, 'Balanced Binary Tree', 'balanced-binary-tree', 'E', 'Do all nodes have left and right subtree heights that differ by at most one?'],
            [32, 100, 'Same Tree', 'same-tree', 'E', 'Are two binary trees identical in shape and values?'],
            [33, 572, 'Subtree of Another Tree', 'subtree-of-another-tree', 'E', 'Does one tree appear as a subtree of another?'],
        ].map((r) => p(r as Row)),
    },
    {
        id: 'tree-traversal-bst',
        name: 'Traversal & BST',
        why: 'Pick the traversal that carries the state you need.',
        problems: [
            [34, 235, 'Lowest Common Ancestor of a Binary Search Tree', 'lowest-common-ancestor-of-a-binary-search-tree', 'M', 'Find the lowest common ancestor of two nodes in a binary search tree.'],
            [35, 102, 'Binary Tree Level Order Traversal', 'binary-tree-level-order-traversal', 'M', 'Return the node values level by level.'],
            [36, 199, 'Binary Tree Right Side View', 'binary-tree-right-side-view', 'M', 'Which nodes are visible when looking at a tree from the right?'],
            [37, 1448, 'Count Good Nodes in Binary Tree', 'count-good-nodes-in-binary-tree', 'M', 'Count the nodes that are no smaller than any ancestor on their path from the root.'],
            [38, 98, 'Validate Binary Search Tree', 'validate-binary-search-tree', 'M', 'Is a binary tree a valid binary search tree?'],
            [39, 230, 'Kth Smallest Element in a BST', 'kth-smallest-element-in-a-bst', 'M', 'Return the kth smallest value in a binary search tree.'],
        ].map((r) => p(r as Row)),
    },
    {
        id: 'heap',
        name: 'Heap',
        why: 'Keep only the k best, or always the next best.',
        problems: [
            [40, 703, 'Kth Largest Element in a Stream', 'kth-largest-element-in-a-stream', 'E', 'Return the kth largest value each time a new number arrives.'],
            [41, 1046, 'Last Stone Weight', 'last-stone-weight', 'E', 'Repeatedly smash the two heaviest stones together; what weight is left?'],
            [42, 215, 'Kth Largest Element in an Array', 'kth-largest-element-in-an-array', 'M', 'Return the kth largest element of an unsorted array.'],
        ].map((r) => p(r as Row)),
    },
    {
        id: 'graphs',
        name: 'Graphs',
        why: 'Flood fill the grid, clone with a map, order with indegrees.',
        problems: [
            [43, 200, 'Number of Islands', 'number-of-islands', 'M', 'Count the islands in a grid of land and water.'],
            [44, 695, 'Max Area of Island', 'max-area-of-island', 'M', 'Find the area of the largest island in a grid.'],
            [45, 133, 'Clone Graph', 'clone-graph', 'M', 'Make a deep copy of a connected undirected graph.'],
            [46, 417, 'Pacific Atlantic Water Flow', 'pacific-atlantic-water-flow', 'M', 'Which cells can send water to both the Pacific and the Atlantic?'],
            [47, 130, 'Surrounded Regions', 'surrounded-regions', 'M', "Capture every region of O's completely surrounded by X's."],
            [48, 207, 'Course Schedule', 'course-schedule', 'M', 'Can all courses be finished, given their prerequisites?'],
            [49, 210, 'Course Schedule II', 'course-schedule-ii', 'M', 'Return a valid order to take all courses, if one exists.'],
        ].map((r) => p(r as Row)),
    },
]

export const ALL: ParetoProblem[] = PATTERNS.flatMap((g) => g.problems)

export const lcUrl = (slug: string) => `https://leetcode.com/problems/${slug}/`

export const COUNTS = {
    total: ALL.length,
    patterns: PATTERNS.length,
    easy: ALL.filter((x) => x.difficulty === 'Easy').length,
    medium: ALL.filter((x) => x.difficulty === 'Medium').length,
    hard: ALL.filter((x) => x.difficulty === 'Hard').length,
}
