import { useSyncExternalStore } from 'react';

/*
 * Tiny global flag: has the opening intro finished revealing the page?
 * The hero waits for it so its entrance plays as the intro curtain lifts,
 * and pages mounted later (after navigation) see `true` straight away.
 */
let introDone = false;
const listeners = new Set<() => void>();

export const markIntroDone = () => {
  if (introDone) return;
  introDone = true;
  listeners.forEach((notify) => notify());
};

const subscribe = (notify: () => void) => {
  listeners.add(notify);
  return () => listeners.delete(notify);
};

export const useIntroDone = () => useSyncExternalStore(subscribe, () => introDone, () => introDone);

/**
 * Hero portrait in three widths. The hero, the intro (which waits for it) and the
 * preload in index.html use the same srcset and sizes, so the browser fetches one file.
 */
export const HERO_PORTRAIT = {
  src: '/assets/images/portrait/NewImage-1080.webp',
  srcSet:
    '/assets/images/portrait/NewImage-640.webp 640w, /assets/images/portrait/NewImage-1080.webp 1080w, /assets/images/portrait/NewImage-1448.webp 1448w',
  sizes: '(min-width: 768px) 65vw, 100vw',
} as const;

/** Shared motion curves */
export const EASE_OUT_EXPO = [0.16, 1, 0.3, 1] as const;
export const EASE_IN_OUT_QUART = [0.76, 0, 0.24, 1] as const;

export const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
