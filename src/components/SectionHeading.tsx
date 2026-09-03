import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { fadeUp, stagger, viewport } from "../lib/animations";
import { cn } from "../utils/cn";

type Props = {
  eyebrow: string;
  title: ReactNode;
  subtitle?: string;
  align?: "center" | "left";
  className?: string;
};

export default function SectionHeading({ eyebrow, title, subtitle, align = "center", className }: Props) {
  return (
    <motion.div
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      className={cn(
        "mb-14 flex flex-col gap-4 sm:mb-16",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className,
      )}
    >
      <motion.span
        variants={fadeUp}
        className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand/5 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-brand"
      >
        <span className="h-1.5 w-1.5 rounded-full bg-brand" aria-hidden />
        {eyebrow}
      </motion.span>
      <motion.h2
        variants={fadeUp}
        className="font-display max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p variants={fadeUp} className="max-w-2xl text-base leading-relaxed text-zinc-400 sm:text-lg">
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
}
