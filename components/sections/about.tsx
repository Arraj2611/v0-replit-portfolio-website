"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import TiltEffect from "../animations/tilt-effect"

export default function About() {
  const interests = [
    { name: "Football", icon: "⚽" },
    { name: "Anime", icon: "📺" },
    { name: "Gaming", icon: "👾" },
    { name: "AI Research", icon: "📊" },
  ]

  return (
    <section id="about" className="py-20 bg-background">
      <div className="section-container">
        <motion.h2
          className="section-title neon-text"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <p className="text-lg">
              Hi there! I'm <span className="font-semibold">Rajeev Aken</span>, an AI/ML Engineer and Full Stack
              Developer with a passion for building intelligent, creative systems that solve real-world problems.
            </p>

            <p className="text-lg">
              My journey in tech began with a fascination for how AI could transform the way we interact with computers.
              This led me to dive deep into machine learning, natural language processing, and web development.
            </p>

            <p className="text-lg">
              I believe in building technology that's not just powerful, but also accessible and ethical. When I'm not
              coding, you can find me exploring new technologies, watching anime, or playing football.
            </p>

            <div className="pt-4">
              <h3 className="text-xl font-semibold mb-3">Interests</h3>
              <div className="flex flex-wrap gap-3">
                {interests.map((interest) => (
                  <Badge key={interest.name} variant="outline" className="text-base py-2 px-4">
                    {interest.icon} {interest.name}
                  </Badge>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex justify-center"
          >
            <TiltEffect className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden glow">
              <Image
                src="/placeholder.svg?height=320&width=320"
                alt="Rajeev Aken"
                width={320}
                height={320}
                className="object-cover"
              />
            </TiltEffect>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
