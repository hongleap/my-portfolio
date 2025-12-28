"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink } from "lucide-react"

interface ProjectCardProps {
  title: string
  description: string
  technologies: string[]
  features: string[]
  githubUrl: string
  liveUrl: string | null
  delay?: number
}

export function ProjectCard({
  title,
  description,
  technologies,
  features,
  githubUrl,
  liveUrl,
  delay = 0,
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="h-full"
    >
      <Card className="flex flex-col h-full border-2 hover:border-primary/50 transition-all hover:shadow-lg group relative overflow-hidden">
        {/* Animated background gradient on hover */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 opacity-0"
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />

        <div className="relative z-10">
          <CardHeader>
            <motion.div animate={{ x: isHovered ? 5 : 0 }} transition={{ duration: 0.2 }}>
              <CardTitle className="text-xl flex items-center gap-2">
                {title}
                <motion.div animate={{ rotate: isHovered ? 360 : 0 }} transition={{ duration: 0.5 }}>
                  <span className="text-primary">✦</span>
                </motion.div>
              </CardTitle>
            </motion.div>
            <CardDescription className="leading-relaxed">{description}</CardDescription>
          </CardHeader>

          <CardContent className="flex-1">
            <div className="mb-4">
              <h4 className="text-sm font-semibold mb-2 text-foreground">Technologies</h4>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech, index) => (
                  <motion.div
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: delay + index * 0.05 }}
                    whileHover={{ scale: 1.1 }}
                  >
                    <Badge variant="secondary" className="text-xs hover:bg-primary/20 transition-colors cursor-pointer">
                      {tech}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-sm font-semibold mb-2 text-foreground">Key Features</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                {features.map((feature, index) => (
                  <motion.li
                    key={feature}
                    className="flex items-center gap-2"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: delay + 0.2 + index * 0.05 }}
                  >
                    <motion.span
                      className="w-1.5 h-1.5 bg-primary rounded-full"
                      animate={{ scale: isHovered ? [1, 1.5, 1] : 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    />
                    {feature}
                  </motion.li>
                ))}
              </ul>
            </div>
          </CardContent>

          <CardFooter className="gap-2">
            <motion.div className="flex-1" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button asChild variant="outline" size="sm" className="w-full bg-transparent">
                <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  Code
                </a>
              </Button>
            </motion.div>

            {liveUrl && (
              <motion.div className="flex-1" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button asChild size="sm" className="w-full">
                  <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </a>
                </Button>
              </motion.div>
            )}
          </CardFooter>
        </div>
      </Card>
    </motion.div>
  )
}
