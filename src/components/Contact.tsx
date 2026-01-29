import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { portfolio } from "@/data/portfolio";
import { Github, Instagram, Linkedin, Mail, Send } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-muted/30">
        <div className="container mx-auto px-6 max-w-5xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                
                {/* Contact Info */}
                <div className="space-y-8">
                     <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Let's Architect the Future Together</h2>
                     <p className="text-lg text-muted-foreground leading-relaxed">
                        I am currently open to internship opportunities and collaborative projects. 
                        Whether you have a question or just want to discuss the future of AI and Robotics, feel free to drop a message.
                     </p>
                     
                     <div className="space-y-4 pt-6">
                        <Button variant="outline" size="lg" className="w-full justify-start gap-4 h-14 text-base" asChild>
                            <a href={`mailto:${portfolio.socials.email}`}>
                                <Mail className="h-5 w-5 text-primary" />
                                {portfolio.socials.email}
                            </a>
                        </Button>
                        <Button variant="outline" size="lg" className="w-full justify-start gap-4 h-14 text-base" asChild>
                           <a href={portfolio.socials.github} target="_blank" rel="noopener noreferrer">
                                <Github className="h-5 w-5" />
                                Syaasr
                            </a>
                        </Button>
                        <Button variant="outline" size="lg" className="w-full justify-start gap-4 h-14 text-base" asChild>
                           <a href={portfolio.socials.instagram} target="_blank" rel="noopener noreferrer">
                                <Instagram className="h-5 w-5 text-pink-600" />
                                @syaikhasrilmf
                           </a>
                        </Button>
                        <Button variant="outline" size="lg" className="w-full justify-start gap-4 h-14 text-base" asChild>
                           <a href={portfolio.socials.linkedin} target="_blank" rel="noopener noreferrer">
                                <Linkedin className="h-5 w-5 text-blue-600" />
                                Syaikhasril Maulana Firdaus
                           </a>
                        </Button>
                     </div>
                </div>

                {/* Contact Form (Visual only for static site) */}
                <Card className="p-6 md:p-8 bg-card border-border">
                    <form className="space-y-6" action={`mailto:${portfolio.socials.email}`} method="post" encType="text/plain">
                        <div className="space-y-2">
                            <label htmlFor="name" className="text-sm font-medium">Name</label>
                            <Input id="name" name="name" placeholder="John Doe" required />
                        </div>
                        <div className="space-y-2">
                             <label htmlFor="email" className="text-sm font-medium">Email</label>
                            <Input id="email" name="email" type="email" placeholder="john@example.com" required />
                        </div>
                        <div className="space-y-2">
                             <label htmlFor="message" className="text-sm font-medium">Message</label>
                            <Textarea id="message" name="message" placeholder="Tell me about your project..." className="min-h-[150px]" required />
                        </div>
                        <Button type="submit" className="w-full h-12 text-base gap-2">
                            Send Message <Send className="h-4 w-4" />
                        </Button>
                    </form>
                </Card>
            
            </div>
        </div>
    </section>
  );
}
