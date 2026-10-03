import type { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'the-lantern',
    title: 'The Lantern',
    category: 'Competition',
    period: 'Sep 8, 2026 – Sep 30, 2026',
    role: 'Project Lead & AI Engineer (System Architect)',
    summary: 'The Lantern is a multilingual AI maître d\' that takes a full table\'s order by voice, remembers every word, never invents a dish, and keeps the kitchen in sync. Guests speak to a table device; AssemblyAI streams the transcript, a local Qwen3 4B model interprets each sentence into a single schema-enforced intent, deterministic code validates every change against the live menu, and a local Kokoro voice answers in the guest\'s language. Staff see placed orders, floor status, and every guest turn live on a management dashboard and kitchen display.',
    problem: 'Real restaurant ordering is a multi-turn conversation full of references ("those two", "make it a seabass instead", "that\'s all"). Small local models are cheap and private but lose that thread: with a local LLM choosing its own tools, a six-turn order was completed correctly 0 times in 12 — dishes claimed but never added, wrong items swapped, orders cancelled when the guest asked to place them. Cloud voice bots, meanwhile, add 19–86s per-turn latency, high token/TTS costs, and send dining-table audio to the cloud.',
    process: [
      {
        date: 'Sep 8 – 13, 2026',
        title: 'V1 Voice Waiter & Real-Time Pipeline',
        description: 'Scaffolded the FastAPI + WebSocket realtime pipeline with AssemblyAI streaming, silence endpointing, spoken acknowledgement fillers, and the first guest-facing dining UI on a tool-calling LLM waiter.',
        image: '/assets/images/lantern/dining.png'
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
        image: '/assets/images/lantern/management.png'
      },
      {
        date: 'Sep 25 – 30, 2026',
        title: 'Kitchen Loop, Benchmarks & Final Pitch',
        description: 'Shipped the Management dashboard (floor map, 86\'d stock, Kitchen Display System) and per-turn Logs view, validated results across RTX 3060, RTX 5060 and MacBook, and delivered the pitch deck and demo video.',
        image: '/assets/images/lantern/benchmarks.png'
      }
    ],
    techStack: ['AssemblyAI', 'Qwen3 4B', 'Ollama', 'Kokoro TTS', 'FastAPI', 'WebSockets', 'SQLite', 'TypeScript', 'Pydantic', 'Vite', 'Web Audio API'],
    outcomes: [
      'Lifted six-turn order accuracy from 0 / 12 (local LLM tool-calling) to 10 / 10 by re-architecting into "the model interprets, code decides": one schema-enforced Qwen3 4B intent per turn plus a deterministic resolver and validator for references, modifiers and allergens — reproduced 5 / 5 on RTX 5060 and MacBook.',
      'Held the prompt flat at ~1.46k of a 4,096-token window from turn 1 through turn 50 by moving dialogue memory into SQLite (WAL) revisions; orders survive a mid-session page reload (3 / 3).',
      'Raised full voice-pipeline completion from 2 / 5 to 5 / 5 sessions with 30 / 30 correct transcripts, cutting Qwen time after final transcript (p50) from 2,111 ms to 1,341 ms and first reply audio (p50) from 1,959 ms to 1,752 ms, with ~50 ms filler clips removing dead air.',
      'Integrated AssemblyAI Universal-3.5 Pro streaming with 54 menu keyterms, tuned turn detection and barge-in, alongside local Kokoro-82M TTS — keeping speech recognition as the only cloud cost.',
      'Backed the system with 50 automated tests and GitHub Actions CI covering the six-turn scenario, stale references, reload recovery and kitchen-to-guest delivery.'
    ],
    images: [
      '/assets/images/lantern/cover.png',
      '/assets/images/lantern/dining.png',
      '/assets/images/lantern/management.png',
      '/assets/images/lantern/logs.png',
      '/assets/images/lantern/benchmarks.png'
    ],
    hoverMedia: {
      type: 'video',
      src: '/assets/videos/lantern_preview.mp4',
      webmSrc: '/assets/videos/lantern_preview.webm',
      poster: '/assets/images/lantern/video_poster.jpg',
      objectFit: 'contain',
      background: '#eef5f4'
    },
    githubUrl: 'https://github.com/BennedictQuanTon/The-Lantern-AssemblyAI-Voice-Agent-Hackathon',
    status: 'active',
    competitionName: 'AssemblyAI Voice Agent Hackathon',
    organizer: 'AssemblyAI'
  },
  {
    id: 'weatherise',
    title: 'Weatherise',
    category: 'Competition',
    period: 'June 2, 2026 – June 12, 2026',
    role: 'Project Lead & AI Developer',
    summary: 'Weatherise is an enterprise-focused multi-agent AI system that helps organizations analyze, predict, and act on weather-related risks in their specific domain. Each domain, such as tourism, construction, and agriculture, is handled by specialized agents that understand the context, gather the right information, evaluate weather impact, and generate practical recommendations for better decision-making.',
    problem: 'Sectors like agriculture, construction, and tourism suffer huge financial losses due to unpredictable weather risks. Traditional systems do not translate raw meteorological data into sector-specific, actionable operational decisions.',
    process: [
      {
        date: 'June 2, 2026',
        title: 'Multi-Agent System Architecture',
        description: 'Designed multi-agent decision system architecture across 3 domains (Tourism, Construction & Agriculture) using LangGraph, NeMo Agent Toolkit, Pydantic v2, and NeMo Guardrails.',
        image: '/assets/images/weatherise/sys_arch.jpg'
      },
      {
        date: 'June 5, 2026',
        title: 'Live External API MCP Server',
        description: 'Engineered a unified MCP Server gateway consolidating 7+ live external APIs into a single tool-call interface using Python, FastAPI, and Redis 7, cutting integration complexity by ~60%.',
        image: '/assets/images/weatherise/team.jpg'
      },
      {
        date: 'June 9, 2026',
        title: 'RAG Knowledge Layer on H200 GPU Cluster',
        description: 'Built and seeded a 4-collection RAG Knowledge Layer ingesting 500+ domain records with ~2s retrieval using nv-embedqa-e5-v5 NIM, Qdrant, and PostgreSQL 16 on an 8x NVIDIA H200 GPU cluster.',
        image: '/assets/images/weatherise/ui_2.jpg'
      },
      {
        date: 'June 12, 2026',
        title: 'Hackathon Final Pitch',
        description: 'Presented Weatherise at the Vietnam AI Open Hackathon (NVIDIA/Viettel/Sovico), securing a spot in the Top 10 Finalists.',
        image: '/assets/images/weatherise/team_2.jpg'
      }
    ],
    techStack: ['LangGraph', 'NeMo Toolkit', 'NVIDIA NIM', 'FastAPI', 'Python', 'Redis', 'Qdrant', 'PostgreSQL', 'NeMo Guardrails', 'MCP'],
    outcomes: [
      'Advanced to Top 10 Finalists in the prestigious Vietnam AI Open Hackathon (NVIDIA/Viettel/Sovico).',
      'Engineered a unified MCP Server gateway consolidating 7+ live external APIs into a single tool-call interface, cutting integration complexity by ~60%.',
      'Built a 4-collection RAG Knowledge Layer ingesting 500+ domain records with ~2s retrieval to ground every NIM reasoning call, optimized on an 8x NVIDIA H200 GPU cluster.'
    ],
    images: [
      '/assets/images/weatherise/dashboard.jpg',
      '/assets/images/weatherise/cover.png',
      '/assets/images/weatherise/sys_arch.jpg',
      '/assets/images/weatherise/ui_2.jpg',
      '/assets/images/weatherise/team.jpg',
      '/assets/images/weatherise/team_2.jpg',
      '/assets/images/weatherise/travel.jpg',
      '/assets/images/weatherise/log.jpg'
    ],
    hoverMedia: {
      type: 'image',
      src: '/assets/images/weatherise/dashboard.jpg',
      objectPosition: 'left top'
    },
    githubUrl: 'https://github.com/BennedictQuanTon/Weatherise_Vietnam-AI-Open-Hackathon-2026',
    status: 'active',
    competitionName: 'Vietnam AI Open Hackathon',
    organizer: 'NVIDIA / Viettel / Sovico',
    organizerLogo: '/assets/images/companies/weatherise_org.jpg',
    organizerLogos: [
      '/assets/images/companies/nvidia_logo.png',
      '/assets/images/companies/viettel_logo.svg',
      '/assets/images/companies/sovico_logo.png'
    ]
  },
  {
    id: 'viettel-llm-inference',
    title: 'LLM Inference Optimization Challenge',
    category: 'Competition',
    period: 'July 2, 2026 – July 30, 2026',
    role: 'LLM Serving & Infrastructure Engineer',
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
      'Achieved Peak Rank #77 / 300+ Teams in Viettel AI Race 2026 by boosting team official ERS score to 62.01 (+24.5% improvement) with 100% accuracy retention, deploying a vLLM v0.26.0 pipeline with FP8 quantization, FlashInfer SSM alignment, and chunked prefill (mbt=768).',
      'Cut token decode latency by 33.3% (from 6ms down to 4ms per token) across 420 requests by configuring native Hopper SM90 FP8 execution (fp8_e4m3) and PagedAttention block alignment (block-size=32) to halve GPU VRAM bandwidth usage.',
      'Reduced initial response latency to a project-record TTFT p50 = 46ms and cut failed requests by 28.6% (from 7 down to 5 / 420) by building a custom vLLM Docker image (:p8-shortconv) with fused 3-op ShortConv C++ CUDA kernels (causal_conv1d_silu_fused).'
    ],
    images: [
      '/assets/images/viettel-inference-opt/cover.jpg',
      '/assets/images/viettel-inference-opt/card.png',
      '/assets/images/viettel-inference-opt/cover.svg'
    ],
    hoverMedia: {
      type: 'image',
      src: '/assets/images/viettel-inference-opt/cover.jpg',
      objectFit: 'contain'
    },
    githubUrl: 'https://github.com/BennedictQuanTon/Develarper_Viettel_AI_Race_2026',
    status: 'active',
    competitionName: 'Viettel AI Race 2026',
    organizer: 'Viettel',
    organizerLogo: '/assets/images/companies/viettel_logo.svg',
    organizerLogos: [
      '/assets/images/companies/viettel_logo.svg'
    ]
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
      'Established a 4-layer hybrid agent router cutting API token usage by 85% and limiting latency to 505.1 ms.',
      'Designed a math reasoning pipeline achieving 95%+ accuracy across 200+ test cases at max 768 tokens per task.',
      'Engineered local-first QA and summarization logic achieving 89% factual and 97% summary accuracy using Qwen-3B via llama-cpp-python with Metal GPU acceleration.'
    ],
    images: [
      '/assets/images/amd-token-agent/cover.png'
    ],
    hoverMedia: {
      type: 'image',
      src: '/assets/images/amd-token-agent/cover.png',
      objectFit: 'contain'
    },
    githubUrl: 'https://github.com/BennedictQuanTon/Develarper_AMD-Developer-Hackathon-ACT-II',
    status: 'active',
    competitionName: 'AMD Developer Hackathon ACT II',
    organizer: 'AMD',
    organizerLogo: '/assets/images/companies/amd_logo.png'
  },
  {
    id: 'auralens',
    title: 'AuraLens',
    category: 'Competition',
    period: 'Aug 23, 2026 – Aug 28, 2026',
    role: 'Solo Full-Stack AI Developer',
    summary: 'AuraLens is a multimodal AI stylist and lifestyle engine for Gen Z. Users snap their outfit and Gemini Vision scores it from 0 to 100 across four weighted fashion pillars, suggests upgrades from Vietnamese local brands, then plans where to go in Saigon — filtering venues by live weather and opening hours so it never recommends a closed café or an outdoor rooftop in the rain. A prompt-to-template Photobooth Studio turns the night out into shareable editorial photo strips, fully bilingual in English and Vietnamese.',
    problem: 'Gen Z faces two linked weekend questions: "Does my outfit work?" and "Where should we go that matches this vibe?". Generic AI chatbots answer the second with hallucinations — closed venues, outdated places, or open-air rooftops during tropical downpours — and nothing connects outfit feedback to real-world plans.',
    process: [
      {
        date: 'Aug 23 – 24, 2026',
        title: 'Architecture & Entity Data',
        description: 'Designed the React 19 + Express monorepo and built the grounded entity data behind it: 20 local-brand fashion items, 15 Saigon venues with indoor/outdoor flags and opening hours, and 6 photobooth frames.',
        image: '/assets/images/auralens/dashboard.jpg'
      },
      {
        date: 'Aug 26 – 27, 2026',
        title: 'Gemini Vision Drip Check & Grounded Vibe Map',
        description: 'Integrated Gemini multimodal vision with a WebRTC camera to score outfits across color, silhouette, vibe and accessories via JSON structured output, and layered a deterministic weather and open-hours filter on top of Gemini Flash Lite venue recommendations.',
        image: '/assets/images/auralens/vibe_map.jpg'
      },
      {
        date: 'Aug 27 – 28, 2026',
        title: 'Photobooth Studio, Testing & Cloud Run Deploy',
        description: 'Shipped the prompt-to-template Photobooth (5 aspect ratios, filters, stickers, AI-generated layouts), covered the stack with 35 Vitest tests, and containerized a single-origin build for Google Cloud Run.',
        image: '/assets/images/auralens/photobooth.jpg'
      }
    ],
    techStack: ['Gemini Vision', 'Gemini Flash Lite', 'React 19', 'TypeScript', 'Express.js', 'WebRTC', 'Google Cloud Run', 'Docker', 'Vitest', 'Vite'],
    outcomes: [
      'Built a multimodal outfit evaluator scoring looks from 0 to 100 across 4 weighted pillars (color 35%, silhouette 30%, vibe 20%, accessories 15%) by integrating Gemini Vision with a real-time WebRTC camera pipeline.',
      'Eliminated hallucinated venue recommendations (closed venues, outdoor rooftops in rain) at ~2.0s response latency by engineering a deterministic weather and opening-hours grounding layer over Gemini Flash Lite structured outputs.',
      'Shipped a secure full-stack app with a prompt-to-template Photobooth engine, validated by 35/35 automated tests and deployed at $0/month by proxying every Gemini call through an Express backend and containerizing on Google Cloud Run.'
    ],
    images: [
      '/assets/images/auralens/cover.jpg',
      '/assets/images/auralens/dashboard.jpg',
      '/assets/images/auralens/vibe_map.jpg',
      '/assets/images/auralens/photobooth.jpg'
    ],
    hoverMedia: {
      type: 'image',
      src: '/assets/images/auralens/cover.jpg'
    },
    githubUrl: 'https://github.com/BennedictQuanTon/AuraLens',
    status: 'active',
    competitionName: 'AI Riser Vietnam 2026 · #BuildwithGoogleAI',
    organizer: 'Google'
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
        image: '/assets/images/architecturelab/cover.jpg'
      }
    ],
    techStack: ['WebMCP', 'React', 'TypeScript', 'Vite', 'Vitest', 'Playwright', 'Vercel'],
    outcomes: [
      'Built the human-in-the-loop Studio where an AI agent inspects, simulates and drafts architecture patches through 6 structured WebMCP tools while only humans can apply them, authoring the 1,300-line product spec.',
      'Visualised deterministic failure scenarios (10× flash-sale traffic, cache hit ratio 92% → 0%) on an interactive canvas with animated request flows, causal bottleneck chains and before/after patch diffs.',
      'Shipped with the team on a safety-first stack: scope-bound tools revoked when selection changes, revision-locked proposals, a seeded prompt-injection test, 31 guardrail tests and 23 live Chrome checks.'
    ],
    images: ['/assets/images/architecturelab/cover.jpg'],
    hoverMedia: {
      type: 'image',
      src: '/assets/images/architecturelab/cover.jpg',
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
    title: 'BKAi Admissions System',
    category: 'Personal Project',
    period: 'Jan 2026 – Apr 2026',
    role: 'Full-Stack AI Developer',
    summary: 'BKAi is an admissions counseling AI for Ho Chi Minh City University of Technology (HCMUT / ĐHQG-HCM). It layers a counselor policy (clarify → retrieve → advise) on top of an Agentic RAG backbone so answers stay grounded in official CSV/Markdown knowledge—not free-form LLM guesses—while supporting multi-turn chat, voice, and an owner evaluation loop.',
    problem: 'University admission offices are flooded with repetitive queries. Standard AI chatbots suffer from hallucinations on complex guidelines and lack low-latency semantic caching and natural Vietnamese voice interfaces.',
    process: [
      {
        date: 'Jan 2026',
        title: 'Multi-Hop Agentic RAG Workflows',
        description: 'Raised grounded accuracy to ~87% end-to-end on an internal 120-item golden set by shipping multi-hop Agentic RAG with LangGraph, Gemini 3.1 Flash-Lite, hybrid retrieval (ChromaDB + BM25 + BGE reranker), and Pydantic validation.',
        image: '/assets/images/bkai/chat_ui.png'
      },
      {
        date: 'Feb 2026',
        title: 'Redis Semantic Cache Optimization',
        description: 'Cut repeat-query latency by ~99% from ~6.1s cold pipeline to ~0.04-0.05s cache hits using Redis semantic cache (cosine >= 0.92, 30d TTL) with MiniLM embeddings.',
        image: '/assets/images/bkai/dashboard_monitoring.png'
      },
      {
        date: 'March 2026',
        title: 'Vietnamese Voice & Docker Privacy',
        description: 'Delivered multi-turn counseling and Vietnamese voice at ~94% coreference success using LiveKit + Deepgram speech recognition and edge-tts synthesis, keeping ~115 documents (~150 semantic chunks) inside Docker volumes on-prem.',
        image: '/assets/images/bkai/chat_response.png'
      }
    ],
    techStack: ['LangGraph', 'Gemini 3.1', 'ChromaDB', 'BM25', 'BGE Reranker', 'Redis', 'LiveKit', 'Deepgram', 'Edge-TTS', 'Docker', 'FastAPI'],
    outcomes: [
      'Raised grounded accuracy to ~87% end-to-end on internal 120-item golden set via multi-hop Agentic RAG with LangGraph, Gemini 3.1 Flash-Lite, ChromaDB + BM25 + BGE reranker.',
      'Cut repeat-query latency by ~99% from ~6.1s avg cold pipeline to ~0.04-0.05s cache hits via Redis semantic cache (cosine >= 0.92, 30d TTL) with MiniLM embeddings.',
      'Delivered multi-turn counseling & Vietnamese voice at ~94% coreference success using LiveKit + Deepgram & edge-tts neural synthesis.',
      'Secured data privacy by locally hosting ~115 source documents inside Docker volumes with zero third-party document egress.'
    ],
    images: [
      '/assets/images/bkai/logo.png',
      '/assets/images/bkai/cover.jpg',
      '/assets/images/bkai/chat_ui.png',
      '/assets/images/bkai/chat_response.png',
      '/assets/images/bkai/dashboard_monitoring.png',
      '/assets/images/bkai/voice_ui.png'
    ],
    hoverMedia: {
      type: 'image',
      src: '/assets/images/bkai/logo.png',
      objectFit: 'contain'
    },
    githubUrl: 'https://github.com/BennedictQuanTon/BKAi-Multi-Agent-Admissions-Counseling-System',
    status: 'active'
  },
  {
    id: 'morphysics',
    title: 'Morphysics',
    category: 'Competition',
    period: 'Mar 2026 – July 15, 2026',
    role: 'Project Lead & Frontend Developer',
    summary: 'An interactive 2D physics virtual lab built with React 19 and Matter.js, featuring a 60 FPS Glassmorphism Telemetry Dashboard and multimodal AI assistant executing simulations under 3s.',
    problem: 'High school students struggle to visualize abstract physics formulas. Traditional labs are expensive or lack real-time telemetry data to explain mechanical forces dynamically.',
    process: [
      {
        date: 'March 2026',
        title: 'Interactive 2D Physics Engine',
        description: 'Architected React 19/TypeScript virtual lab integrating Matter.js to render real-time 2D physics mechanics (collisions, gravity) with drag-and-drop experiment configuration.',
        image: '/assets/images/morphysics/Experience_Morphysics_BKI_UI.jpg'
      },
      {
        date: 'April 2026',
        title: 'Telemetry Dashboard & Multimodal AI',
        description: 'Engineered a 60 FPS Glassmorphism Telemetry Dashboard via requestAnimationFrame to monitor live physical properties with minimal CPU/GPU overhead. Implemented multimodal AI UI executing API simulations in <3s.',
        image: '/assets/images/morphysics/Experience_Morphysics_BKI_Team.jpg'
      }
    ],
    techStack: ['React 19', 'TypeScript', 'Matter.js', 'requestAnimationFrame', 'FastAPI', 'Gemini API', 'Glassmorphism UI', 'Vite'],
    outcomes: [
      'Architected a React 19/TypeScript virtual lab integrating Matter.js to render real-time mechanics with drag-and-drop.',
      'Engineered a 60 FPS Glassmorphism Telemetry Dashboard via requestAnimationFrame to monitor live physical properties with minimal CPU/GPU overhead.',
      'Implemented multimodal AI UI executing API-driven simulations in <3s, leading BKI pitch and building a modular 20-experiment library.'
    ],
    images: [
      '/assets/images/morphysics/Experience_Morphysics_BKI_UI.jpg',
      '/assets/images/morphysics/Experience_Morphysics_BKI_Team.jpg'
    ],
    hoverMedia: {
      type: 'image',
      src: '/assets/images/morphysics/Experience_Morphysics_BKI_UI.jpg',
      objectFit: 'contain'
    },
    githubUrl: 'https://github.com/BennedictQuanTon/Morphysics',
    status: 'active',
    competitionName: 'Bach Khoa Innovation 2026 & VYSC 2026',
    organizer: 'HCMUT / VYSC',
    organizerLogo: '/assets/images/companies/bku_logo.png',
    organizerLogos: [
      '/assets/images/companies/bku_logo.png',
      '/assets/images/companies/vysc_logo.jpeg'
    ]
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
      'Engineered data pipelines in Jupyter Notebooks using Pandas/NumPy to clean and integrate a decade-long (2012–2022) e-commerce dataset across 15 CSV files in Master, Transaction, Analytical, and Operational layers.',
      'Leveraged Matplotlib & Seaborn for comprehensive EDA, transforming multidimensional data into clear visualizations revealing inventory & web traffic trends.',
      'Partnered with HCMUT team to translate technical insights into actionable operational strategies, directly solving core business challenges for a fashion retailer.'
    ],
    images: ['/assets/images/datathon/Datathon_Logo.jpg'],
    hoverMedia: {
      type: 'image',
      src: '/assets/images/datathon/Datathon_Logo.jpg',
      objectFit: 'contain',
      objectPosition: 'center top'
    },
    status: 'active',
    competitionName: 'VinUni Datathon 2026',
    organizer: 'VinUni',
    organizerLogo: '/assets/images/companies/vinuni_logo.png'
  },
  {
    id: 'yourai',
    title: 'YourAI',
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
        image: '/assets/images/yourai/logo.jpg'
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
      'Architected Monorepo academic platform using FastAPI and React (Vite) achieving >90/100 Google Lighthouse score.',
      'Integrated Gemini 1.5 Flash via Function Calling translating natural language into DB commands with <1.2s latency and 99.9% availability via Regex Fallback Parser.',
      'Built dual-scale GPA engine (VN 10-point to AU 7-point) and async email queues via ARQ/Redis/Resend SMTP boosting concurrency by 300%.',
      'Enforced zero-trust security via Supabase PostgreSQL Row Level Security (RLS) and secure 60s OTP flow with bcrypt hashing.'
    ],
    images: [
      '/assets/images/yourai/logo.jpg'
    ],
    hoverMedia: {
      type: 'image',
      src: '/assets/images/yourai/logo.jpg',
      objectFit: 'contain'
    },
    githubUrl: 'https://github.com/BennedictQuanTon/YourAI',
    status: 'active'
  }
];
