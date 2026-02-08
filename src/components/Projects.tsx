"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { portfolio } from "@/data/portfolio";
import { Github, Globe } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

// Extract unique categories
const categories = ["All", ...Array.from(new Set(portfolio.projects.map((p) => (p as any).category || "Other")))];

export function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = portfolio.projects.filter((project) => {
    return activeCategory === "All" || (project as any).category === activeCategory;
  });

  return (
    <section id="projects" className="py-20 md:py-32 bg-background relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
            <div className="absolute top-[10%] left-[5%] w-72 h-72 bg-primary/5 rounded-full blur-3xl opacity-50" />
            <div className="absolute bottom-[10%] right-[5%] w-96 h-96 bg-secondary/5 rounded-full blur-3xl opacity-50" />
        </div>

      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
            <div className="space-y-2">
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
                Featured Projects
                </h2>
                <p className="text-muted-foreground text-sm md:text-base max-w-lg">
                Exploring the frontiers of technology through code and creativity.
                </p>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
                <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={cn(
                    "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border",
                    activeCategory === category
                    ? "bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/25"
                    : "bg-background/50 hover:bg-muted text-muted-foreground border-border hover:border-primary/50"
                )}
                >
                {category}
                </button>
            ))}
            </div>
        </div>
        
        <div className="mt-8">
            <Carousel
                opts={{
                    align: "start",
                    loop: true,
                }}
                className="w-full"
            >
                <CarouselContent className="pb-4 -ml-4">
                    {filteredProjects.map((project, index) => (
                        <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3 xl:basis-1/3">
                            <Card className="h-full flex flex-col bg-card/50 backdrop-blur-sm border-border overflow-hidden hover:border-primary/50 transition-all duration-300 group hover:shadow-xl hover:shadow-primary/5">
                            
                            {/* Project Image */}
                            <div className="relative h-56 w-full bg-muted overflow-hidden">
                                <Image 
                                src={project.imagePath} 
                                alt={project.title}
                                fill
                                className="object-cover group-hover:scale-110 transition-transform duration-700"
                                unoptimized={true}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4 transform translate-y-4 group-hover:translate-y-0">
                                    <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/20 backdrop-blur-md">
                                        {(project as any).category}
                                    </Badge>
                                </div>
                            </div>

                            <CardHeader>
                                <div className="flex flex-wrap gap-2 mb-3">
                                {project.techStack.map((tech) => (
                                    <Badge key={tech} variant="outline" className="text-[10px] px-2 py-0.5 border-primary/20 text-muted-foreground">
                                    {tech}
                                    </Badge>
                                ))}
                                </div>
                                <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                                    {project.title}
                                </CardTitle>
                            </CardHeader>
                            
                            <CardContent className="flex-grow">
                                <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                                {project.description}
                                </p>
                            </CardContent>
                            
                            <CardFooter className="flex gap-3 pt-4 mt-auto">
                                <Button variant="default" size="sm" className="w-full gap-2 rounded-lg" asChild>
                                <a href={project.linkRepo} target="_blank" rel="noopener noreferrer">
                                    <Github className="h-4 w-4" /> Code
                                </a>
                                </Button>
                                <Button variant="ghost" size="sm" className="w-full gap-2 hover:bg-primary/10 hover:text-primary rounded-lg" asChild>
                                    <a href={project.linkDemo} target="_blank" rel="noopener noreferrer">
                                    <Globe className="h-4 w-4" /> Demo
                                </a>
                                </Button>
                            </CardFooter>
                            </Card>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <div className="flex justify-end gap-2 mt-8 mr-4">
                    <CarouselPrevious className="static translate-y-0 text-foreground border-border hover:bg-primary hover:text-primary-foreground hover:border-primary" />
                    <CarouselNext className="static translate-y-0 text-foreground border-border hover:bg-primary hover:text-primary-foreground hover:border-primary" />
                </div>
            </Carousel>
        </div>

        {filteredProjects.length === 0 && (
            <div className="text-center py-20">
                <p className="text-muted-foreground">No projects found in this category.</p>
            </div>
        )}
      </div>
    </section>
  );
}
