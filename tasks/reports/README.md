# Audit reports

Run 2026-10-25 against the `phase-3-ship` preview (commit `33db49d`), Lighthouse 13.5.0, mobile.

| Page | Performance | Accessibility | Best practices | SEO | LCP | TBT | CLS | JS |
|---|---|---|---|---|---|---|---|---|
| `/` | 100 | 100 | 100 | 100 | 1.2 s | 0 ms | 0 | 0 KB |
| `/work/intrvuer/` | 99 | 100 | 100 | 100 | 1.8 s | 0 ms | 0 | 0 KB |
| `/work/sysconnector/` | 100 | 100 | 100 | 100 | 0.9 s | 0 ms | 0 | 0 KB |
| `/experiments/rust-json-parser/` | 100 | 100 | 100 | 100 | 1.0 s | 0 ms | 0 | 0 KB* |

\* The playground script is inlined in the page, so no script file is downloaded.

Intrvuer's LCP varies with the network: two reruns gave 0.9 s and 1.7 s, both scoring 100.

**axe-core 4.14** (WCAG 2.0/2.1/2.2 A and AA plus best practices): 0 violations on all five pages, including the 404, at 1440, 390 and 320 px. The only "incomplete" results are decorative arrow glyphs that are hidden from assistive tech.

Full reports: `lighthouse-*.report.html` (open in a browser).
