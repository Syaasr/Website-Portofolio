"use client";

import React, { useState } from "react";
import { portfolio } from "@/data/portfolio";
import { RippedPaperDivider } from "@/components/RippedPaperDivider";
import { Github, Instagram, Linkedin, Mail, Send, ExternalLink } from "lucide-react";

export function Contact() {
  const [activeTab, setActiveTab] = useState<"email" | "anonymous">("email");
  const [submitStatus, setSubmitStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleEmailSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;
    const subject = `Portfolio Inquiry from ${name}`;
    const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
    window.location.href = `mailto:${portfolio.socials.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const handleTelegramSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitStatus("sending");

    const targetForm = e.currentTarget;
    const formData = new FormData(targetForm);
    const secretMessage = formData.get("anon-message") as string;

    try {
      const response = await fetch("/api/send-message", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: secretMessage,
        }),
      });

      if (response.ok) {
        setSubmitStatus("success");
        targetForm.reset();
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Error sending Telegram message:", error);
      setSubmitStatus("error");
    }
  };

  return (
    <section id="contact" className="relative py-20 md:py-28 bg-[#FFF5F5] dark:bg-[#1E1212] transition-colors duration-200 overflow-hidden">

      {/* Background patterns */}
      <div className="absolute inset-0 opacity-[0.1] nb-bg-grid-heavy" />
      <div className="absolute inset-0 opacity-[0.2] nb-bg-checkered" />

      {/* Floating Local SVG Icons for Rich Aesthetics */}
      {/* Paper Plane Icon (Top Left Center) */}
      <div className="absolute top-[8%] left-[26%] hidden xl:block select-none z-0 transform -rotate-12">
        <img src="/icons/Paper plane.svg" alt="Paper Plane Icon" className="w-14 h-14 filter drop-shadow-[2.5px_2.5px_0_rgba(0,0,0,1)]" />
      </div>

      {/* Envelope Open Icon (Bottom Right Center) */}
      <div className="absolute bottom-[20%] right-[25%] hidden xl:block select-none z-0 transform rotate-12 animate-pulse">
        <img src="/icons/Envelope-open.svg" alt="Envelope Open Icon" className="w-12 h-12 filter drop-shadow-[2px_2px_0_rgba(0,0,0,1)]" />
      </div>

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
          <div className="bg-[#FFEB3B] p-8 nb-border border-black shadow-[8px_8px_0_#000] text-black transform rotate-[-0.5deg] relative flex flex-col justify-between">

            {/* Caution stripes header ribbon */}
            <div className="absolute top-0 left-0 right-0 h-2.5 nb-bg-stripes border-b-2 border-black" />

            <div>
              {/* Tab Selector buttons */}
              <div className="flex gap-2 mb-6 mt-2">
                <button
                  type="button"
                  onClick={() => {
                    setActiveTab("email");
                    setSubmitStatus("idle");
                  }}
                  className={`flex-1 py-2 font-mono text-xs font-black uppercase border-2 border-black transition-all ${activeTab === "email"
                    ? "bg-[#FF5252] text-white shadow-[2px_2px_0_#000] -translate-y-0.5"
                    : "bg-white text-black hover:-translate-y-0.5 hover:shadow-[2px_2px_0_#000] active:translate-y-0 active:shadow-none"
                    }`}
                >
                  Email
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setActiveTab("anonymous");
                    setSubmitStatus("idle");
                  }}
                  className={`flex-1 py-2 font-mono text-xs font-black uppercase border-2 border-black transition-all ${activeTab === "anonymous"
                    ? "bg-[#FF5252] text-white shadow-[2px_2px_0_#000] -translate-y-0.5"
                    : "bg-white text-black hover:-translate-y-0.5 hover:shadow-[2px_2px_0_#000] active:translate-y-0 active:shadow-none"
                    }`}
                >
                  Anonymous Message
                </button>
              </div>

              {activeTab === "email" ? (
                <>
                  <h4 className="text-xl font-black uppercase border-b-2 border-black pb-2 mb-6 flex items-center gap-2">
                    <Mail className="h-5 w-5" />
                    <span>Send via Email</span>
                  </h4>

                  <form onSubmit={handleEmailSubmit} className="space-y-5">
                    <div>
                      <div className="relative flex flex-col-reverse">
                        <input
                          id="name"
                          name="name"
                          type="text"
                          placeholder="John Doe"
                          className="peer w-full bg-white text-black font-bold p-3 nb-border focus:bg-gray-50 focus:outline-none placeholder-gray-400 text-sm caret-custom-email mt-1.5"
                          required
                          suppressHydrationWarning={true}
                        />
                        <div className="flex justify-between items-center">
                          <label htmlFor="name" className="block text-xs font-mono font-bold uppercase">
                            Full Name
                          </label>
                          <span className="hidden peer-focus:inline-flex items-center gap-1 font-mono text-[9px] font-black uppercase text-[#FF5252] animate-pulse">
                            <span>[</span> TARGET LOCKED <span>]</span>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="relative flex flex-col-reverse">
                        <input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="john@example.com"
                          className="peer w-full bg-white text-black font-bold p-3 nb-border focus:bg-gray-50 focus:outline-none placeholder-gray-400 text-sm caret-custom-email mt-1.5"
                          required
                          suppressHydrationWarning={true}
                        />
                        <div className="flex justify-between items-center">
                          <label htmlFor="email" className="block text-xs font-mono font-bold uppercase">
                            Email Address
                          </label>
                          <span className="hidden peer-focus:inline-flex items-center gap-1 font-mono text-[9px] font-black uppercase text-[#FF5252] animate-pulse">
                            <span>[</span> TARGET LOCKED <span>]</span>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="relative flex flex-col-reverse">
                        <textarea
                          id="message"
                          name="message"
                          rows={4}
                          placeholder="Explain your project goals..."
                          className="peer w-full bg-white text-black font-bold p-3 nb-border focus:bg-gray-50 focus:outline-none placeholder-gray-400 text-sm caret-custom-email mt-1.5"
                          required
                          suppressHydrationWarning={true}
                        />
                        <div className="flex justify-between items-center">
                          <label htmlFor="message" className="block text-xs font-mono font-bold uppercase">
                            Message Details
                          </label>
                          <span className="hidden peer-focus:inline-flex items-center gap-1 font-mono text-[9px] font-black uppercase text-[#FF5252] animate-pulse">
                            <span>[</span> TARGET LOCKED <span>]</span>
                          </span>
                        </div>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-[#FF5252] text-white p-3.5 font-black uppercase tracking-wider text-sm nb-btn inline-flex justify-center items-center gap-2 cursor-pointer"
                    >
                      <span>Send Mail</span>
                      <Send className="h-4.5 w-4.5 stroke-[2.5]" />
                    </button>
                  </form>
                </>
              ) : (
                <>
                  <h4 className="text-xl font-black uppercase border-b-2 border-black pb-2 mb-6 flex items-center gap-2">
                    <Send className="h-5 w-5" />
                    <span>Send Anonymous Message</span>
                  </h4>

                  <form onSubmit={handleTelegramSubmit} className="space-y-5">
                    <div>
                      <div className="relative flex flex-col-reverse">
                        <textarea
                          id="anon-message"
                          name="anon-message"
                          rows={6}
                          placeholder="Write anything anonymously..."
                          className="peer w-full bg-white text-black font-bold p-3 nb-border focus:bg-gray-50 focus:outline-none placeholder-gray-400 text-sm caret-custom-anon mt-1.5"
                          required
                          suppressHydrationWarning={true}
                        />
                        <div className="flex justify-between items-center">
                          <label htmlFor="anon-message" className="block text-xs font-mono font-bold uppercase">
                            Your Secret Message
                          </label>
                          <span className="hidden peer-focus:inline-flex items-center gap-1 font-mono text-[9px] font-black uppercase text-[#2196F3] animate-pulse">
                            <span>[</span> SECURE TRANSMISSION <span>]</span>
                          </span>
                        </div>
                      </div>
                    </div>

                    {submitStatus === "success" && (
                      <div className="bg-[#4ECDC4] border-[3px] border-black p-3 font-bold text-xs uppercase shadow-[2px_2px_0_#000]">
                        Message sent successfully!
                      </div>
                    )}

                    {submitStatus === "error" && (
                      <div className="bg-[#FF5252] text-white border-[3px] border-black p-3 font-bold text-xs uppercase shadow-[2px_2px_0_#000]">
                        Failed to send message. Please try again.
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={submitStatus === "sending"}
                      className="w-full bg-[#2196F3] text-white p-3.5 font-black uppercase tracking-wider text-sm nb-btn inline-flex justify-center items-center gap-2 cursor-pointer disabled:opacity-50"
                    >
                      <span>{submitStatus === "sending" ? "Sending..." : "Send Secretly"}</span>
                      <Send className="h-4.5 w-4.5 stroke-[2.5]" />
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>

        </div>
      </div>

      <RippedPaperDivider bgColor="bg-white dark:bg-[#1A1A1A]" />

    </section>
  );
}
