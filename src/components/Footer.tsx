"use client";

import React from "react";
import { portfolio } from "@/data/portfolio";
import { Github, Linkedin, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-white dark:bg-[#1A1A1A] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          
          {/* Col 1: Brand & Info */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2 group">
              {/* ponytail: standardized 3px borders */}
              <div className="bg-[#FFEB3B] text-black border-[3px] border-black px-2.5 py-1 font-black text-lg tracking-tight transform group-hover:rotate-[-2deg] transition-all">
                {portfolio.personalInfo.name.split(" ")[0].toUpperCase()}
              </div>
              <span className="font-mono text-xs font-bold bg-[#FF5252] text-white border-[3px] border-black px-1.5 py-0.2 transform rotate-[3deg] transition-all">
                .DEV
              </span>
            </div>
            <p className="text-gray-700 dark:text-gray-300 font-bold text-xs sm:text-sm max-w-sm leading-relaxed">
              Informatics engineering student at Universitas Sebelas Maret (UNS) specializing in Next.js web application architecture and low-latency robotics PID systems.
            </p>
            <div className="flex gap-3">
              {/* ponytail: standardized 3px borders and interactive shadows */}
              <a 
                href={portfolio.socials.github} 
                target="_blank" 
                rel="noreferrer"
                className="p-2 bg-white text-black border-[3px] border-black hover:bg-[#FFEB3B] transition-transform hover:-translate-y-0.5 active:translate-y-0 shadow-[2px_2px_0_#000]"
                aria-label="GitHub Profile"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href={portfolio.socials.linkedin} 
                target="_blank" 
                rel="noreferrer"
                className="p-2 bg-white text-black border-[3px] border-black hover:bg-[#2196F3] hover:text-white transition-transform hover:-translate-y-0.5 active:translate-y-0 shadow-[2px_2px_0_#000]"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href={portfolio.socials.instagram} 
                target="_blank" 
                rel="noreferrer"
                className="p-2 bg-white text-black border-[3px] border-black hover:bg-[#FF5252] hover:text-white transition-transform hover:-translate-y-0.5 active:translate-y-0 shadow-[2px_2px_0_#000]"
                aria-label="Instagram Profile"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h4 className="text-sm font-black uppercase tracking-wider text-black dark:text-white border-b-2 border-black pb-1.5 mb-4">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm font-bold">
              <li>
                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white">
                  Back to Top
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white">
                  About Me
                </a>
              </li>
              <li>
                <a href="#roadmap" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white">
                  My Journey
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white">
                  Featured Projects
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright & Designed Flag */}
        <div className="border-t-3 border-black pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono font-bold text-gray-500">
          <div>
            &copy; Copyright 2026 Syaikhasril Maulana Firdaus. All rights reserved.
          </div>
          <div className="flex items-center gap-2">
            <span>Designed in Indonesia 🇮🇩</span>
            <span className="h-2 w-2 rounded-full bg-[#FF5252] border border-black animate-ping" />
          </div>
        </div>

      </div>
    </footer>
  );
}
