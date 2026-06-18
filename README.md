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
pnpm refresh:github   # refresh the GitHub Pulse data snapshot
```

## Deploy

```bash
pnpm build && pnpm exec wrangler deploy   # Cloudflare Workers (gabebryk.com)
```

## Make it yours

Everything is content-driven from a single file:

- **`src/data/content.ts`** — name, role, tagline, links, skills, projects,
  experience, blogs, contact. Edit text and URLs here; the components render it.
- **`index.html`** — page `<title>` and meta description.
- **Images** — drop files in `public/`:
  - `public/portrait.jpg` — about-section photo (4:5)
  - `public/projects/*.png` — project thumbnails (paths set in `content.ts`)
  - `public/resume.pdf` — linked by the hero RESUME button
  Missing images fall back to a labeled placeholder, so nothing breaks if absent.

## Structure

```
src/
  App.tsx                 # section order
  data/content.ts         # ← all editable content
  index.css               # Tailwind v4 theme tokens (colors, fonts)
  components/
    Navbar, Hero, About, Skills, Projects,
    Experience, GitHubPulse, Blogs, Contact, Footer
    Section.tsx           # shared eyebrow + heading shell
    Reveal.tsx            # scroll-in animation wrapper
```

## Notes

- **GitHub Pulse** shows a deterministic placeholder heatmap and `—` stats.
  Wire it to the GitHub API to show real contributions (see comment in
  `components/GitHubPulse.tsx`).
- Theme colors live as CSS variables in `src/index.css` under `@theme`.
  The default palette is monochrome with a green activity accent.
