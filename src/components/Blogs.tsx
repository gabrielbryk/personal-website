import { ArrowUpRight } from "lucide-react";
import Section from "./Section";
import Reveal from "./Reveal";
import { blogs } from "../data/content";

export default function Blogs() {
  return (
    <Section id="blogs" label="Blogs" title="Professional Insights">
      <div className="flex flex-col">
        {blogs.map((post, i) => (
          <Reveal key={post.title} delay={i * 0.06}>
            <a
              href={post.url}
              className="group grid gap-4 border-t border-line py-8 transition-colors hover:bg-ink/[0.04] md:grid-cols-[80px_180px_1fr_auto] md:items-center md:gap-8"
            >
              <span className="text-sm font-bold text-muted">
                // {String(i + 1).padStart(2, "0")}
              </span>
              <div className="flex flex-col gap-1">
                <span className="eyebrow text-muted">{post.category}</span>
                <span className="text-xs text-muted">{post.date}</span>
              </div>
              <div>
                <h4 className="text-lg font-bold leading-snug md:text-xl">
                  {post.title}
                </h4>
                <p className="mt-1 text-sm text-muted">{post.excerpt}</p>
              </div>
              <span className="inline-flex items-center gap-1 text-xs font-semibold tracking-widest text-muted transition-colors group-hover:text-ink">
                OPEN ENTRY
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </a>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
