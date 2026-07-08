# Neubrutalist Web Portfolio

Personal portfolio website for Syaikhasril Maulana Firdaus, an Informatics student and software developer specializing in high-performance web applications and robotics control systems.

## Tech Stack

- **Framework**: Next.js 16.2.9 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Icons**: Lucide React
- **Analytics**: Vercel Analytics
- **Theming**: light mode forced for high contrast neubrutalist visual fidelity
- **Fonts**: Inter and JetBrains Mono

## Project Structure

```
src/
├── app/
│   ├── layout.tsx              # Root layout with schema.org JSON-LD, OG tags, Analytics
│   ├── page.tsx                # Main page — all sections rendered sequentially
│   ├── not-found.tsx           # Custom Neubrutalist 404 page
│   ├── globals.css             # Tailwind v4 directives, Neubrutalist utilities, animations
│   └── api/send-message/route.ts  # Serverless route for Telegram anonymous messages
├── components/
│   ├── Navbar.tsx              # Sticky nav with IntersectionObserver + sliding indicator
│   ├── Hero.tsx                # Hero with headline, status badge, CTA, profile card
│   ├── AboutSkills.tsx         # About story, stats, technical skills categories
│   ├── TimelineRoadmap.tsx     # Winding grid timeline with scroll-triggered animations
│   ├── Projects.tsx            # Filterable project carousel (Embla) with case study modals
│   ├── CaseStudyModal.tsx      # Modal dialog for project case studies
│   ├── Certifications.tsx      # Certifications + Achievements columns
│   ├── Blog.tsx                # Blog article carousel
│   ├── Game.tsx                # Canvas-based arcade mini-game (Wave x Flappy Bird)
│   ├── Contact.tsx             # Dual-tab form (Email + Anonymous Telegram)
│   ├── Footer.tsx              # Footer with brand, social links, navigation
│   ├── FloatingTerminal.tsx    # Floating FAB → interactive terminal overlay
│   ├── RippedPaperDivider.tsx  # Shared SVG ripped-paper divider between sections
│   └── ui/
│       ├── carousel.tsx        # Embla Carousel wrapper
│       └── button.tsx          # Base button component
├── data/
│   └── portfolio.ts            # Single Source of Truth for all content
├── types/
│   └── portfolio.ts            # TypeScript interfaces for all data structures
└── lib/
    └── utils.ts                # Tailwind class merger (cn)
```

## Key Features

- **Neubrutalist Design**: Hard shadows, 3px solid black borders (`nb-border`), high-saturation colors, bold typography, and tactile hover/active press transformations.
- **Interactive Terminal**: Floating FAB button opens a full terminal overlay with commands: `help`, `skills`, `projects`, `education`, `experience`, `contact`, `whoami`, `github`, `linkedin`, `date`, `banner`, `sudo`, `clear`, `exit`. Output animated line-by-line.
- **Project Case Studies**: Each project includes a structured case study modal (Challenges → Decisions → Optimizations → Outcome) with category-colored sections.
- **Sliding Nav Indicator**: Active section highlighted with colored background; black shadow box follows with delayed transition.
- **Project Contributors**: Collaborative projects display contributor names below project description.
- **Dual-Tab Contact**: Tab 1 (Email → opens default mail client), Tab 2 (Anonymous Message → Telegram Bot API).
- **Canvas Mini-Game**: Built-in HTML5 arcade game with collision physics, particle effects, and localStorage high score.
- **Blog Carousel**: Single article in an Embla carousel with previous/next navigation.
- **Scroll-Triggered Timeline**: Journey roadmap with winding grid layout and spring pop-scale animations.
- **Case Studies**: Click "Case Study" on any project card to open a structured modal with challenges, decisions, optimizations, and outcome.
- **Responsive**: Mobile-first, hamburger nav below 1000px, safe-area insets for iPhone notch, 44px tap targets.
- **Vercel Analytics**: Page view and CTA click tracking built-in.
- **SEO**: Open Graph + Twitter Card metadata, sitemap.xml, robots.txt, JSON-LD structured data.

## Data Management

All data for the website is centrally stored in `src/data/portfolio.ts` including experience, projects, skills, education, certifications, achievements, blog articles, social links, project contributors, and case study details. Type definitions live in `src/types/portfolio.ts`.

## Deployment

The application is configured for static hosting or serverless deployment on Vercel:

```bash
vercel deploy
```
