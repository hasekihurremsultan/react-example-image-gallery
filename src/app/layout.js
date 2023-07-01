import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Simple Image Gallery',
  description: 'I will create an image gallery using react with next.js framework',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} p-6 text-center`}>{children}</body>
    </html>
  )
}
