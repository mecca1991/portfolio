---
name: Wilfred Chetat
description: A dark, single-hue portfolio with serif headings, sans body text and mono labels.
colors:
  canvas: "#07050d"
  surface: "#0c0916"
  surface-2: "#17122a"
  ink: "#ece8f5"
  ink-soft: "#d8d2e6"
  muted: "#a59fb8"
  muted-2: "#b9b2cc"
  faint: "#8f89a3"
  accent: "oklch(0.8 0.14 295)"
  accent-hover: "#ffffff"
  accent-pressed: "oklch(0.46 0.24 295)"
  accent-label: "oklch(0.8 0.15 295)"
  accent-soft: "oklch(0.82 0.15 295)"
  accent-fill: "oklch(0.52 0.24 295)"
  accent-fill-hover: "oklch(0.58 0.24 295)"
  accent-glow: "oklch(0.6 0.25 295)"
  accent-line: "oklch(0.65 0.2 295 / 0.6)"
  live: "#3ddc97"
  line: "rgb(255 255 255 / 0.08)"
  line-strong: "rgb(255 255 255 / 0.16)"
  attention: "oklch(0.8 0.13 45)"
  white: "#ffffff"
  error-bg: "oklch(0.24 0.06 35)"
  error-line: "oklch(0.42 0.1 35)"
  error-text: "oklch(0.88 0.07 45)"
typography:
  display:
    fontFamily: "Instrument Serif, Iowan Old Style, Times New Roman, serif"
    fontSize: "clamp(2.75rem, 8.4vw, 6.5rem)"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "-0.015em"
  headline-lg:
    fontFamily: "Instrument Serif, Iowan Old Style, Times New Roman, serif"
    fontSize: "clamp(2.5rem, 1.8rem + 2.9vw, 4.5rem)"
    fontWeight: 400
    lineHeight: 1.08
    letterSpacing: "-0.015em"
  headline:
    fontFamily: "Instrument Serif, Iowan Old Style, Times New Roman, serif"
    fontSize: "clamp(2.25rem, 5vw, 3.75rem)"
    fontWeight: 400
    lineHeight: 1.05
    letterSpacing: "0"
  title:
    fontFamily: "Instrument Serif, Iowan Old Style, Times New Roman, serif"
    fontSize: "clamp(1.5rem, 1.3rem + 0.75vw, 1.875rem)"
    fontWeight: 400
    lineHeight: 1.15
    letterSpacing: "-0.015em"
  lead:
    fontFamily: "Geist Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.0625rem, 1rem + 0.3vw, 1.1875rem)"
    fontWeight: 400
    lineHeight: 1.5
  body:
    fontFamily: "Geist Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Geist Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "15px"
    fontWeight: 500
    lineHeight: 1.25
  caption:
    fontFamily: "Geist Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.5
  small:
    fontFamily: "Geist Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.65
  chip:
    fontFamily: "Geist Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "13px"
    fontWeight: 600
    lineHeight: 1.5
  mono-label:
    fontFamily: "Geist Mono Variable, ui-monospace, SFMono-Regular, Menlo, monospace"
    fontSize: "12px"
    fontWeight: 400
    lineHeight: 1.25
  mono-caps:
    fontFamily: "Geist Mono Variable, ui-monospace, SFMono-Regular, Menlo, monospace"
    fontSize: "11px"
    fontWeight: 500
    lineHeight: 1.3
    letterSpacing: "0.08em"
  mono:
    fontFamily: "Geist Mono Variable, ui-monospace, SFMono-Regular, Menlo, monospace"
    fontSize: "12px"
    fontWeight: 400
    lineHeight: 1.6
rounded:
  sm: "6px"
  md: "14px"
  lg: "18px"
  pill: "999px"
spacing:
  xs: "8px"
  sm: "12px"
  md: "16px"
  lg: "20px"
  xl: "24px"
  card: "28px"
  section-head: "36px"
  gutter: "clamp(20px, 5vw, 56px)"
  section: "56px"
  tap: "44px"
  content-max: "1120px"
components:
  button-primary:
    backgroundColor: "{colors.accent-fill}"
    textColor: "{colors.white}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "11px 22px"
    height: "44px"
  button-primary-hover:
    backgroundColor: "{colors.accent-fill-hover}"
  button-primary-active:
    backgroundColor: "{colors.accent-pressed}"
  button-secondary:
    backgroundColor: "rgb(255 255 255 / 0.05)"
    textColor: "{colors.white}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "11px 22px"
    height: "44px"
  button-secondary-hover:
    backgroundColor: "rgb(255 255 255 / 0.1)"
  chip:
    backgroundColor: "{colors.surface-2}"
    textColor: "{colors.ink}"
    typography: "{typography.chip}"
    rounded: "{rounded.pill}"
    padding: "3px 10px"
  chip-illustrative:
    backgroundColor: "oklch(0.3 0.06 70)"
    textColor: "oklch(0.9 0.08 80)"
    typography: "{typography.chip}"
    rounded: "{rounded.pill}"
    padding: "3px 10px"
  skill-chip:
    backgroundColor: "#120d1f"
    textColor: "{colors.ink}"
    typography: "{typography.mono-label}"
    rounded: "{rounded.pill}"
    padding: "7px 13px"
  nav-link:
    textColor: "{colors.muted-2}"
    typography: "{typography.mono-label}"
  nav-link-active:
    textColor: "{colors.white}"
  category-tab:
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "10px 16px"
    height: "44px"
  category-tab-selected:
    backgroundColor: "oklch(0.5 0.24 295)"
    textColor: "{colors.white}"
  project-tab:
    backgroundColor: "rgb(255 255 255 / 0.03)"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "18px 20px"
  project-stage:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.sm}"
    padding: "clamp(24px, 4vw, 40px)"
  card:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.lg}"
    padding: "28px"
  browser-frame:
    backgroundColor: "{colors.surface-2}"
    rounded: "{rounded.md}"
  code-panel:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink-soft}"
    typography: "{typography.mono}"
    rounded: "{rounded.md}"
    padding: "20px 22px"
  email-capsule:
    backgroundColor: "rgb(7 5 13 / 0.7)"
    textColor: "{colors.white}"
    rounded: "28px"
    padding: "6px"
---

# Design System: Wilfred Chetat

## Overview

**Creative North Star: "One Hue on a Dark Ground"**

The site sits on one near-black violet ground. Panels take one tone step up from it, and every accent colour is the same hue at a different lightness and chroma, written as `oklch(L C var(--h))` with `--h: 295`. Changing that one variable re-tints the links, buttons, glows, timeline bars and the hero canvas together. Headings are set in Instrument Serif, body text in Geist, and nav links, labels, dates and code in Geist Mono.

The home page is a single column of sections with 56px of padding above and below each. It opens with a centred hero over a drawn canvas (stars, a planet and a tilted ring of particles), then a facts strip that rides 60px up over the foot of the hero, then project tabs, a skills orbit, an experience timeline, experiments and writing, and a centred contact close above a glowing horizon. The case studies, the Rust parser page and the 404 page keep their earlier layout (two-column intro, sticky index, tinted panels) in the new colours and fonts.

Motion is part of the home page: the canvas drifts and leans toward the cursor, the skill chips turn on a 90s orbit, the italic word in the H1 changes every 2.4s, and the timeline bars grow in over 1s. Under `prefers-reduced-motion` the canvas holds one still frame, the orbit stops and the hero word stays on its first value.

**Key Characteristics:**
- One dark ground, one panel step, one accent hue held in `--h`.
- Instrument Serif headings at weight 400, with italic for emphasis and never a bold.
- Geist for body text; Geist Mono for nav, labels, dates and code.
- Controls are pills at least 44px tall; cards use 18px corners and a 1px white hairline at 8% opacity.
- Light comes from glows in the accent hue. There are no neutral drop shadows.
- Every interactive piece degrades to plain HTML without JavaScript.

## Colors

A near-black violet ground with pale lavender text and one violet accent at several lightness levels.

### Primary
- **Link Violet** (accent): inline links, the focus ring, the caret and passing status words. Links turn white on hover (accent-hover). Links measure 10:1 on the panel colour.
- **Fill Violet** (accent-fill): primary buttons, the Copy button in the contact capsule, the selected playground tab, the round arrow on the next-project card, text selection and the skip link. White text on it measures 6.2:1.
- **Fill Violet Hover** (accent-fill-hover): the hover state of the same fills. White text on it measures 4.8:1.
- **Fill Violet Pressed** (accent-pressed): the pressed state of the primary button.
- **Heading Italic Violet** (accent-soft): the italic words inside headings, such as the rotating word in the H1.
- **Label Violet** (accent-label): mono label text that needs the accent, such as the Writing card's label.
- **Glow Violet** (accent-glow): the colour of glows, such as the one round the brand dot in the header.
- **Chip Edge Violet** (accent-line): the 1px edge of skill chips.

### Tertiary
- **Live Dot Green** (live): the 8px steady dot beside the word "Live". It is never used for text.
- **Attention Amber** (attention): failure status words, always next to the word itself.
- **Error notice** (error-bg, error-line, error-text): the warm notice inside reconstructed screens and the playground's error state.

### Neutral
- **Ground** (canvas): the page background, and the fill inside reconstructed screens and playground fields.
- **Panel** (surface): cards, the facts strip cells, the project stage, the timeline card and the tinted panels on detail pages.
- **Raised Panel** (surface-2): the step above Panel. Chips, browser frame chrome, hovered panels.
- **Ink** (ink): body text and headings. 16:1 on Ground.
- **Soft Ink** (ink-soft): fact details, the skills intro, footer text and code on panels.
- **Muted** (muted): secondary text. 8.0:1 on Ground and 7.7:1 on Panel.
- **Muted Light** (muted-2): nav links, project descriptions and the contact lede.
- **Faint** (faint): axis ticks, field labels and fine print. 5.9:1 on Panel.
- **Hairline** (line): the 1px edge of cards and the separators between rows.
- **Strong Hairline** (line-strong): the edge of secondary pills, the header CV pill and the Menu button.
- **White** (white): text on fills, the H1 and hovered links.

The older `--dark`, `--dark-surface`, `--dark-text-soft`, `--dark-muted`, `--dark-line` and `--dark-accent` variables are aliases of the tokens above, so a `.dark` band on a detail page sits on the same ground as the rest of the page.

### Named Rules
**The One Hue Rule.** Every accent colour is `oklch(L C var(--h))`. A new accent shade changes lightness and chroma only, never the hue. The canvas reads `--h` too and subtracts 27 to get the matching hsl hue.

**The Word-With-Colour Rule.** Status colour never stands alone. The accent, Attention Amber and the Live dot always sit beside the word they qualify.

**The Contrast Floor Rule.** Measured in the browser: Muted is 8.0:1 on Ground and 7.7:1 on Panel, Faint is 5.9:1 on Panel, white is 6.2:1 on Fill Violet and 4.8:1 on Fill Violet Hover, and links are 10:1 on Panel. A new text colour or fill is measured before it ships and has to meet WCAG AA.

## Typography

**Display Font:** Instrument Serif (with Iowan Old Style, Times New Roman, serif)
**Body Font:** Geist Variable (with ui-sans-serif, system-ui, sans-serif)
**Label/Mono Font:** Geist Mono Variable (with ui-monospace, SFMono-Regular, Menlo, monospace)

**Character:** A one-weight serif for headings against a plain sans for reading text, with a monospace for the short functional strings: nav links, dates, tool names and code. All three are self-hosted through Fontsource; the Geist and Instrument Serif regular files are preloaded.

### Hierarchy
- **Display** (400, 44 to 104px fluid, line-height 1, -0.015em): the home page H1 only. Its second line is italic in Heading Italic Violet.
- **Headline Large** (400, 40 to 72px fluid, 1.08, -0.015em): page titles on case studies, the Rust parser page and the 404 page.
- **Headline** (400, 36 to 60px fluid, 1.05, no tracking): home page section headings and the next-project title. The contact close uses its own larger size, 40 to 76px fluid at 1.03.
- **Title** (400, 24 to 30px fluid, 1.15, -0.015em): section headings inside case studies. Card and tab names on the home page use the serif at fixed sizes: 30px for experiment cards, 26px for project and skill-category names, 22px for writing titles.
- **Lead** (400, 17 to 19px fluid, 1.5): ledes and intros. The case-study subtitle uses the same size at 500 weight and 1.4.
- **Body** (400, 16px, 1.6): running text. Case-study text is capped at 720px.
- **Label** (500, 15px, 1.25): button text. Text links with an icon use 14px at 500.
- **Caption** (400, 15px, 1.5): figcaptions, meta lines and timeline rows.
- **Small** (400, 14px, 1.65): card descriptions and notes. Fine print is 12px in Faint.
- **Chip** (600, 13px, 1.5): the sentence-case involvement chip on detail pages.
- **Mono Label** (400, 12px): dates, list numbers and skill chips. Nav links use the same face at 13px, axis ticks at 11px, the email address at 13 to 15px.
- **Mono Caps** (500, 11px, 1.3, 0.08em, uppercase): fact terms and field labels. Fact terms use 0.1em tracking.
- **Mono** (400, 12px, 1.6): the home page JSON demo. Detail pages set code at 14px in the playground and 15px at 1.7 in the input and output panels.

### Named Rules
**The One Weight Rule.** Instrument Serif ships at 400 only and `font-synthesis-weight: none` is set, so a heading is never bold. Emphasis inside a heading is italic in the accent.

**The Mono Label Rule.** Geist Mono is for short functional strings: nav links, dates, numbers, tool names, field labels, the email address and code. Sentences are set in Geist.

**The Small Caps Rule.** Uppercase appears only in mono labels of 11 to 12px with 0.08em to 0.1em tracking. Headings, buttons and body text stay in sentence case.

## Layout

The content column is 1120px wide with a fluid gutter of `clamp(20px, 5vw, 56px)`. Every home page section has 56px of padding above and below. The hero is the exception: its bottom padding is `clamp(390px, calc(280px + 34vw), 540px)` to leave room for the planet, and the facts strip pulls up 60px over it.

Home page layouts wrap by content width and use no media queries. The project list and stage are a flex row (`1 1 260px` beside `2.2 1 420px`) that stacks when it runs out of room. The facts strip and the experiments grid are auto-fit grids with minimum columns of 230px and 340px. The hero text column is capped at 980px, the skills heading at 760px and the contact close at 680px, all centred.

The header has the site's one home page breakpoint: at 760px and below, the nav links and CV pill are replaced by a Menu button. Detail pages keep two breakpoints: below 64rem their two-column splits collapse to one column and the "On this page" index (200px, sticky) moves above the article; below 48rem type and padding step down and two-column lists become one.

Inner spacing uses 8, 12, 16, 20 and 24px. Section headings sit 36px above their content, cards have 28px of padding and grids use 20px gaps. Touch targets are at least 44px; small header links get there with an invisible `::after` area. Anchors land 72px below the top of the page to clear the sticky header.

## Elevation & Depth

Depth comes from tone and light, not from shadow. Panels sit one step above the ground, and home page cards add a 1px hairline. The header is the only translucent layer: the ground colour at 60% opacity with a 14px backdrop blur, rising to 94% opacity when the phone menu is open.

Every `box-shadow` in the build is a blurred glow in the accent hue. There are no neutral drop shadows. Detail-page panels, frames and code panels have no shadow at all.

### Shadow Vocabulary
- **Primary button** (`inset 0 0 0 1px oklch(0.7 0.2 var(--h) / 0.5), 0 10px 40px oklch(0.5 0.25 var(--h) / 0.5)`): an inner edge and a glow under the one filled action.
- **Brand dot** (`0 0 14px var(--accent-glow)`): the 10px dot beside the name in the header.
- **Skill chip** (`0 0 18px oklch(0.55 0.25 var(--h) / 0.35)`): each chip in the orbit and in the static list.
- **Current role bar** (`0 0 20px oklch(0.6 0.25 var(--h) / 0.8)`): only the timeline bar that runs to today.
- **Email capsule** (`0 10px 50px oklch(0.5 0.25 var(--h) / 0.35)`): the contact close's address field.
- **Horizon** (`0 -24px 110px oklch(0.55 0.26 var(--h) / 0.7), 0 -4px 24px oklch(0.8 0.18 var(--h) / 0.6)`): the lit edge under the contact close.
- **Heading glow** (`text-shadow: 0 0 50px oklch(0.6 0.25 var(--h) / 0.7)`): the italic line of the H1.

### Named Rules
**The Glow-Only Rule.** A shadow is light in the accent hue, placed on something the page wants noticed: the primary action, the current role, the email address, the skill chips. Nothing gets a grey or black drop shadow.

## Shapes

Controls are full pills (999px): buttons, the CV pill, the Menu button, category tabs, chips and the link pills in the contact close. Cards, the facts strip, the timeline card and detail-page panels use 18px corners. Project tabs, browser frames, captures and code panels use 14px. The project stage, index links and notices use 6px. The email capsule uses 28px so that the 44px pill inside it sits concentric. Dots, the orbit rings and the horizon are circles. The phone bezel on captures uses 40px outside and 34px on the screen.

The project stage carries two corner brackets: 18px L-shapes with a 2px stroke in the accent hue at its top-left and bottom-right corners.

Gradients are part of the form language and all stay inside the one hue: the selected project tab fades from left to right, the project stage has a radial glow that follows the cursor, the current timeline bar runs from deep to light violet, and the horizon and orbit core are radial.

**The Hairline Rule.** On the home page a card is a Panel fill with a 1px Hairline edge. On detail pages panels have no edge, and a drawn line appears only between rows of a real table or inside a reconstructed interface that draws its own UI.

## Components

### Buttons
Pills that compress slightly on press.
- **Shape:** full pill (999px), at least 44px tall, 11px 22px padding (14px 26px in the hero), 15px Geist at 500.
- **Primary:** Fill Violet with white text, an inner 1px edge and a glow underneath. Hover lightens the fill; press goes to Fill Violet Pressed.
- **Secondary:** white at 5% opacity with a Strong Hairline edge and white text. Hover raises the fill to 10% and tints the edge violet. The `outline` and `ink` class names render as this same pill.
- **Hover / Focus / Press:** colour changes fade over 180ms; press scales to 0.97 over 160ms on `cubic-bezier(0.23, 1, 0.32, 1)`; focus is a 2px accent outline offset 3px. Under reduced motion the press scale is removed.
- **Icons:** 1em stroke arrows (24px grid, 1.75 stroke) sit on the text baseline and move 2 to 3px toward where they point on hover.
- **Text links with an icon:** 14px at 500, no underline, 44px tall. The first link in a group is Link Violet and the ones after it are paler; all turn white on hover.

### Chips
- **Involvement chip:** sentence-case 13px at 600 on a Raised Panel pill, 3px 10px padding. Used on detail pages.
- **Illustrative variant:** a warm amber tint marks anything not captured from a real screen ("Illustrative reconstruction", "Proposed feature").
- **Skill chip:** 12px Geist Mono on a dark violet pill with a Chip Edge Violet border and a soft glow, 7px 13px padding.

### Cards / Containers
- **Corner Style:** 18px for cards and panels, 14px for frames and code panels, 6px for the project stage.
- **Background:** Panel. Hovered panels step to Raised Panel.
- **Shadow Strategy:** none; see Elevation.
- **Border:** 1px Hairline on home page cards; none on detail-page panels.
- **Internal Padding:** 28px on home page cards, 24px in fact cells, fluid `clamp()` values between 20px and 48px on detail-page panels.
- **Facts strip:** an auto-fit grid whose 1px gaps over a Hairline-coloured ground draw the dividers between cells.

### Inputs / Fields
- **Style:** the home page JSON demo uses a textarea and an output panel side by side, each 190px tall with 8px corners, black at 40% opacity, a 1px white edge at 10% and 12px mono text.
- **Focus:** the edge turns violet and the 2px outline sits flush against it.
- **Output:** parsed text is pale violet and the panel announces changes politely.

### Navigation
A sticky bar over the blurred ground with a 1px bottom hairline. On the left is the name at 15px and 500 weight beside a 10px glowing violet dot. In the middle are Geist Mono links at 13px in Muted Light that turn white on hover and when current. On the right is the CV pill: 13px, 8px 16px padding, Strong Hairline edge, filling violet on hover. At 760px and below a 44px Menu button replaces the links and CV pill and opens a stacked list of 15px mono links separated by hairlines. The button reads "Close" while the list is open, and Escape or a link tap closes it. Without JavaScript the list stays open under the bar.

### Section Heading
A serif Headline with an optional 16px Muted sentence under it, in a column with 10px gaps and 36px of space below. The skills section centres the same pieces.

### Project Tabs and Stage (signature)
A vertical tab list beside a stage. Each tab is a 14px-cornered row with a mono number, the project name in 26px serif and a 12px kind line. The selected tab takes a violet edge and a left-to-right violet gradient. The stage is a Panel with 6px corners, two corner brackets and a radial glow that follows the cursor. The incoming panel fades up from a 6px blur over 450ms. Arrow keys, Home and End move between tabs. Without JavaScript all three panels stack.

### Skills Orbit (signature)
Six category pills switch between panels. Each panel is a square, `min(600px, 86%)` wide, with a solid outer ring, a dashed inner ring, a radial core and the category name in the middle. Chips sit on two rings and turn once every 90s while each chip counter-rotates to stay level. Before drawing, the script samples a full rotation for collisions between chips, the centre label and the container edge, trying chip sizes from 13px down to 10px. If any of the five categories cannot be laid out without a collision at the current width, all five fall back to the static form: a bordered card with the category name above a wrapped chip list. That static form is also what renders without JavaScript.

### Experience Timeline (signature)
One card with a mono year axis and one row per role: company and title on the left, dates in mono on the right, and a 10px track underneath. Bars are placed by start and end month against today's date and get lighter and more saturated toward the present. The current role's bar is a gradient with a glow and a pulsing 18px dot at its end. Bars grow from the left over 1s, staggered by 0.1s.

### Contact Close (signature)
Centred, with 96px above and 260px below. A serif heading whose last word is italic in the accent, a 17px lede, then the email capsule: the address in mono beside a Fill Violet "Copy" pill that swaps to "Copied" for 1.8s. Three hairline link pills follow. Behind them, a circle `max(1500px, 170vw)` wide shows only its lit top edge as a horizon, and the footer line sits on it. Detail pages end with a compact two-column version of the same contact content.

### Hero Canvas (signature)
A 2D canvas behind the hero draws 120 stars, a planet whose radius is the smaller of 34% of the width and 270px, and a ring of 1100 particles split into a back half and a front half. The ring leans toward the cursor on non-touch pointers. It draws only while the hero is on screen and the tab is visible. A 140px gradient fades the canvas into the ground at the bottom.

### Entrances
On detail pages, elements marked for reveal rise 16px with opacity over 700ms on the strong ease-out, staggered 70ms apart, and only once JavaScript has run. Under reduced motion only a 400ms fade remains.

## Do's and Don'ts

### Do:
- **Do** write every accent shade as `oklch(L C var(--h))` so one variable re-tints the site.
- **Do** set headings in Instrument Serif at 400 and use italic in the accent for emphasis.
- **Do** use Geist Mono for nav links, dates, numbers, tool names, field labels and code, and Geist for sentences.
- **Do** make every control a pill at least 44px tall, with a 2px accent focus outline offset 3px.
- **Do** build home page cards from the Panel fill, a 1px Hairline edge and 18px corners.
- **Do** keep text at or above the measured floors: Muted at 7.7:1 on Panel, Faint at 5.9:1 on Panel, white on fills at 4.8:1 or more.
- **Do** pair every status colour with its word.
- **Do** label anything not captured from a real screen with the warm illustrative chip.
- **Do** give every scripted piece a plain HTML form, and stop the canvas, the orbit and the rotating word under `prefers-reduced-motion`.

### Don't:
- **Don't** introduce a second accent hue. Live Dot Green and Attention Amber are status colours, not accents.
- **Don't** bold a serif heading or let the browser synthesise a bold.
- **Don't** use a grey or black drop shadow. Shadows are glows in the accent hue.
- **Don't** set uppercase outside 11 to 12px mono labels.
- **Don't** draw the skills orbit when any category would collide; show the chip list.
- **Don't** add lines to detail-page panels outside real tables and reconstructed interfaces.
- **Don't** use the Live green for text.
