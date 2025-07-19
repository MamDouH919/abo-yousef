import type React from "react"
import type { Metadata } from "next"
import { Libre_Barcode_39, El_Messiri } from "next/font/google"
import "./globals.css"
import ThemeProv from "@/context/ThemeProv"

const inter = Libre_Barcode_39({ subsets: ["latin"], weight: "400" })
const elmessiri = El_Messiri({ subsets: ["latin"], weight: "400" })

export const metadata: Metadata = {
  title: "أبو يوسف - أفضل صباغ في الكويت",
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
      <head />
      <body className={`${inter.className} ${elmessiri.className}`}>
        <ThemeProv>
          {children}
        </ThemeProv>
      </body>
    </html>
  )
}
