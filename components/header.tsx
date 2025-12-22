/**
 * Header Component
 * Modern navigation bar with glassmorphism and advanced animations
 */

"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X, Shield, Github } from "lucide-react"

// Discord Oauth URL and GitHub Repository URL
const DISCORD_OAUTH_URL =
  "https://discord.com/oauth2/authorize?client_id=<CLIENT_ID>&permissions=8&scope=bot%20applications.commands"
const GITHUB_URL = "https://github.com/nayandas69/discord-role-guardian"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const isHomePage = pathname === "/"

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = isHomePage
    ? [
      { href: "#features", label: "Features" },
      { href: "#commands", label: "Commands" },
      { href: "#installation", label: "Installation" },
      { href: "#self-host", label: "Self Host" },
      { href: "#contact", label: "Contact" },
    ]
    : [
      { href: "/", label: "Home" },
      { href: "/documentation", label: "Docs" },
      { href: "/roadmap", label: "Roadmap" },
      { href: "/faq", label: "FAQ" },
    ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 animate-fade-in-down ${scrolled
        ? "bg-background/60 backdrop-blur-xl shadow-lg shadow-primary/5 border-b border-primary/10"
        : "bg-background/40 backdrop-blur-md border-b border-border/50"
        }`}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5 pointer-events-none opacity-50" />

      <nav className="relative mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8">
        <Link href="/" className="group flex items-center gap-3 transition-all duration-300 hover:scale-105">
          <div className="relative">
            <Shield className="h-8 w-8 text-primary transition-all duration-300 group-hover:rotate-12 drop-shadow-[0_0_12px_rgba(88,101,242,0.6)]" />
            <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
            Role Guardian
          </span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group relative px-4 py-2 text-sm font-medium text-muted-foreground transition-all duration-300 hover:text-foreground"
            >
              <span className="relative z-10">{link.label}</span>
              {/* Animated underline */}
              <span className="absolute bottom-1 left-1/2 h-[2px] w-0 bg-gradient-to-r from-primary to-accent transition-all duration-300 group-hover:w-[calc(100%-2rem)] group-hover:left-4" />
              {/* Glow effect on hover */}
              <span className="absolute inset-0 rounded-lg bg-primary/0 transition-all duration-300 group-hover:bg-primary/5 group-hover:shadow-[0_0_20px_rgba(88,101,242,0.1)]" />
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <Button
            variant="outline"
            size="sm"
            asChild
            className="group relative overflow-hidden border-primary/30 bg-transparent transition-all duration-300 hover:scale-105 hover:border-primary hover:bg-primary/10 hover:shadow-lg hover:shadow-primary/20"
          >
            <Link href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <Github className="h-4 w-4 transition-transform duration-300 group-hover:rotate-12" />
              <span>GitHub</span>
              {/* Shine effect */}
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
            </Link>
          </Button>
          <Button
            size="sm"
            asChild
            className="group relative overflow-hidden bg-gradient-to-r from-primary to-accent text-white transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/40"
          >
            <Link
              href={DISCORD_OAUTH_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-20 flex items-center gap-2 text-white"
            >
              <Shield className="h-4 w-4 transition-transform duration-300 group-hover:rotate-12" />
              <span className="font-medium">Add to Discord</span>
              {/* Animated gradient background */}
              <span className="absolute inset-0 z-[-1] bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              {/* Shine effect */}
              <span className="absolute inset-0 z-[-1] bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
            </Link>
          </Button>
        </div>

        <button
          type="button"
          className="group relative lg:hidden p-2 rounded-lg transition-all duration-300 hover:bg-primary/10 hover:scale-110"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className="absolute inset-0 rounded-lg bg-primary/0 group-hover:bg-primary/5 transition-colors duration-300" />
          {mobileMenuOpen ? (
            <X className="relative h-6 w-6 text-foreground transition-all duration-300 rotate-0 group-hover:rotate-90" />
          ) : (
            <Menu className="relative h-6 w-6 text-foreground transition-all duration-300" />
          )}
        </button>
      </nav>

      {mobileMenuOpen && (
        <div className="border-t border-primary/20 bg-background/80 backdrop-blur-xl lg:hidden animate-in slide-in-from-top-5 duration-300">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
          <div className="relative space-y-1 px-4 py-6">
            {navLinks.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                className="group block py-3 px-4 text-muted-foreground transition-all duration-300 hover:text-foreground hover:translate-x-2 rounded-lg hover:bg-primary/10 animate-in slide-in-from-left duration-300"
                onClick={() => setMobileMenuOpen(false)}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <span className="flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  {link.label}
                </span>
              </Link>
            ))}
            <div
              className={`flex flex-col gap-3 ${isHomePage ? "pt-6" : ""} animate-in fade-in duration-500`}
              style={{ animationDelay: "250ms" }}
            >
              <Button
                variant="outline"
                size="sm"
                asChild
                className="group relative overflow-hidden border-primary/30 bg-transparent transition-all duration-300 hover:border-primary hover:bg-primary/10 hover:shadow-lg hover:shadow-primary/20"
              >
                <Link
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  <Github className="h-4 w-4 transition-transform duration-300 group-hover:rotate-12" />
                  <span>GitHub</span>
                </Link>
              </Button>
              <Button
                size="sm"
                asChild
                className="group relative overflow-hidden bg-gradient-to-r from-primary to-accent text-white transition-all duration-300 hover:shadow-xl hover:shadow-primary/40"
              >
                <Link
                  href={DISCORD_OAUTH_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative z-20 flex items-center justify-center gap-2 text-white"
                >
                  <Shield className="h-4 w-4 transition-transform duration-300 group-hover:rotate-12" />
                  <span className="font-medium">Add to Discord</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
