"use client";

import React from "react";
import { ArrowRight, Download, Globe, Terminal, Award } from "lucide-react";
import { portfolio } from "@/data/portfolio";
import { RippedPaperDivider } from "@/components/RippedPaperDivider";

export function Hero() {
  return (
    <section id="hero" className="relative pt-28 pb-24 md:pt-40 md:pb-32 overflow-hidden bg-[#FFEB3B] dark:bg-[#202010] transition-colors duration-200">
      
      {/* Decorative background grid pattern */}
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#000_2px,transparent_2px),linear-gradient(to_bottom,#000_2px,transparent_2px)] bg-[size:30px_30px]" />

      {/* Floating Local SVG Icons for Rich Aesthetics */}
      {/* Bulb Icon (Top Left) */}
      <div className="absolute top-[12%] left-[4%] hidden xl:block select-none z-0 transform -rotate-12 animate-bounce-slow">
        <img src="/icons/Bulb.svg" alt="Bulb Icon" className="w-16 h-16 filter drop-shadow-[3px_3px_0_rgba(0,0,0,1)]" />
      </div>

      {/* Rocket Icon (Bottom Left) */}
      <div className="absolute bottom-[10%] left-[2%] hidden lg:block select-none z-0 transform rotate-12">
        <img src="/icons/Rocket.svg" alt="Rocket Icon" className="w-18 h-18 filter drop-shadow-[3px_3px_0_rgba(0,0,0,1)]" />
      </div>

      {/* Fire Icon (Middle Right) */}
      <div className="absolute top-[38%] right-[2%] hidden xl:block select-none z-0 transform -rotate-12 animate-bounce-slow">
        <img src="/icons/Fire.svg" alt="Fire Icon" className="w-14 h-14 filter drop-shadow-[2.5px_2.5px_0_rgba(0,0,0,1)]" />
      </div>

      {/* Energy Icon (Top Right) */}
      <div className="absolute top-[15%] right-[22%] hidden xl:block select-none z-0 transform rotate-6 animate-pulse">
        <img src="/icons/Energy.svg" alt="Energy Icon" className="w-14 h-14 filter drop-shadow-[2.5px_2.5px_0_rgba(0,0,0,1)]" />
      </div>

      {/* Compass Icon (Bottom Right) */}
      <div className="absolute bottom-[18%] right-[7%] hidden xl:block select-none z-0 transform rotate-12">
        <img src="/icons/Compass.svg" alt="Compass Icon" className="w-16 h-16 filter drop-shadow-[3px_3px_0_rgba(0,0,0,1)]" />
      </div>

      {/* Cube Icon (Middle Center-Left) */}
      <div className="absolute top-[45%] left-[45%] hidden lg:block select-none z-0 transform -rotate-6">
        <img src="/icons/Cube.svg" alt="Cube Icon" className="w-12 h-12 filter drop-shadow-[2px_2px_0_rgba(0,0,0,1)]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text Content Left */}
          <div className="lg:col-span-7 flex flex-col items-start gap-6">
            
            {/* Status indicator badge */}
            <div className="inline-flex items-center gap-2 bg-[#FF5252] text-white px-4 py-1.5 font-bold uppercase tracking-wider text-xs sm:text-sm nb-border transform rotate-[-1.5deg] animate-bounce-nb">
              <span className="w-2.5 h-2.5 rounded-full bg-white animate-ping" />
              AVAILABLE FOR HIRE
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl font-black text-black dark:text-white leading-[1.05] tracking-tight uppercase">
              {portfolio.hero.headline.split(" ").map((word, idx) => {
                if (idx === 1) {
                  return (
                    <span key={word} className="bg-white text-black px-2 pb-1 nb-border inline-block transform rotate-1 mx-1.5 select-none">
                      {word}
                    </span>
                  );
                }
                if (idx === 2) {
                  return (
                    <span key={word} className="bg-[#4ECDC4] text-black px-2 pb-1 nb-border inline-block transform rotate-[-2deg] mx-1.5 select-none">
                      {word}
                    </span>
                  );
                }
                return word + " ";
              })}
            </h1>

            {/* Summary Block */}
            <div className="w-full bg-white dark:bg-[#1C1C1C] border-[3px] border-black p-4 shadow-[4px_4px_0_#000] text-black dark:text-white rounded-none relative mt-4">
              <span aria-hidden="true" className="absolute -top-3.5 left-4 bg-[#FF5252] text-white border-2 border-black px-2.5 py-0.5 text-xs font-mono font-black uppercase tracking-wider select-none">
                Summary
              </span>
              <p className="text-sm sm:text-base font-bold mt-2 leading-relaxed">
                Informatics student specializing in high-performance web platforms (Laravel, Next.js) and robotics control systems (C/C++ firmware, ESP32, Dynamixel). Driven by clean architecture, hardware-software integration, and premium visual design.
              </p>
            </div>

            {/* CTA Actions */}
            <div className="flex flex-wrap gap-4 w-full sm:w-auto pt-2">
              <a 
                href="#projects" 
                className="bg-black text-white dark:bg-white dark:text-black px-8 py-4 font-black text-center uppercase tracking-wider text-base nb-btn inline-flex items-center justify-center gap-3"
              >
                <span>{portfolio.hero.cta}</span>
                <ArrowRight className="h-5 w-5 stroke-[3]" />
              </a>
              <a 
                href={portfolio.hero.resumeUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white text-black dark:bg-[#1A1A1A] dark:text-white px-8 py-4 font-black text-center uppercase tracking-wider text-base nb-btn inline-flex items-center justify-center gap-2"
              >
                <Download className="h-5 w-5 stroke-[2.5]" />
                <span>Get CV</span>
              </a>
              <a 
                href={portfolio.socials.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[#2196F3] text-white px-8 py-4 font-black text-center uppercase tracking-wider text-base nb-btn inline-flex items-center justify-center gap-2"
              >
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                <span>LinkedIn</span>
              </a>
            </div>

            {/* Quick Metrics Bar */}
            <div className="flex flex-wrap items-center gap-4 text-xs font-mono font-bold mt-4 pt-4 border-t border-black/10 w-full text-black">
              <div className="flex items-center gap-1.5 bg-[#4ECDC4] text-black px-3 py-1 nb-border border-1">
                <Globe className="h-4 w-4 text-black" />
                <span>{portfolio.personalInfo.location}</span>
              </div>
              <div className="flex items-center gap-1.5 bg-[#FF5252] text-white px-3 py-1 nb-border border-1">
                <Award className="h-4 w-4 text-white" />
                <span>GPA: {portfolio.about.stats.gpa}</span>
              </div>
              <div className="flex items-center gap-1.5 bg-[#2196F3] text-white px-3 py-1 nb-border border-1">
                <Terminal className="h-4 w-4 text-white" />
                <span>Experience: {portfolio.about.stats.experience}</span>
              </div>
            </div>

          </div>

           {/* Visual Element Right Column */}
          <div className="lg:col-span-5 flex justify-center relative py-10 lg:py-0">
            <div className="relative w-80 h-80 sm:w-96 sm:h-96">
              
              {/* Outer spin element */}
              <div className="absolute inset-0 bg-[#4ECDC4] nb-border transform rotate-6 " />
              
              {/* Mid rotate shape */}
              <div className="absolute inset-4 bg-[#FF5252] nb-border transform -rotate-6" />

              {/* Profile Image Neubrutalist Card */}
              <div className="absolute inset-2 bg-white border-[3px] border-black shadow-[4px_4px_0_#000] overflow-hidden group z-10">
                <img 
                  src="/images/ig-profile.webp" 
                  alt="Syaikhasril Profile" 
                  className="w-full h-full object-cover transition-all duration-300 scale-102 group-hover:scale-100"
                />
                
                {/* Sticker Label Overlay */}
                <div className="absolute bottom-3 left-3 bg-[#FFEB3B] text-black px-2.5 py-1 font-mono text-[9px] sm:text-xs font-black nb-border shadow-[1.5px_1.5px_0_#000]">
                  asril@portfolio:~$ whoami
                </div>
              </div>

              {/* Opsi 3: Floating Cybernetic Badge 1 (Left Top) */}
              <div className="absolute -top-6 -left-6 z-20 bg-white dark:bg-[#1E1E1E] text-black dark:text-white px-3 py-1.5 font-mono text-[10px] sm:text-xs font-black nb-border shadow-[3px_3px_0_#000] transform -rotate-3 hover:rotate-0 transition-transform duration-300 animate-bounce-slow flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#4ECDC4] inline-block animate-ping" />
                <span>🟢 AVAILABLE</span>
              </div>

              {/* Opsi 3: Floating Cybernetic Badge 2 (Right Bottom) */}
              <div className="absolute -bottom-4 -right-6 z-20 bg-[#FFEB3B] text-black px-3.5 py-2 font-mono text-[10px] sm:text-xs font-black nb-border shadow-[3px_3px_0_#000] transform rotate-3 hover:rotate-0 transition-transform duration-300 flex items-center gap-1.5">
                <span>🤖 ROBOTICS & WEB</span>
              </div>

            </div>
          </div>
        </div>
      </div>

      <RippedPaperDivider bgColor="bg-[#FFFBEB] dark:bg-[#181814]">
        <div className="absolute inset-0 opacity-[0.2] nb-bg-checkered bg-[position:left_bottom]" />
        <div className="absolute inset-0 opacity-[0.06] nb-bg-grid-heavy bg-[position:left_bottom]" />
      </RippedPaperDivider>
    </section>
  );
}
