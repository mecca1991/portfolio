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

OWN-WORLD: White ground with one cool grey tone step for panels, near-black ink, and one green accent, used only for the primary action, links and the operational "Live" dot. Dark ink bands for code and the close. Mona Sans as the only family at a wide range of weights, with tabular figures. Screenshots sit on tinted panels, never in outlined boxes. Pill controls, Stripe's convention (Wilfred, 2026-11-01: "Keep the pills"), with press feedback on every one.

STORY: The visitor sees the person and the claim, then real product screens at scale. The projects show what he built at each layer, the experiments show depth, and the about section and the timeline earn trust. The close makes emailing him one tap.

FIRST VIEWPORT: Two columns (Wilfred, 2026-11-01, asked for this over the stacked version: "Switch to two columns"). Left: "Building reliable systems." over two lines at about 80px, the most the text column holds; the lede with a small inline portrait beside his name; a primary "View projects" pill and a secondary "Get in touch"; the CV, GitHub and LinkedIn links. Right, the larger half: a composed product stage that bleeds off the right edge of the screen, the Intrvuer sample report in a browser frame on a tinted panel with the iOS practice screen standing on its lower edge. The stage rises in once on load. Below 64rem the stage moves under the text, inside the margins.

FORM: Category standard (canon), executed straight at Linear and Stripe polish; chosen in round 3 over Contact Sheet and Monograph. seed:95643153bc9c98d8. Signature interaction: the Intrvuer showcase switches between its three real steps (context setup, spoken practice, feedback report) with a clip-path tab transition, and each step names what he built. Motion grammar: one load sequence in the hero, staggered section entrances (16px rise with opacity, about 70ms apart), press feedback at scale 0.97, all on a strong ease-out, with movement removed under reduced motion.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

## Unresolved

- Dark theme: not in scope for this pass (the scene is daylight). Offer it afterwards.
