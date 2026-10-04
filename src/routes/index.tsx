import React, { Suspense, lazy, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import { PageWrapper } from '../components/layout/PageWrapper';
import { useIntroDone } from '../lib/intro';
import Home from '../pages/Home';

// Secondary pages are split into their own chunks; they are prefetched as soon
// as the intro finishes, so navigating to them is instant behind the curtain.
const loadVault = () => import('../pages/Vault');
const loadJourney = () => import('../pages/Journey');
const loadEducation = () => import('../pages/Education');
const Vault = lazy(loadVault);
const Journey = lazy(loadJourney);
const Education = lazy(loadEducation);

const page = (label: string, element: React.ReactNode) => (
  <PageWrapper label={label}>
    <Suspense fallback={null}>{element}</Suspense>
  </PageWrapper>
);

export const AnimatedRoutes: React.FC = () => {
  const location = useLocation();
  const introDone = useIntroDone();

  useEffect(() => {
    if (!introDone) return;
    const prefetch = () => {
      loadVault();
      loadJourney();
      loadEducation();
    };
    if ('requestIdleCallback' in window) {
      const id = window.requestIdleCallback(prefetch, { timeout: 2500 });
      return () => window.cancelIdleCallback(id);
    }
    const id = setTimeout(prefetch, 1200);
    return () => clearTimeout(id);
  }, [introDone]);

  return (
    // Jump to the top while the curtain fully covers the screen
    <AnimatePresence mode="wait" onExitComplete={() => window.scrollTo({ top: 0, left: 0, behavior: 'instant' })}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={page('Home', <Home />)} />
        <Route path="/projects" element={page('Projects', <Vault />)} />
        <Route path="/journey" element={page('Journey', <Journey />)} />
        <Route path="/credentials" element={page('Credentials', <Education />)} />
        {/* Fallback */}
        <Route path="*" element={page('Home', <Home />)} />
      </Routes>
    </AnimatePresence>
  );
};
