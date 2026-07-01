"use client";

import React from "react";
import { portfolio } from "@/data/portfolio";
import { Github, Instagram, Linkedin, Mail, Send, ExternalLink } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="relative py-20 md:py-28 bg-[#FFF5F5] dark:bg-[#1E1212] transition-colors duration-200 overflow-hidden">
      
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-[0.1] nb-bg-grid-heavy" />
      <div className="absolute inset-0 opacity-[0.2] nb-bg-checkered" />

      {/* Paper Plane SVG Left */}
      <div className="absolute top-[35%] left-[5%] hidden lg:block select-none z-0 transform rotate-12">
        <svg aria-hidden="true" focusable="false" className="w-16 h-16 text-[#4ECDC4] fill-current stroke-black stroke-[3px] filter drop-shadow-[2.5px_2.5px_0_rgba(0,0,0,1)]" viewBox="0 0 100 100">
          <path d="M0,50 L100,0 L50,100 L40,60 Z" />
          <path d="M100,0 L40,60" stroke="black" strokeWidth="3" />
        </svg>
      </div>

      {/* Lightning Bolt SVG Right */}
      <div className="absolute bottom-[15%] right-[5%] hidden lg:block select-none z-0 transform rotate-[-8deg]">
        <svg aria-hidden="true" focusable="false" className="w-14 h-24 text-[#FFEB3B] fill-current stroke-black stroke-[3px] filter drop-shadow-[3px_3px_0_rgba(0,0,0,1)] animate-bounce-nb" viewBox="0 0 50 100">
          <polygon points="30,0 5,50 25,50 15,100 45,40 25,40" />
        </svg>
      </div>

      {/* NEW: Crosshairs Bottom Left */}
      <div className="absolute bottom-10 left-[8%] hidden md:block select-none z-0">
        <svg aria-hidden="true" focusable="false" className="w-12 h-12 text-[#FF5252] stroke-black stroke-[3px] fill-none filter drop-shadow-[2px_2px_0_rgba(0,0,0,1)]" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="28" />
          <line x1="50" y1="5" x2="50" y2="95" />
          <line x1="5" y1="50" x2="95" y2="50" />
        </svg>
      </div>

      {/* NEW: Concentric Ring Top Right */}
      <div className="absolute top-10 right-[15%] hidden md:block select-none z-0 transform rotate-45">
        <svg aria-hidden="true" focusable="false" className="w-14 h-14 text-[#2196F3] stroke-black stroke-[3px] fill-none filter drop-shadow-[2.5px_2.5px_0_rgba(0,0,0,1)]" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="30" strokeWidth="6" />
          <circle cx="50" cy="50" r="14" fill="black" />
        </svg>
      </div>

      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
          {/* Contact Info Column */}
          <div className="space-y-8">
            <div>
              <h2 className="text-base font-black tracking-widest uppercase bg-[#FF5252] text-white nb-border px-3 py-1 inline-block mb-3 transform rotate-[-2deg]">
                GET IN TOUCH
              </h2>
              <h3 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-black dark:text-white mt-1 leading-[1.1]">
                Let's Build the Future Together
              </h3>
            </div>
            
            <p className="text-lg font-bold text-gray-700 dark:text-gray-300 leading-relaxed">
              I am open to internship opportunities, research collaborations, and freelance projects. 
              Whether you have a hardware setup to debug or a modern web platform to architect, feel free to drop a message.
            </p>
            
            {/* Social channels as list */}
            <div className="space-y-4 pt-4">
              <a 
                href={`mailto:${portfolio.socials.email}`}
                className="w-full bg-white dark:bg-[#1E1E1E] text-black dark:text-white p-4 font-mono font-bold text-sm sm:text-base nb-border flex items-center justify-between hover:bg-[#2196F3] hover:text-white transition-colors"
              >
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 stroke-[2.5]" />
                  <span>{portfolio.socials.email}</span>
                </div>
                <ExternalLink className="h-4 w-4 shrink-0" />
              </a>
              <a 
                href={portfolio.socials.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full bg-white dark:bg-[#1E1E1E] text-black dark:text-white p-4 font-mono font-bold text-sm sm:text-base nb-border flex items-center justify-between hover:bg-[#FFEB3B] hover:text-black transition-colors"
              >
                <div className="flex items-center gap-3">
                  <Github className="h-5 w-5 stroke-[2.5]" />
                  <span>github.com/Syaasr</span>
                </div>
                <ExternalLink className="h-4 w-4 shrink-0" />
              </a>
              <a 
                href={portfolio.socials.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full bg-white dark:bg-[#1E1E1E] text-black dark:text-white p-4 font-mono font-bold text-sm sm:text-base nb-border flex items-center justify-between hover:bg-[#2196F3] hover:text-white transition-colors"
              >
                <div className="flex items-center gap-3">
                  <Linkedin className="h-5 w-5 stroke-[2.5]" />
                  <span>Syaikhasril Maulana Firdaus</span>
                </div>
                <ExternalLink className="h-4 w-4 shrink-0" />
              </a>
              <a 
                href={portfolio.socials.instagram} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full bg-white dark:bg-[#1E1E1E] text-black dark:text-white p-4 font-mono font-bold text-sm sm:text-base nb-border flex items-center justify-between hover:bg-[#FF5252] hover:text-white transition-colors"
              >
                <div className="flex items-center gap-3">
                  <Instagram className="h-5 w-5 stroke-[2.5]" />
                  <span>@syaikhasrilmf</span>
                </div>
                <ExternalLink className="h-4 w-4 shrink-0" />
              </a>
            </div>
          </div>

          {/* Form Column */}
          <div className="bg-[#FFEB3B] p-8 nb-border border-black shadow-[8px_8px_0_#000] text-black transform rotate-[-0.5deg] relative">
            
            {/* Caution stripes header ribbon */}
            <div className="absolute top-0 left-0 right-0 h-2.5 nb-bg-stripes border-b-2 border-black" />
            
            <h4 className="text-xl font-black uppercase border-b-2 border-black pb-2 pt-2 mb-6 flex items-center gap-2">
              <Mail className="h-5 w-5" />
              <span>Send a Message</span>
            </h4>
            
            <form className="space-y-5" action={`mailto:${portfolio.socials.email}`} method="post" encType="text/plain">
              <div>
                <label htmlFor="name" className="block text-xs font-mono font-bold uppercase mb-1.5">
                  Full Name
                </label>
                <input 
                  id="name" 
                  name="name" 
                  type="text" 
                  placeholder="John Doe" 
                  className="w-full bg-white text-black font-bold p-3 nb-border focus:bg-gray-50 focus:outline-none placeholder-gray-400 text-sm"
                  required 
                  suppressHydrationWarning={true}
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-xs font-mono font-bold uppercase mb-1.5">
                  Email Address
                </label>
                <input 
                  id="email" 
                  name="email" 
                  type="email" 
                  placeholder="john@example.com" 
                  className="w-full bg-white text-black font-bold p-3 nb-border focus:bg-gray-50 focus:outline-none placeholder-gray-400 text-sm"
                  required 
                  suppressHydrationWarning={true}
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-xs font-mono font-bold uppercase mb-1.5">
                  Message Details
                </label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows={4} 
                  placeholder="Explain your project goals..." 
                  className="w-full bg-white text-black font-bold p-3 nb-border focus:bg-gray-50 focus:outline-none placeholder-gray-400 text-sm"
                  required 
                  suppressHydrationWarning={true}
                />
              </div>
              
              <button 
                type="submit" 
                className="w-full bg-[#FF5252] text-white p-3.5 font-black uppercase tracking-wider text-sm nb-btn inline-flex justify-center items-center gap-2 cursor-pointer"
              >
                <span>Send Message</span>
                <Send className="h-4.5 w-4.5 stroke-[2.5]" />
              </button>
            </form>
          </div>
      
        </div>
      </div>

      {/* Ripped Paper Divider */}
      <div className="absolute bottom-0 left-0 right-0 w-full h-8 z-20 translate-y-[2px] pointer-events-none">
        {/* Next section background with motifs clipped to ripped shape */}
        <div 
          className="absolute inset-0 w-full h-full bg-white dark:bg-[#1A1A1A]"
          style={{ clipPath: 'polygon(0% 50%, 4% 25%, 8% 62.5%, 12% 20%, 16% 55%, 20% 30%, 24% 67.5%, 28% 25%, 32% 60%, 36% 30%, 40% 70%, 44% 37.5%, 48% 65%, 52% 25%, 56% 55%, 60% 20%, 64% 60%, 68% 30%, 72% 70%, 76% 37.5%, 80% 62.5%, 84% 20%, 88% 55%, 92% 30%, 96% 67.5%, 100% 37.5%, 100% 100%, 0% 100%)' }}
        >

        </div>
        {/* The stroke */}
        <svg viewBox="0 0 1000 40" className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none" aria-hidden="true" focusable="false">
          <path className="stroke-black stroke-[4px] fill-none" d="M0,20 L40,10 L80,25 L120,8 L160,22 L200,12 L240,27 L280,10 L320,24 L360,12 L400,28 L440,15 L480,26 L520,10 L560,22 L600,8 L640,24 L680,12 L720,28 L760,15 L800,25 L840,8 L880,22 L920,12 L960,27 L1000,15" />
        </svg>
      </div>
    </section>
  );
}
