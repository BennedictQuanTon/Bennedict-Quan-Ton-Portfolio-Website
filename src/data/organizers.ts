/**
 * Organisers, partners and hosts of the competitions and private events on this site,
 * shown in the two-row logo marquee under "My Story & Path". Every logo has a transparent
 * background so it can be drawn as a single grey mark (inverted in dark mode).
 */
export interface Organizer {
  name: string;
  logo: string;
  /** Rendered height in px (desktop), tuned so every mark carries the same visual weight */
  height: number;
}

export const organizers: Organizer[] = [
  { name: 'NVIDIA', logo: '/assets/images/companies/nvidia_logo.svg', height: 30 },
  { name: 'AMD', logo: '/assets/images/companies/amd_logo.webp', height: 24 },
  { name: 'Google', logo: '/assets/images/companies/google_logo.svg', height: 32 },
  { name: 'OpenAI', logo: '/assets/images/companies/openai_logo.svg', height: 30 },
  { name: 'GIGABYTE', logo: '/assets/images/companies/gigabyte_logo.svg', height: 34 },
  { name: 'Viettel', logo: '/assets/images/companies/viettel_logo.svg', height: 40 },
  { name: 'AssemblyAI', logo: '/assets/images/logos/assemblyai_mark.webp', height: 26 },
  { name: 'Shinhan Financial Group', logo: '/assets/images/companies/shinhan_logo.svg', height: 30 },
  { name: 'Sovico Group', logo: '/assets/images/companies/sovico_logo.webp', height: 40 },
  { name: 'GenAI Fund', logo: '/assets/images/companies/genaifund_logo.webp', height: 30 },
  { name: 'RMIT University', logo: '/assets/images/companies/rmit_logo.svg', height: 42 },
  { name: 'VinUniversity', logo: '/assets/images/companies/vinuni_logo.webp', height: 42 },
  { name: 'Ho Chi Minh City University of Technology', logo: '/assets/images/companies/bku_logo.webp', height: 42 },
  { name: 'Vietnam Youth Start-up Challenge', logo: '/assets/images/logos/vysc_mark.webp', height: 44 }
];
