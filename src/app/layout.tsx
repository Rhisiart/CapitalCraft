
import Search from '@/components/layout/header/search'
import Sidebar from '@/components/layout/sidebar/sidebar'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='bg-white'>
          <div>
            <Sidebar />
            <div className="pl-72">
              <div className="px-8 flex items-center h-20 z-40 top-0 sticky">
                <Search />
              </div>
              <main className="bg-violet-75/30">
                <div className="px-10 py-6 h-91screen">
                  {children}
                </div>
              </main>
            </div>
          </div>
        </div>
      </body>
    </html>
  )
}
