import type { FinderTree, LeafProblem } from './types'

// `loose` marks a looser fit: the pattern works, but it is not the first one most people reach for.
const P = (lc: number, name: string, slug: string, loose = false): LeafProblem =>
    loose ? { lc, name, slug, loose } : { lc, name, slug }

// Some nodes and leaves are reachable from more than one question (the tree is a DAG),
// so a problem can be found from whichever cue the user notices.
export const tree: FinderTree = {
    rootId: 'q-input',

    nodes: {
        'q-input': {
            id: 'q-input',
            question: 'What does the problem give you?',
            options: [
                { cue: 'an array, a string, or a 2D board of values', next: 'q-array' },
                { cue: 'a linked list', next: 'q-list' },
                { cue: 'a binary tree or BST', next: 'q-tree' },
                { cue: 'a graph, edges, prerequisites, or a grid of cells you move between', next: 'q-graph' },
                { cue: 'a data stream, or a design-a-class prompt', next: 'q-design' },
                { cue: 'an integer n, or work done on its individual bits', next: 'q-number' },
            ],
        },

        'q-array': {
            id: 'q-array',
            question: 'What does it ask about the array or string?',
            options: [
                { cue: 'a contiguous subarray or substring, or range sums or products', next: 'q-subarray' },
                { cue: 'a pair or triplet that hits a target or scores best, a palindrome, or an in-place edit', next: 'q-pointers' },
                { cue: 'searching a sorted or rotated array, or the smallest or largest value that works', next: 'q-search' },
                { cue: 'the next greater or smaller element of each item', next: 'q-mono' },
                { cue: 'counts, duplicates, membership, top K or repeated largest, brackets, words', next: 'q-lookup' },
                { cue: 'choices over elements: generate them all, or find the best or count the ways', next: 'q-choices' },
                { cue: 'intervals with a start and an end', next: 'sort-first' },
            ],
        },
        'q-subarray': {
            id: 'q-subarray',
            question: 'What does it want from the subarray or substring?',
            options: [
                { cue: 'sum or average of each size-K window', next: 'sliding-window-fixed' },
                { cue: 'longest or shortest window that meets a rule', next: 'q-window-variable' },
                { cue: 'count subarrays with exactly K distinct or odd', next: 'sliding-window-exactly-k' },
                { cue: 'a sum or product over a range: equal to K, between i and j, or everything except one index', next: 'q-prefix' },
                { cue: 'maximum sum subarray of any length', next: 'dp-kadane' },
                { cue: 'max or min inside each size-K window', next: 'monotonic-deque' },
            ],
        },
        'q-window-variable': {
            id: 'q-window-variable',
            question: 'What does the window rule check?',
            options: [
                { cue: 'sum or product vs a target, with non-negative numbers', next: 'sliding-window-variable' },
                { cue: 'which characters the window holds, and how many of each', next: 'hashmap-sliding-window' },
            ],
        },
        'q-prefix': {
            id: 'q-prefix',
            question: 'What kind of range-total question?',
            options: [
                { cue: 'many queries for the sum between index i and j', next: 'prefix-sum-range' },
                { cue: 'for each index, a total of everything except that index', next: 'prefix-sum-range' },
                { cue: 'count or longest subarrays with sum K, when values can be negative', next: 'prefix-sum-hashmap' },
            ],
        },
        'q-pointers': {
            id: 'q-pointers',
            question: 'What kind of pair, check, or edit?',
            options: [
                { cue: 'a pair or triplet that hits a target, when the array is sorted or the values matter, not their positions', next: 'two-pointers-converging' },
                { cue: 'a palindrome or other mirror-image check', next: 'two-pointers-converging' },
                { cue: 'the best pair where how far apart they are is part of the score', next: 'two-pointers-converging' },
                { cue: 'the largest rise from an earlier element to a later one', next: 'dp-kadane' },
                { cue: 'walking two separate inputs together', next: 'two-pointers-two-inputs' },
                { cue: 'rewriting the array in place, keeping some elements and moving or dropping the rest', next: 'two-pointers-fast-slow-inplace' },
                { cue: 'two numbers that hit a target in an unsorted array, returning their original positions', next: 'hashmap-frequency' },
            ],
        },
        'q-search': {
            id: 'q-search',
            question: 'What are you searching for?',
            options: [
                { cue: 'a given value, or the minimum, in a sorted or rotated array', next: 'binary-search-classic' },
                { cue: 'first position of X, or where to insert X', next: 'binary-search-left-bound' },
                { cue: 'last position of X, or count of elements <= X', next: 'binary-search-right-bound' },
                { cue: 'smallest capacity or speed that works (minimize the max)', next: 'binary-search-answer-minimize' },
                { cue: 'largest distance or size that works (maximize the min)', next: 'binary-search-answer-maximize' },
            ],
        },
        'q-mono': {
            id: 'q-mono',
            question: 'What do you need for each element?',
            options: [
                { cue: 'the next greater element for each item', next: 'monotonic-stack-decreasing' },
                { cue: 'the next smaller element for each item', next: 'monotonic-stack-increasing' },
                { cue: 'max or min inside each size-K window', next: 'monotonic-deque' },
            ],
        },
        'q-lookup': {
            id: 'q-lookup',
            question: 'What do you need to do with the data?',
            options: [
                { cue: 'counting or grouping items that match', next: 'hashmap-frequency' },
                { cue: 'whether a value, or the value next to it, is present, in linear time', next: 'hashmap-frequency' },
                { cue: 'the K best items, or the Kth one, by size or frequency', next: 'heap-top-k' },
                { cue: 'repeatedly take the largest values, combine them, and put the result back', next: 'heap-top-k' },
                { cue: 'matching or nested structure, where the last thing opened closes first', next: 'stack-matching' },
                { cue: 'prefix lookups over a word list', next: 'trie' },
                { cue: 'building an output string piece by piece', next: 'string-building' },
                { cue: 'operating on the bits of numbers', next: 'bit-manipulation' },
            ],
        },
        'q-choices': {
            id: 'q-choices',
            question: 'What are you trying to do with the choices?',
            options: [
                { cue: 'generate every subset, permutation, or combination', next: 'q-backtrack' },
                { cue: 'best cost, or number of ways, over the choices', next: 'q-dp' },
                { cue: 'a locally best move each step is enough', next: 'greedy' },
            ],
        },
        'q-backtrack': {
            id: 'q-backtrack',
            question: 'Can a partial choice be rejected early?',
            options: [
                { cue: 'no, every candidate has to be generated', next: 'backtracking' },
                { cue: 'yes, a constraint lets you reject a partial choice early', next: 'backtracking-pruning' },
            ],
        },
        'q-dp': {
            id: 'q-dp',
            question: 'What do the choices look like?',
            options: [
                { cue: 'items you can reuse any number of times', next: 'dp-unbounded-knapsack' },
                { cue: 'each item can be used at most once', next: 'dp-01-knapsack' },
                { cue: 'ordering or matching within one or two sequences', next: 'dp-sequences' },
                { cue: 'something else, where each state depends on earlier states', next: 'q-dp-style' },
            ],
        },
        'q-dp-style': {
            id: 'q-dp-style',
            question: 'Which way is the recurrence easier to write?',
            options: [
                { cue: 'recurse from a state and cache the result', next: 'dp-top-down' },
                { cue: 'fill dp[i] or dp[r][c] from earlier cells', next: 'dp-bottom-up' },
            ],
        },

        'q-list': {
            id: 'q-list',
            question: 'What do you do with the list?',
            options: [
                { cue: 'a cycle, the middle, or a position counted from the end', next: 'linked-list-fast-slow' },
                { cue: 'interleave or compare the front half with the back half', next: 'linked-list-split-reverse-merge' },
                { cue: 'reverse the list, a sublist, or k-groups', next: 'linked-list-reverse' },
                { cue: 'merge two sorted lists', next: 'linked-list-merge-sorted' },
                { cue: 'merge K sorted lists', next: 'heap-merge-k' },
            ],
        },

        'q-tree': {
            id: 'q-tree',
            question: 'What does it ask about the tree?',
            options: [
                { cue: 'what the tree looks like level by level, or from one side', next: 'tree-bfs' },
                { cue: 'a measure of the whole tree, like its height, balance, or longest path', next: 'tree-dfs-recursive' },
                { cue: 'a change made at every node, or whether two trees match or one appears inside the other', next: 'tree-dfs-recursive' },
                { cue: 'a check at each node against its ancestors on the path from the root', next: 'tree-dfs-recursive' },
                { cue: 'find, insert, or delete a value in a BST, or the lowest node above two given nodes', next: 'bst-walk' },
                { cue: "a BST's values in sorted order, one at a time or up to the kth", next: 'tree-dfs-iterative' },
            ],
        },

        'q-graph': {
            id: 'q-graph',
            question: 'What does it ask about the graph or grid?',
            options: [
                { cue: 'everything connected to a start: count regions, measure them, or copy them', next: 'graph-dfs' },
                { cue: 'which cells connect to the edge of the grid', next: 'graph-dfs' },
                { cue: 'shortest path or minimum steps', next: 'q-shortest' },
                { cue: 'an order that respects prerequisites, or proof that none exists', next: 'topological-sort' },
                { cue: 'whether two items are already in the same group, or an edge closes an undirected cycle', next: 'union-find' },
                { cue: 'minimum cost to connect all points', next: 'mst' },
                { cue: 'a grid where you can only move right or down', next: 'q-dp' },
            ],
        },
        'q-shortest': {
            id: 'q-shortest',
            question: 'What kind of shortest path?',
            options: [
                { cue: 'unweighted edges, from one start', next: 'graph-bfs-shortest-path' },
                { cue: 'spreads from many sources at once', next: 'multi-source-bfs' },
                { cue: 'weighted edges', next: 'shortest-path-weighted' },
            ],
        },

        'q-design': {
            id: 'q-design',
            question: 'What must the structure support?',
            options: [
                { cue: 'median of a data stream', next: 'two-heaps' },
                { cue: 'the Kth largest of the values so far, after each new value', next: 'heap-top-k' },
                { cue: 'only the items from a recent time span or the last N arrivals, or a fixed-size queue', next: 'queue-design' },
                { cue: 'constant-time lookup plus keeping items ordered by when they were last used', next: 'design-hashmap-linked-list' },
                { cue: 'storing words so prefix and exact lookups are fast', next: 'trie' },
                { cue: 'a stack that also answers a question about its contents, like its minimum, in constant time', next: 'stack-matching' },
                { cue: 'stepping back through a history of actions', next: 'stack-matching' },
            ],
        },

        'q-number': {
            id: 'q-number',
            question: 'What does it ask about n?',
            options: [
                { cue: 'bit-level properties of n', next: 'bit-manipulation' },
                { cue: 'the nth term defined by earlier terms', next: 'q-dp' },
                { cue: 'the largest x whose square is still at most n', next: 'binary-search-answer-maximize' },
                { cue: 'guess the number in 1..n', next: 'binary-search-classic' },
            ],
        },
    },

    leaves: {
        'two-pointers-converging': {
            id: 'two-pointers-converging',
            name: 'Two pointers, converging',
            pattern: 'Two Pointers',
            summary:
                'Sorted array pairs/triplets, palindromes, in-place reversal. Start at both ends and move the pointer whose side cannot be part of the answer.',
            docsUrl: 'https://resources.devweekends.com/dsa-patterns/two-pointers',
            problems: [
                P(167, 'Two Sum II - Input Array Is Sorted', 'two-sum-ii-input-array-is-sorted'),
                P(15, '3Sum', '3sum'),
                P(11, 'Container With Most Water', 'container-with-most-water'),
                P(125, 'Valid Palindrome', 'valid-palindrome'),
            ],
            templateIds: ['two-pointers-one-input'],
        },
        'two-pointers-two-inputs': {
            id: 'two-pointers-two-inputs',
            name: 'Two pointers, two inputs',
            pattern: 'Two Pointers',
            summary:
                'Merge sorted arrays, subsequence checks. One pointer per input; advance the one whose element is consumed.',
            docsUrl: 'https://resources.devweekends.com/dsa-patterns/two-pointers',
            problems: [
                P(88, 'Merge Sorted Array', 'merge-sorted-array'),
                P(392, 'Is Subsequence', 'is-subsequence'),
                P(986, 'Interval List Intersections', 'interval-list-intersections'),
            ],
            templateIds: ['two-pointers-two-inputs'],
        },
        'two-pointers-fast-slow-inplace': {
            id: 'two-pointers-fast-slow-inplace',
            name: 'Two pointers, read/write in place',
            pattern: 'Two Pointers',
            summary:
                'Remove duplicates, move zeroes, partition in O(1) space. A fast pointer reads every element; a slow pointer marks where the next kept element is written.',
            docsUrl: 'https://resources.devweekends.com/dsa-patterns/two-pointers',
            problems: [
                P(26, 'Remove Duplicates from Sorted Array', 'remove-duplicates-from-sorted-array'),
                P(283, 'Move Zeroes', 'move-zeroes'),
                P(27, 'Remove Element', 'remove-element'),
                P(75, 'Sort Colors', 'sort-colors'),
            ],
            templateIds: [],
        },
        'sliding-window-fixed': {
            id: 'sliding-window-fixed',
            name: 'Sliding window, fixed size',
            pattern: 'Sliding Window',
            summary:
                'Every window of exactly K elements. Add the entering element and remove the leaving one so each step is O(1).',
            docsUrl: 'https://resources.devweekends.com/dsa-patterns/sliding-window',
            problems: [
                P(643, 'Maximum Average Subarray I', 'maximum-average-subarray-i'),
                P(1456, 'Maximum Number of Vowels in a Substring of Given Length', 'maximum-number-of-vowels-in-a-substring-of-given-length'),
            ],
            templateIds: ['sliding-window'],
        },
        'sliding-window-variable': {
            id: 'sliding-window-variable',
            name: 'Sliding window, variable size',
            pattern: 'Sliding Window',
            summary:
                'Longest/shortest subarray meeting a sum-style rule with non-negative values. Expand right, shrink left while the window is invalid (or while valid, for shortest).',
            docsUrl: 'https://resources.devweekends.com/dsa-patterns/sliding-window',
            problems: [
                P(209, 'Minimum Size Subarray Sum', 'minimum-size-subarray-sum'),
                P(713, 'Subarray Product Less Than K', 'subarray-product-less-than-k'),
                P(1004, 'Max Consecutive Ones III', 'max-consecutive-ones-iii'),
            ],
            templateIds: ['sliding-window'],
        },
        'sliding-window-exactly-k': {
            id: 'sliding-window-exactly-k',
            name: 'Sliding window, exactly K',
            pattern: 'Sliding Window',
            summary:
                '"Exactly K" is not monotonic, so count it as atMost(K) - atMost(K-1), each a standard variable window.',
            docsUrl: 'https://resources.devweekends.com/dsa-patterns/sliding-window',
            problems: [
                P(992, 'Subarrays with K Different Integers', 'subarrays-with-k-different-integers'),
                P(1248, 'Count Number of Nice Subarrays', 'count-number-of-nice-subarrays'),
                P(930, 'Binary Subarrays With Sum', 'binary-subarrays-with-sum'),
            ],
            templateIds: [],
        },
        'prefix-sum-range': {
            id: 'prefix-sum-range',
            name: 'Prefix sum, range queries',
            pattern: 'Prefix Sum',
            summary:
                'Range totals on a fixed array, or for each index the total of everything before and after it. Precompute prefix (and suffix) sums or products; each answer is then O(1), e.g. prefix[j+1] - prefix[i].',
            docsUrl: 'https://resources.devweekends.com/dsa-patterns/prefix-sum',
            problems: [
                P(303, 'Range Sum Query - Immutable', 'range-sum-query-immutable'),
                P(304, 'Range Sum Query 2D - Immutable', 'range-sum-query-2d-immutable'),
                P(238, 'Product of Array Except Self', 'product-of-array-except-self'),
                P(724, 'Find Pivot Index', 'find-pivot-index'),
            ],
            templateIds: ['prefix-sum'],
        },
        'prefix-sum-hashmap': {
            id: 'prefix-sum-hashmap',
            name: 'Prefix sum, hash map',
            pattern: 'Prefix Sum',
            summary:
                'Count or find subarrays with sum K when negatives break sliding window. Store prefix-sum counts (seeded with {0: 1}) and look up prefix - K.',
            docsUrl: 'https://resources.devweekends.com/dsa-patterns/prefix-sum',
            problems: [
                P(560, 'Subarray Sum Equals K', 'subarray-sum-equals-k'),
                P(525, 'Contiguous Array', 'contiguous-array'),
                P(974, 'Subarray Sums Divisible by K', 'subarray-sums-divisible-by-k'),
            ],
            templateIds: ['hashmap-find-number-of-subarrays'],
        },
        'string-building': {
            id: 'string-building',
            name: 'String building',
            pattern: 'String',
            summary:
                'Producing a new string piece by piece. Append to a list or builder and join once at the end; repeated concatenation is O(n^2).',
            docsUrl: 'https://resources.devweekends.com/dsa-patterns/stack',
            problems: [
                P(151, 'Reverse Words in a String', 'reverse-words-in-a-string'),
                P(443, 'String Compression', 'string-compression'),
                P(1768, 'Merge Strings Alternately', 'merge-strings-alternately'),
            ],
            templateIds: ['string-building'],
        },

        'binary-search-classic': {
            id: 'binary-search-classic',
            name: 'Binary search, find target',
            pattern: 'Binary Search',
            summary:
                'Find an exact value in a sorted (or rotated) space. Halve the range each step by comparing the middle with the target.',
            docsUrl: 'https://resources.devweekends.com/dsa-patterns/binary-search',
            problems: [
                P(704, 'Binary Search', 'binary-search'),
                P(153, 'Find Minimum in Rotated Sorted Array', 'find-minimum-in-rotated-sorted-array'),
                P(33, 'Search in Rotated Sorted Array', 'search-in-rotated-sorted-array'),
                P(74, 'Search a 2D Matrix', 'search-a-2d-matrix'),
            ],
            templateIds: ['binary-search'],
        },
        'binary-search-left-bound': {
            id: 'binary-search-left-bound',
            name: 'Binary search, left bound',
            pattern: 'Binary Search',
            summary:
                'First position of X or its insertion point. Keep searching left when nums[mid] >= X to land on the leftmost index.',
            docsUrl: 'https://resources.devweekends.com/dsa-patterns/binary-search',
            problems: [
                P(35, 'Search Insert Position', 'search-insert-position'),
                P(278, 'First Bad Version', 'first-bad-version'),
                P(34, 'Find First and Last Position of Element in Sorted Array', 'find-first-and-last-position-of-element-in-sorted-array'),
            ],
            templateIds: ['binary-search-left-insertion'],
        },
        'binary-search-right-bound': {
            id: 'binary-search-right-bound',
            name: 'Binary search, right bound',
            pattern: 'Binary Search',
            summary:
                'Last position of X, or count of elements <= X. Search for the insertion point after every copy of X (go right when nums[mid] <= X).',
            docsUrl: 'https://resources.devweekends.com/dsa-patterns/binary-search',
            problems: [
                P(34, 'Find First and Last Position of Element in Sorted Array', 'find-first-and-last-position-of-element-in-sorted-array'),
                P(744, 'Find Smallest Letter Greater Than Target', 'find-smallest-letter-greater-than-target'),
            ],
            templateIds: ['binary-search-right-insertion'],
        },
        'binary-search-answer-minimize': {
            id: 'binary-search-answer-minimize',
            name: 'Binary search on answer, minimum',
            pattern: 'Binary Search',
            summary:
                'Smallest value that still works (min capacity, min speed, minimize the max). Binary search the answer range with a greedy feasibility check.',
            docsUrl: 'https://resources.devweekends.com/dsa-patterns/binary-search',
            problems: [
                P(875, 'Koko Eating Bananas', 'koko-eating-bananas'),
                P(1011, 'Capacity To Ship Packages Within D Days', 'capacity-to-ship-packages-within-d-days'),
                P(410, 'Split Array Largest Sum', 'split-array-largest-sum'),
            ],
            templateIds: ['binary-search-greedy-minimum'],
        },
        'binary-search-answer-maximize': {
            id: 'binary-search-answer-maximize',
            name: 'Binary search on answer, maximum',
            pattern: 'Binary Search',
            summary:
                'Largest value that still works (maximize the minimum distance). Binary search the answer range, keeping the best feasible value.',
            docsUrl: 'https://resources.devweekends.com/dsa-patterns/binary-search',
            problems: [
                P(69, 'Sqrt(x)', 'sqrtx'),
                P(1552, 'Magnetic Force Between Two Balls', 'magnetic-force-between-two-balls'),
                P(2226, 'Maximum Candies Allocated to K Children', 'maximum-candies-allocated-to-k-children'),
            ],
            templateIds: ['binary-search-greedy-maximum'],
        },
        'sort-first': {
            id: 'sort-first',
            name: 'Sort first, then scan',
            pattern: 'Sorting',
            summary:
                'Intervals, meetings, or anything easier in order. Sort (often by start or end), then apply a linear scan, greedy, heap, or two pointers.',
            docsUrl: 'https://resources.devweekends.com/dsa-patterns/sorting',
            problems: [
                P(56, 'Merge Intervals', 'merge-intervals'),
                P(435, 'Non-overlapping Intervals', 'non-overlapping-intervals'),
                P(57, 'Insert Interval', 'insert-interval'),
            ],
            templateIds: [],
        },

        'hashmap-frequency': {
            id: 'hashmap-frequency',
            name: 'Hash map, lookup and frequency',
            pattern: 'Hash Map',
            summary:
                'Counting, duplicates, anagrams, grouping, or unsorted two-sum. Store counts or complements so each lookup is O(1).',
            docsUrl: 'https://resources.devweekends.com/dsa-patterns/hashmap',
            problems: [
                P(1, 'Two Sum', 'two-sum'),
                P(217, 'Contains Duplicate', 'contains-duplicate'),
                P(242, 'Valid Anagram', 'valid-anagram'),
                P(49, 'Group Anagrams', 'group-anagrams'),
                P(36, 'Valid Sudoku', 'valid-sudoku'),
                P(128, 'Longest Consecutive Sequence', 'longest-consecutive-sequence'),
            ],
            templateIds: [],
        },
        'hashmap-sliding-window': {
            id: 'hashmap-sliding-window',
            name: 'Sliding window, hash map',
            pattern: 'Sliding Window',
            summary:
                'Substring with no repeats, at most K distinct, or containing all of T. A frequency map tracks the window so you know when to shrink.',
            docsUrl: 'https://resources.devweekends.com/dsa-patterns/sliding-window',
            problems: [
                P(3, 'Longest Substring Without Repeating Characters', 'longest-substring-without-repeating-characters'),
                P(76, 'Minimum Window Substring', 'minimum-window-substring'),
                P(424, 'Longest Repeating Character Replacement', 'longest-repeating-character-replacement'),
            ],
            templateIds: ['hashmap-sliding-window'],
        },
        'stack-matching': {
            id: 'stack-matching',
            name: 'Stack, matching and saved state',
            pattern: 'Stack',
            summary:
                'Brackets, expression evaluation, path simplification, undo, or a stack that also tracks extra state. Push openings, or state alongside each value; pop when the match arrives or to restore earlier state.',
            docsUrl: 'https://resources.devweekends.com/dsa-patterns/stack',
            problems: [
                P(20, 'Valid Parentheses', 'valid-parentheses'),
                P(71, 'Simplify Path', 'simplify-path'),
                P(155, 'Min Stack', 'min-stack'),
                P(150, 'Evaluate Reverse Polish Notation', 'evaluate-reverse-polish-notation'),
            ],
            templateIds: [],
        },
        'monotonic-stack-increasing': {
            id: 'monotonic-stack-increasing',
            name: 'Monotonic stack, increasing',
            pattern: 'Monotonic Stack',
            summary:
                'Next/previous smaller element. Keep the stack increasing; a smaller arrival pops and resolves the taller entries.',
            docsUrl: 'https://resources.devweekends.com/dsa-patterns/monotonic-stack',
            problems: [
                P(84, 'Largest Rectangle in Histogram', 'largest-rectangle-in-histogram'),
                P(85, 'Maximal Rectangle', 'maximal-rectangle'),
            ],
            templateIds: ['stack-monotonic-increasing'],
        },
        'monotonic-stack-decreasing': {
            id: 'monotonic-stack-decreasing',
            name: 'Monotonic stack, decreasing',
            pattern: 'Monotonic Stack',
            summary:
                'Next/previous greater element. Keep the stack decreasing; a larger arrival pops and resolves the smaller entries.',
            docsUrl: 'https://resources.devweekends.com/dsa-patterns/monotonic-stack',
            problems: [
                P(739, 'Daily Temperatures', 'daily-temperatures'),
                P(496, 'Next Greater Element I', 'next-greater-element-i'),
                P(503, 'Next Greater Element II', 'next-greater-element-ii'),
                P(901, 'Online Stock Span', 'online-stock-span'),
            ],
            templateIds: ['stack-monotonic-decreasing'],
        },
        'monotonic-deque': {
            id: 'monotonic-deque',
            name: 'Monotonic deque',
            pattern: 'Monotonic Deque',
            summary:
                'Max or min of every window of size K. Keep a deque of indices in monotonic order; drop expired indices from the front.',
            docsUrl: 'https://resources.devweekends.com/dsa-patterns/queue',
            problems: [
                P(239, 'Sliding Window Maximum', 'sliding-window-maximum'),
                P(1438, 'Longest Continuous Subarray With Absolute Diff Less Than or Equal to Limit', 'longest-continuous-subarray-with-absolute-diff-less-than-or-equal-to-limit'),
            ],
            templateIds: [],
        },
        'queue-design': {
            id: 'queue-design',
            name: 'Queue design',
            pattern: 'Queue',
            summary:
                'Rolling windows over recent items, rate limiting, fixed-size queues. FIFO of values or timestamps, evicting from the front as they expire.',
            docsUrl: 'https://resources.devweekends.com/dsa-patterns/queue',
            problems: [
                P(933, 'Number of Recent Calls', 'number-of-recent-calls'),
                P(622, 'Design Circular Queue', 'design-circular-queue'),
                P(346, 'Moving Average from Data Stream', 'moving-average-from-data-stream'),
            ],
            templateIds: [],
        },
        'design-hashmap-linked-list': {
            id: 'design-hashmap-linked-list',
            name: 'Hash map + doubly linked list',
            pattern: 'Design',
            summary:
                "Constant-time lookup plus constant-time reordering or eviction by recency. A hash map finds a key's node; a doubly linked list keeps items in recency order, oldest at one end.",
            docsUrl: 'https://resources.devweekends.com/dsa-patterns/linked-list',
            problems: [
                P(146, 'LRU Cache', 'lru-cache'),
                P(460, 'LFU Cache', 'lfu-cache', true),
            ],
            templateIds: [],
        },
        'heap-top-k': {
            id: 'heap-top-k',
            name: 'Heap, top K and repeated max',
            pattern: 'Heap',
            summary:
                'K largest, K most frequent, Kth element (also in a stream), or taking the current largest again and again. A min-heap of size K for top K; a max-heap of everything when you must keep pulling the largest.',
            docsUrl: 'https://resources.devweekends.com/dsa-patterns/heap',
            problems: [
                P(215, 'Kth Largest Element in an Array', 'kth-largest-element-in-an-array'),
                P(347, 'Top K Frequent Elements', 'top-k-frequent-elements'),
                P(703, 'Kth Largest Element in a Stream', 'kth-largest-element-in-a-stream'),
                P(1046, 'Last Stone Weight', 'last-stone-weight'),
                P(973, 'K Closest Points to Origin', 'k-closest-points-to-origin'),
            ],
            templateIds: ['heap-find-top-k-elements'],
        },
        'heap-merge-k': {
            id: 'heap-merge-k',
            name: 'Heap, merge K sorted',
            pattern: 'Heap',
            summary:
                'Merge K sorted lists or streams. Push each head into a min-heap; pop the smallest and push its successor.',
            docsUrl: 'https://resources.devweekends.com/dsa-patterns/heap',
            problems: [
                P(23, 'Merge k Sorted Lists', 'merge-k-sorted-lists'),
                P(378, 'Kth Smallest Element in a Sorted Matrix', 'kth-smallest-element-in-a-sorted-matrix'),
                P(373, 'Find K Pairs with Smallest Sums', 'find-k-pairs-with-smallest-sums'),
                P(1046, 'Last Stone Weight', 'last-stone-weight', true),
            ],
            templateIds: [],
        },
        'two-heaps': {
            id: 'two-heaps',
            name: 'Two heaps',
            pattern: 'Heap',
            summary:
                'Running median of a stream. A max-heap holds the lower half and a min-heap the upper half, rebalanced so sizes differ by at most one.',
            docsUrl: 'https://resources.devweekends.com/dsa-patterns/heap',
            problems: [
                P(295, 'Find Median from Data Stream', 'find-median-from-data-stream'),
                P(480, 'Sliding Window Median', 'sliding-window-median'),
            ],
            templateIds: [],
        },
        trie: {
            id: 'trie',
            name: 'Trie',
            pattern: 'Trie',
            summary:
                'Prefix matching, autocomplete, word dictionaries. Store words character by character in a tree so prefix lookups cost O(length).',
            docsUrl: 'https://resources.devweekends.com/dsa-patterns/trie',
            problems: [
                P(208, 'Implement Trie (Prefix Tree)', 'implement-trie-prefix-tree'),
                P(211, 'Design Add and Search Words Data Structure', 'design-add-and-search-words-data-structure'),
                P(212, 'Word Search II', 'word-search-ii'),
            ],
            templateIds: ['ds-trie'],
        },
        'linked-list-fast-slow': {
            id: 'linked-list-fast-slow',
            name: 'Linked list, fast and slow pointers',
            pattern: 'Linked List',
            summary:
                "Cycle detection, middle node, Nth from end. Move one pointer twice as fast (Floyd's) or give one a head start.",
            docsUrl: 'https://resources.devweekends.com/dsa-patterns/linked-list',
            problems: [
                P(141, 'Linked List Cycle', 'linked-list-cycle'),
                P(876, 'Middle of the Linked List', 'middle-of-the-linked-list'),
                P(19, 'Remove Nth Node From End of List', 'remove-nth-node-from-end-of-list'),
                P(142, 'Linked List Cycle II', 'linked-list-cycle-ii'),
            ],
            templateIds: ['linkedlist-fast-and-slow-pointer'],
        },
        'linked-list-reverse': {
            id: 'linked-list-reverse',
            name: 'Linked list, reverse',
            pattern: 'Linked List',
            summary:
                'Reverse a whole list, a sublist, or k-groups. Walk with prev/curr/next and flip each pointer.',
            docsUrl: 'https://resources.devweekends.com/dsa-patterns/linked-list',
            problems: [
                P(206, 'Reverse Linked List', 'reverse-linked-list'),
                P(92, 'Reverse Linked List II', 'reverse-linked-list-ii'),
                P(25, 'Reverse Nodes in k-Group', 'reverse-nodes-in-k-group'),
            ],
            templateIds: ['linkedlist-reverse'],
        },
        'linked-list-merge-sorted': {
            id: 'linked-list-merge-sorted',
            name: 'Linked list, merge sorted',
            pattern: 'Linked List',
            summary:
                'Merge two sorted lists. Use a dummy head and always attach the smaller of the two current nodes.',
            docsUrl: 'https://resources.devweekends.com/dsa-patterns/linked-list',
            problems: [
                P(21, 'Merge Two Sorted Lists', 'merge-two-sorted-lists'),
                P(148, 'Sort List', 'sort-list'),
            ],
            templateIds: [],
        },
        'linked-list-split-reverse-merge': {
            id: 'linked-list-split-reverse-merge',
            name: 'Linked list, split, reverse, merge',
            pattern: 'Linked List',
            summary:
                'Interleave or compare the two halves of a list. Find the middle with fast and slow pointers, reverse the second half, then merge or compare it with the first.',
            docsUrl: 'https://resources.devweekends.com/dsa-patterns/linked-list',
            problems: [
                P(143, 'Reorder List', 'reorder-list'),
                P(234, 'Palindrome Linked List', 'palindrome-linked-list'),
                P(2130, 'Maximum Twin Sum of a Linked List', 'maximum-twin-sum-of-a-linked-list'),
            ],
            templateIds: [],
        },

        'tree-dfs-recursive': {
            id: 'tree-dfs-recursive',
            name: 'Tree DFS, recursive',
            pattern: 'DFS',
            summary:
                'Anything computed at each node from its children, or checked against values passed down from its ancestors. Recurse into each child; combine answers on the way up, or pass bounds and running values down.',
            docsUrl: 'https://resources.devweekends.com/dsa-patterns/dfs',
            problems: [
                P(226, 'Invert Binary Tree', 'invert-binary-tree'),
                P(104, 'Maximum Depth of Binary Tree', 'maximum-depth-of-binary-tree'),
                P(543, 'Diameter of Binary Tree', 'diameter-of-binary-tree'),
                P(110, 'Balanced Binary Tree', 'balanced-binary-tree'),
                P(100, 'Same Tree', 'same-tree'),
                P(572, 'Subtree of Another Tree', 'subtree-of-another-tree'),
                P(235, 'Lowest Common Ancestor of a Binary Search Tree', 'lowest-common-ancestor-of-a-binary-search-tree', true),
                P(1448, 'Count Good Nodes in Binary Tree', 'count-good-nodes-in-binary-tree'),
                P(98, 'Validate Binary Search Tree', 'validate-binary-search-tree'),
            ],
            templateIds: ['tree-dfs-recursive'],
        },
        'tree-dfs-iterative': {
            id: 'tree-dfs-iterative',
            name: 'Tree DFS, iterative',
            pattern: 'DFS',
            summary:
                'Traversals you must pause, or trees too deep to recurse. Replace recursion with an explicit stack, often for an in-order walk you can pause.',
            docsUrl: 'https://resources.devweekends.com/dsa-patterns/dfs',
            problems: [
                P(173, 'Binary Search Tree Iterator', 'binary-search-tree-iterator'),
                P(230, 'Kth Smallest Element in a BST', 'kth-smallest-element-in-a-bst'),
                P(94, 'Binary Tree Inorder Traversal', 'binary-tree-inorder-traversal'),
            ],
            templateIds: ['tree-dfs-iterative'],
        },
        'bst-walk': {
            id: 'bst-walk',
            name: 'BST, walk by ordering',
            pattern: 'Binary Search Tree',
            summary:
                'Search, insert, delete, or a lowest common ancestor in a BST. Compare with the node and step to the one child that can hold the answer: O(height), no full traversal.',
            docsUrl: 'https://resources.devweekends.com/dsa-patterns/dfs',
            problems: [
                P(235, 'Lowest Common Ancestor of a Binary Search Tree', 'lowest-common-ancestor-of-a-binary-search-tree'),
                P(700, 'Search in a Binary Search Tree', 'search-in-a-binary-search-tree'),
                P(701, 'Insert into a Binary Search Tree', 'insert-into-a-binary-search-tree'),
                P(450, 'Delete Node in a BST', 'delete-node-in-a-bst'),
            ],
            templateIds: [],
        },
        'tree-bfs': {
            id: 'tree-bfs',
            name: 'Tree BFS, level order',
            pattern: 'BFS',
            summary:
                'Anything computed per level. Process the queue one level at a time using its size as a snapshot.',
            docsUrl: 'https://resources.devweekends.com/dsa-patterns/bfs',
            problems: [
                P(102, 'Binary Tree Level Order Traversal', 'binary-tree-level-order-traversal'),
                P(199, 'Binary Tree Right Side View', 'binary-tree-right-side-view'),
                P(103, 'Binary Tree Zigzag Level Order Traversal', 'binary-tree-zigzag-level-order-traversal'),
            ],
            templateIds: ['tree-bfs'],
        },
        'graph-dfs': {
            id: 'graph-dfs',
            name: 'Graph DFS',
            pattern: 'DFS',
            summary:
                'Connected components, region sizes, copying a structure, or which cells connect to the border. Explore fully from each unvisited node (or from every border cell), marking visited.',
            docsUrl: 'https://resources.devweekends.com/dsa-patterns/dfs',
            problems: [
                P(200, 'Number of Islands', 'number-of-islands'),
                P(695, 'Max Area of Island', 'max-area-of-island'),
                P(133, 'Clone Graph', 'clone-graph'),
                P(417, 'Pacific Atlantic Water Flow', 'pacific-atlantic-water-flow'),
                P(130, 'Surrounded Regions', 'surrounded-regions'),
            ],
            templateIds: ['graph-dfs-recursive', 'graph-dfs-iterative'],
        },
        'graph-bfs-shortest-path': {
            id: 'graph-bfs-shortest-path',
            name: 'Graph BFS, shortest path',
            pattern: 'BFS',
            summary:
                'Fewest steps in an unweighted graph or grid. BFS from the start; the level at which you reach the target is the distance.',
            docsUrl: 'https://resources.devweekends.com/dsa-patterns/bfs',
            problems: [
                P(127, 'Word Ladder', 'word-ladder'),
                P(1091, 'Shortest Path in Binary Matrix', 'shortest-path-in-binary-matrix'),
                P(752, 'Open the Lock', 'open-the-lock'),
            ],
            templateIds: ['graph-bfs'],
        },
        'multi-source-bfs': {
            id: 'multi-source-bfs',
            name: 'Multi-source BFS',
            pattern: 'BFS',
            summary:
                'Something spreads from many cells at once. Enqueue every source first, then run one BFS.',
            docsUrl: 'https://resources.devweekends.com/dsa-patterns/bfs',
            problems: [
                P(994, 'Rotting Oranges', 'rotting-oranges'),
                P(542, '01 Matrix', '01-matrix'),
                P(417, 'Pacific Atlantic Water Flow', 'pacific-atlantic-water-flow', true),
                P(130, 'Surrounded Regions', 'surrounded-regions', true),
            ],
            templateIds: [],
        },
        'shortest-path-weighted': {
            id: 'shortest-path-weighted',
            name: 'Shortest path, weighted',
            pattern: 'Graph Algorithms',
            summary:
                'Shortest path with edge weights. Dijkstra (min-heap) for non-negative weights; Bellman-Ford for negatives or at most K edges.',
            docsUrl: 'https://resources.devweekends.com/dsa-patterns/graph-algorithms',
            problems: [
                P(743, 'Network Delay Time', 'network-delay-time'),
                P(787, 'Cheapest Flights Within K Stops', 'cheapest-flights-within-k-stops'),
                P(1631, 'Path With Minimum Effort', 'path-with-minimum-effort'),
            ],
            templateIds: ['graph-dijkstra', 'graph-bellman-ford'],
        },
        'topological-sort': {
            id: 'topological-sort',
            name: 'Topological sort',
            pattern: 'Graph Algorithms',
            summary:
                "Ordering with dependencies, or detecting that none exists. Kahn's algorithm: repeatedly take nodes with in-degree 0.",
            docsUrl: 'https://resources.devweekends.com/dsa-patterns/graph-algorithms',
            problems: [
                P(207, 'Course Schedule', 'course-schedule'),
                P(210, 'Course Schedule II', 'course-schedule-ii'),
            ],
            templateIds: ['graph-kahn'],
        },
        'union-find': {
            id: 'union-find',
            name: 'Union-find',
            pattern: 'Union Find',
            summary:
                'Are two items in the same group, merging groups, redundant edges (undirected cycles). Keep a parent array with path compression and union by rank.',
            docsUrl: 'https://resources.devweekends.com/dsa-patterns/union-find',
            problems: [
                P(684, 'Redundant Connection', 'redundant-connection'),
                P(721, 'Accounts Merge', 'accounts-merge'),
                P(547, 'Number of Provinces', 'number-of-provinces'),
            ],
            templateIds: ['ds-union-find', 'ds-union-find-optimized'],
        },
        mst: {
            id: 'mst',
            name: 'Minimum spanning tree',
            pattern: 'Graph Algorithms',
            summary:
                'Minimum cost to connect all points. Kruskal (sort edges + Union Find) or Prim (grow from a node with a min-heap).',
            docsUrl: 'https://resources.devweekends.com/dsa-patterns/graph-algorithms',
            problems: [
                P(1584, 'Min Cost to Connect All Points', 'min-cost-to-connect-all-points'),
            ],
            templateIds: ['graph-kruskal', 'graph-prim'],
        },

        backtracking: {
            id: 'backtracking',
            name: 'Backtracking',
            pattern: 'Backtracking',
            summary:
                'Generate all subsets, permutations, or combinations. Choose, recurse, un-choose, recording each complete candidate.',
            docsUrl: 'https://resources.devweekends.com/dsa-patterns/backtracking',
            problems: [
                P(78, 'Subsets', 'subsets'),
                P(46, 'Permutations', 'permutations'),
                P(77, 'Combinations', 'combinations'),
                P(39, 'Combination Sum', 'combination-sum'),
            ],
            templateIds: ['backtracking'],
        },
        'backtracking-pruning': {
            id: 'backtracking-pruning',
            name: 'Backtracking, pruning',
            pattern: 'Backtracking',
            summary:
                'Constraint puzzles where a partial choice can be checked early. Backtrack, but reject a partial choice as soon as it breaks a constraint.',
            docsUrl: 'https://resources.devweekends.com/dsa-patterns/backtracking',
            problems: [
                P(51, 'N-Queens', 'n-queens'),
                P(37, 'Sudoku Solver', 'sudoku-solver'),
                P(79, 'Word Search', 'word-search'),
            ],
            templateIds: [],
        },
        'dp-top-down': {
            id: 'dp-top-down',
            name: 'DP, top-down',
            pattern: 'Dynamic Programming',
            summary:
                'Overlapping subproblems where the recursion is the natural statement. Write the recursive choice, then cache results by state.',
            docsUrl: 'https://resources.devweekends.com/dsa-patterns/dynamic-programming',
            problems: [
                P(139, 'Word Break', 'word-break'),
                P(91, 'Decode Ways', 'decode-ways'),
            ],
            templateIds: ['dp-top-down'],
        },
        'dp-bottom-up': {
            id: 'dp-bottom-up',
            name: 'DP, bottom-up',
            pattern: 'Dynamic Programming',
            summary:
                'Each state depends on earlier indices or neighbor cells. Fill a dp table from the base cases forward.',
            docsUrl: 'https://resources.devweekends.com/dsa-patterns/dynamic-programming',
            problems: [
                P(198, 'House Robber', 'house-robber'),
                P(62, 'Unique Paths', 'unique-paths'),
                P(64, 'Minimum Path Sum', 'minimum-path-sum'),
                P(70, 'Climbing Stairs', 'climbing-stairs'),
            ],
            templateIds: ['dp-bottom-up'],
        },
        'dp-kadane': {
            id: 'dp-kadane',
            name: "Kadane's algorithm",
            pattern: 'Dynamic Programming',
            summary:
                'Maximum sum subarray, or the best gain of a later value over an earlier one. At each element, either extend the running best or restart from it (for a gain, track the lowest value so far); keep the best seen.',
            docsUrl: 'https://resources.devweekends.com/dsa-patterns/dynamic-programming',
            problems: [
                P(53, 'Maximum Subarray', 'maximum-subarray'),
                P(152, 'Maximum Product Subarray', 'maximum-product-subarray'),
                P(918, 'Maximum Sum Circular Subarray', 'maximum-sum-circular-subarray'),
                P(121, 'Best Time to Buy and Sell Stock', 'best-time-to-buy-and-sell-stock'),
            ],
            templateIds: ['dp-kadane'],
        },
        'dp-unbounded-knapsack': {
            id: 'dp-unbounded-knapsack',
            name: 'Unbounded knapsack',
            pattern: 'Dynamic Programming',
            summary:
                'Items reusable any number of times: fewest items, or number of ways, to reach a total. 1D dp over the target, looping capacity forward.',
            docsUrl: 'https://resources.devweekends.com/dsa-patterns/dynamic-programming',
            problems: [
                P(322, 'Coin Change', 'coin-change'),
                P(518, 'Coin Change II', 'coin-change-ii'),
                P(279, 'Perfect Squares', 'perfect-squares'),
            ],
            templateIds: [],
        },
        'dp-01-knapsack': {
            id: 'dp-01-knapsack',
            name: '0/1 knapsack',
            pattern: 'Dynamic Programming',
            summary:
                'Each item used at most once: can a subset, or how many subsets, reach a total. dp over capacity, looping capacity backwards per item.',
            docsUrl: 'https://resources.devweekends.com/dsa-patterns/dynamic-programming',
            problems: [
                P(416, 'Partition Equal Subset Sum', 'partition-equal-subset-sum'),
                P(494, 'Target Sum', 'target-sum'),
                P(474, 'Ones and Zeroes', 'ones-and-zeroes'),
            ],
            templateIds: [],
        },
        'dp-sequences': {
            id: 'dp-sequences',
            name: 'DP, sequences',
            pattern: 'Dynamic Programming',
            summary:
                'Longest increasing or common subsequence, edit distance. dp[i] over one sequence or dp[i][j] over prefixes of two.',
            docsUrl: 'https://resources.devweekends.com/dsa-patterns/dynamic-programming',
            problems: [
                P(300, 'Longest Increasing Subsequence', 'longest-increasing-subsequence'),
                P(1143, 'Longest Common Subsequence', 'longest-common-subsequence'),
                P(72, 'Edit Distance', 'edit-distance'),
            ],
            templateIds: [],
        },
        greedy: {
            id: 'greedy',
            name: 'Greedy',
            pattern: 'Greedy',
            summary:
                'Take the locally best move in one pass when an exchange argument shows it is never worse.',
            docsUrl: 'https://resources.devweekends.com/dsa-patterns/greedy',
            problems: [
                P(121, 'Best Time to Buy and Sell Stock', 'best-time-to-buy-and-sell-stock', true),
                P(55, 'Jump Game', 'jump-game'),
                P(134, 'Gas Station', 'gas-station'),
                P(763, 'Partition Labels', 'partition-labels'),
            ],
            templateIds: [],
        },
        'bit-manipulation': {
            id: 'bit-manipulation',
            name: 'Bit manipulation',
            pattern: 'Bit Manipulation',
            summary:
                'Single number among pairs, set bits, powers of two. Use XOR, masks, and shifts to work on bits directly in O(1) space.',
            docsUrl: 'https://resources.devweekends.com/dsa-patterns/bit-manipulation',
            problems: [
                P(136, 'Single Number', 'single-number'),
                P(191, 'Number of 1 Bits', 'number-of-1-bits'),
                P(231, 'Power of Two', 'power-of-two'),
                P(338, 'Counting Bits', 'counting-bits'),
            ],
            templateIds: [
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
        },
    },
}
