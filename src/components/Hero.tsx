import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { portfolio } from "@/data/portfolio";
import { ArrowRight, Cpu, Brain, Download } from "lucide-react";

export function Hero() {
  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <div className="flex flex-col items-start gap-6 relative z-10">
            <Badge variant="secondary" className="px-4 py-1 text-sm rounded-full">
              {portfolio.personalInfo.role}
            </Badge>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground leading-tight">
              {portfolio.hero.headline}
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
              {portfolio.hero.subheadline}
            </p>
            
            <div className="flex gap-4 pt-4">
              <Button size="lg" className="h-12 px-8 text-base" asChild>
                <a href="#projects">
                  {portfolio.hero.cta}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" size="lg" className="h-12 px-8 text-base" asChild>
                <a href={portfolio.hero.resumeUrl} target="_blank" rel="noopener noreferrer">
                  Download CV <Download className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>

          {/* Visual Content */}
          <div className="relative h-[500px] w-full hidden md:block group perspective-[1000px]">
             {/* Abstract Background Element */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-primary/20 blur-[120px] rounded-full" />
            
            {/* Main Image Placeholder - Replacing standard image with abstract tech composition for "Dark SaaS" vibe if no image provided */}
            <div className="absolute inset-0 flex items-center justify-center">
               <div className="relative w-[350px] h-[450px] bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl rotate-y-12 transition-transform duration-700 hover:rotate-y-0 group-hover:scale-105 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-800/50 to-bg-slate-950/50" />
                  
                  {/* Generative UI Pattern Mockup */}
                  <div className="p-6 space-y-4 opacity-50">
                    <div className="w-1/2 h-4 bg-slate-700 rounded animate-pulse" />
                    <div className="w-3/4 h-4 bg-slate-700 rounded animate-pulse delay-75" />
                    <div className="w-full h-32 bg-slate-800 rounded-lg border border-slate-700 mt-8" />
                    <div className="grid grid-cols-2 gap-4 mt-4">
                      <div className="h-20 bg-slate-800 rounded border border-slate-700" />
                      <div className="h-20 bg-slate-800 rounded border border-slate-700" />
                    </div>
                  </div>
               </div>
            </div>

            {/* Floating Stat Cards */}
            <Card className="absolute top-10 right-10 p-4 bg-slate-900/90 backdrop-blur border-slate-700 shadow-xl animate-bounce-slow hover:border-primary/50 transition-colors">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg text-primary">
                  <Cpu className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Projects</p>
                  <p className="font-bold text-lg">{portfolio.about.stats.projects}</p>
                </div>
              </div>
            </Card>

            <Card className="absolute bottom-20 left-0 p-4 bg-slate-900/90 backdrop-blur border-slate-700 shadow-xl animate-bounce-slow delay-500 hover:border-primary/50 transition-colors">
              <div className="flex items-center gap-3">
                 <div className="p-2 bg-blue-500/10 rounded-lg text-blue-500">
                  <Brain className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">GPA</p>
                  <p className="font-bold text-lg">{portfolio.about.stats.gpa}</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
