import React, { useEffect, useRef } from 'react';
import type { Project } from '../../types';

interface ProjectMediaProps {
  media: Project['hoverMedia'];
  alt: string;
  className?: string;
}

/**
 * Project preview: an image, or a muted looping video that only downloads
 * and plays while it is on screen, so off-screen cards cost nothing.
 */
export const ProjectMedia: React.FC<ProjectMediaProps> = ({ media, alt, className = '' }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const style = {
    objectFit: media.objectFit || 'cover',
    objectPosition: media.objectPosition || 'center',
  } as const;

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.25 }
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, [media.type]);

  if (media.type === 'video') {
    return (
      <video
        ref={videoRef}
        poster={media.poster}
        muted
        loop
        playsInline
        preload="none"
        aria-label={alt}
        className={className}
        style={style}
      >
        {media.webmSrc && <source src={media.webmSrc} type="video/webm" />}
        <source src={media.src} type="video/mp4" />
      </video>
    );
  }

  return <img src={media.src} alt={alt} loading="lazy" className={className} style={style} />;
};

export default ProjectMedia;
