"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"

export function AnimatedBadge({
  children,
  delay = 0,
  className = "",
  ...props
}: {
  children: React.ReactNode
  delay?: number
  className?: string
  [key: string]: any
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay }}
      whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
      whileTap={{ scale: 0.95 }}
    >
      <Badge className={`cursor-pointer hover:bg-primary/20 transition-colors ${className}`} {...props}>
        {children}
      </Badge>
    </motion.div>
  )
}
