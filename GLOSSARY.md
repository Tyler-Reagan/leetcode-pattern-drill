# Glossary

**Pattern**
A reusable algorithmic approach that a LeetCode problem can be mapped to, such as two pointers or sliding window. The set of patterns follows the devweekends DSA patterns docs.

**Pattern variant**
A specific form of a pattern that a problem's wording points to, such as sliding window with a variable size, or binary search on the answer. A pattern variant is what a leaf of the finder identifies. Several pattern variants can share one template.

**Template**
A code skeleton for a pattern, held in the repo in six languages. Not every pattern variant has one.

**Cue**
A phrase written like a LeetCode problem statement that signals a pattern, such as "sorted array, find a pair with sum X". Cues are the options a user chooses between.

**Supported language**
A programming language the app offers templates in. The list is shared by the whole app. A language is supported only once every template has a version in it, or is explicitly marked as not having one.

**Pattern finder**
The view of the app where a user identifies a pattern variant by answering a sequence of cue questions.

**Leaf**
The end of a path in the finder's decision tree. A leaf is exactly one pattern variant.

**Drill run**
One attempt at the finder, from starting the countdown at the root to reaching a leaf or resetting.

**Budget**
The 30 seconds a drill run is meant to fit within. Going past it is overtime; it does not end the run.

**Backtrack**
Returning to the previous question in a drill run. The clock keeps running.
