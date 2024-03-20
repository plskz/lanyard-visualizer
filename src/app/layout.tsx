import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Lanyard Visualizer',
  description: "A service to display your Discord status online using Lanyard's API, free and easy to use! Supports Spotify and every RPCs!",
  icons: [{
    rel: 'icon',
    url: process.env.NODE_ENV === 'production' ? '/favicon.ico' : '/favicon-dev.ico',
  }]
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={`${inter.className} antialiased overflow-hidden`}>
        {children}
        <Analytics />
        <SpeedInsights />

        <svg>
          <filter id='noiseFilter'>
            <feTurbulence
              type='fractalNoise'
              baseFrequency='0.6'
              stitchTiles='stitch'
            />
          </filter>
        </svg>
      </body>
    </html>
  )
}
