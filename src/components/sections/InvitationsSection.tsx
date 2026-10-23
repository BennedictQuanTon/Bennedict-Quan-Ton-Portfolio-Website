import React from 'react';
import { MailOpen, MapPin, TicketCheck } from 'lucide-react';
import { ScrollReveal } from '../ui/ScrollReveal';
import type { LightboxItem } from '../ui/Lightbox';
import type { Invitation } from '../../types';
import { invitations } from '../../data/invitations';

interface InvitationsSectionProps {
  onOpen: (item: LightboxItem) => void;
}

type Photo = Invitation['photos'][number];

const PhotoButton: React.FC<{ photo: Photo; onOpen: (p: Photo) => void; className?: string }> = ({ photo, onOpen, className = '' }) => (
  <button
    type="button"
    onClick={() => onOpen(photo)}
    className={`group relative block overflow-hidden bg-bg-alt cursor-zoom-in ${className}`}
    aria-label={`View photo: ${photo.alt}`}
  >
    <img
      src={photo.src}
      alt={photo.alt}
      loading="lazy"
      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
      style={photo.position ? { objectPosition: photo.position } : undefined}
    />
  </button>
);

/**
 * Private events I was invited to. Photos sit beside the details and, on wide
 * screens, take exactly the height of the text column; the proof of invitation
 * opens only when asked for. Rows alternate sides.
 */
export const InvitationsSection: React.FC<InvitationsSectionProps> = ({ onOpen }) => (
  <section className="w-full mt-14 md:mt-20 mb-4">
    <ScrollReveal className="mb-8 md:mb-12">
      <div className="flex items-center gap-3">
        <TicketCheck size={26} className="text-accent" />
        <h2 className="text-2xl md:text-4xl font-bold font-display text-text-heading">By Invitation</h2>
      </div>
      <p className="text-sm text-text-muted mt-3 max-w-xl leading-relaxed">
        Private conferences and closed-door showcases I was invited to attend.
      </p>
    </ScrollReveal>

    <div className="flex flex-col gap-14 md:gap-20">
      {invitations.map((inv, idx) => {
        const [hero, ...rest] = inv.photos;
        const openPhoto = (photo: Photo) => onOpen({ src: photo.src, title: inv.event, subtitle: photo.alt });

        return (
          <ScrollReveal key={inv.id}>
            <article className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12">
              {/* Photos: on wide screens the column is taken out of the flow, so the
                  row is as tall as the text and the photos fill exactly that height */}
              <div className={`lg:col-span-6 lg:relative ${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="flex flex-col gap-3 lg:absolute lg:inset-0">
                  {rest.length === 1 ? (
                    <div className="grid grid-cols-[1.55fr_1fr] gap-3 aspect-[16/9] lg:aspect-auto lg:flex-1">
                      <PhotoButton photo={hero} onOpen={openPhoto} className="rounded-2xl h-full" />
                      <PhotoButton photo={rest[0]} onOpen={openPhoto} className="rounded-2xl h-full" />
                    </div>
                  ) : (
                    <>
                      <PhotoButton photo={hero} onOpen={openPhoto} className="rounded-2xl aspect-[4/3] lg:aspect-auto lg:flex-[2.2]" />
                      {rest.length > 1 && (
                        <div className="grid grid-cols-2 gap-3 aspect-[8/3] lg:aspect-auto lg:flex-1">
                          {rest.map((photo) => (
                            <PhotoButton key={photo.src} photo={photo} onOpen={openPhoto} className="rounded-xl h-full" />
                          ))}
                        </div>
                      )}
                    </>
                  )}
                </div>
              </div>

              {/* Details */}
              <div className="lg:col-span-6 lg:py-1">
                <div className="flex items-end gap-3.5">
                  <span className="font-display font-bold text-5xl md:text-6xl leading-[0.8] tracking-tight text-text-heading tabular-nums">
                    {inv.day}
                  </span>
                  <div>
                    <span className="block text-[10px] md:text-[11px] font-semibold uppercase tracking-[0.28em] text-text-muted">{inv.month}</span>
                    <span className="block text-xs md:text-sm text-text-muted mt-1">{inv.when}</span>
                  </div>
                </div>

                <div className="h-px bg-border-token my-5" />

                <h3 className="text-xl md:text-2xl font-bold font-display text-text-heading leading-snug tracking-tight">{inv.event}</h3>

                {inv.hostLogos && inv.hostLogos.length > 0 ? (
                  <div className="flex flex-wrap items-center gap-2 mt-3" aria-label={inv.host}>
                    {inv.hostLogos.map((logo) => (
                      <span key={logo.src} className="h-10 px-3.5 rounded-lg bg-white flex items-center shadow-xs">
                        <img src={logo.src} alt={logo.alt} className="h-6 w-auto object-contain" />
                      </span>
                    ))}
                  </div>
                ) : (
                  <p className="text-sm font-semibold text-accent mt-2">{inv.host}</p>
                )}

                <p className="flex items-center gap-1.5 text-xs md:text-sm text-text-muted mt-3">
                  <MapPin size={13} className="shrink-0" /> {inv.venue}
                </p>

                <div className="mt-5">
                  <span className="block text-[10px] md:text-[11px] font-semibold uppercase tracking-[0.28em] text-text-muted">Invited as</span>
                  <span className="block text-sm md:text-base font-semibold text-text-heading mt-1">{inv.invitedAs}</span>
                </div>

                <p className="text-sm text-text-body leading-relaxed mt-4">{inv.summary}</p>

                {inv.highlights && inv.highlights.length > 0 && (
                  <ul className="mt-4 space-y-2">
                    {inv.highlights.map((h) => (
                      <li key={h} className="flex items-center gap-3 text-sm font-semibold text-text-heading">
                        <span aria-hidden className="h-px w-5 bg-accent shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>
                )}

                {/* Proof: kept out of the way until someone asks */}
                <div className="mt-5 pt-4 border-t border-border-token/50 flex flex-wrap items-center gap-x-4 gap-y-2">
                  <span className="text-[10px] md:text-[11px] font-semibold uppercase tracking-[0.28em] text-text-muted">Proof of invitation</span>
                  {inv.proof.map((p) => (
                    <button
                      key={p.src}
                      type="button"
                      onClick={() => onOpen({ src: p.src, title: inv.event, subtitle: p.caption })}
                      className="inline-flex items-center gap-1.5 text-xs md:text-sm font-semibold text-text-heading hover:text-accent underline-offset-4 hover:underline transition-colors cursor-pointer"
                    >
                      <MailOpen size={14} className="shrink-0" /> {p.caption}
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
