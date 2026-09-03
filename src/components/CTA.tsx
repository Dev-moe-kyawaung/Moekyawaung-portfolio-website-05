import { motion } from "framer-motion";
import { ArrowRight, CalendarClock } from "lucide-react";
import { fadeUp, scaleIn, stagger, viewport } from "../lib/animations";

export default function CTA() {
  return (
    <section id="cta" className="container-x scroll-mt-24 py-24 sm:py-32">
      <motion.div
        variants={scaleIn}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        className="relative overflow-hidden rounded-[2.5rem] border border-white/10 px-6 py-16 text-center sm:px-16 sm:py-20"
      >
        {/* Background */}
        <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-br from-ink-900 via-ink-900 to-ink-800" />
        <div aria-hidden className="grid-bg mask-fade-b absolute inset-0 -z-10 opacity-60" />
        <div aria-hidden className="animate-aurora absolute -top-24 left-1/4 -z-10 h-80 w-80 rounded-full bg-brand/25 blur-[110px]" />
        <div aria-hidden className="animate-aurora absolute -bottom-24 right-1/4 -z-10 h-80 w-80 rounded-full bg-violet-600/25 blur-[110px] [animation-delay:-9s]" />
        <div
          aria-hidden
          className="absolute inset-x-16 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-brand/60 to-transparent"
        />

        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={viewport}>
          <motion.span
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-full border border-brand/25 bg-brand/10 px-4 py-1.5 text-xs font-semibold text-brand"
          >
            <CalendarClock className="h-3.5 w-3.5" aria-hidden />
            Next cohort starts soon · Limited to 20 engineers
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="font-display mx-auto mt-6 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl lg:leading-[1.12]"
          >
            Your senior title is <span className="text-gradient">one roadmap away.</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-zinc-400 sm:text-lg">
            Join 120+ engineers who stopped guessing and started shipping senior-level work. Start free tonight — the
            first phase takes less than a week.
          </motion.p>
          <motion.div variants={fadeUp} className="mt-9 flex flex-col items-center justify-center gap-3.5 sm:flex-row">
            <a
              href="#pricing"
              className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-brand to-teal-400 px-8 py-4 text-sm font-semibold text-ink-950 shadow-xl shadow-brand/30 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-brand/40"
            >
              <span
                aria-hidden
                className="absolute inset-0 -translate-x-full skew-x-12 bg-gradient-to-r from-transparent via-white/50 to-transparent transition-transform duration-700 group-hover:translate-x-full"
              />
              Get the free roadmap
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden />
            </a>
            <a
              href="mailto:hello@moekyawaung.dev"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-8 py-4 text-sm font-semibold text-white backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/10"
            >
              Book a 1:1 call
            </a>
          </motion.div>
          <motion.p variants={fadeUp} className="mt-6 text-xs text-zinc-500">
            Free forever plan · No credit card required · 7-day money-back guarantee on paid plans
          </motion.p>
        </motion.div>
      </motion.div>
    </section>
  );
}
