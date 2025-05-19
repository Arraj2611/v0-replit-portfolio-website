"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

// Konami Code sequence: up, up, down, down, left, right, left, right, b, a
const konamiCode = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "KeyB",
  "KeyA",
]

export default function EasterEgg() {
  const [keys, setKeys] = useState<string[]>([])
  const [showEasterEgg, setShowEasterEgg] = useState(false)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const newKeys = [...keys, e.code]
      if (newKeys.length > konamiCode.length) {
        newKeys.shift()
      }
      setKeys(newKeys)

      // Check if the Konami code has been entered
      if (newKeys.length === konamiCode.length && newKeys.every((key, i) => key === konamiCode[i])) {
        setShowEasterEgg(true)
        setTimeout(() => setShowEasterEgg(false), 5000)
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [keys])

  return (
    <AnimatePresence>
      {showEasterEgg && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 flex items-center justify-center z-50 bg-black/70"
          onClick={() => setShowEasterEgg(false)}
        >
          <div className="bg-card p-8 rounded-lg shadow-xl max-w-md text-center">
            <h3 className="text-2xl font-bold mb-4 neon-text">Easter Egg Found!</h3>
            <div className="mb-4">
              <img src="/placeholder.svg?height=300&width=300" alt="Anime Easter Egg" className="mx-auto rounded-lg" />
            </div>
            <p className="text-lg">You discovered the Konami code! You must be a true gamer (or anime fan)! 🎮</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
