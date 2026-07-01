"use client";

import React, { useState } from "react";
import Link from "next/link";
import { portfolio } from "@/data/portfolio";
import { Mail, Menu, X, Sparkles, Brain } from "lucide-react";
import { useTheme } from "next-themes";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-[#1A1A1A] nb-border border-t-0 border-x-0 transition-colors duration-200">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <Link href="#" className="flex items-center gap-2 group">
            <div className="bg-[#FFEB3B] text-black border-2 border-black px-2.5 py-1 font-black text-lg tracking-tight transform group-hover:rotate-[-2deg] transition-all">
              {portfolio.personalInfo.name.split(" ")[0].toUpperCase()}
            </div>
            <span className="font-mono text-xs font-bold bg-[#FF5252] text-white border-2 border-black px-1.5 py-0.2 transform rotate-[3deg] transition-all">
              .DEV
            </span>
          </Link>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex items-center gap-6">
            <a href="#about" className="font-bold text-sm tracking-wide uppercase px-3 py-1 border-2 border-transparent hover:border-black hover:bg-[#4ECDC4] dark:hover:text-black transition-all duration-150 rounded-sm">
              About
            </a>
            <a href="#roadmap" className="font-bold text-sm tracking-wide uppercase px-3 py-1 border-2 border-transparent hover:border-black hover:bg-[#FFEB3B] dark:hover:text-black transition-all duration-150 rounded-sm">
              Journey
            </a>
            <a href="#projects" className="font-bold text-sm tracking-wide uppercase px-3 py-1 border-2 border-transparent hover:border-black hover:bg-[#FF5252] hover:text-white transition-all duration-150 rounded-sm">
              Projects
            </a>
            <a href="#blog" className="font-bold text-sm tracking-wide uppercase px-3 py-1 border-2 border-transparent hover:border-black hover:bg-[#4ECDC4] dark:hover:text-black transition-all duration-150 rounded-sm">
              Blog
            </a>
          </div>

          {/* Desktop CTA & Theme Toggle */}
          <div className="hidden md:flex items-center gap-4">
            <button 
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="bg-white dark:bg-[#1A1A1A] text-black dark:text-white border-2 border-black p-2 cursor-pointer transition-transform hover:-translate-y-0.5 active:translate-y-0"
              aria-label="Toggle Theme"
            >
              {theme === "dark" ? (
                <Sparkles className="h-4.5 w-4.5 text-[#FFEB3B] fill-[#FFEB3B]" />
              ) : (
                <Brain className="h-4.5 w-4.5 text-[#2196F3]" />
              )}
            </button>

            <a 
              href="#contact" 
              className="bg-[#2196F3] text-white px-5 py-2 font-bold uppercase tracking-wider text-sm nb-btn inline-flex items-center gap-2"
            >
              <Mail className="h-4 w-4" />
              Contact
            </a>
          </div>

          {/* Mobile navigation triggers */}
          <div className="flex items-center md:hidden gap-3">
            <button 
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="bg-white dark:bg-[#1A1A1A] text-black dark:text-white border-2 border-black p-1.5 cursor-pointer"
              aria-label="Toggle Theme"
            >
              {theme === "dark" ? (
                <Sparkles className="h-4 w-4 text-[#FFEB3B] fill-[#FFEB3B]" />
              ) : (
                <Brain className="h-4 w-4 text-[#2196F3]" />
              )}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="bg-[#FFEB3B] text-black p-2 nb-border hover:bg-yellow-400"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Panel */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t-3 border-black bg-white dark:bg-[#1A1A1A] py-6 px-4 space-y-3 transition-all duration-200">
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
