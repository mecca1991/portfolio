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
- [ ] Build + check pass locally on Node 22
- [ ] Live skeleton deploys on push
- [ ] Review with you before page work

---

## Phase 2: Pages

### Task 3: Homepage: header, hero, at-a-glance, contact footer

**Description:** Build the homepage frame and the shared pieces every page reuses: `Header` (logo, nav, CV button; one row on phones), `Hero` with the portrait, the at-a-glance strip, and the dark contact section with footer. Set up `src/data/site.ts` for email, profile links and CV path.

**Acceptance criteria:**
- [ ] Matches `Main.dc.html` at 1440 px and `Home-Mobile.dc.html` at 390 px
- [ ] Portrait served through Astro `<Image>` as AVIF/WebP with the designed alt text
- [ ] Skip link, nav anchors and external `↗` links work; focus ring visible on every interactive element

**Verification:**
- [ ] `npm run build` succeeds
- [ ] Manual: compare side by side with the canvas at both widths; tab through the page

**Dependencies:** Task 1

**Files likely touched:** `src/components/Header.astro`, `src/components/Hero.astro`, `src/components/ContactSection.astro`, `src/components/Label.astro`, `src/data/site.ts`, `src/assets/portrait.jpg`, `src/pages/index.astro`

**Estimated scope:** M

---

### Task 4: Homepage: selected work section

**Description:** The four project entries: Intrvuer and Sysconnector as large alternating rows, Lease Insurance and EduClick as a two-column grid, each with its engagement label and evidence figure (placeholder box, illustrative mapping table, balance table, import batch).

**Acceptance criteria:**
- [ ] Order on phones follows the Components rule: label, title, one-liner, contribution, visual, actions
- [ ] "Illustrative reconstruction" badges and captions appear exactly as designed
- [ ] "Read the case study" links go to `/work/intrvuer/` and `/work/sysconnector/`

**Verification:**
- [ ] Build succeeds
- [ ] Manual: 1440 / 390 comparison against the canvas

**Dependencies:** Task 3

**Files likely touched:** `src/components/ProjectFeature.astro`, `src/components/ProjectCard.astro`, `src/components/EvidenceFigure.astro`, `src/pages/index.astro`

**Estimated scope:** M

---

### Task 5: Homepage: experiments, writing, about

**Description:** The tinted experiments band (Rust parser card with input/output panels, video-search proof of concept), the writing list, and the About section with the "what I work with" table and experience timeline.

**Acceptance criteria:**
- [ ] Experience and stack read from `src/data/site.ts`, not hard-coded in markup
- [ ] "How it works" links to `/experiments/rust-json-parser/`; code panels scroll horizontally on phones instead of overflowing

**Verification:**
- [ ] Build succeeds
- [ ] Manual: 1440 / 390 comparison; no horizontal page scroll at 390 px

**Dependencies:** Task 3

**Files likely touched:** `src/components/ExperimentCard.astro`, `src/components/WritingList.astro`, `src/components/About.astro`, `src/data/site.ts`, `src/pages/index.astro`

**Estimated scope:** M

---

### Task 6: Intrvuer case study

**Description:** `/work/intrvuer/` from `Intrvuer.dc.html` and its phone artboard: header block with facts list, "On this page" nav (sticky sidebar on desktop, inline box on phones), five numbered sections, architecture flow figure, "Technical notes" disclosure, next-project link, contact. Extract a `CaseStudyLayout` that Task 7 reuses.

**Acceptance criteria:**
- [ ] "Technical notes" is a native `<details>` (works without JS)
- [ ] "On this page" anchors land on the right section headings
- [ ] Placeholder text from the canvas kept verbatim and listed by `check:placeholders`

**Verification:**
- [ ] Build succeeds
- [ ] Manual: 1440 / 390 comparison; keyboard-open the disclosure

**Dependencies:** Task 3

**Files likely touched:** `src/layouts/CaseStudyLayout.astro`, `src/components/OnThisPage.astro`, `src/components/NextProject.astro`, `src/pages/work/intrvuer.astro`, `scripts/check-placeholders.mjs`

**Estimated scope:** M

---

### Task 7: Sysconnector case study

**Description:** `/work/sysconnector/` on `CaseStudyLayout`: the three illustrative UI reconstructions (connection setup, field mapping, lead status), "Also in this engagement", decision/tradeoff tables, outcomes, next link to the Rust parser.

**Acceptance criteria:**
- [ ] Reconstructions are HTML (not images), each with the dashed "Illustrative reconstruction" badge
- [ ] The scope disclaimer ("earlier version of the product…") is present under the intro

**Verification:**
- [ ] Build succeeds
- [ ] Manual: 1440 / 390 comparison

**Dependencies:** Task 6 (layout)

**Files likely touched:** `src/pages/work/sysconnector.astro`, `src/components/UiReconstruction.astro`, `src/components/DecisionTable.astro`

**Estimated scope:** M

---

### Task 8: Rust JSON Parser page with playground

**Description:** `/experiments/rust-json-parser/`: intro and facts, input → parsed-structure figure, "How it works" steps, before/after code panel, and the playground (three example tabs, editable textarea, live tree output, error state, expand/collapse), ported from the canvas logic to a vanilla script.

**Acceptance criteria:**
- [ ] Playground keeps the dashed "Proposed feature" frame and the note that it uses the browser's JSON parser, not the Rust code
- [ ] Tabs use `aria-pressed`; output region is `aria-live="polite"`; invalid input shows the error box
- [ ] Page is readable and usable without JS (playground hidden or static if JS off)

**Verification:**
- [ ] Build succeeds
- [ ] Manual: switch all three examples, type invalid JSON, toggle expand; check with JS disabled

**Dependencies:** Task 3

**Files likely touched:** `src/pages/experiments/rust-json-parser.astro`, `src/components/JsonPlayground.astro`, `src/scripts/json-playground.ts`

**Estimated scope:** M

---

### ✅ Checkpoint: Pages
- [ ] All routes match the artboards at 1440 and 390
- [ ] Every link resolves (`npx linkinator dist --recurse` or equivalent)
- [ ] Review on the Amplify URL with you

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

**Description:** Resolve or sign off remaining placeholders, add the CV PDF, attach the custom domain (if any), tag `v1.0.0`.

**Acceptance criteria:**
- [ ] `npm run check:placeholders` passes, or every remaining item is approved by you
- [ ] Custom domain on HTTPS (if chosen); `www` redirects to apex
- [ ] `v1.0.0` tag on `main`

**Verification:**
- [ ] Manual: smoke-test every route on the production URL, phone and desktop

**Dependencies:** Task 11, your content (captures, CV, dates, decision text)

**Files likely touched:** `public/cv.pdf`, page files with placeholders

**Estimated scope:** S

---

### ✅ Checkpoint: Complete
- [ ] All acceptance criteria met
- [ ] Live, fast, accessible, README done
