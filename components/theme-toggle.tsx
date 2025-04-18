"use client"

import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { motion, AnimatePresence } from "framer-motion"
import { Sun, Moon } from "lucide-react"

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <motion.button
      onClick={toggleTheme}
      className="fixed bottom-8 right-8 z-50 w-14 h-14 rounded-full bg-card/80 backdrop-blur-lg border border-border shadow-lg flex items-center justify-center hover:scale-110 transition-transform duration-300"
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1 }}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={theme}
          initial={{ opacity: 0, rotate: -180 }}
          animate={{ opacity: 1, rotate: 0 }}
          exit={{ opacity: 0, rotate: 180 }}
          transition={{ duration: 0.3 }}
        >
          {theme === "dark" ? <Sun className="h-6 w-6 text-yellow-400" /> : <Moon className="h-6 w-6 text-primary" />}
        </motion.div>
      </AnimatePresence>
    </motion.button>
  )
}
