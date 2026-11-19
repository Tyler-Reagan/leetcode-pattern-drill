---
name: Pattern Drill
description: A quick-reference procedure sheet for naming a LeetCode pattern in 30 seconds. Slate-green ground, bone type, one rust accent.
colors:
  ground-dark: "#121c18"
  panel-dark: "#172420"
  raised-dark: "#1d2d28"
  rule-dark: "#2f4a40"
  bone: "#e9e4d4"
  bone-muted: "#a8b0a4"
  rust: "#c8623a"
  rust-text-dark: "#e07a50"
  on-rust-dark: "#0b120f"
  amber-warn-dark: "#e0a63a"
  coral-over-dark: "#ef8e84"
  ground-light: "#eef1ec"
  panel-light: "#e3e8e1"
  raised-light: "#d8e0d6"
  rule-light: "#b7c5bb"
  ink: "#16231e"
  ink-muted: "#4b5a52"
  rust-deep: "#a9461f"
  rust-text-light: "#963d19"
  on-rust-light: "#f6f3ea"
  amber-warn-light: "#80560a"
  brick-over-light: "#a8322a"
  code-ground: "#0e1613"
  code-ground-light-theme: "#16211d"
typography:
  display:
    fontFamily: "Barlow Condensed, Arial Narrow, sans-serif"
    fontSize: "2rem"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "0.06em"
  headline:
    fontFamily: "Barlow Condensed, Arial Narrow, sans-serif"
    fontSize: "1.75rem"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "0.05em"
  title:
    fontFamily: "Barlow Condensed, Arial Narrow, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: "0.04em"
  body:
    fontFamily: "Barlow, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "Barlow Condensed, Arial Narrow, sans-serif"
    fontSize: "17px"
    fontWeight: 600
    letterSpacing: "0.18em"
  code:
    fontFamily: "firacode, ui-monospace, monospace"
    fontSize: "0.9375rem"
    lineHeight: 1.55
rounded:
  base: "2px"
spacing:
  gutter: "32px"
  card-padding: "20px"
  option-x: "16px"
  topbar-height: "57px"
  sidebar-width: "280px"
components:
  button-primary:
    backgroundColor: "{colors.rust}"
    textColor: "{colors.on-rust-dark}"
    rounded: "{rounded.base}"
    padding: "12px 28px"
  button-primary-hover:
    backgroundColor: "{colors.rust-text-dark}"
  button-plain:
    backgroundColor: "transparent"
    textColor: "{colors.bone}"
    rounded: "{rounded.base}"
    padding: "6px 16px"
  option-row:
    backgroundColor: "transparent"
    textColor: "{colors.bone}"
    padding: "8px 16px"
  option-row-hover:
    backgroundColor: "{colors.raised-dark}"
  card:
    backgroundColor: "{colors.panel-dark}"
    rounded: "{rounded.base}"
  card-strip:
    backgroundColor: "{colors.raised-dark}"
    padding: "14px 32px"
  key-cap:
    textColor: "{colors.bone-muted}"
    rounded: "{rounded.base}"
    height: "34px"
    width: "34px"
---

# Design System: Pattern Drill

## Overview

**Creative North Star: "The Quick-Reference Procedure Sheet"**

Pattern Drill looks like the laminated card a pilot clips to a yoke: ruled boxes, one active step, a station line that records where you have been. It exists to be read in a glance by someone who is tired, mid-problem and watching a clock. Every surface is flat, hairline-ruled and solid. The only warm thing on screen is the step you are on and the action that moves you forward.

The system is calm and focused, not a developer-tool costume. There is no glass, blur, glow, gradient, decorative background or drop shadow. Depth comes from three tonal steps of slate-green and a 1px rule. Titles and labels are condensed capitals; running text is a humanist sans. Dark is the default, follows the system theme, and light is a full counterpart, not an inversion.

It rejects the category default of a centred quiz card floating on a blurred glass backdrop. It also rejects the pastel, glassy look of the upstream cheatsheet it descends from.

**Key Characteristics:**
- Flat, ruled, solid: 1px rules and tonal panels instead of shadows.
- One rust accent, used for the current step and the primary action only.
- Condensed caps for titles and labels, Barlow for body, Fira Code for code only.
- 2px corners everywhere; nothing is pill-shaped.
- Digits live in fixed cells and never reflow.
- Keyboard-first: every control shows or implies its key.

## Colors

A restrained slate-green palette with bone type and a single rust voice. Each theme has its own tuned set; text on the accent and the small accent text are separate tokens because rust fails contrast as small text on dark.

### Primary
- **Field Rust** (#c8623a dark, #a9461f light): Fill for the primary action (Start, View template), the selection highlight, the current station dot and the hover border on an option row.
- **Lit Rust** (#e07a50 dark, #963d19 light): Rust used as small text or a hover fill: link hover, active nav item, primary button hover. Never used as a large fill.
- **On Rust** (#0b120f dark, #f6f3ea light): Text and key caps sitting on a rust fill.

### Neutral
- **Slate Ground** (#121c18 dark, #eef1ec light): Page background.
- **Slate Panel** (#172420 dark, #e3e8e1 light): Cards, the procedure sheet, Reference section headers.
- **Slate Raised** (#1d2d28 dark, #d8e0d6 light): The card header strip, option and button hover, the topbar's raised states.
- **Green Rule** (#2f4a40 dark, #b7c5bb light): Every 1px border, divider, table rule and underline.
- **Bone** (#e9e4d4 dark) / **Ink** (#16231e light): Primary text and the focus ring.
- **Muted Bone** (#a8b0a4 dark) / **Muted Ink** (#4b5a52 light): Secondary text, answered station dots and cue labels, key-cap text.
- **Code Well** (#0e1613 dark, #16211d light): Code blocks sit on a deep slate-green inset in both themes so the syntax palette keeps its contrast.

### Status
- **Amber Warn** (#e0a63a dark, #80560a light): Timer cells and caption in the warning stretch near the end of the budget.
- **Coral Over** (#ef8e84 dark, #a8322a light): Timer cells, caption and a faulted station dot in overtime. Overtime is shown, never enforced.

### Named Rules
**The One Voice Rule.** Rust marks the current step and the primary action. If two rust things compete on one screen, one of them is wrong.

**The Two-Token Rule.** Large fills use Field Rust; small text uses Lit Rust. Do not swap them.

**The Syntax Ground Rule.** Highlighted code always sits on Code Well, in both themes. Never put the syntax palette on a light surface.

## Typography

**Display Font:** Barlow Condensed (with Arial Narrow, sans-serif)
**Body Font:** Barlow (with system-ui, sans-serif)
**Mono Font:** Fira Code (with ui-monospace, monospace), code only
**Accessibility font:** an "Aa" toggle in the topbar swaps Display and Body for OpenDyslexic (`data-font="dyslexic"` on `<html>`, remembered in localStorage, fetched only when switched on). Code keeps Fira Code. The face runs about 1.7x wider than Barlow, so this mode also drops caps and tracking, widens the sidebar, scales headings down, enlarges the map nodes, keeps the clock digits and chart labels in Barlow, and lets the phone view toggle shrink.

**Character:** A condensed, upper-case voice for anything that names or labels, paired with a plain readable sans for sentences. The condensed caps give the sheet its handbook feel and keep long cue text compact.

### Hierarchy
- **Display** (700, 2rem, 1.15, +0.06em caps): Page `h1` elements.
- **Headline** (700, 1.75rem, 1.15, +0.05em caps): `h2` section titles in Reference.
- **Title** (600, 1.25rem, 1.15, +0.04em caps): `h3` and accordion buttons.
- **Question** (condensed caps, clamp(26px, 1.4vw + 1rem, 2.25rem), 1.1, +0.04em): The current cue question in the Finder.
- **Result name** (condensed caps, clamp(36px, 3vw + 1.25rem, 4rem), 1, +0.03em): The landed pattern variant.
- **Body** (400, 1rem, 1.5): Reference prose and tables. The Finder runs at 1.125rem, 1rem on phones; lead copy is capped at 62ch.
- **Label** (600, 17px, +0.18em caps): The procedure strip title, timer caption (13px, +0.16em) and field labels.
- **Code** (400, 0.9375rem, 1.55): Templates.

### Named Rules
**The Caps-For-Names Rule.** Anything that names a thing (titles, labels, buttons) is condensed caps with tracking. Anything that explains a thing is Barlow in sentence case.

**The Rem Rule.** Sizes that carry text are rem or derived from rem, so layouts survive a larger root font. Station-line geometry is computed from the cue's own font size for exactly this reason.

## Layout

A fixed topbar (57px) over a single content column. The Finder is a two-column procedure sheet at full content width (the earlier 1240px cap is removed): a path log on the left at about 38% of the width (minimum 320px), the ruled card on the right, 20px apart, sitting slightly high on the page. Map mode replaces the sheet with one full-width shell: the chart on the left and the Inspect panel on the right (`clamp(320px, 26vw, 420px)`). The map is a lazy-loaded chunk, so React Flow and dagre load only when Map is first opened; a fixed-size fallback holds the place meanwhile. Reference uses a 280px sidebar with a 32px content gutter (312px content margin when the sidebar is open, 32px when closed). The hamburger exists only in Reference; the Finder never has a sidebar.

Rhythm is built from 32px gutters, 20px card padding and 16px row padding. Rows and cells are fixed-height where digits are involved so nothing shifts when values change.

Below 760px the path log collapses to a quiet horizontal row of station-line dots, the map becomes a collapsible outline instead of a chart. Option rows grow to 52px for touch, and the card header, body and footer tighten to 14px side padding. Below 480px the topbar wraps: wordmark, language, theme and GitHub on row 1; the view toggle (and, in Reference, the hamburger) on row 2, with 8px padding and row gap. Nothing scrolls horizontally at 390px.

## Elevation & Depth

There are no shadows. Depth is tonal and ruled: Ground, then Panel, then Raised, each separated by a 1px Green Rule. State is shown by a colour or border change only; hover never moves, scales or filters anything. Transitions animate colour, border, fill and outline over 120ms, and respect reduced motion.

### Named Rules
**The Flat-Always Rule.** No box-shadow, backdrop-filter, gradient or glow, at rest or on hover. If something needs to stand forward, raise its tone one step.

## Shapes

Everything is a rectangle with a 2px radius, apart from the 8px station dots, which are circles. Boxes are defined by 1px rules, never by fills alone. The timer is a row of bordered digit cells (40×60px, 25×38px on phones) separated by a colon, which gives the clock its split-flap discipline. Key caps are small bordered squares (34px; 26px on secondary buttons).

## Components

### Buttons
- **Shape:** 2px radius, 1px border.
- **Primary:** Field Rust fill and border, On Rust text, condensed caps at 24px (20px on phones) with +0.14em tracking, 12px 28px padding, 52–60px tall. Carries its key cap (Enter on Start, T on Hide/View template).
- **Hover / Focus:** Fill and border shift to Lit Rust. Focus is a 2px Bone outline offset 2px.
- **Plain:** Transparent with a Green Rule border, condensed caps at 18px, 48px tall, 6px 16px padding. Hover raises to Slate Raised and the border to Muted Bone. Used for Backtrack and Reset.

### Option rows
Full-width buttons separated by 1px rules, each led by a numbered key cap. Condensed caps are not used here: the cue text is Barlow at 1.25rem (1.0625rem on phones), 48–60px tall. Hover raises the row to Slate Raised and turns the key cap's border rust.

### Card and procedure strip
A Slate Panel box with a 1px Green Rule border and 2px radius. The header strip is Slate Raised with the label ("PROCEDURE Q3") on the left and the boxed timer on the right with a "LEFT", "TAKEN" or "BUDGET" caption. The footer is ruled and holds Backtrack and Reset.

### Path log
The Flow view's left column on desktop: a Barlow Condensed label strip ("Path log", with the answered count) and a ruled list of rows. Each answered check is a full-width button with a step number, the question in muted caps and the cue picked, plus a "Back" label; clicking it backtracks to that check. The live row is a rust-numbered "Now, check n" row; a result or fault row replaces it; a dashed "Next check appears here" row closes the list. Rows use only `--pd-*` tokens and 1px rules.

### Station line
On phones only, the path log's place is a quiet row of dots. A 1px rule with 8px dots: answered stops are Muted Bone dots with a muted cue label that is a button and backtracks to that step. The current stop is a single rust dot. The line ends in a short dashed tail to one hollow dot. No origin label, no "you are here", no end text. A faulted stop is a hollow dot with a Coral Over border.

### Flow | Map switch
A two-segment toggle in the card strip, using the same segment style as the topbar toggle (`aria-pressed`, key M shown with `aria-keyshortcuts`). The Map strip carries the title, the size ("N checks, M patterns"), a muted run-status line ("No run, clock not started", "Run paused, check n", "Run complete, pattern") and the same switch.

### Map
Map mode draws the whole tree left to right (dagre, `LR`) on a Slate Ground canvas with Fit and zoom controls at the bottom left.
- **Check node:** Slate Panel box, 1px Green Rule, 2px radius, 236×88px. A small uppercase tag ("Step n", "Check", "Now, check n") above the question in Barlow.
- **Pattern node (leaf):** the same box at 252×64px on Slate Ground, tagged with its pattern family; the current result is tagged "Result".
- **Your path:** nodes on the run's path sit on Slate Raised with a Bone border and Bone text; the current node takes a 2px Field Rust border, the one rust element on the chart.
- **Edges:** smoothstep lines in Green Rule at 1px; path edges are Bone at 1.75px and sit above the others.
- **Legend:** a top-left panel of four swatches (Check, Pattern, Your path, Current) on Slate Panel, marked `aria-hidden` because the nodes carry their own text.
- **Inspect panel:** a Slate Panel column beside the chart with the selected check's options and destinations, or a pattern's templates. It has no clock.
- **Phones:** the chart is replaced by an outline: each check or pattern written once in full, other routes to it as short "jump to" buttons.

### Timer
Fixed-width boxed digit cells, M:SS, never reflowing. Idle and OK states use Bone; the warning stretch turns cells and caption Amber; overtime turns them Coral and shows a sign cell, with the cell border changing as well as the text.

### Navigation and topbar
A condensed-caps wordmark ("PATTERN DRILL", a plain link around the `h1`, no underline) on the left. A two-segment toggle for Pattern Finder and Reference: segments are 40px tall, muted until hovered, and the current view is raised, bright, with a Muted Bone border and a 2px rust underline. Language select, theme switch and GitHub link on the right. Solid Slate Ground with a 1px bottom rule.

### Reference surfaces
Accordions, tables and tabs are flat and ruled: transparent buttons with a muted chevron, 1px Green Rule table borders, and tab buttons with a bottom rule. Big-O table cells use opaque dark-tinted fills (not alpha) so Bone text stays above 7:1.

## Do's and Don'ts

### Do:
- **Do** use only the `--pd-*` tokens for new surfaces; legacy variables exist for Reference and resolve to them.
- **Do** give every new control a visible key hint or an `aria-keyshortcuts` value, matching the Finder's key-cap pattern.
- **Do** keep digits in fixed-width cells and give changing numbers a fixed box.
- **Do** show state with colour and border only, and keep transitions to 120ms.
- **Do** derive heights that wrap text from rem, not px, so a larger root font cannot clip descenders.
- **Do** keep focus rings at 2px Bone, offset 2px, on every interactive element. Programmatically focused headings are the one exception.

### Don't:
- **Don't** add shadows, blur, glass, gradients, glows or decorative background images. They were removed deliberately.
- **Don't** use rust for anything other than the current step, the primary action and the selection highlight.
- **Don't** use Field Rust as small text on dark; use Lit Rust.
- **Don't** round anything beyond 2px, or use pills.
- **Don't** pause or restart the clock from the map's Inspect panel; only the Flow | Map switch moves the clock.
- **Don't** enforce the clock. Overtime is shown in Coral and the run continues.
- **Don't** center the Finder in a floating quiz card, or replace the station line with a progress bar.
- **Don't** put highlighted code on a light surface.
