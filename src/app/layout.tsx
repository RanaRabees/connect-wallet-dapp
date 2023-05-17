`use client`;
import './globals.css'
import React from 'react'
import { Inter } from 'next/font/google';

const interFonts = Inter({
  subsets: ["latin"],
  weight: ["200", "400", "500", "600", "700", "900"]
})

export const metadata = {
  title: 'Connect Button',
  description: 'Made By RanaRabees',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {


  return (
    <html lang="en">
      <body className={interFonts.className}>
        <div >
        </div>
        <div>
          {children}
        </div>
      </body>
    </html>
  )
}
