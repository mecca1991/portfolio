# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Hiring managers and recruiters filling senior engineering roles are the main visitors (Wilfred, 2026-10-31). They usually arrive from LinkedIn or the CV, skim on a laptop during the workday or on a phone, and decide in seconds whether to reach out. Freelance clients who need an integration, backend or AI feature built are a second audience: the contact copy invites them, but they don't lead the page.

## Product Purpose

The personal site of Wilfred Chetat, a Senior Software Engineer in Dubai. It shows what he has built and how he works, so that a hiring manager contacts him for a senior role. Success means the visitor emails him, opens the CV or reads a case study.

## Positioning

He ships whole products end to end. He works backend first, mainly in Python, and also builds the web and iOS apps, the integrations and the deployment. Intrvuer is his own product: he designed it and built the Next.js web app, the SwiftUI iOS app, the FastAPI backend and the deployment. He built EduClick end to end as a volunteer. Each project has a story about holding up under failure: idempotency keys and a durable answer outbox (Intrvuer), replay-safe upserts (EduClick), skipped repeat transactions (LeaseSurance) and per-lead sync status (Sysconnector). The H1 "Building reliable systems." states that thread.

## Operating Context

- Routes: `/` (home), `/work/intrvuer/`, `/work/sysconnector/`, `/experiments/rust-json-parser/`, `/404.html`.
- Visitors check the CV (PDF on S3), GitHub and LinkedIn alongside the site. The site and the CV must agree on titles, dates and how each engagement worked (`tasks/cv-bullets.md`).
- Live products he built that visitors can open: https://intrvuer.com (with a public sample report at `/sample-report`) and https://www.educlick.africa/opportunities.

## Capabilities and Constraints

- Astro 7, static output, plain CSS with custom properties, Node 22. Almost no client JS: the Rust parser playground is the only script.
- Hosted on AWS Amplify (personal account only, never the `default` CLI profile). `main` deploys www.wilfredchetat.com, so changes reach it only through an approved PR.
- Fonts are self-hosted with no third-party requests. Lighthouse 95 or higher in every category on mobile. WCAG AA contrast.
- The Rust JSON parser is a project, not a learning exercise. The playground is a proposed feature: the plan is to run the parser in the browser as WebAssembly.
- The natural-language video search is a proof of concept and isn't in production.

## Brand Commitments

- Name: Wilfred Chetat. Title: Senior Software Engineer (Wilfred, 2026-10-30). Job titles he actually held keep their wording (Senior Backend Engineer at UXE, Founding Backend Engineer at PaySika).
- H1: "Building reliable systems." (Wilfred, 2026-10-30).
- Voice: plain, specific and first person. No hype, no jokes, no emoji. The site must not feel dense or CV-like, generic or template-like, or playful (Wilfred, 2026-10-31).
- Visual direction (Wilfred, 2026-10-31): after three direction rounds he chose the category standard, a clean modern developer portfolio, with Linear and Stripe's product-marketing polish as the craft bar. Future work keeps that convention and its craft level instead of proposing concept worlds.
- Every reader-facing change goes through the `clarity` skill. Wording changes need Wilfred's approval, and facts never change without his answer.

## Evidence on Hand

- Portrait: `src/assets/portrait.jpg`.
- Real Intrvuer captures: `src/assets/captures/intrvuer/` (context setup, iOS spoken practice, feedback report).
- Sysconnector, LeaseSurance and EduClick are shown as HTML reconstructions. They stay labelled "Illustrative reconstruction" or as fictional or sample data. LeaseSurance's figures are sample data because the real data can't be shown publicly.
- The current Sysconnector marketing site and later Sysconnector features are not his work.
- Writing: the Algorythm article "Reverse image search, explained" (April 2026) and the Numerica Ideas tutorials.
- No usage figures for Intrvuer, no testimonials, no client logos. Never invent metrics, quotes or customers.

## Product Principles

1. Show the work doing its job before describing it.
2. Every claim is one Wilfred has confirmed. When something is illustrative, label it.
3. Respect a recruiter's time: who he is, what he builds and how to reach him are clear on the first screen.
4. End to end means the visitor can see the parts, from the interface to deployment, not just read the words.
