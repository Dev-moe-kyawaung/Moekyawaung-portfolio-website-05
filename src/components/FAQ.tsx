import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Mail } from "lucide-react";
import { useState } from "react";
import { EASE, fadeUp, stagger, viewport } from "../lib/animations";
import { cn } from "../utils/cn";

const faqs = [
  {
    q: "Is this roadmap only for Android developers?",
    a: "The core is Android — Kotlin, Compose, architecture and performance — but the system design, interviewing and career phases transfer directly to any mobile or backend role. If you're an Android engineer, you're exactly who this was built for.",
  },
  {
    q: "How much time do I need each week?",
    a: "Plan for 6–10 focused hours. Every week has a sprint goal with a clear definition of done, so even on a busy job schedule you'll always know exactly what 'done for the week' looks like — no guilt, no backlog.",
  },
  {
    q: "I'm only 1–2 years in. Is this too advanced?",
    a: "No — that's the ideal starting point. Phase 1 closes the exact gaps juniors carry into mid-level interviews, and the milestones are calibrated per level. If you can write a basic app today, you can follow the roadmap.",
  },
  {
    q: "What's the difference between Mentorship and Elite 1:1?",
    a: "Mentorship is a cohort model: a monthly 1:1 plus async code reviews, shared with 19 other engineers. Elite is fully personalized — weekly sessions, a rebuilt resume and LinkedIn, three mock senior interviews and a negotiation playbook.",
  },
  {
    q: "Can my company sponsor this?",
    a: "Absolutely — around a third of mentees are company-sponsored. I provide a training-invoice PDF and a one-page summary your manager can attach to any learning & development budget request.",
  },
  {
    q: "What if it doesn't work for me?",
    a: "Paid plans carry a 7-day, no-questions-asked money-back guarantee. The free roadmap is yours forever either way — most engineers keep it as their ongoing reference system.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="container-x grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        {/* Heading */}
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={viewport} className="lg:sticky lg:top-28 lg:self-start">
          <motion.span
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand/5 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-brand"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-brand" aria-hidden />
            FAQ
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="font-display mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]"
          >
            Questions, <span className="text-gradient">answered honestly</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-5 max-w-md text-base leading-relaxed text-zinc-400">
            Still unsure? I answer every message personally — usually within a day.
          </motion.p>
          <motion.a
            variants={fadeUp}
            href="mailto:hello@moekyawaung.dev"
            className="group mt-7 inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 transition-all duration-300 hover:border-brand/30 hover:bg-white/[0.07]"
          >
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand/15 text-brand transition-transform duration-300 group-hover:scale-110">
              <Mail className="h-5 w-5" aria-hidden />
            </span>
            <span>
              <span className="block text-sm font-semibold text-white">hello@moekyawaung.dev</span>
              <span className="block text-xs text-zinc-500">Real answers, not canned replies</span>
            </span>
          </motion.a>
        </motion.div>

        {/* Accordion */}
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={viewport} className="space-y-3.5">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={f.q}
                variants={fadeUp}
                className={cn(
                  "glass overflow-hidden rounded-2xl transition-colors duration-300",
                  isOpen ? "border-brand/25 bg-white/[0.06]" : "hover:border-white/20",
                )}
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${i}`}
                  id={`faq-trigger-${i}`}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className={cn("text-sm font-semibold transition-colors duration-300 sm:text-base", isOpen ? "text-white" : "text-zinc-300")}>
                    {f.q}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.35, ease: EASE }}
                    className={cn(
                      "grid h-8 w-8 flex-none place-items-center rounded-full border transition-colors duration-300",
                      isOpen ? "border-brand/30 bg-brand/15 text-brand" : "border-white/10 bg-white/5 text-zinc-400",
                    )}
                  >
                    <ChevronDown className="h-4 w-4" aria-hidden />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-panel-${i}`}
                      role="region"
                      aria-labelledby={`faq-trigger-${i}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: EASE }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-6 text-sm leading-relaxed text-zinc-400">{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
