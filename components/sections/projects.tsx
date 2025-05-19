"use client"
import { motion } from "framer-motion"
import { Github, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import HoverAnimation from "../animations/hover-animation"

const projects = [
  {
    id: 1,
    title: "BitPredict",
    description:
      "Industry-Grade Bitcoin Price Prediction System that ingests, transforms, and version-controls data (including market and sentiment data), builds and tracks machine learning models for Bitcoin price prediction, and deploys an API served via a scalable, monitored infrastructure.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Python", "TensorFlow", "LSTM", "FastAPI", "Streamlit", "Apache Airflow", "Docker"],
    github: "https://github.com/Arraj2611/bitpredict",
    demo: "#",
    status: "Ongoing",
  },
  {
    id: 2,
    title: "DocRAG",
    description:
      "Intelligent Document Q&A Chatbot using Retrieval-Augmented Generation (RAG). Upload documents (PDFs, DOCX, images) and DocRAG processes them, enabling you to chat directly about their content using state-of-the-art language models and vector databases.",
    image: "/images/docrag-demo.jpg",
    tags: ["Python", "React", "FastAPI", "Langchain", "FAISS", "Groq", "Vector Database"],
    github: "https://github.com/Arraj2611/doc_RAG",
    demo: "https://doc-rag-delta.vercel.app",
    status: "Completed",
  },
  {
    id: 3,
    title: "SIH Sentiment Analysis",
    description:
      "End-to-end ML project developed for Smart India Hackathon 2023. Performs sentiment analysis of helpdesk calls using TensorFlow and LSTM models to provide actionable insights for customer service improvement.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["NLP", "Python", "TensorFlow", "LSTM"],
    github: "https://github.com/Arraj2611/SIH_repo",
    demo: "#",
    status: "Completed",
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
          <div className="flex justify-between items-start">
            <CardTitle>{project.title}</CardTitle>
            {project.status && (
              <Badge variant={project.status === "Ongoing" ? "outline" : "secondary"} className="text-xs">
                {project.status}
              </Badge>
            )}
          </div>
          <div className="flex flex-wrap gap-2 mt-2">
            {project.tags.slice(0, 4).map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
            {project.tags.length > 4 && (
              <Badge variant="secondary" className="text-xs">
                +{project.tags.length - 4}
              </Badge>
            )}
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
          <Button size="sm" asChild disabled={project.demo === "#"}>
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className={project.demo === "#" ? "cursor-not-available" : ""}
            >
              <ExternalLink className="mr-2 h-4 w-4" /> Demo
            </a>
          </Button>
        </CardFooter>
      </Card>
    </HoverAnimation>
  )
}
