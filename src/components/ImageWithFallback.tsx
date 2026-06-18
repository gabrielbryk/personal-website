import { useState } from "react";

type ImageWithFallbackProps = {
  src: string;
  alt: string;
  className?: string;
  /** Class names applied to the placeholder shown when the image fails. */
  fallbackClassName?: string;
  /** Content rendered inside the placeholder (e.g. a label). */
  fallback: React.ReactNode;
};

// Declarative image with a graceful fallback: on load error we swap to a
// placeholder via React state instead of imperatively poking the DOM.
export default function ImageWithFallback({
  src,
  alt,
  className,
  fallbackClassName,
  fallback,
}: ImageWithFallbackProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return <div className={fallbackClassName}>{fallback}</div>;
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setFailed(true)}
    />
  );
}
