import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink } from 'lucide-react';

export interface LightboxItem {
  src: string;
  title: string;
  subtitle?: string;
  /** Optional verification or source link */
  href?: string;
  hrefLabel?: string;
}

interface LightboxProps {
  item: LightboxItem | null;
  onClose: () => void;
}

/** Full-screen viewer for a certificate or poster. Esc or a backdrop click closes it. */
export const Lightbox: React.FC<LightboxProps> = ({ item, onClose }) => {
  useEffect(() => {
    if (!item) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.stopPropagation();
        onClose();
      }
    };
    // Capture phase so Esc closes the lightbox before any modal underneath
    window.addEventListener('keydown', onKey, true);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey, true);
      document.body.style.overflow = prevOverflow;
    };
  }, [item, onClose]);

  return (
    <AnimatePresence>
      {item && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[70] flex flex-col items-center justify-center gap-5 px-4 pt-[calc(env(safe-area-inset-top)+4rem)] pb-[calc(env(safe-area-inset-bottom)+1.5rem)] md:p-10 bg-bg/90 backdrop-blur-xl"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={item.title}
        >
          <button
            type="button"
            onClick={onClose}
            className="absolute top-[max(1rem,env(safe-area-inset-top))] right-4 md:top-6 md:right-6 p-2 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full border border-border-token text-text-muted hover:text-text-heading hover:bg-surface-2 transition-colors"
            aria-label="Close"
          >
            <X size={20} />
          </button>

          <motion.figure
            initial={{ scale: 0.96, y: 12 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.96, y: 12 }}
            transition={{ type: 'spring', damping: 26, stiffness: 220 }}
            className="cert-frame max-w-[min(1100px,100%)]"
            onClick={(e) => e.stopPropagation()}
          >
            <img src={item.src} alt={item.title} className="max-h-[68svh] md:max-h-[72vh] mx-auto" style={{ width: 'auto', maxWidth: '100%', height: 'auto' }} />
            <span className="cert-corner tl" />
            <span className="cert-corner tr" />
            <span className="cert-corner bl" />
            <span className="cert-corner br" />
          </motion.figure>

          <div className="text-center space-y-1.5 max-w-2xl" onClick={(e) => e.stopPropagation()}>
            <p className="font-display text-lg md:text-2xl text-text-heading leading-snug">{item.title}</p>
            {item.subtitle && (
              <p className="text-xs md:text-sm font-medium text-text-muted">{item.subtitle}</p>
            )}
            {item.href && (
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 pt-2 text-xs font-semibold text-text-muted hover:text-text-heading transition-colors"
              >
                {item.hrefLabel ?? 'Verify credential'} <ExternalLink size={12} />
              </a>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Lightbox;
