import { animate, motion, useInView } from "framer-motion";
import { CheckCircle2, Rocket, ShieldCheck, Users } from "lucide-react";
import { useEffect, useRef } from "react";
import { EASE, fadeUp, scaleIn, stagger, viewport } from "../lib/animations";

function Stat({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  useEffect(() => {
    if (!inView || !ref.current) return;
    const controls = animate(0, value, {
      duration: 1.8,
      ease: EASE,
      onUpdate: (v) => {
        if (ref.current) ref.current.textContent = String(Math.round(v));
      },
    });
    return () => controls.stop();
  }, [inView, value]);

  return (
    <div className="rounded-2xl border border-white/[0.07] bg-white/[0.03] p-5 text-center backdrop-blur transition-colors duration-300 hover:border-brand/25">
      <p className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
        <span ref={ref}>0</span>
        <span className="text-gradient">{suffix}</span>
      </p>
      <p className="mt-1.5 text-xs font-medium uppercase tracking-wider text-zinc-500">{label}</p>
    </div>
  );
}

const benefits = [
  {
    icon: Rocket,
    title: "Outcomes, not hours",
    desc: "Every sprint ends with a shipped, reviewable artifact you can point to in performance reviews and interviews.",
  },
  {
    icon: CheckCircle2,
    title: "Reviewed by a senior, always",
    desc: "Submit your code weekly and get the kind of deep, opinionated feedback teams usually pay staff engineers for.",
  },
  {
    icon: Users,
    title: "A cohort that pushes you",
    desc: "Ship alongside a curated group of ambitious Android engineers — accountability you can't get from a video course.",
  },
  {
    icon: ShieldCheck,
    title: "7-day risk-free guarantee",
    desc: "Not the right fit? Full refund within your first week. No forms, no friction, no hard feelings.",
  },
];

export default function Benefits() {
  return (
    <section id="benefits" className="relative scroll-mt-24 overflow-hidden py-24 sm:py-32">
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-violet-500/40 to-transparent" />
        <div className="absolute left-[-8%] top-1/3 h-[24rem] w-[24rem] rounded-full bg-teal-500/10 blur-[120px]" />
      </div>

      <div className="container-x grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
        {/* Visual */}
        <motion.div variants={scaleIn} initial="hidden" whileInView="visible" viewport={viewport} className="relative order-2 lg:order-1">
          <div aria-hidden className="absolute -inset-5 -z-10 rounded-[3rem] bg-gradient-to-br from-brand/15 via-transparent to-violet-600/15 blur-2xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 p-2">
            <img
              src="/images/code-desk.jpg"
              alt="Android development workspace with Kotlin code on an ultrawide monitor"
              className="aspect-[4/3] w-full rounded-[1.6rem] object-cover"
              loading="lazy"
              width={1024}
              height={768}
            />
            <div aria-hidden className="absolute inset-2 rounded-[1.6rem] bg-gradient-to-t from-ink-950/60 via-transparent to-transparent" />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.35, duration: 0.6, ease: EASE }}
            className="glass animate-float absolute -bottom-7 left-6 right-6 rounded-2xl p-5 shadow-2xl shadow-black/50 sm:left-10 sm:right-auto sm:max-w-sm"
          >
            <p className="text-sm leading-relaxed text-zinc-300">
              <span className="font-semibold text-white">&ldquo;Ship code you&apos;d defend in review.</span>{" "}
              That&apos;s the bar for every module — and the bar senior interviewers are silently testing for.&rdquo;
            </p>
            <p className="mt-3 text-xs font-semibold text-brand">— Moe, on the philosophy behind the roadmap</p>
          </motion.div>
        </motion.div>

        {/* Copy */}
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={viewport} className="order-1 lg:order-2">
          <motion.span
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand/5 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-brand"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-brand" aria-hidden />
            Why it works
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="font-display mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]"
          >
            Built like production software — <span className="text-gradient">tested on real careers.</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-5 max-w-xl text-base leading-relaxed text-zinc-400 sm:text-lg">
            Most courses teach syntax. This roadmap treats your career like a product: measurable milestones, senior
            review loops, and a clear definition of done for every single week.
          </motion.p>

          <div className="mt-9 grid gap-5 sm:grid-cols-2">
            {benefits.map((b) => {
              const Icon = b.icon;
              return (
                <motion.div key={b.title} variants={fadeUp} className="group flex gap-4">
                  <span className="mt-0.5 grid h-10 w-10 flex-none place-items-center rounded-xl border border-white/10 bg-white/5 text-brand transition-all duration-300 group-hover:border-brand/30 group-hover:bg-brand/10">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <span>
                    <span className="font-display block text-base font-semibold text-white">{b.title}</span>
                    <span className="mt-1 block text-sm leading-relaxed text-zinc-400">{b.desc}</span>
                  </span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>

      {/* Stats */}
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        className="container-x mt-20 grid grid-cols-2 gap-4 lg:grid-cols-4"
      >
        <motion.div variants={fadeUp}>
          <Stat value={12} suffix="+" label="Years in Android" />
        </motion.div>
        <motion.div variants={fadeUp}>
          <Stat value={35} suffix="+" label="Apps shipped" />
        </motion.div>
        <motion.div variants={fadeUp}>
          <Stat value={120} suffix="+" label="Engineers mentored" />
        </motion.div>
        <motion.div variants={fadeUp}>
          <Stat value={97} suffix="%" label="Interview pass rate" />
        </motion.div>
      </motion.div>
    </section>
  );
}
