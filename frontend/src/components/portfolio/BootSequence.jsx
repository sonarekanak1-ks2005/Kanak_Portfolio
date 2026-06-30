import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LINES = [
  { t: "[ SYS ] Initializing AI Portfolio...", d: 220 },
  { t: "[ SYS ] Bootstrapping kernel · v0xKS.2026", d: 280 },
  { t: "[ NET ] Establishing secure uplink · TLS 1.3", d: 320 },
  { t: "[ ML  ] Loading Machine Learning models · CNN / LSTM / RNN", d: 380 },
  { t: "[ ML  ] Spinning up neural sphere · 12,800 synapses online", d: 360 },
  { t: "[ CLD ] Mounting AWS lambdas · S3 · RDS · Route53", d: 320 },
  { t: "[ AUTH] Identity match: KANAK SONARE · CSE · AI & ML", d: 300 },
  { t: "[ OK  ] >>> Access Granted: Kanak Sonare", d: 260 },
];

const BootSequence = ({ onDone }) => {
  const [lines, setLines] = useState([]);
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);
  const [hide, setHide] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const skipped = sessionStorage.getItem("ks-boot-done");
      if (skipped) {
        setHide(true);
        onDone?.();
        return;
      }
    }
    let cancelled = false;
    let acc = 0;
    const total = LINES.reduce((a, l) => a + l.d, 0);
    (async () => {
      for (let i = 0; i < LINES.length; i++) {
        await new Promise((r) => setTimeout(r, LINES[i].d));
        if (cancelled) return;
        acc += LINES[i].d;
        setLines((p) => [...p, LINES[i].t]);
        setProgress(Math.round((acc / total) * 100));
      }
      await new Promise((r) => setTimeout(r, 500));
      if (cancelled) return;
      setDone(true);
      setTimeout(() => {
        if (cancelled) return;
        sessionStorage.setItem("ks-boot-done", "1");
        setHide(true);
        onDone?.();
      }, 700);
    })();
    return () => { cancelled = true; };
  }, [onDone]);

  return (
    <AnimatePresence>
      {!hide && (
        <motion.div
          data-testid="boot-sequence"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#020208]"
        >
          <div className="absolute inset-0 bg-grid-pattern [background-size:48px_48px] opacity-30 pointer-events-none" />
          <div className="absolute inset-0 bg-scanlines opacity-40 pointer-events-none" />

          <div className="relative w-full max-w-xl mx-6 terminal p-5 sm:p-6">
            <div className="terminal-bar -mx-5 sm:-mx-6 px-5 sm:px-6 py-2 flex items-center gap-2 rounded-t-[12px]">
              <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56] shadow-[0_0_6px_#ff5f56]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e] shadow-[0_0_6px_#ffbd2e]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f] shadow-[0_0_6px_#27c93f]" />
              <span className="ml-3 text-[11px] tracking-widest uppercase text-neon-blue/80">
                ks-os · boot · v0xKS.2026
              </span>
            </div>

            <div className="mt-4 font-mono text-[13px] leading-relaxed min-h-[200px]">
              {lines.map((l, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -6 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.18 }}
                  className={
                    l.startsWith("[ OK  ]")
                      ? "text-neon-blue drop-shadow-[0_0_8px_rgba(0,245,255,0.6)]"
                      : "text-zinc-300"
                  }
                >
                  {l}
                </motion.div>
              ))}
              {!done && (
                <span className="inline-block h-4 w-2 bg-neon-blue align-middle animate-blink ml-1" />
              )}
            </div>

            <div className="mt-5">
              <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-widest text-zinc-400">
                <span>boot · progress</span>
                <span className="text-neon-blue">{progress}%</span>
              </div>
              <div className="mt-2 h-1.5 rounded-full bg-white/5 overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-neon-blue via-neon-cyan to-neon-purple"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ ease: "easeOut", duration: 0.25 }}
                />
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BootSequence;
