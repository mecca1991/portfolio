export const site = {
  name: 'Wilfred Chetat',
  email: 'yekuwilfred@gmail.com',
  links: {
    github: 'https://github.com/mecca1991',
    linkedin: 'https://www.linkedin.com/in/wilfred-chetat/',
    // Served from S3 so it can change without a deploy: `npm run cv:upload`
    cv: 'https://wilfredchetat-public.s3.us-east-1.amazonaws.com/Wilfred_Chetat_CV.pdf',
  },
  // home-page anchors; `id` matches the Header's `current` prop
  nav: [
    { id: 'work', href: '/#work', label: '/projects' },
    { id: 'stack', href: '/#stack', label: '/stack' },
    { id: 'career', href: '/#trace', label: '/career' },
    { id: 'experiments', href: '/#lab', label: '/lab' },
    { id: 'contact', href: '/#contact', label: '/contact' },
  ],
  hero: {
    badge: 'Senior Software Engineer',
    lead: 'Reliable backend systems for',
    words: ['payments.', 'data systems.', 'video analytics.', 'AI products.'],
    intro:
      'I’m Wilfred Chetat. I build APIs, integrations, payments and data systems, and products from interface to deployment.',
  },
  facts: [
    { term: 'Currently', detail: 'Senior Backend Engineer, UXE Security Solutions, since Sep 2024' },
    { term: 'Experience', detail: '7+ years across payments, data systems, video analytics and AI' },
    { term: 'Languages', detail: 'English, French' },
  ],
  projects: [
    {
      name: 'Intrvuer',
      kind: 'Personal product · Live',
      headline: 'A voice interview coach that ties practice to the role you’re preparing for.',
      body: 'Candidates add a résumé and target job, answer questions out loud, and get feedback on each answer.',
      note: { label: 'My contribution:', text: 'design, Next.js interface, FastAPI backend, speech and LLM integrations, deployment.' },
      links: [
        { label: 'Read the case study', href: '/work/intrvuer/', external: false },
        { label: 'Visit intrvuer.com', href: 'https://intrvuer.com/', external: true },
      ],
    },
    {
      name: 'Sysconnector',
      kind: 'Client project',
      headline: 'Facebook Lead Ads to Adobe Campaign, from webhook to sync status.',
      body: 'I built the lead integration end to end: webhook processing, field mapping, sync status and connection validation, plus audience-management APIs and the React screens around them.',
      note: { label: 'My role:', text: 'Full-Stack Engineer' },
      links: [
        { label: 'Read the case study', href: '/work/sysconnector/', external: false },
        { label: 'Visit app.sysconnector.com', href: 'https://app.sysconnector.com/', external: true },
      ],
    },
    {
      name: 'EduClick',
      kind: 'Engineering contribution · Public platform',
      headline: 'Opportunity ingestion for African talent.',
      body: 'I worked on the opportunity-ingestion backend, turning source listings into consistent records through per-record validation and replay-safe upserts, with an outcome for every record: created, updated or rejected.',
      note: null,
      links: [{ label: 'Browse EduClick opportunities', href: 'https://www.educlick.africa/opportunities', external: true }],
    },
  ],
  stackIntro:
    'My work spans payment and wallet systems, data ingestion and video analytics. I also build the interfaces and integrations that turn a backend into a usable product.',
  stack: [
    {
      area: 'Backend and integration',
      tools: ['Python', 'Rust', 'FastAPI', 'Flask', 'PostgreSQL', 'SQLAlchemy', 'webhooks', 'REST APIs', 'third-party APIs', 'Stripe', 'OpenAI', 'Plaid'],
    },
    { area: 'Events and performance', tools: ['Kafka', 'RabbitMQ', 'Redis', 'gRPC', 'Protocol Buffers'] },
    {
      area: 'Applied AI',
      tools: ['LLM integration', 'speech processing', 'embeddings', 'Qdrant', 'vector search', 'InsightFace', 'PyTorch', 'ONNX'],
    },
    {
      area: 'Product and delivery',
      tools: ['React', 'Next.js', 'TypeScript', 'JavaScript'],
    },
    {
      area: 'Cloud',
      tools: ['AWS', 'AWS Lambda', 'Docker', 'Docker Compose', 'Kubernetes', 'CI/CD', 'Prometheus', 'Grafana'],
    },
    { area: 'Data and analytics', tools: ['Apache Superset', 'Airflow', 'S3 and Parquet', 'SQL', 'data pipelines', 'data ingestion'] },
  ],
  // oldest first; `start` and `end` are YYYY-MM and drive the bar positions (end: null runs to today)
  experience: [
    { company: 'Muluh Kitchen', role: 'Full Stack Developer · food-ordering APIs', dates: 'Mar 2019 – Feb 2020', start: '2019-03', end: '2020-02' },
    { company: 'Upwork and independent work', role: 'Analytics, integrations and data pipelines', dates: 'Feb 2020 – Oct 2021', start: '2020-02', end: '2021-10' },
    { company: 'PaySika', role: 'Founding Backend Engineer · wallets and payments', dates: 'Nov 2021 – Jun 2023', start: '2021-11', end: '2023-06' },
    { company: 'Alphathesis', role: 'Software Engineer · lease-data workflows', dates: 'Aug 2023 – Aug 2024', start: '2023-08', end: '2024-08' },
    { company: 'UXE Security Solutions', role: 'Senior Backend Engineer · video analytics services', dates: 'Sep 2024 – present', start: '2024-09', end: null },
  ],
  writing: [
    {
      meta: 'Article · Algorythm · April 2026',
      title: 'Reverse image search, explained',
      href: 'https://news.algorythm.org/p/reverse-image-search-explained-how',
      description:
        'How embeddings and a vector database find visually similar images, with a FastAPI, Qdrant and InsightFace demo.',
    },
    {
      meta: 'Tutorials · Numerica Ideas',
      title: 'Python on AWS Lambda, and Apache Superset with Docker Compose',
      href: 'https://numericaideas.com/blog/author/wilfredchetat/',
      description: null,
    },
  ],
} as const;
