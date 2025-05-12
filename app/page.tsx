'use client'

import Link from 'next/link'
import { motion, MotionProps } from 'framer-motion'
import { useState, HTMLAttributes } from 'react'

// Fix: extend div props + MotionProps
type MotionDivProps = HTMLAttributes<HTMLDivElement> & MotionProps
const MotionDiv = (props: MotionDivProps) => <motion.div {...props} />

export default function HomePage() {
  const cards = [
    {
      title: 'Learn and quiz',
      desc: 'learn and sharpen your knowledge about succinct',
      href: '/learn',
      icon: '/assets/book.svg',
    },
    {
      title: 'Twitter post',
      desc: 'Generate your tweet post about succinct',
      href: '/tweet',
      icon: '/assets/twitter.svg',
    },
    {
      title: 'crab bird dog',
      desc: 'mini funny-game like rock paper scissor',
      href: '/game',
      icon: '/assets/gamepad.svg',
    },
    {
      title: 'Meme maker & stats',
      desc: 'succinct meme maker and show stats by @sptnode',
      href: '/meme',
      icon: '/assets/meme.svg',
    },
  ]

  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  return (
    <main className="flex flex-col items-center justify-center gap-8 w-full max-w-screen-xl mx-auto">
      <h1 className="text-center font-bold tracking-wide leading-tight">
        <span className="text-5xl sm:text-6xl text-black uppercase block font-bebas">
          SUCCINCT
        </span>
        <br />
        <span className="text-6xl sm:text-7xl text-black px-3 py-1 inline-block rounded-md mt-2 font-bebas">
          Prover Hub
        </span>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {cards.map(({ title, desc, href, icon }, i) => (
          <Link key={i} href={href} className="no-underline">
            <MotionDiv
              whileTap={{ scale: 0.97 }}
              whileHover={{ scale: 1.03 }}
              animate={{ boxShadow: '0 0 12px rgba(59,130,246,0.5)' }}
              transition={{ duration: 0.3 }}
              className="bg-white/80 backdrop-blur-md rounded-xl shadow-md p-6 w-72 text-center cursor-pointer"
            >
              <img src={icon} alt={title} className="w-10 h-10 mx-auto mb-2" />
              <h3 className="text-xl font-semibold text-teal-600">{title}</h3>
              <p className="text-sm mt-1">{desc}</p>
            </MotionDiv>
          </Link>
        ))}
      </div>
    </main>
  )
}
