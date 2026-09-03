import { motion } from "framer-motion";
import { ArrowRight, Check, Sparkles } from "lucide-react";
import { fadeUp, stagger, viewport } from "../lib/animations";
import { cn } from "../utils/cn";
import SectionHeading from "./SectionHeading";

type Plan = {
  name: string;
  tagline: string;
  price: string;
  period: string;
  cta: string;
  features: string[];
  featured?: boolean;
};

const plans: Plan[] = [
  {
    name: "Roadmap",
    tagline: "For self-driven engineers",
    price: "$0",
    period: "forever",
    cta: "Get instant access",
    features: [
      "The complete 12-week roadmap",
      "80+ curated resources & videos",
      "Weekly newsletter with hiring intel",
      "Community Discord access",
    ],
  },
  {
    name: "Mentorship",
    tagline: "For engineers who want feedback",
    price: "$149",
    period: "per month",
    cta: "Start your cohort",
    featured: true,
    features: [
      "Everything in Roadmap",
      "Monthly 1:1 with Moe",
      "2 async code reviews per month",
      "Career checkpoint every 4 weeks",
      "Private cohort of 20 engineers",
    ],
  },
  {
    name: "Elite 1:1",
    tagline: "For a fast, guided promotion",
    price: "$990",
    period: "one-time · 6 weeks",
    cta: "Book a discovery call",
    features: [
      "Everything in Mentorship",
      "Weekly 1:1 sessions",
      "Resume & LinkedIn rebuilt",
      "3 mock senior interviews",
      "Offer negotiation playbook",
      "Referrals into partner companies",
    ],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative scroll-mt-24 py-24 sm:py-32">
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-brand/40 to-transparent" />
        <div className="absolute left-1/2 top-1/3 h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-brand/8 blur-[140px]" />
      </div>

      <div className="container-x">
        <SectionHeading
          eyebrow="Pricing"
          title={
            <>
              Invest in the career, <span className="text-gradient">not just the course</span>
            </>
          }
          subtitle="Start free. Upgrade when you want a senior in your corner — every plan compounds toward the same goal: your next title."
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mx-auto grid max-w-5xl items-stretch gap-6 lg:grid-cols-3"
        >
          {plans.map((p) => (
            <motion.div
              key={p.name}
              variants={fadeUp}
              className={cn(
                "relative rounded-[1.75rem] transition-transform duration-500 hover:-translate-y-2",
                p.featured && "bg-gradient-to-b from-brand via-teal-400 to-violet-500 p-px shadow-2xl shadow-brand/20 lg:-my-3",
              )}
            >
              {p.featured && (
                <span className="absolute -top-3.5 left-1/2 z-10 flex -translate-x-1/2 items-center gap-1.5 whitespace-nowrap rounded-full bg-gradient-to-r from-brand to-teal-400 px-4 py-1.5 text-[11px] font-bold uppercase tracking-wider text-ink-950 shadow-lg shadow-brand/30">
                  <Sparkles className="h-3 w-3" aria-hidden />
                  Most popular
                </span>
              )}
              <div
                className={cn(
                  "flex h-full flex-col rounded-[calc(1.75rem-1px)] p-8",
                  p.featured
                    ? "bg-ink-900/95 backdrop-blur-xl"
                    : "glass transition-colors duration-500 hover:border-brand/25 hover:bg-white/[0.06]",
                )}
              >
                <h3 className="font-display text-xl font-semibold text-white">{p.name}</h3>
                <p className="mt-1 text-sm text-zinc-500">{p.tagline}</p>
                <p className="mt-6 flex items-baseline gap-2">
                  <span className="font-display text-5xl font-bold tracking-tight text-white">{p.price}</span>
                  <span className="text-sm text-zinc-500">/ {p.period}</span>
                </p>
                <ul className="mt-7 flex-1 space-y-3.5">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm text-zinc-300">
                      <span
                        className={cn(
                          "mt-0.5 grid h-5 w-5 flex-none place-items-center rounded-full",
                          p.featured ? "bg-brand/20 text-brand" : "bg-white/10 text-zinc-300",
                        )}
                      >
                        <Check className="h-3 w-3" aria-hidden />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#cta"
                  className={cn(
                    "group relative mt-8 inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-6 py-3.5 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5",
                    p.featured
                      ? "bg-gradient-to-r from-brand to-teal-400 text-ink-950 shadow-lg shadow-brand/30 hover:shadow-xl hover:shadow-brand/40"
                      : "border border-white/10 bg-white/5 text-white hover:border-white/25 hover:bg-white/10",
                  )}
                >
                  {p.featured && (
                    <span
                      aria-hidden
                      className="absolute inset-0 -translate-x-full skew-x-12 bg-gradient-to-r from-transparent via-white/50 to-transparent transition-transform duration-700 group-hover:translate-x-full"
                    />
                  )}
                  {p.cta}
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mt-10 text-center text-sm text-zinc-500"
        >
          <span className="font-medium text-zinc-300">7-day money-back guarantee</span> · Cancel anytime · Invoices
          available for company training budgets
        </motion.p>
      </div>
    </section>
  );
}
