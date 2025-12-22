/**
 * Contributors Page
 * Showcase community members and contributors
 * Highlights developers, supporters, and open-source contributors
 * Author: nayandas69
 * Repository: https://github.com/nayandas69/discord-role-guardian
 */

"use client"

import { useState, useEffect } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Heart, Code, GitPullRequest, Bug, Star, Users, Sparkles } from "lucide-react"
import Link from "next/link"

/**
 * Contributor role types
 */
type ContributorRole = "creator" | "maintainer" | "contributor" | "supporter"

/**
 * Contributor interface
 */
interface Contributor {
    name: string
    username: string
    role: ContributorRole
    avatar: string
    contributions: number
    githubUrl: string
    bio: string
}

/**
 * Contribution type interface
 */
interface ContributionType {
    icon: typeof Code
    label: string
    count: number
    color: string
    bgColor: string
}

/**
 * GitHub contributor interface
 * Maps to actual GitHub API response
 */
interface GitHubContributor {
    login: string
    name: string // Added name field for display name
    avatar: string
    contributions: number
    profile: string
    type: string
    bio: string | null
}

/**
 * GitHub repository stats interface
 */
interface GitHubStats {
    stars: number
    forks: number
    openIssues: number
    watchers: number
}

/**
 * Role configuration for visual distinction
 */
const roleConfig: Record<ContributorRole, { label: string; color: string; bgColor: string }> = {
    creator: {
        label: "Creator",
        color: "text-primary",
        bgColor: "bg-primary/10 border-primary/30",
    },
    maintainer: {
        label: "Maintainer",
        color: "text-[var(--feature-leveling)]",
        bgColor: "bg-[var(--feature-leveling)]/10 border-[var(--feature-leveling)]/30",
    },
    contributor: {
        label: "Contributor",
        color: "text-[var(--feature-welcome)]",
        bgColor: "bg-[var(--feature-welcome)]/10 border-[var(--feature-welcome)]/30",
    },
    supporter: {
        label: "Supporter",
        color: "text-[var(--feature-ticket)]",
        bgColor: "bg-[var(--feature-ticket)]/10 border-[var(--feature-ticket)]/30",
    },
}

/**
 * GitHub repository owner
 * This is the creator of the bot
 */
const REPO_OWNER = "nayandas69"

/**
 * Hardcoded creator information
 * This is used to display custom bio for the project creator
 */
const CREATOR_BIO =
    "Creator and lead developer of Discord Role Guardian. Passionate about open-source and building tools for the Discord community."

export default function ContributorsPage() {
    const [contributors, setContributors] = useState<Contributor[]>([])
    const [stats, setStats] = useState<GitHubStats | null>(null)
    const [loading, setLoading] = useState(true)

    /**
     * Fetch contributors and stats from GitHub API
     */
    useEffect(() => {
        async function fetchGitHubData() {
            try {
                setLoading(true)

                // Fetch contributors
                const contributorsRes = await fetch("/api/github/contributors")
                const contributorsData: GitHubContributor[] = await contributorsRes.json()

                const transformedContributors: Contributor[] = contributorsData.map((contributor) => {
                    // Determine role: owner is Creator, others are Contributors
                    let role: ContributorRole = "contributor"
                    if (contributor.login.toLowerCase() === REPO_OWNER.toLowerCase()) {
                        role = "creator"
                    } else if (contributor.contributions > 50) {
                        role = "maintainer"
                    }

                    const bio =
                        contributor.login.toLowerCase() === REPO_OWNER.toLowerCase()
                            ? CREATOR_BIO
                            : `${contributor.contributions} contributions to Discord Role Guardian`

                    return {
                        name: contributor.name, // Use actual display name from GitHub API
                        username: contributor.login,
                        role,
                        avatar: contributor.avatar,
                        contributions: contributor.contributions,
                        githubUrl: contributor.profile,
                        bio,
                    }
                })

                transformedContributors.sort((a, b) => {
                    // Creator always comes first
                    if (a.role === "creator") return -1
                    if (b.role === "creator") return 1
                    // Then sort by contributions (highest first)
                    return b.contributions - a.contributions
                })

                setContributors(transformedContributors)

                // Fetch repository stats
                const statsRes = await fetch("/api/github/stats")
                const statsData: GitHubStats = await statsRes.json()
                setStats(statsData)
            } catch (error) {
                console.error("[Contributors] Error fetching GitHub data:", error)

                setContributors(fallbackContributors)
            } finally {
                setLoading(false)
            }
        }

        fetchGitHubData()
    }, [])

    /**
     * Fallback contributors if GitHub API is unavailable
     */
    const fallbackContributors: Contributor[] = [
        {
            name: "Zenitsu", // Updated fallback to use actual display name
            username: "nayandas69",
            role: "creator",
            avatar: "/developer-working.png",
            contributions: 500,
            githubUrl: "https://github.com/nayandas69",
            bio: CREATOR_BIO,
        },
    ]

    /**
     * Project statistics with real GitHub data
     */
    const projectStats: ContributionType[] = [
        {
            icon: Star,
            label: "GitHub Stars",
            count: stats?.stars || 0,
            color: "text-[var(--feature-ticket)]",
            bgColor: "bg-[var(--feature-ticket)]/10",
        },
        {
            icon: Code,
            label: "Contributors",
            count: contributors.length,
            color: "text-primary",
            bgColor: "bg-primary/10",
        },
        {
            icon: GitPullRequest,
            label: "Forks",
            count: stats?.forks || 0,
            color: "text-[var(--feature-welcome)]",
            bgColor: "bg-[var(--feature-welcome)]/10",
        },
        {
            icon: Bug,
            label: "Open Issues",
            count: stats?.openIssues || 0,
            color: "text-[var(--feature-leveling)]",
            bgColor: "bg-[var(--feature-leveling)]/10",
        },
    ]

    return (
        <div className="min-h-screen bg-background">
            <Header />

            <main className="relative">
                {/* Hero Section */}
                <section className="relative overflow-hidden border-b border-border/50 bg-gradient-to-b from-card to-background py-20 lg:py-32">
                    {/* Animated gradient orbs in background */}
                    <div className="absolute inset-0 overflow-hidden opacity-30">
                        <div className="absolute -left-1/4 top-0 h-96 w-96 animate-pulse rounded-full bg-primary/30 blur-3xl" />
                        <div
                            className="absolute -right-1/4 top-1/2 h-96 w-96 animate-pulse rounded-full bg-[var(--feature-welcome)]/20 blur-3xl"
                            style={{ animationDelay: "1s" }}
                        />
                    </div>

                    <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
                        <div className="text-center">
                            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 animate-fade-in-down">
                                <Users className="h-4 w-4 text-primary" />
                                <span className="text-sm font-medium text-primary">Community Driven</span>
                            </div>
                            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl animate-fade-in-up">
                                Contributors
                            </h1>
                            <p
                                className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground animate-fade-in-up"
                                style={{ animationDelay: "0.1s" }}
                            >
                                Meet the amazing people who make Discord Role Guardian possible. Thank you to everyone who has
                                contributed code, reported bugs, and supported the project!
                            </p>
                        </div>
                    </div>
                </section>

                {/* Project Stats */}
                <section className="py-12 bg-secondary/30">
                    <div className="mx-auto max-w-7xl px-4 lg:px-8">
                        {loading && (
                            <div className="text-center py-8">
                                <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
                                <p className="mt-2 text-sm text-muted-foreground">Fetching data from GitHub...</p>
                            </div>
                        )}

                        {!loading && (
                            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                                {projectStats.map((stat, index) => (
                                    <Card
                                        key={stat.label}
                                        className="border-border transition-all hover:border-primary/30 hover:shadow-lg animate-fade-in-up"
                                        style={{ animationDelay: `${index * 50}ms` }}
                                    >
                                        <CardContent className="flex items-center gap-4 p-6">
                                            <div className={`flex h-12 w-12 items-center justify-center rounded-lg ${stat.bgColor}`}>
                                                <stat.icon className={`h-6 w-6 ${stat.color}`} />
                                            </div>
                                            <div>
                                                <p className="text-2xl font-bold text-foreground">{stat.count.toLocaleString()}</p>
                                                <p className="text-sm text-muted-foreground">{stat.label}</p>
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        )}
                    </div>
                </section>

                {/* Contributors Grid */}
                <section className="py-20 lg:py-32">
                    <div className="mx-auto max-w-7xl px-4 lg:px-8">
                        <div className="text-center animate-fade-in-up">
                            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                                Core Team & Contributors
                            </h2>
                            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
                                The people behind Discord Role Guardian
                            </p>
                        </div>

                        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                            {contributors.map((contributor, index) => {
                                const config = roleConfig[contributor.role]
                                return (
                                    <Card
                                        key={contributor.username}
                                        className="group border-border transition-all hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10 animate-fade-in-up"
                                        style={{ animationDelay: `${index * 100}ms` }}
                                    >
                                        <CardHeader className="text-center">
                                            {/* Avatar */}
                                            <div className="mb-4 flex justify-center">
                                                <div className="relative">
                                                    <img
                                                        src={contributor.avatar || "/placeholder.svg"}
                                                        alt={contributor.name}
                                                        className="h-24 w-24 rounded-full border-4 border-primary/20 transition-all group-hover:border-primary/50 group-hover:scale-110"
                                                    />
                                                    <div className="absolute -bottom-2 -right-2 flex h-10 w-10 items-center justify-center rounded-full bg-card border-2 border-border">
                                                        <span className="text-sm font-bold text-primary">{contributor.contributions}</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <CardTitle className="text-foreground">{contributor.name}</CardTitle>
                                            <CardDescription className="text-muted-foreground">@{contributor.username}</CardDescription>
                                            <div className="flex justify-center mt-2">
                                                <Badge className={`${config.bgColor} ${config.color} border`}>{config.label}</Badge>
                                            </div>
                                        </CardHeader>
                                        <CardContent className="text-center">
                                            <p className="mb-4 text-sm text-muted-foreground">{contributor.bio}</p>
                                            <Link
                                                href={contributor.githubUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2 text-sm font-semibold text-foreground transition-all hover:bg-muted hover:shadow-lg"
                                            >
                                                <Github className="h-4 w-4" />
                                                View GitHub Profile
                                            </Link>
                                        </CardContent>
                                    </Card>
                                )
                            })}
                        </div>
                    </div>
                </section>

                {/* Become a Contributor CTA */}
                <section className="border-t border-border/50 bg-secondary/30 py-20 lg:py-32">
                    <div className="mx-auto max-w-7xl px-4 lg:px-8">
                        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
                            {/* Why Contribute */}
                            <div className="animate-fade-in-up">
                                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2">
                                    <Sparkles className="h-4 w-4 text-primary" />
                                    <span className="text-sm font-medium text-primary">Get Involved</span>
                                </div>
                                <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Become a Contributor</h2>
                                <p className="mt-4 text-lg text-muted-foreground">
                                    Discord Role Guardian is open source and welcomes contributions from developers of all skill levels.
                                </p>
                                <div className="mt-8 space-y-4">
                                    <div className="flex gap-3">
                                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
                                            <Code className="h-4 w-4 text-primary" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-foreground">Code Contributions</h3>
                                            <p className="text-sm text-muted-foreground">Add features, fix bugs, or improve documentation</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-3">
                                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--feature-welcome)]/10">
                                            <Bug className="h-4 w-4 text-[var(--feature-welcome)]" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-foreground">Report Issues</h3>
                                            <p className="text-sm text-muted-foreground">
                                                Help us identify and fix bugs or suggest improvements
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex gap-3">
                                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--feature-leveling)]/10">
                                            <Heart className="h-4 w-4 text-[var(--feature-leveling)]" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-foreground">Spread the Word</h3>
                                            <p className="text-sm text-muted-foreground">Star the repo and share with your community</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* CTA Card */}
                            <div className="flex items-center">
                                <Card
                                    className="w-full border-primary/20 bg-gradient-to-r from-primary/5 to-accent/5 animate-fade-in-up"
                                    style={{ animationDelay: "0.2s" }}
                                >
                                    <CardContent className="flex flex-col items-center gap-6 p-8 text-center">
                                        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                                            <Github className="h-8 w-8 text-primary" />
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-bold text-foreground">Join Us on GitHub</h3>
                                            <p className="mt-2 text-muted-foreground">
                                                Check out the codebase, open issues, and contribute to the project
                                            </p>
                                        </div>
                                        <div className="flex flex-col gap-3 sm:flex-row">
                                            <Link
                                                href="https://github.com/nayandas69/discord-role-guardian"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/30"
                                            >
                                                View Repository
                                            </Link>
                                            <Link
                                                href="https://github.com/nayandas69/discord-role-guardian/issues"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="rounded-lg border border-border bg-card px-6 py-3 font-semibold text-foreground transition-all hover:bg-muted hover:shadow-lg"
                                            >
                                                View Issues
                                            </Link>
                                        </div>
                                        <p className="text-sm text-muted-foreground">MIT Licensed • Free and open source forever</p>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    )
}
