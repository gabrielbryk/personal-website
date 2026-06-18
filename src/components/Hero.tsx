import { ArrowUpRight } from "lucide-react";
import { profile, socials } from "../data/content";

const socialLinks = [
  { label: "LINKEDIN", href: socials.linkedin },
  { label: "GITHUB", href: socials.github },
  { label: "WEBSITE", href: socials.website },
];

export default function Hero() {
  // Mount entrance via the `.hero-enter` CSS keyframe; each element is staggered
  // with an inline animation-delay. Reduced motion is handled in index.css.
  return (
    <section className="relative flex min-h-screen flex-col justify-center px-6 pt-28 pb-16 md:px-12">
      <div className="mx-auto w-full max-w-6xl">
        <div className="hero-enter mb-8 flex items-center gap-3">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          <span className="eyebrow text-muted">{profile.availability}</span>
        </div>

        <h1
          className="hero-enter text-6xl font-black leading-[0.9] tracking-tighter sm:text-7xl md:text-8xl lg:text-9xl"
          style={{ animationDelay: "0.05s" }}
        >
          {profile.firstName}
          <br />
          {profile.lastName}
        </h1>

        <h2
          className="hero-enter mt-6 text-lg font-bold uppercase tracking-[0.3em] text-muted md:text-xl"
          style={{ animationDelay: "0.15s" }}
        >
          {profile.role}
        </h2>

        <p
          className="hero-enter mt-8 max-w-xl text-base leading-relaxed text-ink/80 md:text-lg"
          style={{ animationDelay: "0.25s" }}
        >
          {profile.tagline}
        </p>

        <div
          className="hero-enter mt-10 flex flex-wrap items-center gap-4"
          style={{ animationDelay: "0.35s" }}
        >
          <a
            href={`mailto:${profile.email}`}
            className="group inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3 text-sm font-semibold tracking-wide text-paper transition-transform hover:-translate-y-0.5"
          >
            COLLABORATE
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <a
            href={socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-ink px-7 py-3 text-sm font-semibold tracking-wide transition-colors hover:bg-ink hover:text-paper"
          >
            GITHUB
          </a>
        </div>

        <div
          className="hero-enter mt-14 flex flex-wrap gap-6"
          style={{ animationDelay: "0.5s" }}
        >
          {socialLinks.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-medium tracking-widest text-muted transition-colors hover:text-ink"
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
