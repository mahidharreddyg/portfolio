"use client"

import { motion } from "framer-motion"
import { Briefcase, Calendar, MapPin, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import PageHeader from "@/components/page-header"

export default function ExperiencePage() {
  const experiences = [
    {
      title: "Director of Creativity",
      company: "Entrepreneurship Cell VIT",
      location: "Vellore, India",
      period: "Aug 2022 - Present",
      description:
        "Leading creative initiatives and design strategies for the Entrepreneurship Cell at VIT Vellore. Responsible for branding, marketing materials, and event promotions.",
      responsibilities: [
        "Manage a team of 10 designers to create cohesive branding across all platforms",
        "Develop marketing strategies for entrepreneurship events and workshops",
        "Design promotional materials for E-Summit, the flagship entrepreneurship event",
        "Collaborate with technical teams to ensure design implementation",
      ],
      achievements: [
        "Increased social media engagement by 40% through redesigned visual identity",
        "Led the rebranding initiative for E-Cell VIT",
      ],
    },
    {
      title: "iOS Developer",
      company: "Apple Developers Group - VIT",
      location: "Vellore, India",
      period: "Sep 2022 - Present",
      description:
        "Developing iOS applications and contributing to the Apple ecosystem within the university community. Focusing on Swift and SwiftUI development.",
      responsibilities: [
        "Develop iOS applications for university events and initiatives",
        "Conduct workshops on Swift programming and iOS development",
        "Collaborate with cross-functional teams on app architecture and design",
        "Mentor junior developers in mobile application development",
      ],
      achievements: [
        "Developed an event management app used by 2000+ students",
        "Received recognition for best technical contribution",
      ],
    },
    {
      title: "Full Stack Developer Intern",
      company: "TechInnovate Solutions",
      location: "Remote",
      period: "May 2023 - Aug 2023",
      description:
        "Worked on developing and maintaining web applications using React, Node.js, and MongoDB. Collaborated with senior developers on feature implementation and bug fixes.",
      responsibilities: [
        "Developed responsive UI components using React and Tailwind CSS",
        "Implemented RESTful APIs using Node.js and Express",
        "Worked with MongoDB for database operations and optimization",
        "Participated in code reviews and agile development processes",
      ],
      achievements: [
        "Reduced API response time by 30% through optimization",
        "Implemented a new feature that increased user engagement by 25%",
      ],
    },
  ]

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <PageHeader
          title="Professional Experience"
          description="My journey through various roles and responsibilities"
        />

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="mb-12 relative"
            >
              {index !== experiences.length - 1 && <div className="absolute left-8 top-16 bottom-0 w-0.5 bg-border" />}

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <Briefcase className="h-8 w-8 text-primary" />
                </div>

                <div className="bg-card/50 backdrop-blur-lg rounded-3xl p-8 border border-border shadow-lg flex-1">
                  <h2 className="text-2xl font-bold mb-2">{exp.title}</h2>
                  <h3 className="text-xl text-primary mb-4">{exp.company}</h3>

                  <div className="flex flex-wrap gap-4 mb-4 text-sm text-foreground/70">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  <p className="mb-6 text-foreground/80">{exp.description}</p>

                  <div className="mb-6">
                    <h4 className="font-semibold mb-3">Key Responsibilities</h4>
                    <ul className="space-y-2">
                      {exp.responsibilities.map((responsibility) => (
                        <li key={responsibility} className="flex items-start gap-2">
                          <span className="text-primary font-bold">•</span>
                          <span>{responsibility}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold mb-3">Achievements</h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement) => (
                        <li key={achievement} className="flex items-start gap-2">
                          <span className="text-yellow-500 font-bold">★</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button variant="outline" size="sm" className="gap-2">
                    <ExternalLink className="h-4 w-4" />
                    View Details
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
