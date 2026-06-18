import { profile, nav } from "../data/content";

const year = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="border-t border-line px-6 py-14 md:px-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div>
          <h3 className="text-2xl font-black tracking-tight">
            {profile.firstName} {profile.lastName}
          </h3>
          <p className="mt-1 text-xs uppercase tracking-widest text-muted">
            {profile.role}
          </p>
        </div>

        <nav className="flex gap-6">
          {nav.slice(0, 3).map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-xs font-medium tracking-widest text-muted transition-colors hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="text-xs tracking-widest text-muted">
          © {year} · ALL RIGHTS RESERVED
        </div>
      </div>
    </footer>
  );
}
