import type { Milestone } from '../types';

export const milestones: Milestone[] = [
  {
    id: 'edu-uts-hcmut',
    type: 'education',
    date: '2025 – 2028 (Expected)',
    title: 'University of Technology Sydney & HCMUT',
    subtitle: 'Bachelor of Artificial Intelligence',
    gpa: '6.75 / 7.00',
    honours: ["Dean's List 2026 — UTS Faculty of Engineering & IT"],
    description: 'A rigorous joint program focused on core ML algorithms, autonomous agent development, database systems, and statistical modeling.',
    details: [
      'Joint program with rigorous academic standards across two internationally recognised universities',
      'Specialization in AI agent workflows, vector retrieval pipelines, and full-stack integration'
    ]
  },
  {
    id: 'comp-rmit-hackathon',
    type: 'competition',
    date: 'October 2026',
    title: 'RMIT GenAI & Cybersecurity Hackathon 2026',
    subtitle: 'AI Engineer · AI Protector & Unfound',
    description: 'Placed 6th at RMIT Saigon South and 18th region-wide with Team GenData, at 0.982 private macro F1 on multilingual LLM prompt-attack detection.',
    details: [
      'Fine-tuned 60+ models across 9 transformer backbones, including a 35-model mmBERT-base ensemble and a 4-bit QLoRA Granite-3.3-2B',
      'Developed Unfound, a TideCloak safe-address app for family-violence survivors with in-browser encryption and 2-of-3 quorum approval'
    ],
    highlight: '6th RMIT SGS'
  },
  {
    id: 'comp-amd-act3',
    type: 'competition',
    date: 'October 2026',
    title: 'AMD Developer Hackathon: ACT III',
    subtitle: 'AI Engineer · IGNIS',
    description: 'Built IGNIS, a maintenance-evidence desk where models propose, code computes and people approve, on the event AMD API.',
    details: [
      'Built the reviewer workspace and landing page in React 19 and TypeScript, wired to the real workflow API',
      'Produced the 2:14 demo film and a key-free replay deployment of the recorded AMD calls'
    ],
    highlight: 'AMD ACT III'
  },
  {
    id: 'comp-amd-agent',
    type: 'competition',
    date: 'July 2026',
    title: 'AMD Developer Hackathon ACT II',
    subtitle: 'AI Developer · Token-Efficient Agent',
    description: 'Established a 4-layer hybrid agent router cutting API token usage by 85% and limiting latency to 505.1 ms.',
    details: [
      'Designed math reasoning pipeline achieving 95%+ accuracy across 200+ test cases at max 768 tokens',
      'Engineered local-first QA and summarization logic achieving 89% factual and 97% summary accuracy using Qwen-3B with Metal GPU acceleration'
    ],
    highlight: 'AMD Hackathon'
  },
  {
    id: 'comp-weatherise',
    type: 'competition',
    date: 'June 2026',
    title: 'Vietnam AI Open Hackathon',
    subtitle: 'Project Lead & AI Developer · Weatherise',
    description: 'Top 10 Finalists in a nationwide AI hackathon organized by NVIDIA, Viettel, and Sovico Group.',
    details: [
      'Spearheaded the development of a containerized multi-agent AI risk prediction engine',
      'Engineered unified MCP Server gateway and 4-collection RAG Knowledge Layer on an NVIDIA 8x H200 GPU cluster'
    ],
    image: '/assets/images/weatherise/team_2.webp',
    highlight: 'Top 10 Finalist'
  },
  {
    id: 'comp-datathon',
    type: 'competition',
    date: 'April – May 2026',
    title: 'DATATHON 2026 · The Gridbreakers',
    subtitle: 'Data Analyst · Team Datdy',
    description: 'Analysed a decade (2012–2022) of data from a simulated fashion e-commerce company in VinTelligence\'s first data science competition at VinUniversity.',
    details: [
      'Cleaned and validated 14 relational CSV tables against the schema and business rules in the brief',
      'Diagnosed a 50% revenue decline (2016–2021) and turned 5 strategic charts into business recommendations'
    ],
    image: '/assets/images/datathon/waterfall.webp',
    highlight: 'Data Analyst'
  },
  {
    id: 'comp-morphysics',
    type: 'competition',
    date: 'March 2026',
    title: 'Bach Khoa Innovation 2026',
    subtitle: 'Project Lead & Frontend Developer · Morphysics',
    description: 'Reached the second round with Morphysics, a browser physics lab that turns textbook problems into interactive Matter.js simulations.',
    details: [
      'Built a 60 FPS Matter.js engine loop that bypasses React re-renders on low-spec student laptops',
      'Shipped an AI physics assistant next to 5 one-click preset experiments with live force vectors'
    ],
    image: '/assets/images/morphysics/Experience_Morphysics_BKI_Team.webp',
    highlight: 'Second Round Qualifier'
  }
];
