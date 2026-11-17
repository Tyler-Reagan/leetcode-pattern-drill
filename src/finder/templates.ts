import { tree } from './tree'
import type { TemplateEntry } from './types'

import BacktrackingPY from '@code/python/backtracking/backtracking.py?raw'
import BacktrackingJS from '@code/javascript/backtracking/backtracking.js?raw'
import BacktrackingJAVA from '@code/java/backtracking/backtracking.java?raw'
import BacktrackingCPP from '@code/cpp/backtracking/backtracking.cpp?raw'
import BinarySearchPY from '@code/python/binary_search/binary_search.py?raw'
import BinarySearchJS from '@code/javascript/binary_search/binary_search.js?raw'
import BinarySearchJAVA from '@code/java/binary_search/binary_search.java?raw'
import BinarySearchCPP from '@code/cpp/binary_search/binary_search.cpp?raw'
import BinarySearchGreedyMaximumPY from '@code/python/binary_search/greedy_maximum.py?raw'
import BinarySearchGreedyMaximumJS from '@code/javascript/binary_search/greedy_maximum.js?raw'
import BinarySearchGreedyMaximumJAVA from '@code/java/binary_search/greedy_maximum.java?raw'
import BinarySearchGreedyMaximumCPP from '@code/cpp/binary_search/greedy_maximum.cpp?raw'
import BinarySearchGreedyMinimumPY from '@code/python/binary_search/greedy_minimum.py?raw'
import BinarySearchGreedyMinimumJS from '@code/javascript/binary_search/greedy_minimum.js?raw'
import BinarySearchGreedyMinimumJAVA from '@code/java/binary_search/greedy_minimum.java?raw'
import BinarySearchGreedyMinimumCPP from '@code/cpp/binary_search/greedy_minimum.cpp?raw'
import BinarySearchLeftInsertionPY from '@code/python/binary_search/duplicate_elements_left_insertion.py?raw'
import BinarySearchLeftInsertionJS from '@code/javascript/binary_search/duplicate_elements_left_insertion.js?raw'
import BinarySearchLeftInsertionJAVA from '@code/java/binary_search/duplicate_elements_left_insertion.java?raw'
import BinarySearchLeftInsertionCPP from '@code/cpp/binary_search/duplicate_elements_left_insertion.cpp?raw'
import BinarySearchRightInsertionPY from '@code/python/binary_search/duplicate_elements_right_insertion.py?raw'
import BinarySearchRightInsertionJS from '@code/javascript/binary_search/duplicate_elements_right_insertion.js?raw'
import BinarySearchRightInsertionJAVA from '@code/java/binary_search/duplicate_elements_right_insertion.java?raw'
import BinarySearchRightInsertionCPP from '@code/cpp/binary_search/duplicate_elements_right_insertion.cpp?raw'
import BitmanipulationCheckPowerOfTwoPY from '@code/python/bit_manipulation/check_power_of_two.py?raw'
import BitmanipulationCheckPowerOfTwoJS from '@code/javascript/bit_manipulation/check_power_of_two.js?raw'
import BitmanipulationCheckPowerOfTwoJAVA from '@code/java/bit_manipulation/check_power_of_two.java?raw'
import BitmanipulationCheckPowerOfTwoCPP from '@code/cpp/bit_manipulation/check_power_of_two.cpp?raw'
import BitmanipulationClearKthBitPY from '@code/python/bit_manipulation/clear_kth_bit.py?raw'
import BitmanipulationClearKthBitJS from '@code/javascript/bit_manipulation/clear_kth_bit.js?raw'
import BitmanipulationClearKthBitJAVA from '@code/java/bit_manipulation/clear_kth_bit.java?raw'
import BitmanipulationClearKthBitCPP from '@code/cpp/bit_manipulation/clear_kth_bit.cpp?raw'
import BitmanipulationCountSetBitsPY from '@code/python/bit_manipulation/count_set_bits.py?raw'
import BitmanipulationCountSetBitsJS from '@code/javascript/bit_manipulation/count_set_bits.js?raw'
import BitmanipulationCountSetBitsJAVA from '@code/java/bit_manipulation/count_set_bits.java?raw'
import BitmanipulationCountSetBitsCPP from '@code/cpp/bit_manipulation/count_set_bits.cpp?raw'
import BitmanipulationDividePowerOfTwoPY from '@code/python/bit_manipulation/divide_power_of_two.py?raw'
import BitmanipulationDividePowerOfTwoJS from '@code/javascript/bit_manipulation/divide_power_of_two.js?raw'
import BitmanipulationDividePowerOfTwoJAVA from '@code/java/bit_manipulation/divide_power_of_two.java?raw'
import BitmanipulationDividePowerOfTwoCPP from '@code/cpp/bit_manipulation/divide_power_of_two.cpp?raw'
import BitmanipulationGetRightmostBitPY from '@code/python/bit_manipulation/get_rightmost_bit.py?raw'
import BitmanipulationGetRightmostBitJS from '@code/javascript/bit_manipulation/get_rightmost_bit.js?raw'
import BitmanipulationGetRightmostBitJAVA from '@code/java/bit_manipulation/get_rightmost_bit.java?raw'
import BitmanipulationGetRightmostBitCPP from '@code/cpp/bit_manipulation/get_rightmost_bit.cpp?raw'
import BitmanipulationMultiplyPowerOfTwoPY from '@code/python/bit_manipulation/multiply_power_of_two.py?raw'
import BitmanipulationMultiplyPowerOfTwoJS from '@code/javascript/bit_manipulation/multiply_power_of_two.js?raw'
import BitmanipulationMultiplyPowerOfTwoJAVA from '@code/java/bit_manipulation/multiply_power_of_two.java?raw'
import BitmanipulationMultiplyPowerOfTwoCPP from '@code/cpp/bit_manipulation/multiply_power_of_two.cpp?raw'
import BitmanipulationSetKthBitPY from '@code/python/bit_manipulation/set_kth_bit.py?raw'
import BitmanipulationSetKthBitJS from '@code/javascript/bit_manipulation/set_kth_bit.js?raw'
import BitmanipulationSetKthBitJAVA from '@code/java/bit_manipulation/set_kth_bit.java?raw'
import BitmanipulationSetKthBitCPP from '@code/cpp/bit_manipulation/set_kth_bit.cpp?raw'
import BitmanipulationSwapVariablesPY from '@code/python/bit_manipulation/swap_variables.py?raw'
import BitmanipulationSwapVariablesJS from '@code/javascript/bit_manipulation/swap_variables.js?raw'
import BitmanipulationSwapVariablesJAVA from '@code/java/bit_manipulation/swap_variables.java?raw'
import BitmanipulationSwapVariablesCPP from '@code/cpp/bit_manipulation/swap_variables.cpp?raw'
import BitmanipulationTestKthBitPY from '@code/python/bit_manipulation/test_kth_bit.py?raw'
import BitmanipulationTestKthBitJS from '@code/javascript/bit_manipulation/test_kth_bit.js?raw'
import BitmanipulationTestKthBitJAVA from '@code/java/bit_manipulation/test_kth_bit.java?raw'
import BitmanipulationTestKthBitCPP from '@code/cpp/bit_manipulation/test_kth_bit.cpp?raw'
import BitmanipulationToggleKthBitPY from '@code/python/bit_manipulation/toggle_kth_bit.py?raw'
import BitmanipulationToggleKthBitJS from '@code/javascript/bit_manipulation/toggle_kth_bit.js?raw'
import BitmanipulationToggleKthBitJAVA from '@code/java/bit_manipulation/toggle_kth_bit.java?raw'
import BitmanipulationToggleKthBitCPP from '@code/cpp/bit_manipulation/toggle_kth_bit.cpp?raw'
import DpBottomUpPY from '@code/python/dynamic_programming/bottom_up.py?raw'
import DpBottomUpJS from '@code/javascript/dynamic_programming/bottom_up.js?raw'
import DpBottomUpJAVA from '@code/java/dynamic_programming/bottom_up.java?raw'
import DpBottomUpCPP from '@code/cpp/dynamic_programming/bottom_up.cpp?raw'
import DpKadanePY from '@code/python/dynamic_programming/kadane.py?raw'
import DpKadaneJS from '@code/javascript/dynamic_programming/kadane.js?raw'
import DpKadaneJAVA from '@code/java/dynamic_programming/kadane.java?raw'
import DpKadaneCPP from '@code/cpp/dynamic_programming/kadane.cpp?raw'
import DpTopDownPY from '@code/python/dynamic_programming/top_down.py?raw'
import DpTopDownJS from '@code/javascript/dynamic_programming/top_down.js?raw'
import DpTopDownJAVA from '@code/java/dynamic_programming/top_down.java?raw'
import DpTopDownCPP from '@code/cpp/dynamic_programming/top_down.cpp?raw'
import DsHashMapPY from '@code/python/data_structures/hash_map.py?raw'
import DsHashMapJS from '@code/javascript/data_structures/hash_map.js?raw'
import DsHashMapJAVA from '@code/java/data_structures/hash_map.java?raw'
import DsHashMapCPP from '@code/cpp/data_structures/hash_map.cpp?raw'
import DsTriePY from '@code/python/data_structures/trie.py?raw'
import DsTrieJS from '@code/javascript/data_structures/trie.js?raw'
import DsTrieJAVA from '@code/java/data_structures/trie.java?raw'
import DsTrieCPP from '@code/cpp/data_structures/trie.cpp?raw'
import DsUnionFindPY from '@code/python/data_structures/union_find.py?raw'
import DsUnionFindJS from '@code/javascript/data_structures/union_find.js?raw'
import DsUnionFindJAVA from '@code/java/data_structures/union_find.java?raw'
import DsUnionFindCPP from '@code/cpp/data_structures/union_find.cpp?raw'
import DsUnionFindOptimizedPY from '@code/python/data_structures/union_find_optimized.py?raw'
import DsUnionFindOptimizedJS from '@code/javascript/data_structures/union_find_optimized.js?raw'
import DsUnionFindOptimizedJAVA from '@code/java/data_structures/union_find_optimized.java?raw'
import DsUnionFindOptimizedCPP from '@code/cpp/data_structures/union_find_optimized.cpp?raw'
import GraphBellmanFordPY from '@code/python/graph/bellman_ford.py?raw'
import GraphBellmanFordJS from '@code/javascript/graph/bellman_ford.js?raw'
import GraphBellmanFordJAVA from '@code/java/graph/bellman_ford.java?raw'
import GraphBellmanFordCPP from '@code/cpp/graph/bellman_ford.cpp?raw'
import GraphBfsPY from '@code/python/graph/bfs.py?raw'
import GraphBfsJS from '@code/javascript/graph/bfs.js?raw'
import GraphBfsJAVA from '@code/java/graph/bfs.java?raw'
import GraphBfsCPP from '@code/cpp/graph/bfs.cpp?raw'
import GraphDfsIterativePY from '@code/python/graph/dfs_iterative.py?raw'
import GraphDfsIterativeJS from '@code/javascript/graph/dfs_iterative.js?raw'
import GraphDfsIterativeJAVA from '@code/java/graph/dfs_iterative.java?raw'
import GraphDfsIterativeCPP from '@code/cpp/graph/dfs_iterative.cpp?raw'
import GraphDfsRecursivePY from '@code/python/graph/dfs_recursive.py?raw'
import GraphDfsRecursiveJS from '@code/javascript/graph/dfs_recursive.js?raw'
import GraphDfsRecursiveJAVA from '@code/java/graph/dfs_recursive.java?raw'
import GraphDfsRecursiveCPP from '@code/cpp/graph/dfs_recursive.cpp?raw'
import GraphDijkstraPY from '@code/python/graph/dijkstra.py?raw'
import GraphDijkstraJS from '@code/javascript/graph/dijkstra.js?raw'
import GraphDijkstraJAVA from '@code/java/graph/dijkstra.java?raw'
import GraphDijkstraCPP from '@code/cpp/graph/dijkstra.cpp?raw'
import GraphKahnPY from '@code/python/graph/kahn.py?raw'
import GraphKahnJS from '@code/javascript/graph/kahn.js?raw'
import GraphKahnJAVA from '@code/java/graph/kahn.java?raw'
import GraphKahnCPP from '@code/cpp/graph/kahn.cpp?raw'
import GraphKruskalPY from '@code/python/graph/kruskal.py?raw'
import GraphKruskalJS from '@code/javascript/graph/kruskal.js?raw'
import GraphKruskalJAVA from '@code/java/graph/kruskal.java?raw'
import GraphKruskalCPP from '@code/cpp/graph/kruskal.cpp?raw'
import GraphPrimPY from '@code/python/graph/prim.py?raw'
import GraphPrimJS from '@code/javascript/graph/prim.js?raw'
import GraphPrimJAVA from '@code/java/graph/prim.java?raw'
import GraphPrimCPP from '@code/cpp/graph/prim.cpp?raw'
import HashmapFindNumberOfSubarraysPY from '@code/python/hash_map/find_number_of_subarrays.py?raw'
import HashmapFindNumberOfSubarraysJS from '@code/javascript/hash_map/find_number_of_subarrays.js?raw'
import HashmapFindNumberOfSubarraysJAVA from '@code/java/hash_map/find_number_of_subarrays.java?raw'
import HashmapFindNumberOfSubarraysCPP from '@code/cpp/hash_map/find_number_of_subarrays.cpp?raw'
import HashmapSlidingWindowPY from '@code/python/hash_map/sliding_window.py?raw'
import HashmapSlidingWindowJS from '@code/javascript/hash_map/sliding_window.js?raw'
import HashmapSlidingWindowJAVA from '@code/java/hash_map/sliding_window.java?raw'
import HashmapSlidingWindowCPP from '@code/cpp/hash_map/sliding_window.cpp?raw'
import HeapFindTopKElementsPY from '@code/python/heap/find_top_k_elements.py?raw'
import HeapFindTopKElementsJS from '@code/javascript/heap/find_top_k_elements.js?raw'
import HeapFindTopKElementsJAVA from '@code/java/heap/find_top_k_elements.java?raw'
import HeapFindTopKElementsCPP from '@code/cpp/heap/find_top_k_elements.cpp?raw'
import LinkedlistFastAndSlowPointerPY from '@code/python/linked_list/fast_and_slow_pointer.py?raw'
import LinkedlistFastAndSlowPointerJS from '@code/javascript/linked_list/fast_and_slow_pointer.js?raw'
import LinkedlistFastAndSlowPointerJAVA from '@code/java/linked_list/fast_and_slow_pointer.java?raw'
import LinkedlistFastAndSlowPointerCPP from '@code/cpp/linked_list/fast_and_slow_pointer.cpp?raw'
import LinkedlistReversePY from '@code/python/linked_list/reverse_linked_list.py?raw'
import LinkedlistReverseJS from '@code/javascript/linked_list/reverse_linked_list.js?raw'
import LinkedlistReverseJAVA from '@code/java/linked_list/reverse_linked_list.java?raw'
import LinkedlistReverseCPP from '@code/cpp/linked_list/reverse_linked_list.cpp?raw'
import PrefixSumPY from '@code/python/array/prefix_sum.py?raw'
import PrefixSumJS from '@code/javascript/array/prefix_sum.js?raw'
import PrefixSumJAVA from '@code/java/array/prefix_sum.java?raw'
import PrefixSumCPP from '@code/cpp/array/prefix_sum.cpp?raw'
import SlidingWindowPY from '@code/python/array/sliding_window.py?raw'
import SlidingWindowJS from '@code/javascript/array/sliding_window.js?raw'
import SlidingWindowJAVA from '@code/java/array/sliding_window.java?raw'
import SlidingWindowCPP from '@code/cpp/array/sliding_window.cpp?raw'
import StackMonotonicDecreasingPY from '@code/python/stack/monotonic_decreasing.py?raw'
import StackMonotonicDecreasingJS from '@code/javascript/stack/monotonic_decreasing.js?raw'
import StackMonotonicDecreasingJAVA from '@code/java/stack/monotonic_decreasing.java?raw'
import StackMonotonicDecreasingCPP from '@code/cpp/stack/monotonic_decreasing.cpp?raw'
import StackMonotonicIncreasingPY from '@code/python/stack/monotonic_increasing.py?raw'
import StackMonotonicIncreasingJS from '@code/javascript/stack/monotonic_increasing.js?raw'
import StackMonotonicIncreasingJAVA from '@code/java/stack/monotonic_increasing.java?raw'
import StackMonotonicIncreasingCPP from '@code/cpp/stack/monotonic_increasing.cpp?raw'
import StringBuildingPY from '@code/python/array/string_building.py?raw'
import StringBuildingJS from '@code/javascript/array/string_building.js?raw'
import StringBuildingJAVA from '@code/java/array/string_building.java?raw'
import StringBuildingCPP from '@code/cpp/array/string_building.cpp?raw'
import TreeBfsPY from '@code/python/binary_tree/bfs.py?raw'
import TreeBfsJS from '@code/javascript/binary_tree/bfs.js?raw'
import TreeBfsJAVA from '@code/java/binary_tree/bfs.java?raw'
import TreeBfsCPP from '@code/cpp/binary_tree/bfs.cpp?raw'
import TreeDfsIterativePY from '@code/python/binary_tree/dfs_iterative.py?raw'
import TreeDfsIterativeJS from '@code/javascript/binary_tree/dfs_iterative.js?raw'
import TreeDfsIterativeJAVA from '@code/java/binary_tree/dfs_iterative.java?raw'
import TreeDfsIterativeCPP from '@code/cpp/binary_tree/dfs_iterative.cpp?raw'
import TreeDfsRecursivePY from '@code/python/binary_tree/dfs_recursive.py?raw'
import TreeDfsRecursiveJS from '@code/javascript/binary_tree/dfs_recursive.js?raw'
import TreeDfsRecursiveJAVA from '@code/java/binary_tree/dfs_recursive.java?raw'
import TreeDfsRecursiveCPP from '@code/cpp/binary_tree/dfs_recursive.cpp?raw'
import TwoPointersOneInputPY from '@code/python/array/two_pointers_one_input.py?raw'
import TwoPointersOneInputJS from '@code/javascript/array/two_pointers_one_input.js?raw'
import TwoPointersOneInputJAVA from '@code/java/array/two_pointers_one_input.java?raw'
import TwoPointersOneInputCPP from '@code/cpp/array/two_pointers_one_input.cpp?raw'
import TwoPointersTwoInputsPY from '@code/python/array/two_pointers_two_inputs.py?raw'
import TwoPointersTwoInputsJS from '@code/javascript/array/two_pointers_two_inputs.js?raw'
import TwoPointersTwoInputsJAVA from '@code/java/array/two_pointers_two_inputs.java?raw'
import TwoPointersTwoInputsCPP from '@code/cpp/array/two_pointers_two_inputs.cpp?raw'

/** Code templates keyed by the templateIds used in tree.ts. */
const TEMPLATES: Record<string, TemplateEntry> = {
    'backtracking': {
        title: 'backtracking',
        code: { python: BacktrackingPY, javascript: BacktrackingJS, java: BacktrackingJAVA, cpp: BacktrackingCPP },
    },
    'binary-search': {
        title: 'binary search',
        code: { python: BinarySearchPY, javascript: BinarySearchJS, java: BinarySearchJAVA, cpp: BinarySearchCPP },
    },
    'binary-search-greedy-maximum': {
        title: 'greedy (maximum)',
        code: { python: BinarySearchGreedyMaximumPY, javascript: BinarySearchGreedyMaximumJS, java: BinarySearchGreedyMaximumJAVA, cpp: BinarySearchGreedyMaximumCPP },
    },
    'binary-search-greedy-minimum': {
        title: 'greedy (minimum)',
        code: { python: BinarySearchGreedyMinimumPY, javascript: BinarySearchGreedyMinimumJS, java: BinarySearchGreedyMinimumJAVA, cpp: BinarySearchGreedyMinimumCPP },
    },
    'binary-search-left-insertion': {
        title: 'duplicate elements, left-most insertion point',
        code: { python: BinarySearchLeftInsertionPY, javascript: BinarySearchLeftInsertionJS, java: BinarySearchLeftInsertionJAVA, cpp: BinarySearchLeftInsertionCPP },
    },
    'binary-search-right-insertion': {
        title: 'duplicate elements, right-most insertion point',
        code: { python: BinarySearchRightInsertionPY, javascript: BinarySearchRightInsertionJS, java: BinarySearchRightInsertionJAVA, cpp: BinarySearchRightInsertionCPP },
    },
    'bitmanipulation-check-power-of-two': {
        title: 'check if number is power of 2',
        code: { python: BitmanipulationCheckPowerOfTwoPY, javascript: BitmanipulationCheckPowerOfTwoJS, java: BitmanipulationCheckPowerOfTwoJAVA, cpp: BitmanipulationCheckPowerOfTwoCPP },
    },
    'bitmanipulation-clear-kth-bit': {
        title: 'clear kth bit',
        code: { python: BitmanipulationClearKthBitPY, javascript: BitmanipulationClearKthBitJS, java: BitmanipulationClearKthBitJAVA, cpp: BitmanipulationClearKthBitCPP },
    },
    'bitmanipulation-count-set-bits': {
        title: 'count set bits',
        code: { python: BitmanipulationCountSetBitsPY, javascript: BitmanipulationCountSetBitsJS, java: BitmanipulationCountSetBitsJAVA, cpp: BitmanipulationCountSetBitsCPP },
    },
    'bitmanipulation-divide-power-of-two': {
        title: 'divide by 2^k',
        code: { python: BitmanipulationDividePowerOfTwoPY, javascript: BitmanipulationDividePowerOfTwoJS, java: BitmanipulationDividePowerOfTwoJAVA, cpp: BitmanipulationDividePowerOfTwoCPP },
    },
    'bitmanipulation-get-rightmost-bit': {
        title: 'get rightmost bit',
        code: { python: BitmanipulationGetRightmostBitPY, javascript: BitmanipulationGetRightmostBitJS, java: BitmanipulationGetRightmostBitJAVA, cpp: BitmanipulationGetRightmostBitCPP },
    },
    'bitmanipulation-multiply-power-of-two': {
        title: 'multiply by 2^k',
        code: { python: BitmanipulationMultiplyPowerOfTwoPY, javascript: BitmanipulationMultiplyPowerOfTwoJS, java: BitmanipulationMultiplyPowerOfTwoJAVA, cpp: BitmanipulationMultiplyPowerOfTwoCPP },
    },
    'bitmanipulation-set-kth-bit': {
        title: 'set kth bit',
        code: { python: BitmanipulationSetKthBitPY, javascript: BitmanipulationSetKthBitJS, java: BitmanipulationSetKthBitJAVA, cpp: BitmanipulationSetKthBitCPP },
    },
    'bitmanipulation-swap-variables': {
        title: 'swap two variables',
        code: { python: BitmanipulationSwapVariablesPY, javascript: BitmanipulationSwapVariablesJS, java: BitmanipulationSwapVariablesJAVA, cpp: BitmanipulationSwapVariablesCPP },
    },
    'bitmanipulation-test-kth-bit': {
        title: 'test kth-bit',
        code: { python: BitmanipulationTestKthBitPY, javascript: BitmanipulationTestKthBitJS, java: BitmanipulationTestKthBitJAVA, cpp: BitmanipulationTestKthBitCPP },
    },
    'bitmanipulation-toggle-kth-bit': {
        title: 'toggle kth bit',
        code: { python: BitmanipulationToggleKthBitPY, javascript: BitmanipulationToggleKthBitJS, java: BitmanipulationToggleKthBitJAVA, cpp: BitmanipulationToggleKthBitCPP },
    },
    'dp-bottom-up': {
        title: 'DP bottom-up',
        code: { python: DpBottomUpPY, javascript: DpBottomUpJS, java: DpBottomUpJAVA, cpp: DpBottomUpCPP },
    },
    'dp-kadane': {
        title: 'Kadane (max-sum subarray)',
        code: { python: DpKadanePY, javascript: DpKadaneJS, java: DpKadaneJAVA, cpp: DpKadaneCPP },
    },
    'dp-top-down': {
        title: 'DP top-down',
        code: { python: DpTopDownPY, javascript: DpTopDownJS, java: DpTopDownJAVA, cpp: DpTopDownCPP },
    },
    'ds-hash-map': {
        title: 'hash map',
        code: { python: DsHashMapPY, javascript: DsHashMapJS, java: DsHashMapJAVA, cpp: DsHashMapCPP },
    },
    'ds-trie': {
        title: 'trie',
        code: { python: DsTriePY, javascript: DsTrieJS, java: DsTrieJAVA, cpp: DsTrieCPP },
    },
    'ds-union-find': {
        title: 'union find',
        code: { python: DsUnionFindPY, javascript: DsUnionFindJS, java: DsUnionFindJAVA, cpp: DsUnionFindCPP },
    },
    'ds-union-find-optimized': {
        title: 'union find optimized',
        code: { python: DsUnionFindOptimizedPY, javascript: DsUnionFindOptimizedJS, java: DsUnionFindOptimizedJAVA, cpp: DsUnionFindOptimizedCPP },
    },
    'graph-bellman-ford': {
        title: 'Bellman-Ford (shortest path)',
        code: { python: GraphBellmanFordPY, javascript: GraphBellmanFordJS, java: GraphBellmanFordJAVA, cpp: GraphBellmanFordCPP },
    },
    'graph-bfs': {
        title: 'BFS',
        code: { python: GraphBfsPY, javascript: GraphBfsJS, java: GraphBfsJAVA, cpp: GraphBfsCPP },
    },
    'graph-dfs-iterative': {
        title: 'DFS (iterative)',
        code: { python: GraphDfsIterativePY, javascript: GraphDfsIterativeJS, java: GraphDfsIterativeJAVA, cpp: GraphDfsIterativeCPP },
    },
    'graph-dfs-recursive': {
        title: 'DFS (recursive)',
        code: { python: GraphDfsRecursivePY, javascript: GraphDfsRecursiveJS, java: GraphDfsRecursiveJAVA, cpp: GraphDfsRecursiveCPP },
    },
    'graph-dijkstra': {
        title: 'Dijkstra (shortest path)',
        code: { python: GraphDijkstraPY, javascript: GraphDijkstraJS, java: GraphDijkstraJAVA, cpp: GraphDijkstraCPP },
    },
    'graph-kahn': {
        title: 'Kahn (topological sort)',
        code: { python: GraphKahnPY, javascript: GraphKahnJS, java: GraphKahnJAVA, cpp: GraphKahnCPP },
    },
    'graph-kruskal': {
        title: 'Kruskal (mst)',
        code: { python: GraphKruskalPY, javascript: GraphKruskalJS, java: GraphKruskalJAVA, cpp: GraphKruskalCPP },
    },
    'graph-prim': {
        title: 'Prim (mst)',
        code: { python: GraphPrimPY, javascript: GraphPrimJS, java: GraphPrimJAVA, cpp: GraphPrimCPP },
    },
    'hashmap-find-number-of-subarrays': {
        title: 'find number of subarrays that fit an exact criteria',
        code: { python: HashmapFindNumberOfSubarraysPY, javascript: HashmapFindNumberOfSubarraysJS, java: HashmapFindNumberOfSubarraysJAVA, cpp: HashmapFindNumberOfSubarraysCPP },
    },
    'hashmap-sliding-window': {
        title: 'sliding window',
        code: { python: HashmapSlidingWindowPY, javascript: HashmapSlidingWindowJS, java: HashmapSlidingWindowJAVA, cpp: HashmapSlidingWindowCPP },
    },
    'heap-find-top-k-elements': {
        title: 'find top k elements',
        code: { python: HeapFindTopKElementsPY, javascript: HeapFindTopKElementsJS, java: HeapFindTopKElementsJAVA, cpp: HeapFindTopKElementsCPP },
    },
    'linkedlist-fast-and-slow-pointer': {
        title: 'fast and slow pointer',
        code: { python: LinkedlistFastAndSlowPointerPY, javascript: LinkedlistFastAndSlowPointerJS, java: LinkedlistFastAndSlowPointerJAVA, cpp: LinkedlistFastAndSlowPointerCPP },
    },
    'linkedlist-reverse': {
        title: 'reverse linked list',
        code: { python: LinkedlistReversePY, javascript: LinkedlistReverseJS, java: LinkedlistReverseJAVA, cpp: LinkedlistReverseCPP },
    },
    'prefix-sum': {
        title: 'prefix sum',
        code: { python: PrefixSumPY, javascript: PrefixSumJS, java: PrefixSumJAVA, cpp: PrefixSumCPP },
    },
    'sliding-window': {
        title: 'sliding window',
        code: { python: SlidingWindowPY, javascript: SlidingWindowJS, java: SlidingWindowJAVA, cpp: SlidingWindowCPP },
    },
    'stack-monotonic-decreasing': {
        title: 'monotonic decreasing stack',
        code: { python: StackMonotonicDecreasingPY, javascript: StackMonotonicDecreasingJS, java: StackMonotonicDecreasingJAVA, cpp: StackMonotonicDecreasingCPP },
    },
    'stack-monotonic-increasing': {
        title: 'monotonic increasing stack',
        code: { python: StackMonotonicIncreasingPY, javascript: StackMonotonicIncreasingJS, java: StackMonotonicIncreasingJAVA, cpp: StackMonotonicIncreasingCPP },
    },
    'string-building': {
        title: 'efficient string building',
        code: { python: StringBuildingPY, javascript: StringBuildingJS, java: StringBuildingJAVA, cpp: StringBuildingCPP },
    },
    'tree-bfs': {
        title: 'BFS',
        code: { python: TreeBfsPY, javascript: TreeBfsJS, java: TreeBfsJAVA, cpp: TreeBfsCPP },
    },
    'tree-dfs-iterative': {
        title: 'DFS (iterative)',
        code: { python: TreeDfsIterativePY, javascript: TreeDfsIterativeJS, java: TreeDfsIterativeJAVA, cpp: TreeDfsIterativeCPP },
    },
    'tree-dfs-recursive': {
        title: 'DFS (recursive)',
        code: { python: TreeDfsRecursivePY, javascript: TreeDfsRecursiveJS, java: TreeDfsRecursiveJAVA, cpp: TreeDfsRecursiveCPP },
    },
    'two-pointers-one-input': {
        title: 'two pointers: one input, opposite ends',
        code: { python: TwoPointersOneInputPY, javascript: TwoPointersOneInputJS, java: TwoPointersOneInputJAVA, cpp: TwoPointersOneInputCPP },
    },
    'two-pointers-two-inputs': {
        title: 'two pointers: two inputs, exhaust both',
        code: { python: TwoPointersTwoInputsPY, javascript: TwoPointersTwoInputsJS, java: TwoPointersTwoInputsJAVA, cpp: TwoPointersTwoInputsCPP },
    },
}

/** Templates for a leaf, in the order its templateIds lists them. Unknown leaves give []. */
export function getTemplates(leafId: string): TemplateEntry[] {
    const leaf = tree.leaves[leafId]
    if (!leaf) return []
    return leaf.templateIds.map(id => TEMPLATES[id]).filter((t): t is TemplateEntry => Boolean(t))
}
