"use client"

import { motion } from "framer-motion"

export default function Skills() {
  // This is a placeholder for the 3D skills section that will be enhanced with Three.js
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Angular",
    "Node.js",
    "Express",
    "MongoDB",
    "PostgreSQL",
    "AWS",
    "Firebase",
    "Figma",
    "Adobe XD",
    "Git",
    "GitHub",
    "Docker",
    "Tailwind CSS",
  ]

  return (
    <section id="skills" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl font-bold mb-4">My Skills</h2>
        <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6" />
        <p className="text-foreground/80 max-w-2xl mx-auto">Technologies and tools I work with</p>
      </motion.div>

      {/* Placeholder for 3D skills visualization - will be enhanced with Three.js */}
      <div className="bg-card/30 backdrop-blur-lg rounded-3xl p-8 border border-border shadow-lg mb-12 h-[400px] flex items-center justify-center">
        <p className="text-foreground/60 text-lg">3D Skills Visualization (Three.js) will be implemented here</p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {skills.map((skill, index) => (
          <motion.div
            key={skill}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            viewport={{ once: true }}
            whileHover={{ y: -5, scale: 1.05 }}
            className="bg-card/50 backdrop-blur-lg rounded-xl p-4 border border-border shadow-md text-center"
          >
            <span className="text-sm font-medium">{skill}</span>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
