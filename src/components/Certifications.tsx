import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { portfolio } from "@/data/portfolio";
import { Award, Trophy } from "lucide-react";

export function Certifications() {
  return (
    <section id="certifications" className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            {/* Certifications Column */}
            <div className="space-y-8">
                 <div className="flex items-center gap-3 mb-6">
                   <div className="p-3 bg-secondary rounded-xl text-primary">
                     <Award className="h-6 w-6" />
                   </div>
                   <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Certifications</h2>
                </div>
                
                <div className="grid gap-4">
                    {portfolio.certifications.map((cert, index) => (
                        <Card key={index} className="bg-card/50 border-border/50 hover:bg-card hover:border-border transition-colors">
                            <CardHeader className="py-4">
                                <div className="flex justify-between items-start gap-4">
                                    <div className="space-y-1">
                                        <CardTitle className="text-base">{cert.name}</CardTitle>
                                        <CardDescription>{cert.platform}</CardDescription>
                                    </div>
                                    <Badge variant="outline" className="shrink-0">{cert.year}</Badge>
                                </div>
                            </CardHeader>
                        </Card>
                    ))}
                </div>
            </div>

            {/* Achievements Column */}
             <div className="space-y-8">
                 <div className="flex items-center gap-3 mb-6">
                   <div className="p-3 bg-secondary rounded-xl text-yellow-500">
                     <Trophy className="h-6 w-6" />
                   </div>
                   <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Achievements</h2>
                </div>
                
                <div className="grid gap-4">
                    {portfolio.achievements.map((item, index) => (
                        <Card key={index} className="bg-card/50 border-border/50 hover:bg-card hover:border-border transition-colors">
                            <CardHeader className="py-4">
                                <div className="flex justify-between items-start gap-4">
                                    <div className="space-y-1">
                                        <CardTitle className="text-base">{item.title}</CardTitle>
                                        <CardDescription>{item.event}</CardDescription>
                                    </div>
                                     <Badge variant="secondary" className="shrink-0">{item.year}</Badge>
                                </div>
                            </CardHeader>
                            <CardContent className="pt-0 pb-4 text-sm text-muted-foreground">
                                {item.description}
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>

            </div>
        </div>
    </section>
  );
}
