"use client";

import React from "react";
import { portfolio } from "@/data/portfolio";
import { Award, Trophy } from "lucide-react";

export function Certifications() {
  return (
    <section id="certifications" className="relative py-20 md:py-28 bg-[#FFFBEB] dark:bg-[#1A1A14] transition-colors duration-200 overflow-hidden">
      
      {/* Background patterns */}
      <div aria-hidden="true" className="absolute inset-0 opacity-[0.25] nb-bg-blueprint pointer-events-none" />
      <div aria-hidden="true" className="absolute inset-0 opacity-[0.08] nb-bg-dots pointer-events-none" />

      {/* Floating Local SVG Icons for Rich Aesthetics */}
      {/* Key Icon (Top Left Center) */}
      <div className="absolute top-[8%] left-[28%] hidden xl:block select-none z-0 transform -rotate-12 animate-pulse">
        <img src="/icons/Key.svg" alt="Key Icon" className="w-14 h-14 filter drop-shadow-[2.5px_2.5px_0_rgba(0,0,0,1)]" />
      </div>

      {/* Lock Icon (Bottom Center-Left) */}
      <div className="absolute bottom-[8%] left-[28%] hidden xl:block select-none z-0 transform rotate-6">
        <img src="/icons/Lock.svg" alt="Lock Icon" className="w-14 h-14 filter drop-shadow-[2.5px_2.5px_0_rgba(0,0,0,1)]" />
      </div>

      {/* Gold Trophy SVG Right */}
      <div className="absolute top-[35%] right-[5%] hidden lg:block select-none z-0 transform rotate-12">
        <svg aria-hidden="true" focusable="false" className="w-20 h-20 text-[#FFEB3B] fill-current stroke-black stroke-[3px] filter drop-shadow-[3px_3px_0_rgba(0,0,0,1)]" viewBox="0 0 100 100">
          <path d="M20,15 L80,15 L80,35 C80,50 65,65 50,65 C35,65 20,50 20,35 Z" />
          <path d="M50,65 L50,85 M30,85 L70,85" stroke="currentColor" strokeWidth="8" strokeLinecap="round" fill="none" />
          <path d="M20,25 L10,25 L10,40 L20,40 M80,25 L90,25 L90,40 L80,40" fill="none" stroke="currentColor" strokeWidth="5" />
        </svg>
      </div>

      {/* Red Star SVG Left */}
      <div className="absolute bottom-[20%] left-[5%] hidden lg:block select-none z-0 transform rotate-[-8deg]">
        <svg aria-hidden="true" focusable="false" className="w-16 h-16 text-[#FF5252] fill-current stroke-black stroke-[3px] filter drop-shadow-[2.5px_2.5px_0_rgba(0,0,0,1)]" viewBox="0 0 100 100">
          <polygon points="50,5 64,36 98,36 70,57 81,91 50,70 19,91 30,57 2,36 36,36" />
        </svg>
      </div>

      {/* NEW: Rotating Sparkle Top Center-Left */}
      <div className="absolute top-6 left-[18%] hidden lg:block select-none z-0 animate-rotate-slow">
        <svg aria-hidden="true" focusable="false" className="w-14 h-14 text-[#4ECDC4] fill-current stroke-black stroke-[3px] filter drop-shadow-[2.5px_2.5px_0_rgba(0,0,0,1)]" viewBox="0 0 100 100">
          <path d="M50,0 C50,30 70,50 100,50 C70,50 50,70 50,100 C50,70 30,50 0,50 C30,50 50,30 50,0 Z" />
        </svg>
      </div>

      {/* NEW: Wavy Zigzag Bottom Center-Right */}
      <div className="absolute bottom-10 right-[25%] hidden md:block select-none z-0 transform rotate-12">
        <svg aria-hidden="true" focusable="false" className="w-24 h-6 text-[#2196F3] stroke-black stroke-[3px] fill-none" viewBox="0 0 100 25">
          <path d="M0,12 L20,3 L40,21 L60,3 L80,21 L100,12" />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        
          {/* Certifications Column */}
          <div className="space-y-8">
            <div className="flex items-center gap-3.5 mb-10">
              <div className="w-12 h-12 bg-[#2196F3] text-white border-[3px] border-black flex items-center justify-center transform rotate-[-2deg] shrink-0">
                <Award className="h-6 w-6 stroke-[2.5]" />
              </div>
              <div>
                <h2 className="text-base font-black tracking-widest uppercase bg-[#FFEB3B] text-black nb-border px-3 py-1 inline-block mb-1 transform rotate-[1deg]">
                  CREDENTIALS
                </h2>
                <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black dark:text-white mt-1">
                  Certifications
                </h3>
              </div>
            </div>
            <div className="bg-[#F8FAFC] dark:bg-[#161616] border-[3px] border-black shadow-[6px_6px_0_#000] p-3 sm:p-4 rounded-none">
              <div className="max-h-[340px] overflow-y-auto pr-2 space-y-4 nb-scrollbar">
                {portfolio.certifications.map((cert, index) => (
                  <div 
                    key={index} 
                    className="bg-white dark:bg-[#222222] border-[3px] border-black shadow-[3px_3px_0_#000] p-5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 transform hover:rotate-[0.5deg] transition-transform duration-200"
                  >
                    <div>
                      <h4 className="text-lg font-black uppercase tracking-tight text-black dark:text-white">
                        {cert.name}
                      </h4>
                      <p className="text-xs font-mono font-bold text-gray-500 mt-1 uppercase">
                        Platform: {cert.platform}
                      </p>
                    </div>
                    <span className="font-mono text-xs font-black bg-[#2196F3] text-white nb-border px-3 py-1 self-start sm:self-auto shrink-0">
                      {cert.year}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Achievements Column */}
          <div className="space-y-8">
            <div className="flex items-center gap-3.5 mb-10">
              <div className="w-12 h-12 bg-[#FF5252] text-white border-[3px] border-black flex items-center justify-center transform rotate-[3deg] shrink-0">
                <Trophy className="h-6 w-6 stroke-[2.5]" />
              </div>
              <div>
                <h2 className="text-base font-black tracking-widest uppercase bg-[#4ECDC4] text-black nb-border px-3 py-1 inline-block mb-1 transform rotate-[-1deg]">
                  AWARDS
                </h2>
                <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black dark:text-white mt-1">
                  Achievements
                </h3>
              </div>
            </div>
            
            <div className="bg-[#F8FAFC] dark:bg-[#161616] border-[3px] border-black shadow-[6px_6px_0_#000] p-3 sm:p-4 rounded-none">
              <div className="max-h-[340px] overflow-y-auto pr-2 space-y-4 nb-scrollbar">
                {portfolio.achievements.map((item, index) => (
                  <div 
                    key={index} 
                    className="bg-white dark:bg-[#222222] border-[3px] border-black shadow-[3px_3px_0_#000] p-5 transform hover:rotate-[-0.5deg] transition-transform duration-200"
                  >
                    <div className="flex justify-between items-start gap-4 border-b-2 border-black pb-3 mb-4">
                      <div>
                        <h4 className="text-lg font-black uppercase tracking-tight text-black dark:text-white">
                          {item.title}
                        </h4>
                        <p className="text-xs font-mono font-bold text-[#FF5252] mt-1 uppercase">
                          {item.event}
                        </p>
                      </div>
                      <span className="font-mono text-xs font-black bg-[#FFEB3B] text-black nb-border px-3 py-1 shrink-0">
                        {item.year}
                      </span>
                    </div>
                    <p className="text-sm font-bold text-gray-700 dark:text-gray-300">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Ripped Paper Divider */}
      <div className="absolute bottom-0 left-0 right-0 w-full h-8 z-20 translate-y-[2px] pointer-events-none">
        {/* Next section background with motifs clipped to ripped shape */}
        <div 
          className="absolute inset-0 w-full h-full bg-[#FAF5FF] dark:bg-[#1C1528]"
          style={{ clipPath: 'polygon(0% 50%, 4% 25%, 8% 62.5%, 12% 20%, 16% 55%, 20% 30%, 24% 67.5%, 28% 25%, 32% 60%, 36% 30%, 40% 70%, 44% 37.5%, 48% 65%, 52% 25%, 56% 55%, 60% 20%, 64% 60%, 68% 30%, 72% 70%, 76% 37.5%, 80% 62.5%, 84% 20%, 88% 55%, 92% 30%, 96% 67.5%, 100% 37.5%, 100% 100%, 0% 100%)' }}
        >
          <div aria-hidden="true" className="absolute inset-0 opacity-[0.25] nb-bg-checkered pointer-events-none bg-[position:left_bottom]" />
          <div aria-hidden="true" className="absolute inset-0 opacity-[0.06] nb-bg-grid-heavy pointer-events-none bg-[position:left_bottom]" />
        </div>
        {/* The stroke */}
        <svg viewBox="0 0 1000 40" className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none" aria-hidden="true" focusable="false">
          <path className="stroke-black stroke-[4px] fill-none" d="M0,20 L40,10 L80,25 L120,8 L160,22 L200,12 L240,27 L280,10 L320,24 L360,12 L400,28 L440,15 L480,26 L520,10 L560,22 L600,8 L640,24 L680,12 L720,28 L760,15 L800,25 L840,8 L880,22 L920,12 L960,27 L1000,15" />
        </svg>
      </div>
    </section>
  );
}
