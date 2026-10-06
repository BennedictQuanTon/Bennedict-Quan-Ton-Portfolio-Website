import React from 'react';
import { Sparkles } from 'lucide-react';

/** Card heading for personal projects, in place of a competition name: italic title between sparks and hairlines. */
export const PersonalProjectLabel: React.FC = () => (
  <span className="inline-flex items-center gap-2.5 md:gap-3 text-accent">
    <span aria-hidden className="h-px w-6 md:w-10 bg-gradient-to-r from-transparent to-current opacity-50" />
    <Sparkles size={13} aria-hidden className="shrink-0" />
    <span className="font-display italic font-semibold text-base sm:text-xl md:text-2xl tracking-wide">Personal Project</span>
    <Sparkles size={13} aria-hidden className="shrink-0" />
    <span aria-hidden className="h-px w-6 md:w-10 bg-gradient-to-l from-transparent to-current opacity-50" />
  </span>
);

export default PersonalProjectLabel;
