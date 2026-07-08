"use client";

import React, { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";
import { RippedPaperDivider } from "@/components/RippedPaperDivider";
import { Play, RotateCcw, Trophy, Activity } from "lucide-react";

interface Obstacle {
  x: number;
  topHeight: number;
  bottomHeight: number;
  passed: boolean;
  color: string;
}

export function Game() {
  const { theme } = useTheme();
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Game States
  const [gameState, setGameState] = useState<"START" | "PLAYING" | "GAMEOVER">("START");
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  // Physics References (Avoid triggers on re-render)
  const playerRef = useRef({
    x: 100,
    y: 200,
    radius: 12,
    dy: 0,
    isPressing: false,
    angle: 0,
  });

  const obstaclesRef = useRef<Obstacle[]>([]);
  const trailRef = useRef<{ x: number; y: number }[]>([]);
  const timeRef = useRef(0); // tracks frames elapsed in run
  const scrollRef = useRef(0);
  const animationFrameId = useRef<number | null>(null);

  // Load High Score
  useEffect(() => {
    const saved = localStorage.getItem("wave_game_high_score");
    if (saved) {
      setHighScore(parseInt(saved, 10));
    }
  }, []);

  // Sync Input Handlers
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Allow spaces inside inputs and textareas
      const target = e.target as HTMLElement;
      if (target && (target.tagName === "INPUT" || target.tagName === "TEXTAREA")) {
        return;
      }
      if (e.code === "Space") {
        e.preventDefault();
        playerRef.current.isPressing = true;
      }
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      // Allow spaces inside inputs and textareas
      const target = e.target as HTMLElement;
      if (target && (target.tagName === "INPUT" || target.tagName === "TEXTAREA")) {
        return;
      }
      if (e.code === "Space") {
        e.preventDefault();
        playerRef.current.isPressing = false;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  // Main Logic Update
  const updateGame = () => {
    const player = playerRef.current;
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Increment elapsed time tracker
    timeRef.current++;

    // Calculate Scroll & Movement Speed (gets faster over time!)
    const baseSpeed = 3.2;
    const elapsedSeconds = timeRef.current / 60;
    const currentSpeed = baseSpeed + score * 0.15 + elapsedSeconds * 0.06;
    scrollRef.current = (scrollRef.current + currentSpeed) % 40;

    // Movement: fly up when pressing, drop down when released
    // To lock trail trajectory to exactly 45 degrees, vertical speed must match horizontal speed (currentSpeed)
    const targetAngle = player.isPressing ? -Math.PI / 4 : Math.PI / 4;
    player.angle += (targetAngle - player.angle) * 0.24; // Smooth interpolation to exactly 45 degrees
    player.dy = player.isPressing ? -currentSpeed : currentSpeed;

    player.y += player.dy;

    // Boundary check (top/bottom borders)
    if (player.y - player.radius < 5 || player.y + player.radius > canvas.height - 5) {
      triggerGameOver();
      return;
    }

    // Update existing trail points (scrolling left with grid)
    const trail = trailRef.current;
    trail.forEach((pt) => {
      pt.x -= currentSpeed;
    });

    // Add current player position to the front of the trail
    trail.unshift({ x: player.x, y: player.y });

    // Limit trail length to 35 steps for visual balance
    if (trail.length > 35) {
      trail.pop();
    }

    // Spawn Obstacles based on physical distance traveled instead of fixed frames
    let spawnNew = false;
    if (obstaclesRef.current.length === 0) {
      spawnNew = true;
    } else {
      const lastObs = obstaclesRef.current[obstaclesRef.current.length - 1];
      // Keep a consistent spacing of 340px between pilar columns
      if (lastObs.x < canvas.width - 340) {
        spawnNew = true;
      }
    }

    if (spawnNew) {
      const gap = 145; // wide comfortable vertical gap
      const minHeight = 40;
      const maxHeight = canvas.height - gap - minHeight;
      const topHeight = Math.floor(Math.random() * (maxHeight - minHeight + 1)) + minHeight;
      const bottomHeight = canvas.height - gap - topHeight;

      // Randomize color from Allowed Design Tokens: Red, Blue, Teal/Green
      const colors = ["#FF5252", "#2196F3", "#4ECDC4"];
      const randomColor = colors[Math.floor(Math.random() * colors.length)];

      obstaclesRef.current.push({
        x: canvas.width,
        topHeight,
        bottomHeight,
        passed: false,
        color: randomColor,
      });
    }

    // Update Obstacles
    obstaclesRef.current.forEach((obs) => {
      obs.x -= currentSpeed;

      // Scoring
      if (!obs.passed && obs.x + 60 < player.x) {
        obs.passed = true;
        setScore((s) => {
          const next = s + 1;
          if (next > highScore) {
            setHighScore(next);
            localStorage.setItem("wave_game_high_score", next.toString());
          }
          return next;
        });
      }
    });

    // Clean offscreen obstacles
    obstaclesRef.current = obstaclesRef.current.filter((obs) => obs.x > -100);

    // Collision Detection
    for (let obs of obstaclesRef.current) {
      if (player.x + player.radius > obs.x && player.x - player.radius < obs.x + 60) {
        if (player.y - player.radius < obs.topHeight || player.y + player.radius > canvas.height - obs.bottomHeight) {
          triggerGameOver();
          return;
        }
      }
    }
  };

  const triggerGameOver = () => {
    setGameState("GAMEOVER");
    if (animationFrameId.current) {
      cancelAnimationFrame(animationFrameId.current);
    }
  };

  // Rendering Cycle
  const renderGame = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Theme values
    const isDark = theme === "dark";
    const bgFill = isDark ? "#121212" : "#FFFBEB";
    const gridLineColor = isDark ? "#282828" : "#E5E7EB";
    const outlineColor = "#000000";

    // 1. Clear background
    ctx.fillStyle = bgFill;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // 2. Draw Blueprint scroll grid
    ctx.strokeStyle = gridLineColor;
    ctx.lineWidth = 1.5;
    
    // Vertical grid lines
    const offset = scrollRef.current;
    for (let x = -offset; x < canvas.width; x += 40) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, canvas.height);
      ctx.stroke();
    }
    // Horizontal grid lines
    for (let y = 0; y < canvas.height; y += 40) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(canvas.width, y);
      ctx.stroke();
    }

    // 3. Draw Trail Ribbon (Outline + Color Fill in Neubrutalist Style)
    const trail = trailRef.current;
    if (trail.length > 1) {
      ctx.beginPath();
      ctx.moveTo(trail[0].x, trail[0].y);
      for (let i = 1; i < trail.length; i++) {
        ctx.lineTo(trail[i].x, trail[i].y);
      }
      
      // Black thick outline
      ctx.strokeStyle = outlineColor;
      ctx.lineWidth = 7;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      ctx.stroke();

      // Yellow inner solid fill path
      ctx.strokeStyle = "#FFEB3B";
      ctx.lineWidth = 3;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      ctx.stroke();
    }

    // 4. Draw Obstacles (Pillars)
    obstaclesRef.current.forEach((obs) => {
      // Top column
      ctx.fillStyle = obs.color;
      ctx.fillRect(obs.x, 0, 60, obs.topHeight);
      ctx.lineWidth = 3;
      ctx.strokeStyle = outlineColor;
      ctx.strokeRect(obs.x, -5, 60, obs.topHeight + 5);

      // Bottom column
      ctx.fillStyle = obs.color;
      ctx.fillRect(obs.x, canvas.height - obs.bottomHeight, 60, obs.bottomHeight);
      ctx.strokeRect(obs.x, canvas.height - obs.bottomHeight, 60, obs.bottomHeight + 5);
    });

    // 5. Draw Player (Rotated Triangle/Cursor)
    const player = playerRef.current;
    ctx.save();
    ctx.translate(player.x, player.y);
    ctx.rotate(player.angle);

    ctx.beginPath();
    ctx.moveTo(16, 0);
    ctx.lineTo(-12, -11);
    ctx.lineTo(-12, 11);
    ctx.closePath();
    
    ctx.fillStyle = "#FFEB3B"; // Primary Yellow
    ctx.fill();
    ctx.strokeStyle = outlineColor;
    ctx.lineWidth = 3;
    ctx.stroke();

    ctx.restore();

    // 6. Border Lines (Top & Bottom limits)
    ctx.fillStyle = outlineColor;
    ctx.fillRect(0, 0, canvas.width, 5);
    ctx.fillRect(0, canvas.height - 5, canvas.width, 5);
  };

  // Main Loop
  const loop = () => {
    if (gameState === "PLAYING") {
      updateGame();
      renderGame();
      animationFrameId.current = requestAnimationFrame(loop);
    }
  };

  // Trigger Loop on State Transitions
  useEffect(() => {
    if (gameState === "PLAYING") {
      animationFrameId.current = requestAnimationFrame(loop);
    }
    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [gameState]);

  // Initial canvas render on startup
  useEffect(() => {
    renderGame();
  }, [theme]);

  // Actions
  const startGame = () => {
    setScore(0);
    playerRef.current.y = 200;
    playerRef.current.dy = 0;
    playerRef.current.angle = 0;
    playerRef.current.isPressing = false;
    obstaclesRef.current = [];
    trailRef.current = [];
    timeRef.current = 0;
    setGameState("PLAYING");
  };

  // Mouse/Touch triggers
  const handlePressStart = (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    playerRef.current.isPressing = true;
  };

  const handlePressEnd = (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    playerRef.current.isPressing = false;
  };

  return (
    <section id="mini-game" className="relative py-20 bg-[#F0FDF4] dark:bg-[#101E16] transition-colors duration-200 overflow-hidden">
      
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-[0.08] nb-bg-grid-heavy pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.15] nb-bg-checkered pointer-events-none" />

      {/* Floating Local SVG Icons for Rich Aesthetics */}
      {/* Gaming Controller Icon (Top Center-Left) */}
      <div className="absolute top-[8%] left-[26%] hidden xl:block select-none z-0 transform rotate-12">
        <img src="/icons/Gaming Controller.svg" alt="Gaming Controller Icon" className="w-16 h-16 filter drop-shadow-[2.5px_2.5px_0_rgba(0,0,0,1)]" />
      </div>

      {/* Star Icon (Bottom Center-Right) */}
      <div className="absolute bottom-[10%] right-[28%] hidden xl:block select-none z-0 transform -rotate-12 animate-pulse">
        <img src="/icons/Star.svg" alt="Star Icon" className="w-12 h-12 filter drop-shadow-[2px_2px_0_rgba(0,0,0,1)]" />
      </div>

      {/* Floating Neubrutalist SVGs */}
      {/* Retro Gamepad Controller Left */}
      <div className="absolute top-[22%] left-[4%] hidden lg:block select-none z-0 transform -rotate-12">
        <svg aria-hidden="true" focusable="false" className="w-20 h-12 text-[#FFEB3B] fill-current stroke-black stroke-[3px] filter drop-shadow-[3px_3px_0_rgba(0,0,0,1)]" viewBox="0 0 100 60">
          <rect x="5" y="5" width="90" height="50" rx="15" />
          <circle cx="25" cy="30" r="8" fill="black" />
          <line x1="25" y1="20" x2="25" y2="40" stroke="white" strokeWidth="3" />
          <line x1="15" y1="30" x2="35" y2="30" stroke="white" strokeWidth="3" />
          <circle cx="70" cy="25" r="5" fill="#FF5252" stroke="black" strokeWidth="1.5" />
          <circle cx="82" cy="35" r="5" fill="#2196F3" stroke="black" strokeWidth="1.5" />
        </svg>
      </div>

      {/* Rotating Sparkle Top Right */}
      <div className="absolute top-[18%] right-[5%] hidden lg:block select-none z-0 animate-rotate-slow">
        <svg aria-hidden="true" focusable="false" className="w-14 h-14 text-[#4ECDC4] fill-current stroke-black stroke-[3px] filter drop-shadow-[2.5px_2.5px_0_rgba(0,0,0,1)]" viewBox="0 0 100 100">
          <path d="M50,0 C50,30 70,50 100,50 C70,50 50,70 50,100 C50,70 30,50 0,50 C30,50 50,30 50,0 Z" />
        </svg>
      </div>

      {/* Crosshair Target Bottom Left */}
      <div className="absolute bottom-[20%] left-[5%] hidden md:block select-none z-0">
        <svg aria-hidden="true" focusable="false" className="w-12 h-12 text-[#FF5252] stroke-black stroke-[3px] fill-none" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="28" />
          <line x1="50" y1="5" x2="50" y2="95" />
          <line x1="5" y1="50" x2="95" y2="50" />
        </svg>
      </div>

      {/* Zigzag Wave Bottom Right */}
      <div className="absolute bottom-[18%] right-[5%] hidden md:block select-none z-0 transform rotate-12">
        <svg aria-hidden="true" focusable="false" className="w-24 h-6 text-[#2196F3] stroke-black stroke-[3px] fill-none" viewBox="0 0 100 25">
          <path d="M0,12 L20,3 L40,21 L60,3 L80,21 L100,12" />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10 max-w-4xl">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h3 className="inline-block bg-[#FFEB3B] text-black px-6 py-2.5 text-3xl sm:text-5xl font-black uppercase tracking-tight nb-border shadow-[4px_4px_0_#000] transform rotate-[-1deg]">
            Mini Game
          </h3>
          <p className="text-sm sm:text-base font-bold text-gray-700 dark:text-gray-300 mt-4 max-w-xl mx-auto">
            Test your reaction! Hold Space or Click/Tap and Hold on the canvas to fly up, and release to fly down.
          </p>
        </div>

        {/* Game Stage Wrapper */}
        <div 
          ref={containerRef}
          className="relative aspect-[16/9] w-full bg-white dark:bg-black nb-border border-black shadow-[8px_8px_0_#000] overflow-hidden select-none touch-none"
          onMouseDown={gameState === "PLAYING" ? handlePressStart : undefined}
          onMouseUp={gameState === "PLAYING" ? handlePressEnd : undefined}
          onMouseLeave={gameState === "PLAYING" ? handlePressEnd : undefined}
          onTouchStart={gameState === "PLAYING" ? handlePressStart : undefined}
          onTouchEnd={gameState === "PLAYING" ? handlePressEnd : undefined}
        >
          {/* Canvas Rendering Area */}
          <canvas 
            ref={canvasRef}
            width={800}
            height={450}
            className="w-full h-full block"
          />

          {/* Overlay Screen: START */}
          {gameState === "START" && (
            <div className="absolute inset-0 bg-black/60 backdrop-blur-xs flex flex-col items-center justify-center p-3 sm:p-6 text-center">
              <div className="bg-white dark:bg-[#1E1E1E] nb-border p-4 sm:p-8 max-w-[280px] sm:max-w-sm w-full shadow-[4px_4px_0_#000] sm:shadow-[6px_6px_0_#000] text-black dark:text-white transform rotate-[1deg]">
                <h4 className="text-xl sm:text-2xl font-black uppercase tracking-tight mb-1 sm:mb-2">
                  Ready to fly?
                </h4>
                <p className="text-[10px] sm:text-xs font-mono font-bold text-gray-500 mb-4 sm:mb-6 uppercase">
                  Avoid the columns and ceiling/floor
                </p>
                <button
                  onClick={startGame}
                  className="w-full bg-[#FFEB3B] text-black py-2 sm:py-3.5 font-black uppercase tracking-wider text-xs sm:text-sm nb-btn inline-flex justify-center items-center gap-1.5 cursor-pointer"
                >
                  <Play className="h-4 sm:h-4.5 sm:w-4.5 fill-black" />
                  <span>Start Game</span>
                </button>
              </div>
            </div>
          )}

          {/* Overlay Screen: GAMEOVER */}
          {gameState === "GAMEOVER" && (
            <div className="absolute inset-0 bg-black/60 backdrop-blur-xs flex flex-col items-center justify-center p-3 sm:p-6 text-center">
              <div className="bg-white dark:bg-[#1E1E1E] nb-border p-4 sm:p-8 max-w-[280px] sm:max-w-sm w-full shadow-[4px_4px_0_#000] sm:shadow-[6px_6px_0_#000] text-black dark:text-white transform rotate-[-1deg]">
                <h4 className="inline-block bg-[#FF5252] text-white px-4 py-2 text-xl sm:text-3xl font-black uppercase tracking-tight nb-border shadow-[3px_3px_0_#000] mb-1 sm:mb-2 transform rotate-[1deg]">
                  Game Over
                </h4>
                <div className="flex justify-around bg-gray-100 dark:bg-black p-2 sm:p-3 nb-border my-3 sm:my-6">
                  <div>
                    <div className="text-[9px] sm:text-xs font-mono font-bold uppercase text-gray-500">Score</div>
                    <div className="text-lg sm:text-2xl font-black">{score}</div>
                  </div>
                  <div className="border-r border-black/25 dark:border-white/25" />
                  <div>
                    <div className="text-[9px] sm:text-xs font-mono font-bold uppercase text-gray-500">High Score</div>
                    <div className="text-lg sm:text-2xl font-black flex items-center gap-1">
                      <Trophy className="h-3.5 w-3.5 sm:h-4.5 sm:w-4.5 text-[#FFEB3B] fill-[#FFEB3B]" />
                      <span>{highScore}</span>
                    </div>
                  </div>
                </div>
                <button
                  onClick={startGame}
                  className="w-full bg-[#4ECDC4] text-black py-2 sm:py-3.5 font-black uppercase tracking-wider text-xs sm:text-sm nb-btn inline-flex justify-center items-center gap-1.5 cursor-pointer"
                >
                  <RotateCcw className="h-4 w-4 sm:h-4.5 sm:w-4.5" />
                  <span>Restart</span>
                </button>
              </div>
            </div>
          )}

          {/* Live In-Game Score Indicator */}
          {gameState === "PLAYING" && (
            <div className="absolute top-4 left-4 bg-white dark:bg-[#1E1E1E] text-black dark:text-white px-4 py-1.5 font-mono font-black text-sm nb-border shadow-[2px_2px_0_#000] pointer-events-none">
              SCORE: {score}
            </div>
          )}

        </div>

      </div>

      <RippedPaperDivider bgColor="bg-[#FFF5F5] dark:bg-[#1E1212]">
        <div className="absolute inset-0 opacity-[0.1] nb-bg-grid-heavy bg-[position:left_bottom]" />
        <div className="absolute inset-0 opacity-[0.2] nb-bg-checkered bg-[position:left_bottom]" />
      </RippedPaperDivider>
    </section>
  );
}
