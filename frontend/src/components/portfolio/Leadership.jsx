import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { LineChart, Trophy, TrendingUp, Calendar, Users, Sparkles } from "lucide-react";
import { LEADERSHIP } from "@/data/portfolio";

const useCount = (to, dur = 1500) => {
  const [v, setV] = useState(0);
  useEffect(() => {
    let start;
    const tick = (t) => {
      if (!start) start = t;
      const p = Math.min((t - start) / dur, 1);
      setV(Math.floor((1 - Math.pow(1 - p, 3)) * to));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [to, dur]);
  return v;
};

const MetricCard = ({ icon: Icon, value, label, suffix = "", color = "neon-blue", testid }) => {
  const n = useCount(value);
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="holo-border p-5 relative glow-hover"
      data-testid={testid}
    >
      <div className="absolute top-3 right-3 h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse" />
      <Icon className={`h-5 w-5 text-${color}`} />
      <div className="mt-2 font-display font-black text-3xl tracking-tight">
        <span className={color === "neon-blue" ? "neon-text" : "purple-text"}>
          {n}{suffix}
        </span>
      </div>
      <div className="mt-1 text-[10px] font-mono uppercase tracking-[0.25em] text-zinc-400">{label}</div>
    </motion.div>
  );
};

// Mini bar chart visual (faux participation over months)
const ParticipationChart = () => {
  const data = [22, 28, 35, 30, 42, 48, 52, 64, 70, 78, 85, 92];
  return (
    <div className="holo-border p-5">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <LineChart className="h-4 w-4 text-neon-blue" />
          <div className="text-[11px] font-mono uppercase tracking-[0.25em] text-zinc-400">
            participation_growth.sigplot
          </div>
        </div>
        <div className="text-[11px] font-mono text-neon-blue">+170% YoY</div>
      </div>
      <div className="h-32 flex items-end gap-1.5">
        {data.map((v, i) => (
          <motion.div
            key={i}
            initial={{ height: 0 }}
            whileInView={{ height: `${v}%` }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: i * 0.04, ease: "easeOut" }}
            className="flex-1 rounded-t"
            style={{
              background:
                "linear-gradient(180deg, #00F5FF 0%, rgba(0,245,255,0.25) 70%, rgba(139,92,246,0.4) 100%)",
              boxShadow: "0 0 8px rgba(0,245,255,0.35)",
            }}
          />
        ))}
      </div>
      <div className="mt-2 flex justify-between text-[10px] font-mono uppercase tracking-widest text-zinc-500">
        <span>JAN</span><span>JUN</span><span>DEC</span>
      </div>
    </div>
  );
};

const Leadership = () => {
  const l = LEADERSHIP[0];
  return (
    <section id="experience" data-testid="experience-section" className="relative py-24 md:py-32 border-t border-neon-blue/10">
      <div className="absolute inset-0 bg-grid-pattern [background-size:80px_80px] opacity-15 pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-5 md:px-10">
        <div className="flex items-center gap-3 mb-3">
          <Trophy className="h-5 w-5 text-neon-blue" />
          <div className="text-[11px] font-mono uppercase tracking-[0.3em] text-neon-blue">// leadership_dashboard</div>
        </div>
        <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight max-w-3xl">
          Mission Control · <span className="neon-text">{l.org}</span>
        </h2>

        {/* Header row */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="md:col-span-2 holo-border p-5 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <span className="h-10 w-10 rounded-lg bg-neon-blue/10 border border-neon-blue/30 text-neon-blue inline-flex items-center justify-center">
                <Trophy className="h-5 w-5" />
              </span>
              <div>
                <div className="font-display font-bold text-xl">{l.role}</div>
                <div className="text-sm text-zinc-400">{l.org}</div>
              </div>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass font-mono text-[11px] uppercase tracking-widest text-zinc-300">
              <Calendar className="h-3.5 w-3.5 text-neon-blue" /> {l.duration}
            </div>
          </div>
          <div className="holo-border p-5 flex items-center justify-between">
            <div>
              <div className="text-[10px] font-mono uppercase tracking-[0.25em] text-zinc-400">CLEARANCE</div>
              <div className="mt-1 font-mono text-zinc-200">LEAD · LVL 03</div>
            </div>
            <div className="flex flex-col items-end">
              <div className="text-[10px] font-mono uppercase tracking-[0.25em] text-zinc-400">UPTIME</div>
              <div className="mt-1 font-mono text-neon-blue">19 mo</div>
            </div>
          </div>
        </div>

        {/* Metrics + chart */}
        <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
          <MetricCard icon={Trophy} value={10} suffix="+" label="Events Organized" color="neon-blue" testid="metric-events" />
          <MetricCard icon={Users} value={500} suffix="+" label="Attendees Reached" color="neon-blue" testid="metric-attendees" />
          <MetricCard icon={TrendingUp} value={170} suffix="%" label="Participation Lift" color="neon-blue" testid="metric-lift" />
          <MetricCard icon={Sparkles} value={6} label="Capability Areas" color="neon-purple" testid="metric-areas" />
        </div>

        <div className="mt-4 grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="lg:col-span-2"><ParticipationChart /></div>

          <div className="holo-border p-5">
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="h-4 w-4 text-neon-purple" />
              <div className="text-[11px] font-mono uppercase tracking-[0.25em] text-zinc-400">
                achievements.log
              </div>
            </div>
            <ul className="space-y-2">
              {l.achievements.map((a, i) => (
                <li
                  key={a}
                  className="flex items-start gap-2 text-sm font-mono text-zinc-300"
                  data-testid={`leadership-achievement-${i}`}
                >
                  <span className="text-neon-blue mt-0.5">▸</span>
                  <span>{a}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leadership;
