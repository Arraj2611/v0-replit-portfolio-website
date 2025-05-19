"use client"
import { motion } from "framer-motion"
import { Github, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

// Add the import for HoverAnimation
import HoverAnimation from "../animations/hover-animation"

const projects = [
  {
    id: 1,
    title: "DocuMind AI",
    description:
      "Intelligent Document Q&A Chatbot using Retrieval Augmented Generation (RAG) techniques for accurate document analysis and question answering.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["React", "FastAPI", "FAISS", "MongoDB"],
    github: "#",
    demo: "#",
  },
  {
    id: 2,
    title: "Dog Vision",
    description:
      "Computer vision application that identifies dog breeds from images using transfer learning and convolutional neural networks.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["TensorFlow", "Python", "Flask", "Computer Vision"],
    github: "#",
    demo: "#",
  },
  {
    id: 3,
    title: "SIH Sentiment Analysis",
    description:
      "NLP project for Smart India Hackathon that analyzes sentiment from social media data to provide actionable insights.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["NLP", "Python", "React", "Streamlit"],
    github: "#",
    demo: "#",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-background">
      <div className="section-container">
        <motion.h2
          className="section-title neon-text"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Projects
        </motion.h2>

        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Here are some of my recent projects that showcase my skills and interests.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Wrap the Card component with HoverAnimation
// Find the ProjectCard function and update it:
function ProjectCard({ project }) {
  return (
    <HoverAnimation>
      <Card className="h-full overflow-hidden bg-card">
        <div className="h-48 overflow-hidden">
          <img
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          />
        </div>
        <CardHeader>
          <CardTitle>{project.title}</CardTitle>
          <div className="flex flex-wrap gap-2 mt-2">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-sm text-muted-foreground">{project.description}</CardDescription>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" size="sm" asChild>
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" /> Code
            </a>
          </Button>
          <Button size="sm" asChild>
            <a href={project.demo} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" /> Demo
            </a>
          </Button>
        </CardFooter>
      </Card>
    </HoverAnimation>
  )
}
