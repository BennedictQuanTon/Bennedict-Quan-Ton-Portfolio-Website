import React, { useEffect, useId, useRef, useState } from 'react';
import { Info } from 'lucide-react';

/**
 * Small "i" button next to the logo row heading. It explains what the logos mean: hover or focus
 * shows the note, a tap keeps it open, and Escape or a tap elsewhere closes it.
 */
export const LogoNotice: React.FC = () => {
  const [hovered, setHovered] = useState(false);
  const [pinned, setPinned] = useState(false);
  const rootRef = useRef<HTMLSpanElement>(null);
  const noteId = useId();
  const open = hovered || pinned;

  useEffect(() => {
    if (!open) return;
    const close = () => {
      setHovered(false);
      setPinned(false);
    };
    const onPointerDown = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) close();
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') close();
    };
    document.addEventListener('pointerdown', onPointerDown);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('pointerdown', onPointerDown);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [open]);

  return (
    <span
      ref={rootRef}
      className="inline-flex"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setHovered(false);
      }}
    >
      <button
        type="button"
        aria-label="What these logos mean"
        aria-expanded={open}
        aria-controls={noteId}
        onClick={() => {
          // A second tap has to close it, even though touch and focus still count as hovering.
          if (pinned) setHovered(false);
          setPinned(!pinned);
        }}
        className="flex h-6 w-6 cursor-pointer items-center justify-center rounded-full text-text-muted transition-colors hover:text-text-heading focus-visible:text-text-heading"
      >
        <Info size={14} aria-hidden />
      </button>
      {/* Positioned against the heading row, so it stays centred on narrow screens. The top padding keeps the hover alive on the way down. */}
      <span
        id={noteId}
        role="note"
        hidden={!open}
        className="absolute left-1/2 top-full z-30 w-[min(20rem,calc(100vw-2rem))] -translate-x-1/2 pt-2"
      >
        <span className="block rounded-xl border border-border-token bg-bg p-4 text-left text-xs font-normal normal-case leading-relaxed tracking-normal whitespace-normal text-text-muted shadow-lg">
          These logos identify the organisers, sponsors and hosts of competitions and events I took part in. They belong to their owners and are shown for identification only. It does not mean any of them sponsors, endorses or partners with me or this website. To request removal, email{' '}
          <a href="mailto:tonlongquanvn@gmail.com" className="underline underline-offset-2 hover:text-text-heading">
            tonlongquanvn@gmail.com
          </a>
          .
        </span>
      </span>
    </span>
  );
};
