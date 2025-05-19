"use client"

import { motion } from "framer-motion"
import { Briefcase, Calendar, CheckCircle2 } from "lucide-react"
import ScrollAnimation from "../animations/scroll-animation"

const experiences = [
  {
    id: 1,
    role: "Software Engineering Intern",
    company: "Emergys Solutions Pvt Ltd",
    period: "Jan 2025 - Present",
    description: "Working as a Software Engineering Intern at Emergys Solutions in Pune.",
    achievements: [
      "Engineered data models and relational databases using SQL for enterprise reporting systems",
      "Created automated data pipelines using Python, AsyncIO, and BeautifulSoup for ETL tasks",
    ],
  },
  {
    id: 2,
    role: "Software Engineering Intern",
    company: "Shri Sai Tech",
    period: "Apr 2024 - Jul 2024",
    description: "Worked as a Software Engineering Intern at Shri Sai Tech in Solapur.",
    achievements: [
      "Designed Flask-based APIs to support data-driven microservices and backend communication",
      "Built AI automation workflows leveraging async calls, optimized for performance and reliability",
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-background">
      <div className="section-container">
        <motion.h2
          className="section-title neon-text"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Experience
        </motion.h2>

        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          My professional journey and work experience
        </motion.p>

        <div className="mt-12 max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <ScrollAnimation key={exp.id} delay={index * 0.2} className="mb-12 relative">
              {/* Timeline line */}
              {index < experiences.length - 1 && (
                <div className="absolute left-8 top-8 bottom-0 w-0.5 bg-border h-full"></div>
              )}

              <div className="flex">
                <div className="flex-shrink-0 mr-4">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 border border-primary/30">
                    <Briefcase className="h-8 w-8 text-primary" />
                  </div>
                </div>

                <div className="bg-card rounded-lg p-6 border border-border flex-grow">
                  <h3 className="text-xl font-semibold">{exp.role}</h3>
                  <p className="text-lg text-muted-foreground">{exp.company}</p>

                  <div className="flex items-center mt-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{exp.period}</span>
                  </div>

                  <p className="mt-4">{exp.description}</p>

                  <div className="mt-4">
                    <h4 className="font-medium mb-2">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle2 className="h-5 w-5 text-teal mr-2 flex-shrink-0 mt-0.5" />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  )
}
