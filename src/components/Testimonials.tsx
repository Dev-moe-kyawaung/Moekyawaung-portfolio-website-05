import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { fadeUp, stagger, viewport } from "../lib/animations";
import { cn } from "../utils/cn";
import SectionHeading from "./SectionHeading";

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  initials: string;
  cls: string;
};

const testimonials: Testimonial[] = [
  {
    quote:
      "I went from mid-level at a local agency to Senior Android Engineer at a fintech in four months. The roadmap removed every single guess from the process.",
    name: "Thura Htun",
    role: "Senior Android Engineer · Wave Money",
    initials: "TH",
    cls: "from-emerald-400 to-teal-500",
  },
  {
    quote:
      "The architecture phase alone was worth the price. I finally understand how to design features that don't rot — my code reviews now get approved on the first pass.",
    name: "Ei Phyu Sin",
    role: "Android Engineer · Grab",
    initials: "EP",
    cls: "from-violet-400 to-fuchsia-500",
  },
  {
    quote:
      "Moe's mock interviews were harder than the real thing. I walked into a big-tech loop overprepared and left with an offer.",
    name: "Kaung Myat",
    role: "Android Developer · Shopify",
    initials: "KM",
    cls: "from-sky-400 to-indigo-500",
  },
  {
    quote:
      "A production mindset in every module. My review comments went from nitpicking to teaching — my team noticed within weeks.",
    name: "Nyi Nyi Lwin",
    role: "Tech Lead · Oway",
    initials: "NL",
    cls: "from-amber-400 to-orange-500",
  },
  {
    quote:
      "Clear, opinionated and honest. It's the senior engineer I wish had been reviewing my code my entire career.",
    name: "Hsu Yati",
    role: "Software Engineer · Delivery Hero",
    initials: "HY",
    cls: "from-rose-400 to-pink-500",
  },
  {
    quote:
      "Paid for itself with the first salary negotiation. The playbook scripts landed me a 38% bump on my offer.",
    name: "Aung Pyae",
    role: "Mobile Developer · 99.co",
    initials: "AP",
    cls: "from-teal-400 to-cyan-500",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative scroll-mt-24 py-24 sm:py-32">
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="absolute right-[-8%] top-1/4 h-[26rem] w-[26rem] rounded-full bg-violet-600/10 blur-[130px]" />
      </div>
      <div className="container-x">
        <SectionHeading
          eyebrow="Wall of love"
          title={
            <>
              Engineers who stopped guessing, <span className="text-gradient">started shipping</span>
            </>
          }
          subtitle="Real outcomes from real cohorts — promotions, offers, and a whole lot of unblocked careers."
        />
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="grid gap-5 md:grid-cols-2 lg:grid-cols-3"
        >
          {testimonials.map((t) => (
            <motion.figure
              key={t.name}
              variants={fadeUp}
              className="group glass flex flex-col rounded-3xl p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-brand/25 hover:bg-white/[0.06] hover:shadow-2xl hover:shadow-brand/10"
            >
              <div className="flex items-center gap-1 text-amber-400" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" aria-hidden />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-zinc-300">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-white/[0.06] pt-5">
                <span
                  className={cn(
                    "grid h-10 w-10 flex-none place-items-center rounded-full bg-gradient-to-br text-xs font-bold text-white",
                    t.cls,
                  )}
                >
                  {t.initials}
                </span>
                <span>
                  <span className="block text-sm font-semibold text-white">{t.name}</span>
                  <span className="block text-xs text-zinc-500">{t.role}</span>
                </span>
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
