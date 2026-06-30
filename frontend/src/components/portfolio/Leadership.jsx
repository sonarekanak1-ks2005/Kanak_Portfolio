import { motion } from "framer-motion";
import { Trophy, Sparkles } from "lucide-react";
import { LEADERSHIP } from "@/data/portfolio";

const Leadership = () => {
  return (
    <section id="experience" data-testid="experience-section" className="relative py-24 md:py-32 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="mb-12">
          <div className="text-xs font-mono uppercase tracking-[0.25em] text-brand">// leadership</div>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold tracking-tight">
            Leading from <span className="text-brand">the front.</span>
          </h2>
        </div>

        <div className="relative pl-8 md:pl-12">
          <div className="absolute left-2 md:left-4 top-0 bottom-0 w-px bg-border" aria-hidden />
          {LEADERSHIP.map((l, i) => (
            <motion.div
              key={l.role}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="relative pb-2"
              data-testid={`leadership-item-${i}`}
            >
              <div className="absolute -left-[1.65rem] md:-left-[2.35rem] top-1.5 h-4 w-4 rounded-full bg-brand ring-4 ring-brand/20" />
              <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <h3 className="font-display text-2xl md:text-3xl font-bold tracking-tight">
                      {l.role}
                    </h3>
                    <div className="text-muted-foreground mt-1">{l.org}</div>
                  </div>
                  <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground border border-border rounded-full px-3 py-1">
                    {l.duration}
                  </div>
                </div>
                <ul className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-3">
                  {l.achievements.map((a, idx) => (
                    <li
                      key={a}
                      className="flex items-start gap-3 text-sm md:text-base"
                      data-testid={`leadership-${i}-achievement-${idx}`}
                    >
                      <span className="h-7 w-7 shrink-0 rounded-full bg-brand/15 text-brand inline-flex items-center justify-center">
                        {idx % 2 === 0 ? <Trophy className="h-3.5 w-3.5" /> : <Sparkles className="h-3.5 w-3.5" />}
                      </span>
                      <span className="text-muted-foreground">{a}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leadership;
