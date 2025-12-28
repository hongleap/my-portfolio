"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Github, Linkedin } from "lucide-react"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { AnimatedCard } from "@/components/ui/animated-card"
import { motion } from "framer-motion"

export function ContactSection() {
  const contactLinks = [
    {
      href: "mailto:your.email@example.com",
      icon: Mail,
      label: "Email",
      value: "your.email@example.com",
      description: "Send me an email",
      color: "primary",
    },
    {
      href: "https://github.com/yourusername",
      icon: Github,
      label: "GitHub",
      value: "@yourusername",
      description: "Check out my code",
      color: "secondary",
    },
    {
      href: "https://linkedin.com/in/yourprofile",
      icon: Linkedin,
      label: "LinkedIn",
      value: "/in/yourprofile",
      description: "Let's connect professionally",
      color: "accent",
    },
  ]

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Get In Touch</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, or just having a chat about technology
          </p>
        </ScrollReveal>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
          {contactLinks.map((link, index) => {
            const Icon = link.icon
            return (
              <AnimatedCard key={link.label} delay={index * 0.1}>
                <motion.a
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="block h-full"
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.2 }}
                >
                  <Card className="border-2 hover:border-primary/50 transition-colors h-full group">
                    <CardHeader className="text-center space-y-4">
                      <motion.div
                        className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors"
                        whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                      >
                        <Icon className="h-8 w-8 text-primary" />
                      </motion.div>
                      <CardTitle className="text-xl">{link.label}</CardTitle>
                      <CardDescription className="text-sm">{link.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="text-center">
                      <p className="text-foreground font-medium group-hover:text-primary transition-colors">
                        {link.value}
                      </p>
                    </CardContent>
                  </Card>
                </motion.a>
              </AnimatedCard>
            )
          })}
        </div>

        <ScrollReveal delay={0.3} className="text-center mt-12">
          <p className="text-muted-foreground">
            Feel free to reach out through any of these channels. I typically respond within 24 hours.
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}
