import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CursorSpotlight from "@/components/CursorSpotlight";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0b0f19] text-slate-100 selection:bg-[#12BDF7]/25 selection:text-[#12BDF7] relative overflow-hidden">
      {/* Interactive Subtle Cursor Spotlight Aura */}
      <CursorSpotlight />

      {/* Fixed Navigation Header with BrandHive Cyan Pill */}
      <Navbar />

      {/* Hero Section with Professional Portrait & Staged Animations */}
      <Hero />

      {/* About & Professional Profile */}
      <About />

      {/* Numbered Services & Solutions */}
      <Services />

      {/* Skills & Technological Arsenal */}
      <Skills />

      {/* Selected Projects Showcase (Stacked Accordion & Grid Gallery Views) */}
      <Projects />

      {/* Professional Experience Timeline */}
      <Experience />

      {/* Education & Trilingual Fluency */}
      <Education />

      {/* Direct Inquiries & Contact Form */}
      <Contact />

      {/* Footer */}
      <Footer />
    </main>
  );
}
