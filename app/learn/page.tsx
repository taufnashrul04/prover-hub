'use client'

import Image from 'next/image'
import LearnSection from '../../components/LearnSection'
import QuizSection from '../../components/QuizSection'
import { motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'

export default function LearnPage() {
  const { scrollY } = useScroll()
  const leftY = useTransform(scrollY, [0, 300], [0, 30])
  const rightY = useTransform(scrollY, [0, 300], [0, -30])

  return (
    <main className="relative p-6 flex flex-col gap-12 items-center max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold text-center">📘 Learn & Quiz</h1>

      <LearnSection />
      <QuizSection />

      <motion.div
        style={{ y: leftY }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 0.7, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="absolute bottom-0 left-0 w-32 opacity-70 pointer-events-none"
      >
        <Image
          src="/assets/sticker-left.svg"
          alt="Sticker Left"
          width={128}
          height={128}
          className="w-full h-auto"
        />
      </motion.div>

      <motion.div
        style={{ y: rightY }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 0.7, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="absolute bottom-0 right-0 w-32 opacity-70 pointer-events-none"
      >
        <Image
          src="/assets/sticker-right.svg"
          alt="Sticker Right"
          width={128}
          height={128}
          className="w-full h-auto"
        />
      </motion.div>

      <Link
        href="/"
        className="mt-12 text-sm text-blue-600 underline text-center block hover:text-blue-800 transition"
      >
        ← Back to Home
      </Link>
    </main>
  )
}
