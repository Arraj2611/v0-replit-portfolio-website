"use client"

import { useEffect, useRef, useState } from "react"
import { useTheme } from "next-themes"

interface Particle {
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  color: string
}

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particles = useRef<Particle[]>([])
  const animationFrameId = useRef<number>()
  const { resolvedTheme } = useTheme()
  const [particleBaseColor, setParticleBaseColor] = useState("#ffffff")

  useEffect(() => {
    const getCssVariable = (variableName: string) => {
      if (typeof window !== "undefined") {
        return getComputedStyle(document.documentElement).getPropertyValue(variableName).trim();
      }
      return "#ffffff";
    };

    const newParticleColor = getCssVariable('--particle-color');
    setParticleBaseColor(newParticleColor || (resolvedTheme === "dark" ? "#ffffff" : "#374151"));

  }, [resolvedTheme]);

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const particleColors = [particleBaseColor, particleBaseColor, particleBaseColor];
    
    const connectionColor = resolvedTheme === "dark" ? "rgba(255, 255, 255, 0.5)" : "rgba(75, 85, 99, 0.5)";

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initParticles()
    }

    const initParticles = () => {
      particles.current = []
      const particleCount = Math.min(Math.floor(window.innerWidth / 10), 70)

      for (let i = 0; i < particleCount; i++) {
        particles.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 1.5 + 0.5,
          speedX: (Math.random() - 0.5) * 0.3,
          speedY: (Math.random() - 0.5) * 0.3,
          color: getRandomColor(),
        })
      }
    }

    const getRandomColor = () => {
      return particleColors[Math.floor(Math.random() * particleColors.length)]
    }

    const drawParticles = () => {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.current.forEach((particle) => {
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = particle.color
        ctx.globalAlpha = resolvedTheme === "dark" ? 0.7 : 0.8;
        ctx.fill()

        // Update position
        particle.x += particle.speedX
        particle.y += particle.speedY

        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) {
          particle.speedX *= -1
        }

        if (particle.y < 0 || particle.y > canvas.height) {
          particle.speedY *= -1
        }
      })

      // Draw connections
      drawConnections()

      animationFrameId.current = requestAnimationFrame(drawParticles)
    }

    const drawConnections = () => {
      if (!ctx) return;
      const maxDistance = 120

      for (let i = 0; i < particles.current.length; i++) {
        for (let j = i + 1; j < particles.current.length; j++) {
          const dx = particles.current[i].x - particles.current[j].x
          const dy = particles.current[i].y - particles.current[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < maxDistance) {
            ctx.beginPath()
            ctx.strokeStyle = connectionColor;
            ctx.globalAlpha = (resolvedTheme === "dark" ? 0.25 : 0.3) * (1 - distance / maxDistance)
            ctx.lineWidth = 0.3
            ctx.moveTo(particles.current[i].x, particles.current[i].y)
            ctx.lineTo(particles.current[j].x, particles.current[j].y)
            ctx.stroke()
          }
        }
      }
    }

    resizeCanvas()
    if (ctx) {
        animationFrameId.current = requestAnimationFrame(drawParticles);
    }

    window.addEventListener("resize", resizeCanvas)

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current)
      }
    }
  }, [resolvedTheme, particleBaseColor])

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full z-0 opacity-70 dark:opacity-60" />
}
