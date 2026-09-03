import { motion } from "framer-motion";
import { fadeIn } from "../lib/animations";

const companies = [
  "Google",
  "Spotify",
  "Shopify",
  "Grab",
  "Gojek",
  "Netflix",
  "Stripe",
  "Uber",
  "Revolut",
  "Canva",
  "Monzo",
  "Zalora",
];

export default function SocialProof() {
  return (
    <section
      id="social-proof"
      aria-label="Companies where mentored engineers work"
      className="border-y border-white/[0.06] bg-white/[0.02] py-12"
    >
      <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} className="container-x">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.25em] text-zinc-500">
          Mentored engineers now shipping at
        </p>
        <div className="mask-fade-x relative mt-8 overflow-hidden">
          <div className="animate-marquee flex w-max items-center gap-14 hover:[animation-play-state:paused]">
            {[...companies, ...companies].map((c, i) => (
              <span
                key={`${c}-${i}`}
                className="flex items-center gap-2.5 text-zinc-500 transition-colors duration-300 hover:text-zinc-200"
              >
                <span className="font-display grid h-7 w-7 place-items-center rounded-lg border border-white/10 bg-white/5 text-[11px] font-bold text-zinc-400">
                  {c[0]}
                </span>
                <span className="font-display whitespace-nowrap text-lg font-semibold tracking-tight">{c}</span>
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
