# Personal Website

A minimalist single-page portfolio — Vite + React + TypeScript + Tailwind CSS v4
+ Motion + lucide-react. Design inspired by the clean, monochrome dev-portfolio
pattern (big bold hero, wide-tracked uppercase labels, sectioned long-scroll).

## Develop

Uses [pnpm](https://pnpm.io). Build scripts for native deps (esbuild) are
allow-listed in `pnpm-workspace.yaml`.

```bash
pnpm install
pnpm dev          # http://localhost:5173
pnpm build        # type-check + prerender + production build to /dist
pnpm preview      # serve the built site
pnpm lint         # ESLint (typescript-eslint + react-hooks)
pnpm refresh:github   # refresh the GitHub Pulse data snapshot
```

## Deploy

Pushing to `main` triggers GitHub Actions (`.github/workflows/deploy.yml`),
which typechecks, lints, builds, and deploys to Cloudflare Workers Static
Assets (gabebryk.com). To deploy manually:

```bash
pnpm build && pnpm exec wrangler deploy   # Cloudflare Workers (gabebryk.com)
```

## Make it yours

Everything is content-driven from a single file:

- **`src/data/content.ts`** — name, role, tagline, links, skills, projects,
  experience, education, blogs, contact. Edit text and URLs here; the
  components render it.
- **`index.html`** — page `<title>`, meta description, and JSON-LD `Person`
  schema.
- **Images** — drop files in `public/`:
  - `public/portrait.webp` — about-section photo (4:5)
  - `public/projects/*.png` — project thumbnails (paths set in `content.ts`)
  Missing images fall back to a labeled placeholder, so nothing breaks if absent.

## Structure

```
src/
  App.tsx                 # section order
  data/content.ts         # ← all editable content
  index.css               # Tailwind v4 theme tokens (colors, fonts)
  components/
    Navbar, Hero, About, Skills, Projects,
    Experience, Education, GitHubPulse, Blogs, Contact, Footer
    Section.tsx           # shared eyebrow + heading shell
    Reveal.tsx            # scroll-in animation wrapper
    ImageWithFallback.tsx # <img> with a declarative placeholder fallback
```

## Notes

- **GitHub Pulse** shows real contribution data (followers, public repos, and
  a last-12-months contribution heatmap including private commits) from a
  committed snapshot in `src/data/github.ts`. Refresh it with
  `pnpm refresh:github` (see `scripts/refresh-github.mjs`).
- Theme colors live as CSS variables in `src/index.css` under `@theme`.
  The default palette is monochrome with a green activity accent.
