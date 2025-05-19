"use client"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Download, ArrowRight } from "lucide-react"
import TypewriterComponent from "typewriter-effect"
import ParticleBackground from "../animations/particle-background"
import Link from "next/link"

export default function Hero() {
  // Using the raw GitHub URL for your resume with the cleaner filename
  const resumeUrl = "https://raw.githubusercontent.com/Arraj2611/v0-replit-portfolio-website/blob/main/public/resume/RajeevAken.pdf"

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(var(--hero-gradient-from))] to-[hsl(var(--hero-gradient-to))]"></div>
        <ParticleBackground />
      </div>

      <motion.div
        className="section-container z-10 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Hey, I'm <span className="neon-text">Rajeev</span> 👋
        </motion.h1>

        <motion.div
          className="text-xl md:text-2xl lg:text-3xl mb-8 h-12 text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <TypewriterComponent
            options={{
              strings: ["AI/ML Engineer", "Data Scientist", "Full Stack Dev", "AI Enthusiast"],
              autoStart: true,
              loop: true,
              wrapperClassName: "typewriter-wrapper",
              cursorClassName: "typewriter-cursor",
            }}
          />
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <Link href="#projects">
            <Button className="glow" size="lg">
              Explore Projects <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
          <a href={resumeUrl} download="RajeevAken.pdf" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="lg">
              Download Resume <Download className="ml-2 h-4 w-4" />
            </Button>
          </a>
        </motion.div>

        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 1,
            duration: 0.8,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            repeatDelay: 0.2,
          }}
        >
          <div className="w-6 h-10 border-2 border-foreground/50 rounded-full flex justify-center">
            <div className="w-1 h-2 bg-foreground/50 rounded-full mt-2 animate-bounce"></div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
