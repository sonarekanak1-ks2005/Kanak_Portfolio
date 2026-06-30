import { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { Mail, Phone, Github, Linkedin, MapPin, Send, Loader2 } from "lucide-react";
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
      toast.error("Please fill in name, email and message.");
      return;
    }
    setLoading(true);
    try {
      const res = await axios.post(`${API}/contact`, form);
      if (res.data?.status === "success") {
        toast.success(
          res.data.email_sent
            ? "Message sent — I'll get back to you shortly!"
            : "Message received! (Email pending — stored safely.)"
        );
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        toast.error("Couldn't send. Please try again.");
      }
    } catch (err) {
      const detail = err?.response?.data?.detail || "Network error. Please try again.";
      toast.error(typeof detail === "string" ? detail : "Couldn't send right now.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" data-testid="contact-section" className="relative py-24 md:py-32 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-12 gap-10">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-5 space-y-6"
        >
          <div>
            <div className="text-xs font-mono uppercase tracking-[0.25em] text-brand">// contact</div>
            <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold tracking-tight">
              Let&apos;s build something <span className="text-brand">intelligent.</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Open to internships, AI/ML research collaborations and freelance product work. Drop a message — I respond within 24 hours.
            </p>
          </div>

          <div className="space-y-3">
            <a
              href={`mailto:${PROFILE.email}`}
              data-testid="contact-email-link"
              className="flex items-center gap-3 rounded-2xl border border-border bg-card p-4 hover:border-brand/60 transition-colors"
            >
              <span className="h-10 w-10 rounded-lg bg-brand/15 text-brand inline-flex items-center justify-center">
                <Mail className="h-4 w-4" />
              </span>
              <div>
                <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Email</div>
                <div className="font-medium">{PROFILE.email}</div>
              </div>
            </a>
            <a
              href={`tel:${PROFILE.phone.replace(/\s/g, "")}`}
              data-testid="contact-phone-link"
              className="flex items-center gap-3 rounded-2xl border border-border bg-card p-4 hover:border-brand/60 transition-colors"
            >
              <span className="h-10 w-10 rounded-lg bg-brand/15 text-brand inline-flex items-center justify-center">
                <Phone className="h-4 w-4" />
              </span>
              <div>
                <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Phone</div>
                <div className="font-medium">{PROFILE.phone}</div>
              </div>
            </a>
            <div className="flex items-center gap-3 rounded-2xl border border-border bg-card p-4">
              <span className="h-10 w-10 rounded-lg bg-brand/15 text-brand inline-flex items-center justify-center">
                <MapPin className="h-4 w-4" />
              </span>
              <div>
                <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Based in</div>
                <div className="font-medium">{PROFILE.location}</div>
              </div>
            </div>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={PROFILE.github}
                target="_blank"
                rel="noreferrer"
                data-testid="contact-github"
                aria-label="GitHub"
                className="h-11 w-11 inline-flex items-center justify-center rounded-full border border-border hover:border-brand hover:text-brand transition-colors"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noreferrer"
                data-testid="contact-linkedin"
                aria-label="LinkedIn"
                className="h-11 w-11 inline-flex items-center justify-center rounded-full border border-border hover:border-brand hover:text-brand transition-colors"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          onSubmit={onSubmit}
          className="lg:col-span-7 rounded-3xl border border-border bg-card p-6 md:p-10"
          data-testid="contact-form"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="cf-name" className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Name</label>
              <input
                id="cf-name"
                name="name"
                value={form.name}
                onChange={onChange}
                required
                data-testid="contact-input-name"
                placeholder="Your full name"
                className="mt-2 w-full h-12 px-4 rounded-xl bg-background border border-border focus:border-brand outline-none transition-colors"
              />
            </div>
            <div>
              <label htmlFor="cf-email" className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Email</label>
              <input
                id="cf-email"
                name="email"
                type="email"
                value={form.email}
                onChange={onChange}
                required
                data-testid="contact-input-email"
                placeholder="you@example.com"
                className="mt-2 w-full h-12 px-4 rounded-xl bg-background border border-border focus:border-brand outline-none transition-colors"
              />
            </div>
          </div>
          <div className="mt-4">
            <label htmlFor="cf-subject" className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Subject</label>
            <input
              id="cf-subject"
              name="subject"
              value={form.subject}
              onChange={onChange}
              data-testid="contact-input-subject"
              placeholder="What's this about?"
              className="mt-2 w-full h-12 px-4 rounded-xl bg-background border border-border focus:border-brand outline-none transition-colors"
            />
          </div>
          <div className="mt-4">
            <label htmlFor="cf-message" className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Message</label>
            <textarea
              id="cf-message"
              name="message"
              rows={6}
              value={form.message}
              onChange={onChange}
              required
              data-testid="contact-input-message"
              placeholder="Tell me about the project, role or idea…"
              className="mt-2 w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-brand outline-none transition-colors resize-none"
            />
          </div>
          <div className="mt-6 flex items-center justify-between gap-4 flex-wrap">
            <p className="text-xs text-muted-foreground font-mono">
              Encrypted in transit · Replies typically within 24h
            </p>
            <button
              type="submit"
              disabled={loading}
              data-testid="contact-submit"
              className="inline-flex items-center gap-2 h-12 px-6 rounded-full bg-brand text-black font-semibold hover:bg-brand-hover transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
              {loading ? "Sending…" : "Send message"}
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
