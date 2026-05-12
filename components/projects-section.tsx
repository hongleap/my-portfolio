"use client";

import { FadeIn } from "@/components/ui/text-reveal";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "E-Commerce API",
    label: "What is",
    highlight: "E-Commerce?",
    overlayColor: "rgba(113, 113, 113, 0)",
    description:
      "A RESTful API built with Spring Boot for managing products, orders, and user authentication with JWT.",
    tags: ["Java", "Spring Boot", "PostgreSQL", "JWT"],
    image: "/projects/Docuhub.png",
    github: "https://github.com/hongleap",
    live: "",
  },
  {
    title: "Task Management App",
    label: "What is",
    highlight: "Web-Client?",
    overlayColor: "rgba(10, 46, 26, 0)",
    description:
      "Full-stack task management application with real-time updates, drag-and-drop, and team collaboration features.",
    tags: ["React", "Node.js", "MongoDB", "Socket.io"],
    image: "/projects/browser-render.png",
    github: "https://github.com/hongleap",
    live: "",
  },
  {
    title: "Portfolio Website",
    label: "What is",
    highlight: "HTML, CSS and JavaScript?",
    highlightColor: "#FF6B35",
    overlayColor: "rgba(10, 46, 26, 0)",
    description:
      "A modern developer portfolio built with Next.js featuring smooth animations, dark theme, and responsive design.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    image: "/projects/browser-render.png",
    github: "https://github.com/hongleap",
    live: "",
  },
  {
    title: "Chat Application",
    label: "What is",
    highlight: "Github?",
    overlayColor: "rgba(10, 46, 26, 0)",
    description:
      "Real-time chat application with private messaging, group chats, and file sharing capabilities.",
    tags: ["React", "Firebase", "WebSocket", "Tailwind CSS"],
    image: "/projects/browser-render.png",
    github: "https://github.com/hongleap",
    live: "",
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="flex justify-start items-center">
            <u className="text-3xl sm:text-4xl font-bold text-white text-left mb-16 tracking-tight">
              Projects
            </u>
          </div>

          <div
            className="grid grid-cols-1 sm:grid-cols-2 gap-3"
            style={{ borderRadius: "16px", overflow: "hidden" }}
          >
            {projects.map((project, index) => (
              <FadeIn key={project.title} delay={0.15 + index * 0.12}>
                <div
                  className="relative overflow-hidden group cursor-pointer rounded-lg border border-white"
                  style={{
                    aspectRatio: "16/9",
                  }}
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                    style={{ backgroundImage: `url(${project.image})` }}
                  />

                  <div
                    className="absolute inset-0 transition-opacity duration-300 group-hover:opacity-75"
                    style={{ background: project.overlayColor }}
                  />

                  <div className="absolute inset-0 flex flex-col justify-end p-5 z-10">
                    <div className="mb-auto" />

                    <div className="leading-none">
                      <span
                        className="block font-black"
                        style={{
                          fontSize: "clamp(14px, 3.5vw, 22px)",
                          color:
                            project.overlayColor.includes("240,235") ||
                            project.overlayColor.includes("255,220")
                              ? "#1a1a1a"
                              : "#ffffff",
                          letterSpacing: "-0.01em",
                          textShadow: "0 1px 3px rgba(0,0,0,0.3)",
                        }}
                      >
                        {project.label}{" "}
                        <span style={{ color: project.highlightColor }}>
                          {project.highlight}
                        </span>
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2 py-0.5 rounded font-semibold"
                          style={{
                            background: "rgba(255,255,255,0.15)",
                            color:
                              project.overlayColor.includes("240,235") ||
                              project.overlayColor.includes("255,220")
                                ? "#333"
                                : "#fff",
                            border: "1px solid rgba(255,255,255,0.25)",
                            backdropFilter: "blur(4px)",
                            fontSize: "10px",
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="absolute top-3 right-3 flex gap-2 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-7 h-7 rounded-full"
                        style={{
                          background: "rgba(0,0,0,0.6)",
                          color: "#fff",
                        }}
                      >
                        <Github size={14} />
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-7 h-7 rounded-full"
                        style={{
                          background: "rgba(0,0,0,0.6)",
                          color: "#fff",
                        }}
                      >
                        <ExternalLink size={14} />
                      </a>
                    )}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}