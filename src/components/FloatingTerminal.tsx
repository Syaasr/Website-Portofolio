"use client";

import React, { useState, useRef, useEffect } from "react";
import { Terminal, X } from "lucide-react";
import { portfolio } from "@/data/portfolio";

interface Line {
  text: string;
  isOutput: boolean;
}

const PROMPT = "asril@portfolio:~$ ";

const BANNER = [
  " ",
  "  ╔══════════════════════════════════════╗",
  "  ║     SYAIKHASRIL MAULANA FIRDAUS      ║",
  "  ║     Informatics @ UNS                ║",
  "  ║                                      ║",
  "  ║  Type 'help' to explore              ║",
  "  ╚══════════════════════════════════════╝",
];

const HELP_TEXT = [
  " ",
  "Available commands:",
  "  banner     - Display ASCII banner",
  "  clear      - Clear terminal screen",
  "  contact    - Show contact information",
  "  date       - Show current date & time",
  "  education  - Show education history",
  "  exit       - Close terminal",
  "  experience - Show work experience",
  "  github     - Open GitHub profile",
  "  help       - Show this help message",
  "  linkedin   - Open LinkedIn profile",
  "  projects   - List featured projects",
  "  skills     - List technical skills",
  "  sudo       - Try sudo powers",
  "  whoami     - Display bio",
];

export function FloatingTerminal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);
  const [showPanel, setShowPanel] = useState(false);
  const [input, setInput] = useState("");
  const [lines, setLines] = useState<Line[]>([
    { text: "Welcome to Asril's interactive terminal!", isOutput: true },
    { text: "Type 'help' to see available commands.", isOutput: true },
  ]);
  const inputRef = useRef<HTMLInputElement>(null);
  const outputRef = useRef<HTMLDivElement>(null);
  const animRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Auto-scroll to bottom on new output
  useEffect(() => {
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight;
    }
  }, [lines]);

  useEffect(() => {
    if (isOpen) {
      setIsMounted(true);
      setShowOverlay(false);
      setShowPanel(false);
      setIsClosing(false);
      requestAnimationFrame(() => requestAnimationFrame(() => {
        setShowOverlay(true);
        setShowPanel(true);
      }));
    } else if (isMounted) {
      setShowOverlay(false);
      setShowPanel(false);
      setIsClosing(true);
      setTimeout(() => {
        setIsMounted(false);
        setIsClosing(false);
      }, 300);
    }
  }, [isOpen]);

  // Focus input when terminal opens
  useEffect(() => {
    if (isMounted && !isClosing && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isMounted, isClosing]);

  useEffect(() => {
    return () => { if (animRef.current) clearTimeout(animRef.current); };
  }, []);

  const animateOutput = (output: string[], startIndex = 0) => {
    let idx = startIndex;
    const speed = 30;
    const tick = () => {
      if (idx < output.length) {
        setLines((prev) => [...prev, { text: output[idx], isOutput: true }]);
        idx++;
        animRef.current = setTimeout(tick, speed);
      }
    };
    animRef.current = setTimeout(tick, speed);
  };

  const executeCommand = (cmd: string) => {
    if (animRef.current) {
      clearTimeout(animRef.current);
      animRef.current = null;
    }

    const trimmed = cmd.trim().toLowerCase();
    if (trimmed === "") return;

    let output: string[];
    switch (trimmed) {
      case "help":
        output = HELP_TEXT;
        break;
      case "skills":
        output = [
          " ",
          "Languages:",
          `- ${portfolio.skills.languages.join(", ")}`,
          "",
          "Web:",
          `- ${portfolio.skills.web.join(", ")}`,
          "",
          "Robotics & IoT:",
          `- ${portfolio.skills.robotics.join(", ")}`,
          "",
          "Tools:",
          `- ${portfolio.skills.tools.join(", ")}`,
        ];
        break;
      case "projects":
        output = portfolio.projects.map(
          (p) => `  ${p.title} [${(p.category ?? ["Other"]).join(", ")}]`
        );
        output = [" ", "Featured projects:", ...output];
        break;
      case "contact":
        output = [" ",
          `  Email:    ${portfolio.socials.email}`,
          `  GitHub:   ${portfolio.socials.github}`,
          `  LinkedIn: ${portfolio.socials.linkedin}`,
          `  IG:       ${portfolio.socials.instagram}`,
        ];
        break;
      case "whoami":
        output = [" ",
          `${portfolio.personalInfo.name}`,
          `${portfolio.personalInfo.role}`,
          `${portfolio.personalInfo.location}`,
          `${portfolio.personalInfo.bio}`,
        ];
        break;
      case "date":
        output = [" ",`  ${new Date().toLocaleString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric", hour: "2-digit", minute: "2-digit", second: "2-digit", timeZoneName: "short" })}`];
        break;
      case "education":
        output = portfolio.education.map((e) => `${e.university} — ${e.degree} (${e.period})`);
        output = [" ", "Education:", ...output];
        break;
      case "experience":
        output = portfolio.experience.map((e) => `${e.role} @ ${e.organization} (${e.date})`);
        output = [" ", "Experience:", ...output];
        break;
      case "github":
        output = [" ",`  Opening GitHub: ${portfolio.socials.github}`];
        setTimeout(() => window.open(portfolio.socials.github, "_blank", "noopener"), 600);
        break;
      case "linkedin":
        output = [" ",`  Opening LinkedIn: ${portfolio.socials.linkedin}`];
        setTimeout(() => window.open(portfolio.socials.linkedin, "_blank", "noopener"), 600);
        break;
      case "banner":
        output = BANNER;
        break;
      case "sudo":
        output = [" ", "  Nice try, but you don't have sudo access on Asril's terminal. 😏"];
        break;
      case "exit":
        setIsOpen(false);
        return;
      case "clear":
        setLines([]);
        return;
      default:
        output = [" ", `Command not found: ${trimmed}. Type 'help' for available commands.`];
    }

    setLines((prev) => [...prev, { text: `${PROMPT}${cmd}`, isOutput: false }]);

    if (output.length > 0) {
      requestAnimationFrame(() => animateOutput(output, 0));
    }
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
      {isMounted && (
        <div
          className={`fixed inset-0 z-[60] flex items-center justify-center p-4 transition-all duration-300 ease-out ${showOverlay ? 'bg-black/60 backdrop-blur-xs' : 'bg-black/0 backdrop-blur-none'}`}
          onClick={() => setIsOpen(false)}
        >
          <div
            className={`w-full sm:w-2/3 max-w-4xl max-h-[66vh] bg-black nb-border shadow-[8px_8px_0_#000] flex flex-col transition-transform duration-300 ease-out ${isClosing ? 'translate-y-[100vh]' : showPanel ? 'translate-y-0' : 'translate-y-full'}`}
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
              className="p-4 flex-1 min-h-[300px] overflow-y-auto font-mono text-xs space-y-1 scrollbar-thin"
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
