"use client"

import { motion } from "framer-motion"

export default function PageHeader({ title, description }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-center mb-16"
    >
      <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
      <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6" />
      <p className="text-lg text-foreground/80 max-w-2xl mx-auto">{description}</p>
    </motion.div>
  )
}
