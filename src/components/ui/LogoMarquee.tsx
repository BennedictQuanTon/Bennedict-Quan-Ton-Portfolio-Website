import React from 'react';
import { organizers, type Organizer } from '../../data/organizers';

/** Deterministic split: alternate logos go to each row, so the two lines never repeat each other. */
const rows: [Organizer[], Organizer[]] = [
  organizers.filter((_, i) => i % 2 === 0),
  organizers.filter((_, i) => i % 2 === 1),
];

/**
 * Two rows of organiser logos drifting in opposite directions, with masked edges.
 * Each mark has its own tuned height so all of them read at the same weight, in one grey tone (inverted
 * in dark mode). Each row is rendered four times and looped at -50%, so even a short list
 * never shows a gap; hovering a row pauses it. Copies after the first are aria-hidden.
 */
export const LogoMarquee: React.FC<{ label: string }> = ({ label }) => (
  <div aria-label={label} className="flex flex-col gap-7 md:gap-9">
    {rows.map((row, rowIndex) => (
      <div key={rowIndex} className="logo-marquee-row logo-marquee-fade relative overflow-hidden">
        <div className={`logo-marquee flex w-max items-center ${rowIndex === 1 ? 'logo-marquee-reverse' : ''}`}>
          {[0, 1, 2, 3].map((copy) => (
            <ul
              key={copy}
              aria-hidden={copy > 0 || undefined}
              className="flex items-center gap-12 md:gap-16 pr-12 md:pr-16"
            >
              {row.map((org) => (
                <li key={org.name} className="flex h-12 items-center justify-center">
                  <img
                    src={org.logo}
                    alt={copy === 0 ? org.name : ''}
                    loading="lazy"
                    style={{ height: `calc(${org.height}px * var(--logo-scale))` }}
                    className="w-auto max-w-[170px] md:max-w-[210px] object-contain grayscale opacity-55 hover:opacity-100 dark:invert transition-opacity duration-300"
                  />
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    ))}
  </div>
);

export default LogoMarquee;
