import { Separator } from "@/components/ui/separator";
import { portfolio } from "@/data/portfolio";

export function Experience() {
  return (
    <section id="experience" className="py-20 bg-slate-950/50">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-12">Experience</h2>
        
        <div className="space-y-12">
          {portfolio.experience.map((exp, index) => (
            <div key={index} className="group relative">
              <div className="flex flex-col md:flex-row md:gap-10">
                {/* Timeline Line (Visual only, simple version) */}
                <div className="hidden md:flex flex-col items-center">
                    <div className="w-px h-full bg-border group-last:h-0 relative">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary border-4 border-background" />
                    </div>
                </div>

                <div className="flex-1 space-y-2">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-1">
                    <h3 className="text-xl font-bold text-foreground">{exp.role}</h3>
                    <span className="text-sm font-mono text-primary/80">{exp.date}</span>
                  </div>
                  <p className="text-lg text-muted-foreground font-medium">{exp.organization}</p>
                  <p className="text-muted-foreground leading-relaxed pt-2">
                    {exp.description}
                  </p>
                </div>
              </div>
              
               {index < portfolio.experience.length - 1 && (
                  <Separator className="my-8 md:hidden" />
               )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
