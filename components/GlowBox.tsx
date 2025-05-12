'use client'

import { motion, MotionProps } from 'framer-motion'
import { ReactNode, HTMLAttributes, MouseEventHandler, useState } from 'react'

// Fix: wrapper component with proper props type
const MotionDiv = (props: HTMLAttributes<HTMLDivElement> & MotionProps) => <motion.div {...props} />

export default function GlowBox({
  children,
  className = '',
}: {
  children: ReactNode
  className?: string
}) {
  const [clicked, setClicked] = useState(false)

  const handleClick: MouseEventHandler<HTMLDivElement> = () => {
    setClicked(true)
    setTimeout(() => setClicked(false), 300)
  }

  return (
    <MotionDiv
      onClick={handleClick}
      whileHover={{ scale: 1.03 }}
      animate={{
        scale: clicked ? 0.97 : 1,
        boxShadow: clicked
          ? '0 0 20px 6px rgba(59,130,246,0.5)'
          : '0 0 0px transparent',
      }}
      transition={{ duration: 0.3 }}
      className={`transition-all duration-300 ease-in-out ${className}`}
    >
      {children}
    </MotionDiv>
  )
}