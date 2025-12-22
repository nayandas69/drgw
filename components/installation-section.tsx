/**
 * Installation Section Component
 * Quick start guide for adding the bot
 */

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Settings, Rocket } from "lucide-react"

// Discord OAuth URL
const DISCORD_OAUTH_URL =
  "https://discord.com/oauth2/authorize?client_id=<CLIENT_ID>&permissions=8&scope=bot%20applications.commands"

const steps = [
  {
    icon: Shield,
    step: "01",
    title: "Add the Bot",
    description: "Click the button below to invite Discord Role Guardian to your server with necessary permissions.",
  },
  {
    icon: Settings,
    step: "02",
    title: "Configure Features",
    description: "Use slash commands like /setup-welcome, /setup-leveling to enable features you want.",
  },
  {
    icon: Rocket,
    step: "03",
    title: "You're Ready!",
    description: "The bot is now protecting and managing your server. Customize settings anytime.",
  },
]

export function InstallationSection() {
  return (
    <section id="installation" className="py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center animate-fade-in-up">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Quick Installation</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Get started in under a minute. No coding required.
          </p>
        </div>

        {/* Steps */}
        <div className="mt-16 grid gap-8 lg:grid-cols-3 stagger-animation">
          {steps.map((item) => (
            <Card
              key={item.step}
              className="relative border-border bg-card transition-all duration-300 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2"
            >
              <CardHeader>
                <div className="absolute -top-4 left-6 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground shadow-lg shadow-primary/30 transition-all duration-300 hover:scale-110">
                  {item.step}
                </div>
                <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/20 group-hover:shadow-lg group-hover:shadow-primary/30">
                  <item.icon className="h-6 w-6 text-primary transition-transform duration-300 group-hover:rotate-12" />
                </div>
                <CardTitle className="text-foreground transition-colors duration-300 hover:text-primary">
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">{item.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-12 text-center animate-fade-in">
          <Button
            size="lg"
            className="gap-2 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/30"
            asChild
          >
            <Link href={DISCORD_OAUTH_URL} target="_blank" rel="noopener noreferrer">
              <Shield className="h-5 w-5" />
              Add to Your Server
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
