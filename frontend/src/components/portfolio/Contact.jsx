import { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  Github,
  Linkedin,
  MapPin,
  Send,
  Loader2,
  TerminalSquare,
} from "lucide-react";
import { toast } from "sonner";
import { PROFILE } from "@/data/portfolio";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [loading, setLoading] = useState(false);

  const onChange = (e) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error("name · email · message required");
      return;
    }
    setLoading(true);
    try {
      const res = await axios.post(`${API}/contact`, form);
      if (res.data?.status === "success") {
        toast.success(
          res.data.email_sent
            ? "Transmission complete — Kanak will reply soon."
            : "Message stored. Email pending — Kanak will reach out."
        );
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        toast.error("Transmission failed. Try again.");
      }
    } catch (err) {
      const detail = err?.response?.data?.detail || "Network error. Please try again.";
      toast.error(typeof detail === "string" ? detail : "Couldn't transmit right now.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" data-testid="contact-section" className="relative py-24 md:py-32 border-t border-neon-blue/10">
      <div className="absolute inset-0 bg-grid-pattern [background-size:64px_64px] opacity-20 pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-5 md:px-10 grid grid-cols-1 lg:grid-cols-12 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-5 space-y-6"
        >
          <div>
            <div className="flex items-center gap-3 mb-3">
              <TerminalSquare className="h-5 w-5 text-neon-blue" />
              <div className="text-[11px] font-mono uppercase tracking-[0.3em] text-neon-blue">
                // contact_terminal
              </div>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">
              Open a secure <span className="neon-text">uplink.</span>
            </h2>
            <p className="mt-4 text-zinc-400 max-w-md">
              Open to internships, AI/ML research collaborations and freelance product work. I respond within 24 hours.
            </p>
          </div>

          {/* Connection list (terminal style) */}
          <div className="terminal p-5 relative scanlines">
            <div className="terminal-bar -mx-5 -mt-5 px-5 py-2 flex items-center gap-2 rounded-t-[12px]">
              <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
              <span className="ml-3 text-[11px] tracking-widest uppercase text-zinc-500">
                ks-os · uplink
              </span>
            </div>
            <div className="mt-4 space-y-2 font-mono text-sm">
              <a
                href={PROFILE.github}
                target="_blank"
                rel="noreferrer"
                data-testid="contact-cmd-github"
                className="flex items-center justify-between gap-3 text-zinc-300 hover:text-neon-blue transition-colors"
              >
                <span><span className="text-neon-blue">{">"}</span> connect github</span>
                <span className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-widest text-zinc-500">
                  <Github className="h-3.5 w-3.5" /> @sonarekanak1-ks2005
                </span>
              </a>
              <a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noreferrer"
                data-testid="contact-cmd-linkedin"
                className="flex items-center justify-between gap-3 text-zinc-300 hover:text-neon-blue transition-colors"
              >
                <span><span className="text-neon-blue">{">"}</span> connect linkedin</span>
                <span className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-widest text-zinc-500">
                  <Linkedin className="h-3.5 w-3.5" /> /kanak-sonare
                </span>
              </a>
              <a
                href={`mailto:${PROFILE.email}`}
                data-testid="contact-cmd-email"
                className="flex items-center justify-between gap-3 text-zinc-300 hover:text-neon-blue transition-colors"
              >
                <span><span className="text-neon-blue">{">"}</span> open mailto</span>
                <span className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-widest text-zinc-500">
                  <Mail className="h-3.5 w-3.5" /> {PROFILE.email}
                </span>
              </a>
              <a
                href={`tel:${PROFILE.phone.replace(/\s/g, "")}`}
                data-testid="contact-cmd-phone"
                className="flex items-center justify-between gap-3 text-zinc-300 hover:text-neon-blue transition-colors"
              >
                <span><span className="text-neon-blue">{">"}</span> dial signal</span>
                <span className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-widest text-zinc-500">
                  <Phone className="h-3.5 w-3.5" /> {PROFILE.phone}
                </span>
              </a>
              <div className="flex items-center justify-between gap-3 text-zinc-300">
                <span><span className="text-neon-blue">{">"}</span> base location</span>
                <span className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-widest text-zinc-500">
                  <MapPin className="h-3.5 w-3.5" /> {PROFILE.location}
                </span>
              </div>
              <div className="pt-2 text-[11px] text-zinc-500">
                <span className="text-neon-blue">user@ks-os</span>:<span className="text-neon-purple">~</span>$ <span className="inline-block h-3 w-1.5 bg-neon-blue align-middle animate-blink" />
              </div>
            </div>
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          onSubmit={onSubmit}
          className="lg:col-span-7 terminal p-6 md:p-8 relative"
          data-testid="contact-form"
        >
          <div className="terminal-bar -mx-6 md:-mx-8 -mt-6 md:-mt-8 px-6 md:px-8 py-2 flex items-center gap-2 rounded-t-[12px]">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
            <span className="ml-3 text-[11px] tracking-widest uppercase text-zinc-500">
              ks-os · send_message.sh
            </span>
            <span className="ml-auto inline-flex items-center gap-1.5 text-[10px] uppercase tracking-widest text-neon-blue">
              <span className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse" /> SECURE
            </span>
          </div>

          <div className="mt-5 font-mono text-[12px] text-zinc-500">
            <span className="text-neon-blue">user@ks-os</span>:<span className="text-neon-purple">~</span>$ <span className="text-zinc-200">./send_message.sh</span>
          </div>

          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="cf-name" className="text-[10px] font-mono uppercase tracking-[0.25em] text-zinc-500">{"> name"}</label>
              <input
                id="cf-name"
                name="name"
                value={form.name}
                onChange={onChange}
                required
                data-testid="contact-input-name"
                placeholder="Your full name"
                className="mt-2 w-full h-12 px-4 rounded-lg bg-black/40 border border-neon-blue/20 focus:border-neon-blue focus:shadow-neon-soft outline-none transition-all font-mono text-sm text-zinc-100 placeholder:text-zinc-600"
              />
            </div>
            <div>
              <label htmlFor="cf-email" className="text-[10px] font-mono uppercase tracking-[0.25em] text-zinc-500">{"> email"}</label>
              <input
                id="cf-email"
                name="email"
                type="email"
                value={form.email}
                onChange={onChange}
                required
                data-testid="contact-input-email"
                placeholder="you@example.com"
                className="mt-2 w-full h-12 px-4 rounded-lg bg-black/40 border border-neon-blue/20 focus:border-neon-blue focus:shadow-neon-soft outline-none transition-all font-mono text-sm text-zinc-100 placeholder:text-zinc-600"
              />
            </div>
          </div>
          <div className="mt-4">
            <label htmlFor="cf-subject" className="text-[10px] font-mono uppercase tracking-[0.25em] text-zinc-500">{"> subject"}</label>
            <input
              id="cf-subject"
              name="subject"
              value={form.subject}
              onChange={onChange}
              data-testid="contact-input-subject"
              placeholder="What's this about?"
              className="mt-2 w-full h-12 px-4 rounded-lg bg-black/40 border border-neon-blue/20 focus:border-neon-blue focus:shadow-neon-soft outline-none transition-all font-mono text-sm text-zinc-100 placeholder:text-zinc-600"
            />
          </div>
          <div className="mt-4">
            <label htmlFor="cf-message" className="text-[10px] font-mono uppercase tracking-[0.25em] text-zinc-500">{"> message"}</label>
            <textarea
              id="cf-message"
              name="message"
              rows={6}
              value={form.message}
              onChange={onChange}
              required
              data-testid="contact-input-message"
              placeholder="Tell me about the project, role or idea..."
              className="mt-2 w-full px-4 py-3 rounded-lg bg-black/40 border border-neon-blue/20 focus:border-neon-blue focus:shadow-neon-soft outline-none transition-all resize-none font-mono text-sm text-zinc-100 placeholder:text-zinc-600"
            />
          </div>
          <div className="mt-6 flex items-center justify-between gap-4 flex-wrap">
            <p className="text-[11px] text-zinc-500 font-mono">
              TLS · 1.3 · encrypted in transit · 24h SLA
            </p>
            <button
              type="submit"
              disabled={loading}
              data-testid="contact-submit"
              className="inline-flex items-center gap-2 h-12 px-6 rounded-full bg-neon-blue text-black font-mono font-bold text-xs uppercase tracking-widest hover:bg-neon-cyan transition-colors shadow-neon disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
              {loading ? "Transmitting…" : "Send message"}
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
