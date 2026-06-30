import { motion } from "framer-motion";
import { Network } from "lucide-react";
import { SKILLS } from "@/data/portfolio";

const Skills = () => {
  return (
    <section id="skills" data-testid="skills-section" className="relative py-24 md:py-32 border-t border-neon-blue/10">
      <div className="absolute inset-0 bg-grid-pattern [background-size:64px_64px] opacity-20 pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-5 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <Network className="h-5 w-5 text-neon-blue" />
              <div className="text-[11px] font-mono uppercase tracking-[0.3em] text-neon-blue">
                // neural_skills_matrix
              </div>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">
              Synaptic toolkit forged across <span className="neon-text">AI · cloud · web</span>.
            </h2>
          </div>
          <p className="max-w-md text-zinc-400 text-sm md:text-base font-mono">
            // node weights mapped to real-world fluency · 7 clusters · 27 synapses
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILLS.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: gi * 0.05 }}
              className="relative holo-border p-6 group glow-hover"
              data-testid={`skill-group-${group.category.toLowerCase().replace(/\s+/g, "-")}`}
            >
              <div className="absolute top-3 right-3 flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse" />
                <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-500">
                  cluster · {String(gi + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="font-display font-semibold text-lg pr-24">{group.category}</h3>

              {/* Node chips */}
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((s) => (
                  <span
                    key={s.name}
                    data-testid={`skill-node-${s.name.toLowerCase().replace(/\s+/g, "-")}`}
                    className="relative inline-flex items-center gap-2 px-2.5 py-1 rounded-full border border-neon-blue/25 bg-neon-blue/5 text-[11px] font-mono text-zinc-200 hover:border-neon-blue hover:text-neon-blue hover:shadow-neon-soft transition-all"
                  >
                    <span
                      className="h-1.5 w-1.5 rounded-full"
                      style={{
                        background:
                          s.level > 85 ? "#00F5FF" : s.level > 75 ? "#22d3ee" : "#8B5CF6",
                        boxShadow:
                          s.level > 85
                            ? "0 0 8px #00F5FF"
                            : s.level > 75
                            ? "0 0 6px #22d3ee"
                            : "0 0 6px #8B5CF6",
                      }}
                    />
                    {s.name}
                  </span>
                ))}
              </div>

              {/* Inline rail of synapse levels */}
              <div className="mt-5 space-y-3">
                {group.items.map((s, idx) => (
                  <div key={s.name + "-bar"} data-testid={`skill-${s.name.toLowerCase().replace(/\s+/g, "-")}`}>
                    <div className="flex items-center justify-between text-[11px] font-mono">
                      <span className="text-zinc-400">{s.name}</span>
                      <span className="text-neon-blue">{s.level}%</span>
                    </div>
                    <div className="mt-1.5 h-[3px] rounded-full bg-white/5 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${s.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9, delay: 0.05 * idx, ease: "easeOut" }}
                        className="h-full"
                        style={{
                          background:
                            "linear-gradient(90deg, #00F5FF, #00FFFF 60%, #8B5CF6)",
                          boxShadow: "0 0 10px rgba(0,245,255,0.55)",
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
