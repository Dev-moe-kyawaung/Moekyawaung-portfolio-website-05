import { AnimatePresence, motion } from "framer-motion";
import { Check, CheckCircle2, Terminal } from "lucide-react";
import { useState } from "react";
import { EASE, fadeUp, scaleIn, stagger, viewport } from "../lib/animations";
import { cn } from "../utils/cn";

type Phase = {
  id: string;
  label: string;
  title: string;
  meta: string;
  desc: string;
  items: string[];
  snippet: string;
};

const phases: Phase[] = [
  {
    id: "foundations",
    label: "01 · Foundations",
    title: "Modern Android fundamentals",
    meta: "Weeks 1–3",
    desc: "Close every knowledge gap interviewers probe. We go deep on the runtime model behind the modern stack — so you can explain the why, not just the how.",
    items: [
      "Kotlin depth: coroutines, flows, channels, structured concurrency",
      "Jetpack Compose: state, composition, recomposition, gestures",
      "Testing: unit tests, Turbine, fake schedulers, Compose UI tests",
    ],
    snippet: 'val senior = repeat(12.weeks) { ship() }.also { negotiate() }',
  },
  {
    id: "architecture",
    label: "02 · Architecture",
    title: "Clean, modular architecture",
    meta: "Weeks 4–6",
    desc: "Refactor a real production-style codebase from a god-activity mess into modular, testable feature slices you'd be proud to merge.",
    items: [
      "Clean Architecture boundaries: domain, data, presentation",
      "Modularization strategy: feature, core, and app modules",
      "Offline-first with Room, Paging and a single source of truth",
    ],
    snippet: 'data class Feature(val layer: Clean, val testable: Boolean = true)',
  },
  {
    id: "performance",
    label: "03 · Performance",
    title: "Performance & profiling",
    meta: "Weeks 7–9",
    desc: "Turn performance work from a mystery into a system. You'll run live profiler sessions and ship measurable wins to your own app.",
    items: [
      "Cold-start budget under 300 ms — measured, not guessed",
      "ANR elimination with strict-mode and systematic tracing",
      "APK slimming, memory churn, and Baseline Profiles",
    ],
    snippet: 'require(startupTime < 300.ms) { "Ship blocker" }',
  },
  {
    id: "leadership",
    label: "04 · Leadership",
    title: "Operating as a senior",
    meta: "Weeks 10–12",
    desc: "Senior is a behaviour, not a title. Learn to review, design and communicate like the engineer staff look to when the architecture burns.",
    items: [
      "Code reviews that teach instead of nitpick",
      "Writing RFCs and owning technical roadmaps",
      "Mock hiring loops: you design, defend, and refine a system live",
    ],
    snippet: 'fun promote(engineer: Dev) = engineer.grow { mentor() }',
  },
];

const highlights = [
  "12 structured weeks with weekly sprint goals",
  "Production-grade projects — never toy apps",
  "Every line reviewed with senior-level feedback",
  "Lifetime access, including all future updates",
];

export default function Showcase() {
  const [active, setActive] = useState(phases[0].id);
  const phase = phases.find((p) => p.id === active) ?? phases[0];
  const idx = phases.findIndex((p) => p.id === active);

  return (
    <section id="roadmap" className="relative scroll-mt-24 overflow-hidden py-24 sm:py-32">
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="absolute right-[-10%] top-1/4 h-[28rem] w-[28rem] rounded-full bg-brand/10 blur-[130px]" />
        <div className="absolute bottom-0 left-[-10%] h-[24rem] w-[24rem] rounded-full bg-violet-600/10 blur-[130px]" />
      </div>

      <div className="container-x grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
        {/* Copy */}
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={viewport} className="max-w-xl">
          <motion.span
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand/5 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-brand"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-brand" aria-hidden />
            Inside the roadmap
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="font-display mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]"
          >
            One path. Four phases. <span className="text-gradient">Zero guesswork.</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-5 text-base leading-relaxed text-zinc-400 sm:text-lg">
            A linear, opinionated system — no 400-video course dump. Each phase ends with a shipped, reviewable
            artifact that interviewers can see and measure.
          </motion.p>
          <motion.ul variants={fadeUp} className="mt-8 space-y-4">
            {highlights.map((h) => (
              <li key={h} className="flex items-start gap-3 text-sm text-zinc-300 sm:text-base">
                <span className="mt-0.5 grid h-5 w-5 flex-none place-items-center rounded-full bg-brand/15 text-brand">
                  <Check className="h-3 w-3" aria-hidden />
                </span>
                {h}
              </li>
            ))}
          </motion.ul>
          <motion.a
            variants={fadeUp}
            href="#pricing"
            className="group mt-9 inline-flex items-center gap-2 text-sm font-semibold text-brand transition-colors hover:text-teal-300"
          >
            Preview a sample module
            <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden>
              →
            </span>
          </motion.a>
        </motion.div>

        {/* Interactive roadmap window */}
        <motion.div variants={scaleIn} initial="hidden" whileInView="visible" viewport={viewport} className="relative">
          <div
            aria-hidden
            className="absolute -inset-6 -z-10 rounded-[3rem] bg-gradient-to-br from-brand/15 via-transparent to-violet-600/15 blur-2xl"
          />
          <div className="glass overflow-hidden rounded-3xl shadow-2xl shadow-black/50">
            {/* Chrome */}
            <div className="flex items-center gap-2 border-b border-white/[0.06] bg-white/[0.03] px-5 py-3.5">
              <span className="h-3 w-3 rounded-full bg-red-400/70" aria-hidden />
              <span className="h-3 w-3 rounded-full bg-amber-400/70" aria-hidden />
              <span className="h-3 w-3 rounded-full bg-brand/70" aria-hidden />
              <span className="ml-3 flex items-center gap-1.5 font-mono text-xs text-zinc-500">
                <Terminal className="h-3.5 w-3.5" aria-hidden />
                moe.dev/roadmap
              </span>
            </div>

            {/* Phase tabs */}
            <div role="tablist" aria-label="Roadmap phases" className="grid grid-cols-2 gap-2 border-b border-white/[0.06] px-5 py-4 sm:grid-cols-4">
              {phases.map((p) => (
                <button
                  key={p.id}
                  role="tab"
                  aria-selected={active === p.id}
                  onClick={() => setActive(p.id)}
                  className={cn(
                    "relative rounded-xl px-3 py-2.5 text-xs font-semibold transition-colors duration-300",
                    active === p.id ? "text-ink-950" : "text-zinc-400 hover:text-white",
                  )}
                >
                  {active === p.id && (
                    <motion.span
                      layoutId="roadmap-tab"
                      className="absolute inset-0 rounded-xl bg-gradient-to-r from-brand to-teal-400"
                      transition={{ duration: 0.45, ease: EASE }}
                    />
                  )}
                  <span className="relative z-10">{p.label}</span>
                </button>
              ))}
            </div>

            {/* Phase content */}
            <div className="min-h-[24rem] p-6 sm:p-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={phase.id}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.35, ease: EASE }}
                >
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="font-display text-lg font-semibold text-white">{phase.title}</h3>
                    <span className="hidden flex-none rounded-full border border-brand/20 bg-brand/10 px-3 py-1 text-[11px] font-semibold text-brand sm:block">
                      {phase.meta}
                    </span>
                  </div>
                  <p className="mt-2.5 text-sm leading-relaxed text-zinc-400">{phase.desc}</p>
                  <ul className="mt-5 space-y-3">
                    {phase.items.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-zinc-300">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-brand" aria-hidden />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 rounded-xl border border-white/[0.07] bg-ink-950/70 p-4 font-mono text-xs leading-relaxed text-teal-300">
                    <span className="select-none text-zinc-600">$ </span>
                    {phase.snippet}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Progress footer */}
            <div className="border-t border-white/[0.06] bg-white/[0.02] px-6 py-4">
              <div className="flex items-center justify-between text-xs text-zinc-500">
                <span>
                  Phase {idx + 1} of {phases.length}
                </span>
                <span>12 weeks · ~7 hrs/week</span>
              </div>
              <div className="mt-2.5 h-1.5 overflow-hidden rounded-full bg-white/[0.06]">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-brand to-teal-400"
                  initial={false}
                  animate={{ width: `${((idx + 1) / phases.length) * 100}%` }}
                  transition={{ duration: 0.5, ease: EASE }}
                />
              </div>
            </div>
          </div>

          <div className="glass absolute -right-3 -top-4 rotate-2 rounded-2xl px-4 py-2 text-xs font-semibold text-zinc-200 shadow-xl shadow-black/40 sm:-right-6">
            <span className="text-brand">⚡</span> Updated for 2025 · Kotlin 2.x · Compose 1.7
          </div>
        </motion.div>
      </div>
    </section>
  );
}
