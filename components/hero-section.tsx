/**
 * Hero Section Component
 * Main landing section with bot introduction
 */

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Shield, Github, ArrowRight } from "lucide-react"

// Discord OAuth URL and GitHub Repository URL
const DISCORD_OAUTH_URL =
  "https://discord.com/oauth2/authorize?client_id=<CLIENT_ID>&permissions=8&scope=bot%20applications.commands"
const GITHUB_URL = "https://github.com/nayandas69/discord-role-guardian"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-32">
      {/* Background gradient effect */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-primary/20 blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/4 right-1/4 h-64 w-64 rounded-full bg-accent/15 blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute top-1/3 right-1/3 h-48 w-48 rounded-full bg-success/10 blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-1.5 animate-scale-in shadow-lg shadow-success/10">
            <span className="h-2 w-2 rounded-full bg-success animate-pulse" />
            <span className="text-sm text-muted-foreground">Open Source & Free</span>
          </div>

          {/* Main Heading */}
          <h1 className="mx-auto max-w-4xl text-4xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl text-balance animate-fade-in-up">
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(88,101,242,0.3)]">
              Discord Role Guardian
            </span>
            <br />
            <span className="text-foreground">Protect & Manage Your Server</span>
          </h1>

          {/* Description */}
          <p
            className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty animate-fade-in-up"
            style={{ animationDelay: "0.2s", opacity: 0, animationFillMode: "forwards" }}
          >
            A powerful open-source Discord bot featuring reaction roles, welcome/leave messages, leveling system, ticket
            support, and scheduled messages. Self-host with Docker or add directly to your server.
          </p>

          {/* CTA Buttons */}
          <div
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row animate-fade-in-up"
            style={{ animationDelay: "0.4s", opacity: 0, animationFillMode: "forwards" }}
          >
            <Button
              size="lg"
              className="gap-2 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/40 animate-glow-pulse group"
              asChild
            >
              <Link href={DISCORD_OAUTH_URL} target="_blank" rel="noopener noreferrer">
                <Shield className="h-5 w-5 transition-transform duration-300 group-hover:rotate-12" />
                Add to Discord
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="gap-2 bg-transparent transition-all duration-300 hover:scale-105 hover:border-primary/50 hover:bg-primary/5 hover:shadow-lg group"
              asChild
            >
              <Link href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5 transition-transform duration-300 group-hover:rotate-12" />
                View on GitHub
              </Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 gap-8 sm:grid-cols-4 stagger-animation">
            {[
              { value: "14+", label: "Slash Commands" },
              { value: "6", label: "Core Systems" },
              { value: "MIT", label: "License" },
              { value: "24/7", label: "Uptime Ready" },
            ].map((stat) => (
              <div key={stat.label} className="text-center transition-transform duration-300 hover:scale-110">
                <div className="text-3xl font-bold text-primary drop-shadow-[0_0_10px_rgba(88,101,242,0.3)]">
                  {stat.value}
                </div>
                <div className="mt-1 text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
