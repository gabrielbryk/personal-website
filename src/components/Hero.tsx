import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { profile, socials } from "../data/content";

const socialLinks = [
  { label: "LINKEDIN", href: socials.linkedin },
  { label: "GITHUB", href: socials.github },
  { label: "WEBSITE", href: socials.website },
];

export default function Hero() {
  const reduce = useReducedMotion();
  // Skip the entrance offset when the user prefers reduced motion.
  return (
    <section className="relative flex min-h-screen flex-col justify-center px-6 pt-28 pb-16 md:px-12">
      <div className="mx-auto w-full max-w-6xl">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 flex items-center gap-3"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          <span className="eyebrow text-muted">{profile.availability}</span>
        </motion.div>

        <motion.h1
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="text-6xl font-black leading-[0.9] tracking-tighter sm:text-7xl md:text-8xl lg:text-9xl"
        >
          {profile.firstName}
          <br />
          {profile.lastName}
        </motion.h1>

        <motion.h2
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-6 text-lg font-bold uppercase tracking-[0.3em] text-muted md:text-xl"
        >
          {profile.role}
        </motion.h2>

        <motion.p
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-8 max-w-xl text-base leading-relaxed text-ink/80 md:text-lg"
        >
          {profile.tagline}
        </motion.p>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-10 flex flex-wrap items-center gap-4"
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
        </motion.div>

        <motion.div
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-14 flex flex-wrap gap-6"
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
        </motion.div>
      </div>
    </section>
  );
}
