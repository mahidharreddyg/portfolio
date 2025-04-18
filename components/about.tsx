"use client"

import { motion } from "framer-motion"
import { GraduationCap, User, Code, Palette } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6" />
        <p className="text-foreground/80 max-w-2xl mx-auto">
          Passionate about creating beautiful, functional digital experiences
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="col-span-1 lg:col-span-2 bg-card/50 backdrop-blur-lg rounded-3xl p-8 border border-border shadow-lg"
        >
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-primary/10 text-primary">
              <User className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Who I Am</h3>
              <p className="text-foreground/80 leading-relaxed">
                I'm Mahidhar Reddy G, a passionate Full Stack Developer and UI/UX Designer with a keen eye for detail
                and a love for creating seamless digital experiences. I blend technical expertise with creative design
                thinking to build innovative solutions.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-card/50 backdrop-blur-lg rounded-3xl p-8 border border-border shadow-lg"
        >
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-primary/10 text-primary">
              <GraduationCap className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Education</h3>
              <p className="text-foreground/80 leading-relaxed">
                3rd Year Computer Science Engineering student at VIT Vellore, focusing on advanced programming, system
                design, and UI/UX principles.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="bg-card/50 backdrop-blur-lg rounded-3xl p-8 border border-border shadow-lg"
        >
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-primary/10 text-primary">
              <Code className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Development</h3>
              <p className="text-foreground/80 leading-relaxed">
                Experienced in building responsive web applications with modern frameworks and libraries. I focus on
                clean code, performance, and accessibility.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-card/50 backdrop-blur-lg rounded-3xl p-8 border border-border shadow-lg"
        >
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-primary/10 text-primary">
              <Palette className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Design</h3>
              <p className="text-foreground/80 leading-relaxed">
                Passionate about creating intuitive and visually appealing interfaces. I believe in user-centered design
                that enhances the overall experience.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
