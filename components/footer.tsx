/**
 * Footer Component
 * Site footer with links and copyright
 */

import Link from "next/link"
import { Shield, Github, Heart, MessageCircle, ExternalLink } from "lucide-react"

const GITHUB_URL = "https://github.com/nayandas69/discord-role-guardian"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = [
    { href: "/documentation", label: "Documentation" },
    { href: "/faq", label: "FAQ" },
    { href: "/changelog", label: "Changelog" },
    { href: "/status", label: "Status" },
    { href: "/contributors", label: "Contributors" },
    { href: "/terms-of-service", label: "Terms of Service" },
    { href: "/privacy-policy", label: "Privacy Policy" },
  ]

  const socialLinks = [
    { href: GITHUB_URL, icon: Github, label: "GitHub" },
    { href: "#contact", icon: MessageCircle, label: "Discord" },
  ]

  return (
    <footer className="relative border-t border-border/50 bg-gradient-to-b from-card to-card/50 backdrop-blur-sm">
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 opacity-50" />

      <div className="relative mx-auto max-w-7xl px-4 py-12 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid gap-12 md:grid-cols-3">
          {/* Logo & Description - Added fade-in animation and enhanced styling */}
          <div className="flex flex-col gap-4 animate-fade-in">
            <Link href="/" className="group flex items-center gap-2 transition-transform hover:scale-105">
              <div className="rounded-lg bg-primary/10 p-2 transition-all group-hover:bg-primary/20 group-hover:shadow-lg group-hover:shadow-primary/20">
                <Shield className="h-6 w-6 text-primary transition-transform group-hover:rotate-12" />
              </div>
              <span className="text-xl font-bold text-foreground">Discord Role Guardian</span>
            </Link>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Open source Discord bot for advanced server management and role protection. Keep your community safe and
              organized.
            </p>
            {/* Social Links - Added social media icons with hover effects */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group rounded-lg bg-primary/10 p-2.5 transition-all hover:bg-primary hover:shadow-lg hover:shadow-primary/30"
                  aria-label={social.label}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <social.icon className="h-5 w-5 text-primary transition-colors group-hover:text-primary-foreground" />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links - Added staggered animation and better hover effects */}
          <div className="flex flex-col gap-4 animate-fade-in-up" style={{ animationDelay: "200ms" }}>
            <h3 className="text-lg font-semibold text-foreground">Quick Links</h3>
            <nav className="flex flex-col gap-2">
              {footerLinks.map((link, index) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group flex items-center gap-2 text-sm text-muted-foreground transition-all hover:translate-x-1 hover:text-primary"
                  style={{ animationDelay: `${300 + index * 50}ms` }}
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-primary/50 transition-all group-hover:w-3 group-hover:bg-primary" />
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Resources - Added resource section with animations */}
          <div className="flex flex-col gap-4 animate-fade-in-up" style={{ animationDelay: "400ms" }}>
            <h3 className="text-lg font-semibold text-foreground">Resources</h3>
            <div className="flex flex-col gap-3">
              <Link
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-lg border border-border/50 bg-card/50 p-3 transition-all hover:border-primary/50 hover:bg-card hover:shadow-lg hover:shadow-primary/10"
              >
                <div className="flex items-center gap-2">
                  <Github className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium text-foreground">View on GitHub</span>
                  <ExternalLink className="ml-auto h-3.5 w-3.5 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
                </div>
                <p className="mt-1 text-xs text-muted-foreground">100% open source • Check code, issues & features</p>
              </Link>
              <div className="rounded-lg border border-border/50 bg-card/50 p-3">
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium text-foreground">MIT License</span>
                </div>
                <p className="mt-1 text-xs text-muted-foreground">Free and open source software</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar - Enhanced copyright section with animated heart */}
        <div className="mt-12 border-t border-border/50 pt-8 animate-fade-in" style={{ animationDelay: "600ms" }}>
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="flex items-center gap-1.5 text-sm text-muted-foreground">
              Made with
              <Heart className="h-4 w-4 animate-pulse text-red-500" fill="currentColor" />
              by{" "}
              <Link
                href="https://github.com/nayandas69"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-primary transition-all hover:underline hover:underline-offset-4"
              >
                nayandas69
              </Link>
            </p>
            <p className="text-sm text-muted-foreground">
              &copy; {currentYear} Discord Role Guardian. All rights reserved.
            </p>
          </div>
        </div>
      </div>

      {/* Decorative bottom accent - Added gradient accent line */}
      <div className="h-1 w-full bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
    </footer>
  )
}
