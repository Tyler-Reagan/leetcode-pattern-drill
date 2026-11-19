# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users
Someone grinding LeetCode who opens the Pattern Finder alongside a problem and tries to name its pattern in 30 seconds or less. They are mid-session, often tired, repeating the exercise many times, so speed and low friction matter more than discovery. The user supplies the problem themselves; the app does not pick or track problems.

## Product Purpose
Train pattern recognition under a clock. The Pattern Finder is a decision tree of cue questions (written like LeetCode problem statements) that lands on exactly one pattern variant and its code template. Success is a user who can name the pattern, and reach for the right template, faster and without the tree over time.

## Positioning
The timed decision tree is the mechanism: recognition is trained under a 30-second budget, not browsed. The Reference view (the former cheatsheet) is supporting material for looking up what the Finder just identified. A static pattern list or cheatsheet cannot truthfully make this claim.

## Operating Context
Used beside a LeetCode problem in another tab or window, in repeated short runs. A drill run starts the countdown at the root and ends at a leaf or on reset; going over the budget is overtime and does not end the run. Backtracking is allowed and the clock keeps running. Templates exist in Python, JavaScript, Java and C++.

## Capabilities and Constraints
- Three views: Pattern Finder (default, front door), Pareto Set (the curator's 49 core problems, grouped by pattern, each linked out to LeetCode; a fixed list, not tracked) and Reference (full cheatsheet, content unchanged).
- Finder: 49 leaves, at most 5 questions per path; 16 leaves have no template yet (TEMPLATE-TODO.md).
- Stateless: nothing about a run is stored. Only the selected language and the theme choice persist, in localStorage.
- Static site deployed from the committed `docs/` build to GitHub Pages under `/leetcode-pattern-drill/`.
- No router, no backend, no accounts.
- Terms are defined in GLOSSARY.md (pattern, pattern variant, template, cue, leaf, drill run, budget, backtrack, reference, supported language).
- Undecided and out of scope for now: LeetCode integration (importing problems or random sets to drill against), Go support, run history.

## Brand Commitments
Name: Pattern Drill. Wordmark only, no logo mark. Dark by default, following the system theme, with light supported and a remembered toggle. The look should read as focused and calm, not as a developer-tool costume. The repo is derived from jwl-7's MIT-licensed leetcode-cheatsheet; its notice stays in LICENSE.

## Evidence on Hand
Real content only: the decision tree in `src/finder/tree.ts`, templates in `src/code/`, the devweekends-sourced pattern docs. There are no users, testimonials, benchmarks or usage numbers, and none may be invented.

## Product Principles
- Speed over exploration: every extra tap or glance costs the 30 seconds.
- One answer: a run ends at exactly one pattern variant, never a list.
- The clock is a coach, not a punishment: overtime is shown, not enforced.
- Reference serves the Finder, not the other way around.
- Nothing is stored about the user's attempts.

## Accessibility & Inclusion
Keyboard-first: the drill must be fully operable without a mouse, since users are typing code beside it. Readable contrast in both themes and respect for reduced motion.
