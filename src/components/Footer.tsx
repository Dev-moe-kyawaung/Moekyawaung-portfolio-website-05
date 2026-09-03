import { Mail } from "lucide-react";

type SocialIconProps = { className?: string };

const GithubIcon = ({ className }: SocialIconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
    <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55v-2.17c-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.75 2.69 1.25 3.35.95.1-.74.4-1.25.72-1.53-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.42-2.7 5.39-5.26 5.68.41.35.77 1.05.77 2.12v3.14c0 .31.21.67.8.55A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
  </svg>
);

const LinkedinIcon = ({ className }: SocialIconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
    <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z" />
  </svg>
);

const XIcon = ({ className }: SocialIconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
    <path d="M18.24 2.25h3.31l-7.23 8.26 8.5 11.24h-6.66l-5.21-6.82-5.97 6.82H1.67l7.73-8.84L1.25 2.25h6.83l4.71 6.23 5.45-6.23Zm-1.16 17.52h1.83L7.08 4.13H5.12l11.96 15.64Z" />
  </svg>
);

const YoutubeIcon = ({ className }: SocialIconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
    <path d="M23.5 6.51a2.99 2.99 0 0 0-2.1-2.12C19.55 3.9 12 3.9 12 3.9s-7.55 0-9.4.49A2.99 2.99 0 0 0 .5 6.51 31.3 31.3 0 0 0 0 12a31.3 31.3 0 0 0 .5 5.49 2.99 2.99 0 0 0 2.1 2.12c1.85.49 9.4.49 9.4.49s7.55 0 9.4-.49a2.99 2.99 0 0 0 2.1-2.12A31.3 31.3 0 0 0 24 12a31.3 31.3 0 0 0-.5-5.49ZM9.55 15.57V8.43L15.82 12l-6.27 3.57Z" />
  </svg>
);

const explore = [
  { label: "Features", href: "#features" },
  { label: "The roadmap", href: "#roadmap" },
  { label: "Why it works", href: "#benefits" },
  { label: "Reviews", href: "#testimonials" },
];

const program = [
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
  { label: "Mentorship cohort", href: "#pricing" },
  { label: "Book a 1:1", href: "mailto:hello@moekyawaung.dev" },
];

const resources = [
  { label: "The blog", href: "#top" },
  { label: "Newsletter", href: "#cta" },
  { label: "Open source", href: "#top" },
  { label: "Speaking", href: "#top" },
];

const socials = [
  { label: "GitHub", href: "https://github.com", icon: GithubIcon },
  { label: "LinkedIn", href: "https://linkedin.com", icon: LinkedinIcon },
  { label: "X (Twitter)", href: "https://x.com", icon: XIcon },
  { label: "YouTube", href: "https://youtube.com", icon: YoutubeIcon },
  { label: "Email", href: "mailto:hello@moekyawaung.dev", icon: Mail },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-ink-900/40">
      <div className="container-x py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          {/* Brand */}
          <div className="max-w-sm">
            <a href="#top" className="group inline-flex items-center gap-3" aria-label="Moe Kyaw Aung — back to top">
              <span className="font-display grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-brand to-teal-500 text-sm font-bold text-ink-950 shadow-lg shadow-brand/25 transition-transform duration-300 group-hover:rotate-6">
                MK
              </span>
              <span>
                <span className="font-display block text-sm font-semibold tracking-tight text-white">Moe Kyaw Aung</span>
                <span className="block text-[11px] font-medium tracking-wide text-zinc-500">Senior Android Developer</span>
              </span>
            </a>
            <p className="mt-5 text-sm leading-relaxed text-zinc-500">
              Helping Android engineers ship senior-grade code and land senior-level careers — one roadmap at a time.
            </p>
            <div className="mt-6 flex flex-wrap gap-2.5">
              {socials.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target={s.href.startsWith("http") ? "_blank" : undefined}
                    rel={s.href.startsWith("http") ? "noreferrer noopener" : undefined}
                    aria-label={s.label}
                    className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5 text-zinc-400 transition-all duration-300 hover:-translate-y-1 hover:border-brand/40 hover:bg-brand/10 hover:text-brand"
                  >
                    <Icon className="h-[18px] w-[18px]" aria-hidden />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Link columns */}
          <nav aria-label="Explore">
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">Explore</h3>
            <ul className="mt-5 space-y-3">
              {explore.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-sm text-zinc-400 transition-colors duration-200 hover:text-brand">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Program">
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">Program</h3>
            <ul className="mt-5 space-y-3">
              {program.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-sm text-zinc-400 transition-colors duration-200 hover:text-brand">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Resources">
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">Resources</h3>
            <ul className="mt-5 space-y-3">
              {resources.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-sm text-zinc-400 transition-colors duration-200 hover:text-brand">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/[0.06] pt-8 sm:flex-row">
          <p className="text-xs text-zinc-500">© {new Date().getFullYear()} Moe Kyaw Aung. All rights reserved.</p>
          <p className="font-mono text-xs text-zinc-600">
            Built with Kotlin, Jetpack Compose &amp; caffeine <span aria-hidden>☕</span>
          </p>
          <div className="flex gap-6 text-xs text-zinc-500">
            <a href="#top" className="transition-colors hover:text-zinc-300">
              Privacy
            </a>
            <a href="#top" className="transition-colors hover:text-zinc-300">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
