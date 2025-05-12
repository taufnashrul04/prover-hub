'use client'

import { motion } from 'framer-motion'
import { ReactNode, useState } from 'react'

export default function GlowBox({
  children,
  className = '',
}: {
  children: ReactNode
  className?: string
}) {
  const [clicked, setClicked] = useState(false)

  const handleClick = () => {
    setClicked(true)
    setTimeout(() => setClicked(false), 300)
  }

  return (
    <motion.div
      onClick={handleClick}
      whileHover={{ scale: 1.03 }}
      animate={{
        scale: clicked ? 0.97 : 1,
        boxShadow: clicked
          ? '0 0 20px 6px rgba(59,130,246,0.5)' // blue-500 glow
          : '0 0 0px transparent',
      }}
      transition={{ duration: 0.3 }}
      className={`transition-all duration-300 ease-in-out ${className}`}
    >
      {children}
    </motion.div>
  )
}
