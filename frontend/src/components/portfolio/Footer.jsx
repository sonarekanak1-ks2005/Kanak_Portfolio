import { Github, Linkedin, Mail } from "lucide-react";
import { PROFILE } from "@/data/portfolio";

const Footer = () => {
  return (
    <footer data-testid="footer" className="relative border-t border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <span className="inline-flex h-9 w-9 rounded-full bg-brand text-black items-center justify-center font-display font-black">
            K
          </span>
          <div>
            <div className="font-display font-semibold">{PROFILE.name}</div>
            <div className="text-xs font-mono text-muted-foreground uppercase tracking-widest">
              AI/ML · Software · Cloud
            </div>
          </div>
        </div>

        <div className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} {PROFILE.name}. Crafted with React, Tailwind & Framer Motion.
        </div>

        <div className="flex items-center gap-2">
          <a
            href={PROFILE.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            data-testid="footer-github"
            className="h-10 w-10 inline-flex items-center justify-center rounded-full border border-border hover:border-brand hover:text-brand transition-colors"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href={PROFILE.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            data-testid="footer-linkedin"
            className="h-10 w-10 inline-flex items-center justify-center rounded-full border border-border hover:border-brand hover:text-brand transition-colors"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href={`mailto:${PROFILE.email}`}
            aria-label="Email"
            data-testid="footer-email"
            className="h-10 w-10 inline-flex items-center justify-center rounded-full border border-border hover:border-brand hover:text-brand transition-colors"
          >
            <Mail className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
