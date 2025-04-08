import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const playfair = Playfair_Display({ 
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'], 
  variable: '--font-playfair' 
})

export const metadata: Metadata = {
  title: 'One Golf Club | Premium Private Members Golf Club',
  description: 'One Golf Club is the ultimate private members club offering playing privileges across 50+ golf courses under one membership with exclusive events and corporate hospitality.',
  keywords: 'One Golf Club, OGC, golf membership, private golf club, corporate golf hospitality, exclusive golf membership, UK golf courses',
  icons: {
    icon: '/media/favicon.png',
    apple: '/media/favicon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
} 