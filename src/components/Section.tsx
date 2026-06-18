import type { ReactNode } from "react";
import Reveal from "./Reveal";

type SectionProps = {
  id: string;
  label: string; // wide-tracked eyebrow, e.g. "BIOGRAPHY"
  title: string; // large display heading, e.g. "What I Do"
  children: ReactNode;
  /**
   * Heading type scale. "default" matches most sections; "display" is the
   * larger, tighter scale used by the Contact ("Get In Touch") section.
   */
  size?: "default" | "display";
  /** Optional node rendered to the right of the heading (e.g. a link). */
  headerAside?: ReactNode;
};

const HEADING_SIZES = {
  default: "text-4xl font-black tracking-tight md:text-6xl",
  display: "text-5xl font-black tracking-tighter md:text-8xl",
} as const;

// Shared section shell: a numbered/labeled eyebrow + big heading, then content.
export default function Section({
  id,
  label,
  title,
  children,
  size = "default",
  headerAside,
}: SectionProps) {
  return (
    <section
      id={id}
      className="border-t border-line px-6 py-24 md:px-12 md:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="mb-12 flex flex-wrap items-end justify-between gap-6 md:mb-16">
            <div className="flex flex-col gap-3">
              <span className="eyebrow text-muted">{label}</span>
              <h2 className={HEADING_SIZES[size]}>{title}</h2>
            </div>
            {headerAside}
          </div>
        </Reveal>
        {children}
      </div>
    </section>
  );
}
