import type React from "react"
/**
 * Discord Role Guardian - Website Layout
 * Root layout with metadata and fonts
 * Author: nayandas69
 */

import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Discord Role Guardian | Open Source Discord Bot",
  description:
    "A powerful open-source Discord bot featuring reaction roles, welcome/leave messages, leveling system, ticket system, and scheduled messages. Self-host with Docker or add directly to your server.",
  keywords: ["Discord", "bot", "reaction roles", "leveling", "tickets", "open source", "self-host", "Docker"],
  authors: [{ name: "nayandas69", url: "https://github.com/nayandas69" }],
  creator: "nayandas69",
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
  openGraph: {
    title: "Discord Role Guardian",
    description: "Open source Discord bot with reaction roles, leveling, tickets & more",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Discord Role Guardian",
    description: "Open source Discord bot with reaction roles, leveling, tickets & more",
  },
}

export const viewport: Viewport = {
  themeColor: "#5865F2",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark" data-scroll-behavior="smooth">
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
