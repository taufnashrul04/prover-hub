'use client'

import { useState, HTMLAttributes } from 'react'
import { motion, MotionProps } from 'framer-motion'

// Komponen MotionDiv dengan props yang kompatibel (pattern yang kamu pakai)
type MotionDivProps = HTMLAttributes<HTMLDivElement> & MotionProps
const MotionDiv = (props: MotionDivProps) => <motion.div {...props} />

const API_URL = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:3001/verify'

const modes = [
  { value: 'execute', label: 'Execute' },
  { value: 'prove', label: 'Prove' },
]

export default function NftVerifierPage() {
  const [form, setForm] = useState({
    ca: '',
    token_id: '',
    wallet: '',
    mode: 'execute',
  })
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setResult(null)
    setError(null)
    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const text = await res.text()
      if (!res.ok) {
        setError(text)
      } else {
        setResult(text)
      }
    } catch (err) {
      setError('Failed to connect to backend.')
    }
    setLoading(false)
  }

  return (
    <main className="flex flex-col items-center justify-center min-h-screen w-full max-w-screen-md mx-auto px-4">
      <section className="w-full flex flex-col items-center gap-4">
        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-sky-700 font-bebas mb-2">
          NFT Succinct Verifier
        </h1>
        <p className="text-gray-600 text-center mb-6 max-w-lg">
          Verify NFT ownership or generate proof easily. Input your contract address, token ID, wallet address, and choose a mode.
        </p>
        <form
          onSubmit={handleSubmit}
          className="bg-white/90 rounded-2xl shadow-lg p-8 w-full max-w-md flex flex-col gap-4"
        >
          <div>
            <label htmlFor="ca" className="block text-sm font-medium text-sky-800 mb-1">
              Contract Address (CA)
            </label>
            <input
              type="text"
              id="ca"
              name="ca"
              required
              value={form.ca}
              onChange={e => setForm(f => ({ ...f, ca: e.target.value }))}
              className="input w-full border rounded-md p-2 bg-gray-50"
              placeholder="0x..."
            />
          </div>
          <div>
            <label htmlFor="token_id" className="block text-sm font-medium text-sky-800 mb-1">
              Token ID
            </label>
            <input
              type="number"
              id="token_id"
              name="token_id"
              required
              value={form.token_id}
              onChange={e => setForm(f => ({ ...f, token_id: e.target.value }))}
              className="input w-full border rounded-md p-2 bg-gray-50"
              placeholder="1234"
            />
          </div>
          <div>
            <label htmlFor="wallet" className="block text-sm font-medium text-sky-800 mb-1">
              Wallet Address
            </label>
            <input
              type="text"
              id="wallet"
              name="wallet"
              required
              value={form.wallet}
              onChange={e => setForm(f => ({ ...f, wallet: e.target.value }))}
              className="input w-full border rounded-md p-2 bg-gray-50"
              placeholder="0x..."
            />
          </div>
          <div>
            <label htmlFor="mode" className="block text-sm font-medium text-sky-800 mb-1">
              Mode
            </label>
            <select
              id="mode"
              name="mode"
              value={form.mode}
              onChange={e => setForm(f => ({ ...f, mode: e.target.value }))}
              className="input w-full border rounded-md p-2 bg-gray-50"
            >
              {modes.map(m => (
                <option key={m.value} value={m.value}>{m.label}</option>
              ))}
            </select>
          </div>
          {/* Gunakan MotionDiv sebagai pengganti motion.button */}
          <MotionDiv
            whileTap={{ scale: 0.97 }}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.2 }}
            className={`mt-2 bg-sky-600 hover:bg-sky-700 text-white font-bold rounded-lg py-2 px-4 transition disabled:opacity-50 text-center select-none cursor-pointer ${loading ? 'opacity-60 pointer-events-none' : ''}`}
            // Simulasi tombol: gunakan div, tapi submit form di onClick
            onClick={!loading ? handleSubmit : undefined}
            tabIndex={0}
            role="button"
            aria-disabled={loading}
          >
            {loading ? 'Processing...' : 'Verify'}
          </MotionDiv>
        </form>
        {result && (
          <MotionDiv
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 bg-gray-100 border border-sky-100 rounded-lg p-4 w-full max-w-md text-sm overflow-x-auto text-gray-700"
          >
            <pre className="whitespace-pre-wrap">{result}</pre>
          </MotionDiv>
        )}
        {error && (
          <MotionDiv
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 text-red-700 bg-red-50 border border-red-200 rounded-lg p-4 w-full max-w-md"
          >
            {error}
          </MotionDiv>
        )}
      </section>
    </main>
  )
}