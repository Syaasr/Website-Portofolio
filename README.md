# Neubrutalist Web Portfolio

Personal portfolio website for Syaikhasril Maulana Firdaus, an Informatics student and software developer specializing in high-performance web applications and robotics control systems.

## Tech Stack

- **Framework**: Next.js 16.2.9 (App Router, Static Export ready)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Icons**: Lucide React
- **Theming**: light mode forced for high contrast neubrutalist visual fidelity
- **Fonts**: Inter and JetBrains Mono

## Project Structure

```
src/
├── app/
│   ├── layout.tsx           # Root layout with schema.org JSON-LD and theme providers
│   ├── page.tsx             # Main page component
│   └── globals.css          # Global styles, Tailwind directives, custom caret, and neubrutalist classes
├── components/
│   ├── AboutSkills.tsx      # About story block, stats, and colorful technical competencies categories
│   ├── Blog.tsx             # Medium RSS blog posts display
│   ├── Certifications.tsx   # Certifications (Blue) and Achievements (Red) outer containers
│   ├── Contact.tsx          # Dual-tab form (Email client-link & Client-side Anonymous Telegram Bot API)
│   ├── Footer.tsx           # Neubrutalist footer with social links & Designed in Indonesia badge
│   ├── Game.tsx             # Custom Flappy Bird canvas arcade mini-game with global space key filter
│   ├── Hero.tsx             # Hero section with headline, profile, location badges, and 3D Floating Cybernetic badges
│   ├── Navbar.tsx           # Header navigation
│   ├── Projects.tsx         # Filterable portfolio projects showcase using Embla Carousel
│   └── TimelineRoadmap.tsx  # Scroll-driven spring pop-scale (Option 3) educational & professional timeline
├── data/
│   └── portfolio.ts         # Centralized database for all portfolio content (Single Source of Truth)
└── lib/
    └── utils.ts             # Tailwind class name merger helper
```

## Key Features

- **Neubrutalist Aesthetics**: Implements hard shadows, 3px solid black borders (`nb-border`), high-saturation colors, display typography, and tactile physical-compression hover/active button transformations.
- **Spring Pop-Scale Animations (Roadmap)**: Cards scale up to `100%` with micro-rotations using `IntersectionObserver` when entering viewports, while connecting lines stay statically connected underneath at `z-0`.
- **Dual-Tab Get In Touch**:
  - **Tab 1 (Email)**: Direct pre-filled email client link.
  - **Tab 2 (Anonymous Message)**: Sends messages instantly to Syaikhasril's personal Telegram Chat via client-side Telegram Bot API requests. Includes input caret color styling and a target-locked status indicator.
- **Floating Cybernetic Badges**: profile photo is surrounded by hovering status badges (`[🟢 AVAILABLE]` & `[🤖 ROBOTICS & WEB]`) with slight hover-parallax tilting.
- **Interactive Arcade Mini-Game**: Built-in HTML5 Canvas game with custom collision-box physics, theme-aware rendering, particle effects, and high-score tracking. Integrated with form input filtering to prevent spacebar scroll hijacking.
- **Single Source of Truth**: All textual data, project links, blogs, and experience histories are managed inside the portfolio data module.
- **Responsive Layout**: Designed mobile-first, ensuring high contrast and tactile usability across all viewports.

## Getting Started

### 1. Configuration (.env)

Create a `.env.local` file at the root of the project by copying the example file:

```bash
cp .env.example .env.local
```

Open `.env.local` and fill in your Telegram Bot credentials to enable anonymous messaging:

```env
NEXT_PUBLIC_TELEGRAM_BOT_TOKEN=your_telegram_bot_token_here
NEXT_PUBLIC_TELEGRAM_CHAT_ID=your_personal_chat_id_here
```

### 2. Run Locally

Install the required node modules:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## Build and Production

Compile and optimize the build for production (generates static pages in the `out/` folder):

```bash
NEXT_FONT_GOOGLE_MOCK=1 npm run build
```

> [!NOTE]
> `NEXT_FONT_GOOGLE_MOCK=1` bypasses external Google Font fetching errors if you build in an offline/restricted network environment.

To test the generated static pages locally:

```bash
npm run start
```

## Data Management

All data for the website is centrally stored in `src/data/portfolio.ts` including experience, projects, skills, education, and social links.

## Deployment

The application is configured for static hosting or serverless deployment on Vercel:

```bash
vercel deploy
```
