"use client";

import React, { useEffect, useState, useRef } from "react";
import { portfolio } from "@/data/portfolio";
import { GraduationCap, Wrench, Calendar } from "lucide-react";

export function TimelineRoadmap() {
  // State to track visible card indices for staggered animations
  const [visibleIndices, setVisibleIndices] = useState<number[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = parseInt(entry.target.getAttribute("data-index") || "0", 10);
          if (entry.isIntersecting) {
            setVisibleIndices((prev) => (prev.includes(index) ? prev : [...prev, index]));
          } else {
            setVisibleIndices((prev) => prev.filter((i) => i !== index));
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -20px 0px"
      }
    );

    // Select all cards for observation
    const cards = containerRef.current?.querySelectorAll("[data-index]");
    cards?.forEach((card) => observer.observe(card));

    return () => {
      cards?.forEach((card) => observer.unobserve(card));
    };
  }, []);

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
    { item: roadmapItems[6], col: "lg:col-start-2", row: "lg:row-start-4", connector: "left" },
    { 
      item: {
        type: "future" as const,
        title: "To Be Continued",
        subtitle: "Stay Tuned",
        date: "Present & Beyond",
        description: "Continuously building systems, exploring automation, and learning new technology stacks. The journey never stops.",
        extra: null
      }, 
      col: "lg:col-start-1", 
      row: "lg:row-start-4", 
      connector: "none" 
    }
  ];

  return (
    <section id="roadmap" className="relative py-20 md:py-28 bg-[#EFF6FF] dark:bg-[#101E2E] transition-colors duration-200 overflow-hidden">
      
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-[0.25] nb-bg-blueprint pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.1] nb-bg-checkered pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.05] nb-bg-grid-heavy pointer-events-none" />

      {/* Floating SVGs */}
      {/* Rotating Gear Right */}
      <div className="absolute top-[35%] right-[4%] hidden lg:block animate-rotate-slow select-none z-0">
        <svg aria-hidden="true" focusable="false" className="w-16 h-16 text-[#FF5252] stroke-black stroke-[3px] fill-none filter drop-shadow-[2.5px_2.5px_0_rgba(0,0,0,1)]" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="18" />
          <path d="M50,15 L50,0 M50,85 L50,100 M15,50 L0,50 M85,50 L100,50 M25,25 L14,14 M75,75 L86,86 M25,75 L14,86 M75,25 L86,14" stroke="currentColor" strokeWidth="8" strokeLinecap="round" />
        </svg>
      </div>

      {/* 4-point Sparkle Left */}
      <div className="absolute bottom-[25%] left-[3%] hidden lg:block select-none z-0">
        <svg aria-hidden="true" focusable="false" className="w-14 h-14 text-[#FFEB3B] fill-current stroke-black stroke-[3px] filter drop-shadow-[3px_3px_0_rgba(0,0,0,1)]" viewBox="0 0 100 100">
          <path d="M50,0 C50,30 70,50 100,50 C70,50 50,70 50,100 C50,70 30,50 0,50 C30,50 50,30 50,0 Z" />
        </svg>
      </div>

      {/* Small Sparkle bottom right */}
      <div className="absolute bottom-12 right-[15%] hidden md:block select-none z-0 transform rotate-45">
        <svg aria-hidden="true" focusable="false" className="w-10 h-10 text-[#4ECDC4] fill-current stroke-black stroke-[2.5px] filter drop-shadow-[2.5px_2.5px_0_rgba(0,0,0,1)]" viewBox="0 0 100 100">
          <path d="M50,0 C50,25 75,50 100,50 C75,50 50,75 50,100 C50,75 25,50 0,50 C25,50 50,25 50,0 Z" />
        </svg>
      </div>

      {/* Code Brackets Middle Right */}
      <div className="absolute top-[20%] right-[10%] hidden lg:block select-none z-0 transform -rotate-12">
        <svg aria-hidden="true" focusable="false" className="w-16 h-16 text-[#FFEB3B] stroke-black stroke-[3px] fill-none filter drop-shadow-[2px_2px_0_rgba(0,0,0,1)]" viewBox="0 0 100 100">
          <path d="M30,20 L10,50 L30,80 M70,20 L90,50 L70,80" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      {/* Added Icon: Book Top Left */}
      <div className="absolute top-[10%] left-[5%] hidden lg:block select-none z-0 transform -rotate-6">
        <svg aria-hidden="true" focusable="false" className="w-16 h-16 text-[#2196F3] fill-current stroke-black stroke-[1.5px] filter drop-shadow-[1.5px_1.5px_0_rgba(0,0,0,1)]" viewBox="0 0 24 24">
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" fill="none" />
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
        </svg>
      </div>

      {/* Added Icon: Briefcase Middle Left */}
      <div className="absolute top-[50%] left-[3%] hidden xl:block select-none z-0 transform rotate-12">
        <svg aria-hidden="true" focusable="false" className="w-16 h-16 text-[#4ECDC4] fill-current stroke-black stroke-[1.5px] filter drop-shadow-[1.5px_1.5px_0_rgba(0,0,0,1)]" viewBox="0 0 24 24">
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
        </svg>
      </div>

      {/* Added Icon: Terminal / Coding Screen Bottom Left */}
      <div className="absolute bottom-[8%] left-[7%] hidden md:block select-none z-0 transform -rotate-12">
        <svg aria-hidden="true" focusable="false" className="w-14 h-14 text-[#FF5252] fill-current stroke-black stroke-[1.5px] filter drop-shadow-[1.5px_1.5px_0_rgba(0,0,0,1)]" viewBox="0 0 24 24">
          <rect x="2" y="3" width="20" height="18" rx="2" ry="2" />
          <path d="M7 8l5 4-5 4M13 16h4" />
        </svg>
      </div>

      {/* Added Icon: Award Badge / Certificate Middle Right */}
      <div className="absolute top-[65%] right-[3%] hidden xl:block select-none z-0 transform rotate-6 animate-bounce-nb">
        <svg aria-hidden="true" focusable="false" className="w-16 h-16 text-[#FFEB3B] fill-current stroke-black stroke-[1.5px] filter drop-shadow-[1.5px_1.5px_0_rgba(0,0,0,1)]" viewBox="0 0 24 24">
          <circle cx="12" cy="8" r="7" />
          <path d="M8.21 13.89L7 23l5-3 5 3-1.21-9.12" />
        </svg>
      </div>

      {/* NEW: Floating Calander Icon (Top Center-Right) */}
      <div className="absolute top-[5%] right-[25%] hidden xl:block select-none z-0 transform rotate-[-8deg] animate-bounce-slow">
        <img src="/icons/Calander.svg" alt="Calendar Icon" className="w-12 h-12 filter drop-shadow-[2px_2px_0_rgba(0,0,0,1)]" />
      </div>

      {/* NEW: Floating Hourglass Icon (Middle-Right Center) */}
      <div className="absolute top-[48%] right-[25%] hidden xl:block select-none z-0 transform rotate-12">
        <img src="/icons/Hourglass.svg" alt="Hourglass Icon" className="w-12 h-12 filter drop-shadow-[2px_2px_0_rgba(0,0,0,1)] animate-pulse" />
      </div>

      <div ref={containerRef} className="container mx-auto px-6 relative z-10">
        
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
            const isVisible = visibleIndices.includes(idx);
            const isLeftColumn = cell.col.includes("col-start-1");

            return (
              <div 
                key={idx} 
                className={`${cell.col} ${cell.row} relative flex flex-col justify-between`}
              >
                
                {/* Winding Connecting Lines (Stays static/connected during card animation, positioned under the cards) */}
                {cell.connector === "right" && (
                  <div className="absolute top-[40%] left-[calc(100%-100px)] w-80 h-[5px] bg-black dark:bg-black z-0" />
                )}
                {cell.connector === "left" && (
                  <div className="absolute top-[40%] right-[calc(100%-100px)] w-80 h-[5px] bg-black dark:bg-black z-0" />
                )}
                {cell.connector === "down" && (
                  <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-[5px] h-48 bg-black dark:bg-black z-0" />
                )}

                {/* Card Container (Only this element animates in/out with Pop Scale 50% & Spring Tilt, opacity stays 100%) */}
                <div 
                  data-index={idx}
                  className={`p-6 bg-white dark:bg-[#1E1E1E] nb-card-static relative h-full flex flex-col justify-between hover:rotate-[0.5deg] transition-all duration-700 cubic-bezier(0.34, 1.56, 0.64, 1) z-10 ${
                    isVisible 
                      ? "scale-100 rotate-0" 
                      : isLeftColumn
                        ? "scale-50 -rotate-6"
                        : "scale-50 rotate-6"
                  } ${
                    cell.item.type === "education"
                      ? "border-t-[10px] border-t-[#2196F3]" 
                      : cell.item.type === "future"
                        ? "border-t-[10px] border-t-[#FFEB3B]"
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
                        cell.item.type === "education"
                          ? "bg-[#EFF6FF] text-[#2196F3]" 
                          : cell.item.type === "future"
                            ? "bg-[#FFFDEB] text-[#B48A05] dark:text-[#FFEB3B]"
                            : "bg-[#FEF2F2] text-[#FF5252]"
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
        <div className="lg:hidden max-w-md mx-auto relative px-0.5">
          
          {/* Continuous vertical connector line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-8 bottom-8 w-[5px] bg-black z-0" />

          <div className="space-y-12 relative z-10">
            {roadmapItems.map((item, idx) => {
              const isEdu = item.type === "education";
              const isVisible = visibleIndices.includes(idx);
              const isEven = idx % 2 === 0;

              return (
                <div 
                  key={idx} 
                  data-index={idx}
                  className={`relative transition-all duration-700 cubic-bezier(0.34, 1.56, 0.64, 1) ${
                    isVisible 
                      ? "scale-100 rotate-0" 
                      : isEven
                        ? "scale-50 -rotate-4"
                        : "scale-50 rotate-4"
                  }`}
                >
                  
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

                </div>
              );
            })}

            {/* Mobile Card: To Be Continued */}
            {(() => {
              const futureIndex = roadmapItems.length;
              const isVisible = visibleIndices.includes(futureIndex);
              const isEven = futureIndex % 2 === 0;

              return (
                <div 
                  data-index={futureIndex}
                  className={`relative transition-all duration-700 cubic-bezier(0.34, 1.56, 0.64, 1) ${
                    isVisible 
                      ? "scale-100 rotate-0" 
                      : isEven
                        ? "scale-50 -rotate-4"
                        : "scale-50 rotate-4"
                  }`}
                >
                  <div className="w-full p-6 bg-white dark:bg-[#1E1E1E] nb-card-static relative border-t-[10px] border-t-[#FFEB3B]">
                    <div className="flex justify-between items-center mb-4">
                      <span className="font-mono text-[10px] font-black bg-[#FFEB3B] text-black border border-black px-2.5 py-0.5 shadow-[1px_1px_0_#000]">
                        Present & Beyond
                      </span>
                      <span className="font-mono text-[9px] font-black uppercase px-2 py-0.5 border border-black bg-[#FFFDEB] text-[#B48A05] dark:text-[#FFEB3B]">
                        future
                      </span>
                    </div>

                    <h4 className="text-lg font-black uppercase tracking-tight text-black dark:text-white leading-tight mb-1">
                      To Be Continued
                    </h4>
                    <p className="text-xs font-black uppercase tracking-wide text-gray-500 mb-3">
                      Stay Tuned
                    </p>
                    
                    <p className="text-gray-700 dark:text-gray-300 font-bold text-xs leading-relaxed mb-4">
                      Continuously building systems, exploring automation, and learning new technology stacks. The journey never stops.
                    </p>
                  </div>
                </div>
              );
            })()}
          </div>
        </div>

      </div>

      {/* Ripped Paper Divider */}
      <div className="absolute bottom-0 left-0 right-0 w-full h-8 z-20 translate-y-[2px] pointer-events-none">
        {/* Next section background with motifs clipped to ripped shape */}
        <div 
          className="absolute inset-0 w-full h-full bg-[#F0FDF4] dark:bg-[#101E16]"
          style={{ clipPath: 'polygon(0% 50%, 4% 25%, 8% 62.5%, 12% 20%, 16% 55%, 20% 30%, 24% 67.5%, 28% 25%, 32% 60%, 36% 30%, 40% 70%, 44% 37.5%, 48% 65%, 52% 25%, 56% 55%, 60% 20%, 64% 60%, 68% 30%, 72% 70%, 76% 37.5%, 80% 62.5%, 84% 20%, 88% 55%, 92% 30%, 96% 67.5%, 100% 37.5%, 100% 100%, 0% 100%)' }}
        >
          <div aria-hidden="true" className="absolute inset-0 opacity-[0.08] nb-bg-grid-heavy pointer-events-none bg-[position:left_bottom]" />
          <div aria-hidden="true" className="absolute inset-0 opacity-[0.15] nb-bg-checkered pointer-events-none bg-[position:left_bottom]" />
        </div>
        {/* The stroke */}
        <svg viewBox="0 0 1000 40" className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none" aria-hidden="true" focusable="false">
          <path className="stroke-black stroke-[4px] fill-none" d="M0,20 L40,10 L80,25 L120,8 L160,22 L200,12 L240,27 L280,10 L320,24 L360,12 L400,28 L440,15 L480,26 L520,10 L560,22 L600,8 L640,24 L680,12 L720,28 L760,15 L800,25 L840,8 L880,22 L920,12 L960,27 L1000,15" />
        </svg>
      </div>
    </section>
  );
}
