"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import TiltEffect from "../animations/tilt-effect"

export default function About() {
  const interests = [
    { name: "Football", icon: "⚽" },
    { name: "Basketball", icon: "🏀" },
    { name: "Anime", icon: "📺" },
    { name: "Gaming", icon: "👾" },
    { name: "Movies", icon: "🎬" },
  ]

  // Using the raw GitHub URL for your profile photo
  const profilePhotoUrl = "https://raw.githubusercontent.com/Arraj2611/v0-replit-portfolio-website/main/photo.png"

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
              Hi there! I'm <span className="font-semibold">Rajeev Aken</span>, an aspiring Software Engineer with
              hands-on experience in backend development, API design, and building scalable data-driven applications.
            </p>

            <p className="text-lg">
              I specialize in developing robust software solutions with a focus on AI/ML applications, data engineering,
              and backend systems. My expertise includes designing efficient APIs, creating automated data pipelines,
              and implementing machine learning models for real-world problems.
            </p>

            <p className="text-lg">
              I'm passionate about leveraging technology to create impactful solutions and continuously expanding my
              skills in the ever-evolving tech landscape. When I'm not coding, you can find me playing football,
              watching anime, or gaming.
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
                src={profilePhotoUrl || "/placeholder.svg"}
                alt="Rajeev Aken"
                width={320}
                height={320}
                className="object-cover"
                priority
              />
            </TiltEffect>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
