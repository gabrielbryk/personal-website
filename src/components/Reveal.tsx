import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  /** Seconds to delay the transition (matches the old Motion `delay` prop). */
  delay?: number;
  className?: string;
};

// Small once-only IntersectionObserver hook: flips to true the first time the
// element scrolls into view, then disconnects.
function useInView<T extends Element>(rootMargin = "-80px") {
  const ref = useRef<T>(null);
  // Always start hidden so SSR and the client's first render agree (clean
  // hydration). The effect runs only on the client, where it either observes
  // or — lacking IntersectionObserver — reveals immediately.
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      // Defer so this is a scheduled callback, not a sync effect-body update.
      const id = setTimeout(() => setInView(true), 0);
      return () => clearTimeout(id);
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        // setState here is a subscription callback (allowed), not a sync
        // effect-body update.
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { rootMargin },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [rootMargin]);

  return { ref, inView };
}

// Fade + rise on scroll into view. Used to stagger content across sections.
// The hidden initial state lives in CSS (.reveal) so SSR and client markup
// match; reduced-motion is handled by a media query in index.css.
export default function Reveal({ children, delay = 0, className }: RevealProps) {
  const { ref, inView } = useInView<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={`reveal${inView ? " is-visible" : ""}${
        className ? ` ${className}` : ""
      }`}
      style={delay ? { transitionDelay: `${delay}s` } : undefined}
    >
      {children}
    </div>
  );
}
