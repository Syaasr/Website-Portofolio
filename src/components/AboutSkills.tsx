import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { portfolio } from "@/data/portfolio";

export function AboutSkills() {
  return (
    <section id="about" className="py-20 bg-slate-950/50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* About Section */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight">About Me</h2>
            <div className="prose prose-invert prose-lg text-muted-foreground">
              <p>{portfolio.about.story}</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-6">
              <div className="space-y-1">
                <h4 className="text-4xl font-bold text-primary">{portfolio.about.stats.experience}</h4>
                <p className="text-sm text-muted-foreground">Experience</p>
              </div>
              <div className="space-y-1">
                 <h4 className="text-4xl font-bold text-primary">{portfolio.about.stats.projects}</h4>
                <p className="text-sm text-muted-foreground">Projects</p>
              </div>
               <div className="space-y-1">
                 <h4 className="text-4xl font-bold text-primary">{portfolio.about.stats.gpa}</h4>
                <p className="text-sm text-muted-foreground">GPA</p>
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold tracking-tight">Technical Skills</h2>
            <div className="grid gap-4">
              <SkillCategory title="Languages" skills={portfolio.skills.languages} />
              <SkillCategory title="Web Development" skills={portfolio.skills.web} />
              <SkillCategory title="Robotics & IoT" skills={portfolio.skills.robotics} />
              <SkillCategory title="Tools & DevOps" skills={portfolio.skills.tools} />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

function SkillCategory({ title, skills }: { title: string; skills: string[] }) {
  return (
    <Card className="bg-slate-900 border-slate-800">
      <CardHeader className="py-4">
        <CardTitle className="text-base font-medium text-slate-300">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-wrap gap-2 pb-4">
        {skills.map((skill) => (
          <Badge key={skill} variant="secondary" className="bg-slate-800 hover:bg-slate-700 text-slate-300 font-normal">
            {skill}
          </Badge>
        ))}
      </CardContent>
    </Card>
  );
}
