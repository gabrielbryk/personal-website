import Section from "./Section";
import Reveal from "./Reveal";
import { skills } from "../data/content";

export default function Skills() {
  return (
    <Section id="skills" label="Inventory" title="Tech Stack">
      <div className="flex flex-wrap gap-3">
        {skills.map((skill, i) => (
          <Reveal key={skill} delay={i * 0.03}>
            <span className="inline-block rounded-lg border border-line px-5 py-3 text-sm font-medium transition-colors hover:border-ink hover:bg-ink hover:text-paper">
              {skill}
            </span>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
