"use client"

import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ProjectsSection } from "@/components/projects-section"
import { SkillsSection } from "@/components/skills-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { CursorGlow } from "@/components/ui/cursor-glow"
import { PageTransition } from "@/components/ui/page-transition"

export default function HomePage() {
  return (
    <PageTransition>
      <main className="min-h-screen">
        <CursorGlow />
        <Navigation />
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
        <Footer />
      </main>
    </PageTransition>
  )
}
