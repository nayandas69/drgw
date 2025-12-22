import type React from "react"
/**
 * Roadmap Page
 * Future features and development plans for Discord Role Guardian
 * Author: nayandas69
 * Repository: https://github.com/nayandas69/discord-role-guardian
 */

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
    Database,
    LayoutDashboard,
    Music,
    Shield,
    Vote,
    Gamepad2,
    Bell,
    BarChart3,
    Globe,
    Sparkles,
    CheckCircle2,
    Clock,
    Target,
    Zap,
} from "lucide-react"

/**
 * Roadmap item status types
 */
type RoadmapStatus = "completed" | "in-progress" | "planned" | "future"

/**
 * Roadmap item interface
 */
interface RoadmapItem {
    id: string
    title: string
    description: string
    status: RoadmapStatus
    category: "bot" | "website" | "both"
    icon: React.ElementType
    eta?: string
    features?: string[]
}

/**
 * Status configuration with colors and labels
 */
const statusConfig: Record<RoadmapStatus, { label: string; color: string; bgColor: string; icon: React.ElementType }> =
{
    completed: {
        label: "Completed",
        color: "text-success",
        bgColor: "bg-success/10 border-success/20",
        icon: CheckCircle2,
    },
    "in-progress": {
        label: "In Progress",
        color: "text-[var(--feature-leveling)]",
        bgColor: "bg-[var(--feature-leveling)]/10 border-[var(--feature-leveling)]/20",
        icon: Zap,
    },
    planned: {
        label: "Planned",
        color: "text-[var(--feature-ticket)]",
        bgColor: "bg-[var(--feature-ticket)]/10 border-[var(--feature-ticket)]/20",
        icon: Target,
    },
    future: {
        label: "Future",
        color: "text-muted-foreground",
        bgColor: "bg-muted/30 border-border",
        icon: Clock,
    },
}

/**
 * Roadmap items grouped by status
 */
const roadmapItems: RoadmapItem[] = [
    // COMPLETED
    {
        id: "reaction-roles",
        title: "Reaction Roles System",
        description: "Allow users to self-assign roles by reacting to messages with emojis",
        status: "completed",
        category: "bot",
        icon: Sparkles,
        features: ["Custom embed messages", "Multiple role options", "Easy setup command"],
    },
    {
        id: "leveling-system",
        title: "XP & Leveling System",
        description: "Track member activity with XP rewards and automatic role assignments",
        status: "completed",
        category: "bot",
        icon: BarChart3,
        features: ["Customizable XP rates", "Level-up announcements", "Leaderboard display", "Auto role rewards"],
    },
    {
        id: "ticket-system",
        title: "Support Ticket System",
        description: "Professional support ticket system with staff management and transcripts",
        status: "completed",
        category: "bot",
        icon: Shield,
        features: ["One-click ticket creation", "Staff role permissions", "Ticket transcripts", "Statistics tracking"],
    },
    {
        id: "website-v1",
        title: "Official Website",
        description: "Modern landing page with documentation and feature showcase",
        status: "completed",
        category: "website",
        icon: Globe,
        features: ["Responsive design", "Command documentation", "Installation guide", "FAQ section"],
    },

    // IN PROGRESS
    {
        id: "database-integration",
        title: "Database Integration",
        description: "Migrate from file-based storage to robust database solutions for better scalability",
        status: "in-progress",
        category: "bot",
        icon: Database,
        eta: "Q1 2026",
        features: [
            "Supabase integration with PostgreSQL",
            "Firebase Realtime Database support",
            "MongoDB support for flexible schemas",
            "Automatic data migration tools",
            "Improved performance and reliability",
        ],
    },
    {
        id: "web-dashboard",
        title: "Web Dashboard",
        description: "Complete web-based control panel for server management without using Discord",
        status: "in-progress",
        category: "website",
        icon: LayoutDashboard,
        eta: "Q2 2026",
        features: [
            "Discord OAuth2 authentication",
            "Visual configuration editor for all features",
            "Real-time server statistics and analytics",
            "Role and permission management interface",
            "Activity logs and audit trails",
            "Customizable embed message builder",
            "Member XP management and manual adjustments",
        ],
    },

    // PLANNED
    {
        id: "music-player",
        title: "Music Player",
        description: "High-quality music streaming with playlist support and advanced controls",
        status: "planned",
        category: "bot",
        icon: Music,
        eta: "Q2 2026",
        features: [
            "YouTube, Spotify, and SoundCloud support",
            "Queue management with shuffle and repeat",
            "Volume control and audio filters",
            "Song search and recommendations",
            "24/7 radio mode",
        ],
    },
    {
        id: "moderation-tools",
        title: "Advanced Moderation",
        description: "Comprehensive moderation tools for server safety and management",
        status: "planned",
        category: "bot",
        icon: Shield,
        eta: "Q2 2026",
        features: [
            "Auto-moderation with customizable filters",
            "Warning and strike system",
            "Temporary and permanent bans/mutes",
            "Moderation logs with detailed records",
            "Anti-spam and anti-raid protection",
            "Member verification system",
        ],
    },
    {
        id: "polls-voting",
        title: "Polls & Voting System",
        description: "Create interactive polls with multiple question types and anonymous voting",
        status: "planned",
        category: "bot",
        icon: Vote,
        eta: "Q3 2026",
        features: [
            "Multiple choice and ranking polls",
            "Anonymous voting option",
            "Time-limited polls with auto-close",
            "Result visualization with charts",
            "Poll templates and reusable formats",
        ],
    },
    {
        id: "custom-commands",
        title: "Custom Commands",
        description: "Allow server admins to create custom bot commands with variables and conditions",
        status: "planned",
        category: "bot",
        icon: Gamepad2,
        eta: "Q3 2026",
        features: [
            "Visual command builder",
            "Variable and placeholder support",
            "Conditional logic and triggers",
            "Command cooldowns and permissions",
            "Import/export command templates",
        ],
    },

    // FUTURE
    {
        id: "webhooks-api",
        title: "Webhooks & API",
        description: "Developer API for integrations and custom applications",
        status: "future",
        category: "both",
        icon: Zap,
        features: [
            "RESTful API for bot data access",
            "Webhook notifications for events",
            "Third-party integration support",
            "Developer documentation",
        ],
    },
    {
        id: "multi-language",
        title: "Multi-Language Support",
        description: "Localization for global communities with automatic language detection",
        status: "future",
        category: "both",
        icon: Globe,
        features: [
            "Support for 10+ languages",
            "Per-server language settings",
            "Automatic user language detection",
            "Community translation contributions",
        ],
    },
    {
        id: "premium-features",
        title: "Premium Tier",
        description: "Optional premium features to support development while keeping core features free",
        status: "future",
        category: "both",
        icon: Sparkles,
        features: [
            "Priority support and faster responses",
            "Extended customization options",
            "Higher rate limits and storage",
            "Early access to new features",
            "Custom branding options",
        ],
    },
    {
        id: "mobile-app",
        title: "Mobile App",
        description: "Native mobile application for iOS and Android to manage your server on the go",
        status: "future",
        category: "website",
        icon: Bell,
        features: [
            "Push notifications for important events",
            "Quick server management tools",
            "Real-time statistics dashboard",
            "Offline mode with sync",
        ],
    },
]

/**
 * Group roadmap items by status for organized display
 */
const groupedRoadmap = {
    completed: roadmapItems.filter((item) => item.status === "completed"),
    "in-progress": roadmapItems.filter((item) => item.status === "in-progress"),
    planned: roadmapItems.filter((item) => item.status === "planned"),
    future: roadmapItems.filter((item) => item.status === "future"),
}

export default function RoadmapPage() {
    return (
        <div className="min-h-screen bg-background">
            <Header />

            <main className="relative">
                {/* Hero Section */}
                <section className="relative overflow-hidden border-b border-border/50 bg-gradient-to-b from-card to-background py-20 lg:py-32">
                    {/* Animated gradient orbs */}
                    <div className="absolute inset-0 overflow-hidden opacity-30">
                        <div className="absolute -left-1/4 top-0 h-96 w-96 animate-pulse rounded-full bg-primary/30 blur-3xl" />
                        <div
                            className="absolute -right-1/4 top-1/2 h-96 w-96 animate-pulse rounded-full bg-accent/20 blur-3xl"
                            style={{ animationDelay: "1s" }}
                        />
                    </div>

                    <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
                        <div className="text-center">
                            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 animate-fade-in-down">
                                <Target className="h-4 w-4 text-primary" />
                                <span className="text-sm font-medium text-primary">Development Roadmap</span>
                            </div>
                            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl animate-fade-in-up">
                                What's Next for Role Guardian
                            </h1>
                            <p
                                className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground animate-fade-in-up"
                                style={{ animationDelay: "0.1s" }}
                            >
                                Explore our development roadmap and see what exciting features are coming to Discord Role Guardian. From
                                powerful database integrations to a complete web dashboard, we're constantly improving to serve you
                                better.
                            </p>

                            {/* Statistics */}
                            <div
                                className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4 mx-auto max-w-3xl animate-fade-in-up"
                                style={{ animationDelay: "0.2s" }}
                            >
                                {Object.entries(groupedRoadmap).map(([status, items]) => {
                                    const config = statusConfig[status as RoadmapStatus]
                                    return (
                                        <div key={status} className="text-center">
                                            <div className={`text-3xl font-bold ${config.color}`}>{items.length}</div>
                                            <div className="mt-1 text-sm text-muted-foreground capitalize">{status.replace("-", " ")}</div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Roadmap Timeline */}
                <section className="py-20 lg:py-32">
                    <div className="mx-auto max-w-7xl px-4 lg:px-8">
                        {/* Render each status group */}
                        {(Object.keys(groupedRoadmap) as RoadmapStatus[]).map((status, statusIndex) => {
                            const items = groupedRoadmap[status]
                            const config = statusConfig[status]
                            const StatusIcon = config.icon

                            return (
                                <div
                                    key={status}
                                    className="mb-20 last:mb-0 animate-fade-in-up"
                                    style={{ animationDelay: `${statusIndex * 100}ms` }}
                                >
                                    {/* Status header */}
                                    <div className="mb-8 flex items-center gap-4">
                                        <div className={`flex items-center gap-2 rounded-full border px-4 py-2 ${config.bgColor}`}>
                                            <StatusIcon className={`h-5 w-5 ${config.color}`} />
                                            <span className={`font-semibold ${config.color}`}>{config.label}</span>
                                            <Badge variant="secondary" className="ml-2">
                                                {items.length}
                                            </Badge>
                                        </div>
                                        <div className="h-px flex-1 bg-border" />
                                    </div>

                                    {/* Items grid */}
                                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                                        {items.map((item, itemIndex) => {
                                            const ItemIcon = item.icon
                                            return (
                                                <Card
                                                    key={item.id}
                                                    className="group relative overflow-hidden border-border transition-all hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 animate-fade-in-up"
                                                    style={{ animationDelay: `${statusIndex * 100 + itemIndex * 50}ms` }}
                                                >
                                                    {/* Gradient background effect */}
                                                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                                                    <CardHeader className="relative">
                                                        {/* Icon and category badge */}
                                                        <div className="mb-4 flex items-start justify-between">
                                                            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 transition-all group-hover:scale-110 group-hover:bg-primary/20">
                                                                <ItemIcon className="h-6 w-6 text-primary" />
                                                            </div>
                                                            <Badge
                                                                variant="outline"
                                                                className={
                                                                    item.category === "bot"
                                                                        ? "border-primary/30 bg-primary/10 text-primary"
                                                                        : item.category === "website"
                                                                            ? "border-accent/30 bg-accent/10 text-accent"
                                                                            : "border-muted-foreground/30 bg-muted text-muted-foreground"
                                                                }
                                                            >
                                                                {item.category === "both" ? "Bot & Web" : item.category}
                                                            </Badge>
                                                        </div>

                                                        <CardTitle className="text-xl">{item.title}</CardTitle>
                                                        {item.eta && (
                                                            <div className="mt-2 flex items-center gap-1 text-sm text-muted-foreground">
                                                                <Clock className="h-3 w-3" />
                                                                <span>ETA: {item.eta}</span>
                                                            </div>
                                                        )}
                                                    </CardHeader>

                                                    <CardContent className="relative">
                                                        <CardDescription className="mb-4 text-base">{item.description}</CardDescription>

                                                        {/* Features list */}
                                                        {item.features && item.features.length > 0 && (
                                                            <div className="space-y-2">
                                                                <div className="text-sm font-semibold text-foreground">Key Features:</div>
                                                                <ul className="space-y-1.5 text-sm text-muted-foreground">
                                                                    {item.features.map((feature, idx) => (
                                                                        <li key={idx} className="flex items-start gap-2">
                                                                            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                                                                            <span>{feature}</span>
                                                                        </li>
                                                                    ))}
                                                                </ul>
                                                            </div>
                                                        )}
                                                    </CardContent>
                                                </Card>
                                            )
                                        })}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </section>

                {/* Call to Action */}
                <section className="border-t border-border/50 bg-secondary/30 py-20">
                    <div className="mx-auto max-w-4xl px-4 text-center lg:px-8">
                        <div className="animate-fade-in-up">
                            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Want to Contribute?</h2>
                            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
                                Discord Role Guardian is open source! Contribute to the project, suggest features, or report bugs on
                                GitHub.
                            </p>
                            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                                <a
                                    href="https://github.com/nayandas69/discord-role-guardian"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/30"
                                >
                                    <Sparkles className="h-5 w-5" />
                                    View on GitHub
                                </a>
                                <a
                                    href="https://github.com/nayandas69/discord-role-guardian/issues/new?template=feature_request.yml"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-6 py-3 font-semibold text-foreground transition-all hover:bg-muted hover:shadow-lg"
                                >
                                    <Target className="h-5 w-5" />
                                    Suggest Feature
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    )
}
