import { useEffect, useState, useSyncExternalStore } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { profile, nav } from "../data/content";

// External store for the theme: the `.dark` class on <html> is owned outside
// React (set pre-paint by the inline script in index.html, toggled below).
// useSyncExternalStore reads it without a hydration mismatch — the server
// snapshot is `null`, so the first client render shows a stable placeholder.
function subscribeTheme(callback: () => void) {
  const observer = new MutationObserver(callback);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["class"],
  });
  return () => observer.disconnect();
}
function getThemeSnapshot() {
  return document.documentElement.classList.contains("dark");
}
function getThemeServerSnapshot(): boolean | null {
  return null;
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const isDark = useSyncExternalStore(
    subscribeTheme,
    getThemeSnapshot,
    getThemeServerSnapshot,
  );

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const toggleTheme = () => {
    const next = !document.documentElement.classList.contains("dark");
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", next ? "#0a0a0a" : "#ffffff");
    // The MutationObserver above will re-render via useSyncExternalStore.
  };

  const solid = scrolled || open;

  // Render a stable placeholder icon until mounted to avoid a hydration
  // mismatch; swap to the correct Sun/Moon once we know the theme.
  const themeButton = (extraClass = "") => (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className={`text-ink/70 transition-colors hover:text-ink ${extraClass}`}
    >
      {isDark === null ? (
        <Sun className="h-5 w-5 opacity-0" aria-hidden="true" />
      ) : isDark ? (
        <Sun className="h-5 w-5" />
      ) : (
        <Moon className="h-5 w-5" />
      )}
    </button>
  );

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid ? "border-b border-line bg-paper/80 backdrop-blur-md" : ""
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 md:px-12">
        <a
          href="#"
          onClick={() => setOpen(false)}
          className="flex items-baseline gap-2 text-sm font-bold tracking-wide"
        >
          <span>{profile.initials}</span>
          <span className="hidden text-muted sm:inline">{profile.kicker}</span>
        </a>

        <div className="flex items-center gap-8">
          <ul className="hidden items-center gap-8 md:flex">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-xs font-medium tracking-widest text-ink/70 transition-colors hover:text-ink"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {themeButton("hidden md:inline-flex")}

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="md:hidden"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile dropdown */}
      {open && (
        <div className="border-t border-line bg-paper md:hidden">
          <ul className="flex flex-col px-6 py-2">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block py-4 text-sm font-medium tracking-widest text-ink/80 transition-colors hover:text-ink"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="flex items-center gap-3 border-t border-line py-4 text-sm font-medium tracking-widest text-ink/80">
              {themeButton()}
              <span>{isDark ? "LIGHT MODE" : "DARK MODE"}</span>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
