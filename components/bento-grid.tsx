"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { GraduationCap, Briefcase, Code, Award, Smartphone, Palette, User, Layers, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function BentoGrid() {
  const bentoItems = [
    {
      title: "Mahidhar Reddy G",
      description: "Full Stack Developer & UI/UX Designer",
      icon: <User className="h-8 w-8" />,
      className: "md:col-span-2 md:row-span-1",
      color: "from-violet-500 to-purple-500",
    },
    {
      title: "Student",
      description: "Computer Science @ VIT Vellore",
      icon: <GraduationCap className="h-8 w-8" />,
      className: "md:col-span-1 md:row-span-1",
      color: "from-blue-500 to-cyan-500",
      link: "/education",
    },
    {
      title: "Director of Creativity",
      description: "Entrepreneurship Cell VIT",
      icon: <Briefcase className="h-8 w-8" />,
      className: "md:col-span-1 md:row-span-1",
      color: "from-pink-500 to-rose-500",
      link: "/experience",
    },
    {
      title: "iOS Developer",
      description: "Apple Developers Group - VIT",
      icon: <Smartphone className="h-8 w-8" />,
      className: "md:col-span-1 md:row-span-1",
      color: "from-amber-500 to-orange-500",
      link: "/experience",
    },
    {
      title: "Full Stack Projects",
      description: "Web applications & digital experiences",
      icon: <Code className="h-8 w-8" />,
      className: "md:col-span-1 md:row-span-1",
      color: "from-green-500 to-emerald-500",
      link: "/projects",
    },
    {
      title: "UI/UX Design",
      description: "User interfaces & experiences",
      icon: <Palette className="h-8 w-8" />,
      className: "md:col-span-1 md:row-span-1",
      color: "from-fuchsia-500 to-purple-500",
      link: "/projects",
    },
    {
      title: "Skills",
      description: "Technologies & tools I work with",
      icon: <Layers className="h-8 w-8" />,
      className: "md:col-span-2 md:row-span-1",
      color: "from-blue-500 to-indigo-500",
      link: "/skills",
    },
    {
      title: "Certifications",
      description: "AWS, Google & more",
      icon: <Award className="h-8 w-8" />,
      className: "md:col-span-2 md:row-span-1",
      color: "from-yellow-500 to-amber-500",
      link: "/certifications",
    },
  ]

  return (
    <div className="flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Welcome to my{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500">
            Digital Portfolio
          </span>
        </h1>
        <p className="text-xl text-foreground/80 max-w-2xl mx-auto mb-8">
          Explore my work, skills, and journey in technology and design
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button size="lg" className="rounded-full px-6 gap-2 bg-primary hover:bg-primary/90">
            Contact Me
          </Button>
          <Button size="lg" variant="outline" className="rounded-full px-6 gap-2">
            Download Resume
          </Button>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
        {bentoItems.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`group relative ${item.className}`}
          >
            <div
              className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${item.color} opacity-70 dark:opacity-50 blur-xl group-hover:opacity-100 transition-opacity duration-300 -z-10`}
            />

            <Link href={item.link || "#"} className="block h-full">
              <div className="bg-card/80 backdrop-blur-lg rounded-3xl p-8 border border-border shadow-lg h-full flex flex-col transition-all duration-300 group-hover:shadow-xl group-hover:translate-y-[-5px]">
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 bg-gradient-to-r ${item.color} text-white`}
                >
                  {item.icon}
                </div>

                <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                <p className="text-foreground/80 mb-4">{item.description}</p>

                {item.link && (
                  <div className="mt-auto flex justify-end">
                    <span className="text-primary flex items-center gap-1 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Explore <ExternalLink className="h-3 w-3" />
                    </span>
                  </div>
                )}
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
