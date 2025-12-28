"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

export function AnimatedCard({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode
  delay?: number
  className?: string
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function GlareCard({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <motion.div className={`relative overflow-hidden ${className}`} whileHover="hover" initial="initial">
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-transparent via-primary/10 to-transparent opacity-0"
        variants={{
          initial: { x: "-100%", y: "-100%" },
          hover: { x: "100%", y: "100%", opacity: 1 },
        }}
        transition={{ duration: 0.6 }}
      />
      {children}
    </motion.div>
  )
}
