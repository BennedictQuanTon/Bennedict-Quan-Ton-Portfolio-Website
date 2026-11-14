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
 * AAC-BENCH dates are the AAMAS 2027 main-track calendar (Anywhere on Earth).
 * https://warwick.ac.uk/fac/sci/dcs/aamas2027/calls/call-for-main-track/
 * Abstract 1 Oct 2026, full paper 8 Oct 2026, rebuttal 20–24 Nov 2026,
 * notification 21 Dec 2026, conference 3–7 May 2027 in Hanoi.
 */
export const publications: Publication[] = [
  {
    // ACIIDS 2027 calendar: https://aciids.pwr.edu.pl/2027/dates.html (deadline extended to 14 Nov 2026, AoE).
    // Notification, camera-ready and registration are only announced as January 2027.
    id: 'driftdx',
    title: 'DriftDx: Diagnosing How Small Language Models Break When the Tool Catalog Changes',
    authors: [
      { name: 'Long Quan Ton', self: true },
      { name: 'Khanh Tuong Huynh' },
      { name: 'Thanh Loi Tran' },
      { name: 'Duc Dung Nguyen' },
      { name: 'Vi Ngoc-Nha Tran' },
    ],
    venue: 'ACIIDS 2027',
    venueFull: 'CORE B conference · 19th Asian Conference on Intelligent Information and Database Systems · Springer LNAI',
    status: 'Under Review',
    role: 'First author',
    place: 'Bali, Indonesia',
    when: '5–7 Apr 2027',
    callUrl: 'https://aciids.pwr.edu.pl/2027/',
    timeline: [
      { label: 'Submitted', date: '14 Nov 2026', state: 'done' },
      { label: 'Peer review', date: 'Nov 2026 – Jan 2027', state: 'current' },
      { label: 'Notification', date: 'Jan 2027', state: 'upcoming' },
      { label: 'Camera-ready', date: 'Jan 2027', state: 'upcoming' },
      { label: 'Conference', date: '5–7 Apr 2027', state: 'upcoming' },
    ],
  },
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
    venueFull: 'CORE A* conference · 26th International Conference on Autonomous Agents and Multiagent Systems',
    status: 'Under Review',
    role: 'Co-author',
    place: 'Hanoi, Vietnam',
    when: '3–7 May 2027',
    callUrl: 'https://warwick.ac.uk/fac/sci/dcs/aamas2027/calls/call-for-main-track/',
    timeline: [
      { label: 'Abstract', date: '1 Oct 2026', state: 'done' },
      { label: 'Full paper', date: '8 Oct 2026', state: 'done' },
      { label: 'Rebuttal', date: '20–24 Nov 2026', state: 'upcoming' },
      { label: 'Notification', date: '21 Dec 2026', state: 'upcoming' },
      { label: 'Conference', date: '3–7 May 2027', state: 'upcoming' },
    ],
  },
];
