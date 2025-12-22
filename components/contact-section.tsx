/**
 * Contact Section Component
 * Contact information and support links
 */

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, MessageCircle, Github, Bug } from "lucide-react"

const GITHUB_URL = "https://github.com/nayandas69/discord-role-guardian"
const DISCORD_SERVER_URL = "https://discord.gg/u9XfHZN8K9"
const EMAIL = "nayanchandradas@hotmail.com"

const contactMethods = [
  {
    icon: MessageCircle,
    title: "Discord Server",
    description: "Join our community for support, updates, and discussions.",
    action: "Join Server",
    href: DISCORD_SERVER_URL,
  },
  {
    icon: Mail,
    title: "Email",
    description: "For business inquiries or direct support.",
    action: "Send Email",
    href: `mailto:${EMAIL}`,
  },
  {
    icon: Github,
    title: "GitHub",
    description: "Star the repo, contribute, or report issues.",
    action: "View Repository",
    href: GITHUB_URL,
  },
  {
    icon: Bug,
    title: "Report Issues",
    description: "Found a bug? Open an issue on GitHub.",
    action: "Report Bug",
    href: `${GITHUB_URL}/issues`,
  },
]

export function ContactSection() {
  return (
    <section id="contact" className="py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center animate-fade-in-up">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Get in Touch</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Have questions, suggestions, or need help? We're here for you.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 stagger-animation">
          {contactMethods.map((method) => (
            <Card
              key={method.title}
              className="group border-border bg-card transition-all duration-300 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2"
            >
              <CardHeader>
                <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/20 group-hover:shadow-lg group-hover:shadow-primary/30">
                  <method.icon className="h-6 w-6 text-primary transition-transform duration-300 group-hover:rotate-12" />
                </div>
                <CardTitle className="text-foreground transition-colors duration-300 group-hover:text-primary">
                  {method.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4 text-muted-foreground">{method.description}</CardDescription>
                <Button
                  variant="outline"
                  size="sm"
                  className="transition-all duration-300 hover:scale-105 hover:bg-primary hover:text-primary-foreground bg-transparent"
                  asChild
                >
                  <Link href={method.href} target="_blank" rel="noopener noreferrer">
                    {method.action}
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Email Display */}
        <div className="mt-12 text-center animate-fade-in">
          <p className="text-muted-foreground">
            Direct email:{" "}
            <Link
              href={`mailto:${EMAIL}`}
              className="text-primary hover:underline transition-all duration-300 hover:text-primary/80"
            >
              {EMAIL}
            </Link>
          </p>
        </div>
      </div>
    </section>
  )
}
