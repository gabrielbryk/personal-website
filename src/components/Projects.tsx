import { useMemo, useState } from "react";
import { Github, ArrowUpRight } from "lucide-react";
import Section from "./Section";
import Reveal from "./Reveal";
import ImageWithFallback from "./ImageWithFallback";
import { projects } from "../data/content";

const filters = ["All", "Product", "Tooling", "Infra"] as const;
type Filter = (typeof filters)[number];

export default function Projects() {
  const [filter, setFilter] = useState<Filter>("All");

  const visible = useMemo(
    () => projects.filter((p) => filter === "All" || p.category === filter),
    [filter],
  );

  return (
    <Section id="projects" label="Portfolio" title="Featured Works">
      <Reveal>
        <div className="mb-10 flex flex-wrap items-center justify-between gap-6">
          <p className="max-w-xl text-sm leading-relaxed text-muted">
            A flagship product, the developer tools I build on the side, and the
            infrastructure that keeps it all running.
          </p>
          <div className="flex gap-2">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`rounded-full px-4 py-1.5 text-xs font-semibold tracking-wide transition-colors ${
                  filter === f
                    ? "bg-ink text-paper"
                    : "border border-line text-muted hover:text-ink"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
      </Reveal>

      <div className="grid gap-6 sm:grid-cols-2">
        {visible.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.06}>
            <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-line transition-colors hover:border-ink">
              <div className="relative aspect-[16/10] overflow-hidden bg-black/[0.03]">
                <ImageWithFallback
                  src={p.image}
                  alt={p.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  fallbackClassName="flex h-full w-full items-center justify-center text-xs tracking-widest text-muted"
                  fallback={p.image}
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <span className="eyebrow text-muted">{p.tag}</span>
                <h3 className="mt-2 text-xl font-bold">{p.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                  {p.description}
                </p>
                <div className="mt-5 flex items-center gap-4">
                  {p.repoUrl && (
                    <a
                      href={p.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${p.title} source`}
                      className="text-muted transition-colors hover:text-ink"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                  )}
                  {p.liveUrl && (
                    <a
                      href={p.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${p.title} live`}
                      className="text-muted transition-colors hover:text-ink"
                    >
                      <ArrowUpRight className="h-5 w-5" />
                    </a>
                  )}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
