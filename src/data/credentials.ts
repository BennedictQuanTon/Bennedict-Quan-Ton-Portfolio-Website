const DIR = '/assets/images/certificates';

export interface Credential {
  id: string;
  title: string;
  issuer: string;
  date: string;
  image: string;
  /** Public verification page, when the issuer provides one */
  verifyUrl?: string;
}

export interface CourseProvider {
  provider: string;
  courses: (Credential & { partner?: string })[];
}

export const honour: Credential & { citation: string } = {
  id: 'uts-deans-list-2026',
  title: "Dean's List 2026",
  issuer: 'UTS Faculty of Engineering & Information Technology',
  date: '2026',
  image: `${DIR}/honors/uts_deans_list_2026.jpg`,
  citation: 'For outstanding academic achievement — a faculty initiative recognising outstanding student performance in Engineering and Information Technology.',
};

/** Specialization shown as the featured certificate, with its three course certificates */
export const specialization: Credential & { courses: Credential[] } = {
  id: 'ml-specialization',
  title: 'Machine Learning Specialization',
  issuer: 'Stanford Online · DeepLearning.AI',
  date: 'Jul 2026',
  image: `${DIR}/professional/dlai_ml_specialization.jpg`,
  verifyUrl: 'https://learn.deeplearning.ai/certificates/03cbca6d-d44e-401d-ad3e-b6baeb80591d',
  courses: [
    {
      id: 'ml-course-1',
      title: 'Supervised Machine Learning: Regression and Classification',
      issuer: 'Stanford Online · DeepLearning.AI',
      date: 'Jul 9, 2026',
      image: `${DIR}/professional/dlai_ml_course1_supervised.jpg`,
      verifyUrl: 'https://learn.deeplearning.ai/certificates/d1226257-e75b-4bc7-9162-e4bfa3adfc98',
    },
    {
      id: 'ml-course-2',
      title: 'Advanced Learning Algorithms',
      issuer: 'Stanford Online · DeepLearning.AI',
      date: 'Jul 21, 2026',
      image: `${DIR}/professional/dlai_ml_course2_advanced.jpg`,
      verifyUrl: 'https://learn.deeplearning.ai/certificates/b8064622-c741-475b-92d4-8a4613afc3b5',
    },
    {
      id: 'ml-course-3',
      title: 'Unsupervised Learning, Recommenders, Reinforcement Learning',
      issuer: 'Stanford Online · DeepLearning.AI',
      date: 'Jul 21, 2026',
      image: `${DIR}/professional/dlai_ml_course3_unsupervised.jpg`,
      verifyUrl: 'https://learn.deeplearning.ai/certificates/2684527d-b61e-401a-b52f-c84f1ae8b084',
    },
  ],
};

export const certifications: Credential[] = [
  {
    id: 'genai-llm',
    title: 'Generative AI with Large Language Models',
    issuer: 'DeepLearning.AI · AWS',
    date: 'Jun 2026',
    image: `${DIR}/professional/dlai_aws_genai_llm.jpg`,
    verifyUrl: 'https://learn.deeplearning.ai/certificates/ded895b0-23ba-4887-b9d4-68239634f73c',
  },
  {
    id: 'aws-cloud-practitioner',
    title: 'AWS Cloud Practitioner Essentials',
    issuer: 'AWS Training & Certification',
    date: 'Sep 2026',
    image: `${DIR}/professional/aws_cloud_practitioner_essentials.jpg`,
  },
  {
    id: 'anthropic-ai-fluency',
    title: 'AI Fluency: Framework & Foundations',
    issuer: 'Anthropic',
    date: '2026',
    image: `${DIR}/professional/anthropic_ai_fluency.jpg`,
  },
  {
    id: 'ibm-ai-fundamentals',
    title: 'Artificial Intelligence Fundamentals',
    issuer: 'IBM SkillsBuild',
    date: 'Jun 2026',
    image: `${DIR}/professional/ibm_ai_fundamentals.jpg`,
    verifyUrl: 'https://www.credly.com/badges/dda5f3ce-f99d-4794-acdf-b46754207567',
  },
  {
    id: 'kaggle-intermediate-ml',
    title: 'Intermediate Machine Learning',
    issuer: 'Kaggle',
    date: 'Jun 2026',
    image: `${DIR}/professional/kaggle_intermediate_ml.jpg`,
  },
  {
    id: 'kaggle-intro-ml',
    title: 'Intro to Machine Learning',
    issuer: 'Kaggle',
    date: 'Jun 2026',
    image: `${DIR}/professional/kaggle_intro_ml.jpg`,
  },
  {
    id: 'fpt-talent-assessment',
    title: 'FPT Talent Assessment',
    issuer: 'FPT Software',
    date: 'Oct 2026',
    image: `${DIR}/professional/fpt_talent_assessment.jpg`,
  },
];

export const courseProviders: CourseProvider[] = [
  {
    provider: 'DeepLearning.AI',
    courses: [
      {
        id: 'dlai-ai-agents-langgraph',
        title: 'AI Agents in LangGraph',
        issuer: 'DeepLearning.AI',
        partner: 'LangChain · Tavily',
        date: 'Jun 15, 2026',
        image: `${DIR}/courses/dlai_ai_agents_langgraph.jpg`,
      },
      {
        id: 'dlai-agentic-rag',
        title: 'Building Agentic RAG with LlamaIndex',
        issuer: 'DeepLearning.AI',
        partner: 'LlamaIndex',
        date: 'Jun 15, 2026',
        image: `${DIR}/courses/dlai_agentic_rag_llamaindex.jpg`,
      },
      {
        id: 'dlai-functions-tools-agents',
        title: 'Functions, Tools and Agents with LangChain',
        issuer: 'DeepLearning.AI',
        partner: 'LangChain',
        date: 'Jun 15, 2026',
        image: `${DIR}/courses/dlai_functions_tools_agents_langchain.jpg`,
      },
    ],
  },
  {
    provider: 'NVIDIA Deep Learning Institute',
    courses: [
      {
        id: 'nvidia-agentic-ai-explained',
        title: 'Agentic AI Explained',
        issuer: 'NVIDIA Deep Learning Institute',
        date: '2026',
        image: `${DIR}/courses/nvidia_dli_agentic_ai_explained.jpg`,
      },
    ],
  },
];
