// ─────────────────────────────────────────────────────────────────────────
// EDIT THIS FILE to make the site yours. Every section reads from here.
// Placeholder content is marked with TODO. Replace text, links, and images.
// ─────────────────────────────────────────────────────────────────────────

export const profile = {
  firstName: "YOUR",
  lastName: "NAME",
  role: "ROLE & TITLE", // e.g. "Designer & Developer"
  tagline:
    "One-line statement about what you build and the value you bring. Keep it sharp and specific.",
  availability: "AVAILABLE FOR PROJECTS",
  location: "City, Country",
  status: "Open to Work",
  email: "you@example.com",
  resumeUrl: "/resume.pdf", // drop a resume.pdf in /public, or change this
  initials: "YN • SURNAME",
  kicker: "DIGITAL CREATOR",
};

export const socials = {
  linkedin: "https://www.linkedin.com/in/your-handle",
  github: "https://github.com/your-handle",
  twitter: "https://twitter.com/your-handle",
  figma: "https://figma.com/@your-handle",
  githubUser: "your-handle", // used by the GitHub pulse section
};

export const nav = [
  { label: "ABOUT", href: "#about" },
  { label: "SKILLS", href: "#skills" },
  { label: "PROJECTS", href: "#projects" },
  { label: "EXPERIENCE", href: "#experience" },
  { label: "BLOGS", href: "#blogs" },
  { label: "CONNECT", href: "#connect" },
];

export const about = {
  version: "V.26",
  badge: "THE DIGITAL ARCHITECT",
  headline:
    "A short, confident sentence describing your craft and the kind of work you focus on.",
  body: "Two or three sentences of bio. Who you are, where you're based, and the through-line that connects your design and engineering work. Keep it human.",
  // Drop a square photo in /public/portrait.jpg or change this path.
  photo: "/portrait.jpg",
  topSkills: ["REACT", "TYPESCRIPT", "FIGMA", "NODE", "TAILWIND", "+5 MORE"],
};

// Tech-stack chips for the "Inventory" section.
export const skills: string[] = [
  "React",
  "TypeScript",
  "JavaScript",
  "HTML",
  "CSS",
  "Tailwind",
  "Node.js",
  "Python",
  "PostgreSQL",
  "MongoDB",
  "Git",
  "GitHub",
  "Figma",
  "Docker",
  "AWS",
  "Prototyping",
  "Design Systems",
  "CI/CD",
];

export type Project = {
  title: string;
  category: "Web" | "Design";
  tag: string; // small uppercase label, e.g. "DEVELOPMENT"
  description: string;
  image: string; // path in /public or remote URL
  repoUrl?: string;
  liveUrl?: string;
};

export const projects: Project[] = [
  {
    title: "Project One",
    category: "Web",
    tag: "DEVELOPMENT",
    description: "One line on what it is and why it's interesting.",
    image: "/projects/project-1.png",
    repoUrl: "https://github.com/your-handle/project-one",
    liveUrl: "https://project-one.example.com",
  },
  {
    title: "Project Two",
    category: "Design",
    tag: "VISUAL DESIGN",
    description: "A design exploration — describe the concept in a sentence.",
    image: "/projects/project-2.png",
    liveUrl: "https://www.figma.com/your-file",
  },
  {
    title: "Project Three",
    category: "Web",
    tag: "DEVELOPMENT",
    description: "Another build worth showing. Keep descriptions tight.",
    image: "/projects/project-3.png",
    repoUrl: "https://github.com/your-handle/project-three",
    liveUrl: "https://project-three.example.com",
  },
  {
    title: "Project Four",
    category: "Design",
    tag: "VISUAL DESIGN",
    description: "A hero banner / UI concept. Replace with your real work.",
    image: "/projects/project-4.png",
    liveUrl: "https://www.figma.com/your-file",
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
    company: "COMPANY NAME",
    title: "YOUR ROLE",
    duration: "Mon 20XX — Mon 20XX",
    location: "Remote",
    points: [
      "Impact-driven bullet: what you did and the measurable result.",
      "Second bullet: a system you built or improved, with a number if you can.",
      "Third bullet: a skill or outcome that sets you apart.",
    ],
    tools: "TOOL, TOOL, TOOL, +3 MORE",
  },
  {
    company: "EARLIER COMPANY",
    title: "YOUR ROLE",
    duration: "Mon 20XX — Mon 20XX",
    location: "City, Country",
    points: [
      "What you owned and shipped here.",
      "A quantified win — velocity, cost, adoption, reliability.",
      "Something you automated or simplified.",
    ],
    tools: "TOOL, TOOL, TOOL, +5 MORE",
  },
];

export type Blog = {
  category: string;
  date: string;
  title: string;
  excerpt: string;
  url: string;
};

export const blogs: Blog[] = [
  {
    category: "ENGINEERING",
    date: "Feb 4, 2026",
    title: "A post title that hints at a strong opinion or lesson",
    excerpt:
      "One or two lines that make someone want to click. Write it like a hook.",
    url: "#",
  },
  {
    category: "DESIGN",
    date: "Jan 5, 2026",
    title: "Another piece — share something you learned the hard way",
    excerpt: "A short teaser describing what the reader will take away.",
    url: "#",
  },
  {
    category: "CAREER",
    date: "Jan 2, 2026",
    title: "A third entry to round out the section",
    excerpt: "Keep these punchy. Replace with links to your real writing.",
    url: "#",
  },
];

export const contactLinks = [
  { index: "01", label: "EMAIL", action: "SEND MAIL", get href() { return `mailto:${profile.email}`; } },
  { index: "02", label: "LINKEDIN", action: "NETWORK", href: socials.linkedin },
  { index: "03", label: "GITHUB", action: "SOURCE", href: socials.github },
  { index: "04", label: "FIGMA", action: "CANVAS", href: socials.figma },
];
