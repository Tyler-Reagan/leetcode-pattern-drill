import type { FinderTree } from './types'

// Some nodes and leaves are reachable from more than one question (the tree is a DAG),
// so a problem can be found from whichever cue the user notices.
export const tree: FinderTree = {
    rootId: 'q-input',

    nodes: {
        'q-input': {
            id: 'q-input',
            question: 'What does the problem give you?',
            options: [
                { cue: 'an array or a string', next: 'q-array' },
                { cue: 'a linked list', next: 'q-list' },
                { cue: 'a binary tree or BST', next: 'q-tree' },
                { cue: 'a graph, grid, edges, or prerequisites', next: 'q-graph' },
                { cue: 'a data stream, or a design-a-class prompt', next: 'q-design' },
                { cue: 'an integer n, or bit tricks (single number, XOR)', next: 'q-number' },
            ],
        },

        'q-array': {
            id: 'q-array',
            question: 'What does it ask about the array or string?',
            options: [
                { cue: 'a contiguous subarray or substring (window, sum)', next: 'q-subarray' },
                { cue: 'a pair or triplet, a palindrome, or an in-place edit', next: 'q-pointers' },
                { cue: 'searching a sorted array, or the min/max value that works', next: 'q-search' },
                { cue: 'the next greater or smaller element of each item', next: 'q-mono' },
                { cue: 'counts, duplicates, top K, brackets, words', next: 'q-lookup' },
                { cue: 'choices over elements (all combos, best or count of ways)', next: 'q-choices' },
                { cue: 'intervals (merge, overlaps, meeting rooms)', next: 'sort-first' },
            ],
        },
        'q-subarray': {
            id: 'q-subarray',
            question: 'What does it want from the subarray or substring?',
            options: [
                { cue: 'sum or average of each size-K window', next: 'sliding-window-fixed' },
                { cue: 'longest or shortest window that meets a rule', next: 'q-window-variable' },
                { cue: 'count subarrays with exactly K distinct or odd', next: 'sliding-window-exactly-k' },
                { cue: 'a subarray sum equal to K, or range-sum queries', next: 'q-prefix' },
                { cue: 'maximum sum subarray of any length', next: 'dp-kadane' },
                { cue: 'max or min inside each size-K window', next: 'monotonic-deque' },
            ],
        },
        'q-window-variable': {
            id: 'q-window-variable',
            question: 'What does the window rule check?',
            options: [
                { cue: 'sum or product vs a target (non-negative numbers)', next: 'sliding-window-variable' },
                { cue: 'characters (no repeats, at most K distinct, contains all of T)', next: 'hashmap-sliding-window' },
            ],
        },
        'q-prefix': {
            id: 'q-prefix',
            question: 'What kind of subarray-sum question?',
            options: [
                { cue: 'many queries for the sum between index i and j', next: 'prefix-sum-range' },
                { cue: 'count or longest subarrays with sum K (negatives allowed)', next: 'prefix-sum-hashmap' },
            ],
        },
        'q-pointers': {
            id: 'q-pointers',
            question: 'What are the pointers doing?',
            options: [
                { cue: 'ends moving inward (3Sum, palindrome, reverse, container with most water)', next: 'two-pointers-converging' },
                { cue: 'two arrays or strings (merge sorted, is subsequence)', next: 'two-pointers-two-inputs' },
                { cue: 'in-place rewrite (remove duplicates, move zeroes, partition)', next: 'two-pointers-fast-slow-inplace' },
                { cue: 'two numbers in an unsorted array (sum to X, return indices)', next: 'hashmap-frequency' },
            ],
        },
        'q-search': {
            id: 'q-search',
            question: 'What are you searching for?',
            options: [
                { cue: 'find X, or its index, in a sorted or rotated array', next: 'binary-search-classic' },
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
                { cue: 'next greater element (days until warmer, stock span)', next: 'monotonic-stack-decreasing' },
                { cue: 'next smaller element (largest rectangle in histogram)', next: 'monotonic-stack-increasing' },
                { cue: 'max or min inside each size-K window', next: 'monotonic-deque' },
            ],
        },
        'q-lookup': {
            id: 'q-lookup',
            question: 'What do you need to do with the data?',
            options: [
                { cue: 'counting or grouping (occurrences, duplicates, anagrams)', next: 'hashmap-frequency' },
                { cue: 'top K (K largest, K most frequent, Kth smallest)', next: 'heap-top-k' },
                { cue: 'matching or nesting (parentheses, expressions, simplify path)', next: 'stack-matching' },
                { cue: 'prefix lookups over a word list (autocomplete)', next: 'trie' },
                { cue: 'building an output string (reverse words, compress, join)', next: 'string-building' },
                { cue: 'bit tricks (single number among pairs, XOR)', next: 'bit-manipulation' },
            ],
        },
        'q-choices': {
            id: 'q-choices',
            question: 'What are you trying to do with the choices?',
            options: [
                { cue: 'generate every subset, permutation, or combination', next: 'q-backtrack' },
                { cue: 'best cost, or number of ways, over the choices', next: 'q-dp' },
                { cue: 'locally best move each step (jump game, gas station)', next: 'greedy' },
            ],
        },
        'q-backtrack': {
            id: 'q-backtrack',
            question: 'Can a partial choice be rejected early?',
            options: [
                { cue: 'no, enumerate everything (subsets, permutations, combination sum)', next: 'backtracking' },
                { cue: 'yes, a rule prunes branches (N-Queens, Sudoku, word search)', next: 'backtracking-pruning' },
            ],
        },
        'q-dp': {
            id: 'q-dp',
            question: 'What do the choices look like?',
            options: [
                { cue: 'reusable items (min coins, ways to make X)', next: 'dp-unbounded-knapsack' },
                { cue: 'each item used once (partition equal subset, target sum)', next: 'dp-01-knapsack' },
                { cue: 'one or two sequences (LIS, LCS, edit distance)', next: 'dp-sequences' },
                { cue: 'something else (house robber, unique paths, word break)', next: 'q-dp-style' },
            ],
        },
        'q-dp-style': {
            id: 'q-dp-style',
            question: 'Which way is the recurrence easier to write?',
            options: [
                { cue: 'recurse from a state and cache (word break, decode ways)', next: 'dp-top-down' },
                { cue: 'fill dp[i] or dp[r][c] from earlier cells (house robber, unique paths)', next: 'dp-bottom-up' },
            ],
        },

        'q-list': {
            id: 'q-list',
            question: 'What do you do with the list?',
            options: [
                { cue: 'cycle, middle node, or Nth node from the end', next: 'linked-list-fast-slow' },
                { cue: 'reverse the list, a sublist, or k-groups', next: 'linked-list-reverse' },
                { cue: 'merge two sorted lists', next: 'linked-list-merge-sorted' },
                { cue: 'merge K sorted lists', next: 'heap-merge-k' },
            ],
        },

        'q-tree': {
            id: 'q-tree',
            question: 'What does it ask about the tree?',
            options: [
                { cue: 'level-by-level view (level order, right side view)', next: 'tree-bfs' },
                { cue: 'combine subtree answers (depth, path sum, LCA, validate BST, serialize)', next: 'tree-dfs-recursive' },
                { cue: 'paused or non-recursive traversal (BST iterator, kth smallest)', next: 'tree-dfs-iterative' },
            ],
        },

        'q-graph': {
            id: 'q-graph',
            question: 'What does it ask about the graph or grid?',
            options: [
                { cue: 'explore everything (islands, components, all paths)', next: 'graph-dfs' },
                { cue: 'shortest path or minimum steps', next: 'q-shortest' },
                { cue: 'ordering with prerequisites (course schedule, directed cycle)', next: 'topological-sort' },
                { cue: 'same-group checks (redundant connection, undirected cycle)', next: 'union-find' },
                { cue: 'minimum cost to connect all points', next: 'mst' },
                { cue: 'grid moving right or down (count paths, min path sum)', next: 'q-dp' },
            ],
        },
        'q-shortest': {
            id: 'q-shortest',
            question: 'What kind of shortest path?',
            options: [
                { cue: 'unweighted, from one start (word ladder, maze)', next: 'graph-bfs-shortest-path' },
                { cue: 'spreads from many sources at once (rotting oranges, 01 matrix)', next: 'multi-source-bfs' },
                { cue: 'weighted edges (network delay, cheapest flights)', next: 'shortest-path-weighted' },
            ],
        },

        'q-design': {
            id: 'q-design',
            question: 'What must the structure support?',
            options: [
                { cue: 'median of a data stream', next: 'two-heaps' },
                { cue: 'Kth largest element in a stream', next: 'heap-top-k' },
                { cue: 'moving average, recent calls, circular queue', next: 'queue-design' },
                { cue: 'implement Trie, add and search words', next: 'trie' },
                { cue: 'min stack, undo, browser history', next: 'stack-matching' },
            ],
        },

        'q-number': {
            id: 'q-number',
            question: 'What does it ask about n?',
            options: [
                { cue: 'bit tricks (power of two, set bits, single number, XOR)', next: 'bit-manipulation' },
                { cue: 'nth term from earlier terms (climb n stairs)', next: 'q-dp' },
                { cue: 'integer square root (largest x with x*x <= n)', next: 'binary-search-answer-maximize' },
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
            templateIds: ['two-pointers-one-input'],
        },
        'two-pointers-two-inputs': {
            id: 'two-pointers-two-inputs',
            name: 'Two pointers, two inputs',
            pattern: 'Two Pointers',
            summary:
                'Merge sorted arrays, subsequence checks. One pointer per input; advance the one whose element is consumed.',
            docsUrl: 'https://resources.devweekends.com/dsa-patterns/two-pointers',
            templateIds: ['two-pointers-two-inputs'],
        },
        'two-pointers-fast-slow-inplace': {
            id: 'two-pointers-fast-slow-inplace',
            name: 'Two pointers, read/write in place',
            pattern: 'Two Pointers',
            summary:
                'Remove duplicates, move zeroes, partition in O(1) space. A fast pointer reads every element; a slow pointer marks where the next kept element is written.',
            docsUrl: 'https://resources.devweekends.com/dsa-patterns/two-pointers',
            templateIds: [],
        },
        'sliding-window-fixed': {
            id: 'sliding-window-fixed',
            name: 'Sliding window, fixed size',
            pattern: 'Sliding Window',
            summary:
                'Every window of exactly K elements. Add the entering element and remove the leaving one so each step is O(1).',
            docsUrl: 'https://resources.devweekends.com/dsa-patterns/sliding-window',
            templateIds: ['sliding-window'],
        },
        'sliding-window-variable': {
            id: 'sliding-window-variable',
            name: 'Sliding window, variable size',
            pattern: 'Sliding Window',
            summary:
                'Longest/shortest subarray meeting a sum-style rule with non-negative values. Expand right, shrink left while the window is invalid (or while valid, for shortest).',
            docsUrl: 'https://resources.devweekends.com/dsa-patterns/sliding-window',
            templateIds: ['sliding-window'],
        },
        'sliding-window-exactly-k': {
            id: 'sliding-window-exactly-k',
            name: 'Sliding window, exactly K',
            pattern: 'Sliding Window',
            summary:
                '"Exactly K" is not monotonic, so count it as atMost(K) - atMost(K-1), each a standard variable window.',
            docsUrl: 'https://resources.devweekends.com/dsa-patterns/sliding-window',
            templateIds: [],
        },
        'prefix-sum-range': {
            id: 'prefix-sum-range',
            name: 'Prefix sum, range queries',
            pattern: 'Prefix Sum',
            summary:
                'Many sum-between-i-and-j queries on a fixed array. Precompute prefix[i]; each query is prefix[j+1] - prefix[i] in O(1).',
            docsUrl: 'https://resources.devweekends.com/dsa-patterns/prefix-sum',
            templateIds: ['prefix-sum'],
        },
        'prefix-sum-hashmap': {
            id: 'prefix-sum-hashmap',
            name: 'Prefix sum, hash map',
            pattern: 'Prefix Sum',
            summary:
                'Count or find subarrays with sum K when negatives break sliding window. Store prefix-sum counts (seeded with {0: 1}) and look up prefix - K.',
            docsUrl: 'https://resources.devweekends.com/dsa-patterns/prefix-sum',
            templateIds: ['hashmap-find-number-of-subarrays'],
        },
        'string-building': {
            id: 'string-building',
            name: 'String building',
            pattern: 'String',
            summary:
                'Producing a new string piece by piece. Append to a list or builder and join once at the end; repeated concatenation is O(n^2).',
            docsUrl: 'https://resources.devweekends.com/dsa-patterns/stack',
            templateIds: ['string-building'],
        },

        'binary-search-classic': {
            id: 'binary-search-classic',
            name: 'Binary search, find target',
            pattern: 'Binary Search',
            summary:
                'Find an exact value in a sorted (or rotated) space. Halve the range each step by comparing the middle with the target.',
            docsUrl: 'https://resources.devweekends.com/dsa-patterns/binary-search',
            templateIds: ['binary-search'],
        },
        'binary-search-left-bound': {
            id: 'binary-search-left-bound',
            name: 'Binary search, left bound',
            pattern: 'Binary Search',
            summary:
                'First position of X or its insertion point. Keep searching left when nums[mid] >= X to land on the leftmost index.',
            docsUrl: 'https://resources.devweekends.com/dsa-patterns/binary-search',
            templateIds: ['binary-search-left-insertion'],
        },
        'binary-search-right-bound': {
            id: 'binary-search-right-bound',
            name: 'Binary search, right bound',
            pattern: 'Binary Search',
            summary:
                'Last position of X, or count of elements <= X. Search for the insertion point after every copy of X (go right when nums[mid] <= X).',
            docsUrl: 'https://resources.devweekends.com/dsa-patterns/binary-search',
            templateIds: ['binary-search-right-insertion'],
        },
        'binary-search-answer-minimize': {
            id: 'binary-search-answer-minimize',
            name: 'Binary search on answer, minimum',
            pattern: 'Binary Search',
            summary:
                'Smallest value that still works (min capacity, min speed, minimize the max). Binary search the answer range with a greedy feasibility check.',
            docsUrl: 'https://resources.devweekends.com/dsa-patterns/binary-search',
            templateIds: ['binary-search-greedy-minimum'],
        },
        'binary-search-answer-maximize': {
            id: 'binary-search-answer-maximize',
            name: 'Binary search on answer, maximum',
            pattern: 'Binary Search',
            summary:
                'Largest value that still works (maximize the minimum distance). Binary search the answer range, keeping the best feasible value.',
            docsUrl: 'https://resources.devweekends.com/dsa-patterns/binary-search',
            templateIds: ['binary-search-greedy-maximum'],
        },
        'sort-first': {
            id: 'sort-first',
            name: 'Sort first, then scan',
            pattern: 'Sorting',
            summary:
                'Intervals, meetings, or anything easier in order. Sort (often by start or end), then apply a linear scan, greedy, heap, or two pointers.',
            docsUrl: 'https://resources.devweekends.com/dsa-patterns/sorting',
            templateIds: [],
        },

        'hashmap-frequency': {
            id: 'hashmap-frequency',
            name: 'Hash map, lookup and frequency',
            pattern: 'Hash Map',
            summary:
                'Counting, duplicates, anagrams, grouping, or unsorted two-sum. Store counts or complements so each lookup is O(1).',
            docsUrl: 'https://resources.devweekends.com/dsa-patterns/hashmap',
            templateIds: [],
        },
        'hashmap-sliding-window': {
            id: 'hashmap-sliding-window',
            name: 'Sliding window, hash map',
            pattern: 'Sliding Window',
            summary:
                'Substring with no repeats, at most K distinct, or containing all of T. A frequency map tracks the window so you know when to shrink.',
            docsUrl: 'https://resources.devweekends.com/dsa-patterns/sliding-window',
            templateIds: ['hashmap-sliding-window'],
        },
        'stack-matching': {
            id: 'stack-matching',
            name: 'Stack, matching and undo',
            pattern: 'Stack',
            summary:
                'Brackets, expression evaluation, path simplification, undo. Push openings or state; pop when the matching close or reversal arrives.',
            docsUrl: 'https://resources.devweekends.com/dsa-patterns/stack',
            templateIds: [],
        },
        'monotonic-stack-increasing': {
            id: 'monotonic-stack-increasing',
            name: 'Monotonic stack, increasing',
            pattern: 'Monotonic Stack',
            summary:
                'Next/previous smaller element, largest rectangle in histogram. Keep the stack increasing; a smaller arrival pops and resolves the taller entries.',
            docsUrl: 'https://resources.devweekends.com/dsa-patterns/monotonic-stack',
            templateIds: ['stack-monotonic-increasing'],
        },
        'monotonic-stack-decreasing': {
            id: 'monotonic-stack-decreasing',
            name: 'Monotonic stack, decreasing',
            pattern: 'Monotonic Stack',
            summary:
                'Next/previous greater element, daily temperatures, stock span. Keep the stack decreasing; a larger arrival pops and resolves the smaller entries.',
            docsUrl: 'https://resources.devweekends.com/dsa-patterns/monotonic-stack',
            templateIds: ['stack-monotonic-decreasing'],
        },
        'monotonic-deque': {
            id: 'monotonic-deque',
            name: 'Monotonic deque',
            pattern: 'Monotonic Deque',
            summary:
                'Max or min of every window of size K. Keep a deque of indices in monotonic order; drop expired indices from the front.',
            docsUrl: 'https://resources.devweekends.com/dsa-patterns/queue',
            templateIds: [],
        },
        'queue-design': {
            id: 'queue-design',
            name: 'Queue design',
            pattern: 'Queue',
            summary:
                'Moving average, recent calls, rate limiting, circular queue. FIFO of values or timestamps, evicting from the front as they expire.',
            docsUrl: 'https://resources.devweekends.com/dsa-patterns/queue',
            templateIds: [],
        },
        'heap-top-k': {
            id: 'heap-top-k',
            name: 'Heap, top K',
            pattern: 'Heap',
            summary:
                'K largest, K most frequent, Kth element (also in a stream). Keep a min-heap of size K, popping the smallest when it overflows.',
            docsUrl: 'https://resources.devweekends.com/dsa-patterns/heap',
            templateIds: ['heap-find-top-k-elements'],
        },
        'heap-merge-k': {
            id: 'heap-merge-k',
            name: 'Heap, merge K sorted',
            pattern: 'Heap',
            summary:
                'Merge K sorted lists or streams. Push each head into a min-heap; pop the smallest and push its successor.',
            docsUrl: 'https://resources.devweekends.com/dsa-patterns/heap',
            templateIds: [],
        },
        'two-heaps': {
            id: 'two-heaps',
            name: 'Two heaps',
            pattern: 'Heap',
            summary:
                'Running median of a stream. A max-heap holds the lower half and a min-heap the upper half, rebalanced so sizes differ by at most one.',
            docsUrl: 'https://resources.devweekends.com/dsa-patterns/heap',
            templateIds: [],
        },
        trie: {
            id: 'trie',
            name: 'Trie',
            pattern: 'Trie',
            summary:
                'Prefix matching, autocomplete, word dictionaries. Store words character by character in a tree so prefix lookups cost O(length).',
            docsUrl: 'https://resources.devweekends.com/dsa-patterns/trie',
            templateIds: ['ds-trie'],
        },
        'linked-list-fast-slow': {
            id: 'linked-list-fast-slow',
            name: 'Linked list, fast and slow pointers',
            pattern: 'Linked List',
            summary:
                "Cycle detection, middle node, Nth from end. Move one pointer twice as fast (Floyd's) or give one a head start.",
            docsUrl: 'https://resources.devweekends.com/dsa-patterns/linked-list',
            templateIds: ['linkedlist-fast-and-slow-pointer'],
        },
        'linked-list-reverse': {
            id: 'linked-list-reverse',
            name: 'Linked list, reverse',
            pattern: 'Linked List',
            summary:
                'Reverse a whole list, a sublist, or k-groups. Walk with prev/curr/next and flip each pointer.',
            docsUrl: 'https://resources.devweekends.com/dsa-patterns/linked-list',
            templateIds: ['linkedlist-reverse'],
        },
        'linked-list-merge-sorted': {
            id: 'linked-list-merge-sorted',
            name: 'Linked list, merge sorted',
            pattern: 'Linked List',
            summary:
                'Merge two sorted lists. Use a dummy head and always attach the smaller of the two current nodes.',
            docsUrl: 'https://resources.devweekends.com/dsa-patterns/linked-list',
            templateIds: [],
        },

        'tree-dfs-recursive': {
            id: 'tree-dfs-recursive',
            name: 'Tree DFS, recursive',
            pattern: 'DFS',
            summary:
                'Depth, path sum, LCA, validate BST, serialize. Recurse into children and combine their answers (pre-, in-, or post-order).',
            docsUrl: 'https://resources.devweekends.com/dsa-patterns/dfs',
            templateIds: ['tree-dfs-recursive'],
        },
        'tree-dfs-iterative': {
            id: 'tree-dfs-iterative',
            name: 'Tree DFS, iterative',
            pattern: 'DFS',
            summary:
                'BST iterator, kth smallest, or deep trees. Replace recursion with an explicit stack, often for an in-order walk you can pause.',
            docsUrl: 'https://resources.devweekends.com/dsa-patterns/dfs',
            templateIds: ['tree-dfs-iterative'],
        },
        'tree-bfs': {
            id: 'tree-bfs',
            name: 'Tree BFS, level order',
            pattern: 'BFS',
            summary:
                'Level order, right side view, per-level values. Process the queue one level at a time using its size as a snapshot.',
            docsUrl: 'https://resources.devweekends.com/dsa-patterns/bfs',
            templateIds: ['tree-bfs'],
        },
        'graph-dfs': {
            id: 'graph-dfs',
            name: 'Graph DFS',
            pattern: 'DFS',
            summary:
                'Islands, connected components, all paths, clone graph. Explore fully from each unvisited node, marking visited.',
            docsUrl: 'https://resources.devweekends.com/dsa-patterns/dfs',
            templateIds: ['graph-dfs-recursive', 'graph-dfs-iterative'],
        },
        'graph-bfs-shortest-path': {
            id: 'graph-bfs-shortest-path',
            name: 'Graph BFS, shortest path',
            pattern: 'BFS',
            summary:
                'Fewest steps in an unweighted graph or grid. BFS from the start; the level at which you reach the target is the distance.',
            docsUrl: 'https://resources.devweekends.com/dsa-patterns/bfs',
            templateIds: ['graph-bfs'],
        },
        'multi-source-bfs': {
            id: 'multi-source-bfs',
            name: 'Multi-source BFS',
            pattern: 'BFS',
            summary:
                'Something spreads from many cells at once (rotting oranges, 01 matrix). Enqueue every source first, then run one BFS.',
            docsUrl: 'https://resources.devweekends.com/dsa-patterns/bfs',
            templateIds: [],
        },
        'shortest-path-weighted': {
            id: 'shortest-path-weighted',
            name: 'Shortest path, weighted',
            pattern: 'Graph Algorithms',
            summary:
                'Shortest path with edge weights. Dijkstra (min-heap) for non-negative weights; Bellman-Ford for negatives or at most K edges.',
            docsUrl: 'https://resources.devweekends.com/dsa-patterns/graph-algorithms',
            templateIds: ['graph-dijkstra', 'graph-bellman-ford'],
        },
        'topological-sort': {
            id: 'topological-sort',
            name: 'Topological sort',
            pattern: 'Graph Algorithms',
            summary:
                "Ordering with dependencies, or detecting that none exists. Kahn's algorithm: repeatedly take nodes with in-degree 0.",
            docsUrl: 'https://resources.devweekends.com/dsa-patterns/graph-algorithms',
            templateIds: ['graph-kahn'],
        },
        'union-find': {
            id: 'union-find',
            name: 'Union-find',
            pattern: 'Union Find',
            summary:
                'Are two items in the same group, merging groups, redundant edges (undirected cycles). Keep a parent array with path compression and union by rank.',
            docsUrl: 'https://resources.devweekends.com/dsa-patterns/union-find',
            templateIds: ['ds-union-find', 'ds-union-find-optimized'],
        },
        mst: {
            id: 'mst',
            name: 'Minimum spanning tree',
            pattern: 'Graph Algorithms',
            summary:
                'Minimum cost to connect all points. Kruskal (sort edges + Union Find) or Prim (grow from a node with a min-heap).',
            docsUrl: 'https://resources.devweekends.com/dsa-patterns/graph-algorithms',
            templateIds: ['graph-kruskal', 'graph-prim'],
        },

        backtracking: {
            id: 'backtracking',
            name: 'Backtracking',
            pattern: 'Backtracking',
            summary:
                'Generate all subsets, permutations, or combinations. Choose, recurse, un-choose, recording each complete candidate.',
            docsUrl: 'https://resources.devweekends.com/dsa-patterns/backtracking',
            templateIds: ['backtracking'],
        },
        'backtracking-pruning': {
            id: 'backtracking-pruning',
            name: 'Backtracking, pruning',
            pattern: 'Backtracking',
            summary:
                'Constraint puzzles like N-Queens, Sudoku, word search. Backtrack, but reject a partial choice as soon as it breaks a constraint.',
            docsUrl: 'https://resources.devweekends.com/dsa-patterns/backtracking',
            templateIds: [],
        },
        'dp-top-down': {
            id: 'dp-top-down',
            name: 'DP, top-down',
            pattern: 'Dynamic Programming',
            summary:
                'Overlapping subproblems where the recursion is the natural statement. Write the recursive choice, then cache results by state.',
            docsUrl: 'https://resources.devweekends.com/dsa-patterns/dynamic-programming',
            templateIds: ['dp-top-down'],
        },
        'dp-bottom-up': {
            id: 'dp-bottom-up',
            name: 'DP, bottom-up',
            pattern: 'Dynamic Programming',
            summary:
                'Each state depends on earlier indices or neighbor cells. Fill a dp table from the base cases forward.',
            docsUrl: 'https://resources.devweekends.com/dsa-patterns/dynamic-programming',
            templateIds: ['dp-bottom-up'],
        },
        'dp-kadane': {
            id: 'dp-kadane',
            name: "Kadane's algorithm",
            pattern: 'Dynamic Programming',
            summary:
                'Maximum sum subarray. At each element, either extend the running sum or restart from it; track the best seen.',
            docsUrl: 'https://resources.devweekends.com/dsa-patterns/dynamic-programming',
            templateIds: ['dp-kadane'],
        },
        'dp-unbounded-knapsack': {
            id: 'dp-unbounded-knapsack',
            name: 'Unbounded knapsack',
            pattern: 'Dynamic Programming',
            summary:
                'Items reusable: min coins, ways to make change, climb stairs. 1D dp over the target, looping capacity forward.',
            docsUrl: 'https://resources.devweekends.com/dsa-patterns/dynamic-programming',
            templateIds: [],
        },
        'dp-01-knapsack': {
            id: 'dp-01-knapsack',
            name: '0/1 knapsack',
            pattern: 'Dynamic Programming',
            summary:
                'Each item used at most once: partition equal subset, target sum. dp over capacity, looping capacity backwards per item.',
            docsUrl: 'https://resources.devweekends.com/dsa-patterns/dynamic-programming',
            templateIds: [],
        },
        'dp-sequences': {
            id: 'dp-sequences',
            name: 'DP, sequences',
            pattern: 'Dynamic Programming',
            summary:
                'Longest increasing or common subsequence, edit distance. dp[i] over one sequence or dp[i][j] over prefixes of two.',
            docsUrl: 'https://resources.devweekends.com/dsa-patterns/dynamic-programming',
            templateIds: [],
        },
        greedy: {
            id: 'greedy',
            name: 'Greedy',
            pattern: 'Greedy',
            summary:
                'Jump game, gas station, partition labels. Take the locally best move in one pass when an exchange argument shows it is never worse.',
            docsUrl: 'https://resources.devweekends.com/dsa-patterns/greedy',
            templateIds: [],
        },
        'bit-manipulation': {
            id: 'bit-manipulation',
            name: 'Bit manipulation',
            pattern: 'Bit Manipulation',
            summary:
                'Single number among pairs, set bits, powers of two. Use XOR, masks, and shifts to work on bits directly in O(1) space.',
            docsUrl: 'https://resources.devweekends.com/dsa-patterns/bit-manipulation',
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
