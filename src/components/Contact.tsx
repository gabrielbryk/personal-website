import { ArrowRight } from "lucide-react";
import Reveal from "./Reveal";
import { profile, contactLinks } from "../data/content";

export default function Contact() {
  return (
    <section id="connect" className="border-t border-line px-6 py-24 md:px-12 md:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="mb-16 flex flex-col gap-3">
            <span className="eyebrow text-muted">Available for Work</span>
            <h2 className="text-5xl font-black tracking-tighter md:text-8xl">
              Get In Touch
            </h2>
          </div>
        </Reveal>

        <div className="flex flex-col">
          {contactLinks.map((link, i) => (
            <Reveal key={link.label} delay={i * 0.06}>
              <a
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="group grid grid-cols-[40px_1fr_auto] items-center gap-4 border-t border-line py-7 transition-colors hover:bg-black/[0.02] md:gap-8"
              >
                <span className="text-sm font-bold text-muted">{link.index}</span>
                <span className="text-2xl font-black tracking-tight md:text-4xl">
                  {link.label}
                </span>
                <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-muted transition-colors group-hover:text-ink">
                  {link.action}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-line pt-8">
            <span className="eyebrow text-muted">Based in {profile.location}</span>
            <a
              href={`mailto:${profile.email}`}
              className="text-sm font-semibold tracking-wide uppercase hover:underline"
            >
              {profile.email}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
