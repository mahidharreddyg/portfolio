"use client"

import { motion } from "framer-motion"
import { Award, CheckCircle } from "lucide-react"

export default function Certifications() {
  const certifications = [
    {
      title: "AWS Cloud Practitioner",
      organization: "Amazon Web Services",
      date: "2023",
      icon: "/placeholder.svg?height=100&width=100&text=AWS",
    },
    {
      title: "Google UX Design Professional Certificate",
      organization: "Google",
      date: "2023",
      icon: "/placeholder.svg?height=100&width=100&text=Google",
    },
    {
      title: "React Developer Certificate",
      organization: "Meta",
      date: "2022",
      icon: "/placeholder.svg?height=100&width=100&text=Meta",
    },
  ]

  return (
    <section id="certifications" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl font-bold mb-4">Certifications</h2>
        <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6" />
        <p className="text-foreground/80 max-w-2xl mx-auto">Professional certifications that validate my expertise</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {certifications.map((cert, index) => (
          <motion.div
            key={cert.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className="bg-card/50 backdrop-blur-lg rounded-3xl p-6 border border-border shadow-lg"
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl overflow-hidden">
                <img
                  src={cert.icon || "/placeholder.svg"}
                  alt={cert.organization}
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <h3 className="text-xl font-bold mb-1">{cert.title}</h3>
                <p className="text-primary mb-2">{cert.organization}</p>
                <div className="flex items-center text-sm text-foreground/60">
                  <Award className="h-4 w-4 mr-1" />
                  <span>Issued {cert.date}</span>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-border flex items-center justify-between">
              <div className="flex items-center text-sm text-green-500">
                <CheckCircle className="h-4 w-4 mr-1" />
                <span>Verified</span>
              </div>

              <button className="text-sm text-primary hover:underline">View Certificate</button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
