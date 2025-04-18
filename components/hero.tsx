"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Download } from "lucide-react"

export default function Hero() {
  return (
    <section id="home" className="pt-32 pb-20 relative">
      {/* Gradient Orbs */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl opacity-60 -z-10" />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl opacity-60 -z-10" />

      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-block mb-4"
        >
          <span className="px-4 py-1.5 text-sm font-medium rounded-full bg-primary/10 text-primary">
            Welcome to my portfolio
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
        >
          Hi, I'm{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500">
            Mahidhar Reddy G
          </span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl md:text-2xl text-foreground/80 mb-8"
        >
          Full Stack Developer | UI/UX Designer
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <Button size="lg" className="rounded-full px-6 gap-2 bg-primary hover:bg-primary/90">
            View Projects <ArrowRight size={16} />
          </Button>
          <Button size="lg" variant="outline" className="rounded-full px-6 gap-2">
            Download Resume <Download size={16} />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
