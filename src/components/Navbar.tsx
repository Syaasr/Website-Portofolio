import Link from "next/link";
import { Button } from "@/components/ui/button";
import { portfolio } from "@/data/portfolio";
import { Mail } from "lucide-react";
import { ModeToggle } from "@/components/ModeToggle";
import { LanguageToggle } from "@/components/LanguageToggle";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-6">
        <div className="font-bold text-xl tracking-tighter text-foreground">
          {portfolio.personalInfo.name.split(" ")[0]}
          <span className="text-primary">.dev</span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          <Link href="#hero" className="hover:text-primary transition-colors">
            Home
          </Link>
          <Link href="#about" className="hover:text-primary transition-colors">
            About
          </Link>
          <Link href="#education" className="hover:text-primary transition-colors">
            Education
          </Link>
          <Link href="#experience" className="hover:text-primary transition-colors">
            Experience
          </Link>
          <Link href="#projects" className="hover:text-primary transition-colors">
            Projects
          </Link>
        </div>

        <div className="flex items-center gap-2">
          {/* <LanguageToggle />
          <ModeToggle /> */}
          <Button variant="default" size="sm" asChild>
            <a href={`mailto:${portfolio.socials.email}`}>
              <Mail className="mr-2 h-4 w-4" />
              Contact
            </a>
          </Button>
        </div>
      </div>
    </nav>
  );
}
