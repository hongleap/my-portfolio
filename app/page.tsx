"use client"

import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { ProjectsSection } from "@/components/projects-section"
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
        <ProjectsSection />
        <Footer />
      </main>
    </PageTransition>
  )
}
