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
  /** Width / height of the file, so each logo holds its place before it has loaded */
  ratio: number;
}

export const organizers: Organizer[] = [
  { name: 'NVIDIA', logo: '/assets/images/companies/nvidia_logo.svg', height: 30, ratio: 5.467 },
  { name: 'AMD', logo: '/assets/images/companies/amd_logo.webp', height: 20, ratio: 4.196 },
  { name: 'Google', logo: '/assets/images/companies/google_logo.svg', height: 32, ratio: 2.957 },
  { name: 'OpenAI', logo: '/assets/images/companies/openai_logo.svg', height: 30, ratio: 4.034 },
  { name: 'Meta', logo: '/assets/images/companies/meta_logo.svg', height: 21, ratio: 4.963 },
  { name: 'Sea', logo: '/assets/images/companies/sea_logo.webp', height: 32, ratio: 2.505 },
  { name: 'Shopee', logo: '/assets/images/companies/shopee_logo.svg', height: 34, ratio: 1.000 },
  { name: 'GIGABYTE', logo: '/assets/images/companies/gigabyte_logo.svg', height: 34, ratio: 4.635 },
  { name: 'Viettel', logo: '/assets/images/companies/viettel_logo.svg', height: 40, ratio: 2.893 },
  { name: 'AssemblyAI', logo: '/assets/images/logos/assemblyai_mark.webp', height: 26, ratio: 5.421 },
  { name: 'Shinhan Financial Group', logo: '/assets/images/companies/shinhan_logo.svg', height: 30, ratio: 6.827 },
  { name: 'Sovico Group', logo: '/assets/images/companies/sovico_logo.webp', height: 40, ratio: 1.612 },
  { name: 'GenAI Fund', logo: '/assets/images/companies/genaifund_logo.webp', height: 30, ratio: 4.712 },
  { name: 'RMIT University', logo: '/assets/images/companies/rmit_logo.svg', height: 40, ratio: 2.841 },
  { name: 'VinUniversity', logo: '/assets/images/companies/vinuni_logo.webp', height: 36, ratio: 1.636 },
  { name: 'Ho Chi Minh City University of Technology', logo: '/assets/images/companies/bku_logo.webp', height: 34, ratio: 0.992 },
  { name: 'Vietnam Youth Start-up Challenge', logo: '/assets/images/logos/vysc_mark.webp', height: 34, ratio: 1.204 }
];
