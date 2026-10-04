import React from 'react';

interface CertificateFrameProps {
  src: string;
  alt: string;
  /** Opens the certificate in the lightbox; omit for a static frame */
  onOpen?: () => void;
  className?: string;
}

/** A certificate mounted like a gallery print: matte, double rule and gilt corners. */
export const CertificateFrame: React.FC<CertificateFrameProps> = ({ src, alt, onOpen, className = '' }) => {
  const corners = (
    <>
      <span className="cert-corner tl" />
      <span className="cert-corner tr" />
      <span className="cert-corner bl" />
      <span className="cert-corner br" />
    </>
  );

  if (onOpen) {
    return (
      <button
        type="button"
        onClick={onOpen}
        className={`cert-frame is-interactive block w-full text-left ${className}`}
        aria-label={`View ${alt}`}
      >
        <img src={src} alt={alt} loading="lazy" />
        {corners}
      </button>
    );
  }

  return (
    <div className={`cert-frame block ${className}`}>
      <img src={src} alt={alt} loading="lazy" />
      {corners}
    </div>
  );
};

export default CertificateFrame;
