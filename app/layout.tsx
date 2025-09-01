import type { Metadata } from 'next'
import '@/styles/global.css'
import Footer from '@/components/footer'
import Navbar from '@/components/navbar'

export const metadata: Metadata = {
  title: 'DevCorner',
  description: 'A tech blog',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
