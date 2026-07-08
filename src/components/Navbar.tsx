"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { portfolio } from "@/data/portfolio";
import { Mail, Menu, X } from "lucide-react";

const NAV_SECTIONS = ["about", "roadmap", "projects", "certifications", "blog", "mini-game"];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
  const navListRef = useRef<HTMLDivElement>(null);
  const linkRefs = useRef<Record<string, HTMLAnchorElement | null>>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    for (const id of NAV_SECTIONS) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (activeSection && linkRefs.current[activeSection] && navListRef.current) {
      const el = linkRefs.current[activeSection]!;
      const parentRect = navListRef.current.getBoundingClientRect();
      const elRect = el.getBoundingClientRect();
      setIndicatorStyle({
        left: elRect.left - parentRect.left,
        width: elRect.width,
      });
    }
  }, [activeSection]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-[#1A1A1A] nb-border border-t-0 border-x-0 transition-colors duration-200 nb-safe-nav">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <Link href="#" className="flex items-center gap-2 group">
            {/* ponytail: standardized 3px borders */}
            <div className="bg-[#FFEB3B] text-black border-[3px] border-black px-2.5 py-1 font-black text-lg tracking-tight transform group-hover:rotate-[-2deg] transition-all">
              {portfolio.personalInfo.name.split(" ")[0].toUpperCase()}
            </div>
            <span className="font-mono text-xs font-bold bg-[#FF5252] text-white border-[3px] border-black px-1.5 py-0.2 transform rotate-[3deg] transition-all">
              .DEV
            </span>
          </Link>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex items-center gap-2 relative" ref={navListRef}>
            {NAV_SECTIONS.map((section) => {
              const isActive = activeSection === section;
              const label = section === "mini-game" ? "Arcade" : section.charAt(0).toUpperCase() + section.slice(1);
              const bgMap: Record<string, string> = {
                about: "hover:bg-[#4ECDC4] active:bg-[#4ECDC4]",
                roadmap: "hover:bg-[#FFEB3B] active:bg-[#FFEB3B]",
                projects: "hover:bg-[#FF5252] hover:text-white active:bg-[#FF5252] active:text-white",
                certifications: "hover:bg-[#2196F3] hover:text-white active:bg-[#2196F3] active:text-white",
                blog: "hover:bg-[#4ECDC4] active:bg-[#4ECDC4]",
                "mini-game": "hover:bg-[#FFEB3B] active:bg-[#FFEB3B]",
              };
              return (
                <a
                  key={section}
                  ref={(el) => { linkRefs.current[section] = el; }}
                  href={`#${section}`}
                  className={`font-bold text-sm tracking-wide uppercase px-3 py-1.5 border-[3px] transition-all duration-150 rounded-sm nb-tap-target ${
                    isActive
                      ? `border-black ${bgMap[section].replaceAll('hover:', '').replaceAll('active:', '').trim()}`
                      : `border-transparent ${bgMap[section]} dark:hover:text-black`
                  }`}
                >
                  {label}
                </a>
              );
            })}

            {/* Sliding indicator line */}
            <div
              className="absolute bottom-0 h-[3px] bg-black transition-all duration-300 ease-out pointer-events-none"
              style={{ left: indicatorStyle.left, width: indicatorStyle.width }}
            />
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a 
              href="#contact" 
              className="bg-[#2196F3] text-white px-5 py-2.5 font-bold uppercase tracking-wider text-sm nb-btn inline-flex items-center gap-2 nb-tap"
            >
              <Mail className="h-4 w-4" />
              Contact
            </a>
          </div>

          {/* Mobile navigation triggers */}
          <div className="flex items-center md:hidden gap-3">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="bg-[#FFEB3B] text-black p-3 nb-border hover:bg-yellow-400 nb-tap"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Panel */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t-[3px] border-black bg-white dark:bg-[#1A1A1A] py-6 px-4 space-y-3 transition-all duration-200">
          <a 
            href="#about" 
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-black uppercase tracking-wide px-4 py-2.5 bg-[#4ECDC4] text-black nb-border"
          >
            About
          </a>
          <a 
            href="#roadmap" 
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-black uppercase tracking-wide px-4 py-2.5 bg-[#FFEB3B] text-black nb-border"
          >
            Journey
          </a>
          <a 
            href="#projects" 
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-black uppercase tracking-wide px-4 py-2.5 bg-[#FF5252] text-white nb-border"
          >
            Projects
          </a>
          <a 
            href="#blog" 
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-black uppercase tracking-wide px-4 py-2.5 bg-[#4ECDC4] text-black nb-border"
          >
            Blog
          </a>
          <a 
            href="#certifications" 
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-black uppercase tracking-wide px-4 py-2.5 bg-[#2196F3] text-white nb-border"
          >
            Certifications
          </a>
          <a 
            href="#mini-game" 
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-black uppercase tracking-wide px-4 py-2.5 bg-[#FFEB3B] text-black nb-border"
          >
            Mini Game
          </a>
          <a 
            href="#contact" 
            onClick={() => setMobileMenuOpen(false)}
            className="block text-center text-base font-black uppercase tracking-wide px-4 py-3 bg-black text-white nb-border"
          >
            Contact Me
          </a>
        </div>
      )}
    </nav>
  );
}
