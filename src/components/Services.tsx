"use client";

import React from "react";
import { portfolio } from "@/data/portfolio";
import { Globe, Cpu, Brain } from "lucide-react";

const ICONS = [Globe, Cpu, Brain];

export function Services() {
  return (
    <section id="services" className="relative py-20 md:py-28 bg-[#F0FDF4] dark:bg-[#101E16] transition-colors duration-200 overflow-hidden">
      {/* Background patterns */}
      <div aria-hidden="true" className="absolute inset-0 opacity-[0.08] nb-bg-grid-heavy pointer-events-none" />
      <div aria-hidden="true" className="absolute inset-0 opacity-[0.15] nb-bg-checkered pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-black text-white border-3 border-black flex items-center justify-center transform rotate-[-3deg] shrink-0">
              <Globe className="h-8 w-8 stroke-[2.5]" />
            </div>
            <div>
              <h2 className="text-base font-black tracking-widest uppercase bg-[#4ECDC4] text-black nb-border px-3 py-1 inline-block mb-1.5 transform rotate-[1deg]">
                FOCUS AREAS
              </h2>
              <h3 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-black dark:text-white mt-1">
                What I Build
              </h3>
            </div>
          </div>
        </div>

        {/* 3 Asymmetric Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {portfolio.services.map((service, i) => {
            const Icon = ICONS[i];
            const rotate = i === 0 ? "rotate-[-1deg]" : i === 1 ? "rotate-[1.5deg]" : "rotate-[-0.5deg]";
            const translateY = i === 1 ? "md:translate-y-8" : "";

            return (
              <div
                key={service.title}
                className={`bg-white dark:bg-[#202020] nb-card p-6 sm:p-8 flex flex-col group ${rotate} ${translateY}`}
              >
                {/* Colored Header Accent */}
                <div
                  className="w-full h-2 mb-6"
                  style={{ backgroundColor: service.color }}
                />

                {/* Icon + Title */}
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-12 h-12 border-[3px] border-black flex items-center justify-center shrink-0 group-hover:rotate-[-6deg] transition-transform duration-200"
                    style={{ backgroundColor: service.color }}
                  >
                    <Icon className="h-6 w-6 text-black stroke-[2.5]" />
                  </div>
                  <h4 className="text-xl font-black uppercase tracking-tight text-black dark:text-white leading-tight">
                    {service.title}
                  </h4>
                </div>

                <p className="text-gray-700 dark:text-gray-300 font-bold text-sm leading-relaxed mb-6 flex-grow">
                  {service.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1.5 border-t-2 border-black pt-4">
                  {service.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-[10px] font-bold bg-white dark:bg-black text-black dark:text-white border border-black px-2 py-0.5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Ripped Paper Divider */}
      <div className="absolute bottom-0 left-0 right-0 w-full h-8 z-20 translate-y-[2px] pointer-events-none">
        <div className="absolute inset-0 w-full h-full bg-[#FFFBEB] dark:bg-[#1A1A14]" style={{ clipPath: 'polygon(0% 50%, 4% 25%, 8% 62.5%, 12% 20%, 16% 55%, 20% 30%, 24% 67.5%, 28% 25%, 32% 60%, 36% 30%, 40% 70%, 44% 37.5%, 48% 65%, 52% 25%, 56% 55%, 60% 20%, 64% 60%, 68% 30%, 72% 70%, 76% 37.5%, 80% 62.5%, 84% 20%, 88% 55%, 92% 30%, 96% 67.5%, 100% 37.5%, 100% 100%, 0% 100%)' }}>
          <div aria-hidden="true" className="absolute inset-0 opacity-[0.2] nb-bg-checkered pointer-events-none bg-[position:left_bottom]" />
          <div aria-hidden="true" className="absolute inset-0 opacity-[0.06] nb-bg-grid-heavy pointer-events-none bg-[position:left_bottom]" />
        </div>
        <svg viewBox="0 0 1000 40" className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none" aria-hidden="true" focusable="false">
          <path className="stroke-black stroke-[4px] fill-none" d="M0,20 L40,10 L80,25 L120,8 L160,22 L200,12 L240,27 L280,10 L320,24 L360,12 L400,28 L440,15 L480,26 L520,10 L560,22 L600,8 L640,24 L680,12 L720,28 L760,15 L800,25 L840,8 L880,22 L920,12 L960,27 L1000,15" />
        </svg>
      </div>
    </section>
  );
}
