import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Award } from 'lucide-react';
import { ScrollReveal } from '../ui/ScrollReveal';
import { CertificateFrame } from '../ui/CertificateFrame';
import { honour, specialization, certifications, courseProviders } from '../../data/credentials';

// The three a recruiter would look for first
const FEATURED_IDS = ['genai-llm', 'aws-cloud-practitioner'];
const featured = [specialization, ...FEATURED_IDS.map((id) => certifications.find((c) => c.id === id)).filter((c) => c !== undefined)];
const totalCertifications = certifications.length + 1;
const totalCourses = courseProviders.reduce((n, p) => n + p.courses.length, 0);

/** Home-page summary of the Credentials page: Dean's List and top certificates, linking through. */
export const CredentialsPreview: React.FC = () => (
  <section className="w-full max-w-[1360px] xl:max-w-[1440px] 2xl:max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12 py-14 md:py-20 border-b border-border-token/20">
    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 md:mb-12">
      <ScrollReveal direction="up">
        <div className="flex items-center gap-2.5">
          <Award size={20} className="text-accent" />
          <span className="text-sm uppercase tracking-widest font-semibold text-accent">Credentials</span>
        </div>
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold font-display text-text-heading mt-3">
          Honours &amp; Certifications
        </h2>
        <p className="text-sm md:text-base text-text-muted mt-4 max-w-xl leading-relaxed">
          Dean&rsquo;s List recognition, {totalCertifications} certifications and {totalCourses} short courses in machine learning, generative AI and cloud.
        </p>
      </ScrollReveal>
      <Link
        to="/credentials"
        className="hidden md:inline-flex shrink-0 px-7 py-3.5 rounded-full border border-border-token text-text-heading hover:bg-surface-2 text-sm items-center gap-2 font-semibold transition-all duration-300"
      >
        View All Credentials <ArrowUpRight size={16} />
      </Link>
    </div>

    {/* Dean's List */}
    <ScrollReveal direction="up">
      <Link to="/credentials" className="group grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
        <div className="lg:col-span-6 lg:col-start-1 max-w-[640px]">
          <CertificateFrame src={honour.image} alt={honour.title} />
        </div>
        <div className="lg:col-span-6 space-y-4">
          <p className="text-sm md:text-base font-semibold text-text-body">{honour.issuer}</p>
          <h3 className="text-4xl md:text-5xl font-bold font-display text-text-heading leading-[1.05] tracking-tight group-hover:text-accent transition-colors">
            Dean&rsquo;s List <span className="italic font-normal text-accent">2026</span>
          </h3>
          <div className="flex items-center gap-1.5">
            <div className="w-12 h-[2.5px] bg-accent rounded-full" />
            <div className="w-5 h-[2.5px] bg-border-token/40 rounded-full" />
            <div className="w-3 h-[2.5px] bg-border-token/40 rounded-full" />
          </div>
          <p className="text-sm md:text-base text-text-body leading-relaxed">For outstanding academic achievement in Engineering and Information Technology.</p>
        </div>
      </Link>
    </ScrollReveal>

    {/* Featured certifications: identical frames, centred as a row (two up on phones, last one centred) */}
    <div className="flex flex-wrap justify-center gap-x-4 gap-y-8 md:gap-x-6 mt-14 md:mt-16 max-w-5xl mx-auto">
      {featured.map((cert, idx) => (
        <ScrollReveal key={cert.id} direction="up" delay={idx * 0.06} className="w-[calc(50%-0.5rem)] md:w-[calc(33.333%-1rem)]">
          <Link to="/credentials" className="group flex flex-col h-full">
            <CertificateFrame src={cert.image} alt={cert.title} aspect="aspect-[4/3]" />
            <div className="pt-4 px-1 space-y-1">
              <p className="text-[11px] md:text-xs font-semibold text-text-muted truncate">{cert.issuer}</p>
              <h3 className="text-sm md:text-base font-bold text-text-heading leading-snug group-hover:text-accent transition-colors line-clamp-2 min-h-[2.5em]">
                {cert.title}
              </h3>
            </div>
          </Link>
        </ScrollReveal>
      ))}
    </div>

    <Link
      to="/credentials"
      className="md:hidden mt-8 w-full py-3.5 rounded-full border border-border-token text-text-heading text-sm flex items-center justify-center gap-2 font-semibold"
    >
      View All Credentials <ArrowUpRight size={16} />
    </Link>
  </section>
);

export default CredentialsPreview;
