import { ArrowUpRight } from "lucide-react";
import Section from "./Section";
import Reveal from "./Reveal";
import { about, profile } from "../data/content";

export default function About() {
  return (
    <Section id="about" label="Biography" title="What I Do">
      <div className="grid gap-12 md:grid-cols-[320px_1fr] md:gap-16">
        <Reveal>
          <div className="relative">
            <img
              src={about.photo}
              alt={`${profile.firstName} ${profile.lastName}`}
              className="aspect-[4/5] w-full rounded-lg border border-line object-cover"
              onError={(e) => {
                // graceful placeholder until you add /portrait.webp
                e.currentTarget.style.display = "none";
                e.currentTarget.nextElementSibling?.classList.remove("hidden");
              }}
            />
            <div className="hidden aspect-[4/5] w-full items-center justify-center rounded-lg border border-dashed border-line bg-black/[0.02] text-xs tracking-widest text-muted">
              ADD /portrait.webp
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="flex flex-col">
            <span className="eyebrow text-muted">{about.badge}</span>
            <h3 className="mt-4 text-2xl font-black leading-tight tracking-tight md:text-4xl">
              {about.headline}
            </h3>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink/80">
              {about.body}
            </p>

            <div className="mt-10 grid grid-cols-2 gap-6 border-t border-line pt-6">
              <div>
                <span className="eyebrow text-muted">Location</span>
                <p className="mt-1 font-semibold">{profile.location}</p>
              </div>
              <div>
                <span className="eyebrow text-muted">Status</span>
                <p className="mt-1 font-semibold">{profile.status}</p>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {about.topSkills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-line px-3 py-1 text-xs font-medium tracking-wide text-ink/70"
                >
                  {skill}
                </span>
              ))}
            </div>

            <a
              href="#connect"
              className="group mt-10 inline-flex w-fit items-center gap-2 text-sm font-semibold tracking-wide"
            >
              GET IN TOUCH
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
