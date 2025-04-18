"use client"

import { motion } from "framer-motion"
import { Award, CheckCircle, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import PageHeader from "@/components/page-header"

export default function CertificationsPage() {
  const certifications = [
    {
      title: "AWS Cloud Practitioner",
      organization: "Amazon Web Services",
      date: "2023",
      expiry: "2026",
      credentialId: "AWS-CP-12345",
      description: "Foundational understanding of AWS Cloud services, security, architecture, pricing, and support.",
      skills: ["Cloud Computing", "AWS Services", "Cloud Security", "Cloud Architecture"],
      icon: "/placeholder.svg?height=100&width=100&text=AWS",
    },
    {
      title: "Google UX Design Professional Certificate",
      organization: "Google",
      date: "2023",
      credentialId: "GOOGLE-UX-67890",
      description:
        "Comprehensive training in UX design principles, research methods, wireframing, prototyping, and usability testing.",
      skills: ["UX Research", "Wireframing", "Prototyping", "Usability Testing", "Figma"],
      icon: "/placeholder.svg?height=100&width=100&text=Google",
    },
    {
      title: "React Developer Certificate",
      organization: "Meta",
      date: "2022",
      credentialId: "META-REACT-54321",
      description:
        "Advanced React development including hooks, context API, Redux, and performance optimization techniques.",
      skills: ["React.js", "Redux", "JavaScript", "Frontend Development", "UI Components"],
      icon: "/placeholder.svg?height=100&width=100&text=Meta",
    },
    {
      title: "Machine Learning Specialization",
      organization: "Stanford Online",
      date: "2022",
      credentialId: "STANFORD-ML-98765",
      description:
        "Comprehensive course covering machine learning algorithms, neural networks, and practical applications.",
      skills: ["Machine Learning", "Neural Networks", "Python", "Data Analysis", "TensorFlow"],
      icon: "/placeholder.svg?height=100&width=100&text=Stanford",
    },
  ]

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <PageHeader title="Certifications" description="Professional certifications that validate my expertise" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-card/50 backdrop-blur-lg rounded-3xl p-8 border border-border shadow-lg"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-16 h-16 rounded-xl overflow-hidden bg-white p-2">
                  <img
                    src={cert.icon || "/placeholder.svg"}
                    alt={cert.organization}
                    className="w-full h-full object-contain"
                  />
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-1">{cert.title}</h3>
                  <p className="text-primary mb-2">{cert.organization}</p>
                  <div className="flex items-center text-sm text-foreground/60">
                    <Award className="h-4 w-4 mr-1" />
                    <span>
                      Issued {cert.date}
                      {cert.expiry ? ` • Expires ${cert.expiry}` : ""}
                    </span>
                  </div>
                </div>
              </div>

              <p className="mb-4 text-foreground/80">{cert.description}</p>

              <div className="mb-6">
                <h4 className="text-sm font-semibold mb-2">Skills</h4>
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill) => (
                    <span key={skill} className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-border">
                <div className="flex items-center text-sm text-green-500">
                  <CheckCircle className="h-4 w-4 mr-1" />
                  <span>Verified</span>
                </div>

                <Button variant="outline" size="sm" className="gap-2">
                  <ExternalLink className="h-4 w-4" />
                  View Certificate
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
