import '../styles/globals.css'
import type { Metadata } from 'next'
//import { Inter } from 'next/font/google'

//const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'B3 Zola Lab',
  description: 'B3 Zola Lab',
}

export default function RootLayout(props:any) {
  return (
    <html lang="en">
      <body>{props.children}</body>
    </html>
  )
}
