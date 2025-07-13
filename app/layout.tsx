import type React from "react"
import type { Metadata } from "next"
import { Libre_Barcode_39 } from "next/font/google"
import { El_Messiri } from "next/font/google"
import "./globals.css"

const inter = Libre_Barcode_39({ subsets: ["latin"], weight: "400" })
const elmessiri = El_Messiri({ subsets: ["latin"], weight: "400" })

export const metadata: Metadata = {
  title: "أبو سيارة - أفضل صباغ في الكويت",
  description: "خدمات الصباغة والدهان المتميزة في الكويت",
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=El+Messiri&family=Libre+Barcode+39&display=swap" rel="stylesheet" />
      </head>
      <body className={inter.className + " " + elmessiri.className}>{children}</body>
    </html >
  )
}
