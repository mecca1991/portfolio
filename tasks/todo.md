# Todo: Wilfred Chetat Portfolio

Design source: https://claude.ai/artifact/1u5mcMR1p11RRbJGzR2qVF · Plan: `tasks/plan.md`

---

## Phase 1: Foundation

### Task 1: Scaffold Astro project, tokens, fonts, base layout

**Description:** Create the Astro + TypeScript project on Node 22 with the design tokens from the Components artboard, self-hosted fonts and a `BaseLayout` (html shell, meta, skip link, reduced-motion rule). One placeholder `index.astro` renders on the canvas colour in Newsreader/Plex.

**Acceptance criteria:**
- [x] `tokens.css` defines every colour, type size, radius and focus style from `Components.dc.html`
- [x] Fonts load from the bundle (no requests to `fonts.googleapis.com`)
- [x] `.nvmrc` = 22, `engines.node` set, `trailingSlash: 'always'`, `build.format: 'directory'`

**Verification:**
- [x] `npm run build` succeeds; `npm run check` (astro check) reports 0 errors
- [x] Manual: `npm run dev`, page shows correct fonts and colours; network tab has no third-party requests

**Dependencies:** None

**Files likely touched:** `package.json`, `astro.config.mjs`, `tsconfig.json`, `.nvmrc`, `.gitignore`, `src/styles/tokens.css`, `src/styles/global.css`, `src/layouts/BaseLayout.astro`, `src/pages/index.astro`

**Estimated scope:** M

---

### Task 2: Create GitHub repo and deploy a skeleton to Amplify

**Description:** Fail fast on hosting. Initialise git, create the GitHub repo with `gh`, add the Amplify build spec and headers, connect the repo in the Amplify console, and confirm a push to `main` deploys.

**Acceptance criteria:**
- [x] GitHub repo exists with `main` pushed (name and visibility confirmed with you first)
- [x] `amplify.yml` builds with Node 22 and publishes `dist/`; `customHttp.yml` sets security headers and `immutable` caching for `/_astro/*`
- [x] Amplify app auto-builds `main`; 404 rewrite to `/404.html` configured

**Verification:**
- [x] Amplify build log green
- [x] Manual: `*.amplifyapp.com` URL serves the skeleton; `curl -I` shows the custom headers

**Dependencies:** Task 1

**Files likely touched:** `amplify.yml`, `customHttp.yml`, `README.md` (stub), `src/pages/404.astro` (stub)

**Estimated scope:** S · **Needs you:** approve the Amplify GitHub App in the AWS console

---

### ✅ Checkpoint: Foundation
- [x] Build + check pass locally on Node 22
- [x] Live skeleton deploys on push
- [x] Review with you before page work (go-ahead given by starting the build loop, 2026-10-25)

---

## Phase 2: Pages

### Task 3: Homepage: header, hero, at-a-glance, contact footer

**Description:** Build the homepage frame and the shared pieces every page reuses: `Header` (logo, nav, CV button; one row on phones), `Hero` with the portrait, the at-a-glance strip, and the dark contact section with footer. Use `src/data/site.ts` (already created) for email, profile links and the S3 CV URL.

**Acceptance criteria:**
- [x] Matches `Main.dc.html` at 1440 px and `Home-Mobile.dc.html` at 390 px
- [x] Portrait served through Astro `<Picture>` as AVIF/WebP with the designed alt text
- [x] Skip link, `#contact` and external `↗` links work; focus ring visible on every interactive element

> Note: phones use the desktop copy for the hero lede and contact intro (the phone artboard had shorter variants), and the footer keeps both spans on one line. Section anchors (`#work`, `#experiments`, `#about`) are checked in Tasks 4–5, once those sections exist.

**Verification:**
- [x] `npm run build` succeeds
- [x] Manual: compare side by side with the canvas at both widths; tab through the page

**Dependencies:** Task 1

**Files likely touched:** `src/components/Header.astro`, `src/components/Hero.astro`, `src/components/ContactSection.astro`, `src/components/Label.astro`, `src/data/site.ts`, `src/assets/portrait.jpg`, `src/pages/index.astro`

**Estimated scope:** M

---

### Task 4: Homepage: selected work section

**Description:** The four project entries: Intrvuer and Sysconnector as large alternating rows, Lease Insurance and EduClick as a two-column grid, each with its engagement label and evidence figure (placeholder box, illustrative mapping table, balance table, import batch).

**Acceptance criteria:**
- [x] Order on phones follows the Components rule: label, title, one-liner, contribution, visual, actions
- [x] "Illustrative reconstruction" badges and captions appear exactly as designed
- [x] "Read the case study" links go to `/work/intrvuer/` and `/work/sysconnector/`
- [x] `#work` (header nav and hero button) lands on the section heading

> Note: the case-study links point at the right URLs; those pages arrive in Tasks 6–7 and the Pages checkpoint link check covers them. As in Task 3, phones show the desktop copy (the phone artboard had trimmed variants and a 2-row mapping figure).

**Verification:**
- [x] Build succeeds
- [x] Manual: 1440 / 390 comparison against the canvas

**Dependencies:** Task 3

**Files likely touched:** `src/components/ProjectFeature.astro`, `src/components/ProjectCard.astro`, `src/components/EvidenceFigure.astro`, `src/pages/index.astro`

**Estimated scope:** M

---

### Task 5: Homepage: experiments, writing, about

**Description:** The tinted experiments band (Rust parser card with input/output panels, video-search proof of concept), the writing list, and the About section with the "what I work with" table and experience timeline.

**Acceptance criteria:**
- [x] Experience and stack read from `src/data/site.ts`, not hard-coded in markup
- [x] "How it works" links to `/experiments/rust-json-parser/`; code panels scroll horizontally on phones instead of overflowing
- [x] `#experiments` and `#about` header anchors land on their sections

> Note: the Rust card's code panels stack inside the figure. Side by side, the JSON lines don't fit at 1440 (the artboard lets them spill past the panel). Phones get the at-a-glance facts inside About, as in the phone artboard, from the same `site.glance` data. The parser page link arrives in Task 8.

**Verification:**
- [x] Build succeeds
- [x] Manual: 1440 / 390 comparison; no horizontal page scroll at 390 px

**Dependencies:** Task 3

**Files likely touched:** `src/components/ExperimentCard.astro`, `src/components/WritingList.astro`, `src/components/About.astro`, `src/data/site.ts`, `src/pages/index.astro`

**Estimated scope:** M

---

### Task 6: Intrvuer case study

**Description:** `/work/intrvuer/` from `Intrvuer.dc.html` and its phone artboard: header block with facts list, "On this page" nav (sticky sidebar on desktop, inline box on phones), five numbered sections, architecture flow figure, "Technical notes" disclosure, next-project link, contact. Extract a `CaseStudyLayout` that Task 7 reuses.

**Acceptance criteria:**
- [x] "Technical notes" is a native `<details>` (works without JS)
- [x] "On this page" anchors land on the right section headings
- [x] Placeholder text from the canvas kept verbatim and listed by `check:placeholders`

**Verification:**
- [x] Build succeeds
- [x] Manual: 1440 / 390 comparison; keyboard-open the disclosure

> Note: phones use the shared two-row site header (the phone artboard had logo + Contact only) and the desktop copy. The sidebar index is sticky and highlights the section in the URL hash with `:has(:target)`, no JS. `npm run check:placeholders` lists what's left and exits 1 until it's empty.

> Captures added 2026-10-25 from intrvuer.com: practice setup step 1 ("Paste New" tab, so no saved job, billing or email shows) and one answer from the public sample report (fictional candidate), captured at a narrow width so its text stays readable. That replaced the placeholder caption with "From the public sample report, which uses a fictional candidate." The homepage Intrvuer row uses the same feedback capture, capped at 440 px.

> Needs Wilfred: "Spoken practice, mid-session" still needs a capture. It only exists during a live session, which uses a paid session and the microphone.

**Dependencies:** Task 3

**Files likely touched:** `src/layouts/CaseStudyLayout.astro`, `src/components/OnThisPage.astro`, `src/components/NextProject.astro`, `src/pages/work/intrvuer.astro`, `scripts/check-placeholders.mjs`

**Estimated scope:** M

---

### Task 7: Sysconnector case study

**Description:** `/work/sysconnector/` on `CaseStudyLayout`: the three illustrative UI reconstructions (connection setup, field mapping, lead status), "Also in this engagement", decision/tradeoff tables, outcomes, next link to the Rust parser.

**Acceptance criteria:**
- [x] Reconstructions are HTML (not images), each with the dashed "Illustrative reconstruction" badge
- [x] The scope disclaimer ("earlier version of the product…") is present under the intro

**Verification:**
- [x] Build succeeds
- [x] Manual: 1440 / 390 comparison

> Needs Wilfred: real screenshots. Checked app.sysconnector.com on 2026-10-25 (read-only): the signed-in workspace has no connections or connected apps, and Create Connection is blocked by the free plan's 1/1 connection limit, so none of the screens you built can be captured. The current app also uses OAuth ("credentials are never stored"), which suggests it differs from the earlier version you built. Until real captures exist (older screenshots from the engagement, or a workspace with demo data and the client's OK), build this task with the illustrative reconstructions as designed. Re-checked 2026-10-25 in your signed-in Chrome: still the one workspace, with no connections and no workspace switcher.

> Note: built with the illustrative reconstructions (HTML, no real controls inside). Phones use the desktop copy and the five-section index, as on Intrvuer; the phone artboard merged "Purpose and problem".

**Dependencies:** Task 6 (layout)

**Files likely touched:** `src/pages/work/sysconnector.astro`, `src/components/UiReconstruction.astro`, `src/components/DecisionTable.astro`

**Estimated scope:** M

---

### Task 8: Rust JSON Parser page with playground

**Description:** `/experiments/rust-json-parser/`: intro and facts, input → parsed-structure figure, "How it works" steps, before/after code panel, and the playground (three example tabs, editable textarea, live tree output, error state, expand/collapse), ported from the canvas logic to a vanilla script.

**Acceptance criteria:**
- [x] Playground keeps the dashed "Proposed feature" frame and the note that it uses the browser's JSON parser, not the Rust code
- [x] Tabs use `aria-pressed`; output region is `aria-live="polite"`; invalid input shows the error box
- [x] Page is readable and usable without JS (playground hidden or static if JS off)

**Verification:**
- [x] Build succeeds
- [x] Manual: switch all three examples, type invalid JSON, toggle expand; check with JS disabled

> Note: there's no phone artboard for this page, so phones follow the case-study patterns (stacked panels, ↓ arrow). Without JS the playground renders its starting example at build time, with disabled controls, a read-only input and a visible "Turn on JavaScript" note. The script enables the controls and hides the note. Tested with scripts blocked in a sandboxed iframe; `<noscript>` wasn't used because Chrome doesn't render it in that test setup. It's the only client JS on the site (inlined, this page only). The header leaves out the CV button, as in the artboard.

**Dependencies:** Task 3

**Files likely touched:** `src/pages/experiments/rust-json-parser.astro`, `src/components/JsonPlayground.astro`, `src/scripts/json-playground.ts`

**Estimated scope:** M

---

### ✅ Checkpoint: Pages
- [x] All routes match the artboards at 1440 and 390
- [x] Every link resolves (`npx linkinator dist --recurse` or equivalent)
- [ ] Review on the Amplify URL with you

> Preview: https://phase-2-pages.dshdhrt6lgmzs.amplifyapp.com (Amplify branch `phase-2-pages`, auto-builds on push; `main` and www.wilfredchetat.com are untouched). Checked 2026-10-25: 5 pages, 0 broken internal links or anchors, 10 external URLs return 200 (LinkedIn gives its usual 999 to scripts); every route at 1440 and 390 has no horizontal scroll, no broken images, fonts loaded, one h1, no console errors; preview serves the 404 page with a 404 status and the same security and cache headers as production.

> Needs Wilfred: review the preview, then approve the checkpoint in chat. After approval, `phase-2-pages` merges into `main`, which deploys to www.wilfredchetat.com.

---

## Phase 3: Polish and ship

### Task 9: SEO, metadata, favicon, 404

**Description:** Per-page titles and descriptions, Open Graph/Twitter cards with one OG image in the site style, canonical URLs, `@astrojs/sitemap`, `robots.txt`, favicon set, and a designed 404 page.

**Acceptance criteria:**
- [ ] Every route has a unique `<title>`, description and OG image
- [ ] `sitemap-index.xml` and `robots.txt` present in `dist/`
- [ ] Unknown URL on Amplify returns the 404 page with status 404

**Verification:**
- [ ] Build succeeds
- [ ] Manual: `curl -I https://…/nope/` → 404; OG preview via a card validator

**Dependencies:** Tasks 3–8

**Files likely touched:** `src/layouts/BaseLayout.astro`, `astro.config.mjs`, `public/robots.txt`, `public/og.png`, `public/favicon.svg`, `src/pages/404.astro`

**Estimated scope:** S

---

### Task 10: Accessibility and performance pass

**Description:** Audit every route and fix what turns up: contrast, heading order, focus order, touch targets ≥ 44 px, reduced motion, image sizes, font preloads.

**Acceptance criteria:**
- [ ] Lighthouse mobile ≥ 95 for Performance, Accessibility, Best Practices, SEO on all routes
- [ ] Zero axe violations
- [ ] Total JS shipped on the homepage = 0 KB

**Verification:**
- [ ] Lighthouse reports saved in `tasks/reports/`
- [ ] Manual: full keyboard pass, VoiceOver spot check on the homepage

**Dependencies:** Task 9

**Files likely touched:** components as needed, `src/styles/global.css`

**Estimated scope:** S–M

---

### Task 11: README

**Description:** A short, well-designed README: banner image of the live homepage (light/dark `<picture>`), one-line description, live link, stack badges, three commands (install, dev, build), a compact structure tree and a two-line deploy note. Minimal text.

**Acceptance criteria:**
- [ ] Fits on one screen on GitHub, plus the structure tree
- [ ] Banner is a real capture of the built site, stored in `.github/assets/`
- [ ] Every command in it works on a fresh clone

**Verification:**
- [ ] Manual: view on github.com in light and dark themes; follow the commands in a fresh clone

**Dependencies:** Task 10

**Files likely touched:** `README.md`, `.github/assets/banner-light.png`, `.github/assets/banner-dark.png`

**Estimated scope:** S

---

### Task 12: Production release

**Description:** Resolve or sign off remaining placeholders and tag `v1.0.0`. (CV and domain already done.)

**Acceptance criteria:**
- [ ] `npm run check:placeholders` passes, or every remaining item is approved by you
- [x] Custom domain on HTTPS; apex 301-redirects to `www` (done early)
- [ ] `v1.0.0` tag on `main`

**Verification:**
- [ ] Manual: smoke-test every route on the production URL, phone and desktop

> Note: the reconstructions use bracketed example names on purpose (`[Page]`, `[Lead form]`, `[Account]`, `[Campaign field]`), and `check:placeholders` flags them. Add an allowlist for those before using the check as the launch gate.

**Dependencies:** Task 11, your content (captures, dates, decision text)

**Files likely touched:** page files with placeholders

**Estimated scope:** S

---

### ✅ Checkpoint: Complete
- [ ] All acceptance criteria met
- [ ] Live, fast, accessible, README done
