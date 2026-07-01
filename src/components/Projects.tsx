"use client";

import React, { useState } from "react";
import { portfolio } from "@/data/portfolio";
import { Github, Globe, ArrowUpRight, Monitor, Cpu, Brain } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

// Extract unique categories from all projects (flatten arrays)
const categories = [
  "All",
  ...Array.from(
    new Set(portfolio.projects.flatMap((p) => p.category ?? ["Other"]))
  ),
];

export function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = portfolio.projects.filter((project) => {
    if (activeCategory === "All") return true;
    return (project.category ?? []).includes(activeCategory);
  });

  return (
    <section id="projects" className="relative py-20 md:py-28 bg-[#F0FDF4] dark:bg-[#101E16] transition-colors duration-200 overflow-hidden">
      
      {/* Background patterns */}
      <div aria-hidden="true" className="absolute inset-0 opacity-[0.08] nb-bg-grid-heavy pointer-events-none" />
      <div aria-hidden="true" className="absolute inset-0 opacity-[0.15] nb-bg-checkered pointer-events-none" />

      {/* Large Code Brackets SVG Right */}
      <div className="absolute top-[18%] right-[5%] hidden lg:block select-none z-0 transform rotate-12">
        <svg aria-hidden="true" focusable="false" className="w-20 h-20 text-[#2196F3] stroke-black stroke-[3.5px] fill-none filter drop-shadow-[3px_3px_0_rgba(0,0,0,1)]" viewBox="0 0 100 100">
          <path d="M30,20 L10,50 L30,80 M70,20 L90,50 L70,80" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      {/* Retro Floppy Disk Left */}
      <div className="absolute bottom-[15%] left-[3%] hidden lg:block select-none z-0 transform rotate-[-12deg]">
        <svg aria-hidden="true" focusable="false" className="w-16 h-16 text-[#FFEB3B] fill-current stroke-black stroke-[3px] filter drop-shadow-[2.5px_2.5px_0_rgba(0,0,0,1)]" viewBox="0 0 100 100">
          <rect x="15" y="15" width="70" height="70" rx="4" />
          <rect x="30" y="15" width="40" height="25" fill="white" stroke="black" strokeWidth="2" />
          <rect x="35" y="55" width="30" height="30" fill="white" stroke="black" strokeWidth="2" />
        </svg>
      </div>

      {/* Crosshair Center-Left */}
      <div className="absolute top-[50%] left-[2%] hidden md:block select-none z-0">
        <svg aria-hidden="true" focusable="false" className="w-10 h-10 text-[#FF5252] stroke-black stroke-[3px] fill-none" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="25" />
          <line x1="50" y1="10" x2="50" y2="90" />
          <line x1="10" y1="50" x2="90" y2="50" />
        </svg>
      </div>

      {/* NEW: Rotating Sparkle Top Center-Left */}
      <div className="absolute top-8 left-[25%] hidden lg:block select-none z-0 animate-rotate-slow">
        <svg aria-hidden="true" focusable="false" className="w-12 h-12 text-[#4ECDC4] fill-current stroke-black stroke-[3px] filter drop-shadow-[2px_2px_0_rgba(0,0,0,1)]" viewBox="0 0 100 100">
          <polygon points="50,5 64,36 98,36 70,57 81,91 50,70 19,91 30,57 2,36 36,36" />
        </svg>
      </div>

      {/* NEW: Target Rect Bottom Right */}
      <div className="absolute bottom-6 right-[15%] hidden md:block select-none z-0 transform -rotate-12">
        <svg aria-hidden="true" focusable="false" className="w-14 h-14 text-[#FF5252] stroke-black stroke-[3px] fill-none filter drop-shadow-[2.5px_2.5px_0_rgba(0,0,0,1)]" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="30" strokeWidth="6" />
          <rect x="42" y="42" width="16" height="16" fill="black" />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header and Filters */}
        <div className="flex flex-col xl:flex-row xl:items-end justify-between gap-8 mb-16">
          <div>
            <h2 className="text-base font-black tracking-widest uppercase bg-[#FF5252] text-white nb-border px-3 py-1 inline-block mb-3 transform rotate-[1deg]">
              PORTFOLIO
            </h2>
            <h3 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-black dark:text-white mt-1">
              Featured Projects
            </h3>
            <p className="text-lg font-bold text-gray-700 dark:text-gray-300 mt-4 max-w-xl">
              Exploring the frontiers of technology through web platforms, robotics firmware, and predictive AI algorithms.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2.5">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "px-4 py-2 font-black uppercase text-xs sm:text-sm cursor-pointer nb-border transition-all duration-150 shadow-[2px_2px_0_#000] active:translate-y-[2px] active:shadow-none hover:-translate-y-[1px] hover:shadow-[3px_3px_0_#000]",
                  activeCategory === category
                    ? "bg-[#FFEB3B] text-black"
                    : "bg-white dark:bg-[#1E1E1E] text-black dark:text-white"
                )}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        
        {/* Projects Carousel */}
        <div className="mt-8 relative">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full focus:outline-none focus-visible:ring-2 focus-visible:ring-black dark:focus-visible:ring-white focus-visible:ring-offset-2 rounded-sm"
            tabIndex={0}
            aria-label="Featured Projects Carousel"
          >
            <CarouselContent className="pb-6 -ml-6">
              {filteredProjects.map((project, index) => (
                <CarouselItem key={index} className="pl-6 md:basis-1/2 lg:basis-1/3">
                  <div className="bg-white dark:bg-[#202020] nb-card flex flex-col justify-between h-full overflow-hidden group">
                    
                    {/* Project Header Image/Visual */}
                    <div className="relative h-48 bg-muted border-b-3 border-black flex items-center justify-center overflow-hidden shrink-0">
                      
                      {/* Pattern Background */}
                      <div className="absolute inset-0 bg-[#FF5252]/5 opacity-20 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px]" />
                      
                      {/* Project Image or Fallback Category Icon */}
                      {project.imagePath ? (
                        <img 
                          src={project.imagePath} 
                          alt={project.title}
                          className="absolute inset-0 w-full h-full object-cover"
                          loading="lazy"
                        />
                      ) : (
                        <>
                          {(() => {
                            const cats = project.category ?? [];
                            if (cats.includes("Website") && !cats.includes("Machine Learning") && !cats.includes("IoT / Robotics"))
                              return <Monitor className="h-16 w-16 text-[#FF5252] transform rotate-[-4deg] group-hover:scale-110 group-hover:rotate-0 transition-transform" />;
                            if (cats.includes("IoT / Robotics"))
                              return <Cpu className="h-16 w-16 text-[#B48A05] dark:text-[#FFEB3B] transform rotate-[3deg] group-hover:scale-110 group-hover:rotate-0 transition-transform" />;
                            if (cats.includes("Machine Learning"))
                              return <Brain className="h-16 w-16 text-[#2196F3] transform rotate-[-6deg] group-hover:scale-110 group-hover:rotate-0 transition-transform" />;
                            return <Globe className="h-16 w-16 text-[#4ECDC4] transform group-hover:scale-110 transition-transform" />;
                          })()}
                        </>
                      )}

                      {/* Floating Category Badges */}
                      <div className="absolute bottom-2 left-2 flex flex-wrap gap-1">
                        {(project.category ?? ["Other"]).map((cat) => {
                          let bgColor = "bg-[#4ECDC4] text-black"; // Default Teal/Green
                          if (cat === "Website") bgColor = "bg-[#FFEB3B] text-black"; // Yellow
                          if (cat === "Machine Learning") bgColor = "bg-[#FF5252] text-white"; // Red
                          if (cat === "IoT / Robotics") bgColor = "bg-[#2196F3] text-white"; // Blue
                          if (cat === "Game") bgColor = "bg-[#E0A96D] text-black"; // Brownish/Orange
                          if (cat === "Mobile Apps") bgColor = "bg-[#D8B4FE] text-black"; // Light Purple
                          
                          return (
                            <span key={cat} className={cn("px-2 py-0.5 text-xs font-mono font-bold nb-border", bgColor)}>
                              {cat}
                            </span>
                          );
                        })}
                      </div>
                    </div>

                    {/* Project Card Content */}
                    <div className="p-6 flex-grow flex flex-col justify-between">
                      <div>
                        {/* Tech stack badges */}
                        <div className="flex flex-wrap gap-1.5 mb-3">
                          {project.techStack.map((tech) => (
                            <span 
                              key={tech} 
                              className="font-mono text-[10px] font-bold bg-white dark:bg-black text-black dark:text-white border border-black px-2 py-0.5"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        <h4 className="text-xl font-black uppercase tracking-tight text-black dark:text-white mb-2">
                          {project.title}
                        </h4>
                        
                        <p className="text-gray-700 dark:text-gray-300 font-bold text-xs sm:text-sm leading-relaxed mb-6">
                          {project.description}
                        </p>
                      </div>

                      {/* Links Row */}
                      <div className="flex gap-3 mt-auto">
                        <a 
                          href={project.linkRepo} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex-1 text-center bg-white text-black py-2 text-xs font-black uppercase tracking-wide nb-btn inline-flex justify-center items-center gap-1.5"
                        >
                          <Github className="h-4 w-4" />
                          <span>Code</span>
                        </a>
                        {project.linkDemo && project.linkDemo !== "#" && (
                          <a 
                            href={project.linkDemo} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex-1 text-center bg-[#FFEB3B] text-black py-2 text-xs font-black uppercase tracking-wide nb-btn inline-flex justify-center items-center gap-1"
                          >
                            <span>Live Demo</span>
                            <ArrowUpRight className="h-3.5 w-3.5 stroke-[3]" />
                          </a>
                        )}
                      </div>
                    </div>

                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            {/* Custom Carousel Controls (Neubrutalist buttons) */}
            <div className="flex justify-end gap-3 mt-8 mr-4">
              <CarouselPrevious className="static translate-y-0 bg-white dark:bg-[#1E1E1E] text-black dark:text-white nb-border w-12 h-12 flex items-center justify-center cursor-pointer hover:bg-[#FFEB3B] dark:hover:text-black transition-colors" />
              <CarouselNext className="static translate-y-0 bg-white dark:bg-[#1E1E1E] text-black dark:text-white nb-border w-12 h-12 flex items-center justify-center cursor-pointer hover:bg-[#FFEB3B] dark:hover:text-black transition-colors" />
            </div>

          </Carousel>
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-20 bg-white dark:bg-[#1E1E1E] nb-border mt-8">
            <p className="text-gray-500 font-bold">No projects found in this category.</p>
          </div>
        )}

      </div>

      {/* Ripped Paper Divider */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none z-20 translate-y-[2px]">
        <svg viewBox="0 0 1000 40" className="w-full h-8 text-white dark:text-[#121212] relative" preserveAspectRatio="none" aria-hidden="true" focusable="false">
          <path className="fill-current" d="M0,20 L40,10 L80,25 L120,8 L160,22 L200,12 L240,27 L280,10 L320,24 L360,12 L400,28 L440,15 L480,26 L520,10 L560,22 L600,8 L640,24 L680,12 L720,28 L760,15 L800,25 L840,8 L880,22 L920,12 L960,27 L1000,15 L1000,40 L0,40 Z" />
          <path className="stroke-black stroke-[4px] fill-none" d="M0,20 L40,10 L80,25 L120,8 L160,22 L200,12 L240,27 L280,10 L320,24 L360,12 L400,28 L440,15 L480,26 L520,10 L560,22 L600,8 L640,24 L680,12 L720,28 L760,15 L800,25 L840,8 L880,22 L920,12 L960,27 L1000,15" />
        </svg>
      </div>
    </section>
  );
}
