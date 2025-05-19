"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"

export default function About() {
  const interests = [
    { name: "Football", icon: "⚽" },
    { name: "Basketball", icon: "🏀" },
    { name: "Anime", icon: "📺" },
    { name: "Gaming", icon: "👾" },
    { name: "Movies", icon: "🎬" },
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
            className="flex items-center justify-center"
          >
            <div className="relative group">
              {/* Outer glow effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-teal to-violet rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>

              {/* Image container */}
              <div className="relative w-64 h-64 md:w-72 md:h-72 rounded-full overflow-hidden border-2 border-white/20 bg-background">
                {/* Use a simple img tag with error handling */}
                <img
                  src="/images/profile.png"
                  alt="Rajeev Aken"
                  className="w-full h-full object-cover scale-105 hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    // If image fails to load, show initials
                    e.currentTarget.style.display = "none"
                    e.currentTarget.parentElement.classList.add(
                      "flex",
                      "items-center",
                      "justify-center",
                      "bg-gradient-to-br",
                      "from-primary/20",
                      "to-primary/40",
                    )
                    const initialsDiv = document.createElement("div")
                    initialsDiv.className = "text-6xl font-bold text-white"
                    initialsDiv.textContent = "RA"
                    e.currentTarget.parentElement.appendChild(initialsDiv)
                  }}
                />

                {/* Subtle overlay for depth */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
