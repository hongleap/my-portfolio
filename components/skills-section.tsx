"use client"

import { Card, CardContent } from "@/components/ui/card"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { TechIcon } from "@/components/ui/tech-icons"
import { motion } from "framer-motion"

// Flatten all skills into a single array for the scrolling animation
const allSkills = [
  { name: "HTML5" as const, label: "HTML5" },
  { name: "CSS3" as const, label: "CSS3" },
  { name: "JavaScript" as const, label: "JavaScript" },
  { name: "TypeScript" as const, label: "TypeScript" },
  { name: "React" as const, label: "React" },
  { name: "NextJS" as const, label: "Next.js" },
  { name: "Tailwind" as const, label: "Tailwind CSS" },
  { name: "Java" as const, label: "Java" },
  { name: "Spring" as const, label: "Spring Boot" },
  { name: "Git" as const, label: "Git" },
  { name: "GitHub" as const, label: "GitHub" },
  { name: "VSCode" as const, label: "VS Code" },
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-background relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/20 via-transparent to-muted/20 pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Technical Skills</h2>
          <p className="text-muted-foreground text-lg">Technologies and tools I use to bring ideas to life</p>
        </ScrollReveal>

        {/* Infinite horizontal scrolling animation */}
        <div className="relative -mx-4 sm:mx-0">
          {/* Gradient overlays for fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

          <div className="overflow-x-hidden py-8">
            <motion.div
              className="flex gap-8 sm:gap-12 md:gap-16"
              animate={{
                x: [0, -100 * allSkills.length], // Dynamic based on number of skills
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 40,
                  ease: "linear",
                },
              }}
            >
              {/* Render skills 4 times for seamless loop */}
              {[...allSkills, ...allSkills, ...allSkills, ...allSkills].map((skill, index) => (
                <motion.div
                  key={`${skill.name}-${index}`}
                  className="flex flex-col items-center gap-3 group flex-shrink-0 min-w-[80px] sm:min-w-[100px]"
                  whileHover={{ scale: 1.1, y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 flex items-center justify-center rounded-xl sm:rounded-2xl bg-card border-2 border-primary/20 group-hover:border-primary/50 transition-all p-3 sm:p-4 relative overflow-hidden">
                    <TechIcon name={skill.name} className="w-full h-full relative z-10" />

                    {/* Glow effect on hover */}
                    <motion.div
                      className="absolute inset-0 bg-primary/20 blur-xl"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>

                  <span className="text-xs sm:text-sm font-medium text-center text-foreground group-hover:text-primary transition-colors whitespace-nowrap">
                    {skill.label}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Core Concepts section */}
        <ScrollReveal delay={0.3} className="mt-16">
          <div className="text-center space-y-6">
            <h3 className="text-2xl font-semibold text-primary">Core Concepts</h3>
            <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
              {["OOP", "Data Structures", "Algorithms", "RESTful APIs", "MVC Architecture", "Responsive Design", "Problem Solving"].map((concept, index) => (
                <motion.div
                  key={concept}
                  className="px-4 py-2 rounded-full bg-muted/50 text-sm font-medium text-foreground border border-primary/20 hover:border-primary/40 hover:bg-primary/10 transition-colors"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                >
                  {concept}
                </motion.div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
