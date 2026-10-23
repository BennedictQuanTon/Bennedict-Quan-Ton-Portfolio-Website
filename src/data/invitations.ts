import type { Invitation } from '../types';

// Newest first
export const invitations: Invitation[] = [
  {
    id: 'ace-2026-vietnam',
    event: 'ACE 2026 Vietnam — Agentic Computing at the Edge',
    host: 'GIGABYTE × NVIDIA',
    day: '08',
    month: 'October 2026',
    when: 'Thursday · 08:00 – 12:30',
    venue: 'Capella Gallery Hall, Ho Chi Minh City',
    invitedAs: 'Private invitation · Customers & Partners',
    summary:
      'A private GIGABYTE × NVIDIA showcase of agentic AI and edge computing on the GIGABYTE AI TOP ATOM. In the on-site Agent Design Challenge, our team built an end-to-end financial agent that ran fully on the device and analysed more than 1,000 financial records in about five minutes, against 30+ minutes with a traditional pipeline.',
    highlights: ['Third Prize · Agent Design Challenge', 'Pitched on stage as team leader', 'Limited-edition GIGABYTE merch'],
    photos: [
      { src: '/assets/images/events/ace-2026/team_selfie.webp', alt: 'With my teammate at the ACE 2026 Vietnam backdrop' },
      { src: '/assets/images/events/ace-2026/on_stage.webp', alt: 'Pitching our financial agent on stage' },
      { src: '/assets/images/events/ace-2026/ai_top_atom.webp', alt: 'The GIGABYTE AI TOP ATOM at the venue' }
    ],
    proof: [
      { src: '/assets/images/events/ace-2026/invitation_card.webp', caption: 'Invitation card' },
      { src: '/assets/images/events/ace-2026/invitation_email.webp', caption: 'Invitation email' }
    ]
  },
  {
    id: 'shinhan-demo-day-2026',
    event: "Shinhan Future's Lab Demo Day 2026",
    host: "Shinhan Future's Lab Vietnam · GenAI Fund",
    day: '17',
    month: 'September 2026',
    when: 'Thursday · 16:00 – 18:00',
    venue: 'The METT Tower, Ho Chi Minh City',
    invitedAs: 'Invited guest · GenAI Fund',
    summary:
      "The joint finale of Shinhan's Global X-Change and Innoboost startup programs, themed AX Technicolor. More than 20 startups from Korea and Vietnam pitched, showcased and met founders, investors and corporate innovation leaders.",
    highlights: ['20+ startups across pitching, showcase and business matching', 'Korea–Vietnam startup ecosystem'],
    photos: [
      { src: '/assets/images/events/shinhan-demo-day/selfie.webp', alt: "At Shinhan Future's Lab Demo Day 2026" },
      { src: '/assets/images/events/shinhan-demo-day/guest_badge.webp', alt: 'My guest badge' }
    ],
    proof: [
      { src: '/assets/images/events/shinhan-demo-day/invitation_email.webp', caption: 'Calendar invitation' },
      { src: '/assets/images/events/shinhan-demo-day/event_page.webp', caption: 'Event page' }
    ]
  }
];
