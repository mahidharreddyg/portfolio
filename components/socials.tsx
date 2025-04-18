"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Code2 } from "lucide-react"

export default function Socials() {
  const socials = [
    {
      name: "LinkedIn",
      icon: <Linkedin className="h-6 w-6" />,
      url: "https://linkedin.com/in/mahidhar-reddy",
      color: "bg-blue-500 dark:bg-blue-600",
    },
    {
      name: "GitHub",
      icon: <Github className="h-6 w-6" />,
      url: "https://github.com/mahidhar-reddy",
      color: "bg-gray-800 dark:bg-gray-700",
    },
    {
      name: "LeetCode",
      icon: <Code2 className="h-6 w-6" />,
      url: "https://leetcode.com/mahidhar-reddy",
      color: "bg-yellow-500 dark:bg-yellow-600",
    },
  ]

  return (
    <section className="py-16">
      <div className="flex flex-wrap justify-center gap-6">
        {socials.map((social, index) => (
          <motion.a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`relative group flex items-center gap-3 px-6 py-4 rounded-xl ${social.color} text-white shadow-lg`}
          >
            <div className="absolute inset-0 rounded-xl bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative z-10">{social.icon}</span>
            <span className="relative z-10 font-medium">{social.name}</span>
          </motion.a>
        ))}
      </div>
    </section>
  )
}
