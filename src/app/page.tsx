import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { AboutSkills } from "@/components/AboutSkills";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background selection:bg-emerald-500/30">
      <Navbar />
      <Hero />
      <AboutSkills />
      <Experience />
      <Projects />
      <Footer />
    </main>
  );
}
