"use client"

import * as React from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"
import { Button, type ButtonProps } from "@/components/ui/button"

export const MagneticButton = React.forwardRef<HTMLButtonElement, ButtonProps>(({ children, ...props }, ref) => {
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const springConfig = { damping: 15, stiffness: 150 }
  const springX = useSpring(x, springConfig)
  const springY = useSpring(y, springConfig)

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect()
    const centerX = left + width / 2
    const centerY = top + height / 2
    x.set(clientX - centerX)
    y.set(clientY - centerY)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="inline-block"
    >
      <Button ref={ref} {...props}>
        {children}
      </Button>
    </motion.div>
  )
})
MagneticButton.displayName = "MagneticButton"
