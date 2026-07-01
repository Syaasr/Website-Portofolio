"use client";

import React from "react";
import { portfolio } from "@/data/portfolio";
import { GraduationCap, Wrench, Calendar } from "lucide-react";

export function TimelineRoadmap() {
  // Merge and chronologically sort education and experience items
  const roadmapItems = [
    ...portfolio.education.map((edu) => ({
      type: "education" as const,
      title: edu.university,
      subtitle: edu.degree,
      date: edu.period,
      description: `Coursework: ${edu.coursework.join(", ")}`,
      extra: `GPA: ${edu.gpa}`,
      raw: edu
    })),
    ...portfolio.experience.map((exp) => ({
      type: "experience" as const,
      title: exp.role,
      subtitle: exp.organization,
      date: exp.date,
      description: exp.description,
      extra: null,
      raw: exp
    }))
  ].sort((a, b) => {
    const getSortKey = (dateStr: string) => {
      if (dateStr.includes("2018")) return 1; // MTsN 1 Surakarta
      if (dateStr.includes("2021")) return 2; // MAN 1 Surakarta
      if (dateStr.includes("2024") && dateStr.includes("2028")) return 3; // UNS
      if (dateStr.includes("2024") && dateStr.includes("2025")) return 4; // KRAI
      if (dateStr.includes("Jun 2025")) return 5; // FIRA
      if (dateStr.includes("Oct 2025")) return 6; // KRSTI
      if (dateStr.includes("Feb 2026")) return 7; // JN UKMI
      return 8;
    };
    return getSortKey(a.date) - getSortKey(b.date);
  });

  // Winding grid layout config for 2 columns (left and right) on desktop
  const gridItems = [
    { item: roadmapItems[0], col: "lg:col-start-1", row: "lg:row-start-1", connector: "right" },
    { item: roadmapItems[1], col: "lg:col-start-2", row: "lg:row-start-1", connector: "down" },
    { item: roadmapItems[2], col: "lg:col-start-2", row: "lg:row-start-2", connector: "left" },
    { item: roadmapItems[3], col: "lg:col-start-1", row: "lg:row-start-2", connector: "down" },
    { item: roadmapItems[4], col: "lg:col-start-1", row: "lg:row-start-3", connector: "right" },
    { item: roadmapItems[5], col: "lg:col-start-2", row: "lg:row-start-3", connector: "down" },
    { item: roadmapItems[6], col: "lg:col-start-2", row: "lg:row-start-4", connector: "none" }
  ];

  return (
    <section id="roadmap" className="relative py-20 md:py-28 bg-[#EFF6FF] dark:bg-[#101E2E] border-b-4 border-black transition-colors duration-200 overflow-hidden">
      
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-[0.25] nb-bg-blueprint" />
      <div className="absolute inset-0 opacity-[0.1] nb-bg-checkered" />

      {/* Floating SVGs */}
      {/* Rotating Gear Right */}
      <div className="absolute top-[35%] right-[4%] hidden lg:block animate-rotate-slow select-none z-0">
        <svg className="w-16 h-16 text-[#FF5252] stroke-black stroke-[3px] fill-none filter drop-shadow-[2.5px_2.5px_0_rgba(0,0,0,1)]" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="18" />
          <path d="M50,15 L50,0 M50,85 L50,100 M15,50 L0,50 M85,50 L100,50 M25,25 L14,14 M75,75 L86,86 M25,75 L14,86 M75,25 L86,14" stroke="currentColor" strokeWidth="8" strokeLinecap="round" />
        </svg>
      </div>

      {/* 4-point Sparkle Left */}
      <div className="absolute bottom-[25%] left-[3%] hidden lg:block select-none z-0">
        <svg className="w-14 h-14 text-[#FFEB3B] fill-current stroke-black stroke-[3px] filter drop-shadow-[3px_3px_0_rgba(0,0,0,1)]" viewBox="0 0 100 100">
          <path d="M50,0 C50,30 70,50 100,50 C70,50 50,70 50,100 C50,70 30,50 0,50 C30,50 50,30 50,0 Z" />
        </svg>
      </div>

      {/* NEW: Neubrutalist Target Crosshair Top Left */}
      <div className="absolute top-10 left-[8%] hidden md:block select-none z-0">
        <svg className="w-12 h-12 text-[#2196F3] stroke-black stroke-[3.5px] fill-none filter drop-shadow-[2px_2px_0_rgba(0,0,0,1)]" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="30" />
          <line x1="50" y1="5" x2="50" y2="95" />
          <line x1="5" y1="50" x2="95" y2="50" />
        </svg>
      </div>

      {/* NEW: Small Sparkle bottom right */}
      <div className="absolute bottom-12 right-[15%] hidden md:block select-none z-0 transform rotate-45">
        <svg className="w-10 h-10 text-[#4ECDC4] fill-current stroke-black stroke-[2.5px] filter drop-shadow-[2.5px_2.5px_0_rgba(0,0,0,1)]" viewBox="0 0 100 100">
          <path d="M50,0 C50,25 75,50 100,50 C75,50 50,75 50,100 C50,75 25,50 0,50 C25,50 50,25 50,0 Z" />
        </svg>
      </div>

      {/* NEW: Wavy Zigzag Middle-Left */}
      <div className="absolute top-[40%] left-[2%] hidden xl:block select-none z-0 transform rotate-90">
        <svg className="w-24 h-6 text-[#FF5252] stroke-black stroke-[3px] fill-none" viewBox="0 0 100 25">
          <path d="M0,12 L20,3 L40,21 L60,3 L80,21 L100,12" />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center gap-4 mb-16 max-w-4xl mx-auto">
          <div className="w-14 h-14 bg-[#FFEB3B] text-black border-3 border-black flex items-center justify-center transform rotate-[-3deg] shrink-0">
            <Calendar className="h-8 w-8 stroke-[2.5]" />
          </div>
          <div>
            <h2 className="text-base font-black tracking-widest uppercase bg-[#FF5252] text-white nb-border px-3 py-1 inline-block mb-1.5 transform rotate-[1deg]">
              MY JOURNEY
            </h2>
            <h3 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-black dark:text-white mt-1">
              Journey Roadmap
            </h3>
          </div>
        </div>

        {/* Desktop Winding Serpentine Layout (2 Columns) */}
        <div className="hidden lg:grid lg:grid-cols-2 lg:gap-x-24 lg:gap-y-16 max-w-4xl mx-auto relative pt-4 pb-8">
          {gridItems.map((cell, idx) => {
            const isEdu = cell.item.type === "education";

            return (
              <div 
                key={idx} 
                className={`${cell.col} ${cell.row} relative flex flex-col justify-between`}
              >
                
                {/* Winding Connecting Lines */}
                {cell.connector === "right" && (
                  <div className="absolute top-[40%] left-full w-24 h-[5px] bg-black dark:bg-black z-20" />
                )}
                {cell.connector === "left" && (
                  <div className="absolute top-[40%] right-full w-24 h-[5px] bg-black dark:bg-black z-20" />
                )}
                {cell.connector === "down" && (
                  <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-[5px] h-16 bg-black dark:bg-black z-20" />
                )}

                {/* Card Container */}
                <div 
                  className={`p-6 bg-white dark:bg-[#1E1E1E] nb-card-static relative h-full flex flex-col justify-between hover:rotate-[0.5deg] transition-transform duration-200 ${
                    isEdu 
                      ? "border-t-[10px] border-t-[#2196F3]" 
                      : "border-t-[10px] border-t-[#FF5252]"
                  }`}
                >
                  <div>
                    {/* Badge Date */}
                    <div className="flex justify-between items-center mb-4">
                      <span className="font-mono text-[10px] font-black bg-[#FFEB3B] text-black border border-black px-2 py-0.5 shadow-[1px_1px_0_#000]">
                        {cell.item.date}
                      </span>
                      <span className={`font-mono text-[9px] font-black uppercase px-2 py-0.5 border border-black ${
                        isEdu ? "bg-[#EFF6FF] text-[#2196F3]" : "bg-[#FEF2F2] text-[#FF5252]"
                      }`}>
                        {cell.item.type}
                      </span>
                    </div>

                    <h4 className="text-lg font-black uppercase tracking-tight text-black dark:text-white leading-tight mb-1">
                      {cell.item.title}
                    </h4>
                    <p className="text-xs font-black uppercase tracking-wide text-gray-500 mb-3">
                      {cell.item.subtitle}
                    </p>
                    
                    <p className="text-gray-700 dark:text-gray-300 font-bold text-xs leading-relaxed">
                      {cell.item.description}
                    </p>
                  </div>

                  {cell.item.extra && (
                    <div className="mt-4 pt-2 border-t border-black/10">
                      <span className="inline-block bg-[#4ECDC4] text-black px-2 py-0.5 font-black text-[10px] border border-black">
                        {cell.item.extra}
                      </span>
                    </div>
                  )}

                </div>

              </div>
            );
          })}
        </div>

        {/* Mobile/Tablet Vertical Sequential Layout (lg:hidden) */}
        <div className="lg:hidden space-y-8 max-w-md mx-auto">
          {roadmapItems.map((item, idx) => {
            const isEdu = item.type === "education";
            const isLast = idx === roadmapItems.length - 1;

            return (
              <div key={idx} className="flex flex-col items-center">
                
                {/* Mobile Card */}
                <div 
                  className={`w-full p-6 bg-white dark:bg-[#1E1E1E] nb-card-static relative ${
                    isEdu 
                      ? "border-t-[10px] border-t-[#2196F3]" 
                      : "border-t-[10px] border-t-[#FF5252]"
                  }`}
                >
                  <div className="flex justify-between items-center mb-4">
                    <span className="font-mono text-[10px] font-black bg-[#FFEB3B] text-black border border-black px-2.5 py-0.5 shadow-[1px_1px_0_#000]">
                      {item.date}
                    </span>
                    <span className={`font-mono text-[9px] font-black uppercase px-2 py-0.5 border border-black ${
                      isEdu ? "bg-[#EFF6FF] text-[#2196F3]" : "bg-[#FEF2F2] text-[#FF5252]"
                    }`}>
                      {item.type}
                    </span>
                  </div>

                  <h4 className="text-lg font-black uppercase tracking-tight text-black dark:text-white leading-tight mb-1">
                    {item.title}
                  </h4>
                  <p className="text-xs font-black uppercase tracking-wide text-gray-500 mb-3">
                    {item.subtitle}
                  </p>
                  
                  <p className="text-gray-700 dark:text-gray-300 font-bold text-xs leading-relaxed mb-4">
                    {item.description}
                  </p>

                  {item.extra && (
                    <span className="inline-block bg-[#4ECDC4] text-black px-2 py-0.5 font-black text-[10px] border border-black">
                      {item.extra}
                    </span>
                  )}
                </div>

                {/* Vertical connecting line between mobile items */}
                {!isLast && (
                  <div className="w-[5px] h-8 bg-black dark:bg-white" />
                )}

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
