import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from './components/navbar'
import ProfilePicture from './components/myprofilepic'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Lilia's Blog",
  description: 'Created by jcostadev23 ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='dark:bg-slate-800'>
        <Navbar/>
        <ProfilePicture/>
        {children}</body>
    </html>
  )
}
