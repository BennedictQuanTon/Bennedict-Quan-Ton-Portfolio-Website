import React from 'react';
import { ArrowUpRight, BookOpen, Calendar } from 'lucide-react';
import { ScrollReveal } from '../ui/ScrollReveal';
import { publications } from '../../data/publications';
import type { PublicationStep } from '../../data/publications';

const stepDot: Record<PublicationStep['state'], string> = {
  done: 'bg-accent',
  current: 'bg-accent animate-pulse',
  upcoming: 'bg-surface-2 border border-border-token',
};

/** Home-page publications block, placed directly under Projects. */
export const PublicationSection: React.FC = () => (
  <section className="w-full max-w-[1360px] xl:max-w-[1440px] 2xl:max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12 py-14 md:py-20 border-b border-border-token/20">
    <ScrollReveal direction="up" className="mb-10 md:mb-12">
      <div className="flex items-center gap-2.5">
        <BookOpen size={20} className="text-accent" />
        <span className="text-sm uppercase tracking-widest font-semibold text-accent">Research</span>
      </div>
      <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold font-display text-text-heading mt-3">
        Publications
      </h2>
      <div className="flex items-center gap-1.5 mt-5">
        <div className="w-12 h-[2.5px] bg-accent rounded-full" />
        <div className="w-5 h-[2.5px] bg-border-token/40 rounded-full" />
        <div className="w-3 h-[2.5px] bg-border-token/40 rounded-full" />
      </div>
      <p className="text-sm md:text-base text-text-muted mt-4 max-w-2xl text-pretty hyphens-none leading-relaxed">
        Research on speech recognition and real-time voice agents for autonomous multiagent systems, where audio is used as context.
      </p>
    </ScrollReveal>

    <div className="flex flex-col space-y-8">
      {publications.map((paper) => (
        <ScrollReveal key={paper.id} direction="up">
          <article className="glass-panel rounded-3xl border border-border-token/35 p-4 sm:p-6 md:p-8">
            <div className="text-center w-full">
              <span className="text-sm sm:text-lg md:text-xl font-bold font-display uppercase tracking-wider text-accent inline-block">
                {paper.venue}
              </span>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 py-2.5 mt-4 border-y border-border-token/15">
              <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
                <div className="flex flex-wrap items-center gap-2 text-sm md:text-base font-semibold text-accent">
                  <span className="font-bold text-text-heading shrink-0">Status:</span>
                  <span className="bg-accent-dim px-3.5 py-1.5 rounded-full border border-accent/20 text-sm font-medium">
                    {paper.status}
                  </span>
                </div>
                <div className="flex flex-wrap items-center gap-2 text-sm md:text-base font-semibold text-accent">
                  <span className="font-bold text-text-heading shrink-0">Role:</span>
                  <span className="bg-accent-dim px-3.5 py-1.5 rounded-full border border-accent/20 text-sm font-medium">
                    {paper.role}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-1.5 text-xs md:text-sm text-text-muted font-medium">
                <Calendar size={14} className="text-accent shrink-0" />
                <span>{paper.place} · {paper.when}</span>
              </div>
            </div>

            <div className="bg-bg-alt/40 border border-border-token/25 rounded-2xl p-4 md:p-6 mt-4 space-y-3">
              <h3 className="text-2xl md:text-3xl font-bold font-display text-text-heading leading-tight">
                {paper.title}
              </h3>
              <p className="text-sm md:text-base text-text-body leading-relaxed">
                {paper.authors.map((author, index) => (
                  <React.Fragment key={author.name}>
                    {index > 0 ? ', ' : null}
                    {author.self ? (
                      <span className="font-semibold text-text-heading">{author.name}</span>
                    ) : (
                      author.name
                    )}
                  </React.Fragment>
                ))}
              </p>
              <p className="text-sm text-text-muted leading-relaxed">{paper.venueFull}</p>
            </div>

            <ol className="relative mt-6 flex flex-col gap-4 md:mt-8 md:block md:min-h-[5.5rem]">
              <div className="pointer-events-none absolute top-[4px] right-[5px] left-[5px] hidden h-px bg-border-token/40 md:block" aria-hidden="true" />
              {paper.timeline.map((step, index) => {
                const last = paper.timeline.length - 1
                const place =
                  index === 0
                    ? 'md:translate-x-0 md:items-start md:text-left'
                    : index === last
                      ? 'md:-translate-x-full md:items-end md:text-right'
                      : 'md:-translate-x-1/2 md:items-center md:text-center'
                return (
                  <li
                    key={step.label}
                    aria-current={step.state === 'current' ? 'step' : undefined}
                    className={`relative flex items-start gap-3 md:absolute md:top-0 md:left-[var(--mark)] md:w-max md:max-w-[11rem] md:flex-col md:gap-2.5 ${place}`}
                    style={{ '--mark': `${(index / last) * 100}%` } as React.CSSProperties}
                  >
                    <span className={`relative z-10 mt-1 h-2.5 w-2.5 shrink-0 rounded-full md:mt-0 ${stepDot[step.state]}`} />
                    <div className="min-w-0">
                      <p className={`text-sm md:text-base leading-snug ${step.state === 'upcoming' ? 'text-text-muted' : 'font-semibold text-text-heading'}`}>
                        {step.label}
                      </p>
                      <p className="text-sm text-text-body mt-0.5">{step.date}</p>
                    </div>
                  </li>
                )
              })}
            </ol>

            <a
              href={paper.callUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-6 text-sm font-semibold text-accent hover:text-accent-bright transition-colors"
            >
              Conference call <ArrowUpRight size={14} />
            </a>
          </article>
        </ScrollReveal>
      ))}
    </div>
  </section>
);

export default PublicationSection;
