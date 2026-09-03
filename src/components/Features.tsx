import { motion } from "framer-motion";
import { Gauge, Layers, Network, Smartphone, Target, TrendingUp, type LucideIcon } from "lucide-react";
import { fadeUp, stagger, viewport } from "../lib/animations";
import SectionHeading from "./SectionHeading";

type Feature = {
  tag: string;
  icon: LucideIcon;
  title: string;
  desc: string;
};

const features: Feature[] = [
  {
    tag: "MODULE 01",
    icon: Smartphone,
    title: "The modern Android stack",
    desc: "Kotlin, Jetpack Compose, Coroutines & Flow, DI and KMP — the exact toolchain used by top product teams today, not a 2018 tutorial.",
  },
  {
    tag: "MODULE 02",
    icon: Layers,
    title: "Architecture that scales",
    desc: "MVVM to Clean Architecture with modularization, offline-first data layers and feature modules you can actually test.",
  },
  {
    tag: "MODULE 03",
    icon: Gauge,
    title: "Performance engineering",
    desc: "Cold-start budgets, ANR elimination, memory profiling and APK slimming — with real Android Studio profiler sessions.",
  },
  {
    tag: "MODULE 04",
    icon: Network,
    title: "Mobile system design",
    desc: "Designing offline-first, realtime and media-heavy apps — and how to whiteboard mobile architecture under interview pressure.",
  },
  {
    tag: "MODULE 05",
    icon: Target,
    title: "The interview engine",
    desc: "120+ curated Android questions, live coding mocks and behavioural STAR drills tuned specifically to senior loops.",
  },
  {
    tag: "MODULE 06",
    icon: TrendingUp,
    title: "Career positioning",
    desc: "A resume and LinkedIn system, salary negotiation scripts, and how to get recruited instead of endlessly applying.",
  },
];

export default function Features() {
  return (
    <section id="features" className="relative scroll-mt-24 py-24 sm:py-32">
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-brand/40 to-transparent" />
      </div>
      <div className="container-x">
        <SectionHeading
          eyebrow="The curriculum"
          title={
            <>
              Everything standing between you and <span className="text-gradient">&ldquo;senior&rdquo;</span>
            </>
          }
          subtitle="Six modules, engineered to compound. Each one builds on the last — from modern stack to the negotiation table."
        />
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <motion.article
                key={f.tag}
                variants={fadeUp}
                className="group glass relative overflow-hidden rounded-3xl p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-brand/30 hover:bg-white/[0.06] hover:shadow-2xl hover:shadow-brand/10"
              >
                <div
                  aria-hidden
                  className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-brand/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
                />
                <div className="flex items-start justify-between">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.03] text-brand transition-all duration-500 group-hover:rotate-3 group-hover:scale-110 group-hover:border-brand/30 group-hover:text-teal-300">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <span className="font-mono text-[11px] font-medium tracking-widest text-zinc-600">{f.tag}</span>
                </div>
                <h3 className="font-display mt-5 text-lg font-semibold text-white">{f.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-zinc-400">{f.desc}</p>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
