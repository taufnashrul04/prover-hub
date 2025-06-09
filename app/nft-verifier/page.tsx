"use client";
import { useState, HTMLAttributes } from "react";
import { motion, MotionProps } from "framer-motion";
import Link from "next/link";

type MotionDivProps = HTMLAttributes<HTMLDivElement> & MotionProps;
const MotionDiv = (props: MotionDivProps) => <motion.div {...props} />;

const API_URL =
  process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:3001/verify";

const modes = [
  { value: "execute", label: "Execute" },
  { value: "prove", label: "Prove" },
];

const nftTypes = [
  { value: "steady", label: "Steady Teddy NFT" },
  { value: "other", label: "Another NFT" },
];

const STEADY_TEDDY_CA = "0x88888888a9361f15aadbaca355a6b2938c6a674e";

interface Hashes {
  request_hash?: string;
  transaction_hash?: string;
}

interface VerifyResponse {
  success: boolean;
  message: string;
  hashes?: Hashes;
  proof_data?: any;
  stdout?: string;
  stderr?: string;
}

export default function NftVerifierPage() {
  const [form, setForm] = useState({
    ca: "",
    token_id: "",
    wallet: "",
    mode: "execute",
    nft_type: "steady",
    rpc_url: "",
  });
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<VerifyResponse | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [nftImage, setNftImage] = useState<string | null>(null);

  async function fetchNftImage(
    ca: string,
    tokenId: string,
    rpcUrl: string
  ): Promise<void> {
    try {
      const { JsonRpcProvider, Contract } = await import("ethers");
      const provider = new JsonRpcProvider(rpcUrl);
      const abi = [
        "function tokenURI(uint256 tokenId) view returns (string)",
      ];
      const contract = new Contract(ca, abi, provider);
      let uri = await contract.tokenURI(tokenId);
      if (uri.startsWith("ipfs://"))
        uri = uri.replace("ipfs://", "https://ipfs.io/ipfs/");
      const metaRes = await fetch(uri);
      const meta = await metaRes.json();
      let imgUrl = meta.image || meta.image_url || "";
      if (imgUrl.startsWith("ipfs://"))
        imgUrl = imgUrl.replace("ipfs://", "https://ipfs.io/ipfs/");
      setNftImage(imgUrl);
    } catch (e) {
      setNftImage(null);
    }
  }

  function downloadProofFile(proofData: any, requestHash: string) {
    const blob = new Blob([JSON.stringify(proofData, null, 2)], {
      type: 'application/json'
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `proof_${requestHash.replace('0x', '')}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setResult(null);
    setError(null);
    setNftImage(null);

    try {
      // Untuk steady, CA tidak dikirim ke backend (backend akan pakai default)
      const submitData: any = {
        wallet: form.wallet,
        token_id: form.token_id,
        mode: form.mode,
      };

      if (form.nft_type === "other") {
        submitData.ca = form.ca;
        submitData.rpc_url = form.rpc_url;
      }

      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(submitData),
      });

      const responseData: VerifyResponse = await res.json();

      if (!res.ok || !responseData.success) {
        setError(responseData.message || responseData.stderr || "Verification failed");
      } else {
        setResult(responseData);

        // Fetch NFT image on success
        const ca = form.nft_type === "steady" ? STEADY_TEDDY_CA : form.ca;
        const rpcUrl = form.nft_type === "steady"
          ? "https://rpc.berachain.com"
          : form.rpc_url;
        await fetchNftImage(ca, form.token_id, rpcUrl);
      }
    } catch (err) {
      setError("Failed to connect to backend.");
    }

    setLoading(false);
  }

  function handleNftTypeChange(val: string) {
    setForm((f) => ({
      ...f,
      nft_type: val,
      ca: val === "steady" ? "" : f.ca,
      rpc_url: val === "steady" ? "" : f.rpc_url,
    }));
  }

  // Always use succinct explorer for tx hash
  function getTxExplorerUrl(txHash: string | undefined) {
    if (!txHash) return null;
    return `https://explorer.succinct.xyz/tx/${txHash}`;
  }

  return (
    <main className="flex flex-col items-center justify-center min-h-screen w-full max-w-screen-md mx-auto px-4">
      <section className="w-full flex flex-col items-center gap-4">
        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-sky-700 font-bebas mb-2">
          NFT Succinct Verifier
        </h1>
        <p className="text-gray-600 text-center mb-6 max-w-lg">
          Verify your ownership of Steady Teddy <b>or</b> another NFT on any chain. Choose the NFT type and fill the required data.
        </p>
        <form
          onSubmit={handleSubmit}
          className="bg-white/90 rounded-2xl shadow-lg p-8 w-full max-w-md flex flex-col gap-4"
        >
          <div>
            <label htmlFor="nft_type" className="block text-sm font-medium text-sky-800 mb-1">
              NFT Type
            </label>
            <select
              id="nft_type"
              name="nft_type"
              value={form.nft_type}
              onChange={(e) => handleNftTypeChange(e.target.value)}
              className="input w-full border rounded-md p-2 bg-gray-50"
            >
              {nftTypes.map((t) => (
                <option key={t.value} value={t.value}>
                  {t.label}
                </option>
              ))}
            </select>
          </div>
          {form.nft_type === "other" && (
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
                onChange={(e) =>
                  setForm((f) => ({ ...f, ca: e.target.value }))
                }
                className="input w-full border rounded-md p-2 bg-gray-50"
                placeholder="0x..."
              />
            </div>
          )}
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
              onChange={(e) =>
                setForm((f) => ({ ...f, token_id: e.target.value }))
              }
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
              onChange={(e) =>
                setForm((f) => ({ ...f, wallet: e.target.value }))
              }
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
              onChange={(e) =>
                setForm((f) => ({ ...f, mode: e.target.value }))
              }
              className="input w-full border rounded-md p-2 bg-gray-50"
            >
              {modes.map((m) => (
                <option key={m.value} value={m.value}>
                  {m.label}
                </option>
              ))}
            </select>
          </div>
          {form.nft_type === "other" && (
            <div>
              <label htmlFor="rpc_url" className="block text-sm font-medium text-sky-800 mb-1">
                RPC URL (required for Another NFT)
              </label>
              <input
                type="text"
                id="rpc_url"
                name="rpc_url"
                required
                value={form.rpc_url}
                onChange={(e) =>
                  setForm((f) => ({ ...f, rpc_url: e.target.value }))
                }
                className="input w-full border rounded-md p-2 bg-gray-50"
                placeholder="https://rpc.<chain>.com"
              />
            </div>
          )}
          <MotionDiv
            whileTap={{ scale: 0.97 }}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.2 }}
            className={`mt-2 bg-sky-600 hover:bg-sky-700 text-white font-bold rounded-lg py-2 px-4 transition disabled:opacity-50 text-center select-none cursor-pointer ${
              loading ? "opacity-60 pointer-events-none" : ""
            }`}
            onClick={!loading ? handleSubmit : undefined}
            tabIndex={0}
            role="button"
            aria-disabled={loading}
          >
            {loading ? "Processing..." : "Verify"}
          </MotionDiv>
        </form>

        {result && result.success && (
          <MotionDiv
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 bg-green-50 border border-green-200 rounded-lg p-4 w-full max-w-md text-sm flex flex-col items-center"
          >
            <h3 className="text-green-800 font-semibold mb-2">Verification Successful!</h3>
            <p className="text-green-700 text-center mb-3">{result.message}</p>

            {/* Lengkap: Tampilkan request_hash dan transaction_hash */}
            {result.hashes && (
              <div className="mb-3 w-full">
                {result.hashes.request_hash && (
                  <>
                    <p className="text-green-800 font-medium mb-1">Request Hash:</p>
                    <p className="text-green-600 font-mono text-xs break-all bg-green-100 p-2 rounded">
                      {result.hashes.request_hash}
                    </p>
                  </>
                )}
                {result.hashes.transaction_hash && (
                  <>
                    <p className="text-green-800 font-medium mb-1 mt-2">Transaction Hash:</p>
                    <p className="text-green-600 font-mono text-xs break-all bg-green-100 p-2 rounded flex items-center gap-2">
                      {result.hashes.transaction_hash}
                      {/* Direct link to succinct explorer */}
                      <a
                        href={getTxExplorerUrl(result.hashes.transaction_hash)!}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-2 text-blue-600 underline text-xs font-medium hover:text-blue-800"
                      >
                        View on Explorer
                      </a>
                    </p>
                  </>
                )}
              </div>
            )}

            {result.proof_data && (
              <div className="mb-3 w-full">
                <button
                  onClick={() => downloadProofFile(result.proof_data, result.hashes?.request_hash || 'proof')}
                  className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md text-sm font-medium transition"
                >
                  Download Proof JSON
                </button>
              </div>
            )}

            {result.stdout && (
              <details className="w-full mt-2">
                <summary className="text-green-800 font-medium cursor-pointer">Technical Details</summary>
                <pre className="text-green-600 text-xs mt-2 p-2 bg-green-100 rounded overflow-x-auto whitespace-pre-wrap">
                  {result.stdout}
                </pre>
              </details>
            )}

            {nftImage && (
              <img
                src={nftImage}
                alt="NFT Image"
                className="max-h-60 mt-4 rounded-lg shadow"
                onError={(e) => (e.currentTarget.style.display = "none")}
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
            <h3 className="font-semibold mb-1">Verification Failed</h3>
            <p>{error}</p>
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
  );
}