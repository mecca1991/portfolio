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
- [x] Review on the Amplify URL with you (approved 2026-10-25; `main` stays on its holding page until launch)

> Preview: https://phase-2-pages.dshdhrt6lgmzs.amplifyapp.com (Amplify branch `phase-2-pages`, auto-builds on push; `main` and www.wilfredchetat.com are untouched). Checked 2026-10-25: 5 pages, 0 broken internal links or anchors, 10 external URLs return 200 (LinkedIn gives its usual 999 to scripts); every route at 1440 and 390 has no horizontal scroll, no broken images, fonts loaded, one h1, no console errors; preview serves the 404 page with a 404 status and the same security and cache headers as production.

> Decision 2026-10-25: don't merge yet. `main` keeps the holding page so placeholders never go public; Phase 3 continues on `phase-3-ship`, branched from `phase-2-pages`, and everything merges into `main` at launch (Task 12).

---

## Phase 3: Polish and ship

### Task 8b: Copy review with clarity

**Description:** Run the `clarity` skill over the reader-facing prose on every page (homepage sections, both case studies, the parser page, captions, alt text, `src/data/site.ts`). Start in review mode, then apply rewrites that make the copy more specific and more like Wilfred's own voice, without inventing facts or changing what each section claims.

**Acceptance criteria:**
- [x] Every page's prose reviewed with `clarity`; findings and the rewrites applied are listed in the commit body
- [x] No fact added, removed or changed; canvas placeholder text left verbatim; engagement labels and "Illustrative" captions unchanged
- [x] Anything that needs Wilfred's knowledge or approval (claims, numbers, tone calls) listed under this task as `> Needs Wilfred:`

**Verification:**
- [x] `npm run build` and `npm run check` pass
- [x] Manual: read the diff against the artboard copy; spot-check every page at 1440 and 390 for layout breaks from changed text length

> Note: `clarity` review found the copy specific and plain (0 hedges, boosters or participial openers in its lint). Seven small fixes went in, listed in the commit body: three repetitions removed, one mixed-tense list split, one vague phrase made concrete from its own figure, and two notes-to-self cut from captions. No facts changed; placeholders untouched; 17 left.

> Needs Wilfred:
> - The H1 "Building reliable backend systems and AI-powered products." is your positioning line, so it's unchanged. It reads like a tagline many engineers could use. What's the one thing you most want a hiring manager to remember (payments backends, for example)?
> - ~~Intrvuer flow figure: name the providers?~~ Answered 2026-10-25: no, provider names stay off the site.
> - Sysconnector leads figure: do "Synced", "Failed · field not mapped" and "Pending" match the real status labels? If yes, the caption can say so again.

**Dependencies:** Pages checkpoint

**Files likely touched:** `src/components/*.astro`, `src/pages/**/*.astro`, `src/data/site.ts`

**Estimated scope:** M

---

### Task 9: SEO, metadata, favicon, 404

**Description:** Per-page titles and descriptions, Open Graph/Twitter cards with one OG image in the site style, canonical URLs, `@astrojs/sitemap`, `robots.txt`, favicon set, and a designed 404 page.

**Acceptance criteria:**
- [x] Every route has a unique `<title>`, description and OG image
- [x] `sitemap-index.xml` and `robots.txt` present in `dist/`
- [x] Unknown URL on Amplify returns the 404 page with status 404

**Verification:**
- [x] Build succeeds
- [x] Manual: `curl -I https://…/nope/` → 404; OG tags and image checked on every route (the card-validator check moves to Task 12: validators fetch `og:image` from www, which serves the holding page until launch)

> Note: one shared OG card (1200×630, site fonts and portrait, no tagline, since the H1 is still an open question). Verified on the phase-3-ship preview 2026-10-25: `/nope/` → 404 with the noindex page; robots.txt, sitemap-index.xml, sitemap-0.xml (4 URLs, 404 excluded), og.png and favicons served with the right types. Canonical and og:url point at www.wilfredchetat.com on every page.

**Dependencies:** Tasks 3–8

**Files likely touched:** `src/layouts/BaseLayout.astro`, `astro.config.mjs`, `public/robots.txt`, `public/og.png`, `public/favicon.svg`, `src/pages/404.astro`

**Estimated scope:** S

---

### Task 10: Accessibility and performance pass

**Description:** Audit every route and fix what turns up: contrast, heading order, focus order, touch targets ≥ 44 px, reduced motion, image sizes, font preloads.

**Acceptance criteria:**
- [x] Lighthouse mobile ≥ 95 for Performance, Accessibility, Best Practices, SEO on all routes
- [x] Zero axe violations
- [x] Total JS shipped on the homepage = 0 KB

**Verification:**
- [x] Lighthouse reports saved in `tasks/reports/`
- [x] Manual: full keyboard pass and accessibility-tree check (VoiceOver spot check moved to Task 12, see note)

> Note: scores and axe results are in `tasks/reports/README.md`. Changes: CSS inlined (no render-blocking requests), the two Latin fonts preloaded, more capture widths with accurate `sizes`, and code panels made keyboard-focusable (the one axe violation). Every page has one h1, no skipped heading levels, header/nav/main landmarks, `lang="en"`, and a visible focus ring on every interactive element. Reduced motion is handled globally in `global.css`. Lighthouse still notes a 26 KiB image-delivery estimate for the feedback capture; it's the correct srcset choice for a 1.75× phone, so it stays.

> Needs Wilfred: a VoiceOver spot check on the homepage (⌘F5 on a Mac). I can't run a screen reader from here, so it's on the Task 12 launch checklist.

**Dependencies:** Task 9

**Files likely touched:** components as needed, `src/styles/global.css`

**Estimated scope:** S–M

---

### Task 11: README

**Description:** A short, well-designed README: banner image of the live homepage (light/dark `<picture>`), one-line description, live link, stack badges, three commands (install, dev, build), a compact structure tree and a two-line deploy note. Minimal text.

**Acceptance criteria:**
- [x] Fits on one screen on GitHub, plus the structure tree
- [x] Banner is a real capture of the built site, stored in `.github/assets/`
- [x] Every command in it works on a fresh clone

**Verification:**
- [x] Manual: view on github.com in light and dark themes; follow the commands in a fresh clone

> Note: the banner is a real capture of the homepage hero on GitHub-light (#ffffff) and GitHub-dark (#0d1117) frames. It uses `#gh-light-mode-only` / `#gh-dark-mode-only` because `<picture>` follows the OS appearance, which showed the light banner on your dark GitHub. Verified live on the phase-3-ship branch page in dark mode (dark banner shown, light hidden); the light switch wasn't observed, since changing your GitHub theme is an account setting. The README content above the layout tree takes ~875 px. A fresh clone on Node 22 runs `npm ci`, `npm run build` (5 pages plus sitemap) and `npm run dev` (homepage 200); `npm run cv:upload -- --dryrun` targets the right S3 key. If the H1 changes, recapture the banner.

**Dependencies:** Task 10

**Files likely touched:** `README.md`, `.github/assets/banner-light.png`, `.github/assets/banner-dark.png`

**Estimated scope:** S

---

### Task 12: Production release

**Description:** Resolve or sign off remaining placeholders and tag `v1.0.0`. (CV and domain already done.)

**Acceptance criteria:**
- [x] `npm run check:placeholders` passes, or every remaining item is approved by you
- [x] Custom domain on HTTPS; apex 301-redirects to `www` (done early)
- [x] `v1.0.0` tag on `main`
- [x] OG card renders in a card validator (e.g. LinkedIn Post Inspector) for www.wilfredchetat.com
- [ ] VoiceOver spot check on the homepage (Wilfred)

**Verification:**
- [x] Manual: smoke-test every route on the production URL, phone and desktop

> Note: `check:placeholders` now allowlists the reconstructions' deliberate example names (`[Page]`, `[Lead form]`, `[Account]`, `[Campaign field]`). On 2026-10-25 it passes: no placeholders left. The Sysconnector credentials decision now carries Wilfred's reason (Adobe Campaign had no standard OAuth and new credentials were generated by hand), and its tradeoff is storing them securely. Sysconnector dates are in: Aug 2023 – Sep 2024. Intrvuer's start date (Nov 2025) is in, and the spoken-practice step now uses the iOS app's interview screen from `educlick/intrvuer-pending/marketing/…/03-interview.png`. Intrvuer's technical notes and both decisions were written from the intrvuer-be and intrvuer-ios git histories (commit 729c6ce). Wilfred's review: the worker incident and the provider names are out, and the follow-up tradeoff now says why pre-generation was dropped (a candidate who stopped halfway left paid-for follow-ups unused).

> Launched 2026-10-25: PR #1 merged `phase-3-ship` into `main` (1a81e4d), tagged `v1.0.0`, Amplify build SUCCEED. Production smoke test: every route 200 (unknown routes 404 with the designed page), apex 301 to www, security headers and immutable `/_astro/` caching present, CV link 200 PDF, no placeholders. No horizontal overflow at 390 or 1440 px under CDP device emulation. opengraph.xyz renders the card with 0 errors; warnings: no call-to-action text on the image (ignored) and a 145-character description that may truncate on mobile.

> Needs Wilfred, to launch:
> - Answers to the Task 8b questions (H1 positioning line, real lead status labels). Provider names: no, keep them off the site
> - VoiceOver spot check (Wilfred). Merge approved 2026-10-25 and done

**Dependencies:** Task 11, your content (captures, dates, decision text)

**Files likely touched:** page files with placeholders

**Estimated scope:** S

---

### ✅ Checkpoint: Complete
- [ ] All acceptance criteria met
- [ ] Live, fast, accessible, README done

---

## Phase 4: Copy cleanup (after launch)

From the end-to-end `clarity` review on 2026-10-30. Work on `phase-3-ship`; changes reach `main` only through a PR, after Wilfred approves a checkpoint. A change either rewords what the page already says or uses a fact that Wilfred gave in chat or that was verified in the source repos (named in the task). Every changed text goes through `clarity` before it's committed.

Wilfred's answers (2026-10-30): the Rust parser is a project, not a learning exercise; the playground stays as a proposed feature, planned to run the Rust parser in the browser as WebAssembly; the iOS app is his, with a hired designer (Theryx) paid for design refinement; Intrvuer gives 2 free sessions, and "anyone can try" stays as his line; the video search proof of concept is not in production; experience is over 7 years; the Lease Insurance figure is sample data because the real data can't be shown publicly; he built EduClick end to end as a volunteer (backend, frontend, deployment; every commit in `educlick-be`, `educlick-fe`, `educlickadmin` and `server-infra` is his, from April 2024). No usage figure for Intrvuer. The "Lease Insurance" project is LeaseSurance (https://www.leasesurance.co/), whose backend he built as a contractor with Alphathesis; the public CV already lists Alphathesis as "Contract – Remote" and "an insurance platform".

### Task 13: Rust parser: drop the learning framing, name the WebAssembly plan

**Description:** The parser is presented as a personal project. The site stops saying it was a learning project or built in a cohort. The `rust-cohort` repo keeps its name, so the source links still contain the word. The playground stays a proposed feature and now says what's planned.

**Acceptance criteria:**
- [x] `grep -rniE "learn|cohort" src` matches only the two `rust-cohort` source URLs
- [x] The label reads "Personal project" on the homepage card, the Rust page and Sysconnector's next link ("Next · Personal project")
- [x] "developed with cohort feedback" (homepage card) and "I developed it in a Rust cohort and revised it based on cohort feedback" (Rust page) say it was revised after code review. Verified: PRs #4, #5, #8 and #9 on `mecca1991/rust-cohort` have reviews from two other reviewers
- [x] The Rust meta description drops "built in a Rust cohort"
- [x] Facts: Engagement "Personal project", Status "Not intended for production use" (already changed in the working tree)
- [x] "How it works" step 3 says the structured errors came out of review only if those PRs' review comments asked for them; otherwise it stays as is
- [x] The playground note says the plan is to run the Rust parser in the browser as WebAssembly, and that until then the preview uses the browser's own JSON parser. The "Proposed feature" frame stays

**Verification:**
- [x] `npm run build && npm run check` pass
- [x] Manual: homepage experiments card and Rust page at 1440 and 390; no horizontal scroll

> Note: done 2026-10-30. Review comments on PR #4 flagged panics on truncated `\u` escapes and swallowed errors, so step 3 now says code review caught them. The playground note names the WebAssembly plan. No horizontal scroll at 1440 or 390 on the homepage, the Rust page or Sysconnector's next link.

**Dependencies:** None

**Files likely touched:** `src/components/Experiments.astro`, `src/pages/experiments/rust-json-parser.astro`, `src/components/JsonPlayground.astro`, `src/pages/work/sysconnector.astro`

**Estimated scope:** S

---

### Task 14: Intrvuer: wording fixes from the review

**Description:** Three sentences that read wrong or depend on the collapsed technical notes, plus a vague Stack fact. No new claims.

**Acceptance criteria:**
- [x] Technical notes: "a synthesis failure costs the audio, not the answer" says instead that the interviewer's reply arrives as text and the answer is still saved (verified: synthesis runs after the commit, and a failure gives a text-only turn)
- [x] Decision 1: "inside the turn's budget" reads "inside the 90-second turn budget", since the budget is only defined in the collapsed notes
- [x] Decision 2's title matches its body, which is mostly about not losing answers (draft: "Never lose a recorded answer")
- [x] The Stack fact names Celery, Redis and PostgreSQL instead of "background processing" (the technical notes already name them)

**Verification:**
- [x] `npm run build && npm run check` pass
- [x] Manual: Intrvuer page at 1440 and 390; open the technical notes with the keyboard

> Note: done 2026-10-30. Decision 2 is titled "Keep each answer until the server accepts it" rather than the draft, because the other decision titles state the decision itself. Technical notes open from the keyboard (Enter on the summary); no horizontal scroll at 1440 or 390.

**Dependencies:** None

**Files likely touched:** `src/pages/work/intrvuer.astro`

**Estimated scope:** S

---

### Task 15: Homepage: wording fixes from the review

**Description:** Small accuracy fixes on the homepage. No new claims beyond Wilfred's answers.

**Acceptance criteria:**
- [x] "products like Intrvuer" becomes singular in the hero lede and the homepage meta description, since there is one product (draft lede: "…and I built Intrvuer, my own product, from interface to deployment.")
- [x] The homepage meta description is 120 characters or fewer (opengraph.xyz warned that 145 may truncate on mobile)
- [x] The glance term "Works on" reads "Work type" (the same data shows in About on phones)
- [x] Experience reads "7+ years" (the timeline starts Mar 2019)
- [x] The video search card's "Separate from production work." says plainly that it isn't in production

**Verification:**
- [x] `npm run build && npm run check` pass
- [x] Manual: homepage at 1440 and 390; no layout change from the new text lengths

> Note: done 2026-10-30. The meta description is now 108 characters and no longer names Intrvuer, which is the first project on the page. The hero lede changed, so the README banners were recaptured (light and dark, 1456×832). No horizontal scroll at 1440 or 390; the glance strip still fits one row at 1440.

**Dependencies:** None

**Files likely touched:** `src/components/Hero.astro`, `src/pages/index.astro`, `src/data/site.ts`, `src/components/Experiments.astro`

**Estimated scope:** S

---

### Task 16: Intrvuer: credit the iOS app and firm up Outcomes

**Description:** The iOS app carries the spoken-practice screenshot and all of Decision 2, but the homepage role line, the Stack fact and the flow diagram only name Next.js. Verified: `intrvuer-ios` is SwiftUI, and the app is Wilfred's; a hired designer refined its design. The `prod` branch of `intrvuer-be` grants 2 free sessions (`free_sessions = 2`), which Wilfred confirmed.

**Acceptance criteria:**
- [x] The homepage role line, the Stack fact and the flow diagram include the SwiftUI iOS app
- [x] Outcomes keeps "anyone can try" and adds the two free practice sessions
- [x] "No figures are claimed here" is cut; "Not yet measured" stays (no usage figure to publish)

**Verification:**
- [x] `npm run build && npm run check` pass
- [x] Manual: homepage and Intrvuer page at 1440 and 390; the flow diagram still fits at 390

> Note: done 2026-10-30. Also credited in the case study's "My role" fact ("web and iOS apps") and in step 2's "What I built" ("the session interface on web and iOS"), since step 2 shows the iOS app. The flow diagram's Interface node reads "Next.js web, SwiftUI iOS" and fits at 390. No horizontal scroll at 1440 or 390.

**Dependencies:** None (answered 2026-10-30)

**Files likely touched:** `src/components/SelectedWork.astro`, `src/pages/work/intrvuer.astro`

**Estimated scope:** S

---

### Task 17: LeaseSurance: name the product and the contract

**Description:** The "Lease Insurance" card is LeaseSurance, a South African insurtech that replaces rental deposits with lease insurance for residential and commercial portfolios (from leasesurance.co). Wilfred built its backend as a contractor with Alphathesis. The card names the product and says how he was involved; the figure stays sample data.

**Acceptance criteria:**
- [x] The card title is "LeaseSurance" (the company's own spelling), its label is "Contract project", and the detail stays "Alphathesis · 2023–2024"
- [x] The one-liner says what LeaseSurance does, from its public site; the description says he built the backend as a contractor with Alphathesis and keeps the source-file problem and what he built
- [x] The figure caption says it's sample data because the real data can't be shown publicly, and drops "not insertion order", which the figure doesn't show
- [x] The Alphathesis experience entry says it was a contract and names the LeaseSurance backend (draft: "Contract Software Engineer · LeaseSurance backend")

**Verification:**
- [x] `npm run build && npm run check` pass
- [x] Manual: homepage projects and About at 1440 and 390

> Note: done 2026-10-30. The one-liner follows LeaseSurance's own tagline ("Lease insurance for residential and commercial portfolios") and its deposit-free model. The caption now also says repeats are skipped, which the figure shows. No horizontal scroll at 1440 or 390.

**Dependencies:** None (answered 2026-10-30)

**Files likely touched:** `src/components/SelectedWork.astro`, `src/data/site.ts`

**Estimated scope:** S

---

### Task 18: EduClick: show it as a volunteer project built end to end

**Description:** EduClick is labelled "Engineering contribution" and described as backend work. Wilfred built the whole platform as a volunteer: backend, frontend and deployment.

**Acceptance criteria:**
- [x] EduClick's label reads "Volunteer project" instead of "Engineering contribution"
- [x] The card says he built the platform end to end (backend, frontend, deployment); the one-liner describes the platform, and the ingestion detail and figure stay as the example
- [x] About's "contribute to EduClick's opportunity-ingestion backend" says he built EduClick as a volunteer

**Verification:**
- [x] `npm run build && npm run check` pass
- [x] Manual: homepage projects and About at 1440 and 390

> Note: done 2026-10-30. The card names the FastAPI backend and Next.js frontend (verified in `educlick-be` and `educlick-fe`); "as a volunteer" stays in the label rather than the description. About now reads: "I built EduClick end to end as a volunteer, and Intrvuer as my own product." No horizontal scroll at 1440 or 390.

**Dependencies:** None (answered 2026-10-30)

**Files likely touched:** `src/components/SelectedWork.astro`, `src/components/About.astro`

**Estimated scope:** S

---

### Task 18b: Sysconnector: name the stack

**Description:** Intrvuer's facts list its stack; Sysconnector's only say "Backend APIs and webhooks; React interfaces". Wilfred gave the stack on 2026-10-30, including the exact Adobe product, Adobe Campaign Standard.

**Acceptance criteria:**
- [ ] The Sysconnector facts gain a Stack row: FastAPI, PostgreSQL, React, Stripe, Facebook Graph API, Adobe Campaign Standard
- [ ] The full name "Adobe Campaign Standard" appears in the Stack row; the rest of the page keeps the short "Adobe Campaign"

**Verification:**
- [ ] `npm run build && npm run check` pass
- [ ] Manual: Sysconnector page at 1440 and 390; the facts column doesn't overflow

**Dependencies:** None

**Files likely touched:** `src/pages/work/sysconnector.astro`

**Estimated scope:** XS

---

### Task 19: Homepage H1

**Description:** Wilfred chose option 1 on 2026-10-30: "Python backends that hold up under retries, duplicates and bad input." Every claim in it is shown by a project below it.

**Acceptance criteria:**
- [ ] The H1 reads "Python backends that hold up under retries, duplicates and bad input."
- [ ] It sits well with the lede below it (no awkward repeat) at 1440 and 390
- [ ] README banners recaptured (light and dark)

**Verification:**
- [ ] `npm run build && npm run check` pass
- [ ] Manual: homepage at 1440 and 390; README on GitHub if the banners changed

> Answered 2026-10-30: option 1. The options offered, each drawn from what the case studies show:
> 1. "Python backends that hold up under retries, duplicates and bad input." (Intrvuer's idempotent answers, LeaseSurance's duplicate prevention, EduClick's replay-safe upserts and rejected records, the parser's structured errors)
> 2. "Python backends for payments, integrations and data systems." (the lede's own list; the lede would lose its repeat)
> 3. "Python backends, and the products built on them." (Intrvuer end to end, Sysconnector's React screens, About's second sentence)

**Dependencies:** None (answered 2026-10-30)

**Files likely touched:** `src/components/Hero.astro`, `.github/assets/banner-*.png`

**Estimated scope:** S

---

### ✅ Checkpoint: Wording fixes
- [ ] Tasks 13–19 committed and pushed; Amplify preview build succeeded
- [ ] Wilfred reviews https://phase-3-ship.dshdhrt6lgmzs.amplifyapp.com
- [ ] After approval: PR into `main`, merged; the changed pages checked on production

---

### Task 20: Lines only Wilfred can write (optional)

**Description:** A short `clarity` interview for the places where a page restates itself instead of saying something only Wilfred knows. Skipped if he prefers the current text.

**Acceptance criteria:**
- [ ] Intrvuer's Purpose says why he built it, instead of a third summary of what it does
- [ ] About adds one sentence on how he works, in his words
- [ ] Sysconnector: the credentials tradeoff says how they were stored, and the lead status labels are confirmed real or kept illustrative (open since Task 8b)

**Verification:**
- [ ] `npm run build && npm run check` pass
- [ ] Manual: homepage, Intrvuer and Sysconnector at 1440 and 390

> Needs Wilfred: 3–4 interview questions, asked in chat.

**Dependencies:** Wilfred's answers

**Files likely touched:** `src/pages/work/intrvuer.astro`, `src/components/About.astro`, `src/pages/work/sysconnector.astro`

**Estimated scope:** S

### Task 21: CV: use the site's terms

**Description:** The CV predates the Phase 4 answers. It doesn't name LeaseSurance, leaves out Sysconnector and EduClick, says "more than 6 years", and describes Intrvuer's retired Qdrant follow-ups and removed speech providers. The line-by-line changes and their sources are in `tasks/cv-bullets.md`. The CV source isn't in the repo, so Wilfred makes the edit; the new PDF then goes to S3.

**Acceptance criteria:**
- [ ] The CV carries the changes in `tasks/cv-bullets.md`
- [ ] The site and the CV agree on titles, dates, years of experience and how each engagement worked (employed, contract, freelance, volunteer)
- [ ] The new PDF is uploaded with `npm run cv:upload`, and the site's CV link serves it

**Verification:**
- [ ] Manual: download the CV from www.wilfredchetat.com and compare it with `tasks/cv-bullets.md`

> Needs Wilfred: edit the CV source using `tasks/cv-bullets.md`. (Answered 2026-10-30: UXE is a full-time role; Sysconnector used FastAPI, PostgreSQL, React, Stripe, the Facebook Graph API and Adobe Campaign Standard.)

**Dependencies:** Wilfred's edit

**Files likely touched:** `Wilfred_Chetat_CV.pdf` (gitignored; uploaded to S3)

**Estimated scope:** S

---

Not in this phase: the Rust page's "Back to projects / ← All projects" pair (canvas layout).

---

### ✅ Checkpoint: Copy cleanup complete
- [ ] Tasks 20–21 done, or deferred by Wilfred
- [ ] PR into `main` merged after approval; the changed pages checked on production at 1440 and 390
