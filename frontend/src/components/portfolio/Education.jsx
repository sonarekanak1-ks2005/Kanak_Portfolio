import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { EDUCATION, CERTIFICATIONS } from "@/data/portfolio";

const Education = () => {
  return (
    <section id="education" data-testid="education-section" className="relative py-24 md:py-32 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <div className="text-xs font-mono uppercase tracking-[0.25em] text-brand">// education</div>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold tracking-tight">
            A foundation built on <span className="text-brand">rigor.</span>
          </h2>

          <div className="relative mt-10 pl-8">
            <div className="absolute left-2 top-0 bottom-0 w-px bg-border" aria-hidden />
            {EDUCATION.map((e, i) => (
              <motion.div
                key={e.degree}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: i * 0.05 }}
                className="relative mb-6"
                data-testid={`education-item-${i}`}
              >
                <div className="absolute -left-[1.65rem] top-1.5 h-4 w-4 rounded-full bg-brand ring-4 ring-brand/20" />
                <div className="rounded-2xl border border-border bg-card p-5">
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2 text-sm font-mono text-muted-foreground">
                      <GraduationCap className="h-4 w-4 text-brand" />
                      <span>{e.duration}</span>
                    </div>
                    <span
                      className={`text-xs font-mono uppercase tracking-widest px-2 py-0.5 rounded ${
                        e.status === "Current"
                          ? "bg-brand text-black"
                          : "border border-border text-muted-foreground"
                      }`}
                    >
                      {e.status}
                    </span>
                  </div>
                  <div className="mt-2 font-display font-semibold text-lg">{e.degree}</div>
                  <div className="text-sm text-muted-foreground">{e.school}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="text-xs font-mono uppercase tracking-[0.25em] text-brand">// certifications</div>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold tracking-tight">
            Continuous <span className="text-brand">learning.</span>
          </h2>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {CERTIFICATIONS.map((c, i) => (
              <motion.div
                key={c.name + c.year}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                className="rounded-2xl border border-border bg-card p-5 hover:border-brand/60 transition-colors flex items-start justify-between gap-3"
                data-testid={`cert-card-${i}`}
              >
                <div>
                  <div className="font-display font-semibold leading-tight">{c.name}</div>
                  <div className="mt-1 text-xs font-mono text-muted-foreground uppercase tracking-widest">
                    {c.issuer}
                  </div>
                </div>
                <span className="shrink-0 text-xs font-mono px-2 py-1 rounded-full border border-border">
                  {c.year}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
