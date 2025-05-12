'use client'

import { useState, useEffect } from 'react'
import { quizData } from '@/lib/quizData'

const Quiz = ({ topic }: { topic: string }) => {
  const questions = quizData[topic]
  const [index, setIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [time, setTime] = useState(15)
  const [showScore, setShowScore] = useState(false)

  useEffect(() => {
    if (time <= 0) {
      handleNext(false)
    }
    const timer = setTimeout(() => {
      setTime((t) => Math.max(0, t - 1))
    }, 1000)
    return () => clearTimeout(timer)
  }, [time])

  const handleNext = (correct: boolean) => {
    if (correct) setScore(score + 1)

    const isLast = index + 1 >= questions.length
    if (!isLast) {
      setIndex(index + 1)
      setTime(15)
    } else {
      setShowScore(true)
    }
  }

  if (!questions) return <p className="text-center">No questions found for this topic.</p>

  if (showScore) {
    const tweet = `I scored ${score}/${questions.length} on a ${topic} quiz! 💡`
    return (
      <div className="text-center mt-10">
        <h2 className="text-2xl font-bold mb-4">🎉 Quiz Completed!</h2>
        <p className="mb-4 text-lg">Score: <strong>{score}</strong> / {questions.length}</p>
        <a
          className="text-blue-600 underline"
          href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(tweet)}`}
          target="_blank"
        >
          Share on Twitter
        </a>
      </div>
    )
  }

  const q = questions[index]

  return (
    <div className="text-center mt-6">
      <h3 className="text-xl font-semibold mb-2">{q.question}</h3>
      <p className="text-sm text-gray-600 mb-3">⏱ {time}s remaining</p>
      <div className="grid grid-cols-2 gap-3 max-w-lg mx-auto mb-4">
        {q.options.map((opt, i) => (
          <button
            key={i}
            onClick={() => handleNext(opt === q.answer)}
            className="bg-white p-3 rounded-lg hover:bg-green-100"
          >
            {opt}
          </button>
        ))}
      </div>
      <p className="text-sm text-gray-700">
        Score: <strong>{score}</strong> / {questions.length}
      </p>
    </div>
  )
}
export default Quiz
