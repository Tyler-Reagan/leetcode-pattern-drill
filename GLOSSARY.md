# Glossary

**Pattern**
A reusable algorithmic approach that a LeetCode problem can be mapped to, such as two pointers or sliding window. The set of patterns follows the devweekends DSA patterns docs.

**Pattern variant**
A specific form of a pattern that a problem's wording points to, such as sliding window with a variable size, or binary search on the answer. A pattern variant is what a leaf of the finder identifies. Several pattern variants can share one template.

**Template**
A code skeleton for a pattern, held in the repo in the supported languages. Not every pattern variant has one.

**Cue**
A phrase written like a LeetCode problem statement that signals a pattern, such as "sorted array, find a pair with sum X". Cues are the options a user chooses between.

**Supported language**
A programming language the app offers templates in. The list is shared by the whole app. A language is supported only once every template has a version in it, or is explicitly marked as not having one.

**Pattern finder**
The view of the app where a user identifies a pattern variant by answering a sequence of cue questions.

**Reference**
The view of the app that holds the full cheatsheet: every pattern's explanation and templates, browsed freely rather than reached through the finder. It is the secondary view; the pattern finder is the front door.

**Leaf**
The end of a path in the finder's decision tree. A leaf is exactly one pattern variant.

**Drill run**
One attempt at the finder, from starting the countdown at the root to reaching a leaf or resetting. The user supplies the problem themselves, from their own LeetCode practice; the app does not pick or track problems.

**Budget**
The 30 seconds a drill run is meant to fit within. Going past it is overtime; it does not end the run.

**Backtrack**
Returning to the previous question in a drill run. The clock keeps running.

**Path log**
The wide left column of the Flow view: one ruled row per answered check (step number, the question, the cue picked). Each row backtracks to that check. In code: `PathLog.tsx`, `styles.log`. On phones it gives way to the station-line dots row.

**Flow mode**
The default view of the pattern finder: the countdown, the question card and the path log. Keys work here (1-9, Enter, Backspace, Escape). In code: `mode === 'flow'` (`FinderMode` in `useFinderRun.ts`).

**Map mode**
The second view of the pattern finder, reached with the Flow | Map switch or key M. It shows every check and pattern as one chart with the run's path highlighted. Map mode pauses the clock and keeps the run; returning to Flow resumes it. Entering Map from idle never starts a clock. In code: `mode === 'map'`, rendered by `MapView.tsx` (desktop) and `MapOutline.tsx` (phones), with the chart in `MapCanvas.tsx` and the layout in `finder/graph.ts`.

**Inspect**
The read-only side panel in Map mode. It shows the check or pattern selected on the map: its options and where each leads, or a pattern's templates. Inspecting never answers a question and has no clock. In code: `Inspect` in `MapView.tsx`.
