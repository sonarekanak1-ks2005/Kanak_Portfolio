import { motion } from "framer-motion";
import { Brain, Users, Code2, Cpu, Fingerprint } from "lucide-react";
import { PROFILE } from "@/data/portfolio";

const ICONS = {
  "Team leadership": Users,
  "Problem-solving": Brain,
  "Software engineering": Code2,
  "AI research interests": Cpu,
};

const Field = ({ label, value, mono = true }) => (
  <div className="flex items-start justify-between gap-4 py-2.5 border-b border-neon-blue/10 last:border-b-0">
    <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-zinc-500">{label}</span>
    <span className={`text-sm text-zinc-100 text-right ${mono ? "font-mono" : ""}`}>{value}</span>
  </div>
);

const About = () => {
  return (
    <section id="about" data-testid="about-section" className="relative py-24 md:py-32">
      <div className="absolute inset-0 bg-grid-pattern-fine [background-size:48px_48px] opacity-30 pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-5 md:px-10">
        <div className="flex items-center gap-3 mb-10">
          <Fingerprint className="h-5 w-5 text-neon-blue" />
          <div className="text-[11px] font-mono uppercase tracking-[0.3em] text-neon-blue">
            // ai_profile · sys/ks_core
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7"
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight leading-[1.05]">
              An operator wired for <span className="neon-text">intelligence,</span> not just code.
            </h2>
            <p className="mt-6 text-zinc-400 text-base md:text-lg leading-relaxed max-w-3xl">
              {PROFILE.bio}
            </p>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {PROFILE.highlights.map((h, i) => {
                const Icon = ICONS[h] || Brain;
                return (
                  <motion.div
                    key={h}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    className="group holo-border p-5 glow-hover"
                    data-testid={`about-highlight-${i}`}
                  >
                    <div className="flex items-start gap-3">
                      <span className="h-10 w-10 rounded-lg bg-neon-blue/10 border border-neon-blue/30 text-neon-blue inline-flex items-center justify-center">
                        <Icon className="h-4 w-4" />
                      </span>
                      <div>
                        <div className="font-display font-semibold">{h}</div>
                        <div className="mt-1 text-xs text-zinc-400 font-mono">
                          {h === "Team leadership" && "Finance Lead · Android Club · 500+ attendees"}
                          {h === "Problem-solving" && "Algorithms · DSA · ML · systems"}
                          {h === "Software engineering" && "Scalable, clean, observable code"}
                          {h === "AI research interests" && "DL · CV · NLP · time-series"}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-5"
          >
            <div className="terminal p-5 relative scanlines" data-testid="ai-profile-card">
              <div className="terminal-bar -mx-5 -mt-5 px-5 py-2 flex items-center gap-2 rounded-t-[12px]">
                <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
                <span className="ml-3 text-[11px] tracking-widest uppercase text-zinc-500">
                  /etc/ks/profile.json
                </span>
              </div>

              <div className="mt-4 mb-2 font-mono text-[12px] text-zinc-500">
                <span className="text-neon-blue">user@ks-os</span>:<span className="text-neon-purple">~</span>$ cat profile.json
              </div>

              <div className="mt-2">
                <Field label="Designation" value={PROFILE.role} mono={false} />
                <Field label="University" value={PROFILE.university} mono={false} />
                <Field label="Degree" value={PROFILE.degree} mono={false} />
                <Field label="Year" value={PROFILE.year} mono={false} />
                <Field label="Location" value={PROFILE.location} mono={false} />
                <Field label="Status" value={<span className="text-neon-blue">● Available</span>} />
                <Field label="Clearance" value="LVL · 03 / OPEN" />
              </div>

              <div className="mt-4 font-mono text-[11px] text-zinc-500">
                <span className="text-neon-blue">user@ks-os</span>:<span className="text-neon-purple">~</span>$ <span className="text-zinc-300">_</span>
                <span className="inline-block h-3 w-1.5 bg-neon-blue align-middle ml-0.5 animate-blink" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
