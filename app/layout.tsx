import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'I-Tix | Welcome',
  description: 'Ticketing system for I-Gate 2023',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='overflow-auto bg-zinc-800 text-white border border-white border-solid border-4 m-2 font-mono'>
        <Header />
        <main className='relative'>
          {children}
        </main>        
        <Footer />
      </body>
    </html>
  )
}
