import { NextRequest, NextResponse } from 'next/server'
import axios from 'axios'
import topics from '@/lib/tweetTopics'

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const topic = searchParams.get('topic') || topics[Math.floor(Math.random() * topics.length)]

  try {
    const response = await axios.post(
      'https://openrouter.ai/api/v1/chat/completions',
      {
        model: 'anthropic/claude-3.5-haiku',
        messages: [
          {
            role: 'system',
            content:
              'You are a crypto educator and enthusiast. Write a medium-length educational tweet and attraction all people (max 150 characters) about Succinct based on  blogs(https://blog.succinct.xyz/), and docs(https://docs.succinct.xyz/docs/network/what-is-succinct). No hashtags. ',
          },
          {
            role: 'user',
            content: `Write a tweet about ${topic}.`,
          },
        ],
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
          'HTTP-Referer': 'https://succincthub.vercel.app', // replace with your deployed domain
          'Content-Type': 'application/json',
        },
      }
    )

    const tweet = response.data.choices?.[0]?.message?.content?.trim()
    return NextResponse.json({ tweet })
  } catch (err: any) {
    console.error('Tweet generation error:', err.response?.data || err.message)
    return NextResponse.json({ error: 'Failed to generate tweet' }, { status: 500 })
  }
}
