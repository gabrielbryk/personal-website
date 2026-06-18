import type { ReactNode } from "react";
import Reveal from "./Reveal";

type SectionProps = {
  id: string;
  label: string; // wide-tracked eyebrow, e.g. "BIOGRAPHY"
  title: string; // large display heading, e.g. "What I Do"
  children: ReactNode;
};

// Shared section shell: a numbered/labeled eyebrow + big heading, then content.
export default function Section({ id, label, title, children }: SectionProps) {
  return (
    <section
      id={id}
      className="border-t border-line px-6 py-24 md:px-12 md:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="mb-12 flex flex-col gap-3 md:mb-16">
            <span className="eyebrow text-muted">{label}</span>
            <h2 className="text-4xl font-black tracking-tight md:text-6xl">
              {title}
            </h2>
          </div>
        </Reveal>
        {children}
      </div>
    </section>
  );
}
