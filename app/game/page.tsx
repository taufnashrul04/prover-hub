'use client'
import { useEffect } from 'react'

export default function GameRedirect() {
  useEffect(() => {
    window.location.href = 'https://cbd-game.vercel.app'
  }, [])
  return <p>Redirecting to game...</p>
}
