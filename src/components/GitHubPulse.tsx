import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";
import { socials } from "../data/content";

// Placeholder contribution heatmap. Deterministic so the layout is stable.
// To show real data, fetch from the GitHub API (or a contributions endpoint)
// and replace `weeks` with live counts. 53 weeks x 7 days.
const LEVELS = [
  "bg-black/[0.04]",
  "bg-accent/30",
  "bg-accent/55",
  "bg-accent/80",
  "bg-accent",
];

const weeks = Array.from({ length: 53 }, (_, w) =>
  Array.from({ length: 7 }, (_, d) => {
    // cheap deterministic pseudo-noise — no randomness needed
    const n = (w * 7 + d) * 1103515245 + 12345;
    return Math.abs(n >> 16) % 5;
  }),
);

const stats = [
  { label: "FOLLOWERS", value: "—" },
  { label: "COMMITS", value: "—" },
  { label: "REPOS", value: "—" },
];

export default function GitHubPulse() {
  return (
    <section className="border-t border-line px-6 py-24 md:px-12 md:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
            <div className="flex flex-col gap-3">
              <span className="eyebrow text-muted">Activity</span>
              <h2 className="text-4xl font-black tracking-tight md:text-6xl">
                GitHub Pulse
              </h2>
            </div>
            <a
              href={socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1 text-sm font-semibold tracking-wide"
            >
              PROFILE
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="grid grid-cols-3 gap-4">
            {stats.map((s) => (
              <div key={s.label} className="rounded-lg border border-line p-5">
                <span className="eyebrow text-muted">{s.label}</span>
                <p className="mt-2 text-3xl font-black tracking-tight">{s.value}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-8 overflow-x-auto rounded-lg border border-line p-5">
            <div className="flex gap-1">
              {weeks.map((week, w) => (
                <div key={w} className="flex flex-col gap-1">
                  {week.map((level, d) => (
                    <span
                      key={d}
                      className={`h-3 w-3 rounded-sm ${LEVELS[level]}`}
                    />
                  ))}
                </div>
              ))}
            </div>
            <div className="mt-4 flex items-center gap-2 text-xs text-muted">
              <span>LESS</span>
              {LEVELS.map((c, i) => (
                <span key={i} className={`h-3 w-3 rounded-sm ${c}`} />
              ))}
              <span>MORE</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
