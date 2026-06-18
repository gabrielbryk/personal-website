// ─────────────────────────────────────────────────────────────────────────
// Site content. Edit here — every section reads from this file.
// ─────────────────────────────────────────────────────────────────────────

// Feature flags. Components stay in the codebase; flip to show/hide.
export const features = {
  blogs: false, // Blogs section + nav link hidden on the live site (no posts yet).
};

export const profile = {
  firstName: "GABE",
  lastName: "BRYK",
  role: "CO-FOUNDER & CTO @ GRIDLINK",
  tagline:
    "Co-Founder & CTO at GridLink, building B2B EV-fleet infrastructure from the ground up. Off the clock: developer tools, AI agents, and self-hosted systems.",
  availability: "OPEN TO COLLABORATION",
  location: "Chicago, IL",
  status: "Co-Founder & CTO @ GridLink",
  email: "gbryk11@gmail.com",
  initials: "GABE • BRYK",
  kicker: "CTO & BUILDER",
};

export const socials = {
  linkedin: "https://www.linkedin.com/in/gabriel-bryk-630039139/",
  github: "https://github.com/gabrielbryk",
  website: "https://gabebryk.com",
  githubUser: "gabrielbryk",
};

export const nav = [
  { label: "ABOUT", href: "#about" },
  { label: "SKILLS", href: "#skills" },
  { label: "PROJECTS", href: "#projects" },
  { label: "EXPERIENCE", href: "#experience" },
  { label: "CONNECT", href: "#connect" },
];

export const about = {
  badge: "CO-FOUNDER & CTO · TECHSTARS '23",
  headline:
    "Building enterprise EV-fleet infrastructure from concept to production — and a steady stream of developer tools on the side.",
  body: "I'm Gabe — co-founder and CTO of GridLink, where I've built the technical foundation of an EV-fleet management platform from concept to production: multi-tenant architecture, smart-charging optimization, and the team behind it. I came up through security engineering at ServiceNow and a Master's in Cybersecurity at Illinois Tech. When I'm not scaling GridLink, I build developer tooling, LLM agents, and self-hosted infrastructure.",
  photo: "/portrait.webp",
  topSkills: ["TYPESCRIPT", "REACT", "NESTJS", "GRAPHQL", "AWS", "+14 MORE"],
};

// Tech-stack chips for the "Inventory" section.
export const skills: string[] = [
  "TypeScript",
  "JavaScript",
  "Python",
  "React",
  "Next.js",
  "Node.js",
  "NestJS",
  "GraphQL",
  "Hono",
  "Bun",
  "PostgreSQL",
  "Prisma",
  "Qdrant",
  "AWS",
  "AWS CDK",
  "Docker",
  "Cloudflare Workers",
  "GitHub Actions",
  "Nx",
  "LLMs / RAG",
  "LangGraph",
  "Cryptography",
  "Self-Hosting",
];

export type Project = {
  title: string;
  category: "Product" | "Tooling" | "Infra";
  tag: string; // small uppercase label
  description: string;
  image: string; // path in public/ or remote URL
  repoUrl?: string;
  liveUrl?: string;
};

export const projects: Project[] = [
  {
    title: "GridLink",
    category: "Product",
    tag: "CO-FOUNDER & CTO",
    description:
      "Multi-tenant B2B SaaS for commercial EV-fleet charging — smart-charging optimization (up to 30% cost reduction), real-time monitoring, and predictive analytics.",
    image: "/projects/gridlink.webp",
    liveUrl: "https://gridlink.co",
  },
  {
    title: "agent-html",
    category: "Tooling",
    tag: "DEVELOPER TOOLING",
    description:
      "Claude Code plugin + Cloudflare Worker that renders agent output as styled HTML pages — shadcn/ui, Mermaid, charts, search, versioning.",
    image: "/projects/agent-html.webp",
    repoUrl: "https://github.com/gabrielbryk/agent-html",
    liveUrl: "https://share.gridlink.dev",
  },
  {
    title: "agents",
    category: "Tooling",
    tag: "AI AGENTS",
    description:
      "Personal LangGraph.js agents, self-hosted and deployed via Coolify.",
    image: "/projects/agents.webp",
    repoUrl: "https://github.com/gabrielbryk/agents",
    liveUrl: "https://agents.gabebryk.com",
  },
  {
    title: "speedwatch",
    category: "Infra",
    tag: "SELF-HOSTED",
    description:
      "Self-hosted speedtest tracker with first-class VPN context. Bun + Hono + SQLite + HTMX.",
    image: "/projects/speedwatch.webp",
    repoUrl: "https://github.com/gabrielbryk/speedwatch",
  },
  {
    title: "Status Page",
    category: "Infra",
    tag: "INFRASTRUCTURE",
    description: "Live status page with uptime monitoring and response-time history for production services.",
    image: "/projects/status.webp",
    repoUrl: "https://github.com/gabrielbryk/vigilant-octo-carnival",
    liveUrl: "https://status.gridlink.co",
  },
];

export type Experience = {
  company: string;
  title: string;
  duration: string;
  location: string;
  points: string[];
  tools: string;
};

export const experience: Experience[] = [
  {
    company: "GRIDLINK",
    title: "CO-FOUNDER & CTO · TECHSTARS '23",
    duration: "Jan 2023 — Present",
    location: "Chicago, IL",
    points: [
      "Built the technical foundation from concept to market-ready product; led technical due diligence for a $500K pre-seed round.",
      "Architected a multi-tenant platform serving enterprise fleet clients — React/TS frontend, NestJS + GraphQL backend, PostgreSQL/Prisma on AWS.",
      "Built and mentored cross-functional engineering teams including 8 interns; pioneered AI-assisted development workflows.",
      "Shipped smart-charging optimization (CBC solver) demonstrating up to 30% charging-cost reduction.",
    ],
    tools: "REACT, TYPESCRIPT, NESTJS, GRAPHQL, POSTGRES, AWS CDK, +6 MORE",
  },
  {
    company: "SERVICENOW",
    title: "PLATFORM ENGINEER INTERN · SECURITY",
    duration: "Summers 2021 & 2022",
    location: "Remote / Chicago, IL",
    points: [
      "Refactored core cryptographic modules (asymmetric and symmetric operations) to improve extensibility for new algorithms.",
      "Built a standalone code-signing CLI supporting P12, JCEKS, and JKS keystores so clients could self-sign applications.",
    ],
    tools: "JAVA, CRYPTOGRAPHY, CODE SIGNING, CLI",
  },
];

export type Education = {
  school: string;
  degree: string;
  detail: string; // e.g. graduation year or status
};

export const education: Education[] = [
  {
    school: "ILLINOIS INSTITUTE OF TECHNOLOGY",
    degree: "M.S. Cybersecurity",
    detail: "In progress",
  },
  {
    school: "ILLINOIS INSTITUTE OF TECHNOLOGY",
    degree: "B.S. Computer Science",
    detail: "2023",
  },
];

export type Blog = {
  category: string;
  date: string;
  title: string;
  excerpt: string;
  url: string;
};

// Kept for when there's writing to publish. Section is hidden via features.blogs.
export const blogs: Blog[] = [];

export const contactLinks = [
  {
    index: "01",
    label: "EMAIL",
    action: "SEND MAIL",
    get href() {
      return `mailto:${profile.email}`;
    },
  },
  { index: "02", label: "LINKEDIN", action: "CONNECT", href: socials.linkedin },
  { index: "03", label: "GITHUB", action: "SOURCE", href: socials.github },
];
