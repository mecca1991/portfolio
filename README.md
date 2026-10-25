![The wilfredchetat.com homepage: Wilfred Chetat, Senior Backend Engineer in Dubai, with a portrait and links to projects, CV, GitHub and LinkedIn.](.github/assets/banner-light.png#gh-light-mode-only)
![The wilfredchetat.com homepage: Wilfred Chetat, Senior Backend Engineer in Dubai, with a portrait and links to projects, CV, GitHub and LinkedIn.](.github/assets/banner-dark.png#gh-dark-mode-only)

# wilfredchetat.com

Source for [www.wilfredchetat.com](https://www.wilfredchetat.com), the portfolio of Wilfred Chetat, a senior backend engineer in Dubai.

[![Astro 7](https://img.shields.io/badge/Astro-7-BC52EE?logo=astro&logoColor=white)](https://astro.build)
[![TypeScript](https://img.shields.io/badge/TypeScript-strict-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![AWS Amplify](https://img.shields.io/badge/AWS_Amplify-hosting-FF9900?logo=awsamplify&logoColor=white)](https://aws.amazon.com/amplify/)
[![Lighthouse](https://img.shields.io/badge/Lighthouse-99%2B_mobile-0CCE6B?logo=lighthouse&logoColor=white)](tasks/reports/README.md)

## Run it

Needs Node 22; `nvm use` picks it up from `.nvmrc`.

```sh
npm ci
npm run dev      # http://localhost:4321
npm run build    # static site in dist/
```

## Layout

```text
src/
├─ pages/        home, two case studies, Rust parser, 404
├─ components/   page sections and shared pieces
├─ layouts/      BaseLayout (head, fonts), CaseStudyLayout
├─ data/site.ts  links, experience, stack, writing
├─ scripts/      playground parser, the only client JS
└─ styles/       design tokens and global CSS
public/          favicons, OG image, robots.txt
tasks/           plan, task list, audit reports
```

## Deploy

Pushing to `main` deploys www.wilfredchetat.com through AWS Amplify (`amplify.yml`; headers in `customHttp.yml`).
The CV lives on S3: put the new `Wilfred_Chetat_CV.pdf` in the repo root (it's gitignored) and run `npm run cv:upload`.
