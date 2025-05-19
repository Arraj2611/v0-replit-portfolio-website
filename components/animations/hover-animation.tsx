"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface HoverAnimationProps {
  children: ReactNode
  className?: string
  scale?: number
  rotate?: number
}

export default function HoverAnimation({ children, className = "", scale = 1.05, rotate = 0 }: HoverAnimationProps) {
  return (
    <motion.div
      className={className}
      whileHover={{
        scale,
        rotate: rotate,
        transition: { duration: 0.3 },
      }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.div>
  )
}
