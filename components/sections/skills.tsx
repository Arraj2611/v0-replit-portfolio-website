"use client"

import { motion } from "framer-motion"
import { Code, Database, Server, Cpu, Layers, Terminal } from "lucide-react"
import ScrollAnimation from "../animations/scroll-animation"

const skills = [
  {
    category: "Languages",
    icon: <Code className="h-6 w-6" />,
    items: ["Python", "JavaScript", "TypeScript", "C++", "SQL"],
  },
  {
    category: "Frameworks",
    icon: <Layers className="h-6 w-6" />,
    items: ["React", "Next.js", "FastAPI", "Flask", "Express.js"],
  },
  {
    category: "Databases",
    icon: <Database className="h-6 w-6" />,
    items: ["MongoDB", "PostgreSQL", "MySQL", "Firebase"],
  },
  {
    category: "ML/AI",
    icon: <Cpu className="h-6 w-6" />,
    items: ["TensorFlow", "PyTorch", "scikit-learn", "LangChain", "FAISS", "Weaviate"],
  },
  {
    category: "DevOps",
    icon: <Server className="h-6 w-6" />,
    items: ["Docker", "Git", "CI/CD", "AWS", "Vercel"],
  },
  {
    category: "Tools",
    icon: <Terminal className="h-6 w-6" />,
    items: ["VS Code", "Jupyter", "Postman", "Figma", "Streamlit"],
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
