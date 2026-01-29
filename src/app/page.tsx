import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { AboutSkills } from "@/components/AboutSkills";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { Education } from "@/components/Education";
import { Certifications } from "@/components/Certifications";
import { Blog } from "@/components/Blog";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background selection:bg-emerald-500/30">
      <Navbar />
      <Hero />
      <AboutSkills />
      <Education />
      <Experience />
      <Projects />
      <Certifications />
      <Blog />
      <Contact />
      <Footer />
    </main>
  );
}
