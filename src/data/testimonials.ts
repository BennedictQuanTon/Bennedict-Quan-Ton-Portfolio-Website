export interface Testimonial {
  id: string;
  name: string;
  avatar: string;
  /** Relationship to me, e.g. "Mentor · Team Weatherise" */
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
 * Unapproved drafts are written as `import.meta.env.DEV ? '…' : ''`. Vite
 * replaces import.meta.env.DEV with false in production, so the draft text is
 * removed from the public JavaScript entirely. Once someone approves their
 * quote, replace the expression with the plain string and set approved: true.
 */

export const testimonials: Testimonial[] = [
  {
    id: 'yash-gupta',
    name: 'Mr. Yash Gupta',
    avatar: `${DIR}/yash-gupta.jpg`,
    relation: 'Mentor · Team Weatherise',
    detail: 'Senior Solution Architect · NVIDIA India',
    // DRAFT — replace with Mr. Gupta's own words or get his approval before publishing
    quote: import.meta.env.DEV
      ? 'Under real hackathon pressure, Quan combined system-level thinking with calm execution. He turned an ambitious multi-agent idea into a working product on our H200 cluster and kept the whole team aligned the entire way.'
      : '',
    approved: false,
  },
  {
    id: 'khanh-tuong-huynh',
    name: 'Khanh Tuong Huynh',
    avatar: `${DIR}/khanh-tuong-huynh.jpg`,
    relation: 'Teammate · 5 projects together',
    detail: 'K25 Student · UTS × HCMUT',
    // DRAFT — replace with Tuong's own words or get his approval before publishing
    quote: import.meta.env.DEV
      ? 'Across five projects, he has been the one holding our architecture together. Quan breaks big problems into clear pieces, makes calls quickly, and makes sure we actually ship.'
      : '',
    approved: false,
  },
  {
    id: 'yoshio-nomura',
    name: 'Yoshio Nomura',
    avatar: `${DIR}/yoshio-nomura.jpg`,
    relation: 'Teammate · 5 projects together',
    detail: 'K25 Student · UTS × HCMUT',
    // DRAFT — replace with Yoshio's own words or get his approval before publishing
    quote: import.meta.env.DEV
      ? 'Five projects in, Quan is still the teammate I want on a deadline. He sets a clear direction, stays open to every idea on the table, and keeps polishing until the demo is right.'
      : '',
    approved: false,
  },
];

/** Testimonials that may be displayed in the current build */
export const visibleTestimonials = testimonials.filter((t) => t.approved || import.meta.env.DEV);
