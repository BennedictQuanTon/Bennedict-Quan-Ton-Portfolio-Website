import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Award, Briefcase, Calendar, Compass } from 'lucide-react';
import { ScrollReveal } from '../ui/ScrollReveal';
import { experiences } from '../../data/experience';
import { milestones } from '../../data/milestones';

const education = milestones.find((m) => m.type === 'education');

/** Home-page summary of the Journey page: current roles plus education, linking through. */
export const JourneyPreview: React.FC = () => (
  <section className="w-full max-w-[1360px] xl:max-w-[1440px] 2xl:max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12 py-14 md:py-20 border-b border-border-token/20">
    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 md:mb-12">
      <ScrollReveal direction="up">
        <div className="flex items-center gap-2.5">
          <Compass size={20} className="text-accent" />
          <span className="text-sm uppercase tracking-widest font-semibold text-accent">The Journey</span>
        </div>
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold font-display text-text-heading mt-3">
          Experience &amp; Education
        </h2>
        <p className="text-sm md:text-base text-text-muted mt-4 max-w-xl leading-relaxed">
          Where I am building right now, and the degree behind it.
        </p>
      </ScrollReveal>
      <Link
        to="/journey"
        className="hidden md:inline-flex shrink-0 px-7 py-3.5 rounded-full border border-border-token text-text-heading hover:bg-surface-2 text-sm items-center gap-2 font-semibold transition-all duration-300"
      >
        View Full Journey <ArrowUpRight size={16} />
      </Link>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 md:gap-6">
      {/* Roles */}
      <div className="lg:col-span-7 grid grid-rows-3 gap-4">
        {experiences.map((exp, idx) => (
          <ScrollReveal key={exp.id} direction="up" delay={idx * 0.06}>
            <Link
              to="/journey"
              className="group glass-panel rounded-2xl p-4 md:p-5 border border-border-token/35 hover:border-accent/40 flex items-center gap-4 md:gap-6 transition-colors duration-300 h-full"
            >
              {exp.companyLogo && (
                <div className="w-24 h-16 md:w-40 md:h-20 shrink-0 rounded-xl bg-white border border-border-token/30 px-3 py-2 md:px-5 md:py-3 flex items-center justify-center">
                  <img src={exp.companyLogo} alt={`${exp.company} logo`} loading="lazy" className="max-w-full max-h-full object-contain" />
                </div>
              )}
              <div className="min-w-0 flex-1 space-y-1">
                <h3 className="text-base md:text-lg font-bold text-text-heading leading-snug group-hover:text-accent transition-colors">
                  {exp.role}
                </h3>
                <p className="text-sm font-semibold text-text-body">{exp.company}</p>
                <p className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs md:text-sm text-text-muted">
                  <span className="inline-flex items-center gap-1.5"><Calendar size={13} className="text-accent" />{exp.startDate} – {exp.endDate}</span>
                  <span className="inline-flex items-center gap-1.5"><Briefcase size={13} className="text-accent" />{exp.mode} · {exp.type}</span>
                </p>
              </div>
            </Link>
          </ScrollReveal>
        ))}
      </div>

      {/* Education */}
      {education && (
        <ScrollReveal direction="up" delay={0.12} className="lg:col-span-5">
          <Link
            to="/journey"
            className="group glass-panel rounded-2xl p-6 md:p-8 border border-border-token/35 hover:border-accent/40 h-full flex flex-col justify-between gap-8 transition-colors duration-300"
          >
            <div className="space-y-3">
              <span className="text-xs font-semibold text-text-muted">Education</span>
              <h3 className="text-2xl md:text-3xl font-bold font-display text-text-heading leading-tight group-hover:text-accent transition-colors">
                {education.subtitle}
              </h3>
              <p className="text-sm md:text-base font-semibold text-text-muted">{education.title}</p>
              <p className="inline-flex items-center gap-1.5 text-sm text-text-body">
                <Calendar size={14} className="text-accent" /> {education.date}
              </p>
            </div>

            {/* GPA as the centrepiece, set between hairlines */}
            {education.gpa && (() => {
              const [score, scale] = education.gpa.split('/').map((part) => part.trim());
              return (
                <div className="flex items-center gap-4 md:gap-6">
                  <span className="h-px flex-1 bg-border-token" />
                  <div className="text-center">
                    <span className="block text-xs font-semibold text-text-muted mb-2">Cumulative GPA</span>
                    <span className="text-5xl md:text-6xl font-extrabold text-text-heading leading-none tracking-tight">{score}</span>
                    {scale && <span className="text-xl md:text-2xl font-bold text-text-muted ml-1.5">/ {scale}</span>}
                  </div>
                  <span className="h-px flex-1 bg-border-token" />
                </div>
              );
            })()}

            <div className="flex flex-col items-center gap-6">
              {education.honours?.map((honour) => (
                <div key={honour} className="inline-flex items-center gap-2.5 rounded-full border border-gilt-soft px-4 py-2">
                  <Award size={18} className="text-accent shrink-0" />
                  <span className="text-xs md:text-sm font-semibold text-text-heading leading-snug">{honour}</span>
                </div>
              ))}
              {/* Universities, shown as they are — no tiles */}
              <div className="flex items-center justify-center gap-6 md:gap-8">
                <img src="/assets/images/companies/uts_logo.webp" alt="University of Technology Sydney" loading="lazy" className="h-11 md:h-14 w-auto object-contain dark:invert" />
                <span className="h-12 w-px bg-border-token" />
                <img src="/assets/images/companies/bku_logo.webp" alt="Ho Chi Minh City University of Technology" loading="lazy" className="h-12 md:h-14 w-auto object-contain" />
              </div>
            </div>
          </Link>
        </ScrollReveal>
      )}
    </div>

    <Link
      to="/journey"
      className="md:hidden mt-6 w-full py-3.5 rounded-full border border-border-token text-text-heading text-sm flex items-center justify-center gap-2 font-semibold"
    >
      View Full Journey <ArrowUpRight size={16} />
    </Link>
  </section>
);

export default JourneyPreview;
