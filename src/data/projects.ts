import type { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'weatherise',
    title: 'Weatherise',
    category: 'Competition',
    period: 'June 2, 2026 – June 12, 2026',
    role: 'Project Lead & AI Developer',
    summary: 'Weatherise is a domain-aware multi-agent AI system that turns forecasts from seven weather sources into clear go / no-go decisions for tourism, construction, and agriculture in Da Nang. Ask in plain English or Vietnamese — specialized agents gather the missing context, weigh a fused multi-source forecast against real safety rules, and return a plan you can act on, with the evidence behind every call.',
    problem: 'A forecast is not a decision. Weather apps say "gusts 62 km/h" and stop — whether a crane must halt, concrete can be poured, or urea will wash off depends on domain rules no forecast applies. Global models put a mountain and a beach in one 9–13 km grid cell, most tools trust a single weather API, and general-purpose LLMs fill the gaps with confident guesses. In Central Vietnam, 15–40% of tour bookings are cancelled or postponed when the forecast misses.',
    process: [
      {
        date: 'June 2, 2026',
        title: 'Multi-Agent System Architecture',
        description: 'Designed multi-agent decision system architecture across 3 domains (Tourism, Construction & Agriculture) using LangGraph, NeMo Agent Toolkit, Pydantic v2, and NeMo Guardrails.',
        image: '/assets/images/weatherise/sys_arch.webp'
      },
      {
        date: 'June 5, 2026',
        title: 'Live External API MCP Server',
        description: 'Engineered a unified MCP Server gateway consolidating 7+ live external APIs into a single tool-call interface using Python, FastAPI, and Redis 7, cutting integration complexity by ~60%.',
        image: '/assets/images/weatherise/team.webp'
      },
      {
        date: 'June 9, 2026',
        title: 'RAG Knowledge Layer on H200 GPU Cluster',
        description: 'Built and seeded a 4-collection RAG Knowledge Layer ingesting 500+ domain records with ~2s retrieval using nv-embedqa-e5-v5 NIM, Qdrant, and PostgreSQL 16 on an 8x NVIDIA H200 GPU cluster.',
        image: '/assets/images/weatherise/ui_2.webp'
      },
      {
        date: 'June 12, 2026',
        title: 'Hackathon Final Pitch',
        description: 'Presented Weatherise at the Vietnam AI Open Hackathon (NVIDIA/Viettel/Sovico), securing a spot in the Top 10 Finalists.',
        image: '/assets/images/weatherise/team_2.webp'
      }
    ],
    techStack: ['LangGraph', 'NeMo Agent Toolkit', 'NVIDIA NIM', 'MCP', 'FastAPI', 'Redis', 'Qdrant', 'PostgreSQL', 'NeMo Guardrails', 'Next.js'],
    outcomes: [
      'Led a 4-person team to a Top 10 finish with a multi-agent weather decision system for Tourism, Construction & Agriculture, matching domain experts on 91% of go/no-go calls (120 scenarios) at 4.8s median latency (1,247 runs) on 8× NVIDIA H200, using LangGraph, NeMo Agent Toolkit, and NVIDIA NIM.',
      'Cut forecast error by 12% MAE vs. the best single source (22% vs. raw GFS, 180 days) by fusing 7 live weather APIs through a 10-tool MCP Server with bias correction, outlier rejection, and an LLM arbiter, using FastAPI and Redis 7.',
      'Achieved 0 unsafe go-calls across 212 red-team prompts (94% blocked at input, the rest vetoed by a deterministic rule engine) and 87.2% context recovery via a 4-collection RAG layer (~2,000 records) behind NeMo Guardrails, using nv-embedqa-e5-v5, Qdrant, and PostgreSQL 16.'
    ],
    images: [
      '/assets/images/weatherise/video_poster.webp',
      '/assets/images/weatherise/home.webp',
      '/assets/images/weatherise/cover.webp',
      '/assets/images/weatherise/sys_arch.webp',
      '/assets/images/weatherise/ui_2.webp',
      '/assets/images/weatherise/team.webp',
      '/assets/images/weatherise/team_2.webp',
      '/assets/images/weatherise/travel.webp',
      '/assets/images/weatherise/log.webp'
    ],
    hoverMedia: {
      type: 'video',
      src: '/assets/videos/weatherise_trailer.mp4',
      webmSrc: '/assets/videos/weatherise_trailer.webm',
      poster: '/assets/images/weatherise/video_poster.webp',
      objectFit: 'contain',
      background: '#f6fafd'
    },
    githubUrl: 'https://github.com/BennedictQuanTon/Weatherise_Vietnam-AI-Open-Hackathon-2026',
    status: 'active',
    competitionName: 'Vietnam AI Open Hackathon 2026',
    organizer: 'NVIDIA / Viettel / Sovico',
    organizerLogo: '/assets/images/companies/weatherise_org.webp',
    organizerLogos: [
      '/assets/images/companies/nvidia_logo.webp',
      '/assets/images/companies/viettel_logo.svg',
      '/assets/images/companies/sovico_logo.webp'
    ],
    achievement: {
      label: 'Top 10 Finalist',
      tone: 'gold'
    },
    certificate: {
      image: '/assets/images/certificates/hackathons/vietnam_ai_open_hackathon.webp',
      title: 'Certificate of Attendance — Vietnam AI Open Hackathon',
      issuer: 'Open Hackathons · OpenACC'
    },
    posters: [
      '/assets/images/weatherise/poster_horizontal.webp',
      '/assets/images/weatherise/poster_vertical.webp'
    ]
  },
  {
    id: 'the-lantern',
    title: 'The Lantern',
    category: 'Competition',
    period: 'Sep 8, 2026 – Sep 30, 2026',
    role: 'Project Lead & AI Engineer',
    summary: 'The Lantern is a multilingual AI maître d\' that takes a full table\'s order by voice, remembers every word, never invents a dish, and keeps the kitchen in sync. Guests speak to a table device; AssemblyAI streams the transcript, a local Qwen3 4B model interprets each sentence into a single schema-enforced intent, deterministic code validates every change against the live menu, and a local Kokoro voice answers in the guest\'s language. Staff see placed orders, floor status, and every guest turn live on a management dashboard and kitchen display.',
    problem: 'Real restaurant ordering is a multi-turn conversation full of references ("those two", "make it a seabass instead", "that\'s all"). Small local models are cheap and private but lose that thread: with a local LLM choosing its own tools, a six-turn order was completed correctly 0 times in 12 — dishes claimed but never added, wrong items swapped, orders cancelled when the guest asked to place them. Cloud voice bots, meanwhile, add 19–86s per-turn latency, high token/TTS costs, and send dining-table audio to the cloud.',
    process: [
      {
        date: 'Sep 8 – 13, 2026',
        title: 'V1 Voice Waiter & Real-Time Pipeline',
        description: 'Scaffolded the FastAPI + WebSocket realtime pipeline with AssemblyAI streaming, silence endpointing, spoken acknowledgement fillers, and the first guest-facing dining UI on a tool-calling LLM waiter.',
        image: '/assets/images/lantern/dining.webp'
      },
      {
        date: 'Sep 16 – 20, 2026',
        title: 'Moving to Local AI & Measuring the Gap',
        description: 'Moved the waiter onto local Ollama models via LangChain and built same-machine A/B benchmarks — which showed the tool-calling design completing the six-turn order 0 / 12 times.'
      },
      {
        date: 'Sep 23 – 25, 2026',
        title: 'V2 Architecture: The Model Interprets, Code Decides',
        description: 'Re-architected the system so Qwen3 4B returns one JSON-schema-constrained intent per turn while a deterministic resolver handles references, modifiers, allergens and sold-out items, with dialogue memory persisted as immutable SQLite revisions — lifting order accuracy to 10 / 10.',
        image: '/assets/images/lantern/management.webp'
      },
      {
        date: 'Sep 25 – 30, 2026',
        title: 'Kitchen Loop, Benchmarks & Final Pitch',
        description: 'Shipped the Management dashboard (floor map, 86\'d stock, Kitchen Display System) and per-turn Logs view, validated results across RTX 3060, RTX 5060 and MacBook, and delivered the pitch deck and demo video.',
        image: '/assets/images/lantern/benchmarks.webp'
      }
    ],
    techStack: ['AssemblyAI', 'Qwen3 4B', 'Ollama', 'Kokoro TTS', 'FastAPI', 'WebSockets', 'SQLite', 'TypeScript', 'Pydantic', 'Vite', 'Web Audio API'],
    outcomes: [
      'Led a 5-person team to build a real-time, multilingual AI waiter that runs a full table\'s service (recommendations, orders, sold-out swaps, allergy checks, live kitchen sync) at <$1 per 1,000 orders, using AssemblyAI, Qwen3 4B (Ollama), Kokoro-82M, and FastAPI.',
      'Raised six-turn order accuracy from 0/12 to 10/10 by architecting a “model interprets, code decides” pipeline with schema-constrained intents and a deterministic resolver, keeping prompts flat at ~1.46k tokens over 50 turns via SQLite dialogue state.',
      'Cut LLM latency by 36.5% (p50 2.1s → 1.3s) and raised voice-session completion from 2/5 to 5/5, eliminating dead air with ~50 ms fillers and barge-in on AssemblyAI Universal-3.5 Pro streaming over WebSockets.'
    ],
    images: [
      '/assets/images/lantern/cover.webp',
      '/assets/images/lantern/dining.webp',
      '/assets/images/lantern/management.webp',
      '/assets/images/lantern/logs.webp',
      '/assets/images/lantern/benchmarks.webp'
    ],
    hoverMedia: {
      type: 'video',
      src: '/assets/videos/lantern_teaser.mp4',
      webmSrc: '/assets/videos/lantern_teaser.webm',
      poster: '/assets/images/lantern/teaser_poster.webp',
      objectFit: 'contain',
      background: '#f6f9f8'
    },
    githubUrl: 'https://github.com/BennedictQuanTon/The-Lantern-AssemblyAI-Voice-Agent-Hackathon',
    status: 'active',
    competitionName: 'AssemblyAI Voice Agent Hackathon',
    organizer: 'AssemblyAI',
    organizerLogo: '/assets/images/companies/assemblyai_logo.webp',
    certificate: {
      image: '/assets/images/certificates/hackathons/assemblyai_voice_agent_hackathon.webp',
      title: 'Certificate of Completion — AssemblyAI Voice Agent Hackathon',
      issuer: 'Lablab.ai · NativelyAI'
    }
  },
  {
    id: 'viettel-llm-inference',
    title: 'LLM Inference Optimization Challenge',
    category: 'Competition',
    period: 'July 2, 2026 – July 30, 2026',
    role: 'AI Engineer',
    summary: 'An enterprise-grade LLM serving optimization project engineered for the Viettel AI Race 2026 competition. Competing against 300+ teams nationwide, the project focused on maximizing inference efficiency for Liquid AI\'s hybrid LFM2.5-1.2B-Instruct model (Mamba SSM + Short1D Conv + Attention) on NVIDIA H200 GPUs. By developing a custom vLLM serving pipeline with FP8 quantization, FlashInfer C++ CUDA kernels, and PagedAttention, the project achieved Peak Rank #77 / 300+ on the Leaderboard with an official Peak ERS score of 62.01.',
    problem: 'The Viettel AI Race 2026 challenge directly simulates enterprise AI infrastructure bottlenecks: serving Large Language Models (LLMs) to achieve high throughput, low latency (TTFT & TPOT), and stable accuracy (GPQA Diamond Accuracy Gate) under strict hardware constraints (1 NVIDIA H200 GPU, 3 vCPU Cores, and 8.0 GB Host RAM) across a production workload trace.',
    process: [
      {
        date: 'July 2, 2026 – July 30, 2026',
        title: 'vLLM Pipeline & FP8 Quantization',
        description: 'Deployed vLLM v0.26.0 serving engine with native FP8 weight and KV-cache quantization (fp8_e4m3), halving GPU VRAM bandwidth usage and configuring chunked prefill (mbt=768).'
      },
      {
        date: 'July 2026',
        title: 'FlashInfer & ShortConv CUDA Alignment',
        description: 'Engineered custom vLLM Docker image (:p8-shortconv) with fused 3-op ShortConv C++ CUDA kernels (causal_conv1d_silu_fused) and PagedAttention block alignment (block-size=32).'
      },
      {
        date: 'July 30, 2026',
        title: 'National Leaderboard Peak Rank #77 / 300+',
        description: 'Achieved Peak Rank #77 nationwide in Viettel AI Race 2026 (out of 300+ competing teams), reaching an official Peak ERS score of 62.01 (+24.5% over baseline), cutting decode latency to 4ms/token (-33.3%) and TTFT p50 to 46ms.'
      }
    ],
    techStack: ['vLLM', 'CUDA', 'FP8 Quantization', 'FlashInfer', 'Mamba SSM', 'Docker', 'Python', 'NVIDIA H200'],
    outcomes: [
      'Achieved Peak Rank #77 in Viettel AI Race 2026 by boosting team ERS score by +24.5% (from 49.81 to 62.01) with 100% accuracy retention, deploying a vLLM v0.26.0 pipeline with FP8 quantization, FlashInfer SSM alignment, and chunked prefill (mbt=768).',
      'Cut token decode latency by 33.3% (from 6ms down to 4ms per token) across 420 requests by configuring native Hopper SM90 FP8 execution (fp8_e4m3) and PagedAttention block alignment (block-size=32) to halve GPU VRAM bandwidth usage.',
      'Reduced initial response latency to a project-record TTFT p50 = 46ms and cut failed requests by 28.6% (from 7 down to 5 / 420) by building a custom vLLM Docker image (:p8-shortconv) with fused 3-op ShortConv C++ CUDA kernels (causal_conv1d_silu_fused).'
    ],
    images: [
      '/assets/images/viettel-inference-opt/cover.webp',
      '/assets/images/viettel-inference-opt/card.webp',
      '/assets/images/viettel-inference-opt/cover.svg'
    ],
    hoverMedia: {
      type: 'image',
      src: '/assets/images/viettel-inference-opt/cover.webp',
      objectFit: 'contain'
    },
    githubUrl: 'https://github.com/BennedictQuanTon/Develarper_Viettel_AI_Race_2026',
    status: 'active',
    competitionName: 'Viettel AI Race 2026',
    organizer: 'Viettel',
    organizerLogo: '/assets/images/companies/viettel_logo.svg',
    organizerLogos: [
      '/assets/images/companies/viettel_logo.svg'
    ],
    achievement: {
      label: 'Peak Rank #77 / 300+',
      tone: 'emerald'
    }
  },
  {
    id: 'amd-token-agent',
    title: 'Token-Efficient Agent',
    category: 'Competition',
    period: 'July 6, 2026 – July 13, 2026',
    role: 'AI Developer',
    summary: 'Developed in one week, this project features a containerized AI Agent designed to solve complex multi-domain tasks (Math, Logic, Coding, NLP) with extreme token efficiency. It implements a custom 4-layer hybrid router to optimize the balance between local SLMs and remote models.',
    problem: 'High API token consumption and slow response latencies in LLM agents lead to prohibitive costs and poor user experience for complex reasoning and QA tasks.',
    process: [
      {
        date: 'July 6, 2026',
        title: '4-Layer Hybrid Router Setup',
        description: 'Established a 4-layer hybrid agent router cutting API token usage by 85% and limiting latency to 505.1 ms using Python and asyncio via local Qwen-3B and remote Fireworks APIs.'
      },
      {
        date: 'July 9, 2026',
        title: 'Math Reasoning Pipeline',
        description: 'Designed a math reasoning pipeline achieving 95%+ accuracy across 200+ test cases at max 768 tokens per task using Python AST parsing and Fireworks APIs (Kimi/Minimax) with regex extraction.'
      },
      {
        date: 'July 13, 2026',
        title: 'Local-First QA & Summarization Engine',
        description: 'Engineered local-first QA and summarization logic achieving 89% factual and 97% summary accuracy (100 test cases each) using Qwen-3B via llama-cpp-python with Metal GPU acceleration.'
      }
    ],
    techStack: ['Python', 'asyncio', 'Qwen-3B', 'Fireworks API', 'llama-cpp-python', 'Metal GPU', 'AST Parsing', 'Regex'],
    outcomes: [
      'Established a 4-layer hybrid agent router, cutting API token usage by 85% and limiting latency to 505.1 ms, using Python and asyncio via local Qwen-3B and remote Fireworks APIs.',
      'Designed a math reasoning pipeline achieving 95%+ accuracy (200+ test cases) at max 768 tokens per task for expressions, using Python ast parsing and Fireworks APIs (Kimi/Minimax) with regex extraction.',
      'Engineered local-first QA and summarization logic achieving 89% factual and 97% summary accuracy (100 test cases each), using Qwen-3B via llama-cpp-python with Metal GPU acceleration.'
    ],
    images: [
      '/assets/images/amd-token-agent/cover.webp'
    ],
    hoverMedia: {
      type: 'image',
      src: '/assets/images/amd-token-agent/cover.webp',
      objectFit: 'contain'
    },
    githubUrl: 'https://github.com/BennedictQuanTon/Develarper_AMD-Developer-Hackathon-ACT-II',
    status: 'active',
    competitionName: 'AMD Developer Hackathon ACT II',
    organizer: 'AMD',
    organizerLogo: '/assets/images/companies/amd_logo.webp',
    certificate: {
      image: '/assets/images/certificates/hackathons/amd_developer_hackathon_act2.webp',
      title: 'Certificate of Completion — AMD Developer Hackathon: ACT II',
      issuer: 'Lablab.ai · NativelyAI'
    }
  },
  {
    id: 'auralens',
    title: 'AuraLens',
    category: 'Competition',
    period: 'Aug 23, 2026 – Aug 28, 2026',
    role: 'Full-Stack AI Developer',
    summary: 'AuraLens is a multimodal AI stylist and lifestyle engine for Gen Z. Users snap their outfit and Gemini Vision scores it from 0 to 100 across four weighted fashion pillars, suggests upgrades from Vietnamese local brands, then plans where to go in Saigon — filtering venues by live weather and opening hours so it never recommends a closed café or an outdoor rooftop in the rain. A prompt-to-template Photobooth Studio turns the night out into shareable editorial photo strips, fully bilingual in English and Vietnamese.',
    problem: 'Gen Z faces two linked weekend questions: "Does my outfit work?" and "Where should we go that matches this vibe?". Generic AI chatbots answer the second with hallucinations — closed venues, outdated places, or open-air rooftops during tropical downpours — and nothing connects outfit feedback to real-world plans.',
    process: [
      {
        date: 'Aug 23 – 24, 2026',
        title: 'Architecture & Entity Data',
        description: 'Designed the React 19 + Express monorepo and built the grounded entity data behind it: 20 local-brand fashion items, 15 Saigon venues with indoor/outdoor flags and opening hours, and 6 photobooth frames.',
        image: '/assets/images/auralens/dashboard.webp'
      },
      {
        date: 'Aug 26 – 27, 2026',
        title: 'Gemini Vision Drip Check & Grounded Vibe Map',
        description: 'Integrated Gemini multimodal vision with a WebRTC camera to score outfits across color, silhouette, vibe and accessories via JSON structured output, and layered a deterministic weather and open-hours filter on top of Gemini Flash Lite venue recommendations.',
        image: '/assets/images/auralens/vibe_map.webp'
      },
      {
        date: 'Aug 27 – 28, 2026',
        title: 'Photobooth Studio, Testing & Cloud Run Deploy',
        description: 'Shipped the prompt-to-template Photobooth (5 aspect ratios, filters, stickers, AI-generated layouts), covered the stack with 35 Vitest tests, and containerized a single-origin build for Google Cloud Run.',
        image: '/assets/images/auralens/photobooth.webp'
      }
    ],
    techStack: ['Gemini Vision', 'Gemini Flash Lite', 'React 19', 'TypeScript', 'Express.js', 'WebRTC', 'Google Cloud Run', 'Docker', 'Vitest', 'Vite'],
    outcomes: [
      'Built a multimodal AI outfit evaluator scoring looks from 0–100 across 4 weighted pillars (color, silhouette, vibe, accessories) by integrating Gemini Vision with a real-time WebRTC camera pipeline.',
      'Eliminated hallucinated venue recommendations (closed venues, outdoor rooftops in rain) at ~2.0s latency by engineering a deterministic weather and opening-hours grounding layer over Gemini Flash Lite structured outputs.',
      'Shipped a secure React 19 + Express.js app with a prompt-to-template photobooth engine, validated by 35/35 automated tests and deployed at $0/month by proxying all Gemini calls server-side and containerizing on Google Cloud Run.'
    ],
    images: [
      '/assets/images/auralens/cover.webp',
      '/assets/images/auralens/dashboard.webp',
      '/assets/images/auralens/vibe_map.webp',
      '/assets/images/auralens/photobooth.webp'
    ],
    hoverMedia: {
      type: 'image',
      src: '/assets/images/auralens/cover.webp'
    },
    githubUrl: 'https://github.com/BennedictQuanTon/AuraLens',
    status: 'active',
    competitionName: 'AI Riser Vietnam 2026 · #BuildwithGoogleAI',
    organizer: 'Google',
    achievement: {
      label: 'Silver Tier',
      tone: 'silver'
    },
    certificate: {
      image: '/assets/images/certificates/hackathons/ai_riser_vietnam_2026.webp',
      title: 'Certificate of Completion — AI Riser Vietnam 2026',
      issuer: 'Google for Developers'
    }
  },
  {
    id: 'architecturelab',
    title: 'Executable ArchitectureLab',
    category: 'Competition',
    period: 'Sep 2, 2026 – Sep 3, 2026',
    role: 'AI Developer',
    summary: 'Executable ArchitectureLab is a WebMCP-native system-design studio where a human engineer and an AI agent work on the same live architecture model. The engineer selects a request flow; the agent inspects exactly that scope through structured WebMCP tools, runs a deterministic failure simulation, and drafts a patch — which only the human can apply.',
    problem: 'Architecture diagrams are static pictures: they cannot show which component fails first under a traffic spike or a cache outage. AI assistants make it worse when they only see screenshots — guessing scope, treating synthetic numbers as real, and risking silent changes or prompt injection from text on the page.',
    process: [
      {
        date: 'Sep 2, 2026',
        title: 'Product Spec & WebMCP Tool Surface',
        description: 'Authored the 1,300-line product spec defining the human-in-the-loop workflow, then built on a WebMCP adapter exposing 6 read-only and proposal tools — with no apply, delete or reset tool for the agent.'
      },
      {
        date: 'Sep 2 – 3, 2026',
        title: 'Studio UI & Failure Simulation',
        description: 'Built the Studio interface — interactive architecture canvas, inspector, simulation strip, proposal drawer and live activity log — visualising 10× flash-sale traffic and cache-outage scenarios with animated request flows and causal bottleneck chains.',
        image: '/assets/images/architecturelab/cover.webp'
      }
    ],
    techStack: ['WebMCP', 'React', 'TypeScript', 'Vite', 'Vitest', 'Playwright', 'Vercel'],
    outcomes: [
      'Built the human-in-the-loop studio where an AI agent inspects, simulates, and drafts architecture patches through 6 WebMCP tools while only humans can apply them, authoring the 1,300-line product spec, using React, TypeScript, and Vite.',
      'Visualized deterministic failure scenarios (10× flash-sale traffic, cache hit ratio 92% → 0%) on an interactive canvas with animated request flows and causal bottleneck chains, deployed on Vercel.'
    ],
    images: ['/assets/images/architecturelab/cover.webp'],
    hoverMedia: {
      type: 'image',
      src: '/assets/images/architecturelab/cover.webp',
      objectFit: 'contain',
      background: '#1c1f22'
    },
    githubUrl: 'https://github.com/BennedictQuanTon/ArchitectureLab---WebMCP-Challenge',
    liveUrl: 'https://architecturelab.vercel.app',
    status: 'active',
    competitionName: 'OpenAI WebMCP Challenge',
    organizer: 'OpenAI'
  },
  {
    id: 'bkai-admissions',
    title: 'BKAi — Multi-Agent Admissions Counseling System',
    category: 'Personal Project',
    period: 'Jan 2026 – Apr 2026',
    role: 'Full-Stack AI Developer',
    summary: 'BKAi is a Vietnamese admissions counselor for Ho Chi Minh City University of Technology (HCMUT), by chat and by voice. A LangGraph supervisor routes each question to Data, Policy and Counsel agents that query an 11-table fact database crawled from official hcmut.edu.vn pages and a Qdrant hybrid index; a synthesizer cites the sources, and a deterministic verifier rejects any number that is not in the evidence.',
    problem: 'Students choosing a university face 74 admission codes, 9 programs and cut-offs that change every year and by admission method. A plain RAG chatbot answers from text chunks, so it mixes up years and programs, invents numbers, and is too slow to feel like a conversation, especially by voice.',
    process: [
      {
        date: 'Jan 2026',
        title: 'Multi-Agent Counselor on a Fact Database',
        description: 'Built the Supervisor → Data / Policy / Counsel → Synthesizer → Verifier graph in LangGraph, with scores and quotas served by typed SQL tools over an 11-table fact database.',
        image: '/assets/images/bkai/v5_answer_trace.webp'
      },
      {
        date: 'Feb 2026',
        title: 'Hybrid Retrieval and Fast Path',
        description: 'Fused Vietnamese dense embeddings with BM25 sparse vectors in Qdrant, added reranking and parent–child chunking, and gave the supervisor a zero-LLM fast path with token streaming.',
        image: '/assets/images/bkai/v5_landing.webp'
      },
      {
        date: 'Apr 2026',
        title: 'Voice, Observability and Hardening',
        description: 'Shipped the AssemblyAI + Kokoro voice agent with barge-in, a live observability console and the OWASP LLM Top 10 controls.',
        image: '/assets/images/bkai/v5_monitor.webp'
      }
    ],
    techStack: [
      'LangGraph', 'MCP', 'Gemini 3.5 Flash-Lite', 'Qdrant', 'SQLite', 'Vietnamese_Embedding_v2', 'bge-reranker-base', 'BM25',
      'Redis', 'AssemblyAI', 'Kokoro TTS', 'Whisper', 'LiveKit', 'Playwright', 'FastAPI', 'Pydantic', 'WebSockets',
      'React 19', 'TypeScript', 'Vite', 'Tailwind CSS', 'Framer Motion', 'Docker', 'Caddy'
    ],
    cardStack: ['LangGraph', 'Gemini 3.5 Flash-Lite', 'Qdrant', 'SQLite', 'MCP', 'AssemblyAI', 'Kokoro TTS', 'FastAPI', 'Redis', 'React 19'],
    outcomes: [
      'Architected a LangGraph multi-agent Agentic RAG counselor (Supervisor → Data/Policy/Counsel agents → Synthesizer → deterministic Verifier), achieving 200/200 exact-match answers on numeric admission questions (Wilson 95% CI ≥ 0.98) and 8/8 real counseling cases, by routing every score and quota to typed SQL tools over an 11-table fact DB and rejecting any number absent from the evidence.',
      'Slashed cold-answer latency 15× (p50 27.3 s → 1.79 s; time-to-first-token 17.7 s → 1.11 s) at just 1.01 LLM calls per answer, by adding a zero-LLM fast path to the supervisor, WebSocket token streaming and quota-aware Gemini failover; sustained a steady-state p50 of 1.7 s across 792 logged requests.',
      'Engineered a hybrid retrieval engine that lifted Hit@1 from 0.475 to 0.828 and reached Hit@5 0.955 on 198 labeled queries, by fusing Vietnamese dense embeddings with BM25 sparse vectors through server-side RRF in Qdrant, cross-encoder reranking and hierarchical parent–child chunking with contextual headers (107 docs → 340 chunks).',
      'Shipped a real-time Vietnamese voice agent with 1.26% character error rate and a final transcript 579 ms after speech ends, by streaming AssemblyAI STT into per-clause local Kokoro TTS (first audio byte 591 ms vs 3.8 s with edge-tts, 6.5× faster) with barge-in and a LiveKit WebRTC worker.',
      'Hardened the system against the OWASP LLM Top 10 (2026), passing 60/60 guardrail probes with 0 cross-session leaks at 20 concurrent users, by building an entity-guarded answer cache (~60 ms hits), PII redaction, an in-process MCP server exposing 11 tools, and a crawl → validate pipeline over 16 official pages (67/67 cross-checks).'
    ],
    screens: [
      { src: '/assets/images/bkai/v5_landing.webp', caption: 'Landing page' },
      { src: '/assets/images/bkai/v5_answer_trace.webp', caption: 'Chat: cited answer with the agent trace' },
      { src: '/assets/images/bkai/v5_monitor.webp', caption: 'Observability: live latency, health and model usage' }
    ],
    images: [
      '/assets/images/bkai/v5_landing.webp',
      '/assets/images/bkai/v5_answer_trace.webp',
      '/assets/images/bkai/v5_monitor.webp'
    ],
    hoverMedia: {
      type: 'video',
      src: '/assets/videos/bkai_teaser.mp4',
      webmSrc: '/assets/videos/bkai_teaser.webm',
      poster: '/assets/images/bkai/teaser_poster.webp',
      objectFit: 'contain',
      background: 'linear-gradient(#f9f8fb 50%, #fdf9f8 50%)'
    },
    projectLogo: '/assets/images/bkai/bkai_lockup.webp',
    githubUrl: 'https://github.com/BennedictQuanTon/BKAi-Multi-Agent-Admissions-Counseling-System',
    status: 'active'
  },
  {
    id: 'morphysics',
    title: 'Morphysics',
    category: 'Competition',
    period: 'Mar 2026 – Present',
    role: 'Project Lead & Frontend Developer',
    summary: 'An interactive 2D physics virtual lab built with React 19 and Matter.js, featuring a 60 FPS Glassmorphism Telemetry Dashboard and multimodal AI assistant executing simulations under 3s.',
    problem: 'High school students struggle to visualize abstract physics formulas. Traditional labs are expensive or lack real-time telemetry data to explain mechanical forces dynamically.',
    process: [
      {
        date: 'March 2026',
        title: 'Interactive 2D Physics Engine',
        description: 'Architected React 19/TypeScript virtual lab integrating Matter.js to render real-time 2D physics mechanics (collisions, gravity) with drag-and-drop experiment configuration.',
        image: '/assets/images/morphysics/Experience_Morphysics_BKI_UI.webp'
      },
      {
        date: 'April 2026',
        title: 'Telemetry Dashboard & Multimodal AI',
        description: 'Engineered a 60 FPS Glassmorphism Telemetry Dashboard via requestAnimationFrame to monitor live physical properties with minimal CPU/GPU overhead. Implemented multimodal AI UI executing API simulations in <3s.',
        image: '/assets/images/morphysics/Experience_Morphysics_BKI_Team.webp'
      }
    ],
    techStack: ['React 19', 'TypeScript', 'Matter.js', 'requestAnimationFrame', 'FastAPI', 'Gemini API', 'Glassmorphism UI', 'Vite'],
    outcomes: [
      'Interactive 2D Engine: Architected a React 19/TypeScript virtual lab, integrating Matter.js to render real-time mechanics (collisions, gravity) with seamless drag-and-drop.',
      'High-Performance UI: Engineered a 60 FPS Glassmorphism Telemetry Dashboard via requestAnimationFrame to monitor live physical properties with minimal CPU/GPU overhead.',
      'AI Chatbot & Architecture: Implemented a multimodal AI UI executing API-driven simulations in <3s. Led the BKI pitch and built a modular 20-experiment library enforcing clean-code standards.'
    ],
    images: [
      '/assets/images/morphysics/Experience_Morphysics_BKI_UI.webp',
      '/assets/images/morphysics/Experience_Morphysics_BKI_Team.webp'
    ],
    hoverMedia: {
      type: 'image',
      src: '/assets/images/morphysics/Experience_Morphysics_BKI_UI.webp',
      objectFit: 'contain'
    },
    githubUrl: 'https://github.com/BennedictQuanTon/Morphysics',
    status: 'active',
    competitionName: 'Bach Khoa Innovation 2026 & VYSC 2026',
    organizer: 'HCMUT / VYSC',
    organizerLogo: '/assets/images/companies/bku_logo.webp',
    organizerLogos: [
      '/assets/images/companies/bku_logo.webp',
      '/assets/images/companies/vysc_logo.webp'
    ],
    certificate: {
      image: '/assets/images/certificates/hackathons/vysc_2026_morphysics.webp',
      title: 'Certificate — Vietnam Youth Start-up Challenge 2026',
      issuer: 'VYSC'
    }
  },
  {
    id: 'vinuni-datathon',
    title: 'Team Datdy',
    category: 'Competition',
    period: 'Apr 18, 2026 – May 11, 2026',
    role: 'Data Analyst',
    summary: 'A multidimensional e-commerce analytical project structuring a decade-long (2012–2022) transactional database across 15 CSV files with advanced EDA and business strategy.',
    problem: 'A massive simulated fashion retailer dataset was fragmented across 15 CSV files and multiple database layers (Master, Transaction, Analytical, Operational), making it hard to extract actionable patterns in promotions and inventory.',
    process: [
      {
        date: 'April 2026',
        title: 'Complex Data Processing & Structuring',
        description: 'Engineered robust data pipelines in Jupyter Notebooks utilizing Pandas and NumPy to clean and integrate a decade-long (2012–2022) e-commerce dataset across 15 CSV files.'
      },
      {
        date: 'May 2026',
        title: 'Advanced EDA & Business Strategy',
        description: 'Leveraged Matplotlib and Seaborn for EDA, transforming multidimensional data into clear visualizations to reveal key trends in inventory, promotions, and web traffic.'
      }
    ],
    techStack: ['Python', 'Pandas', 'NumPy', 'Jupyter Notebook', 'Matplotlib', 'Seaborn', 'Analytical Modeling'],
    outcomes: [
      'Complex Data Processing & Structuring: Engineered robust data pipelines in Jupyter Notebooks utilizing Pandas and NumPy to clean and integrate a decade-long (2012–2022) e-commerce dataset, efficiently navigating 15 CSV files distributed across Master, Transaction, Analytical, and Operational layers.',
      'Advanced EDA & Visualization: Leveraged Matplotlib and Seaborn for comprehensive EDA, transforming multidimensional data into clear visualizations to reveal key trends in inventory, promotions, and web traffic.',
      'Business Intelligence & Strategy: Partnered with the HCMUT team to translate technical insights into actionable operational strategies, directly solving core business challenges for a simulated fashion retailer.'
    ],
    images: ['/assets/images/datathon/Datathon_Logo.webp'],
    hoverMedia: {
      type: 'image',
      src: '/assets/images/datathon/Datathon_Logo.webp',
      objectFit: 'contain',
      objectPosition: 'center top'
    },
    status: 'active',
    competitionName: 'VinUni Datathon The GridBreakers 2026',
    organizer: 'VinUni',
    organizerLogo: '/assets/images/companies/vinuni_logo.webp'
  },
  {
    id: 'yourai',
    title: 'YourAI — AI Assistant & Academic Management Platform',
    category: 'Personal Project',
    period: 'Feb 2026 – Present',
    role: 'Full-Stack AI Developer',
    summary: 'A Monorepo PWA academic management platform with natural language DB commands (Gemini 1.5 Flash), real-time dual-scale GPA engine, and Supabase RLS security.',
    problem: 'Academic portals are often fragmented, offering no unified dashboard for GPA tracking across different international standards, and lack interactive AI capabilities to let students query academic data in plain text.',
    process: [
      {
        date: 'Feb 2026',
        title: 'Enterprise PWA Architecture',
        description: 'Architected a Monorepo academic management platform using FastAPI and React (Vite) as a PWA, achieving >90/100 Google Lighthouse score for instant load times.',
        image: '/assets/images/yourai/logo.webp'
      },
      {
        date: 'March 2026',
        title: 'AI Agent & NLP Function Calling',
        description: 'Integrated Gemini 1.5 Flash via Function Calling to translate natural language into SQL database commands with <1.2s latency, backed by Regex Fallback Parser for 99.9% system availability.'
      },
      {
        date: 'April 2026',
        title: 'Dual-Scale GPA Engine & Async Queues',
        description: 'Built a real-time GPA engine converting Vietnamese (10-point) to Australian (7-point) scales. Implemented async queues via ARQ, Redis, and Resend SMTP boosting backend concurrency by 300%.'
      }
    ],
    techStack: ['React', 'FastAPI', 'Gemini 1.5 Flash', 'Supabase', 'PostgreSQL RLS', 'Redis', 'ARQ', 'Resend SMTP', 'asyncpg', 'Vite'],
    outcomes: [
      'Enterprise PWA Architecture: Architected a Monorepo academic management platform using FastAPI and React (Vite). Optimized as a Progressive Web App (PWA), achieving a >90/100 Google Lighthouse score for instant load times and seamless cross-device installation.',
      'AI Agent & NLP Processing: Integrated Gemini 1.5 Flash via Function Calling to translate natural language into automated database commands with <1.2s latency. Engineered a Regex Fallback Parser to guarantee 99.9% system availability and 100% task success during API outages.',
      'Dual-Scale Engine & Async Queues: Built a real-time GPA engine converting Vietnamese (10-point) to Australian (7-point) scales. Implemented asynchronous queues via ARQ, Redis, and Resend SMTP for bulk email dispatching, boosting backend concurrency by 300% using asyncpg.',
      'Zero-Trust Security & Infrastructure: Enforced strict multi-tenant data isolation using Supabase PostgreSQL Row Level Security (RLS) and JWT. Developed a secure 60s OTP flow with bcrypt hashing and anti-brute force throttling on a highly optimized, zero-cost serverless stack.'
    ],
    images: [
      '/assets/images/yourai/logo.webp'
    ],
    hoverMedia: {
      type: 'image',
      src: '/assets/images/yourai/logo.webp',
      objectFit: 'contain'
    },
    githubUrl: 'https://github.com/BennedictQuanTon/YourAI',
    status: 'active'
  }
];
