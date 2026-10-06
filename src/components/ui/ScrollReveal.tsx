import React from 'react';
import { motion } from 'framer-motion';

// Evaluated once: phones get a lighter animation (no blur filter, vertical
// motion only) because animated filters are expensive on mobile GPUs, and
// users who ask for reduced motion get a plain fade.
const prefersReducedMotion =
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const isSmallScreen =
  typeof window !== 'undefined' && window.matchMedia('(max-width: 767px)').matches;

interface ScrollRevealProps {
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  duration?: number;
  className?: string;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  delay = 0,
  direction = 'up',
  duration = 0.5,
  className = '',
}) => {
  const getDirections = () => {
    switch (direction) {
      case 'up':
        return { y: 30, x: 0 };
      case 'down':
        return { y: -30, x: 0 };
      case 'left':
        return { x: 30, y: 0 };
      case 'right':
        return { x: -30, y: 0 };
      default:
        return { y: 30, x: 0 };
    }
  };

  const offset = prefersReducedMotion
    ? { x: 0, y: 0 }
    : isSmallScreen
      ? { x: 0, y: direction === 'down' ? -16 : 16 }
      : getDirections();
  const blur = isSmallScreen || prefersReducedMotion ? 'none' : 'blur(6px)';
  const blurEnd = isSmallScreen || prefersReducedMotion ? 'none' : 'blur(0px)';

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: offset.x,
        y: offset.y,
        filter: blur,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
        filter: blurEnd,
      }}
      // Phones start the reveal just before the block scrolls in, so a quick swipe
      // never lands on content that is still invisible.
      viewport={{ once: true, margin: isSmallScreen ? '0px 0px 160px 0px' : '-50px' }}
      transition={{
        duration: isSmallScreen ? Math.min(duration, 0.4) : duration,
        delay: isSmallScreen ? Math.min(delay, 0.1) : delay,
        ease: [0.25, 0.1, 0.25, 1.0], // smooth cubic-bezier
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
export default ScrollReveal;
