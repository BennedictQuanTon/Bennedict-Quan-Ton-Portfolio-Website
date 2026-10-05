import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Award } from 'lucide-react';
import { ScrollReveal } from '../ui/ScrollReveal';
import { CertificateFrame } from '../ui/CertificateFrame';
import { honour, specialization, certifications, courseProviders } from '../../data/credentials';

// The strongest four, in the order a recruiter would look for them
const featured = [specialization, ...certifications.slice(0, 3)];
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

    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
      {/* Dean's List */}
      <ScrollReveal direction="up" className="lg:col-span-5">
        <Link to="/credentials" className="group block">
          <CertificateFrame src={honour.image} alt={honour.title} />
          <div className="pt-5 px-1 space-y-1">
            <p className="text-xs md:text-sm font-semibold text-text-body">{honour.issuer}</p>
            <h3 className="text-2xl md:text-3xl font-bold font-display text-text-heading group-hover:text-accent transition-colors">
              Dean&rsquo;s List <span className="italic font-normal text-accent">2026</span>
            </h3>
          </div>
        </Link>
      </ScrollReveal>

      {/* Featured certifications */}
      <div className="lg:col-span-7 grid grid-cols-2 gap-x-4 gap-y-8 md:gap-x-6">
        {featured.map((cert, idx) => (
          <ScrollReveal key={cert.id} direction="up" delay={idx * 0.06}>
            <Link to="/credentials" className="group block">
              <CertificateFrame src={cert.image} alt={cert.title} />
              <div className="pt-4 px-1 space-y-1">
                <p className="text-[11px] md:text-xs font-semibold text-text-muted truncate">{cert.issuer}</p>
                <h3 className="text-sm md:text-base font-bold text-text-heading leading-snug group-hover:text-accent transition-colors line-clamp-2">
                  {cert.title}
                </h3>
              </div>
            </Link>
          </ScrollReveal>
        ))}
      </div>
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
