import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { EASE_IN_OUT_QUART, EASE_OUT_EXPO, prefersReducedMotion } from '../../lib/intro';

// The very first page is revealed by the IntroLoader, so it skips the curtain.
let isInitialPage = true;

interface PageWrapperProps {
  children: React.ReactNode;
  /** Page name shown on the transition curtain */
  label: string;
}

/**
 * Route transition: a curtain wipes up over the old page, then lifts off the
 * new one while its name fades out — the page content settles in underneath.
 * The wrapper itself is never transformed, so the fixed curtain stays pinned
 * to the viewport.
 */
export const PageWrapper: React.FC<PageWrapperProps> = ({ children, label }) => {
  const [firstPage] = useState(() => isInitialPage);
  useEffect(() => {
    isInitialPage = false;
  }, []);
  const reduced = prefersReducedMotion();

  if (reduced) {
    return (
      <motion.div
        initial={firstPage ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        className="w-full flex flex-col min-h-screen"
      >
        {children}
      </motion.div>
    );
  }

  return (
    <div className="w-full flex flex-col min-h-screen">
      <motion.div
        className="w-full flex flex-col flex-1"
        initial={firstPage ? false : { opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.9, delay: 0.3, ease: EASE_OUT_EXPO } }}
        exit={{ opacity: 0, y: -24, transition: { duration: 0.45, ease: EASE_IN_OUT_QUART } }}
      >
        {children}
      </motion.div>

      {/* Transition curtain */}
      <motion.div
        aria-hidden="true"
        className="fixed inset-0 z-[90] bg-text-heading pointer-events-none flex items-center justify-center"
        initial={firstPage ? { scaleY: 0, originY: 0 } : { scaleY: 1, originY: 0 }}
        animate={{ scaleY: 0, originY: 0, transition: { scaleY: { duration: 0.7, delay: 0.15, ease: EASE_IN_OUT_QUART }, originY: { duration: 0 } } }}
        exit={{ scaleY: 1, originY: 1, transition: { scaleY: { duration: 0.5, ease: EASE_IN_OUT_QUART }, originY: { duration: 0 } } }}
      >
        <motion.span
          className="font-display italic font-bold text-4xl md:text-6xl text-bg"
          initial={firstPage ? { opacity: 0 } : { opacity: 1, y: 0 }}
          animate={{ opacity: 0, y: -24, transition: { duration: 0.4, delay: 0.1, ease: EASE_IN_OUT_QUART } }}
          exit={{ opacity: 0 }}
        >
          {label}
        </motion.span>
      </motion.div>
    </div>
  );
};
