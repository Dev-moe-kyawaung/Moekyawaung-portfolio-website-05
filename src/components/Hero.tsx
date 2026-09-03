import { motion } from "framer-motion";
import { ArrowRight, Briefcase, ChevronDown, Play, Rocket, Star } from "lucide-react";
import { EASE, fadeUp, stagger } from "../lib/animations";
import { cn } from "../utils/cn";

const avatars = [
  { initials: "TH", cls: "from-emerald-400 to-teal-500" },
  { initials: "EP", cls: "from-violet-400 to-fuchsia-500" },
  { initials: "KM", cls: "from-sky-400 to-indigo-500" },
  { initials: "NL", cls: "from-amber-400 to-orange-500" },
];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pb-24 pt-32 sm:pb-28 sm:pt-40">
      {/* Ambient background */}
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="grid-bg mask-fade-b absolute inset-0 opacity-70" />
        <div className="animate-aurora absolute -top-40 left-1/2 h-[34rem] w-[34rem] -translate-x-[70%] rounded-full bg-brand/20 blur-[120px]" />
        <div className="animate-aurora absolute right-[-10%] top-10 h-[30rem] w-[30rem] rounded-full bg-violet-600/20 blur-[130px] [animation-delay:-6s]" />
        <div className="animate-aurora absolute bottom-[-6rem] left-[-8%] h-[26rem] w-[26rem] rounded-full bg-teal-500/15 blur-[120px] [animation-delay:-12s]" />
      </div>

      <div className="container-x grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
        {/* Copy */}
        <motion.div variants={stagger} initial="hidden" animate="visible" className="max-w-2xl">
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/5 py-1.5 pl-3 pr-4 backdrop-blur"
          >
            <span className="animate-pulse-dot h-2 w-2 rounded-full bg-brand" aria-hidden />
            <span className="text-xs font-medium tracking-wide text-zinc-300">
              Senior Android Developer · Mentoring the next cohort
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="font-display mt-6 text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-[4.25rem]"
          >
            Go from Android developer to <span className="text-gradient">senior</span> — without a decade of trial and
            error.
          </motion.h1>

          <motion.p variants={fadeUp} className="mt-6 max-w-xl text-base leading-relaxed text-zinc-400 sm:text-lg">
            I&apos;m <span className="font-medium text-zinc-200">Moe Kyaw Aung</span>. This is my 12-week career
            roadmap — the exact stack, architecture, performance and interview playbook behind 35+ production apps and
            120+ engineers mentored into senior roles.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-9 flex flex-col gap-3.5 sm:flex-row sm:items-center">
            <a
              href="#pricing"
              className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-brand to-teal-400 px-7 py-3.5 text-sm font-semibold text-ink-950 shadow-xl shadow-brand/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-brand/40"
            >
              <span
                aria-hidden
                className="absolute inset-0 -translate-x-full skew-x-12 bg-gradient-to-r from-transparent via-white/50 to-transparent transition-transform duration-700 group-hover:translate-x-full"
              />
              Get the free roadmap
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden />
            </a>
            <a
              href="#roadmap"
              className="group inline-flex items-center justify-center gap-2.5 rounded-full border border-white/10 bg-white/5 px-7 py-3.5 text-sm font-semibold text-zinc-200 backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/10"
            >
              <span className="grid h-6 w-6 place-items-center rounded-full bg-brand/15 text-brand transition-transform duration-300 group-hover:scale-110">
                <Play className="h-3 w-3 fill-current" aria-hidden />
              </span>
              Explore the curriculum
            </a>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-9 flex flex-wrap items-center gap-4">
            <div className="flex -space-x-2.5">
              {avatars.map((a) => (
                <span
                  key={a.initials}
                  className={cn(
                    "grid h-9 w-9 place-items-center rounded-full border-2 border-ink-950 bg-gradient-to-br text-[10px] font-bold text-white",
                    a.cls,
                  )}
                >
                  {a.initials}
                </span>
              ))}
            </div>
            <div className="text-sm">
              <span className="flex items-center text-amber-400" aria-label="Rated 4.9 out of 5 stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-current" aria-hidden />
                ))}
                <span className="ml-1.5 font-semibold text-white">4.9/5</span>
              </span>
              <span className="text-zinc-500">trusted by 120+ Android engineers worldwide</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Portrait composition */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25, ease: EASE }}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          <div
            aria-hidden
            className="animate-spin-slow absolute -inset-10 -z-10 rounded-full bg-[conic-gradient(from_0deg,rgba(61,220,132,0.25),rgba(94,234,212,0.12),rgba(139,92,246,0.22),rgba(61,220,132,0.25))] opacity-60 blur-3xl"
          />
          <div className="glass relative rounded-[2rem] p-3 shadow-2xl shadow-black/50">
            <div className="relative overflow-hidden rounded-[1.6rem]">
              <img
                src="/images/moe-portrait.jpg"
                alt="Portrait of Moe Kyaw Aung, Senior Android Developer"
                className="aspect-[4/5] w-full object-cover"
                width={720}
                height={900}
                fetchPriority="high"
              />
              <div aria-hidden className="absolute inset-0 rounded-[1.6rem] bg-gradient-to-t from-ink-950/70 via-transparent to-transparent" />
            </div>
            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-ink-950/70 px-5 py-4 backdrop-blur-xl">
              <div>
                <p className="font-display text-base font-semibold text-white">Moe Kyaw Aung</p>
                <p className="text-xs text-zinc-400">Senior Android Developer · Yangon → Remote</p>
              </div>
              <span className="flex flex-none items-center gap-1.5 rounded-full border border-brand/30 bg-brand/10 px-3 py-1.5 text-[11px] font-semibold text-brand">
                <span className="animate-pulse-dot h-1.5 w-1.5 rounded-full bg-brand" aria-hidden />
                Available
              </span>
            </div>
          </div>

          {/* Floating chip — experience */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6, ease: EASE }}
            className="animate-float absolute -left-6 top-10 hidden sm:block"
          >
            <div className="glass flex items-center gap-3 rounded-2xl px-4 py-3 shadow-xl shadow-black/40">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-brand/20 to-teal-500/20 text-brand">
                <Briefcase className="h-5 w-5" aria-hidden />
              </span>
              <span>
                <span className="font-display block text-sm font-bold text-white">10+ years</span>
                <span className="block text-[11px] text-zinc-400">production Android</span>
              </span>
            </div>
          </motion.div>

          {/* Floating chip — code */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6, ease: EASE }}
            className="animate-float-slow absolute -right-6 top-1/3 hidden md:block"
          >
            <div className="glass rounded-2xl px-4 py-3 font-mono text-xs leading-relaxed shadow-xl shadow-black/40">
              <p className="text-zinc-500">// the only loop you need</p>
              <p className="mt-1 text-teal-300">
                while(level &lt; <span className="text-violet-400">Senior</span>)
              </p>
              <p className="text-teal-300">
                {"  "}follow(<span className="text-brand">roadmap</span>)
              </p>
            </div>
          </motion.div>

          {/* Floating chip — shipped */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.6, ease: EASE }}
            className="animate-float absolute -bottom-5 -right-2 hidden [animation-delay:-3s] sm:block"
          >
            <div className="glass flex items-center gap-3 rounded-2xl px-4 py-3 shadow-xl shadow-black/40">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 text-violet-300">
                <Rocket className="h-5 w-5" aria-hidden />
              </span>
              <span>
                <span className="font-display block text-sm font-bold text-white">35+ apps</span>
                <span className="block text-[11px] text-zinc-400">shipped to production</span>
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.a
        href="#social-proof"
        aria-label="Scroll down to explore"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-zinc-500 transition-colors hover:text-brand lg:flex"
      >
        <span className="text-[10px] font-semibold uppercase tracking-[0.3em]">Scroll</span>
        <ChevronDown className="h-4 w-4 animate-bounce" aria-hidden />
      </motion.a>
    </section>
  );
}
