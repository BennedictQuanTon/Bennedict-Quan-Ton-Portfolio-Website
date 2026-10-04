import React from 'react';
import { Quote } from 'lucide-react';
import type { Testimonial } from '../../data/testimonials';

const TestimonialCard: React.FC<{ t: Testimonial }> = ({ t }) => (
  <figure className="group/card glass-panel shrink-0 w-[290px] sm:w-[380px] rounded-3xl p-6 md:p-7 border border-border-token/40 flex flex-col justify-between gap-6 hover:border-accent/40 transition-colors duration-300">
    <div className="space-y-4">
      <Quote size={28} className="text-accent/70" />
      <blockquote className="text-sm md:text-base text-text-body leading-relaxed">“{t.quote}”</blockquote>
    </div>
    <figcaption className="flex items-center gap-3.5 pt-5 border-t border-border-token/20">
      <img
        src={t.avatar}
        alt={t.name}
        loading="lazy"
        className="w-12 h-12 rounded-full object-cover object-top shrink-0 ring-1 ring-border-token"
      />
      <div className="min-w-0">
        <p className="text-sm md:text-base font-bold text-text-heading leading-tight">{t.name}</p>
        <p className="text-xs font-semibold text-accent mt-1 leading-snug">{t.relation}</p>
        <p className="text-xs text-text-muted mt-0.5 leading-snug">{t.detail}</p>
      </div>
    </figcaption>
  </figure>
);

/**
 * Continuously scrolling row of testimonial cards. The card list is repeated
 * until one group is wider than any screen, then rendered twice and shifted by
 * -50% so the loop is seamless. Pauses on hover or press.
 */
export const TestimonialMarquee: React.FC<{ items: Testimonial[] }> = ({ items }) => {
  if (items.length === 0) return null;

  // A single card would just repeat itself — show it statically instead
  if (items.length === 1) {
    return (
      <div className="flex justify-center px-4">
        <TestimonialCard t={items[0]} />
      </div>
    );
  }

  const copies = Math.max(2, Math.ceil(6 / items.length));
  const group = Array.from({ length: copies }, () => items).flat();

  return (
    <div className="marquee" style={{ ['--marquee-duration' as string]: `${group.length * 8}s` }}>
      <div className="marquee-track">
        {[0, 1].map((half) => (
          <div key={half} className="flex gap-5 md:gap-6 pr-5 md:pr-6" aria-hidden={half === 1}>
            {group.map((t, i) => (
              <TestimonialCard key={`${half}-${t.id}-${i}`} t={t} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialMarquee;
