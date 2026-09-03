import { MotionConfig } from "framer-motion";
import Benefits from "./components/Benefits";
import CTA from "./components/CTA";
import FAQ from "./components/FAQ";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Pricing from "./components/Pricing";
import Showcase from "./components/Showcase";
import SocialProof from "./components/SocialProof";
import Testimonials from "./components/Testimonials";

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="relative min-h-screen overflow-x-clip bg-ink-950 text-zinc-200">
        <a
          href="#main"
          className="sr-only z-[60] rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-ink-950 focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main">
          <Hero />
          <SocialProof />
          <Features />
          <Showcase />
          <Benefits />
          <Testimonials />
          <Pricing />
          <FAQ />
          <CTA />
        </main>
        <Footer />
      </div>
    </MotionConfig>
  );
}
