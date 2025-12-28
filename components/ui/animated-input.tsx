"use client"

import { motion } from "framer-motion"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState, type ComponentProps } from "react"

export function AnimatedInput(props: ComponentProps<typeof Input>) {
  const [isFocused, setIsFocused] = useState(false)

  return (
    <motion.div
      animate={{
        scale: isFocused ? 1.02 : 1,
      }}
      transition={{ duration: 0.2 }}
    >
      <Input {...props} onFocus={() => setIsFocused(true)} onBlur={() => setIsFocused(false)} />
    </motion.div>
  )
}

export function AnimatedTextarea(props: ComponentProps<typeof Textarea>) {
  const [isFocused, setIsFocused] = useState(false)

  return (
    <motion.div
      animate={{
        scale: isFocused ? 1.02 : 1,
      }}
      transition={{ duration: 0.2 }}
    >
      <Textarea {...props} onFocus={() => setIsFocused(true)} onBlur={() => setIsFocused(false)} />
    </motion.div>
  )
}
