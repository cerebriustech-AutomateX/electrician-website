import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { StatsBar } from "./components/StatsBar";
import { Services } from "./components/Services";
import { HowItWorks } from "./components/HowItWorks";
import { Pricing } from "./components/Pricing";
import { MidPageCTA } from "./components/MidPageCTA";
import { Testimonials } from "./components/Testimonials";
import { FAQ } from "./components/FAQ";
import { ContactForm } from "./components/ContactForm";
import { TrustAndAreas } from "./components/TrustAndAreas";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="bg-[#050505] text-white selection:bg-gold selection:text-black">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-6 focus:py-3 focus:bg-white focus:text-black focus:rounded-xl focus:font-bold">
        Skip to content
      </a>

      <Navbar />

      <main id="main-content">
        <Hero />
        <StatsBar />
        <Services />
        <HowItWorks />
        <Pricing />
        <MidPageCTA />
        <Testimonials />
        <FAQ />
        <ContactForm />
        <TrustAndAreas />
      </main>

      <Footer />
    </div>
  );
}
