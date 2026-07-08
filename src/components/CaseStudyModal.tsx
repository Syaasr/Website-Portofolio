"use client";

import React, { useEffect, useCallback } from "react";
import { X } from "lucide-react";
import { ProjectItem } from "@/types/portfolio";
import { cn } from "@/lib/utils";

interface CaseStudyModalProps {
  project: ProjectItem;
  isOpen: boolean;
  onClose: () => void;
}

// ponytail: basic modal, upgrade to framer-motion if animation becomes required
export function CaseStudyModal({ project, isOpen, onClose }: CaseStudyModalProps) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose],
  );

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen || !project.caseStudy) return null;

  const cs = project.caseStudy;
  const cats = project.category ?? ["Other"];

  const sectionBg = (index: number) => {
    const colors = ["bg-[#FFEB3B]", "bg-[#4ECDC4]", "bg-[#2196F3]", "bg-[#FF5252]"];
    return colors[index % colors.length];
  };

  const sectionLabel = (index: number) => {
    const labels = ["Challenges", "Key Decisions", "Optimizations", "Outcome"];
    return labels[index % labels.length];
  };

  const sections = [
    { items: cs.challenges, type: "list" },
    { items: cs.decisions, type: "list" },
    { items: cs.optimizations, type: "list" },
    { items: [cs.outcome], type: "text" },
  ] as const;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`Case Study: ${project.title}`}
    >
      <div
        className="relative w-full max-w-2xl max-h-[80vh] overflow-y-auto nb-scrollbar bg-white nb-border shadow-[8px_8px_0_#000] p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 nb-btn bg-white p-2 cursor-pointer"
          aria-label="Close case study"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Title bar */}
        <div className="mb-6 pr-12">
          <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black">
            {project.title}
          </h3>
          <div className="flex flex-wrap gap-1.5 mt-2">
            {cats.map((cat) => (
              <span
                key={cat}
                className="px-2 py-0.5 text-xs font-mono font-bold nb-border bg-white text-black"
              >
                {cat}
              </span>
            ))}
          </div>
        </div>

        {/* Sections */}
        <div className="space-y-6">
          {sections.map((section, i) => (
            <div key={i}>
              <h4
                className={cn(
                  "inline-block px-3 py-1 text-sm font-black uppercase tracking-wide nb-border text-black mb-3",
                  sectionBg(i),
                )}
              >
                {sectionLabel(i)}
              </h4>
              {section.type === "list" ? (
                <ul className="space-y-2 ml-1">
                  {(section.items as string[]).map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm font-bold text-gray-800">
                      <span className="mt-0.5 h-2 w-2 bg-black shrink-0 rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-sm font-bold text-gray-800 ml-1 leading-relaxed">
                  {cs.outcome}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
