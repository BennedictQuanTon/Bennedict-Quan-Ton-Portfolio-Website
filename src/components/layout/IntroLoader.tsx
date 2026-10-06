import { useEffect } from 'react';
import { HERO_PORTRAIT, markIntroDone } from '../../lib/intro';

const SESSION_KEY = 'intro-seen';
/** Shortest time the full intro stays up, measured from navigation start */
const FULL_INTRO_MIN_MS = 1500;
/** Longest we hold the page for slow assets before revealing anyway */
const ASSET_TIMEOUT_MS = 2000;
/** Matches the #boot clip-path transition in index.html */
const EXIT_MS = 1000;

/** Resolves when fonts are ready and the hero portrait is decoded (or after a timeout). */
const waitForAssets = () => {
  const fonts = document.fonts ? document.fonts.ready.then(() => undefined) : Promise.resolve();
  const image = new Promise<void>((resolve) => {
    const img = new Image();
    img.sizes = HERO_PORTRAIT.sizes;
    img.srcset = HERO_PORTRAIT.srcSet;
    img.src = HERO_PORTRAIT.src;
    img.decode().then(() => resolve(), () => resolve());
  });
  const timeout = new Promise<void>((resolve) => setTimeout(resolve, ASSET_TIMEOUT_MS));
  return Promise.race([Promise.all([fonts, image]).then(() => undefined), timeout]);
};

/**
 * Controls the opening intro. The intro itself (#boot) is plain HTML/CSS in
 * index.html so it paints before this bundle loads; once fonts and the hero
 * image are ready this lifts it, unlocks scrolling and starts the hero entrance.
 */
export const IntroLoader: React.FC = () => {
  useEffect(() => {
    const root = document.documentElement;
    const boot = document.getElementById('boot');
    if (!boot) {
      root.classList.remove('is-booting');
      markIntroDone();
      return;
    }

    const quick = root.classList.contains('intro-quick');
    const remaining = quick ? 0 : Math.max(0, FULL_INTRO_MIN_MS - performance.now());
    let cancelled = false;
    let removeTimer: ReturnType<typeof setTimeout> | undefined;

    Promise.all([waitForAssets(), new Promise((r) => setTimeout(r, remaining))]).then(() => {
      if (cancelled) return;
      boot.classList.add('boot-exit');
      root.classList.remove('is-booting');
      markIntroDone();
      try {
        sessionStorage.setItem(SESSION_KEY, '1');
      } catch {
        /* storage unavailable: the intro simply plays again next time */
      }
      removeTimer = setTimeout(() => boot.remove(), EXIT_MS + 100);
    });

    return () => {
      cancelled = true;
      if (removeTimer) clearTimeout(removeTimer);
    };
  }, []);

  return null;
};

export default IntroLoader;
