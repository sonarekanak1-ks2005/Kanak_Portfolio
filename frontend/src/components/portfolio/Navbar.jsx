import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Github, Linkedin, Terminal } from "lucide-react";
import { NAV_LINKS, PROFILE } from "@/data/portfolio";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [time, setTime] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    const t = setInterval(() => {
      const now = new Date();
      const hh = String(now.getUTCHours()).padStart(2, "0");
      const mm = String(now.getUTCMinutes()).padStart(2, "0");
      const ss = String(now.getUTCSeconds()).padStart(2, "0");
      setTime(`${hh}:${mm}:${ss} UTC`);
    }, 1000);
    return () => {
      window.removeEventListener("scroll", onScroll);
      clearInterval(t);
    };
  }, []);

  return (
    <header
      data-testid="navbar"
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "glass-strong border-b border-neon-blue/15"
          : "bg-transparent border-b border-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-10 h-16 flex items-center justify-between gap-4">
        <a href="#home" data-testid="nav-logo" className="flex items-center gap-3 group">
          <span className="relative inline-flex h-9 w-9 rounded-md bg-neon-blue/10 border border-neon-blue/40 items-center justify-center text-neon-blue font-display font-black shadow-neon-soft">
            K
            <span className="absolute -bottom-1 -right-1 h-2 w-2 rounded-full bg-neon-blue animate-pulse" />
          </span>
          <div className="leading-tight">
            <div className="font-display font-bold tracking-tight text-sm sm:text-base">
              {PROFILE.firstName}<span className="text-neon-blue">.</span><span className="text-zinc-500">os</span>
            </div>
            <div className="hidden sm:block font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-500">
              ai · command · center
            </div>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-0.5 glass rounded-full px-1 py-1">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              data-testid={`nav-link-${l.label.toLowerCase()}`}
              className="px-3 py-1.5 text-xs font-mono uppercase tracking-widest text-zinc-400 hover:text-neon-blue hover:bg-neon-blue/5 rounded-full transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full glass font-mono text-[10px] uppercase tracking-widest text-zinc-400">
            <span className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse" />
            <span>ONLINE</span>
            <span className="text-zinc-600">·</span>
            <span className="text-neon-blue">{time}</span>
          </div>
          <a
            href={PROFILE.github}
            target="_blank"
            rel="noreferrer"
            data-testid="nav-github"
            className="hidden sm:inline-flex h-9 w-9 rounded-full border border-neon-blue/20 items-center justify-center hover:border-neon-blue hover:text-neon-blue hover:shadow-neon-soft transition-all"
            aria-label="GitHub"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href={PROFILE.linkedin}
            target="_blank"
            rel="noreferrer"
            data-testid="nav-linkedin"
            className="hidden sm:inline-flex h-9 w-9 rounded-full border border-neon-blue/20 items-center justify-center hover:border-neon-blue hover:text-neon-blue hover:shadow-neon-soft transition-all"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href="#contact"
            data-testid="nav-cta-hire"
            className="hidden md:inline-flex items-center gap-2 h-9 px-4 rounded-full bg-neon-blue text-black font-mono font-bold text-xs uppercase tracking-widest hover:bg-neon-cyan transition-colors shadow-neon-soft"
          >
            <Terminal className="h-3.5 w-3.5" /> Initiate
          </a>
          <button
            data-testid="nav-mobile-toggle"
            className="lg:hidden h-9 w-9 inline-flex items-center justify-center rounded-full border border-neon-blue/20 hover:border-neon-blue hover:text-neon-blue transition-colors"
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
            className="lg:hidden glass-strong border-t border-neon-blue/15"
            data-testid="nav-mobile-menu"
          >
            <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-1">
              {NAV_LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  data-testid={`nav-mobile-link-${l.label.toLowerCase()}`}
                  className="px-3 py-3 text-sm font-mono uppercase tracking-widest text-zinc-400 hover:text-neon-blue border-b border-neon-blue/10 last:border-b-0"
                >
                  / {l.label}
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
