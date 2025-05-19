"use client"

import { motion } from "framer-motion"
import { Code, Database, Server, Cpu, Layers, Workflow } from "lucide-react"
import ScrollAnimation from "../animations/scroll-animation"

const skills = [
  {
    category: "Programming Languages",
    icon: <Code className="h-6 w-6" />,
    items: ["Python", "SQL", "C++"],
  },
  {
    category: "Web Technologies",
    icon: <Layers className="h-6 w-6" />,
    items: ["FastAPI", "Flask", "Streamlit", "REST APIs"],
  },
  {
    category: "Databases",
    icon: <Database className="h-6 w-6" />,
    items: ["Relational Databases", "Data Modeling", "ETL Pipelines"],
  },
  {
    category: "AI/ML",
    icon: <Cpu className="h-6 w-6" />,
    items: ["TensorFlow", "LSTM", "Langchain", "FAISS", "Weaviate", "Groq", "Generative AI", "Vector Search"],
  },
  {
    category: "DevOps & Tools",
    icon: <Server className="h-6 w-6" />,
    items: ["Docker", "Git", "AWS", "MLflow", "DVC"],
  },
  {
    category: "Data Engineering",
    icon: <Workflow className="h-6 w-6" />,
    items: ["Apache Airflow", "AsyncIO", "BeautifulSoup", "Data Pipelines"],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-background">
      <div className="section-container">
        <motion.h2
          className="section-title neon-text"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Skills
        </motion.h2>

        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          My technical toolkit and areas of expertise
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {skills.map((skillGroup, index) => (
            <ScrollAnimation
              key={skillGroup.category}
              delay={index * 0.1}
              direction={index % 2 === 0 ? "left" : "right"}
            >
              <SkillCard skillGroup={skillGroup} />
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  )
}

function SkillCard({ skillGroup }) {
  return (
    <div className="bg-card rounded-lg p-6 h-full border border-border hover:border-primary/50 transition-all duration-300">
      <div className="flex items-center mb-4">
        <div className="mr-3 text-primary">{skillGroup.icon}</div>
        <h3 className="text-xl font-semibold">{skillGroup.category}</h3>
      </div>

      <div className="flex flex-wrap gap-2 mt-4">
        {skillGroup.items.map((skill) => (
          <span key={skill} className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm">
            {skill}
          </span>
        ))}
      </div>
    </div>
  )
}
