import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { EASE } from "../lib/animations";
import { cn } from "../utils/cn";

const links = [
  { label: "Features", href: "#features" },
  { label: "Roadmap", href: "#roadmap" },
  { label: "Benefits", href: "#benefits" },
  { label: "Reviews", href: "#testimonials" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <motion.header
      initial={{ y: -72, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: EASE }}
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled || open
          ? "border-b border-white/[0.06] bg-ink-950/80 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <nav aria-label="Main navigation" className="container-x flex h-16 items-center justify-between sm:h-[4.5rem]">
        <a href="#top" className="group flex items-center gap-3" aria-label="Moe Kyaw Aung — back to top">
          <span className="font-display grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-brand to-teal-500 text-sm font-bold text-ink-950 shadow-lg shadow-brand/25 transition-transform duration-300 group-hover:rotate-6 group-hover:scale-105">
            MK
          </span>
          <span className="hidden sm:block">
            <span className="font-display block text-sm font-semibold tracking-tight text-white">Moe Kyaw Aung</span>
            <span className="block text-[11px] font-medium tracking-wide text-zinc-500">Senior Android Developer</span>
          </span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-zinc-400 transition-colors duration-200 hover:bg-white/5 hover:text-white"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href="#pricing"
            className="group relative hidden items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-brand to-teal-400 px-5 py-2.5 text-sm font-semibold text-ink-950 shadow-lg shadow-brand/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-brand/30 sm:inline-flex"
          >
            <span
              aria-hidden
              className="absolute inset-0 -translate-x-full skew-x-12 bg-gradient-to-r from-transparent via-white/50 to-transparent transition-transform duration-700 group-hover:translate-x-full"
            />
            Get the roadmap
            <ArrowRight className="h-4 w-4" aria-hidden />
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5 text-zinc-300 transition hover:bg-white/10 lg:hidden"
          >
            {open ? <X className="h-5 w-5" aria-hidden /> : <Menu className="h-5 w-5" aria-hidden />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: EASE }}
            className="overflow-hidden border-b border-white/[0.06] bg-ink-950/95 backdrop-blur-2xl lg:hidden"
          >
            <ul className="container-x flex flex-col gap-1 py-5">
              {links.map((l, i) => (
                <motion.li
                  key={l.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + i * 0.05, duration: 0.35, ease: EASE }}
                >
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-4 py-3 text-base font-medium text-zinc-300 transition hover:bg-white/5 hover:text-white"
                  >
                    {l.label}
                  </a>
                </motion.li>
              ))}
              <li className="mt-3">
                <a
                  href="#pricing"
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-brand to-teal-400 px-4 py-3.5 text-base font-semibold text-ink-950"
                >
                  Get the roadmap
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
