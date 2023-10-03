import { Outfit } from 'next/font/google'
import Layout from '@/components/Layout'
import './globals.css'

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
      <body className={ `${outfit.className} bg-gray-200 m-5` }>
        <Layout>
          
          { children }
        
        </Layout>
      </body>
    </html>
  )
}
