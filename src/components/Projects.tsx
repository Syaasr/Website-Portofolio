import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { portfolio } from "@/data/portfolio";
import { Github, Globe } from "lucide-react";

export function Projects() {
  return (
    <section id="projects" className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-12">Featured Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolio.projects.map((project, index) => (
            <Card key={index} className="flex flex-col bg-slate-900 border-slate-800 overflow-hidden hover:border-emerald-500/50 transition-colors group">
              <div className="relative h-48 w-full bg-slate-800 overflow-hidden">
                 {/* Placeholder for project image - using a colored gradient/pattern if image fails or path is placeholder */}
                 <div className="absolute inset-0 bg-gradient-to-br from-slate-700 to-slate-800 group-hover:scale-105 transition-transform duration-500" />
                 {/* Imagine Image component here if we had actual images, using fallback for now */}
                 <div className="absolute inset-0 flex items-center justify-center text-slate-600 font-mono text-xs">
                   {project.imagePath}
                 </div>
              </div>

              <CardHeader>
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.techStack.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs border-slate-700 text-slate-400">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {project.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="flex-grow">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>
              </CardContent>
              
              <CardFooter className="flex gap-4 pt-4 mt-auto">
                <Button variant="outline" size="sm" className="w-full gap-2" asChild>
                  <a href={project.linkRepo} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4" /> Code
                  </a>
                </Button>
                <Button variant="ghost" size="sm" className="w-full gap-2 hover:bg-emerald-500/10 hover:text-emerald-500" asChild>
                   <a href={project.linkDemo} target="_blank" rel="noopener noreferrer">
                    <Globe className="h-4 w-4" /> Demo
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
