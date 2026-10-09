export interface Testimonial {
  id: string;
  name: string;
  avatar: string;
  /** Relationship to me, e.g. "Teammate · 5 projects together" */
  relation: string;
  /** Second line under the name: job title & company, or cohort */
  detail: string;
  quote: string;
  /**
   * Only approved quotes are shown in production. Set this to true once the
   * person has written or signed off on the exact wording — drafts are still
   * visible in `npm run dev` so the layout can be previewed.
   */
  approved: boolean;
}

const DIR = '/assets/images/testimonials';

/*
 * To add an unapproved draft, write its quote as `import.meta.env.DEV ? '…' : ''`
 * with approved: false — Vite strips the text from production builds, so it is
 * only visible locally until the wording is confirmed.
 */

export const testimonials: Testimonial[] = [
  {
    id: 'khanh-tuong-huynh',
    name: 'Khanh Tuong Huynh',
    avatar: `${DIR}/khanh-tuong-huynh.jpg`,
    relation: 'Teammate · 5 projects together',
    detail: 'Bachelor of IT · UTS × HCMUT',
    quote:
      'Across five projects, he has been the one holding our architecture together. Quan breaks big problems into clear pieces, makes calls quickly, and makes sure we actually ship.',
    approved: true,
  },
  {
    id: 'yoshio-nomura',
    name: 'Yoshio Nomura',
    avatar: `${DIR}/yoshio-nomura.jpg`,
    relation: 'Teammate · 5 projects together',
    detail: 'Bachelor of AI · UTS × HCMUT',
    quote:
      'Five projects in, Quan is still the teammate I want on a deadline. He sets a clear direction, stays open to every idea on the table, and keeps polishing until the demo is right.',
    approved: true,
  },
  {
    id: 'thanh-loi-tran',
    name: 'Thanh Loi Tran',
    avatar: `${DIR}/thanh-loi-tran.jpg`,
    relation: 'Teammate · Morphysics',
    detail: 'Bachelor of AI · UTS × HCMUT',
    quote: 'A great teammate with responsibility, good leadership and willing to learn new things.',
    approved: true,
  },
  {
    id: 'the-hieu-nguyen',
    name: 'The Hieu Nguyen',
    avatar: `${DIR}/the-hieu-nguyen.jpg`,
    relation: 'Research Advisor · AAC-Bench first author',
    detail: 'AI TechLab · AI Engineer, Zalo AI',
    quote: import.meta.env.DEV
      ? 'Quan is enthusiastic and proactive, with strong engineering skills. He is always open to feedback and genuinely eager to learn.'
      : '',
    approved: false,
  },
  {
    id: 'thai-minh-truong',
    name: 'Thai Minh Truong',
    avatar: `${DIR}/thai-minh-truong.jpg`,
    relation: 'Supervisor · Course & innovation project',
    detail: 'PhD · Lecturer, HCMUT',
    quote: import.meta.env.DEV
      ? 'Quan shows strong commitment, enthusiasm and a high sense of responsibility. He collaborates well, communicates fluently in English, and delivers high-quality results on time.'
      : '',
    approved: false,
  },
  {
    id: 'tran-nguyen',
    name: 'Tran Nguyen',
    avatar: `${DIR}/tran-nguyen.jpg`,
    relation: 'Student support · UTS',
    detail: 'Administrative Officer · UTS',
    quote: import.meta.env.DEV
      ? 'Quan is proactive in seeking solutions and never hesitates to ask questions. His curiosity, persistence and drive to keep improving give him strong potential for growth.'
      : '',
    approved: false,
  },
];

/** Testimonials that may be displayed in the current build */
export const visibleTestimonials = testimonials.filter((t) => t.approved || import.meta.env.DEV);
