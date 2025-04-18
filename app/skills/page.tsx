"use client"

import { motion } from "framer-motion"
import { Suspense } from "react"
import SkillsVisualization from "@/components/skills-visualization"
import PageHeader from "@/components/page-header"

export default function SkillsPage() {
  const skills = [
    {
      category: "Frontend",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "TypeScript",
        "React",
        "Angular",
        "Vue.js",
        "Next.js",
        "Tailwind CSS",
      ],
    },
    {
      category: "Backend",
      technologies: ["Node.js", "Express", "Django", "Flask", "Spring Boot", "ASP.NET"],
    },
    {
      category: "Database",
      technologies: ["MongoDB", "PostgreSQL", "MySQL", "Firebase", "Redis", "Supabase"],
    },
    {
      category: "DevOps & Cloud",
      technologies: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", "CI/CD", "Git"],
    },
    {
      category: "Design",
      technologies: ["Figma", "Adobe XD", "Photoshop", "Illustrator", "UI/UX", "Wireframing", "Prototyping"],
    },
    {
      category: "Mobile",
      technologies: ["React Native", "Flutter", "Swift", "Kotlin", "iOS", "Android"],
    },
  ]

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <PageHeader
          title="Skills & Technologies"
          description="Technologies and tools I work with to bring ideas to life"
        />

        <div className="mb-16">
          <Suspense fallback={<div className="h-[500px] flex items-center justify-center">Loading 3D Skills...</div>}>
            <SkillsVisualization />
          </Suspense>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skillGroup, index) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card/50 backdrop-blur-lg rounded-3xl p-8 border border-border shadow-lg"
            >
              <h3 className="text-xl font-bold mb-4 text-primary">{skillGroup.category}</h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.technologies.map((tech) => (
                  <span key={tech} className="px-3 py-1 text-sm font-medium rounded-full bg-primary/10 text-primary">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
