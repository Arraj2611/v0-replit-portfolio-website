"use client"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Download, ArrowRight } from "lucide-react"
import TypewriterComponent from "typewriter-effect"
import ParticleBackground from "../animations/particle-background"
import { AnimatedCharacters } from "../animations/text-animation"

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-navy/50 to-charcoal/90"></div>
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
          Hey, I'm <AnimatedCharacters text="Rajeev" className="neon-text" /> 👋
        </motion.h1>

        <motion.div
          className="text-xl md:text-2xl lg:text-3xl mb-8 h-12 text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <TypewriterComponent
            options={{
              strings: ["AI Engineer", "Full Stack Dev", "Creator"],
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
          <Button className="glow" size="lg">
            Explore Projects <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button variant="outline" size="lg">
            Download Resume <Download className="ml-2 h-4 w-4" />
          </Button>
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
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-2 bg-white rounded-full mt-2 animate-bounce"></div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
