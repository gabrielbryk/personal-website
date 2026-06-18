import Section from "./Section";
import Reveal from "./Reveal";
import { education } from "../data/content";

export default function Education() {
  return (
    <Section id="education" label="Academics" title="Education">
      <div className="flex flex-col">
        {education.map((entry, i) => (
          <Reveal key={`${entry.school}-${entry.degree}`} delay={i * 0.08}>
            <div className="grid gap-2 border-t border-line py-8 md:grid-cols-[1fr_auto] md:items-baseline md:gap-12">
              <div>
                <h3 className="text-xl font-bold tracking-tight md:text-2xl">
                  {entry.degree}
                </h3>
                <span className="eyebrow text-muted">{entry.school}</span>
              </div>
              <p className="text-sm font-semibold tracking-wide text-muted">
                {entry.detail}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
