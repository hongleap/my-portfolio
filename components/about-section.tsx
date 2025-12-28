"use client"

import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Code, Lightbulb, Award } from "lucide-react"
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
                      <CardContent className="pt-6 bg-gradient-to-br from-primary/5 to-transparent">
                        <div className="flex items-start gap-4">
                          <div className="p-3 bg-primary/10 rounded-lg">
                            <GraduationCap className="h-6 w-6 text-primary" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl font-semibold mb-4">Educational Background</h3>
                            <ul className="space-y-4 relative pl-4">
                              {/* Vertical connecting line */}
                              <div className="absolute left-0 top-2 bottom-1 w-0.5 bg-gradient-to-b from-primary via-primary/50"></div>

                              <li className="flex items-start gap-3 relative">
                                <span className="text-primary mt-1.5 z-10 bg-primary rounded-full w-2 h-2 flex-shrink-0 shadow-lg shadow-primary/50"></span>
                                <span className="text-muted-foreground leading-relaxed">Bachelor of Computer Science and Engineering - RUPP University (2023-2026)</span>
                              </li>
                              <li className="flex items-start gap-3 relative">
                                <span className="text-primary mt-1.5 z-10 bg-primary rounded-full w-2 h-2 flex-shrink-0 shadow-lg shadow-primary/50"></span>
                                <span className="text-muted-foreground leading-relaxed">Full Stack Development - ISTAD (March 2025 - August 2025)</span>
                              </li>
                              <li className="flex items-start gap-3 relative">
                                <span className="text-primary mt-1.5 z-10 bg-primary rounded-full w-2 h-2 flex-shrink-0 shadow-lg shadow-primary/50"></span>
                                <span className="text-muted-foreground leading-relaxed">ITP - ISTAD (November 2025 - Present)</span>
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

            {/* Achievements & Certificates Section Header */}
            <ScrollReveal className="mt-8 mb-6">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-amber-500/10 rounded-lg">
                  <Award className="h-6 w-6 text-amber-500" />
                </div>
                <h3 className="text-2xl font-bold">Achievements & Certificates</h3>
              </div>
            </ScrollReveal>

            {/* Certificate Cards Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <AnimatedCard delay={0.4}>
                <GlareCard>
                  <Card className="border-2 hover:border-amber-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/20 h-full bg-gradient-to-br from-amber-500/10 via-amber-500/5 to-transparent">
                    <CardContent className="pt-8 pb-8">
                      <div className="flex flex-col items-center text-center gap-4">
                        <div className="relative">
                          <div className="absolute inset-0 bg-amber-500/20 rounded-full blur-xl"></div>
                          <div className="relative p-5 bg-gradient-to-br from-amber-500/20 to-amber-600/20 rounded-full border-2 border-amber-500/30">
                            <Award className="h-10 w-10 text-amber-500" />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <h4 className="text-xl font-bold text-foreground">Full Stack Development</h4>
                          <div className="h-1 w-16 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full mx-auto"></div>
                          <p className="text-muted-foreground font-medium">ISTAD</p>
                          <div className="inline-block px-4 py-1.5 bg-amber-500/10 border border-amber-500/30 rounded-full">
                            <p className="text-amber-500 text-sm font-semibold">2025</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </GlareCard>
              </AnimatedCard>

              <AnimatedCard delay={0.5}>
                <GlareCard>
                  <Card className="border-2 hover:border-amber-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/20 h-full bg-gradient-to-br from-amber-500/10 via-amber-500/5 to-transparent">
                    <CardContent className="pt-8 pb-8">
                      <div className="flex flex-col items-center text-center gap-4">
                        <div className="relative">
                          <div className="absolute inset-0 bg-amber-500/20 rounded-full blur-xl"></div>
                          <div className="relative p-5 bg-gradient-to-br from-amber-500/20 to-amber-600/20 rounded-full border-2 border-amber-500/30">
                            <Award className="h-10 w-10 text-amber-500" />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <h4 className="text-xl font-bold text-foreground">ITP Program</h4>
                          <div className="h-1 w-16 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full mx-auto"></div>
                          <p className="text-muted-foreground font-medium">ISTAD</p>
                          <div className="inline-block px-4 py-1.5 bg-amber-500/10 border border-amber-500/30 rounded-full">
                            <p className="text-amber-500 text-sm font-semibold">2025</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </GlareCard>
              </AnimatedCard>

              <AnimatedCard delay={0.6}>
                <GlareCard>
                  <Card className="border-2 hover:border-amber-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/20 h-full bg-gradient-to-br from-amber-500/10 via-amber-500/5 to-transparent">
                    <CardContent className="pt-8 pb-8">
                      <div className="flex flex-col items-center text-center gap-4">
                        <div className="relative">
                          <div className="absolute inset-0 bg-amber-500/20 rounded-full blur-xl"></div>
                          <div className="relative p-5 bg-gradient-to-br from-amber-500/20 to-amber-600/20 rounded-full border-2 border-amber-500/30">
                            <Award className="h-10 w-10 text-amber-500" />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <h4 className="text-xl font-bold text-foreground">Computer Science</h4>
                          <div className="h-1 w-16 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full mx-auto"></div>
                          <p className="text-muted-foreground font-medium">RUPP University</p>
                          <div className="inline-block px-4 py-1.5 bg-amber-500/10 border border-amber-500/30 rounded-full">
                            <p className="text-amber-500 text-sm font-semibold">Ongoing</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </GlareCard>
              </AnimatedCard>
            </div>
          </div>
        </TracingBeam>
      </div>
    </section>
  )
}
