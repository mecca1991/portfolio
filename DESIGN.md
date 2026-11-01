---
name: Wilfred Chetat
description: A developer portfolio built to the polish of a product launch page.
colors:
  canvas: "#ffffff"
  surface: "#f4f5f7"
  surface-2: "#eaedf1"
  ink: "#0c1014"
  muted: "#4f5966"
  accent: "#087050"
  accent-hover: "#065c42"
  accent-pressed: "#054a35"
  live: "#1e9e6a"
  line: "#e2e6eb"
  attention: "#a8360c"
  white: "#ffffff"
  dark: "#0c1014"
  dark-surface: "#161c22"
  dark-text-soft: "#d3d9e0"
  dark-muted: "#9aa4b0"
  dark-accent: "#3ddc97"
  error-bg: "#fbf1ec"
  error-line: "#efcdbd"
  error-text: "#7a2c0b"
typography:
  display:
    fontFamily: "Mona Sans Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.5rem, 0.9rem + 4.6vw, 5rem)"
    fontWeight: 650
    lineHeight: 0.98
    letterSpacing: "-0.04em"
  headline-lg:
    fontFamily: "Mona Sans Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.5rem, 1.8rem + 2.9vw, 4.5rem)"
    fontWeight: 650
    lineHeight: 1.02
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Mona Sans Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2rem, 1.55rem + 1.85vw, 3.25rem)"
    fontWeight: 650
    lineHeight: 1.02
    letterSpacing: "-0.035em"
  title:
    fontFamily: "Mona Sans Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.375rem, 1.2rem + 0.75vw, 1.875rem)"
    fontWeight: 650
    lineHeight: 1.15
    letterSpacing: "-0.02em"
  lead:
    fontFamily: "Mona Sans Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.125rem, 1.04rem + 0.38vw, 1.375rem)"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "-0.01em"
  body:
    fontFamily: "Mona Sans Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.0625rem, 1.04rem + 0.1vw, 1.125rem)"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Mona Sans Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "16px"
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: "-0.005em"
  caption:
    fontFamily: "Mona Sans Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.5
  small:
    fontFamily: "Mona Sans Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.5
  chip:
    fontFamily: "Mona Sans Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "13px"
    fontWeight: 600
    lineHeight: 1.5
  mono:
    fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.65
rounded:
  sm: "6px"
  md: "12px"
  lg: "20px"
  pill: "999px"
spacing:
  xs: "8px"
  sm: "12px"
  md: "16px"
  lg: "24px"
  xl: "40px"
  column-gap: "clamp(2.5rem, 0.5rem + 4vw, 5rem)"
  gutter: "clamp(1.25rem, 0.86rem + 1.6vw, 2.5rem)"
  section: "clamp(5rem, 3.14rem + 7.6vw, 10rem)"
  tap: "44px"
  content-max: "1280px"
components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.white}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "11px 22px"
    height: "44px"
  button-primary-hover:
    backgroundColor: "{colors.accent-hover}"
  button-primary-active:
    backgroundColor: "{colors.accent-pressed}"
  button-secondary:
    backgroundColor: "{colors.surface-2}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "11px 22px"
    height: "44px"
  button-secondary-hover:
    backgroundColor: "#dfe3e8"
  button-ink:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.white}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "9px 18px"
    height: "40px"
  button-ink-hover:
    backgroundColor: "#252c34"
  button-secondary-on-dark:
    backgroundColor: "{colors.dark-surface}"
    textColor: "{colors.white}"
    rounded: "{rounded.pill}"
    padding: "11px 22px"
  chip:
    backgroundColor: "{colors.surface-2}"
    textColor: "{colors.ink}"
    typography: "{typography.chip}"
    rounded: "{rounded.pill}"
    padding: "3px 10px"
  chip-illustrative:
    backgroundColor: "#fbefdf"
    textColor: "#6b3d0c"
    typography: "{typography.chip}"
    rounded: "{rounded.pill}"
    padding: "3px 10px"
  nav-link:
    textColor: "{colors.muted}"
    rounded: "{rounded.pill}"
    padding: "9px 14px"
  nav-link-active:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
  tab-group:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.pill}"
    padding: "4px"
  tab-indicator:
    backgroundColor: "{colors.white}"
    rounded: "{rounded.pill}"
  media-panel:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.lg}"
    padding: "clamp(1.25rem, 0.5rem + 3vw, 3rem)"
  browser-frame:
    backgroundColor: "{colors.white}"
    rounded: "{rounded.md}"
  code-panel:
    backgroundColor: "{colors.dark-surface}"
    textColor: "{colors.dark-text-soft}"
    typography: "{typography.mono}"
    rounded: "{rounded.md}"
    padding: "16px 18px"
---

# Design System: Wilfred Chetat

## Overview

**Creative North Star: "The Launch Page"**

The portfolio is presented the way Linear and Stripe present a product: a white page, large real screens set on quiet tinted stages, a single green that means "act here", and pill controls that answer a press. It is the category standard for a modern developer portfolio, executed straight; the polish is the point, not a concept laid over it. Shipped products carry the proof, so the system's job is to give real captures room, scale and a calm ground.

Density is generous. Sections sit 80 to 160px apart, copy columns stay near 34 to 38em, and depth comes from one tone step of cool grey rather than from lines or boxes. Dark ink bands (experiments, code, the contact close and footer) are the only change of ground, and they invert the same rules rather than introducing a second palette. Motion is short and strong-eased: things rise in once, controls compress on press, and nothing moves under reduced motion.

The confirmed rejections come from the chosen direction: no cream-and-serif editorial look, no dark gradient hero, no grid of uniform cards.

**Key Characteristics:**
- White canvas, one cool grey tone step for panels, near-black ink, one green accent.
- Mona Sans as the only text family, set tight and heavy (650) for headings; tabular figures where numbers align.
- Every control is a pill at least 44px tall with scale(0.97) press feedback.
- Real screenshots in browser and phone frames on 20px-rounded tinted stages, never in outlined boxes.
- Shadows only where something floats over something else.
- Dark ink bands for code and the close.

## Colors

A cool, near-monochrome daylight palette with one operational green.

### Primary
- **Ship Green** (accent): primary buttons, inline links, text selection, the focus ring and the caret. It never fills a panel or a heading. Hover deepens to **Ship Green Deep** (accent-hover) and press to **Ship Green Pressed** (accent-pressed).
- **Signal Mint** (dark-accent): the same job on dark bands: links, focus ring, selection, the "Copied" confirmation.

### Tertiary
- **Live Dot Green** (live): the 8px steady dot beside the word "Live". Never used for text.
- **Fault Rust** (attention): failure status words ("Needs a field", "Rejected"), always paired with the word itself.

### Neutral
- **Paper White** (canvas): the page ground, and the fill of browser frames and floating cards set on tinted stages.
- **Stage Grey** (surface): the one tone step. Media stages, fact panels, decision and outcome panels, the tab track, hovered and current nav links.
- **Pressed Grey** (surface-2): the step below. Secondary pills, chips, the browser address bar.
- **Graphite Ink** (ink): headings, body text, the header CV pill, the phone frame.
- **Slate Muted** (muted): ledes, descriptions, meta lines, captions, inactive nav and tabs.
- **Table Rule** (line): row separators in real tables and inside reconstructed interfaces only.
- **Night Ink** (dark): the dark band ground.
- **Night Panel** (dark-surface): code panels and pills on the dark band.
- **Night Soft** (dark-text-soft) and **Night Muted** (dark-muted): body and meta text on the dark band.
- **Error notice** (error-bg, error-line, error-text): the warm notice used inside reconstructed screens and the playground's error state.

### Named Rules
**The One Green Rule.** Green means "act here" or "this is live": primary action, links, focus, selection, the Live dot. Nothing decorative is green.

**The Word-With-Colour Rule.** Status colour never stands alone. Green, rust and the Live dot always sit beside the word they qualify.

**The Tone-Step Rule.** Depth on the light ground comes from Stage Grey and Pressed Grey, not from borders. If a region needs separating, put it on the next tone step.

## Typography

**Display Font:** Mona Sans Variable (with ui-sans-serif, system-ui, sans-serif)
**Body Font:** Mona Sans Variable (same stack)
**Label/Mono Font:** ui-monospace, SFMono-Regular, Menlo (code only)

**Character:** One grotesque across a wide weight range: headings at 650 with tight negative tracking read like product marketing; body at 400 with 1.6 leading stays easy for a recruiter skimming on a phone.

### Hierarchy
- **Display** (650, 40 to 80px fluid, 0.98, -0.04em): the homepage H1 only, sized so it holds two lines in the hero's text column.
- **Headline Large** (650, 40 to 72px fluid, 1.02, -0.04em): case-study page titles, the flagship project name, the contact heading.
- **Headline** (650, 32 to 52px fluid, 1.02, -0.035em): section headings (Projects, Engineering experiments, Writing, About).
- **Title** (650, 22 to 30px fluid, 1.15, -0.02em): project names in rows, case-study section headings, showcase step titles, the contact email.
- **Lead** (500, 18 to 22px fluid, 1.4, -0.01em): project one-liners, outcome sentences, decision titles. Ledes use the same size at 400 weight, 1.5 leading, in Slate Muted, capped near 34em.
- **Body** (400, 17 to 18px fluid, 1.6): running text, capped at 36 to 38em (720px in case studies).
- **Label** (600, 16px, -0.005em): button text; 15px in small pills, tabs and nav.
- **Caption** (400, 15px, 1.5): figcaptions and meta lines, in Slate Muted.
- **Small** (400, 14px): fine print and glance terms. Nothing readable goes below 13px.
- **Chip** (600, 13px): sentence-case chips.
- **Mono** (400, 14px, 1.65): code panels; 13px on phones.

### Named Rules
**The One Family Rule.** Mona Sans sets every word; the system monospace sets only code. No second display face.

**The Sentence-Case Rule.** No uppercase and no positive letter-spacing anywhere. Hierarchy comes from size and weight (400, 500, 600, 650), never from caps or tracking.

**The Tabular Figures Rule.** Columns of numbers and dates (ledger, timeline) use tabular-nums.

## Layout

A 1280px content column with fluid gutters (20 to 40px) and fluid section spacing (80 to 160px). Compositions are asymmetric twelve-part splits expressed as fr pairs: 6/6 for the hero and contact, 5/7 for the flagship head, 4/8 for the showcase, 8/4 for evidence steps and experiments, 7/5 for case-study intros. Column gaps use one fluid value (40 to 80px). Case studies run a 200px sticky "On this page" index beside the article.

Two breakpoints: below 64rem every split collapses to one column and the index sits above the article; below 48rem type and padding step down, the nav becomes a disclosure menu, and paired hero buttons share the row equally. Inner rhythm leans on 8, 12, 16, 24 and 40px. Anchors land 88px below the top to clear the sticky header.

## Elevation & Depth

Flat by default, with tonal layering: Paper White ground, Stage Grey panels, white frames and cards resting on those panels. Shadows exist, but only for elements that physically float over other content: the sticky header once content scrolls beneath it, the phone menu sheet, the phone frame standing over a browser capture, and a data card resting on a capture's corner. All shadows are ink-tinted (rgb 12 16 20), soft and offset downward with negative spread; values live in the sidecar.

### Named Rules
**The Float-Only Shadow Rule.** A shadow is allowed only when an element overlaps or floats above other content. Panels, cards in flow, and buttons are flat.

## Shapes

Controls are full pills (999px): buttons, nav links, tabs and their track, chips, the address bar, the copy button. Media stages and content panels are softly rounded (20px). Browser frames, code panels and floating cards use 12px; small list items and the index links use 6px. Corners that meet a bleed or a stage edge go square (the hero stage rounds only on its left; captures rounding only at the top when they run off the stage's bottom). Phone frames use device-like 44px outer and 37px screen radii. Avatars and dots are circles.

**The Real-Table Rule.** A drawn 1px line appears only between rows of a real table (the ledger, the timeline, reconstruction tables) or inside a reconstructed interface that draws its own UI. No section dividers, no outlined panels.

## Components

### Buttons
Confident pills that compress on press.
- **Shape:** full pill, at least 44px tall (48px in the hero), 40px for the small variant.
- **Primary:** Ship Green with white Label text, 11px 22px padding; hover deepens, press goes to the pressed green.
- **Secondary:** a Pressed Grey pill with ink text. There are no outline buttons; "outline" renders as the same tone-step pill.
- **Ink:** a Graphite pill for strong secondary actions (the header CV link).
- **On dark:** secondary becomes a Night Panel pill; a white pill serves as the primary-weight action.
- **Hover / Focus / Press:** colour changes on a 180ms fade; scale(0.97) on press over 160ms strong ease-out; focus is a 2px accent ring offset 3px.
- **Icons:** 1em stroke arrows ride the text baseline and nudge toward where they point on hover (2 to 3px).

### Chips
- **Style:** sentence-case 13px/600 on a Pressed Grey pill for involvement ("Personal product").
- **Illustrative variant:** a warm tint marks anything not captured from a real screen ("Illustrative reconstruction", "Proposed feature").

### Cards / Containers
- **Corner Style:** 20px for stages and panels, 12px for frames and floating cards.
- **Background:** Stage Grey on the light ground; Night Panel on dark.
- **Shadow Strategy:** none in flow; see Elevation.
- **Border:** none.
- **Internal Padding:** fluid, 20 to 48px.

### Navigation
A sticky white bar, 68px (60px on phones): the name at 18px/650 on the left, muted 15px pill links that take Stage Grey and ink on hover and when current, then the ink CV pill. On phones the links fold into a disclosure that drops a full-width sheet with 22px/600 links, the current one in green.

### Product Showcase (signature)
Real captures composed on a Stage Grey stage: a browser frame (36px light chrome with three grey dots and a centred pill address bar) and a phone frame. On the homepage, a pill tab track switches between the product's three steps: a white pill indicator slides to the selected tab over 320ms, and the incoming panel settles in from a 4px blur and 6px rise over 360ms.

### Entrances
Section parts rise 16px with opacity over 700ms on the strong ease-out, staggered 70ms apart, only once JavaScript has run. Under reduced motion only a 400ms fade remains.

## Do's and Don'ts

### Do:
- **Do** keep Ship Green to the primary action, links, focus, selection and the Live dot.
- **Do** separate regions with a tone step (Stage Grey, then Pressed Grey) instead of a line.
- **Do** make every control a pill at least 44px tall with scale(0.97) press feedback.
- **Do** set real captures in browser or phone frames on 20px-rounded Stage Grey stages.
- **Do** label anything not captured from a real screen with the warm illustrative chip.
- **Do** set headings in Mona Sans at 650 with negative tracking (-0.015em to -0.04em).
- **Do** use the strong ease-out (cubic-bezier(0.23, 1, 0.32, 1)) for entrances and responses, and drop movement under reduced motion.
- **Do** pair every status colour with its word.

### Don't:
- **Don't** use gradients.
- **Don't** draw lines outside real tables and reconstructed interfaces: no section dividers, no outlined panels, no outline buttons.
- **Don't** put screenshots in outlined boxes.
- **Don't** add a shadow to anything that doesn't float over other content.
- **Don't** introduce a second type family, uppercase text or positive letter-spacing.
- **Don't** place small labels or kickers above headings.
- **Don't** use the cream-and-serif editorial look, a dark gradient hero, or a grid of uniform cards.
