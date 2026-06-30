import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Download,
  ArrowRight,
  Mail,
  Cpu,
  Shield,
} from "lucide-react";
import NeuralSphere from "./NeuralSphere";
import GridBackground from "./GridBackground";
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
  return <span>{val}{suffix}</span>;
};

const Hero = () => {
  const typed = useTyping(TYPING_ROLES);

  return (
    <section
      id="home"
      data-testid="hero-section"
      className="relative min-h-[100svh] overflow-hidden pt-28 md:pt-32 pb-16"
    >
      <GridBackground />

      <div className="relative max-w-7xl mx-auto px-5 md:px-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7 space-y-7">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-[11px] font-mono uppercase tracking-[0.25em] text-zinc-400"
            data-testid="hero-badge"
          >
            <Shield className="h-3.5 w-3.5 text-neon-blue" />
            <span>Access Granted · {PROFILE.degree} · {PROFILE.year}</span>
            <span className="ml-1 h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="font-display text-5xl md:text-6xl lg:text-[5.5rem] leading-[0.95] tracking-tighter font-black"
            data-testid="hero-heading"
          >
            <span className="block neon-text">KANAK</span>
            <span className="block gradient-text">SONARE</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="flex items-baseline gap-3 text-base md:text-2xl font-mono"
            data-testid="hero-typing-container"
          >
            <span className="text-neon-blue">{">"}</span>
            <span data-testid="hero-typing-text" className="text-zinc-100">{typed}</span>
            <span className="inline-block h-5 md:h-7 w-[2px] bg-neon-blue animate-blink shadow-[0_0_10px_#00F5FF]" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="max-w-xl text-base md:text-lg text-zinc-400 leading-relaxed"
            data-testid="hero-tagline"
          >
            {PROFILE.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
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
              className="inline-flex items-center gap-2 h-12 px-6 rounded-full bg-neon-blue text-black font-mono font-bold text-sm uppercase tracking-widest hover:bg-neon-cyan transition-colors shadow-neon"
            >
              <Download className="h-4 w-4" /> Download Resume
            </a>
            <a
              href="#projects"
              data-testid="hero-view-projects"
              className="inline-flex items-center gap-2 h-12 px-6 rounded-full glass text-sm font-mono uppercase tracking-widest text-zinc-200 hover:text-neon-blue hover:border-neon-blue/60 transition-colors"
            >
              View Projects <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              data-testid="hero-contact-me"
              className="inline-flex items-center gap-2 h-12 px-6 rounded-full glass text-sm font-mono uppercase tracking-widest text-zinc-200 hover:text-neon-purple hover:border-neon-purple/60 transition-colors"
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
              className="h-10 w-10 inline-flex items-center justify-center rounded-full border border-neon-blue/25 hover:border-neon-blue hover:text-neon-blue hover:shadow-neon-soft transition-all"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href={PROFILE.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              data-testid="hero-social-linkedin"
              className="h-10 w-10 inline-flex items-center justify-center rounded-full border border-neon-blue/25 hover:border-neon-blue hover:text-neon-blue hover:shadow-neon-soft transition-all"
            >
              <Linkedin className="h-4 w-4" />
            </a>
          </motion.div>
        </div>

        <div className="lg:col-span-5">
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="relative aspect-square max-w-md mx-auto"
            data-testid="hero-sphere-container"
          >
            {/* Soft glow rings */}
            <div className="absolute inset-0 rounded-full border border-neon-blue/15" />
            <div className="absolute inset-6 rounded-full border border-neon-purple/15 animate-pulse" />
            <div className="absolute inset-14 rounded-full border border-neon-blue/10" />

            {/* The sphere */}
            <div className="absolute inset-0">
              <NeuralSphere />
            </div>

            {/* Floating HUD chips */}
            <div className="absolute -top-4 left-4 px-3 py-1.5 rounded-full glass font-mono text-[10px] uppercase tracking-[0.25em] text-neon-blue">
              <Cpu className="inline h-3 w-3 mr-1.5 -mt-0.5" /> NEURAL · ONLINE
            </div>
            <div className="absolute -bottom-4 right-2 px-3 py-1.5 rounded-full glass font-mono text-[10px] uppercase tracking-[0.25em] text-neon-purple">
              KS · CORE · v0xKS.2026
            </div>
            <div className="absolute top-1/2 -right-2 px-2 py-1 rounded-md glass font-mono text-[10px] text-zinc-300">
              90% accuracy
            </div>

            {/* Profile thumbnail card */}
            <div className="absolute -bottom-8 left-2 glass rounded-2xl p-2 pr-3 flex items-center gap-2.5 shadow-neon-soft">
              <img
                src={PROFILE.photoUrl}
                alt={PROFILE.name}
                data-testid="hero-photo"
                className="h-10 w-10 rounded-xl object-cover ring-1 ring-neon-blue/40"
              />
              <div className="leading-tight">
                <div className="text-[11px] font-mono uppercase tracking-widest text-zinc-400">operator</div>
                <div className="text-sm font-semibold text-zinc-100">{PROFILE.name}</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-5 md:px-10 mt-20 md:mt-28">
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-px bg-neon-blue/10 rounded-2xl overflow-hidden border border-neon-blue/20"
          data-testid="hero-stats"
        >
          {STATS.map((s) => (
            <div
              key={s.label}
              className="bg-obsidian-800/80 px-6 py-6 md:py-8 relative group"
              data-testid={`stat-${s.label.toLowerCase().replace(/\s+/g, "-")}`}
            >
              <div className="absolute top-2 right-3 h-1.5 w-1.5 rounded-full bg-neon-blue animate-pulse" />
              <div className="font-display font-black text-3xl md:text-4xl tracking-tight neon-text">
                <Counter to={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-1 text-[10px] md:text-xs font-mono uppercase tracking-[0.25em] text-zinc-400">
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
