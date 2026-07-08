import React from "react";

const CLIP_PATH = "polygon(0% 50%, 4% 25%, 8% 62.5%, 12% 20%, 16% 55%, 20% 30%, 24% 67.5%, 28% 25%, 32% 60%, 36% 30%, 40% 70%, 44% 37.5%, 48% 65%, 52% 25%, 56% 55%, 60% 20%, 64% 60%, 68% 30%, 72% 70%, 76% 37.5%, 80% 62.5%, 84% 20%, 88% 55%, 92% 30%, 96% 67.5%, 100% 37.5%, 100% 100%, 0% 100%)";

interface RippedPaperDividerProps {
  bgColor?: string;
  children?: React.ReactNode;
}

export function RippedPaperDivider({ bgColor = "bg-white", children }: RippedPaperDividerProps) {
  return (
    <div className="absolute bottom-0 left-0 right-0 w-full h-8 z-20 translate-y-[2px] pointer-events-none">
      <div className={`absolute inset-0 w-full h-full ${bgColor}`} style={{ clipPath: CLIP_PATH }}>
        {children}
      </div>
      <svg viewBox="0 0 1000 40" className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none" aria-hidden="true" focusable="false">
        <path className="stroke-black stroke-[4px] fill-none" d="M0,20 L40,10 L80,25 L120,8 L160,22 L200,12 L240,27 L280,10 L320,24 L360,12 L400,28 L440,15 L480,26 L520,10 L560,22 L600,8 L640,24 L680,12 L720,28 L760,15 L800,25 L840,8 L880,22 L920,12 L960,27 L1000,15" />
      </svg>
    </div>
  );
}
