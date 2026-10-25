# Implementation Plan: Wilfred Chetat Portfolio

## Overview

Build the portfolio designed on the canvas at
https://claude.ai/artifact/1u5mcMR1p11RRbJGzR2qVF ("warm editorial direction, revision 2") as a static site,
pushed to a new GitHub repo and deployed on AWS Amplify Hosting. Ship it with a short, well-designed README.

**Source designs (8 artboards):**

| Artboard | Becomes |
|---|---|
| `Main.dc.html` (desktop 1440) + `Home-Mobile.dc.html` (phone 390) | `/` |
| `Intrvuer.dc.html` + `Intrvuer-Mobile.dc.html` | `/work/intrvuer/` |
| `Sysconnector.dc.html` + `Sysconnector-Mobile.dc.html` | `/work/sysconnector/` |
| `Rust-Parser.dc.html` | `/experiments/rust-json-parser/` |
| `Components.dc.html` | Design tokens and shared components (not a route) |

Desktop and phone artboards merge into one responsive page each.

## Architecture Decisions

- **Astro 7 (static output) + TypeScript.** The site is content pages with almost no interactivity. Astro ships zero JS by default and builds plain HTML that Amplify serves from its CDN. Only the Rust parser playground needs a script, and a small vanilla `<script>` covers it.
- **Node 22.** Astro 7.4 requires Node ≥ 22.23.4. Local is 20.17 (nvm is installed). Pin with `.nvmrc` and in `amplify.yml`.
- **Plain CSS with custom properties.** The Components artboard already defines a small token set (6 colours, 2 typefaces, 4 type sizes, 4/6 px radii). One `tokens.css` and scoped component styles; no Tailwind.
- **Self-hosted fonts** via `@fontsource-variable/newsreader` and `@fontsource/ibm-plex-sans` (400/500/600). No third-party font requests.
- **No content collections.** Three bespoke detail pages with different layouts. Shared data (links, experience, stack) lives in `src/data/site.ts`; each page is one `.astro` file.
- **Directory URLs** (`build.format: 'directory'`, `trailingSlash: 'always'`). Amplify serves `/work/intrvuer/index.html` as `/work/intrvuer/` without rewrite rules.
- **Amplify Hosting (Git-connected, static).** `amplify.yml` in the repo; `customHttp.yml` for security headers and long caching on `/_astro/*`; one 404 rewrite to `/404.html`.
- **Git workflow.** `main` = production branch on Amplify. Work happens on short-lived branches, one commit per task.

## Task List

### Phase 1: Foundation
- [ ] Task 1: Scaffold Astro project, tokens, fonts, base layout
- [ ] Task 2: Create GitHub repo and deploy a skeleton to Amplify

### Checkpoint: Foundation
- [ ] `npm run build` and `npm run check` pass on Node 22
- [ ] Skeleton page live on the `*.amplifyapp.com` URL, auto-deploys on push to `main`

### Phase 2: Pages
- [ ] Task 3: Homepage: header, hero, at-a-glance, contact footer
- [ ] Task 4: Homepage: selected work section
- [ ] Task 5: Homepage: experiments, writing, about
- [ ] Task 6: Intrvuer case study
- [ ] Task 7: Sysconnector case study
- [ ] Task 8: Rust JSON Parser page with playground

### Checkpoint: Pages
- [ ] All four routes match the desktop and phone artboards at 1440 px and 390 px
- [ ] Every internal link and anchor resolves; no console errors
- [ ] Human review on the Amplify preview

### Phase 3: Polish and ship
- [ ] Task 8b: Copy review with clarity
- [ ] Task 9: SEO, metadata, favicon, 404
- [ ] Task 10: Accessibility and performance pass
- [ ] Task 11: README
- [ ] Task 12: Production release

### Checkpoint: Complete
- [ ] Lighthouse ≥ 95 in all four categories on every route (mobile)
- [ ] No unresolved `[placeholder]` text on the live site (or each one approved by you)
- [ ] README renders correctly on GitHub

## Dependency Graph

```
Task 1 scaffold + tokens + layout
  ├── Task 2 repo + Amplify skeleton
  └── Task 3 homepage shell (Header, Footer, Label, Button)
        ├── Task 4 selected work ──┐
        ├── Task 5 experiments…    │  4–8 parallelisable
        ├── Task 6 Intrvuer        │  once Task 3 lands
        ├── Task 7 Sysconnector    │  the shared components
        └── Task 8 Rust parser ────┘
              └── Task 9 SEO → Task 10 a11y/perf → Task 11 README → Task 12 release
```

## Risks and Mitigations

| Risk | Impact | Mitigation |
|---|---|---|
| Node mismatch (local 20, Astro needs 22) | High | `nvm install 22` first; `.nvmrc`; `engines` in `package.json`; Amplify build runs `nvm use` |
| Amplify ↔ GitHub connection needs a browser OAuth step | Med | You approve the GitHub App in the Amplify console once (Task 2). Everything else is in the repo |
| Design has unfilled placeholders (screenshots, dates, tradeoffs) | High | Placeholder boxes are built as designed, so pages work now. A `check:placeholders` script lists what's left; Task 12 blocks on it |
| Portrait lives only in the canvas asset store | Low | Download it once into `src/assets/`; Astro `<Image>` generates AVIF/WebP |
| Illustrative reconstructions read as real product screenshots | Med | Keep the "Illustrative reconstruction" badges and captions exactly as designed |
| AWS default region is `ap-southeast-2` | Low | Amplify serves through CloudFront globally, so region barely affects latency. Pick the region at app creation |

## Decisions (2026-10-25)

- **Repo:** `mecca1991/portfolio`, public.
- **Placeholders:** hold the public launch until real captures and missing text are in. Review happens on the `amplifyapp.com` URL.
- **Domain:** `https://www.wilfredchetat.com` is canonical; the apex 301-redirects to `www`. Attached early (2026-10-25), so the domain is public while pages are built. Registered at Namecheap, DNS in Route 53.
- **Accent:** green `#155E52` (canvas default).
- **AWS:** personal account `338573231383`, CLI profile `personal` (`aws login`). Amplify app `dshdhrt6lgmzs` in `us-east-1`, branch `main` = production. Rules: apex → www (`301`), `/<*>` → `/404.html` (`404-200`: serves the page in place with a 404 status; plain `404` redirects instead). Never use the `default` CLI profile (Sysconnector client account).
- **Old repo:** the 2020 `mecca1991/portfolio` was renamed to `mecca1991/portfolio-2020`.

- **CV:** served from S3, not the repo: `https://wilfredchetat-public.s3.us-east-1.amazonaws.com/Wilfred_Chetat_CV.pdf` (bucket `wilfredchetat-public`, versioned, public read on that one key only). URL lives in `src/data/site.ts`; update with `npm run cv:upload`. The source PDF at the repo root is gitignored.

- **Release:** `main` keeps the holding page until launch so placeholders never go public. Phase branches chain (`phase-3-ship` from `phase-2-pages`), each with its own Amplify preview, and everything merges into `main` at Task 12.
- **Copy:** from Phase 3 on, every reader-facing text a task writes or changes goes through the `clarity` skill (review, then rewrite) without inventing facts.

## Open Questions

None right now.
