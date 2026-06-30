import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Download,
  ArrowRight,
  Mail,
  Sparkles,
} from "lucide-react";
import ParticleBackground from "./ParticleBackground";
import { PROFILE, TYPING_ROLES, STATS } from "@/data/portfolio";

const useTyping = (words, typeSpeed = 70, deleteSpeed = 40, pause = 1400) => {
  const [text, setText] = useState("");
  const [i, setI] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[i % words.length];
    let timer;
    if (!deleting && text === current) {
      timer = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text === "") {
      setDeleting(false);
      setI((p) => p + 1);
    } else {
      timer = setTimeout(
        () => {
          setText((prev) =>
            deleting
              ? current.substring(0, prev.length - 1)
              : current.substring(0, prev.length + 1)
          );
        },
        deleting ? deleteSpeed : typeSpeed
      );
    }
    return () => clearTimeout(timer);
  }, [text, deleting, i, words, typeSpeed, deleteSpeed, pause]);

  return text;
};

const Counter = ({ to, suffix = "" }) => {
  const [val, setVal] = useState(0);
  useEffect(() => {
    let start = 0;
    const duration = 1400;
    const startTime = performance.now();
    const tick = (t) => {
      const p = Math.min((t - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.floor(start + eased * (to - start)));
      if (p < 1) requestAnimationFrame(tick);
      else setVal(to);
    };
    requestAnimationFrame(tick);
  }, [to]);
  return (
    <span>
      {val}
      {suffix}
    </span>
  );
};

const Hero = () => {
  const typed = useTyping(TYPING_ROLES);

  return (
    <section
      id="home"
      data-testid="hero-section"
      className="relative min-h-[100svh] overflow-hidden pt-24 md:pt-28"
    >
      <ParticleBackground />
      <div
        aria-hidden
        className="absolute inset-0 bg-grid-pattern dark:bg-grid-pattern opacity-[0.08] [background-size:48px_48px]"
      />
      <div
        aria-hidden
        className="absolute -top-32 right-[-20%] h-[480px] w-[480px] rounded-full bg-brand/20 blur-3xl"
      />
      <div
        aria-hidden
        className="absolute bottom-[-20%] left-[-10%] h-[420px] w-[420px] rounded-full bg-cyan-300/10 blur-3xl"
      />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-secondary/40 text-xs font-mono tracking-wider uppercase"
            data-testid="hero-badge"
          >
            <Sparkles className="h-3.5 w-3.5 text-brand" />
            <span className="text-muted-foreground">
              {PROFILE.degree} · {PROFILE.year} · {PROFILE.university}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="font-display text-5xl md:text-6xl lg:text-[5.25rem] leading-[0.95] tracking-tighter font-black"
            data-testid="hero-heading"
          >
            <span className="block">KANAK</span>
            <span className="block gradient-text">SONARE.</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="flex items-baseline gap-3 text-lg md:text-2xl font-mono-display"
            data-testid="hero-typing-container"
          >
            <span className="text-muted-foreground">{">"}</span>
            <span data-testid="hero-typing-text" className="text-foreground">
              {typed}
            </span>
            <span className="inline-block h-5 md:h-7 w-[2px] bg-brand animate-blink" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="max-w-xl text-base md:text-lg text-muted-foreground leading-relaxed"
            data-testid="hero-tagline"
          >
            {PROFILE.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="flex flex-wrap items-center gap-3"
          >
            <a
              href={PROFILE.resumeUrl}
              target="_blank"
              rel="noreferrer"
              download
              data-testid="hero-download-resume"
              className="inline-flex items-center gap-2 h-12 px-6 rounded-full bg-brand text-black font-semibold hover:bg-brand-hover transition-colors accent-glow"
            >
              <Download className="h-4 w-4" /> Download Resume
            </a>
            <a
              href="#projects"
              data-testid="hero-view-projects"
              className="inline-flex items-center gap-2 h-12 px-6 rounded-full border border-border hover:border-brand hover:text-brand transition-colors"
            >
              View Projects <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              data-testid="hero-contact-me"
              className="inline-flex items-center gap-2 h-12 px-6 rounded-full border border-border hover:border-brand hover:text-brand transition-colors"
            >
              Contact Me <Mail className="h-4 w-4" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex items-center gap-3"
          >
            <a
              href={PROFILE.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              data-testid="hero-social-github"
              className="h-10 w-10 inline-flex items-center justify-center rounded-full border border-border hover:border-brand hover:text-brand transition-colors"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href={PROFILE.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              data-testid="hero-social-linkedin"
              className="h-10 w-10 inline-flex items-center justify-center rounded-full border border-border hover:border-brand hover:text-brand transition-colors"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <span className="text-xs font-mono text-muted-foreground ml-1">
              · Open to collabs & internships
            </span>
          </motion.div>
        </div>

        <div className="lg:col-span-5">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative aspect-[4/5] max-w-md mx-auto"
            data-testid="hero-photo-container"
          >
            <div className="absolute inset-0 rounded-3xl border border-border overflow-hidden">
              <img
                src={PROFILE.photoUrl}
                alt={`${PROFILE.name} portrait`}
                className="w-full h-full object-cover grayscale-[0.08] contrast-[1.05]"
                loading="eager"
                data-testid="hero-photo"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/10 to-transparent" />
            </div>
            <div className="absolute -bottom-5 -left-5 px-3 py-2 rounded-xl glass-strong text-xs font-mono">
              <div className="text-muted-foreground">// status</div>
              <div className="flex items-center gap-2 mt-0.5">
                <span className="inline-block h-2 w-2 rounded-full bg-green-400 animate-pulse" />
                Available · Bhopal, IN
              </div>
            </div>
            <div className="absolute -top-5 -right-5 px-3 py-2 rounded-xl bg-brand text-black text-xs font-mono font-bold">
              CSE · AI & ML
            </div>
          </motion.div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-10 mt-16 md:mt-24 pb-16">
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border rounded-2xl overflow-hidden border border-border"
          data-testid="hero-stats"
        >
          {STATS.map((s) => (
            <div
              key={s.label}
              className="bg-background px-6 py-6 md:py-8"
              data-testid={`stat-${s.label.toLowerCase().replace(/\s+/g, "-")}`}
            >
              <div className="font-display font-black text-3xl md:text-4xl tracking-tight">
                <Counter to={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-1 text-xs md:text-sm font-mono uppercase tracking-wider text-muted-foreground">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
