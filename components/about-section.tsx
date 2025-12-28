"use client"

import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Code, Lightbulb } from "lucide-react"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { AnimatedCard, GlareCard } from "@/components/ui/animated-card"
import { TracingBeam } from "@/components/ui/tracing-beam"
import Image from "next/image"

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <TracingBeam>
          <div className="max-w-6xl mx-auto">
            <ScrollReveal className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">About Me</h2>
              <p className="text-muted-foreground text-lg">Get to know me and my journey in development</p>
            </ScrollReveal>

            <div className="grid lg:grid-cols-[auto_1fr] gap-8 lg:gap-12 mb-12 items-start">
              {/* Image on the left for large screens, centered on mobile */}
              <div className="flex justify-center lg:justify-start">
                <AnimatedCard delay={0.1}>
                  <div className="relative group">
                    <div className="relative flex items-center justify-center overflow-hidden rounded-2xl border-2 border-primary/20 bg-card aspect-square w-64 md:w-80">
                      <Image
                        src="/hongleap.jpg"
                        alt="Profile Picture"
                        width={400}
                        height={400}
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                  </div>
                </AnimatedCard>
              </div>

              {/* Education content on the right for large screens */}
              <div className="grid gap-8">
                <AnimatedCard delay={0.1}>
                  <GlareCard>
                    <Card className="border-2 hover:border-primary/50 transition-colors h-full">
                      <CardContent className="pt-6">
                        <div className="flex items-start gap-4">
                          <div className="p-3 bg-primary/10 rounded-lg">
                            <GraduationCap className="h-6 w-6 text-primary" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl font-semibold mb-4">Educational Background</h3>
                            <ul className="space-y-3">
                              <li className="flex items-start gap-2">
                                <span className="text-primary mt-1.5">•</span>
                                <span className="text-muted-foreground leading-relaxed">Bachelor of Computer Science</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="text-primary mt-1.5">•</span>
                                <span className="text-muted-foreground leading-relaxed">Strong foundation in software development principles</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="text-primary mt-1.5">•</span>
                                <span className="text-muted-foreground leading-relaxed">Data structures and algorithms</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="text-primary mt-1.5">•</span>
                                <span className="text-muted-foreground leading-relaxed">Web development and database management</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="text-primary mt-1.5">•</span>
                                <span className="text-muted-foreground leading-relaxed">Software engineering best practices</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </GlareCard>
                </AnimatedCard>
              </div>
            </div>

            <AnimatedCard delay={0.3}>
              <GlareCard>
                <Card className="border-2 bg-card">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-accent/10 rounded-lg flex-shrink-0">
                        <Lightbulb className="h-6 w-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-3">What Drives Me</h3>
                        <p className="text-muted-foreground leading-relaxed mb-4">
                          I&apos;m excited by the challenge of transforming ideas into functional, elegant solutions.
                          Whether it&apos;s crafting intuitive user interfaces or architecting robust backend systems, I
                          approach each project with enthusiasm and attention to detail.
                        </p>
                        <p className="text-muted-foreground leading-relaxed">
                          Always eager to collaborate with teams, learn from experienced developers, and contribute to
                          projects that make a meaningful impact.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </GlareCard>
            </AnimatedCard>
          </div>
        </TracingBeam>
      </div>
    </section>
  )
}
