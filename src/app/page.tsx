import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { AboutSkills } from "@/components/AboutSkills";
import { TimelineRoadmap } from "@/components/TimelineRoadmap";
import { Projects } from "@/components/Projects";
import { Certifications } from "@/components/Certifications";
import { Blog } from "@/components/Blog";
import { Game } from "@/components/Game";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F3F4F6] dark:bg-[#121212] selection:bg-[#FFEB3B] selection:text-black">
      <Navbar />
      <Hero />
      <AboutSkills />
      <TimelineRoadmap />
      <Projects />
      <Certifications />
      <Blog />
      <Game />
      <Contact />
      <Footer />
    </main>
  );
}
