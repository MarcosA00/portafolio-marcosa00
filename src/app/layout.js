import { Outfit } from 'next/font/google'
import './globals.css'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const outfit = Outfit({
  weight: ['400', '700', '900'],
  subsets: ['latin']
})

export const metadata = {
  title: 'Marcos Aaron CR',
  description: 'Portafolio personal con NEXT.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${outfit.className} bg-gray-200`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
