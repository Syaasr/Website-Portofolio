"use client";

import React from "react";
import { ArrowRight, Download, Globe, Terminal, Award } from "lucide-react";
import { portfolio } from "@/data/portfolio";

export function Hero() {
  return (
    <section id="hero" className="relative pt-28 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-[#FFEB3B] dark:bg-[#202010] border-b-4 border-black transition-colors duration-200">
      
      {/* Decorative background grid pattern */}
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#000_2px,transparent_2px),linear-gradient(to_bottom,#000_2px,transparent_2px)] bg-[size:30px_30px]" />

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

            {/* TL;DR Summary Block */}
            <div className="w-full bg-white dark:bg-[#1C1C1C] border-[3px] border-black p-4 shadow-[4px_4px_0_#000] text-black dark:text-white rounded-none relative mt-4">
              <span aria-hidden="true" className="absolute -top-3.5 left-4 bg-[#FF5252] text-white border-2 border-black px-2.5 py-0.5 text-xs font-mono font-black uppercase tracking-wider select-none">
                TL;DR Summary
              </span>
              <p className="text-sm sm:text-base font-bold mt-2 leading-relaxed">
                Informatics student specializing in high-performance web platforms (Laravel, Next.js) and robotics control systems (C/C++ firmware, ESP32, Dynamixel). Driven by clean architecture, hardware-software integration, and premium visual design.
              </p>
            </div>

            {/* CTA Actions */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto pt-2">
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
              <div className="absolute inset-0 bg-[#4ECDC4] nb-border transform rotate-6 animate-rotate-slow" />
              
              {/* Mid rotate shape */}
              <div className="absolute inset-4 bg-[#FF5252] nb-border transform -rotate-6" />

              {/* Profile Image Neubrutalist Card */}
              <div className="absolute inset-8 bg-white dark:bg-[#1E1E1E] text-black dark:text-white nb-border p-3 shadow-[6px_6px_0_#000] transform rotate-[-2deg] hover:rotate-[0deg] transition-transform duration-300 flex flex-col justify-between overflow-hidden">
                <div className="relative w-full h-full border-2 border-black overflow-hidden bg-gray-100">
                  <img 
                    src="/images/ig-profile.webp" 
                    alt="Syaikhasril Maulana Firdaus"
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  />
                  
                  {/* Overlapping sticker label */}
                  <div className="absolute bottom-3 left-3 bg-[#FFEB3B] text-black px-2.5 py-1 font-mono text-[9px] sm:text-xs font-black nb-border shadow-[1.5px_1.5px_0_#000]">
                    asril@portfolio:~$ whoami
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
