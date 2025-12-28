"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Download } from "lucide-react"
import { motion } from "framer-motion"
import gsap from "gsap"
import { AnimatedBackground, SparklesCore } from "@/components/ui/animated-background"
import { TextReveal, TextRevealByWord, FadeIn } from "@/components/ui/text-reveal"
import { FloatingIcons } from "@/components/ui/floating-elements"
import { MagneticButton } from "@/components/ui/magnetic-button"

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const sparklesRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (containerRef.current) {
      const circles = containerRef.current.querySelectorAll(".bg-circle")
      circles.forEach((circle, i) => {
        gsap.to(circle, {
          x: "random(-50, 50)",
          y: "random(-50, 50)",
          duration: "random(10, 20)",
          repeat: -1,
          yoyo: true,
          ease: "none",
          delay: i * 2,
        })
      })
    }
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16">
      <AnimatedBackground />
      <SparklesCore />
      <FloatingIcons />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          <FadeIn delay={0.2}>
            <div className="inline-block mb-4 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium backdrop-blur-sm border border-primary/20">
              Welcome to my portfolio
            </div>
          </FadeIn>

          <TextReveal>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
              Hi, I'm <span className="text-primary bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Pho Hongleap</span>
            </h1>
          </TextReveal>

          <FadeIn delay={0.4}>
            <p className="text-xl sm:text-2xl text-muted-foreground mb-4 font-medium">Junior Full-Stack Developer</p>
          </FadeIn>

          <FadeIn delay={0.6}>
            <p className="text-base sm:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed text-pretty">
              Passionate about building modern web applications, learning cutting-edge technologies, and solving complex
              problems through clean, efficient code.
            </p>
          </FadeIn>

          <FadeIn delay={0.8}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <MagneticButton asChild size="lg" className="group">
                <a href="#projects">
                  View My Projects
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </MagneticButton>
              <MagneticButton asChild variant="outline" size="lg">
                <a href="#contact">
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </a>
              </MagneticButton>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
