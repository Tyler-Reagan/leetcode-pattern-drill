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
FIRST VIEWPORT: Topbar with wordmark, Pattern Finder / Reference toggle, language, theme, GitHub. Below: a two-column procedure sheet. Left: a minimalist station line (1px rule line, 8px dots, one muted cue label per answered stop as a button that backtracks, the current stop a single rust dot, a short dashed tail to one hollow dot; no origin, no 'You are here', no terminus text; a quiet row of dots on phones). Right: a ruled procedure card with header strip 'PROCEDURE Q{n}', the timer as M:SS in fixed-width boxed digit cells at the right of the strip, the question in condensed caps, numbered option rows [1]..[n] as full-width buttons, and a ruled footer with Backtrack and Reset. Primary action (Start / View template) is rust.
FORM: Assigned direction (Quick Reference Handbook, candidate 4 of the grounded list), raised by the split-flap discipline (digits in fixed cells, never reflow), fused by the user with field-key palette and the midnight rail line's station breadcrumb in place of thumb-index tabs. Seed key 9c816e6b.
FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance.

## Open decisions
Light theme counterpart tokens; Reference view restyle depth (tokens and surfaces only, content unchanged).
