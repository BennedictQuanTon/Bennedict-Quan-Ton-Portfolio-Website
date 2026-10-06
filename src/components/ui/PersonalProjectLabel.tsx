import React from 'react';

/** Card heading for personal projects, in place of a competition name: an italic title between hairlines. */
export const PersonalProjectLabel: React.FC = () => (
  <span className="inline-flex items-center gap-3 md:gap-4 text-accent">
    <span aria-hidden className="h-px w-8 md:w-12 bg-gradient-to-r from-transparent to-current opacity-50" />
    <span className="font-display italic font-semibold text-base sm:text-xl md:text-2xl tracking-wide">Personal Project</span>
    <span aria-hidden className="h-px w-8 md:w-12 bg-gradient-to-l from-transparent to-current opacity-50" />
  </span>
);

export default PersonalProjectLabel;
