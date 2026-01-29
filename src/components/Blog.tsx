import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { portfolio } from "@/data/portfolio";
import { ArrowUpRight, BookOpen } from "lucide-react";

export function Blog() {
  return (
    <section id="blog" className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between mb-12">
             <div className="flex items-center gap-3">
                <div className="p-3 bg-primary/10 rounded-xl text-primary">
                    <BookOpen className="h-6 w-6" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Latest Articles</h2>
             </div>
             <Button variant="ghost" className="hidden md:flex gap-2">
                View All <ArrowUpRight className="h-4 w-4" />
             </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {portfolio.blog.map((post, index) => (
            <Card key={index} className="flex flex-col hover:border-primary/50 transition-colors group">
              <CardHeader>
                <div className="flex flex-wrap gap-2 mb-3">
                    {post.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs font-normal">
                            {tag}
                        </Badge>
                    ))}
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground line-clamp-3">
                    {post.summary}
                </p>
              </CardContent>
              <CardFooter>
                 <Button variant="link" className="p-0 h-auto gap-2 group-hover:text-primary" asChild>
                    <a href={post.link}>
                        Read Article <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
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
