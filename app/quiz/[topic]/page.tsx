'use client'

import { useParams, useRouter } from 'next/navigation'
import { quizData } from '@/lib/quizData'
import { useEffect, useState, ButtonHTMLAttributes, HTMLAttributes } from 'react'
import { motion, MotionProps } from 'framer-motion'
import Link from 'next/link'

// Type-safe wrappers for motion components
const MotionDiv = (props: HTMLAttributes<HTMLDivElement> & MotionProps) => <motion.div {...props} />
const MotionButton = (props: ButtonHTMLAttributes<HTMLButtonElement> & MotionProps) => <motion.button {...props} />

export default function QuizPage() {
  const { topic } = useParams()
  const router = useRouter()
  const questions = quizData[topic as string]

  const [index, setIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [time, setTime] = useState(15)
  const [answers, setAnswers] = useState<string[]>([])
  const [completed, setCompleted] = useState(false)

  useEffect(() => {
    if (time <= 0) handleNext(null)
    const timer = setTimeout(() => setTime((t) => Math.max(0, t - 1)), 1000)
    return () => clearTimeout(timer)
  }, [time])

  const handleNext = (choice: string | null) => {
    const q = questions[index]
    const correct = choice === q.answer
    if (correct) setScore(score + 1)

    setAnswers((prev) => [
      ...prev,
      `${q.question} — ${choice ?? '⏰ Timeout'} (${correct ? '✅' : '❌'})`
    ])

    if (index + 1 < questions.length) {
      setIndex(index + 1)
      setTime(15)
    } else {
      setCompleted(true)
    }
  }

  const retry = () => {
    setIndex(0)
    setScore(0)
    setTime(15)
    setAnswers([])
    setCompleted(false)
  }

  if (!questions) return <p className="text-center mt-10">❌ Invalid topic.</p>

  if (completed) {
    const tweet = `I scored ${score}/${questions.length} on the ${topic} quiz by Succinct-proverhub! 🧠🚀`
    return (
      <div className="max-w-3xl mx-auto px-6 mt-10">
        <h1 className="text-3xl font-bold mb-4 text-center">✅ Quiz Complete</h1>
        <p className="text-center text-lg mb-4">Score: <strong>{score}</strong> / {questions.length}</p>

        <a
          href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(tweet)}`}
          target="_blank"
          className="text-blue-600 underline block text-center mb-4"
        >
          Share your score on Twitter
        </a>

        <div className="bg-white/90 p-6 rounded-xl shadow-md space-y-2 border border-pink-300">
          <h3 className="text-lg font-bold mb-2">🧾 Answer History:</h3>
          {answers.map((a, i) => (
            <p key={i} className="text-sm text-gray-800">• {a}</p>
          ))}
        </div>

        <div className="flex justify-center gap-4 mt-6">
          <button onClick={retry} className="px-6 py-2 rounded-lg bg-pink-500 text-white hover:bg-pink-600 transition">
            🔁 Try Again
          </button>
          <Link href="/learn" className="text-pink-500 underline self-center">
            🔙 Back to Topics
          </Link>
        </div>
      </div>
    )
  }

  const q = questions[index]

  return (
    <div className="max-w-3xl mx-auto px-6 mt-10">
      <div className="flex justify-between text-sm text-gray-600 mb-4">
        <p>⏱ {time}s</p>
        <p>✅ {score}</p>
      </div>

      <MotionDiv
        key={index}
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="bg-gradient-to-br from-white via-pink-50 to-white p-6 rounded-xl shadow-xl border border-pink-300 mb-6"
      >
        <h2 className="text-xl font-bold mb-4 text-pink-700">❓ {q.question}</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {q.options.map((opt, i) => (
            <MotionButton
              key={i}
              onClick={() => handleNext(opt)}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white border border-pink-200 hover:border-pink-400 text-pink-900 font-medium px-4 py-3 rounded-lg shadow transition"
            >
              {opt}
            </MotionButton>
          ))}
        </div>
      </MotionDiv>
    </div>
  )
}