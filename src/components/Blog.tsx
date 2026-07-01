"use client";

import React from "react";
import { portfolio } from "@/data/portfolio";
import { ArrowUpRight, BookOpen } from "lucide-react";

export function Blog() {
  return (
    <section id="blog" className="relative py-20 md:py-28 bg-[#FAF5FF] dark:bg-[#1C1528] transition-colors duration-200 overflow-hidden">
      
      {/* Background patterns */}
      <div aria-hidden="true" className="absolute inset-0 opacity-[0.25] nb-bg-checkered pointer-events-none" />
      <div aria-hidden="true" className="absolute inset-0 opacity-[0.06] nb-bg-grid-heavy pointer-events-none" />

      {/* Mint Sparkle Left */}
      <div className="absolute top-[15%] left-[8%] hidden lg:block select-none z-0">
        <svg aria-hidden="true" focusable="false" className="w-16 h-16 text-[#4ECDC4] fill-current stroke-black stroke-[3px] filter drop-shadow-[3px_3px_0_rgba(0,0,0,1)]" viewBox="0 0 100 100">
          <path d="M50,0 C50,30 70,50 100,50 C70,50 50,70 50,100 C50,70 30,50 0,50 C30,50 50,30 50,0 Z" />
        </svg>
      </div>

      {/* Red Pencil SVG Right */}
      <div className="absolute bottom-[20%] right-[6%] hidden lg:block select-none z-0 transform rotate-[-15deg]">
        <svg aria-hidden="true" focusable="false" className="w-14 h-14 text-[#FF5252] fill-current stroke-black stroke-[3px] filter drop-shadow-[2.5px_2.5px_0_rgba(0,0,0,1)]" viewBox="0 0 100 100">
          <path d="M20,80 L80,20 L60,10 L10,70 Z" />
          <path d="M10,70 L20,80 L5,95 Z" fill="white" />
        </svg>
      </div>

      {/* NEW: Neubrutalist Target Ring top right */}
      <div className="absolute top-8 right-[18%] hidden md:block select-none z-0">
        <svg aria-hidden="true" focusable="false" className="w-12 h-12 text-[#2196F3] stroke-black stroke-[3.5px] fill-none filter drop-shadow-[2.5px_2.5px_0_rgba(0,0,0,1)]" viewBox="0 0 100 100">
          <rect x="25" y="25" width="50" height="50" strokeWidth="6" />
          <circle cx="50" cy="50" r="10" fill="black" />
        </svg>
      </div>

      {/* NEW: Small Sparkle bottom left */}
      <div className="absolute bottom-8 left-[18%] hidden md:block select-none z-0 transform rotate-12">
        <svg aria-hidden="true" focusable="false" className="w-8 h-8 text-[#FFEB3B] fill-current stroke-black stroke-[2.5px] filter drop-shadow-[1.5px_1.5px_0_rgba(0,0,0,1)]" viewBox="0 0 100 100">
          <path d="M50,0 C50,25 75,50 100,50 C75,50 50,75 50,100 C50,75 25,50 0,50 C25,50 50,25 50,0 Z" />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-[#4ECDC4] text-black border-3 border-black flex items-center justify-center transform rotate-[-2deg] shrink-0">
              <BookOpen className="h-8 w-8 stroke-[2.5]" />
            </div>
            <div>
              <h2 className="text-base font-black tracking-widest uppercase bg-[#FF5252] text-white nb-border px-3 py-1 inline-block mb-1.5 transform rotate-[1deg]">
                PUBLICATIONS
              </h2>
              <h3 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-black dark:text-white mt-1">
                Latest Articles
              </h3>
            </div>
          </div>
          
          <a 
            href={portfolio.blog[0]?.link || "#"} 
            target="_blank" 
            rel="noreferrer"
            className="bg-[#FFEB3B] text-black px-6 py-3 font-bold uppercase tracking-wider text-xs sm:text-sm nb-btn inline-flex items-center gap-2 w-fit"
          >
            <span>Read on DepokPos</span>
            <ArrowUpRight className="h-4.5 w-4.5 stroke-[3]" />
          </a>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {portfolio.blog.map((post, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-[#202020] nb-card p-6 sm:p-8 flex flex-col justify-between h-full group"
            >
              <div>
                {/* Tags Row */}
                <div className="flex flex-wrap gap-1.5 mb-4 border-b-2 border-black pb-3">
                  {post.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="font-mono text-[10px] font-bold bg-white dark:bg-black text-black dark:text-white border border-black px-2 py-0.5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h4 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-black dark:text-white group-hover:text-[#FF5252] transition-colors leading-tight mb-3">
                  {post.title}
                </h4>
                
                <p className="text-gray-700 dark:text-gray-300 font-bold text-sm leading-relaxed mb-8">
                  {post.summary}
                </p>
              </div>

              {/* Link CTA */}
              <a 
                href={post.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-black text-white dark:bg-white dark:text-black py-3 px-6 text-center font-black uppercase tracking-wider text-xs nb-btn inline-flex items-center justify-center gap-2 self-start"
              >
                <span>Read Full Article</span>
                <ArrowUpRight className="h-4 w-4 stroke-[3]" />
              </a>
            </div>
          ))}
        </div>

      </div>

      {/* Ripped Paper Divider */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none z-20 translate-y-[2px]">
        <svg viewBox="0 0 1000 40" className="w-full h-8 text-[#F0FDF4] dark:text-[#101E16] relative" preserveAspectRatio="none" aria-hidden="true" focusable="false">
          <path className="fill-current" d="M0,20 L40,10 L80,25 L120,8 L160,22 L200,12 L240,27 L280,10 L320,24 L360,12 L400,28 L440,15 L480,26 L520,10 L560,22 L600,8 L640,24 L680,12 L720,28 L760,15 L800,25 L840,8 L880,22 L920,12 L960,27 L1000,15 L1000,40 L0,40 Z" />
          <path className="stroke-black stroke-[4px] fill-none" d="M0,20 L40,10 L80,25 L120,8 L160,22 L200,12 L240,27 L280,10 L320,24 L360,12 L400,28 L440,15 L480,26 L520,10 L560,22 L600,8 L640,24 L680,12 L720,28 L760,15 L800,25 L840,8 L880,22 L920,12 L960,27 L1000,15" />
        </svg>
      </div>
    </section>
  );
}
