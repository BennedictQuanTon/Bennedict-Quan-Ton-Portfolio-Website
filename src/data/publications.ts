export interface PublicationAuthor {
  name: string;
  /** The site owner, set in the heading weight used for names on the page */
  self?: boolean;
}

export interface PublicationStep {
  label: string;
  date: string;
  state: 'done' | 'current' | 'upcoming';
}

export interface Publication {
  id: string;
  title: string;
  authors: PublicationAuthor[];
  venue: string;
  /** Formal venue line under the authors */
  venueFull: string;
  status: string;
  role: string;
  place: string;
  when: string;
  /** Official main-track call, not a paper PDF */
  callUrl: string;
  timeline: PublicationStep[];
}

/**
 * Main-track dates are the AAMAS 2027 calendar (Anywhere on Earth).
 * https://warwick.ac.uk/fac/sci/dcs/aamas2027/calls/call-for-main-track/
 * Abstract 1 Oct 2026, full paper 8 Oct 2026, rebuttal 20–24 Nov 2026,
 * notification 21 Dec 2026, conference 3–7 May 2027 in Hanoi.
 */
export const publications: Publication[] = [
  {
    id: 'aac-bench',
    title: 'AAC-BENCH: Benchmarking Audio as Context for Proactive Voice Agents',
    authors: [
      { name: 'The Hieu Pham' },
      { name: 'Phuc Huynh' },
      { name: 'Long Quan Ton', self: true },
      { name: 'Duc Dung Nguyen' },
    ],
    venue: 'AAMAS 2027',
    venueFull: 'CORE A/A* conference · 26th International Conference on Autonomous Agents and Multiagent Systems',
    status: 'Under Review',
    role: 'Co-author',
    place: 'Hanoi, Vietnam',
    when: '3–7 May 2027',
    callUrl: 'https://warwick.ac.uk/fac/sci/dcs/aamas2027/calls/call-for-main-track/',
    timeline: [
      { label: 'Abstract', date: '1 Oct 2026', state: 'done' },
      { label: 'Full paper', date: '8 Oct 2026', state: 'current' },
      { label: 'Rebuttal', date: '20–24 Nov 2026', state: 'upcoming' },
      { label: 'Notification', date: '21 Dec 2026', state: 'upcoming' },
      { label: 'Conference', date: '3–7 May 2027', state: 'upcoming' },
    ],
  },
];
