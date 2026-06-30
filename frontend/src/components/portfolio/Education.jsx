import { motion } from "framer-motion";
import { GraduationCap, KeyRound, Database, ShieldCheck } from "lucide-react";
import { EDUCATION, CERTIFICATIONS } from "@/data/portfolio";

const Education = () => {
  return (
    <section id="education" data-testid="education-section" className="relative py-24 md:py-32 border-t border-neon-blue/10">
      <div className="absolute inset-0 bg-grid-pattern-fine [background-size:48px_48px] opacity-15 pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-5 md:px-10 grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-5">
          <div className="flex items-center gap-3 mb-3">
            <GraduationCap className="h-5 w-5 text-neon-blue" />
            <div className="text-[11px] font-mono uppercase tracking-[0.3em] text-neon-blue">// education_stream</div>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">
            Foundation built on <span className="neon-text">rigor.</span>
          </h2>

          <div className="relative mt-10 pl-7">
            <div className="absolute left-1.5 top-0 bottom-0 w-px bg-gradient-to-b from-neon-blue via-neon-purple to-transparent" />
            {EDUCATION.map((e, i) => (
              <motion.div
                key={e.degree}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: i * 0.05 }}
                className="relative mb-6"
                data-testid={`education-item-${i}`}
              >
                <div className="absolute -left-[1.55rem] top-2 h-3.5 w-3.5 rounded-full bg-neon-blue ring-4 ring-neon-blue/20 shadow-neon-soft" />
                <div className="holo-border p-5 glow-hover">
                  <div className="flex items-center justify-between gap-3">
                    <div className="text-[11px] font-mono uppercase tracking-[0.25em] text-zinc-400">
                      {e.duration}
                    </div>
                    <span
                      className={`text-[10px] font-mono uppercase tracking-widest px-2 py-0.5 rounded ${
                        e.status === "Current"
                          ? "bg-neon-blue text-black shadow-neon-soft"
                          : "border border-neon-blue/20 text-zinc-400"
                      }`}
                    >
                      {e.status}
                    </span>
                  </div>
                  <div className="mt-2 font-display font-semibold text-lg">{e.degree}</div>
                  <div className="text-sm text-zinc-400 font-mono">{e.school}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="flex items-center gap-3 mb-3">
            <Database className="h-5 w-5 text-neon-purple" />
            <div className="text-[11px] font-mono uppercase tracking-[0.3em] text-neon-purple">// certification_database</div>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">
            Access cards · <span className="purple-text">continuous learning.</span>
          </h2>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {CERTIFICATIONS.map((c, i) => (
              <motion.div
                key={c.name + c.year}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                className="relative holo-border p-5 glow-hover overflow-hidden"
                data-testid={`cert-card-${i}`}
              >
                {/* card-like watermark */}
                <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-neon-purple/10 blur-2xl pointer-events-none" />
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-start gap-3">
                    <span className="h-10 w-10 rounded-lg bg-neon-blue/10 border border-neon-blue/30 text-neon-blue inline-flex items-center justify-center">
                      {i % 2 === 0 ? <KeyRound className="h-4 w-4" /> : <ShieldCheck className="h-4 w-4" />}
                    </span>
                    <div>
                      <div className="font-display font-semibold leading-tight">{c.name}</div>
                      <div className="mt-1 text-[11px] font-mono uppercase tracking-widest text-zinc-400">
                        Issuer · {c.issuer}
                      </div>
                    </div>
                  </div>
                  <span className="shrink-0 text-[10px] font-mono px-2 py-1 rounded-md border border-neon-blue/25 text-neon-blue">
                    {c.year}
                  </span>
                </div>

                {/* faux card digits */}
                <div className="mt-4 font-mono text-[11px] tracking-[0.4em] text-zinc-500">
                  KS · {String(1000 + i * 137).padStart(4, "0")} · 9F2A · {c.year}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
