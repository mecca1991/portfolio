export const site = {
  name: 'Wilfred Chetat',
  email: 'yekuwilfred@gmail.com',
  links: {
    github: 'https://github.com/mecca1991',
    linkedin: 'https://www.linkedin.com/in/wilfred-chetat/',
    // Served from S3 so it can change without a deploy: `npm run cv:upload`
    cv: 'https://wilfredchetat-public.s3.us-east-1.amazonaws.com/Wilfred_Chetat_CV.pdf',
  },

  glance: [
    { term: 'Currently', detail: 'Senior Backend Engineer, UXE Security Solutions, since Sep 2024' },
    { term: 'Experience', detail: '7+ years across payments, data systems, video analytics and AI' },
    { term: 'Work type', detail: 'Employed roles and freelance client projects' },
    { term: 'Languages', detail: 'English, French' },
  ],

  experience: [
    {
      company: 'UXE Security Solutions',
      dates: 'Sep 2024 – present',
      role: 'Senior Backend Engineer · video analytics services',
    },
    { company: 'Alphathesis', dates: 'Aug 2023 – Aug 2024', role: 'Contract Software Engineer · LeaseSurance backend' },
    { company: 'PaySika', dates: 'Nov 2021 – Jun 2023', role: 'Founding Backend Engineer · wallets and payments' },
    {
      company: 'Upwork and independent work',
      dates: 'Feb 2020 – Oct 2021',
      role: 'Analytics, integrations and data pipelines',
    },
    { company: 'Muluh Kitchen', dates: 'Mar 2019 – Feb 2020', role: 'Full Stack Developer · food-ordering APIs' },
  ],

  stack: [
    {
      area: 'Backend and integration',
      tools: 'Python, FastAPI, Flask, PostgreSQL, SQLAlchemy, webhooks, third-party APIs',
    },
    { area: 'Events and performance', tools: 'Kafka, Redis, gRPC, Protocol Buffers' },
    { area: 'Applied AI', tools: 'LLM integration, speech processing, embeddings, Qdrant, PyTorch and ONNX serving' },
    {
      area: 'Product and delivery',
      tools: 'React, Next.js, TypeScript, AWS, Docker, Kubernetes, CI/CD, Prometheus, Grafana',
    },
    { area: 'Data and analytics', tools: 'Apache Superset, Airflow, S3 and Parquet, SQL' },
  ],

  writing: [
    {
      meta: 'Article · Algorythm · April 2026',
      title: 'Reverse image search, explained',
      description:
        'How embeddings and a vector database find visually similar images, with a FastAPI, Qdrant and InsightFace demo.',
      links: [
        { label: 'Read the article', href: 'https://news.algorythm.org/p/reverse-image-search-explained-how' },
        { label: 'View code', href: 'https://github.com/mecca1991/Image-Search-Qdrant' },
      ],
    },
    {
      meta: 'Tutorials · Numerica Ideas',
      title: 'Python on AWS Lambda, and Apache Superset with Docker Compose',
      links: [{ label: 'Read on Numerica Ideas', href: 'https://numericaideas.com/blog/author/wilfredchetat/' }],
    },
  ],
} as const;
