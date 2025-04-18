"use client"

import { motion } from "framer-motion"
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react"
import PageHeader from "@/components/page-header"

export default function EducationPage() {
  const education = [
    {
      degree: "Bachelor of Technology in Computer Science",
      institution: "Vellore Institute of Technology (VIT)",
      location: "Vellore, Tamil Nadu, India",
      period: "2021 - 2025",
      description:
        "Pursuing Computer Science with specialization in AI and Machine Learning. Maintaining a CGPA of 9.2/10.",
      courses: [
        "Data Structures and Algorithms",
        "Database Management Systems",
        "Web Technologies",
        "Machine Learning",
        "Artificial Intelligence",
        "Computer Networks",
        "Operating Systems",
        "Software Engineering",
      ],
      achievements: [
        "Dean's List for Academic Excellence",
        "Best Project Award for Database Management Systems",
        "1st Prize in Hackathon 2023",
      ],
    },
    {
      degree: "Higher Secondary Education",
      institution: "Delhi Public School",
      location: "Hyderabad, India",
      period: "2019 - 2021",
      description: "Completed higher secondary education with 95% in Science stream with Computer Science.",
      achievements: ["School Topper in Computer Science", "Science Olympiad Finalist"],
    },
  ]

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <PageHeader title="Education" description="My academic journey and qualifications" />

        <div className="max-w-4xl mx-auto">
          {education.map((edu, index) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="mb-12 relative"
            >
              {index !== education.length - 1 && <div className="absolute left-8 top-16 bottom-0 w-0.5 bg-border" />}

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <GraduationCap className="h-8 w-8 text-primary" />
                </div>

                <div className="bg-card/50 backdrop-blur-lg rounded-3xl p-8 border border-border shadow-lg flex-1">
                  <h2 className="text-2xl font-bold mb-2">{edu.degree}</h2>
                  <h3 className="text-xl text-primary mb-4">{edu.institution}</h3>

                  <div className="flex flex-wrap gap-4 mb-4 text-sm text-foreground/70">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{edu.period}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      <span>{edu.location}</span>
                    </div>
                  </div>

                  <p className="mb-6 text-foreground/80">{edu.description}</p>

                  {edu.courses && (
                    <div className="mb-6">
                      <h4 className="font-semibold mb-3">Key Courses</h4>
                      <div className="flex flex-wrap gap-2">
                        {edu.courses.map((course) => (
                          <span
                            key={course}
                            className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {edu.achievements && (
                    <div>
                      <h4 className="font-semibold mb-3">Achievements</h4>
                      <ul className="space-y-2">
                        {edu.achievements.map((achievement) => (
                          <li key={achievement} className="flex items-start gap-2">
                            <Award className="h-5 w-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
