import React from 'react';

interface CertificateFrameProps {
  src: string;
  alt: string;
  /** Opens the certificate in the lightbox; omit for a static frame */
  onOpen?: () => void;
  className?: string;
  /** Fixed aspect box (e.g. "aspect-[4/3]") so frames in a row line up; the image is contained inside */
  aspect?: string;
}

/** A certificate mounted like a gallery print: matte, double rule and gilt corners. */
export const CertificateFrame: React.FC<CertificateFrameProps> = ({ src, alt, onOpen, className = '', aspect }) => {
  const image = aspect ? (
    <span className={`block ${aspect}`}>
      <img src={src} alt={alt} loading="lazy" className="!w-full !h-full object-contain" />
    </span>
  ) : (
    <img src={src} alt={alt} loading="lazy" />
  );

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
        {image}
        {corners}
      </button>
    );
  }

  return (
    <div className={`cert-frame block ${className}`}>
      {image}
      {corners}
    </div>
  );
};

export default CertificateFrame;
