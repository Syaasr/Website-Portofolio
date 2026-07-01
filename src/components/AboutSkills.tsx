"use client";

import React from "react";
import { portfolio } from "@/data/portfolio";

export function AboutSkills() {
  return (
    <section id="about" className="relative py-20 md:py-28 bg-[#FFFBEB] dark:bg-[#181814] transition-colors duration-200 overflow-hidden border-b-4 border-black">
      
      {/* Background Decorators */}
      <div className="absolute inset-0 opacity-[0.2] nb-bg-checkered" />
      <div className="absolute inset-0 opacity-[0.06] nb-bg-grid-heavy" />

      {/* Floating Neubrutalist SVGs */}
      {/* 4-Point Sparkle Top-Right */}
      <div className="absolute top-12 right-[12%] hidden lg:block transform rotate-12 animate-rotate-slow select-none z-0">
        <svg className="w-16 h-16 text-[#FFEB3B] fill-current stroke-black stroke-[3px] filter drop-shadow-[3px_3px_0_rgba(0,0,0,1)]" viewBox="0 0 100 100">
          <path d="M50,0 C50,30 70,50 100,50 C70,50 50,70 50,100 C50,70 30,50 0,50 C30,50 50,30 50,0 Z" />
        </svg>
      </div>

      {/* Wavy Zigzag Bottom-Left */}
      <div className="absolute bottom-16 left-[5%] hidden md:block transform -rotate-6 select-none z-0">
        <svg className="w-32 h-8 text-[#FF5252] stroke-black stroke-[4px] fill-none filter drop-shadow-[3px_3px_0_rgba(0,0,0,1)]" viewBox="0 0 100 25">
          <path d="M0,12 L20,3 L40,21 L60,3 L80,21 L100,12" />
        </svg>
      </div>

      {/* Crosshair Center-Right */}
      <div className="absolute top-[45%] right-[5%] hidden md:block select-none z-0">
        <svg className="w-10 h-10 text-[#4ECDC4] stroke-black stroke-[3.5px] fill-none" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="28" />
          <line x1="50" y1="0" x2="50" y2="100" />
          <line x1="0" y1="50" x2="100" y2="50" />
        </svg>
      </div>

      {/* Floating Sparkle Left */}
      <div className="absolute top-1/3 left-[2%] hidden xl:block select-none z-0">
        <svg className="w-12 h-12 text-[#2196F3] fill-current stroke-black stroke-[3px]" viewBox="0 0 100 100">
          <polygon points="50,10 64,40 90,50 60,60 50,90 40,60 10,50 40,40" />
        </svg>
      </div>

      {/* Neubrutalist Target Ring Bottom Right */}
      <div className="absolute bottom-8 right-[4%] hidden lg:block select-none z-0 transform rotate-45">
        <svg className="w-14 h-14 text-[#FFEB3B] stroke-black stroke-[3px] fill-none filter drop-shadow-[2.5px_2.5px_0_rgba(0,0,0,1)]" viewBox="0 0 100 100">
          <rect x="20" y="20" width="60" height="60" rx="0" strokeWidth="6" />
          <circle cx="50" cy="50" r="12" fill="black" />
        </svg>
      </div>

      {/* Small Sparkle top left */}
      <div className="absolute top-6 left-[15%] hidden md:block select-none z-0 transform -rotate-12">
        <svg className="w-8 h-8 text-[#FF5252] fill-current stroke-black stroke-[2.5px]" viewBox="0 0 100 100">
          <path d="M50,0 C50,25 75,50 100,50 C75,50 50,75 50,100 C50,75 25,50 0,50 C25,50 50,25 50,0 Z" />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Left Column: About Story, Stats, Top Competencies, Languages */}
          <div className="space-y-8">
            <div>
              <h2 className="text-base font-black tracking-widest uppercase bg-[#FF5252] text-white nb-border px-3 py-1 inline-block mb-3 transform rotate-[-1.5deg]">
                INTRO
              </h2>
              <h3 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-black dark:text-white mt-2">
                About Me
              </h3>
            </div>
            
            <p className="text-lg font-bold text-gray-800 dark:text-gray-200 leading-relaxed">
              {portfolio.about.story}
            </p>
            
            {/* Stats list */}
            <div className="grid grid-cols-3 gap-6 pt-4">
              <div className="bg-[#4ECDC4] text-black p-4 nb-border text-center transform rotate-1">
                <div className="text-3xl font-black leading-none">{portfolio.about.stats.experience}</div>
                <div className="text-xs font-mono font-black uppercase mt-2">Experience</div>
              </div>
              <div className="bg-[#FFEB3B] text-black p-4 nb-border text-center transform -rotate-1">
                <div className="text-3xl font-black leading-none">{portfolio.about.stats.projects}</div>
                <div className="text-xs font-mono font-black uppercase mt-2">Projects</div>
              </div>
              <div className="bg-[#2196F3] text-white p-4 nb-border text-center transform rotate-2">
                <div className="text-3xl font-black leading-none">{portfolio.about.stats.gpa}</div>
                <div className="text-xs font-mono font-black uppercase mt-2">GPA</div>
              </div>
            </div>

            {/* Top Competencies & Languages Spoken Cards moved here */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              
              {/* Top Focus Skills Card */}
              <div className="bg-white dark:bg-[#1E1E1E] nb-card-static p-6 transform hover:rotate-1 transition-transform duration-200">
                <div className="flex items-center justify-between mb-4 border-b-2 border-black pb-2">
                  <h4 className="text-base font-black uppercase tracking-wide text-black dark:text-white">
                    Top Competencies
                  </h4>
                  <span className="font-mono text-[10px] font-black uppercase px-2 py-0.5 border border-black bg-[#FFEB3B] text-black">
                    Core
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {portfolio.skills.topSkills.map((skill) => (
                    <span 
                      key={skill} 
                      className="font-mono text-xs font-bold bg-[#FF5252] text-white border-2 border-black px-2.5 py-1"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Spoken Languages Card */}
              <div className="bg-white dark:bg-[#1E1E1E] nb-card-static p-6 transform hover:rotate-[-1deg] transition-transform duration-200">
                <div className="flex items-center justify-between mb-4 border-b-2 border-black pb-2">
                  <h4 className="text-base font-black uppercase tracking-wide text-black dark:text-white">
                    Languages Spoken
                  </h4>
                  <span className="font-mono text-[10px] font-black uppercase px-2 py-0.5 border border-black bg-[#4ECDC4] text-black">
                    Speak
                  </span>
                </div>
                <div className="space-y-2">
                  {portfolio.skills.languagesSpoken.map((lang) => (
                    <div key={lang.name} className="flex justify-between items-center text-xs font-mono font-bold text-gray-700 dark:text-gray-300">
                      <span>{lang.name}</span>
                      <span className="bg-gray-100 dark:bg-black border border-black px-2 py-0.5 text-[9px]">
                        {lang.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Skill Lists Categories */}
          <div className="space-y-8">
            <div>
              <h2 className="text-base font-black tracking-widest uppercase bg-[#4ECDC4] text-black nb-border px-3 py-1 inline-block mb-3 transform rotate-[1.5deg]">
                COMPETENCIES
              </h2>
              <h3 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-black dark:text-white mt-2">
                Technical Skills
              </h3>
            </div>

            <div className="grid gap-6">
              <SkillCategory title="Programming Languages" skills={portfolio.skills.languages} accentColor="bg-[#FF5252] text-white" />
              <SkillCategory title="Web Development" skills={portfolio.skills.web} accentColor="bg-[#FFEB3B] text-black" />
              <SkillCategory title="Robotics & IoT" skills={portfolio.skills.robotics} accentColor="bg-[#4ECDC4] text-black" />
              <SkillCategory title="Tools & DevOps" skills={portfolio.skills.tools} accentColor="bg-[#2196F3] text-white" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

interface SkillCategoryProps {
  title: string;
  skills: string[];
  accentColor: string;
}

function SkillCategory({ title, skills, accentColor }: SkillCategoryProps) {
  return (
    <div className="bg-white dark:bg-[#1E1E1E] nb-card-static p-6 transform hover:rotate-[0.5deg] transition-transform duration-200">
      <div className="flex items-center justify-between mb-4 border-b-2 border-black pb-2">
        <h4 className="text-lg font-black uppercase tracking-wide text-black dark:text-white">
          {title}
        </h4>
        <span className={`font-mono text-xs font-black uppercase px-2 py-0.5 border border-black ${accentColor}`}>
          Active
        </span>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span 
            key={skill} 
            className="font-mono text-xs font-bold bg-[#F3F4F6] dark:bg-[#202020] text-black dark:text-white border-2 border-black px-2.5 py-1 transition-transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
