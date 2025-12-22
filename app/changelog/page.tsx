/**
 * Changelog Page
 * Version history and update logs for Discord Role Guardian
 * Documents all releases, features, bug fixes, and improvements
 * Author: nayandas69
 * Repository: https://github.com/nayandas69/discord-role-guardian
 */

"use client"

import { useState, useEffect } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Sparkles, Bug, Zap, Shield, Calendar, ExternalLink, AlertCircle } from "lucide-react"
import Link from "next/link"

/**
 * Commit interface for individual commits in a release
 */
interface Commit {
    message: string
    hash: string
    url: string
}

/**
 * Version release interface
 */
interface Release {
    version: string
    date: string
    title: string
    commits: Commit[]
    breaking?: boolean
}

/**
 * GitHub release interface
 * Maps to actual GitHub API response
 */
interface GitHubRelease {
    version: string
    date: string
    title: string
    body: string
    url: string
    prerelease: boolean
    draft: boolean
}

/**
 * Change type configuration for icons and colors
 */
const changeTypes: Record<string, { icon: any; label: string; color: string; bgColor: string }> = {
    feature: {
        icon: Sparkles,
        label: "New Feature",
        color: "text-[var(--feature-welcome)]",
        bgColor: "bg-[var(--feature-welcome)]/10",
    },
    improvement: {
        icon: Zap,
        label: "Improvement",
        color: "text-[var(--feature-leveling)]",
        bgColor: "bg-[var(--feature-leveling)]/10",
    },
    bugfix: {
        icon: Bug,
        label: "Bug Fix",
        color: "text-[var(--feature-ticket)]",
        bgColor: "bg-[var(--feature-ticket)]/10",
    },
    security: {
        icon: Shield,
        label: "Security",
        color: "text-destructive",
        bgColor: "bg-destructive/10",
    },
}

/**
 * Fallback releases if GitHub API is unavailable
 * Based on actual bot development milestones
 */
const fallbackReleases: Release[] = [
    {
        version: "1.0.0",
        date: "2025-11-20",
        title: "Initial Release",
        commits: [
            {
                message: "fix: Update UptimeRobot URL for health checks in production",
                hash: "387f771",
                url: "https://github.com/nayandas69/discord-role-guardian/commit/387f771",
            },
            {
                message: "feat: Add .dockerignore file and update .gitignore to reference it",
                hash: "753b742",
                url: "https://github.com/nayandas69/discord-role-guardian/commit/753b742",
            },
            {
                message: "feat: Implement Discord Role Guardian Bot with core functionalities",
                hash: "73cfc9f",
                url: "https://github.com/nayandas69/discord-role-guardian/commit/73cfc9f",
            },
            {
                message: "Initial commit",
                hash: "6d102a4",
                url: "https://github.com/nayandas69/discord-role-guardian/commit/6d102a4",
            },
        ],
    },
]

const GITHUB_REPO = "nayandas69/discord-role-guardian"

export default function ChangelogPage() {
    const [releases, setReleases] = useState<Release[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    /**
     * Fetch releases from GitHub API on component mount
     * Uses Next.js API route to avoid CORS and rate limiting
     */
    useEffect(() => {
        async function fetchReleases() {
            try {
                setLoading(true)
                const response = await fetch("/api/github/releases")

                if (!response.ok) {
                    throw new Error("Failed to fetch releases")
                }

                const githubReleases: GitHubRelease[] = await response.json()

                const transformedReleases: Release[] = githubReleases
                    .filter((release) => !release.draft) // Hide draft releases
                    .map((release) => ({
                        version: release.version.replace("v", ""), // Remove 'v' prefix
                        date: new Date(release.date).toISOString().split("T")[0],
                        title: release.title || release.version,
                        commits: parseCommits(release.body, release.version),
                        breaking: release.body.toLowerCase().includes("breaking"),
                    }))

                setReleases(transformedReleases)
                setError(null)
            } catch (err) {
                console.error("[Changelog] Error fetching releases:", err)
                setError("Unable to load releases from GitHub")

                setReleases(fallbackReleases)
            } finally {
                setLoading(false)
            }
        }

        fetchReleases()
    }, [])

    /**
     * Parse commits from GitHub release body
     * Extracts commit messages and hashes from "What's Changed" section
     * @param body - GitHub release body markdown
     * @param version - Release version for commit URL generation
     * @returns Array of commits with links
     */
    function parseCommits(body: string, version: string): Commit[] {
        const commits: Commit[] = []
        const lines = body.split("\n")

        // Find "What's Changed" section
        let inChangedSection = false

        for (const line of lines) {
            const trimmed = line.trim()

            // Start parsing after "What's Changed" header
            if (trimmed.toLowerCase().includes("what's changed")) {
                inChangedSection = true
                continue
            }

            // Stop parsing at next major section
            if (inChangedSection && trimmed.startsWith("##")) {
                break
            }

            // Parse commit lines in format: "- message (hash)" or "* message (hash)"
            if (inChangedSection && (trimmed.startsWith("- ") || trimmed.startsWith("* "))) {
                const text = trimmed.substring(2).trim()

                // Extract commit message and hash using regex
                // Matches: "message (hash)" or "message ( hash )"
                const match = text.match(/^(.+?)\s*$$\s*([a-f0-9]{7,40})\s*$$$/i)

                if (match) {
                    const message = match[1].trim()
                    const hash = match[2].trim()
                    const url = `https://github.com/${GITHUB_REPO}/commit/${hash}`

                    commits.push({ message, hash, url })
                } else {
                    // If no hash found, add as plain commit
                    commits.push({
                        message: text,
                        hash: "",
                        url: `https://github.com/${GITHUB_REPO}/releases/tag/${version}`,
                    })
                }
            }
        }

        // If no commits found in "What's Changed", parse all list items
        if (commits.length === 0) {
            for (const line of lines) {
                const trimmed = line.trim()
                if (trimmed.startsWith("- ") || trimmed.startsWith("* ")) {
                    const text = trimmed.substring(2).trim()
                    const match = text.match(/^(.+?)\s*$$\s*([a-f0-9]{7,40})\s*$$$/i)

                    if (match) {
                        const message = match[1].trim()
                        const hash = match[2].trim()
                        const url = `https://github.com/${GITHUB_REPO}/commit/${hash}`
                        commits.push({ message, hash, url })
                    }
                }
            }
        }

        return commits
    }

    return (
        <div className="min-h-screen bg-background">
            <Header />

            <main className="relative">
                {/* Hero Section */}
                <section className="relative overflow-hidden border-b border-border/50 bg-gradient-to-b from-card to-background py-20 lg:py-32">
                    {/* Animated gradient orbs in background */}
                    <div className="absolute inset-0 overflow-hidden opacity-30">
                        <div className="absolute -left-1/4 top-0 h-96 w-96 animate-pulse rounded-full bg-[var(--feature-leveling)]/30 blur-3xl" />
                        <div
                            className="absolute -right-1/4 top-1/2 h-96 w-96 animate-pulse rounded-full bg-primary/20 blur-3xl"
                            style={{ animationDelay: "1s" }}
                        />
                    </div>

                    <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
                        <div className="text-center">
                            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 animate-fade-in-down">
                                <Calendar className="h-4 w-4 text-primary" />
                                <span className="text-sm font-medium text-primary">Version History</span>
                            </div>
                            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl animate-fade-in-up">
                                Changelog
                            </h1>
                            <p
                                className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground animate-fade-in-up"
                                style={{ animationDelay: "0.1s" }}
                            >
                                Track all updates, new features, improvements, and bug fixes. Stay informed about what's new in Discord
                                Role Guardian.
                            </p>
                            <div
                                className="mt-8 flex items-center justify-center gap-4 animate-fade-in-up"
                                style={{ animationDelay: "0.2s" }}
                            >
                                <Link
                                    href="https://github.com/nayandas69/discord-role-guardian/releases"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group flex items-center gap-2 rounded-lg border border-border bg-card px-6 py-3 font-semibold text-foreground transition-all hover:bg-muted hover:shadow-lg"
                                >
                                    <span>View on GitHub</span>
                                    <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Release Timeline */}
                <section className="mx-auto max-w-4xl px-4 py-20 lg:px-8">
                    {loading && (
                        <div className="text-center py-20">
                            <div className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
                            <p className="mt-4 text-muted-foreground">Loading releases from GitHub...</p>
                        </div>
                    )}

                    {error && (
                        <div className="rounded-lg border border-destructive/50 bg-destructive/10 p-6 text-center">
                            <AlertCircle className="mx-auto h-12 w-12 text-destructive mb-4" />
                            <p className="text-destructive font-semibold">{error}</p>
                            <p className="text-sm text-muted-foreground mt-2">Showing cached releases</p>
                        </div>
                    )}

                    {!loading && releases.length > 0 && (
                        <div className="relative">
                            {/* Vertical timeline line */}
                            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent" />

                            <div className="space-y-12">
                                {releases.map((release, releaseIndex) => (
                                    <div
                                        key={release.version}
                                        className="relative animate-fade-in-up"
                                        style={{ animationDelay: `${releaseIndex * 100}ms` }}
                                    >
                                        {/* Timeline dot */}
                                        <div className="absolute left-8 top-8 z-10 h-4 w-4 -translate-x-1/2 rounded-full border-4 border-primary bg-background" />

                                        <Card className="ml-20 border-border transition-all hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10">
                                            <CardHeader>
                                                <div className="flex flex-wrap items-start justify-between gap-4">
                                                    <div>
                                                        <div className="mb-2 flex flex-wrap items-center gap-2">
                                                            <Badge className="bg-primary text-primary-foreground text-base px-3 py-1">
                                                                v{release.version}
                                                            </Badge>
                                                            {release.breaking && (
                                                                <Badge variant="destructive" className="text-sm">
                                                                    Breaking Changes
                                                                </Badge>
                                                            )}
                                                        </div>
                                                        <CardTitle className="text-2xl text-foreground">{release.title}</CardTitle>
                                                    </div>
                                                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                                        <Calendar className="h-4 w-4" />
                                                        <time dateTime={release.date}>
                                                            {new Date(release.date).toLocaleDateString("en-US", {
                                                                year: "numeric",
                                                                month: "long",
                                                                day: "numeric",
                                                            })}
                                                        </time>
                                                    </div>
                                                </div>
                                            </CardHeader>
                                            <CardContent>
                                                <div className="space-y-1">
                                                    <h3 className="text-sm font-semibold text-foreground mb-3">What's Changed</h3>
                                                    <ul className="space-y-2">
                                                        {release.commits.map((commit, commitIndex) => (
                                                            <li
                                                                key={commitIndex}
                                                                className="flex items-start gap-2 text-sm text-muted-foreground animate-fade-in"
                                                                style={{ animationDelay: `${releaseIndex * 100 + commitIndex * 30}ms` }}
                                                            >
                                                                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-muted-foreground/50" />
                                                                <span className="flex-1">
                                                                    {commit.message}{" "}
                                                                    {commit.hash && (
                                                                        <Link
                                                                            href={commit.url}
                                                                            target="_blank"
                                                                            rel="noopener noreferrer"
                                                                            className="text-primary hover:underline font-mono text-xs"
                                                                        >
                                                                            ({commit.hash})
                                                                        </Link>
                                                                    )}
                                                                </span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </section>

                {/* Future Updates CTA */}
                <section className="border-t border-border/50 bg-secondary/30 py-20">
                    <div className="mx-auto max-w-4xl px-4 lg:px-8">
                        <Card className="border-primary/20 bg-gradient-to-r from-primary/5 to-accent/5 animate-fade-in-up">
                            <CardContent className="p-8 text-center">
                                <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                                    <Sparkles className="h-8 w-8 text-primary" />
                                </div>
                                <h3 className="mb-3 text-2xl font-bold text-foreground">What's Next?</h3>
                                <p className="mb-6 text-muted-foreground">
                                    We're constantly working on new features and improvements. Want to contribute or suggest a feature?
                                </p>
                                <div className="flex flex-wrap items-center justify-center gap-4">
                                    <Link
                                        href="https://github.com/nayandas69/discord-role-guardian/issues/new"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/30"
                                    >
                                        Request Feature
                                    </Link>
                                    <Link
                                        href="https://github.com/nayandas69/discord-role-guardian"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="rounded-lg border border-border bg-card px-6 py-3 font-semibold text-foreground transition-all hover:bg-muted hover:shadow-lg"
                                    >
                                        Contribute on GitHub
                                    </Link>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    )
}
