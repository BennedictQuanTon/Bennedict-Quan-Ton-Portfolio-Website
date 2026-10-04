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

/** Shared motion curves */
export const EASE_OUT_EXPO = [0.16, 1, 0.3, 1] as const;
export const EASE_IN_OUT_QUART = [0.76, 0, 0.24, 1] as const;

export const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
