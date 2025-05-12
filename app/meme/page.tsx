'use client'
import { useEffect } from 'react'

export default function MemeRedirect() {
  useEffect(() => {
    window.location.href = 'https://succinct-world.xyz'
  }, [])
  return <p>Redirecting to succinct world...</p>
}
