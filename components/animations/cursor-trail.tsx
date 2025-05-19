"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface CursorDot {
  x: number
  y: number
  id: number
}

export default function CursorTrail() {
  const [dots, setDots] = useState<CursorDot[]>([])
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })

      if (!isActive) {
        setIsActive(true)
      }
    }

    window.addEventListener("mousemove", updateMousePosition)

    return () => {
      window.removeEventListener("mousemove", updateMousePosition)
    }
  }, [isActive])

  useEffect(() => {
    if (!isActive) return

    const interval = setInterval(() => {
      setDots((prevDots) => {
        const newDot = {
          x: mousePosition.x,
          y: mousePosition.y,
          id: Date.now(),
        }

        const updatedDots = [...prevDots, newDot]

        if (updatedDots.length > 20) {
          return updatedDots.slice(1)
        }

        return updatedDots
      })
    }, 50)

    return () => {
      clearInterval(interval)
    }
  }, [mousePosition, isActive])

  return (
    <div className="pointer-events-none fixed inset-0 z-50">
      <AnimatePresence>
        {dots.map((dot, index) => (
          <motion.div
            key={dot.id}
            className="absolute w-3 h-3 rounded-full pointer-events-none"
            style={{
              left: dot.x,
              top: dot.y,
              backgroundColor: index % 2 === 0 ? "#00f0ff" : "#9d4edd",
            }}
            initial={{ scale: 0.5, opacity: 0.7 }}
            animate={{ scale: 0, opacity: 0 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          />
        ))}
      </AnimatePresence>
    </div>
  )
}
