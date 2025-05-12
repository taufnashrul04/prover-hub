'use client'

import { useState } from 'react'
import topics from '@/lib/tweetTopics'
import Link from 'next/link'

export default function TweetPage() {
  const [selected, setSelected] = useState('')
  const [tweet, setTweet] = useState('')
  const [loading, setLoading] = useState(false)

  const generateTweet = async () => {
    if (!selected) return alert('Select a topic first.')

    setLoading(true)
    const res = await fetch(`/api/openrouter?topic=${encodeURIComponent(selected)}`)
    const data = await res.json()
    setTweet(data.tweet || '❌ Failed to generate tweet.')
    setLoading(false)
  }

  const shareTweet = () => {
    const text = `${tweet}  @succinctlabs @0xcrashout`
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`
    window.open(url, '_blank')
  }

  return (
    <main className="max-w-2xl mx-auto p-6 text-center bg-white/70 rounded-xl shadow-lg mt-10">
      <h1 className="text-3xl font-bold mb-4 text-pink-600">Tweet Post Generator</h1>
      <p className="text-md text-black-600 mb-2">Generate tweet post all about succinct here</p>
      <p className="text-sm text-gray-600 mb-2">Select a topic:</p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
        {topics.map((t) => (
          <button
            key={t}
            onClick={() => setSelected(t)}
            className={`rounded px-4 py-2 border text-sm transition ${
              selected === t
                ? 'bg-blue-100 border-blue-500 text-blue-800 font-semibold'
                : 'bg-white border-gray-300 hover:bg-gray-100'
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      <button
        disabled={loading || !selected}
        onClick={generateTweet}
        className="bg-pink-500 hover:bg-pink-600 text-white font-medium px-5 py-2 rounded transition disabled:opacity-60"
      >
        {loading ? 'Thinking... 🤖' : '🎲 Generate Tweet'}
      </button>

      {tweet && (
        <div className="mt-6">
          <p className="italic text-lg text-gray-700 mb-4">{tweet}</p>
          <button
            onClick={shareTweet}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
          >
            🐦 Share on Twitter
          </button>
        </div>
      )}

      <Link
        href="/"
        className="block mt-10 text-sm text-blue-600 underline hover:text-blue-800"
      >
        ← Back to Home
      </Link>
    </main>
  )
}
