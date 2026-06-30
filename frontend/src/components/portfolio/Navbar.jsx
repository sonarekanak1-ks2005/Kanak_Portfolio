import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon, Monitor, Github, Linkedin } from "lucide-react";
import { NAV_LINKS, PROFILE } from "@/data/portfolio";
import { useTheme } from "@/context/ThemeContext";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const cycleTheme = () => {
    const order = ["system", "dark", "light"];
    const idx = order.indexOf(theme);
    setTheme(order[(idx + 1) % order.length]);
  };

  const ThemeIcon = theme === "dark" ? Moon : theme === "light" ? Sun : Monitor;

  return (
    <header
      data-testid="navbar"
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "glass-strong border-b border-border"
          : "bg-transparent border-b border-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        <a
          href="#home"
          data-testid="nav-logo"
          className="flex items-center gap-2 group"
        >
          <span className="inline-flex h-8 w-8 rounded-full bg-brand text-black items-center justify-center font-display font-black text-sm group-hover:rotate-12 transition-transform">
            K
          </span>
          <span className="font-display font-bold tracking-tight">
            {PROFILE.firstName}<span className="text-brand">.</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              data-testid={`nav-link-${l.label.toLowerCase()}`}
              className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-full"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={PROFILE.github}
            target="_blank"
            rel="noreferrer"
            data-testid="nav-github"
            className="hidden sm:inline-flex h-9 w-9 rounded-full border border-border items-center justify-center hover:border-brand hover:text-brand transition-colors"
            aria-label="GitHub"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href={PROFILE.linkedin}
            target="_blank"
            rel="noreferrer"
            data-testid="nav-linkedin"
            className="hidden sm:inline-flex h-9 w-9 rounded-full border border-border items-center justify-center hover:border-brand hover:text-brand transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <button
            onClick={cycleTheme}
            data-testid="theme-toggle"
            aria-label={`Theme: ${theme}`}
            className="h-9 w-9 inline-flex items-center justify-center rounded-full border border-border hover:border-brand hover:text-brand transition-colors"
          >
            <ThemeIcon className="h-4 w-4" />
          </button>
          <a
            href="#contact"
            data-testid="nav-cta-hire"
            className="hidden md:inline-flex items-center justify-center h-9 px-4 rounded-full bg-brand text-black font-semibold text-sm hover:bg-brand-hover transition-colors"
          >
            Hire me
          </a>
          <button
            data-testid="nav-mobile-toggle"
            className="md:hidden h-9 w-9 inline-flex items-center justify-center rounded-full border border-border"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className="md:hidden glass-strong border-t border-border"
            data-testid="nav-mobile-menu"
          >
            <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-1">
              {NAV_LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  data-testid={`nav-mobile-link-${l.label.toLowerCase()}`}
                  className="px-3 py-3 text-base font-medium text-muted-foreground hover:text-foreground border-b border-border/40 last:border-b-0"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
