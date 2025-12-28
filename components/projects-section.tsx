"use client"

import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { ProjectCard } from "@/components/ui/project-card"

const projects = [
  {
    title: "Personal Portfolio Website",
    description:
      "A modern, responsive portfolio website built with Next.js and Tailwind CSS, showcasing my projects and skills with smooth animations and a clean design.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    features: ["Responsive Design", "Smooth Scrolling", "Dark Mode", "Contact Form"],
    githubUrl: "https://github.com/username/portfolio",
    liveUrl: "https://portfolio.example.com",
  },
  {
    title: "E-Commerce System",
    description:
      "A full-featured e-commerce application with product management, shopping cart, and checkout functionality. Built with Java backend and React frontend.",
    technologies: ["Java", "Spring Boot", "React", "MySQL"],
    features: ["User Authentication", "Product Catalog", "Shopping Cart", "Order Management"],
    githubUrl: "https://github.com/username/ecommerce",
    liveUrl: null,
  },
  {
    title: "Weather Dashboard",
    description:
      "A weather forecasting application that fetches real-time weather data from external APIs and displays it in an intuitive, user-friendly interface.",
    technologies: ["JavaScript", "React", "REST API", "CSS3"],
    features: ["Real-time Data", "Location Search", "5-Day Forecast", "Responsive UI"],
    githubUrl: "https://github.com/username/weather-app",
    liveUrl: "https://weather-dashboard.example.com",
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Featured Projects</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A showcase of my recent work and personal projects demonstrating my technical skills and problem-solving
            abilities
          </p>
        </ScrollReveal>


        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <ProjectCard key={project.title} {...project} delay={index * 0.1} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
