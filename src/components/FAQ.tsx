"use client";

import React, { useState } from "react";
import { HelpCircle, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "What is Syaikhasril's primary development focus?",
    answer: "His work mainly spans modern web development (Next.js, Laravel) and robotics system control firmware. He builds secure web platforms with rich aesthetics while programming microcontrollers (ESP32, CM-530) to coordinate high-speed mechanical actuators."
  },
  {
    question: "Which programming languages does he specialize in?",
    answer: "For robotics controller firmware and hardware integration, Syaikhasril primarily writes in C and C++. For web applications, databases, and general automation scripting, he works extensively with TypeScript, JavaScript, PHP, and Python."
  },
  {
    question: "What is his academic background?",
    answer: "He is currently pursuing a Bachelor of Computer Science (S1 Informatika) at Universitas Sebelas Maret (UNS) in Surakarta, Indonesia, maintaining a GPA of 3.7+ and actively leading the programming division for Robotika UNS."
  },
  {
    question: "Is Syaikhasril available for freelance projects or collaboration?",
    answer: "Yes! He is open to freelance web platform design, UI/UX prototyping, and embedded IoT controller consulting. You can initiate a conversation directly via the Contact form or connect via LinkedIn."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative py-20 bg-[#FFF] dark:bg-[#121212] border-b-4 border-black transition-colors duration-200 overflow-hidden">
      
      {/* Background decorations */}
      <div aria-hidden="true" className="absolute inset-0 opacity-[0.05] nb-bg-dots pointer-events-none" />
      <div aria-hidden="true" className="absolute inset-0 opacity-[0.06] nb-bg-grid-heavy pointer-events-none" />

      {/* Floating Sparkle Top Right */}
      <div className="absolute top-[15%] right-[5%] hidden lg:block select-none z-0 animate-rotate-slow">
        <svg aria-hidden="true" focusable="false" className="w-14 h-14 text-[#4ECDC4] fill-current stroke-black stroke-[3px] filter drop-shadow-[2.5px_2.5px_0_rgba(0,0,0,1)]" viewBox="0 0 100 100">
          <path d="M50,0 C50,30 70,50 100,50 C70,50 50,70 50,100 C50,70 30,50 0,50 C30,50 50,30 50,0 Z" />
        </svg>
      </div>

      {/* Target Crosshair Bottom Left */}
      <div className="absolute bottom-[15%] left-[5%] hidden md:block select-none z-0">
        <svg aria-hidden="true" focusable="false" className="w-12 h-12 text-[#FF5252] stroke-black stroke-[3px] fill-none" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="28" />
          <line x1="50" y1="5" x2="50" y2="95" />
          <line x1="5" y1="50" x2="95" y2="50" />
        </svg>
      </div>

      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center gap-4 mb-16 max-w-2xl mx-auto text-center md:text-left">
          <div className="w-14 h-14 bg-[#FF5252] text-white border-[3px] border-black flex items-center justify-center transform rotate-[-3deg] shrink-0 mx-auto md:mx-0">
            <HelpCircle className="h-8 w-8 stroke-[2.5]" />
          </div>
          <div>
            <h2 className="text-base font-black tracking-widest uppercase bg-[#FFEB3B] text-black nb-border px-3 py-1 inline-block mb-1.5 transform rotate-[1deg]">
              FAQ
            </h2>
            <h3 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-black dark:text-white mt-1">
              Frequently Asked Qs
            </h3>
          </div>
        </div>

        {/* Accordion List */}
        <div className="max-w-2xl mx-auto space-y-6">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className="bg-white dark:bg-[#1E1E1E] border-[3px] border-black shadow-[4px_4px_0_#000] transition-all duration-200"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-5 flex items-center justify-between text-left font-black text-base sm:text-lg uppercase tracking-tight text-black dark:text-white cursor-pointer hover:bg-gray-50 dark:hover:bg-[#252525] transition-colors"
                >
                  <span>{item.question}</span>
                  <ChevronDown 
                    className={cn(
                      "h-5 w-5 stroke-[3] transition-transform duration-200 shrink-0 ml-4",
                      isOpen && "transform rotate-180"
                    )}
                  />
                </button>
                <div 
                  className={cn(
                    "grid transition-all duration-200 ease-in-out border-black",
                    isOpen ? "grid-rows-[1fr] border-t-3 p-5 bg-gray-50 dark:bg-[#181818]" : "grid-rows-[0fr] p-0 border-t-0"
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="text-sm sm:text-base font-bold text-gray-700 dark:text-gray-300 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
