import { portfolio } from "@/data/portfolio";
import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-8 border-t border-black/20 bg-card">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} {portfolio.personalInfo.name}. All rights reserved.
        </p>
        
        <div className="flex items-center gap-6">
          <a href={portfolio.socials.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            <Github className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </a>
          <a href={portfolio.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            <Linkedin className="h-5 w-5" />
             <span className="sr-only">LinkedIn</span>
          </a>
          <a href={`mailto:${portfolio.socials.email}`} className="text-muted-foreground hover:text-primary transition-colors">
            <Mail className="h-5 w-5" />
             <span className="sr-only">Email</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
