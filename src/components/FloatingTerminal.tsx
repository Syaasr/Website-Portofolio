"use client";

import React, { useState, useRef, useEffect } from "react";
import { Terminal, X } from "lucide-react";
import { portfolio } from "@/data/portfolio";

interface Line {
  text: string;
  isOutput: boolean;
}

const PROMPT = "asril@portfolio:~$ ";

const HELP_TEXT = [
  "Available commands:",
  "  help      - Show this help message",
  "  skills    - List technical skills",
  "  projects  - List featured projects",
  "  contact   - Show contact information",
  "  whoami    - Display bio",
  "  clear     - Clear terminal screen",
];

export function FloatingTerminal() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [lines, setLines] = useState<Line[]>([
    { text: "Welcome to Asril's interactive terminal!", isOutput: true },
    { text: "Type 'help' to see available commands.", isOutput: true },
  ]);
  const inputRef = useRef<HTMLInputElement>(null);
  const outputRef = useRef<HTMLDivElement>(null);
  const animRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Auto-scroll to bottom on new output
  useEffect(() => {
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight;
    }
  }, [lines]);

  // Focus input when terminal opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    return () => { if (animRef.current) clearInterval(animRef.current); };
  }, []);

  const animateOutput = (output: string[]) => {
    let idx = 0;
    const speed = 30;
    animRef.current = setInterval(() => {
      if (idx < output.length) {
        setLines((prev) => [...prev, { text: output[idx], isOutput: true }]);
        idx++;
      } else if (animRef.current) {
        clearInterval(animRef.current);
        animRef.current = null;
      }
    }, speed);
  };

  const executeCommand = (cmd: string) => {
    if (animRef.current) {
      clearInterval(animRef.current);
      animRef.current = null;
    }

    const trimmed = cmd.trim().toLowerCase();

    setLines((prev) => [...prev, { text: `${PROMPT}${cmd}`, isOutput: false }]);

    if (trimmed === "") return;

    let output: string[];
    switch (trimmed) {
      case "help":
        output = HELP_TEXT;
        break;
      case "skills":
        output = [
          "Languages:",
          `  ${portfolio.skills.languages.join(", ")}`,
          "",
          "Web:",
          `  ${portfolio.skills.web.join(", ")}`,
          "",
          "Robotics & IoT:",
          `  ${portfolio.skills.robotics.join(", ")}`,
          "",
          "Tools:",
          `  ${portfolio.skills.tools.join(", ")}`,
        ];
        break;
      case "projects":
        output = portfolio.projects.map(
          (p) => `  ${p.title} [${(p.category ?? ["Other"]).join(", ")}]`
        );
        output = ["Featured projects:", ...output];
        break;
      case "contact":
        output = [
          `  Email:    ${portfolio.socials.email}`,
          `  GitHub:   ${portfolio.socials.github}`,
          `  LinkedIn: ${portfolio.socials.linkedin}`,
          `  IG:       ${portfolio.socials.instagram}`,
        ];
        break;
      case "whoami":
        output = [
          `  ${portfolio.personalInfo.name}`,
          `  ${portfolio.personalInfo.role}`,
          `  ${portfolio.personalInfo.location}`,
          `  ${portfolio.personalInfo.bio}`,
        ];
        break;
      case "clear":
        setLines([]);
        return;
      default:
        output = [`Command not found: ${trimmed}. Type 'help' for available commands.`];
    }

    animateOutput(output);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    executeCommand(input);
    setInput("");
  };

  return (
    <>
      {/* FAB Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-[#FFEB3B] text-black nb-border nb-shadow flex items-center justify-center hover:bg-yellow-400 transition-all active:translate-y-1 active:shadow-none cursor-pointer animate-bounce-slow"
        aria-label="Open terminal"
      >
        <Terminal className="h-6 w-6 stroke-[2.5]" />
      </button>

      {/* Terminal Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 backdrop-blur-xs p-4"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="w-full max-w-lg bg-black nb-border shadow-[8px_8px_0_#000] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Title Bar */}
            <div className="flex items-center justify-between bg-[#1A1A1A] border-b-3 border-black px-4 py-2.5">
              <div className="flex items-center gap-2.5">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-[#FF5252] border border-black" />
                  <div className="w-3 h-3 rounded-full bg-[#FFEB3B] border border-black" />
                  <div className="w-3 h-3 rounded-full bg-[#4ECDC4] border border-black" />
                </div>
                <span className="font-mono text-xs font-bold text-gray-400 uppercase tracking-wider ml-1">
                  Terminal
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="font-mono text-[9px] font-bold text-[#4ECDC4] animate-pulse border border-[#4ECDC4] px-1.5 py-0.5">
                  ACTIVE
                </span>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                  aria-label="Close terminal"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Output Area */}
            <div
              ref={outputRef}
              className="p-4 h-72 overflow-y-auto font-mono text-xs space-y-1 scrollbar-thin"
              style={{ scrollbarWidth: "thin", scrollbarColor: "#4ECDC4 #1A1A1A" }}
            >
              {lines.map((line, i) => (
                <div
                  key={i}
                  className={line.isOutput ? "text-[#4ECDC4]" : "text-[#FFEB3B]"}
                  style={{ whiteSpace: "pre-wrap", wordBreak: "break-word" }}
                >
                  {line.text}
                </div>
              ))}
            </div>

            {/* Input Line */}
            <form onSubmit={handleSubmit} className="flex items-center border-t-3 border-black px-4 py-2.5 bg-[#1A1A1A]">
              <span className="font-mono text-xs text-[#FFEB3B] shrink-0 whitespace-nowrap">{PROMPT}</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 bg-transparent font-mono text-xs text-white outline-none border-none ml-1 caret-[#4ECDC4]"
                autoFocus
                spellCheck={false}
                autoComplete="off"
              />
            </form>
          </div>
        </div>
      )}
    </>
  );
}
