# Neubrutalist Web Portfolio

Personal portfolio website for Syaikhasril Maulana Firdaus, an Informatics student and software developer specializing in high-performance web applications and robotics control systems.

## Tech Stack

- **Framework**: Next.js 16.1.6 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: Custom components with Radix UI primitives
- **Icons**: Lucide React
- **Theming**: next-themes for dark and light mode toggle
- **Fonts**: Inter and JetBrains Mono

## Project Structure

```
src/
├── app/
│   ├── layout.tsx           # Root layout with theme and language providers
│   ├── page.tsx             # Main page component
│   └── globals.css          # Global styles, Tailwind directives, and custom utility classes
├── components/
│   ├── ui/                  # Basic UI primitives
│   ├── animate-ui/          # Motion-enhanced UI primitives
│   ├── eldoraui/            # Core layout/carousel items
│   ├── AboutSkills.tsx      # About story block and technical competencies grid
│   ├── Blog.tsx             # Medium RSS blog posts display
│   ├── Certifications.tsx   # Scrollable certification showcase cards
│   ├── Contact.tsx          # Interactive contact form
│   ├── FAQ.tsx              # Interactive FAQ accordion component (static asset)
│   ├── Footer.tsx           # Neubrutalist footer with social links
│   ├── Game.tsx             # Custom Flappy Bird canvas arcade mini-game
│   ├── Hero.tsx             # Hero section with headline and TL;DR profile summary
│   ├── LanguageProvider.tsx # Client-side language context
│   ├── LanguageToggle.tsx   # Language selector toggle
│   ├── ModeToggle.tsx       # Dark/Light theme mode switch
│   ├── Navbar.tsx           # Header navigation
│   ├── Projects.tsx         # Filterable portfolio projects showcase
│   ├── ThemeProvider.tsx    # Next-themes provider wrapper
│   └── TimelineRoadmap.tsx  # Unified education and experience timeline roadmap
├── data/
│   └── portfolio.ts         # Centralized database for all portfolio content
└── lib/
    └── utils.ts             # Tailwind class name merger helper
```

## Key Features

- **Neubrutalist Aesthetics**: Implements hard shadows, 3px thick black borders, vibrant colors, display typography, and physical-compression interaction effects.
- **Ripped Paper Dividers**: Custom SVG paper torn dividers separating each section with perfect light and dark mode color continuity.
- **Interactive Arcade Mini-Game**: Built-in HTML5 Canvas Flappy Bird clone with custom physics, theme-aware rendering, particle effects, and high-score tracking.
- **Single Source of Truth**: All textual data, project links, blogs, and experience histories are managed inside the portfolio data module.
- **Responsive Layout**: Designed mobile-first, ensuring high contrast and tactile usability across all viewports.
- **Dark and Light Modes**: Fully synchronized color palette tailored for accessibility under both themes.

## Getting Started

Install the required node modules:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open http://localhost:3000 in your browser to view the application.

## Build and Production

Compile and optimize the build for production:

```bash
npm run build
```

Run the built static server locally:

```bash
npm start
```

## Data Management

All data for the website is centrally stored in `src/data/portfolio.ts` including experience, projects, skills, education, and social links.

## Deployment

The application is configured for deployment on Vercel:

```bash
vercel deploy
```
