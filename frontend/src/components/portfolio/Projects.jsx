import { motion } from "framer-motion";
import { Github, ArrowUpRight, Check } from "lucide-react";
import { PROJECTS } from "@/data/portfolio";

const Projects = () => {
  return (
    <section id="projects" data-testid="projects-section" className="relative py-24 md:py-32 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs font-mono uppercase tracking-[0.25em] text-brand">// projects</div>
            <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold tracking-tight">
              Engineered with <span className="text-brand">curiosity.</span>
            </h2>
          </div>
          <p className="max-w-md text-muted-foreground text-sm md:text-base">
            Selected work spanning computer vision, deep learning forecasting and product-grade frontend.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {PROJECTS.map((p, i) => (
            <motion.article
              key={p.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`relative overflow-hidden rounded-3xl border border-border bg-card p-6 md:p-8 group hover:border-brand/60 transition-colors ${
                i === 0 ? "lg:col-span-7" : "lg:col-span-5"
              }`}
              data-testid={`project-card-${p.id}`}
            >
              <div className={`absolute -top-24 -right-24 h-72 w-72 rounded-full bg-gradient-radial ${p.accent} blur-3xl pointer-events-none opacity-70 group-hover:opacity-100 transition-opacity`} />
              <div className="relative z-[1] flex items-start justify-between gap-6">
                <div>
                  <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
                    {String(i + 1).padStart(2, "0")} · {p.year}
                  </div>
                  <h3 className="mt-2 font-display text-2xl md:text-3xl font-bold tracking-tight leading-tight">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-muted-foreground text-sm md:text-base max-w-prose">
                    {p.description}
                  </p>
                </div>
                <a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${p.title} on GitHub`}
                  data-testid={`project-${p.id}-arrow`}
                  className="hidden md:inline-flex shrink-0 h-12 w-12 items-center justify-center rounded-full border border-border hover:border-brand hover:text-brand hover:rotate-45 transition-all"
                >
                  <ArrowUpRight className="h-5 w-5" />
                </a>
              </div>

              <div className="relative z-[1] mt-6 flex flex-wrap gap-2">
                {p.stack.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground text-xs font-mono"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <ul className="relative z-[1] mt-6 grid grid-cols-1 sm:grid-cols-2 gap-2">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Check className="h-4 w-4 text-brand mt-0.5 shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <div className="relative z-[1] mt-7 flex items-center gap-3">
                <a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                  data-testid={`project-${p.id}-github`}
                  className="inline-flex items-center gap-2 h-10 px-4 rounded-full bg-brand text-black font-semibold text-sm hover:bg-brand-hover transition-colors"
                >
                  <Github className="h-4 w-4" /> View on GitHub
                </a>
                <a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                  data-testid={`project-${p.id}-details`}
                  className="inline-flex items-center gap-2 h-10 px-4 rounded-full border border-border hover:border-brand hover:text-brand transition-colors text-sm"
                >
                  Case study <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
