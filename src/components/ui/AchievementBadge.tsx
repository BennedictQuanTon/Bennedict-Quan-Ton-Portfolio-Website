import React from 'react';
import { Trophy } from 'lucide-react';
import type { Project } from '../../types';

const TONES: Record<NonNullable<Project['achievement']>['tone'], { pill: string; icon: string }> = {
  gold: {
    pill: 'bg-amber-500/15 border-amber-500/35 text-amber-600 dark:text-amber-400',
    icon: 'text-amber-500',
  },
  silver: {
    pill: 'bg-slate-400/15 border-slate-400/40 text-slate-600 dark:text-slate-300',
    icon: 'text-slate-400',
  },
  emerald: {
    pill: 'bg-emerald-500/15 border-emerald-500/35 text-emerald-600 dark:text-emerald-400',
    icon: 'text-emerald-500',
  },
};

interface AchievementBadgeProps {
  achievement: NonNullable<Project['achievement']>;
  /** "card" is the large pill beside a card title; "tag" is the small uppercase chip in the details view */
  variant?: 'card' | 'tag';
}

export const AchievementBadge: React.FC<AchievementBadgeProps> = ({ achievement, variant = 'card' }) => {
  const tone = TONES[achievement.tone];

  if (variant === 'tag') {
    return (
      <span className={`whitespace-nowrap text-[11px] md:text-xs uppercase font-extrabold tracking-widest border px-3 py-1 rounded-full ${tone.pill}`}>
        {achievement.label}
      </span>
    );
  }

  return (
    <div className={`inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full border text-sm md:text-base whitespace-nowrap font-bold font-display tracking-wide shadow-xs backdrop-blur-md ${tone.pill}`}>
      <Trophy size={16} className={`shrink-0 ${tone.icon}`} />
      <span>{achievement.label}</span>
    </div>
  );
};

export default AchievementBadge;
