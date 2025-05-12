'use client'

import Link from 'next/link'
import { useState } from 'react'
import { motion } from 'framer-motion'

const topics = [
  { id: 'Succinct', title: 'Succinct', description: 'ZK-powered proof network' },
  { id: 'SP1zkVM', title: 'SP1 zkVM', description: 'Succinct’s zk virtual machine' },
  { id: 'prover', title: 'Prover', description: 'Actors who generate zk proofs' },
  { id: 'RWAusecase', title: 'RWA Use Case', description: 'Real-world assets and ZK' },
  { id: 'SP12FA', title: 'SP1 2FA', description: '2FA with zero knowledge' },
  { id: 'SP1turbo', title: 'SP1 Turbo', description: 'Performance enhancements' },
  { id: 'OPSTACK', title: 'OP Stack', description: 'Optimism modular rollup stack' },
  { id: 'SP1SOL', title: 'SP1 + Solidity', description: 'SP1 contracts from Solidity' },
  { id: 'IBCEureka', title: 'IBC Eureka', description: 'ZK for Cosmos interop' },
  { id: 'vApps', title: 'vApps', description: 'Verifiable apps built with ZK' },
]

const MotionLink = motion(Link)

export default function QuizSection() {
  const [activeId, setActiveId] = useState<string | null>(null)

  return (
    <section className="relative flex flex-col items-center gap-6 mt-12">
      <div className="text-lg font-bold bg-white/90 px-6 py-2 rounded shadow border border-pink-300">
        🧠 Quiz
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-4">
        {topics.map(({ id, title, description }, i) => (
          <motion.div
            key={id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
          >
            <MotionLink
              href={`/quiz/${id}`}
              onClick={() => setActiveId(id)}
              whileTap={{ scale: 0.97 }}
              whileHover={{ scale: 1.03 }}
              animate={{ boxShadow: '0 0 12px rgba(59,130,246,0.5)' }}
              transition={{ duration: 0.3 }}
              className={`block bg-gradient-to-br from-white to-pink-50 border rounded-xl p-6 text-center shadow-md transition
              ${activeId === id ? 'border-pink-400 shadow-lg ring-2 ring-pink-300' : 'border-pink-200 hover:shadow-pink-200'}`}
            >
              <h3 className="text-lg font-semibold mb-2 text-pink-700">{title}</h3>
              <p className="text-sm text-gray-600">{description}</p>
            </MotionLink>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
