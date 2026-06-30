import { motion } from "framer-motion";
import { Brain, Users, Code2, Cpu } from "lucide-react";
import { PROFILE } from "@/data/portfolio";

const ICONS = {
  "Team leadership": Users,
  "Problem-solving": Brain,
  "Software engineering": Code2,
  "AI research interests": Cpu,
};

const About = () => {
  return (
    <section id="about" data-testid="about-section" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5"
          >
            <div className="text-xs font-mono uppercase tracking-[0.25em] text-brand">
              // about
            </div>
            <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold tracking-tight leading-[1.05]">
              An engineer driven by <span className="text-brand">intelligence</span>,
              not just code.
            </h2>
            <p className="mt-6 text-muted-foreground text-base md:text-lg leading-relaxed">
              {PROFILE.bio}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {PROFILE.highlights.map((h, i) => {
                const Icon = ICONS[h] || Brain;
                return (
                  <motion.div
                    key={h}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    className="group rounded-2xl border border-border bg-card p-6 hover:border-brand/60 transition-colors"
                    data-testid={`about-highlight-${i}`}
                  >
                    <div className="h-10 w-10 rounded-lg bg-brand/10 text-brand flex items-center justify-center group-hover:bg-brand group-hover:text-black transition-colors">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="mt-4 font-display font-semibold text-lg">{h}</div>
                    <div className="mt-1 text-sm text-muted-foreground">
                      {h === "Team leadership" && "Finance Lead at Android Club · 500+ attendees"}
                      {h === "Problem-solving" && "Algorithmic thinking across DSA, ML and systems"}
                      {h === "Software engineering" && "Clean, scalable & maintainable codebases"}
                      {h === "AI research interests" && "Deep learning · CV · NLP · Time-series"}
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <div className="mt-6 rounded-2xl border border-border bg-card p-6 md:p-8" data-testid="about-summary-card">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
                <div>
                  <div className="text-xs font-mono uppercase text-muted-foreground tracking-widest">University</div>
                  <div className="mt-1 font-semibold">{PROFILE.university}</div>
                </div>
                <div>
                  <div className="text-xs font-mono uppercase text-muted-foreground tracking-widest">Degree</div>
                  <div className="mt-1 font-semibold">{PROFILE.degree}</div>
                </div>
                <div>
                  <div className="text-xs font-mono uppercase text-muted-foreground tracking-widest">Year</div>
                  <div className="mt-1 font-semibold">{PROFILE.year}</div>
                </div>
                <div>
                  <div className="text-xs font-mono uppercase text-muted-foreground tracking-widest">Location</div>
                  <div className="mt-1 font-semibold">{PROFILE.location}</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
