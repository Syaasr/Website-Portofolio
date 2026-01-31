# Portfolio Website

Personal portfolio website for Syaikhasril Maulana Firdaus, an Informatics student and IT Generalist specializing in web development and robotics programming.

## Tech Stack

- **Framework**: [Next.js 16.1.6](https://nextjs.org) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **UI Components**: Custom components with [Radix UI](https://www.radix-ui.com/)
- **Icons**: [Lucide React](https://lucide.dev/) & [React Icons](https://react-icons.github.io/react-icons/)
- **Theming**: [next-themes](https://github.com/pacocoursey/next-themes) for dark/light mode
- **Fonts**: Inter & JetBrains Mono via [next/font](https://nextjs.org/docs/app/building-your-application/optimizing/fonts)

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with theme and language providers
│   ├── page.tsx            # Main page component
│   └── globals.css         # Global styles and Tailwind directives
├── components/
│   ├── ui/                 # Reusable UI components (Button, Card, Input, etc.)
│   ├── animate-ui/         # Animated UI components
│   ├── AboutSkills.tsx     # About & Skills sections
│   ├── Blog.tsx            # Blog posts section
│   ├── Certifications.tsx  # Certifications showcase
│   ├── Contact.tsx         # Contact form
│   ├── Education.tsx       # Education timeline
│   ├── Experience.tsx      # Work experience
│   ├── Hero.tsx            # Hero section
│   ├── Footer.tsx          # Footer component
│   ├── Navbar.tsx          # Navigation bar
│   ├── Projects.tsx        # Projects portfolio
│   ├── ThemeProvider.tsx   # Theme context provider
│   ├── LanguageProvider.tsx # Language context provider
│   └── ModeToggle.tsx      # Theme toggle button
├── data/
│   └── portfolio.ts        # Portfolio data (personal info, skills, projects, etc.)
└── lib/
    └── utils.ts            # Utility functions (cn for class merging)
```

## Key Features

- **Dark/Light Mode**: Automatic theme detection with manual toggle
- **Responsive Design**: Fully responsive across all device sizes
- **Multilingual Support**: Context-based language provider structure
- **Performance**: Optimized images, fonts, and code splitting
- **TypeScript**: Full type safety throughout the application
- **Component Reusability**: Modular UI components using shadcn/ui patterns
- **Data-Driven**: Content managed centrally in `portfolio.ts`

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser.

## Build & Production

```bash
npm run build    # Build for production
npm start        # Start production server
```

## Data Management

Portfolio content is managed in `src/data/portfolio.ts`:
- Personal information
- Skills (languages, web, robotics, tools)
- Work experience
- Education history
- Certifications
- Projects with tech stacks
- Blog posts
- Social media links

## Component Architecture

- **UI Components**: Located in `components/ui/` following shadcn/ui patterns
- **Section Components**: Each page section is a separate component for modularity
- **Providers**: Theme and Language contexts wrapped in root layout
- **Utilities**: Shared functions in `lib/utils.ts`

## Styling

- Tailwind CSS with custom animations via `tailwindcss-animate`
- Dark mode support using `next-themes`
- Custom font variables for Inter and JetBrains Mono

## Deployment

Recommended deployment on [Vercel](https://vercel.com):

```bash
vercel deploy
```

Or follow the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for other platforms.
