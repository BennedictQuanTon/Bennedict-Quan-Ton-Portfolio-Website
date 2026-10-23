import React from 'react';
import { MailOpen, MapPin, TicketCheck } from 'lucide-react';
import { ScrollReveal } from '../ui/ScrollReveal';
import type { LightboxItem } from '../ui/Lightbox';
import { invitations } from '../../data/invitations';

interface InvitationsSectionProps {
  onOpen: (item: LightboxItem) => void;
}

/**
 * Private events I was invited to. Each one leads with the photos; the date,
 * the role I was invited in and what happened sit beside them, and the proof
 * of invitation opens only when asked for. Rows alternate sides on wide screens.
 */
export const InvitationsSection: React.FC<InvitationsSectionProps> = ({ onOpen }) => (
  <section className="w-full mt-14 md:mt-20 mb-4">
    <ScrollReveal className="mb-10 md:mb-14">
      <div className="flex items-center gap-3">
        <TicketCheck size={28} className="text-accent" />
        <h2 className="text-2xl md:text-4xl font-bold font-display text-text-heading">By Invitation</h2>
      </div>
      <p className="text-sm md:text-base text-text-muted mt-3 max-w-xl leading-relaxed">
        Private conferences and closed-door showcases I was invited to attend.
      </p>
    </ScrollReveal>

    <div className="flex flex-col gap-16 md:gap-24">
      {invitations.map((inv, idx) => {
        const [hero, ...rest] = inv.photos;
        const openPhoto = (photo: { src: string; alt: string }) =>
          onOpen({ src: photo.src, title: inv.event, subtitle: photo.alt });

        return (
          <ScrollReveal key={inv.id}>
            <article className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
              {/* Photos: one large shot, then the rest as a row of two; with a single
                  extra photo the two sit side by side at the same height */}
              <div className={`lg:col-span-7 ${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className={rest.length === 1 ? 'grid grid-cols-[1.55fr_1fr] gap-3 md:gap-4' : ''}>
                  <button
                    type="button"
                    onClick={() => openPhoto(hero)}
                    className="group block w-full aspect-[4/3] rounded-[1.75rem] overflow-hidden bg-bg-alt cursor-zoom-in"
                    aria-label={`View photo: ${hero.alt}`}
                  >
                    <img
                      src={hero.src}
                      alt={hero.alt}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    />
                  </button>
                  {rest.length === 1 && (
                    <button
                      type="button"
                      onClick={() => openPhoto(rest[0])}
                      className="group relative block w-full h-full rounded-[1.75rem] overflow-hidden bg-bg-alt cursor-zoom-in"
                      aria-label={`View photo: ${rest[0].alt}`}
                    >
                      <img
                        src={rest[0].src}
                        alt={rest[0].alt}
                        loading="lazy"
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                      />
                    </button>
                  )}
                </div>
                {rest.length > 1 && (
                  <div className="grid grid-cols-2 gap-3 md:gap-4 mt-3 md:mt-4">
                    {rest.map((photo) => (
                      <button
                        key={photo.src}
                        type="button"
                        onClick={() => openPhoto(photo)}
                        className="group block aspect-[4/3] rounded-2xl overflow-hidden bg-bg-alt cursor-zoom-in"
                        aria-label={`View photo: ${photo.alt}`}
                      >
                        <img
                          src={photo.src}
                          alt={photo.alt}
                          loading="lazy"
                          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Details */}
              <div className="lg:col-span-5">
                <div className="flex items-end gap-4 md:gap-5">
                  <span className="font-display font-bold text-7xl md:text-8xl leading-[0.8] tracking-tight text-text-heading tabular-nums">
                    {inv.day}
                  </span>
                  <div className="pb-1">
                    <span className="block text-[11px] md:text-xs font-semibold uppercase tracking-[0.28em] text-text-muted">{inv.month}</span>
                    <span className="block text-sm text-text-muted mt-1.5">{inv.when}</span>
                  </div>
                </div>

                <div className="h-px bg-border-token my-6 md:my-7" />

                <h3 className="text-3xl md:text-4xl font-bold font-display text-text-heading leading-[1.1] tracking-tight">{inv.event}</h3>
                <p className="text-sm md:text-base font-semibold text-accent mt-3">{inv.host}</p>
                <p className="flex items-center gap-1.5 text-sm text-text-muted mt-1.5">
                  <MapPin size={14} className="shrink-0" /> {inv.venue}
                </p>

                <div className="mt-6">
                  <span className="block text-[11px] font-semibold uppercase tracking-[0.28em] text-text-muted">Invited as</span>
                  <span className="block text-base md:text-lg font-semibold text-text-heading mt-1.5">{inv.invitedAs}</span>
                </div>

                <p className="text-sm md:text-base text-text-body leading-relaxed mt-5">{inv.summary}</p>

                {inv.highlights && inv.highlights.length > 0 && (
                  <ul className="mt-5 space-y-2.5">
                    {inv.highlights.map((h) => (
                      <li key={h} className="flex items-center gap-3 text-sm md:text-base font-semibold text-text-heading">
                        <span aria-hidden className="h-px w-6 bg-accent shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>
                )}

                {/* Proof: kept out of the way until someone asks */}
                <div className="mt-7 pt-5 border-t border-border-token/50 flex flex-wrap items-center gap-x-5 gap-y-2">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-text-muted">Proof of invitation</span>
                  {inv.proof.map((p) => (
                    <button
                      key={p.src}
                      type="button"
                      onClick={() => onOpen({ src: p.src, title: inv.event, subtitle: p.caption })}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-text-heading hover:text-accent underline-offset-4 hover:underline transition-colors cursor-pointer"
                    >
                      <MailOpen size={15} className="shrink-0" /> {p.caption}
                    </button>
                  ))}
                </div>
              </div>
            </article>
          </ScrollReveal>
        );
      })}
    </div>
  </section>
);

export default InvitationsSection;
