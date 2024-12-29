import './globals.css'
import { Inter } from 'next/font/google'
import type { Metadata, Viewport } from 'next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Stopwatch Timer',
  description: 'A beautiful stopwatch-style timer showing remaining time in the day',
  manifest: '/manifest.json',
}

export const viewport:Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor:'#3498db'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

