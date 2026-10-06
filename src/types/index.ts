// ─── Project ──────────────────────────────────────────────────────────────────

export interface TimelineStep {
  date: string;
  title: string;
  description: string;
  image?: string;
}

export interface Project {
  id: string;
  title: string;
  category: 'Personal Project' | 'Competition';
  period: string;
  role: string;
  summary: string;
  problem: string;
  process: TimelineStep[];
  techStack: string[];
  outcomes: string[];
  images: string[];
  hoverMedia: {
    type: 'image' | 'video';
    /** Image URL, or the MP4 source for videos */
    src: string;
    /** Optional WebM source, preferred over MP4 when supported */
    webmSrc?: string;
    /** Still frame shown before a video starts playing */
    poster?: string;
    objectPosition?: string;
    objectFit?: 'cover' | 'contain';
    /** Frame colour (or CSS gradient) behind 'contain' media; defaults to white */
    background?: string;
  };
  githubUrl?: string;
  liveUrl?: string;
  status: 'active' | 'placeholder';
  /** Result shown as a badge next to the title, e.g. "Top 10 Finalist" */
  achievement?: {
    label: string;
    tone: 'gold' | 'silver' | 'emerald';
  };
  /** Certificate received for this project, shown in the details view */
  certificate?: {
    image: string;
    title: string;
    issuer: string;
  };
  /** Project posters, shown side by side in the details view (landscape first, then portrait) */
  posters?: string[];
  /** Personal projects: the project's own logo, shown where competitions show the organizer's */
  projectLogo?: string;
  competitionName?: string;
  organizer?: string;
  organizerLogo?: string;
  organizerLogos?: string[];
}

// ─── Experience ───────────────────────────────────────────────────────────────

export interface WorkExperience {
  id: string;
  company: string;
  companyLogo?: string;
  companyPhoto?: string;
  location: string;
  role: string;
  type: 'Part-time' | 'Full-time' | 'Internship' | 'Freelance';
  mode: 'Remote' | 'On-site' | 'Hybrid';
  startDate: string;
  endDate: string;
  isActive: boolean;
  responsibilities: string[];
  skills: string[];
  photos?: string[];
  status: 'active' | 'placeholder';
}

// ─── Milestones ───────────────────────────────────────────────────────────────

export interface Milestone {
  id: string;
  type: 'education' | 'competition';
  /** Display string, e.g. "June 2026" */
  date: string;
  title: string;
  subtitle: string;
  description: string;
  details: string[];
  image?: string;
  highlight?: string;
  /** Education only: current GPA, e.g. "6.75 / 7.00" */
  gpa?: string;
  /** Education only: academic honours such as a Dean's List */
  honours?: string[];
}
