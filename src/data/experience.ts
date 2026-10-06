import type { WorkExperience } from '../types';

export const experiences: WorkExperience[] = [
  {
    id: 'flyrank-ai-intern',
    company: 'FlyRank AI',
    companyLogo: '/assets/images/companies/flyrank_logo.svg',
    companyPhoto: undefined,
    location: 'Ho Chi Minh City, Vietnam',
    role: 'Backend AI Engineering Intern',
    type: 'Internship',
    mode: 'Remote',
    startDate: 'August 2026',
    endDate: 'Present',
    isActive: true,
    responsibilities: [
      'Reduced new-workflow onboarding time by 60% by designing a shared FastAPI and Redis layer that standardizes state, tool execution, and SQL access across LangGraph agents.',
      'Achieved 94% valid text-to-SQL generation by building LangGraph multi-agent workflows on local LLMs (Ollama), with schema grounding and AST checks before execution.',
      'Cut mean time to resolve failed agent runs by 45% by adding end-to-end request tracing and structured logging that ties every tool call to one trace ID.'
    ],
    skills: ['FastAPI', 'LangChain', 'LangGraph', 'Python', 'TypeScript', 'Ollama', 'Claude Code', 'Cursor IDE', 'Redis'],
    photos: [],
    status: 'active'
  },
  {
    id: 'hcmut-ai-research-assistant',
    company: 'Ho Chi Minh City University of Technology (HCMUT)',
    companyLogo: '/assets/images/companies/bku_logo.webp',
    companyPhoto: undefined,
    location: 'Ho Chi Minh City, Vietnam',
    role: 'AI Research Assistant',
    type: 'Part-time',
    mode: 'On-site',
    startDate: 'August 2026',
    endDate: 'Present',
    isActive: true,
    responsibilities: [
      'Undergraduate Research Assistant at the Speech Recognition Team from AITechLab - ML4U (HCMUT), under the supervision of Dr. Nguyen Duc Dung.',
      'Conducting research on Automatic Speech Recognition (ASR), investigating underlying model mechanisms, and benchmarking TTS/STT performance for low-latency, real-time conversational agents.',
      'Exploring Small Language Models (SLMs) to optimize on-device inference, resource efficiency, and seamless speech-to-speech integration.',
      'Preprocessing audio datasets, evaluating benchmark metrics (WER, RTF, latency), and contributing to upcoming scientific publications and technical reports.'
    ],
    skills: ['Automatic Speech Recognition (ASR)', 'Small Language Models (SLMs)', 'Natural Language Processing (NLP)', 'Speech Recognition', 'TTS/STT', 'Audio Preprocessing', 'Python'],
    photos: [],
    status: 'active'
  },
  {
    id: 'globaltech-annotator',
    company: 'GlobalTech SJC VietNam',
    companyLogo: '/assets/images/companies/globaltech_logo.webp',
    companyPhoto: undefined, // placeholder
    location: 'Ho Chi Minh City, Vietnam',
    role: 'Data Annotator and Quality Control',
    type: 'Part-time',
    mode: 'Remote',
    startDate: 'May 2026',
    endDate: 'Present',
    isActive: true,
    responsibilities: [
      'Secured high-quality AI training data, as measured by a flexible weekly throughput of up to ~960 HTML files or 4 hours of .wav audio, by auditing and correcting annotations within JSON files.',
      'Guaranteed dataset integrity for AI model training, ensuring highest labeling accuracy, by executing rigorous quality control on structural text and acoustic annotations.',
      'Consistently met strict weekly page-volume targets, proving reliability and attention to detail.'
    ],
    skills: ['LabelStudio', 'HTML', 'JSON', 'Excel', 'Data Labeling', 'Quality Assurance', 'Data Annotation'],
    photos: [],
    status: 'active'
  }
];
