import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { portfolio } from "@/data/portfolio";
import { GraduationCap } from "lucide-react";

export function Education() {
  return (
    <section id="education" className="py-20 md:py-32">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="flex items-center gap-3 mb-12">
           <div className="p-3 bg-primary/10 rounded-xl text-primary">
             <GraduationCap className="h-6 w-6" />
           </div>
           <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Education</h2>
        </div>

        <div className="space-y-8">
          {portfolio.education.map((edu, index) => (
            <Card key={index} className="bg-card border-border">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                  <div className="space-y-1">
                    <CardTitle className="text-xl">{edu.university}</CardTitle>
                    <p className="text-lg text-primary font-medium">{edu.degree}</p>
                  </div>
                  <Badge variant="outline" className="w-fit text-sm py-1">
                    {edu.period}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                 <div className="flex items-center gap-2 text-muted-foreground">
                    <span className="font-semibold text-foreground">GPA:</span> {edu.gpa}
                 </div>
                 
                 <div>
                    <p className="text-sm font-semibold mb-2 text-muted-foreground">Relevant Coursework:</p>
                    <div className="flex flex-wrap gap-2">
                        {edu.coursework.map((course) => (
                            <Badge key={course} variant="secondary" className="font-normal">
                                {course}
                            </Badge>
                        ))}
                    </div>
                 </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
