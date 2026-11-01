---
version: 1
slug: "src-pages-index-astro"
primary_target: "src/pages/index.astro"
related_targets: []
---

# Homepage surface brief

Scope: `/` (src/pages/index.astro and its section components). Mode: Experience, with a Persuade job: a hiring manager or recruiter should leave knowing who Wilfred is, that he ships whole products end to end, and how to reach him.

Audience and job: hiring managers and recruiters for senior engineering roles, arriving from LinkedIn or the CV on a laptop in daylight, or on a phone. Action: email him, open the CV or read a case study. Proof: the live products (Intrvuer, EduClick), the labelled reconstructions (Sysconnector, LeaseSurance) and the case studies. Constraints: PRODUCT.md.

Chosen direction (2026-10-31): after three direction rounds Wilfred took the category standard, a clean modern developer portfolio, with Linear and Stripe's product-marketing polish as the craft bar.

## Direction contract

THESIS: A developer portfolio built to the polish of a product launch page. His shipped products are shown the way Linear and Stripe show theirs: large, real and composed. It refuses the cream-and-serif editorial look it replaces, the dark gradient hero and the card grid.

OWN-WORLD: White ground with one cool grey tone step for panels, near-black ink, and one green accent, used only for the primary action, links and the operational "Live" dot. Dark ink bands for code and the close. Mona Sans as the only family at a wide range of weights, with tabular figures. Screenshots sit on tinted panels, never in outlined boxes. Pill controls (Stripe's convention, chosen during the build and seen by Wilfred at checkpoint 1 on 2026-11-01), with press feedback on every one.

STORY: The visitor sees the person and the claim, then real product screens at scale. The projects show what he built at each layer, the experiments show depth, and the about section and the timeline earn trust. The close makes emailing him one tap.

FIRST VIEWPORT: (amended 2026-11-01 to the layout Wilfred reviewed at checkpoint 1, where he changed only wording) "Building reliable systems." at about 96px across the full width on one line (two on phones). Below it, the lede with a small inline portrait beside his name on the left, and on the right the primary "View projects" pill, the secondary "Get in touch" and the CV, GitHub and LinkedIn links. Below both, full width: a composed product stage, the Intrvuer sample report in a browser frame on a tinted panel with the iOS practice screen overlapping its right side, bleeding off the fold. The stage rises in once on load.

FORM: Category standard (canon), executed straight at Linear and Stripe polish; chosen in round 3 over Contact Sheet and Monograph. seed:95643153bc9c98d8. Signature interaction: the Intrvuer showcase switches between its three real steps (context setup, spoken practice, feedback report) with a clip-path tab transition, and each step names what he built. Motion grammar: one load sequence in the hero, staggered section entrances (16px rise with opacity, about 70ms apart), press feedback at scale 0.97, all on a strong ease-out, with movement removed under reduced motion.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

## Unresolved

- Dark theme: not in scope for this pass (the scene is daylight). Offer it afterwards.
