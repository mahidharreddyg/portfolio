"use client"

import { motion } from "framer-motion"
import { Briefcase, Smartphone } from "lucide-react"

export default function Positions() {
  const positions = [
    {
      title: "Director of Creativity",
      organization: "Entrepreneurship Cell VIT",
      icon: <Briefcase className="h-6 w-6" />,
      description: "Leading creative initiatives and design strategies for the Entrepreneurship Cell at VIT Vellore.",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "iOS Developer",
      organization: "Apple Developers Group - VIT",
      icon: <Smartphone className="h-6 w-6" />,
      description:
        "Developing iOS applications and contributing to the Apple ecosystem within the university community.",
      gradient: "from-blue-500 to-cyan-500",
    },
  ]

  return (
    <section className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl font-bold mb-4">Positions of Responsibility</h2>
        <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6" />
        <p className="text-foreground/80 max-w-2xl mx-auto">
          Leadership roles that have shaped my professional journey
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {positions.map((position, index) => (
          <motion.div
            key={position.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            whileHover={{
              y: -10,
              transition: { duration: 0.3 },
            }}
            className="relative group"
          >
            <div
              className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${position.gradient} opacity-70 dark:opacity-50 blur-xl group-hover:opacity-100 transition-opacity duration-300 -z-10`}
            />

            <div className="bg-card/80 backdrop-blur-lg rounded-3xl p-8 border border-border shadow-lg h-full">
              <div
                className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 bg-gradient-to-r ${position.gradient} text-white`}
              >
                {position.icon}
              </div>

              <h3 className="text-2xl font-bold mb-2">{position.title}</h3>
              <p className="text-lg text-primary mb-4">{position.organization}</p>
              <p className="text-foreground/80">{position.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
