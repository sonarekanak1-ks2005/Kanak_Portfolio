import { motion } from "framer-motion";
import { Github, ArrowUpRight, FlaskConical } from "lucide-react";
import { PROJECTS } from "@/data/portfolio";

const ProjectTerminal = ({ p, idx }) => {
  const cmd = `ks run ./experiments/${p.id}.exp`;
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: idx * 0.08 }}
      className={`relative terminal overflow-hidden group glow-hover ${
        idx === 0 ? "lg:col-span-7" : idx === 1 ? "lg:col-span-5" : "lg:col-span-12"
      }`}
      data-testid={`project-card-${p.id}`}
    >
      {/* terminal bar */}
      <div className="terminal-bar px-5 py-2 flex items-center gap-2">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
        <span className="ml-3 text-[11px] tracking-widest uppercase text-zinc-500 truncate">
          /ks/lab/{p.id} · {p.year}
        </span>
        <span className="ml-auto text-[10px] tracking-widest uppercase text-neon-blue">
          EXP_{String(idx + 1).padStart(2, "0")}
        </span>
      </div>

      {/* Hover glow */}
      <div className="pointer-events-none absolute -top-32 -right-32 h-72 w-72 rounded-full bg-neon-blue/20 blur-3xl opacity-50 group-hover:opacity-100 transition-opacity" />

      <div className="relative p-5 md:p-7">
        {/* prompt */}
        <div className="font-mono text-[12px] text-zinc-500">
          <span className="text-neon-blue">user@ks-os</span>:<span className="text-neon-purple">~/lab</span>$ <span className="text-zinc-200">{cmd}</span>
        </div>

        <div className="mt-4 flex items-start justify-between gap-6">
          <div>
            <h3 className="font-display text-2xl md:text-[1.85rem] font-bold tracking-tight leading-tight">
              {p.title}
            </h3>
            <p className="mt-3 text-zinc-400 text-sm md:text-base max-w-prose">
              {p.description}
            </p>
          </div>
          <a
            href={p.github}
            target="_blank"
            rel="noreferrer"
            aria-label={`${p.title} on GitHub`}
            data-testid={`project-${p.id}-arrow`}
            className="hidden md:inline-flex shrink-0 h-12 w-12 items-center justify-center rounded-full border border-neon-blue/30 hover:border-neon-blue hover:text-neon-blue hover:rotate-45 hover:shadow-neon-soft transition-all"
          >
            <ArrowUpRight className="h-5 w-5" />
          </a>
        </div>

        <div className="mt-5 font-mono text-[12px] text-zinc-500">
          <span className="text-neon-blue">{">"}</span> stack
        </div>
        <div className="mt-2 flex flex-wrap gap-2">
          {p.stack.map((t) => (
            <span
              key={t}
              className="px-2.5 py-1 rounded-md border border-neon-blue/25 bg-neon-blue/5 text-[11px] font-mono text-zinc-200 hover:border-neon-blue hover:text-neon-blue transition-colors"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-5 font-mono text-[12px] text-zinc-500">
          <span className="text-neon-blue">{">"}</span> features
        </div>
        <ul className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-1.5">
          {p.features.map((f) => (
            <li
              key={f}
              className="flex items-start gap-2 text-sm font-mono text-zinc-300"
            >
              <span className="text-neon-blue mt-0.5">▸</span>
              <span>{f}</span>
            </li>
          ))}
        </ul>

        <div className="mt-6 flex items-center gap-3">
          <a
            href={p.github}
            target="_blank"
            rel="noreferrer"
            data-testid={`project-${p.id}-github`}
            className="inline-flex items-center gap-2 h-10 px-4 rounded-full bg-neon-blue text-black font-mono font-bold text-xs uppercase tracking-widest hover:bg-neon-cyan transition-colors shadow-neon-soft"
          >
            <Github className="h-4 w-4" /> View on GitHub
          </a>
          <a
            href={p.github}
            target="_blank"
            rel="noreferrer"
            data-testid={`project-${p.id}-details`}
            className="inline-flex items-center gap-2 h-10 px-4 rounded-full border border-neon-purple/40 text-zinc-200 hover:text-neon-purple hover:border-neon-purple text-xs font-mono uppercase tracking-widest transition-colors"
          >
            Open log <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-5 font-mono text-[11px] text-zinc-500">
          <span className="text-neon-blue">user@ks-os</span>:<span className="text-neon-purple">~/lab</span>$ <span className="inline-block h-3 w-1.5 bg-neon-blue align-middle animate-blink" />
        </div>
      </div>
    </motion.article>
  );
};

const Projects = () => {
  return (
    <section id="projects" data-testid="projects-section" className="relative py-24 md:py-32 border-t border-neon-blue/10">
      <div className="absolute inset-0 bg-grid-pattern-fine [background-size:48px_48px] opacity-20 pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-5 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <FlaskConical className="h-5 w-5 text-neon-blue" />
              <div className="text-[11px] font-mono uppercase tracking-[0.3em] text-neon-blue">
                // ai_project_lab
              </div>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">
              Engineered with <span className="neon-text">curiosity.</span>
            </h2>
          </div>
          <p className="max-w-md text-zinc-400 text-sm md:text-base font-mono">
            // selected experiments · CV · forecasting · product
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {PROJECTS.map((p, i) => (
            <ProjectTerminal key={p.id} p={p} idx={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
