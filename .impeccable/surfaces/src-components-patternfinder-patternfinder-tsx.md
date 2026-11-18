---
version: 1
slug: "src-components-patternfinder-patternfinder-tsx"
primary_target: "src/components/PatternFinder/PatternFinder.tsx"
related_targets: []
---

## Scope
Operate surface: the Pattern Drill app shell and the Pattern Finder (front door), plus the Reference view inheriting the same system. Redesign of the old pastel/glass look.

## Direction contract
THESIS: A quick-reference procedure sheet for recognizing a problem under a clock: ruled boxes, one active step, a minimalist station-line path. It refuses the category default of a centred quiz card on a blurred glass backdrop.
OWN-WORLD: Slate-green ground (#121c18 dark; a pale slate-bone counterpart for light), bone type (#e9e4d4), one rust accent (#c8623a fills, #e07a50 small text) for the active step and primary action, hairline green-grey rules (#2f4a40). Barlow Condensed caps for titles and labels, Barlow for body. Flat, 2px radius at most, no gradients, glow, glass, blur or decorative backgrounds.
STORY: A tired grinder opens the app and sees one thing: the root question and a 30.0 clock. They press Enter, pick with 1-9, watch the path grow as a station line, and land on one pattern variant they can open a template for.
FIRST VIEWPORT: Topbar with wordmark, Pattern Finder / Reference toggle, language, theme, GitHub. Below: a two-column procedure sheet at full content width. Left (about 38%, min 320px): a path log, a ruled label strip 'Path log' with the answered count, then one ruled row per answered check (step number, question in muted caps, cue picked, 'Back') that backtracks when clicked; a rust 'Now, check n' row for the live check; a dashed 'Next check appears here' row. Right: a ruled procedure card with header strip 'PROCEDURE Q{n}' and a Flow | Map switch (key M), the timer as M:SS in fixed-width boxed digit cells at the right of the strip, the question in condensed caps, numbered option rows [1]..[n] as full-width buttons, and a ruled footer with Backtrack and Reset. Primary action (Start / View template) is rust. Map mode opens a full-width chart of the whole tree with the run's path highlighted and a read-only Inspect panel; it pauses the clock and keeps the run. On phones the path log becomes a quiet row of station-line dots and the map becomes a collapsible outline.

FORM: Assigned direction (Quick Reference Handbook, candidate 4 of the grounded list), raised by the split-flap discipline (digits in fixed cells, never reflow), fused by the user with field-key palette and the midnight rail line's station breadcrumb in place of thumb-index tabs. Seed key 9c816e6b.
FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance.

## Open decisions
Light theme counterpart tokens; Reference view restyle depth (tokens and surfaces only, content unchanged); Map mode light-theme check (edge and legend contrast on Slate Ground).
