/**
 * Features Section Component
 * Showcase all bot features with icons
 */

import { Sparkles, UserPlus, UserMinus, Trophy, Ticket, Clock, Shield, Zap, MousePointerClick } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

/**
 * Feature configuration interface
 * Defines the structure for each feature card
 */
interface Feature {
  icon: typeof Sparkles
  title: string
  description: string
  colorClass: string
  bgColorClass: string
}

const features: Feature[] = [
  {
    icon: Sparkles,
    title: "Reaction Roles",
    description:
      "Let members self-assign roles by reacting to messages. Clean embeds with only title and description. Easy setup with /setup-reaction-roles command.",
    colorClass: "text-[var(--feature-reaction-roles)]",
    bgColorClass:
      "bg-[var(--feature-reaction-roles)]/10 group-hover:bg-[var(--feature-reaction-roles)]/20 group-hover:shadow-[var(--feature-reaction-roles)]/30",
  },
  {
    icon: MousePointerClick,
    title: "Button Roles",
    description:
      "Interactive button-based role assignment with 4 color styles. Supports up to 25 buttons with toggle functionality and DM notifications.",
    colorClass: "text-[var(--feature-button-roles)]",
    bgColorClass:
      "bg-[var(--feature-button-roles)]/10 group-hover:bg-[var(--feature-button-roles)]/20 group-hover:shadow-[var(--feature-button-roles)]/30",
  },
  {
    icon: UserPlus,
    title: "Welcome Messages",
    description:
      "Greet new members with personalized 'Welcome [Username]!' messages. Optional rules and role channel mentions. Clean embeds without extra fields.",
    colorClass: "text-[var(--feature-welcome)]",
    bgColorClass:
      "bg-[var(--feature-welcome)]/10 group-hover:bg-[var(--feature-welcome)]/20 group-hover:shadow-[var(--feature-welcome)]/30",
  },
  {
    icon: UserMinus,
    title: "Leave Messages",
    description:
      "Track departing members with goodbye messages. Fully customizable templates with clean embeds without footers.",
    colorClass: "text-[var(--feature-leave)]",
    bgColorClass:
      "bg-[var(--feature-leave)]/10 group-hover:bg-[var(--feature-leave)]/20 group-hover:shadow-[var(--feature-leave)]/30",
  },
  {
    icon: Trophy,
    title: "Leveling System",
    description: "Engage your community with XP tracking, level roles, ranks, and leaderboards.",
    colorClass: "text-[var(--feature-leveling)]",
    bgColorClass:
      "bg-[var(--feature-leveling)]/10 group-hover:bg-[var(--feature-leveling)]/20 group-hover:shadow-[var(--feature-leveling)]/30",
  },
  {
    icon: Ticket,
    title: "Ticket System",
    description: "Support ticket management with categories, transcripts, and staff controls.",
    colorClass: "text-[var(--feature-ticket)]",
    bgColorClass:
      "bg-[var(--feature-ticket)]/10 group-hover:bg-[var(--feature-ticket)]/20 group-hover:shadow-[var(--feature-ticket)]/30",
  },
  {
    icon: Clock,
    title: "Scheduled Messages",
    description: "Automate announcements with one-time or recurring scheduled messages.",
    colorClass: "text-[var(--feature-scheduled)]",
    bgColorClass:
      "bg-[var(--feature-scheduled)]/10 group-hover:bg-[var(--feature-scheduled)]/20 group-hover:shadow-[var(--feature-scheduled)]/30",
  },
  {
    icon: Shield,
    title: "Role Management",
    description: "Advanced role management with level-based auto-roles and permission controls.",
    colorClass: "text-[var(--feature-role-management)]",
    bgColorClass:
      "bg-[var(--feature-role-management)]/10 group-hover:bg-[var(--feature-role-management)]/20 group-hover:shadow-[var(--feature-role-management)]/30",
  },
  {
    icon: Zap,
    title: "Easy Setup",
    description: "Simple slash commands for configuration. No coding required. Works instantly.",
    colorClass: "text-[var(--feature-easy-setup)]",
    bgColorClass:
      "bg-[var(--feature-easy-setup)]/10 group-hover:bg-[var(--feature-easy-setup)]/20 group-hover:shadow-[var(--feature-easy-setup)]/30",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center animate-fade-in-up">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Powerful Features</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Everything you need to manage and engage your Discord community
          </p>
        </div>

        {/* Features Grid with color-coded feature cards */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 stagger-animation">
          {features.map((feature) => (
            <Card
              key={feature.title}
              className="group border-border bg-card transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-2"
            >
              <CardHeader>
                {/* Icon container with feature-specific color scheme */}
                <div
                  className={`mb-2 flex h-12 w-12 items-center justify-center rounded-lg transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg ${feature.bgColorClass}`}
                >
                  <feature.icon
                    className={`h-6 w-6 ${feature.colorClass} transition-transform duration-300 group-hover:rotate-12`}
                  />
                </div>
                <CardTitle className="text-foreground transition-colors duration-300 group-hover:text-primary">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
