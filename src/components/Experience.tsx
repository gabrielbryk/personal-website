import Section from "./Section";
import Reveal from "./Reveal";
import { experience } from "../data/content";

export default function Experience() {
  return (
    <Section id="experience" label="Experience" title="Work & Impact">
      <div className="flex flex-col">
        {experience.map((job, i) => (
          <Reveal key={`${job.company}-${i}`} delay={i * 0.08}>
            <div className="grid gap-6 border-t border-line py-10 md:grid-cols-[220px_1fr] md:gap-12">
              <div className="flex flex-col gap-4">
                <div>
                  <span className="eyebrow text-muted">Duration</span>
                  <p className="mt-1 text-sm font-semibold">{job.duration}</p>
                </div>
                <div>
                  <span className="eyebrow text-muted">Location</span>
                  <p className="mt-1 text-sm font-semibold">{job.location}</p>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-black tracking-tight">
                  {job.company}
                </h3>
                <span className="eyebrow text-muted">{job.title}</span>
                <ul className="mt-5 space-y-3">
                  {job.points.map((point) => (
                    <li key={point} className="flex gap-3 text-sm leading-relaxed text-ink/80">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-ink" />
                      {point}
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-xs tracking-widest text-muted">
                  TOOLS : <span className="text-ink/70">{job.tools}</span>
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
