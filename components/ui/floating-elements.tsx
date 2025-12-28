"use client"

import { motion } from "framer-motion"
import { Code, Cpu, Database, Globe, Layout, Smartphone } from "lucide-react"

export const FloatingIcons = () => {
  const icons = [Code, Cpu, Database, Globe, Layout, Smartphone]

  return (
    <div className="absolute inset-0 pointer-events-none">
      {icons.map((Icon, i) => (
        <motion.div
          key={i}
          className="absolute text-primary/20"
          initial={{
            x: Math.random() * 100 + "%",
            y: Math.random() * 100 + "%",
          }}
          animate={{
            y: ["-20px", "20px", "-20px"],
            rotate: [0, 360],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          style={{
            left: `${Math.random() * 90}%`,
            top: `${Math.random() * 90}%`,
          }}
        >
          <Icon size={Math.random() * 20 + 20} />
        </motion.div>
      ))}
    </div>
  )
}
