"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, RefreshCw } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#FFFBEB] dark:bg-[#121212] flex items-center justify-center p-6 transition-colors duration-200">
      
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-[0.1] nb-bg-checkered pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.06] nb-bg-grid-heavy pointer-events-none" />

      {/* Main 404 Panel */}
      <div className="max-w-md w-full bg-white dark:bg-[#1E1E1E] nb-border p-8 shadow-[8px_8px_0_#000] text-black dark:text-white relative transform rotate-[-1deg]">
        
        {/* Warning Stripes Top Ribbon */}
        <div className="absolute top-0 left-0 right-0 h-4 nb-bg-stripes border-b-3 border-black" />

        <div className="text-center pt-4 space-y-6">
          
          {/* Error Code Badge */}
          <div className="inline-block bg-[#FF5252] text-white px-4 py-1.5 font-mono font-black text-sm nb-border transform rotate-[3deg] shadow-[2px_2px_0_#000]">
            ERROR CODE: 404
          </div>

          <h1 className="text-4xl sm:text-5xl font-black uppercase tracking-tight leading-none mt-4">
            Lost in Space
          </h1>

          <p className="text-sm font-bold text-gray-700 dark:text-gray-300 leading-relaxed">
            The page you are looking for has been compiled out of existence, moved, or never existed in the first place. Let's get you back on track!
          </p>

          {/* Action Button */}
          <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/"
              className="bg-[#FFEB3B] text-black px-6 py-3 font-black uppercase tracking-wider text-xs nb-btn inline-flex items-center justify-center gap-2"
            >
              <ArrowLeft className="h-4.5 w-4.5 stroke-[2.5]" />
              <span>Back to Home</span>
            </Link>
            <button 
              onClick={() => window.location.reload()}
              className="bg-white text-black dark:bg-[#1E1E1E] dark:text-white px-6 py-3 font-black uppercase tracking-wider text-xs nb-btn inline-flex items-center justify-center gap-2"
            >
              <RefreshCw className="h-4 w-4" />
              <span>Reload Page</span>
            </button>
          </div>

        </div>

      </div>
    </main>
  );
}
