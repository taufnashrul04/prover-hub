import { useState, HTMLAttributes } from 'react'
import { motion, MotionProps } from 'framer-motion'
import { JsonRpcProvider, Contract } from 'ethers'
import Link from 'next/link'

type MotionDivProps = HTMLAttributes<HTMLDivElement> & MotionProps
const MotionDiv = (props: MotionDivProps) => <motion.div {...props} />

const API_URL = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:3001/verify'

const modes = [
  { value: 'execute', label: 'Execute' },
  { value: 'prove', label: 'Prove' },
]

const nftTypes = [
  { value: 'steady', label: 'Steady Teddy NFT' },
  { value: 'other', label: 'another nft' },
]

export default function NftVerifierPage() {
  const [form, setForm] = useState({
    ca: '',
    token_id: '',
    wallet: '',
    mode: 'execute',
    nft_type: 'steady',
    rpc_url: '',
  })
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [nftImage, setNftImage] = useState<string | null>(null)

  async function fetchNftImage(ca: string, tokenId: string, rpcUrl: string) {
    try {
      console.log("fetchNftImage called with", { ca, tokenId, rpcUrl })
      const provider = new JsonRpcProvider(rpcUrl)
      const abi = [
        "function tokenURI(uint256 tokenId) view returns (string)"
      ]
      const contract = new Contract(ca, abi, provider)
      let uri = await contract.tokenURI(tokenId)
      console.log("tokenURI:", uri)
      if (uri.startsWith("ipfs://")) uri = uri.replace("ipfs://", "https://ipfs.io/ipfs/")
      const metaRes = await fetch(uri)
      const meta = await metaRes.json()
      console.log("metadata:", meta)
      let imgUrl = meta.image || meta.image_url || ""
      if (imgUrl.startsWith("ipfs://")) imgUrl = imgUrl.replace("ipfs://", "https://ipfs.io/ipfs/")
      console.log("imageUrl:", imgUrl)
      setNftImage(imgUrl)
    } catch (e) {
      console.error("Gagal fetch NFT image", e)
      setNftImage(null)
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setResult(null)
    setError(null)
    setNftImage(null)
    try {
      // Siapkan data POST: jika steady, exclude rpc_url
      const submitData: any = {
        ca: form.ca,
        token_id: form.token_id,
        wallet: form.wallet,
        mode: form.mode,
      }
      if (form.nft_type === 'other') {
        submitData.rpc_url = form.rpc_url
      }
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(submitData),
      })
      const text = await res.text()
      if (!res.ok) {
        setError(text)
      } else {
        setResult(text)
        // Selalu fetch NFT image setelah backend sukses
        const rpcUrl = form.nft_type === 'steady'
          ? "https://rpc.berachain.com"
          : form.rpc_url
        await fetchNftImage(form.ca, form.token_id, rpcUrl)
      }
    } catch (err) {
      setError('Failed to connect to backend.')
    }
    setLoading(false)
  }

  function handleNftTypeChange(val: string) {
    setForm(f => ({
      ...f,
      nft_type: val,
      rpc_url: val === 'steady' ? '' : f.rpc_url,
    }))
  }

  return (
    <main className="flex flex-col items-center justify-center min-h-screen w-full max-w-screen-md mx-auto px-4">
      <section className="w-full flex flex-col items-center gap-4">
        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-sky-700 font-bebas mb-2">
          NFT Succinct Verifier
        </h1>
        <p className="text-gray-600 text-center mb-6 max-w-lg">
          Verify your ownership of Steady Teddy <b>or</b> another NFT in another chain. choose nft type and fill the form.
        </p>
        <form
          onSubmit={handleSubmit}
          className="bg-white/90 rounded-2xl shadow-lg p-8 w-full max-w-md flex flex-col gap-4"
        >
          <div>
            <label htmlFor="nft_type" className="block text-sm font-medium text-sky-800 mb-1">
              Jenis NFT
            </label>
            <select
              id="nft_type"
              name="nft_type"
              value={form.nft_type}
              onChange={e => handleNftTypeChange(e.target.value)}
              className="input w-full border rounded-md p-2 bg-gray-50"
            >
              {nftTypes.map(t => (
                <option key={t.value} value={t.value}>{t.label}</option>
              ))}
            </select>
          </div>
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
          {form.nft_type === 'other' && (
            <div>
              <label htmlFor="rpc_url" className="block text-sm font-medium text-sky-800 mb-1">
                RPC URL (please fill for another nft)
              </label>
              <input
                type="text"
                id="rpc_url"
                name="rpc_url"
                required
                value={form.rpc_url}
                onChange={e => setForm(f => ({ ...f, rpc_url: e.target.value }))}
                className="input w-full border rounded-md p-2 bg-gray-50"
                placeholder="https://rpc.<chain>.com"
              />
            </div>
          )}
          <MotionDiv
            whileTap={{ scale: 0.97 }}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.2 }}
            className={`mt-2 bg-sky-600 hover:bg-sky-700 text-white font-bold rounded-lg py-2 px-4 transition disabled:opacity-50 text-center select-none cursor-pointer ${loading ? 'opacity-60 pointer-events-none' : ''}`}
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
            className="mt-6 bg-gray-100 border border-sky-100 rounded-lg p-4 w-full max-w-md text-sm overflow-x-auto text-gray-700 flex flex-col items-center"
          >
            <pre className="whitespace-pre-wrap text-center mb-2">{
              result.includes("succes create proof") || result.includes("proof verivication succesfull")
                ? "Congrats, you successfully created proof of ownership with SP1!"
                : result
            }</pre>
            {nftImage && (
              <img
                src={nftImage}
                alt="NFT Image"
                className="max-h-60 mt-2 rounded-lg shadow"
                onError={e => (e.currentTarget.style.display = 'none')}
              />
            )}
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
      <Link
        href="/"
        className="mt-12 text-sm text-blue-600 underline text-center block hover:text-blue-800 transition"
      >
        ← Back to Home
      </Link>
    </main>
  )
}