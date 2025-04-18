"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ExternalLink, Github, Figma, Code } from "lucide-react"
import { Button } from "@/components/ui/button"
import PageHeader from "@/components/page-header"

export default function ProjectsPage() {
  const [activeTab, setActiveTab] = useState("ui-ux")

  const uiUxProjects = [
    {
      title: "E-Commerce Dashboard",
      description: "A modern dashboard design for an e-commerce platform with analytics and inventory management.",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["Figma", "UI/UX", "Dashboard"],
      links: [
        { icon: <Figma className="h-4 w-4" />, url: "#", label: "Figma" },
        { icon: <ExternalLink className="h-4 w-4" />, url: "#", label: "Preview" },
      ],
    },
    {
      title: "Travel App Design",
      description: "Mobile app design for a travel platform with booking, itinerary planning, and social features.",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["Figma", "Mobile", "UI/UX"],
      links: [
        { icon: <Figma className="h-4 w-4" />, url: "#", label: "Figma" },
        { icon: <ExternalLink className="h-4 w-4" />, url: "#", label: "Preview" },
      ],
    },
    {
      title: "Finance Dashboard",
      description: "Financial analytics dashboard with data visualization and reporting features.",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["Figma", "Dashboard", "UI/UX"],
      links: [
        { icon: <Figma className="h-4 w-4" />, url: "#", label: "Figma" },
        { icon: <ExternalLink className="h-4 w-4" />, url: "#", label: "Preview" },
      ],
    },
  ]

  const fullStackProjects = [
    {
      title: "Social Media Platform",
      description:
        "A full-stack social media application with real-time messaging, post sharing, and user authentication.",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["React", "Node.js", "MongoDB", "Socket.io"],
      links: [
        { icon: <Github className="h-4 w-4" />, url: "#", label: "GitHub" },
        { icon: <ExternalLink className="h-4 w-4" />, url: "#", label: "Live Demo" },
      ],
    },
    {
      title: "E-Learning Platform",
      description: "An educational platform with course management, video streaming, and progress tracking.",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["React", "Express", "PostgreSQL", "AWS"],
      links: [
        { icon: <Github className="h-4 w-4" />, url: "#", label: "GitHub" },
        { icon: <ExternalLink className="h-4 w-4" />, url: "#", label: "Live Demo" },
      ],
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates and team features.",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["Angular", "Firebase", "TypeScript"],
      links: [
        { icon: <Github className="h-4 w-4" />, url: "#", label: "GitHub" },
        { icon: <ExternalLink className="h-4 w-4" />, url: "#", label: "Live Demo" },
      ],
    },
  ]

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <PageHeader title="My Projects" description="Showcasing my work in UI/UX design and full-stack development" />

        <Tabs defaultValue="ui-ux" className="w-full" onValueChange={setActiveTab}>
          <div className="flex justify-center mb-12">
            <TabsList className="grid grid-cols-2 w-full max-w-md">
              <TabsTrigger value="ui-ux" className="text-base py-3">
                <Figma className="h-4 w-4 mr-2" />
                UI/UX Projects
              </TabsTrigger>
              <TabsTrigger value="full-stack" className="text-base py-3">
                <Code className="h-4 w-4 mr-2" />
                Full Stack Projects
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="ui-ux" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatePresence mode="wait">
                {uiUxProjects.map((project, index) => (
                  <motion.div
                    key={project.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{
                      y: -10,
                      transition: { duration: 0.3 },
                    }}
                    className="group"
                  >
                    <div className="bg-card/50 backdrop-blur-lg rounded-3xl overflow-hidden border border-border shadow-lg h-full flex flex-col">
                      <div className="relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <img
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>

                      <div className="p-6 flex-1 flex flex-col">
                        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                        <p className="text-foreground/80 mb-4 flex-1">{project.description}</p>

                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        <div className="flex gap-3">
                          {project.links.map((link) => (
                            <Button key={link.label} variant="outline" size="sm" className="gap-2" asChild>
                              <a href={link.url} target="_blank" rel="noopener noreferrer">
                                {link.icon}
                                {link.label}
                              </a>
                            </Button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </TabsContent>

          <TabsContent value="full-stack" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatePresence mode="wait">
                {fullStackProjects.map((project, index) => (
                  <motion.div
                    key={project.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{
                      y: -10,
                      transition: { duration: 0.3 },
                    }}
                    className="group"
                  >
                    <div className="bg-card/50 backdrop-blur-lg rounded-3xl overflow-hidden border border-border shadow-lg h-full flex flex-col">
                      <div className="relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <img
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>

                      <div className="p-6 flex-1 flex flex-col">
                        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                        <p className="text-foreground/80 mb-4 flex-1">{project.description}</p>

                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        <div className="flex gap-3">
                          {project.links.map((link) => (
                            <Button key={link.label} variant="outline" size="sm" className="gap-2" asChild>
                              <a href={link.url} target="_blank" rel="noopener noreferrer">
                                {link.icon}
                                {link.label}
                              </a>
                            </Button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
