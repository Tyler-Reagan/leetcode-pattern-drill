# Pattern Finder: leaves without templates

16 of 49 leaves in src/finder/tree.ts have `templateIds: []`. Add a template and list its id in the leaf to close each one.

## Two Pointers

- [ ] **Two pointers, read/write in place** (two-pointers-fast-slow-inplace). [docs](https://resources.devweekends.com/dsa-patterns/two-pointers)

## Sliding Window

- [ ] **Exactly K via at-most trick** (sliding-window-exactly-k). [docs](https://resources.devweekends.com/dsa-patterns/sliding-window)

## HashMap

- [ ] **Hash map lookup / frequency** (hashmap-frequency). [docs](https://resources.devweekends.com/dsa-patterns/hashmap)
  The `ds-hash-map` template is a HashMap class, not a counting or complement-lookup skeleton, so it is not used here.

## Sorting

- [ ] **Sort first, then scan** (sort-first). [docs](https://resources.devweekends.com/dsa-patterns/sorting)

## Stack

- [ ] **Stack (matching / LIFO)** (stack-matching). [docs](https://resources.devweekends.com/dsa-patterns/stack)

## Queue

- [ ] **Monotonic deque** (monotonic-deque). [docs](https://resources.devweekends.com/dsa-patterns/queue)
- [ ] **Queue design** (queue-design). [docs](https://resources.devweekends.com/dsa-patterns/queue)

## Heap

- [ ] **Heap, merge K sorted** (heap-merge-k). [docs](https://resources.devweekends.com/dsa-patterns/heap)
- [ ] **Two heaps** (two-heaps). [docs](https://resources.devweekends.com/dsa-patterns/heap)

## Linked List

- [ ] **Merge sorted lists** (linked-list-merge-sorted). [docs](https://resources.devweekends.com/dsa-patterns/linked-list)

## BFS

- [ ] **Multi-source BFS** (multi-source-bfs). [docs](https://resources.devweekends.com/dsa-patterns/bfs)

## Backtracking

- [ ] **Backtracking with pruning** (backtracking-pruning). [docs](https://resources.devweekends.com/dsa-patterns/backtracking)

## Dynamic Programming

- [ ] **Unbounded knapsack** (dp-unbounded-knapsack). [docs](https://resources.devweekends.com/dsa-patterns/dynamic-programming)
- [ ] **0/1 knapsack** (dp-01-knapsack). [docs](https://resources.devweekends.com/dsa-patterns/dynamic-programming)
- [ ] **Sequence DP (LIS / LCS)** (dp-sequences). [docs](https://resources.devweekends.com/dsa-patterns/dynamic-programming)

## Greedy

- [ ] **Greedy** (greedy). [docs](https://resources.devweekends.com/dsa-patterns/greedy)

## Notes

- Shared leaves reuse a template: a leaf can list an existing id (e.g. two sliding-window leaves both point at `sliding-window`), so a new leaf may need no new code if one already covers it.
- Go is deferred. A Go template set would need all 70 existing templates ported.
