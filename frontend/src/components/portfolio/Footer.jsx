import { Github, Linkedin, Mail } from "lucide-react";
import { PROFILE } from "@/data/portfolio";

const Footer = () => {
  return (
    <footer data-testid="footer" className="relative border-t border-neon-blue/15">
      <div className="absolute inset-0 bg-grid-pattern-fine [background-size:32px_32px] opacity-15 pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-5 md:px-10 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <span className="inline-flex h-9 w-9 rounded-md bg-neon-blue/10 border border-neon-blue/40 items-center justify-center text-neon-blue font-display font-black shadow-neon-soft">
            K
          </span>
          <div>
            <div className="font-display font-semibold">{PROFILE.name}</div>
            <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-[0.25em]">
              AI · ML · CLOUD · v0xKS.2026
            </div>
          </div>
        </div>

        <div className="text-xs text-zinc-500 font-mono uppercase tracking-widest">
          © {new Date().getFullYear()} · crafted with React · Three.js · Framer
        </div>

        <div className="flex items-center gap-2">
          <a
            href={PROFILE.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            data-testid="footer-github"
            className="h-10 w-10 inline-flex items-center justify-center rounded-full border border-neon-blue/20 hover:border-neon-blue hover:text-neon-blue hover:shadow-neon-soft transition-all"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href={PROFILE.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            data-testid="footer-linkedin"
            className="h-10 w-10 inline-flex items-center justify-center rounded-full border border-neon-blue/20 hover:border-neon-blue hover:text-neon-blue hover:shadow-neon-soft transition-all"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href={`mailto:${PROFILE.email}`}
            aria-label="Email"
            data-testid="footer-email"
            className="h-10 w-10 inline-flex items-center justify-center rounded-full border border-neon-blue/20 hover:border-neon-blue hover:text-neon-blue hover:shadow-neon-soft transition-all"
          >
            <Mail className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
