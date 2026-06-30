import { motion } from "framer-motion";
import { SKILLS } from "@/data/portfolio";

const Skills = () => {
  return (
    <section id="skills" data-testid="skills-section" className="relative py-24 md:py-32 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs font-mono uppercase tracking-[0.25em] text-brand">// skills</div>
            <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold tracking-tight">
              A toolkit forged across <span className="text-brand">AI, cloud & web</span>.
            </h2>
          </div>
          <p className="max-w-md text-muted-foreground text-sm md:text-base">
            Daily-driver languages, frameworks and platforms — measured by real-world fluency, not buzzwords.
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
              className="rounded-2xl border border-border bg-card p-6 hover:border-brand/50 transition-colors"
              data-testid={`skill-group-${group.category.toLowerCase().replace(/\s+/g, "-")}`}
            >
              <div className="flex items-center justify-between">
                <h3 className="font-display font-semibold text-lg">{group.category}</h3>
                <span className="text-xs font-mono text-muted-foreground">
                  {String(gi + 1).padStart(2, "0")} / {String(SKILLS.length).padStart(2, "0")}
                </span>
              </div>
              <div className="mt-5 space-y-4">
                {group.items.map((s, idx) => (
                  <div key={s.name} data-testid={`skill-${s.name.toLowerCase().replace(/\s+/g, "-")}`}>
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-medium">{s.name}</span>
                      <span className="font-mono text-xs text-muted-foreground">{s.level}%</span>
                    </div>
                    <div className="mt-2 h-1.5 rounded-full bg-secondary overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${s.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9, delay: 0.05 * idx, ease: "easeOut" }}
                        className="h-full bg-brand rounded-full"
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
