/**
 * Privacy Policy Page
 * Privacy practices for Discord Role Guardian bot
 * Author: nayandas69
 * Repository: https://github.com/nayandas69/discord-role-guardian
 */

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ShieldCheck, ExternalLink, Check, Lock, Eye, Database } from "lucide-react"
import Link from "next/link"

export const metadata = {
    title: "Privacy Policy | Discord Role Guardian",
    description: "Privacy Policy for Discord Role Guardian bot - Learn how we handle and protect your data.",
}

export default function PrivacyPolicyPage() {
    // Last updated date
    const lastUpdated = "December 22, 2025"

    return (
        <div className="min-h-screen bg-background">
            <Header />

            <main className="relative overflow-hidden">
                {/* Enhanced background with multiple gradient orbs */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute -top-40 right-1/4 w-[600px] h-[600px] bg-success/20 rounded-full blur-[120px] animate-pulse" />
                    <div
                        className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-primary/15 rounded-full blur-[100px] animate-pulse"
                        style={{ animationDelay: "1s" }}
                    />
                    <div
                        className="absolute bottom-0 right-1/2 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[80px] animate-pulse"
                        style={{ animationDelay: "2s" }}
                    />
                </div>

                <div className="relative mx-auto max-w-5xl px-4 py-20 lg:px-8 lg:py-28">
                    {/* Hero Section with enhanced design */}
                    <div className="mb-16 text-center animate-fade-in-down">
                        <div className="mb-6 flex justify-center">
                            <div className="relative">
                                <div className="absolute inset-0 rounded-3xl bg-success/20 blur-2xl" />
                                <div className="relative rounded-3xl bg-gradient-to-br from-success/10 via-primary/10 to-success/5 p-6 backdrop-blur-sm border border-success/20">
                                    <ShieldCheck className="h-16 w-16 text-success" strokeWidth={1.5} />
                                </div>
                            </div>
                        </div>
                        <h1 className="mb-6 text-5xl font-bold tracking-tight text-foreground lg:text-7xl bg-gradient-to-br from-foreground to-foreground/60 bg-clip-text text-transparent">
                            Privacy Policy
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                            Your privacy matters. Understand exactly what data we collect, how we use it, and your rights to control
                            it.
                        </p>
                        <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-card/50 backdrop-blur-sm border border-border/50 px-5 py-2.5 text-sm text-muted-foreground">
                            <Lock className="h-4 w-4" />
                            Last updated: {lastUpdated}
                        </div>
                    </div>

                    {/* Key privacy highlights grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16 animate-fade-in-up">
                        <div className="group rounded-2xl bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm border border-border/50 p-6 hover:border-success/50 transition-all hover:shadow-xl hover:shadow-success/5">
                            <div className="mb-3 inline-flex items-center justify-center rounded-xl bg-success/10 p-3">
                                <Eye className="h-6 w-6 text-success" />
                            </div>
                            <h3 className="text-lg font-semibold text-foreground mb-2">Full Transparency</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                Open source code. See exactly what we collect and why.
                            </p>
                        </div>
                        <div className="group rounded-2xl bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm border border-border/50 p-6 hover:border-success/50 transition-all hover:shadow-xl hover:shadow-success/5">
                            <div className="mb-3 inline-flex items-center justify-center rounded-xl bg-primary/10 p-3">
                                <Lock className="h-6 w-6 text-primary" />
                            </div>
                            <h3 className="text-lg font-semibold text-foreground mb-2">Secure Storage</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                Encrypted infrastructure. Your data stays protected.
                            </p>
                        </div>
                        <div className="group rounded-2xl bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm border border-border/50 p-6 hover:border-success/50 transition-all hover:shadow-xl hover:shadow-success/5">
                            <div className="mb-3 inline-flex items-center justify-center rounded-xl bg-accent/10 p-3">
                                <Database className="h-6 w-6 text-accent" />
                            </div>
                            <h3 className="text-lg font-semibold text-foreground mb-2">Minimal Data</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                Only essential data. Never sold or shared with others.
                            </p>
                        </div>
                    </div>

                    {/* Content Section with enhanced styling */}
                    <div className="space-y-6 animate-fade-in-up stagger-animation">
                        {/* Introduction */}
                        <section className="group rounded-2xl border border-border/50 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm p-8 hover:border-success/30 transition-all">
                            <h2 className="mb-5 text-3xl font-bold text-foreground flex items-center gap-3">
                                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-success/10 text-success text-lg font-bold">
                                    1
                                </span>
                                Introduction
                            </h2>
                            <div className="space-y-4 text-muted-foreground text-base leading-relaxed pl-13">
                                <p>
                                    Your privacy is important to us. This Privacy Policy explains how{" "}
                                    <span className="font-semibold text-foreground">Discord Role Guardian</span> collects, uses, stores,
                                    and protects your data when you use our bot.
                                </p>
                                <p>
                                    Discord Role Guardian is designed with{" "}
                                    <span className="font-medium text-success">privacy in mind</span>. We only collect data necessary to
                                    provide bot functionality and do not sell or share your data with third parties.
                                </p>
                            </div>
                        </section>

                        {/* Information We Collect */}
                        <section className="group rounded-2xl border border-border/50 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm p-8 hover:border-success/30 transition-all">
                            <h2 className="mb-5 text-3xl font-bold text-foreground flex items-center gap-3">
                                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-success/10 text-success text-lg font-bold">
                                    2
                                </span>
                                Information We Collect
                            </h2>
                            <div className="space-y-6 text-muted-foreground text-base leading-relaxed pl-13">
                                <p className="text-foreground font-medium text-lg">
                                    Discord Role Guardian collects the following types of data:
                                </p>

                                <div className="space-y-5">
                                    <div className="rounded-xl bg-card/50 border border-border/30 p-6">
                                        <h3 className="mb-4 font-bold text-foreground text-lg flex items-center gap-2">
                                            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary/20 text-primary text-sm">
                                                ●
                                            </span>
                                            Server Configuration Data
                                        </h3>
                                        <ul className="space-y-2.5 ml-9">
                                            <li className="flex items-start gap-2">
                                                <Check className="h-4 w-4 text-primary flex-shrink-0 mt-1" />
                                                <span>Server ID (Guild ID)</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <Check className="h-4 w-4 text-primary flex-shrink-0 mt-1" />
                                                <span>Channel IDs for bot features (welcome, leave, leveling, tickets)</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <Check className="h-4 w-4 text-primary flex-shrink-0 mt-1" />
                                                <span>Role IDs for reaction roles and level rewards</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <Check className="h-4 w-4 text-primary flex-shrink-0 mt-1" />
                                                <span>Custom messages and embed configurations</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <Check className="h-4 w-4 text-primary flex-shrink-0 mt-1" />
                                                <span>Reaction role setups (message IDs, emoji, role mappings)</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <Check className="h-4 w-4 text-primary flex-shrink-0 mt-1" />
                                                <span>Scheduled message configurations</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <Check className="h-4 w-4 text-primary flex-shrink-0 mt-1" />
                                                <span>Ticket system settings and categories</span>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="rounded-xl bg-card/50 border border-border/30 p-6">
                                        <h3 className="mb-4 font-bold text-foreground text-lg flex items-center gap-2">
                                            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-accent/20 text-accent text-sm">
                                                ●
                                            </span>
                                            User Activity Data (Leveling System)
                                        </h3>
                                        <ul className="space-y-2.5 ml-9">
                                            <li className="flex items-start gap-2">
                                                <Check className="h-4 w-4 text-accent flex-shrink-0 mt-1" />
                                                <span>User ID</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <Check className="h-4 w-4 text-accent flex-shrink-0 mt-1" />
                                                <span>Server ID (Guild ID)</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <Check className="h-4 w-4 text-accent flex-shrink-0 mt-1" />
                                                <span>XP (experience points) earned</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <Check className="h-4 w-4 text-accent flex-shrink-0 mt-1" />
                                                <span>Current level</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <Check className="h-4 w-4 text-accent flex-shrink-0 mt-1" />
                                                <span>Message timestamps (for XP cooldown, not message content)</span>
                                            </li>
                                        </ul>
                                        <div className="mt-4 rounded-lg bg-success/10 border border-success/20 p-4 ml-9">
                                            <p className="text-sm text-success font-medium flex items-start gap-2">
                                                <ShieldCheck className="h-5 w-5 flex-shrink-0" />
                                                <span>
                                                    We do NOT collect or store message content. Only metadata for XP calculation is tracked.
                                                </span>
                                            </p>
                                        </div>
                                    </div>

                                    <div className="rounded-xl bg-card/50 border border-border/30 p-6">
                                        <h3 className="mb-4 font-bold text-foreground text-lg flex items-center gap-2">
                                            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-success/20 text-success text-sm">
                                                ●
                                            </span>
                                            Ticket System Data
                                        </h3>
                                        <ul className="space-y-2.5 ml-9">
                                            <li className="flex items-start gap-2">
                                                <Check className="h-4 w-4 text-success flex-shrink-0 mt-1" />
                                                <span>Ticket ID and number</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <Check className="h-4 w-4 text-success flex-shrink-0 mt-1" />
                                                <span>User ID (ticket creator)</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <Check className="h-4 w-4 text-success flex-shrink-0 mt-1" />
                                                <span>Ticket channel ID</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <Check className="h-4 w-4 text-success flex-shrink-0 mt-1" />
                                                <span>Ticket status (open, claimed, closed)</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <Check className="h-4 w-4 text-success flex-shrink-0 mt-1" />
                                                <span>Creation and closure timestamps</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <Check className="h-4 w-4 text-success flex-shrink-0 mt-1" />
                                                <span>Assigned staff member ID (if claimed)</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="rounded-xl bg-destructive/10 border border-destructive/30 p-6">
                                    <p className="font-bold text-foreground text-lg mb-3">We do NOT collect:</p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                                        <div className="flex items-center gap-2">
                                            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-destructive/20 text-destructive text-xs font-bold">
                                                ✕
                                            </span>
                                            <span>Personal messages</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-destructive/20 text-destructive text-xs font-bold">
                                                ✕
                                            </span>
                                            <span>Email addresses</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-destructive/20 text-destructive text-xs font-bold">
                                                ✕
                                            </span>
                                            <span>Payment information</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-destructive/20 text-destructive text-xs font-bold">
                                                ✕
                                            </span>
                                            <span>Data outside Discord</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* How We Use Your Data */}
                        <section className="group rounded-2xl border border-border/50 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm p-8 hover:border-success/30 transition-all">
                            <h2 className="mb-5 text-3xl font-bold text-foreground flex items-center gap-3">
                                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-success/10 text-success text-lg font-bold">
                                    3
                                </span>
                                How We Use Your Data
                            </h2>
                            <div className="space-y-3 text-muted-foreground text-base leading-relaxed pl-13">
                                <p>We use collected data exclusively to provide bot functionality:</p>
                                <ul className="space-y-2.5 ml-9">
                                    <li className="flex items-start gap-2">
                                        <Check className="h-4 w-4 text-success flex-shrink-0 mt-1" />
                                        <span>Reaction Roles:</span> Store emoji-to-role mappings to automatically assign roles
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <Check className="h-4 w-4 text-success flex-shrink-0 mt-1" />
                                        <span>Welcome/Leave Messages:</span> Store channel IDs and custom messages to send notifications
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <Check className="h-4 w-4 text-success flex-shrink-0 mt-1" />
                                        <span>Leveling System:</span> Track user XP and levels to assign level-based roles
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <Check className="h-4 w-4 text-success flex-shrink-0 mt-1" />
                                        <span>Ticket System:</span> Manage support tickets and track ticket history
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <Check className="h-4 w-4 text-success flex-shrink-0 mt-1" />
                                        <span>Scheduled Messages:</span> Store and execute timed message delivery
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <Check className="h-4 w-4 text-success flex-shrink-0 mt-1" />
                                        <span>Bot Operation:</span> Maintain configurations across restarts and updates
                                    </li>
                                </ul>
                                <p className="pt-2 font-medium text-foreground">
                                    Your data is NEVER used for marketing, analytics, profiling, or sold to third parties.
                                </p>
                            </div>
                        </section>

                        {/* Data Storage and Security */}
                        <section className="group rounded-2xl border border-border/50 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm p-8 hover:border-success/30 transition-all">
                            <h2 className="mb-5 text-3xl font-bold text-foreground flex items-center gap-3">
                                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-success/10 text-success text-lg font-bold">
                                    4
                                </span>
                                Data Storage and Security
                            </h2>
                            <div className="space-y-3 text-muted-foreground text-base leading-relaxed pl-13">
                                <p>
                                    All bot data is stored securely on Railway.app infrastructure with persistent volumes. Data is stored
                                    in JSON format and is only accessible by the bot application.
                                </p>

                                <div className="mt-4 space-y-2">
                                    <h3 className="font-semibold text-foreground">Security Measures:</h3>
                                    <ul className="space-y-2.5 pl-9">
                                        <li className="flex items-start gap-2">
                                            <Check className="h-4 w-4 text-success flex-shrink-0 mt-1" />
                                            <span>Data stored on secure, encrypted infrastructure (Railway.app with persistent volumes)</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <Check className="h-4 w-4 text-success flex-shrink-0 mt-1" />
                                            <span>No database exposed to the public internet</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <Check className="h-4 w-4 text-success flex-shrink-0 mt-1" />
                                            <span>Access restricted to bot application only</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <Check className="h-4 w-4 text-success flex-shrink-0 mt-1" />
                                            <span>Regular backups via persistent volume snapshots</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <Check className="h-4 w-4 text-success flex-shrink-0 mt-1" />
                                            <span>Secure environment variable management for sensitive tokens</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <Check className="h-4 w-4 text-success flex-shrink-0 mt-1" />
                                            <span>HTTPS-only communication with Discord API</span>
                                        </li>
                                    </ul>
                                </div>

                                <p className="pt-2">
                                    While we implement industry-standard security practices, no method of data storage is 100% secure. We
                                    cannot guarantee absolute security but take all reasonable precautions.
                                </p>
                            </div>
                        </section>

                        {/* Data Retention */}
                        <section className="group rounded-2xl border border-border/50 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm p-8 hover:border-success/30 transition-all">
                            <h2 className="mb-5 text-3xl font-bold text-foreground flex items-center gap-3">
                                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-success/10 text-success text-lg font-bold">
                                    5
                                </span>
                                Data Retention
                            </h2>
                            <div className="space-y-3 text-muted-foreground text-base leading-relaxed pl-13">
                                <p>We retain server data as long as the bot remains in your server. Data retention periods:</p>
                                <ul className="space-y-2.5 ml-9">
                                    <li className="flex items-start gap-2">
                                        <Check className="h-4 w-4 text-success flex-shrink-0 mt-1" />
                                        <span>Active Servers:</span> Data is retained indefinitely while bot is active in the server
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <Check className="h-4 w-4 text-success flex-shrink-0 mt-1" />
                                        <span>Removed Bot:</span> Data is retained for 30 days after bot removal (in case of accidental
                                        removal)
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <Check className="h-4 w-4 text-success flex-shrink-0 mt-1" />
                                        <span>Manual Reset:</span> Server administrators can delete all data using the{" "}
                                        <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono">/reset</code> command
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <Check className="h-4 w-4 text-success flex-shrink-0 mt-1" />
                                        <span>Data Deletion Requests:</span> We honor data deletion requests within 7 business days
                                    </li>
                                </ul>
                                <p>
                                    Leveling data, ticket history, and other user activity data is retained as long as the bot is in the
                                    server. Users can request personal data deletion at any time.
                                </p>
                            </div>
                        </section>

                        {/* Data Sharing and Third Parties */}
                        <section className="group rounded-2xl border border-border/50 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm p-8 hover:border-success/30 transition-all">
                            <h2 className="mb-5 text-3xl font-bold text-foreground flex items-center gap-3">
                                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-success/10 text-success text-lg font-bold">
                                    6
                                </span>
                                Data Sharing and Third Parties
                            </h2>
                            <div className="space-y-3 text-muted-foreground text-base leading-relaxed pl-13">
                                <p>
                                    We do NOT sell, trade, or share your data with third parties. Your data remains private and is only
                                    used for bot functionality.
                                </p>

                                <div className="mt-4 space-y-2">
                                    <h3 className="font-semibold text-foreground">Third-Party Services We Use:</h3>
                                    <ul className="space-y-2.5 pl-9">
                                        <li className="flex items-start gap-2">
                                            <Check className="h-4 w-4 text-success flex-shrink-0 mt-1" />
                                            <span>Discord API:</span> Required to operate the bot and access server data. Subject to Discord's
                                            Privacy Policy.
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <Check className="h-4 w-4 text-success flex-shrink-0 mt-1" />
                                            <span>Railway.app:</span> Hosting infrastructure for bot deployment and data storage. Subject to
                                            Railway's Privacy Policy.
                                        </li>
                                    </ul>
                                </div>

                                <p className="pt-2">
                                    We may disclose data if required by law, court order, or to protect our rights and safety.
                                </p>
                            </div>
                        </section>

                        {/* Your Rights and Control */}
                        <section className="group rounded-2xl border border-border/50 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm p-8 hover:border-success/30 transition-all">
                            <h2 className="mb-5 text-3xl font-bold text-foreground flex items-center gap-3">
                                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-success/10 text-success text-lg font-bold">
                                    7
                                </span>
                                Your Rights and Control
                            </h2>
                            <div className="space-y-3 text-muted-foreground text-base leading-relaxed pl-13">
                                <p>You have full control over your data:</p>
                                <ul className="space-y-2.5 ml-9">
                                    <li className="flex items-start gap-2">
                                        <Check className="h-4 w-4 text-success flex-shrink-0 mt-1" />
                                        <span>Access:</span> Server administrators can view all stored configurations via bot commands
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <Check className="h-4 w-4 text-success flex-shrink-0 mt-1" />
                                        <span>Modify:</span> Update configurations at any time using setup commands
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <Check className="h-4 w-4 text-success flex-shrink-0 mt-1" />
                                        <span>Delete:</span> Use{" "}
                                        <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono">/reset</code> command to delete
                                        all server data
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <Check className="h-4 w-4 text-success flex-shrink-0 mt-1" />
                                        <span>Remove Bot:</span> Kick the bot from your server to stop data collection
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <Check className="h-4 w-4 text-success flex-shrink-0 mt-1" />
                                        <span>Data Export:</span> Request a copy of your data by contacting us on GitHub
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <Check className="h-4 w-4 text-success flex-shrink-0 mt-1" />
                                        <span>Opt-Out:</span> Individual users can request removal from leveling system
                                    </li>
                                </ul>
                                <p className="pt-2">
                                    For data deletion requests or questions about your data, please contact us via GitHub issues.
                                </p>
                            </div>
                        </section>

                        {/* Open Source Transparency */}
                        <section className="group rounded-2xl border border-success/30 bg-gradient-to-br from-success/10 via-primary/5 to-card/40 backdrop-blur-sm p-8 hover:border-success/50 transition-all">
                            <h2 className="mb-5 text-3xl font-bold text-foreground flex items-center gap-3">
                                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-success/10 text-success text-lg font-bold">
                                    8
                                </span>
                                Open Source Transparency
                            </h2>
                            <div className="space-y-5 text-muted-foreground text-base leading-relaxed pl-13">
                                <p className="text-foreground font-medium text-lg">
                                    Discord Role Guardian is <span className="text-success">fully open source</span>. You can review
                                    exactly how we handle data by inspecting the source code on GitHub.
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                    <div className="flex items-start gap-3">
                                        <Check className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                                        <span>All data handling code is publicly visible</span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <Check className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                                        <span>No hidden tracking or analytics</span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <Check className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                                        <span>Community can audit and verify privacy practices</span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <Check className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                                        <span>You can self-host for complete data control</span>
                                    </div>
                                </div>
                                <div className="rounded-xl bg-success/10 border border-success/30 p-6">
                                    <div className="flex items-start gap-4">
                                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-success/20 flex-shrink-0">
                                            <Eye className="h-6 w-6 text-success" />
                                        </div>
                                        <div>
                                            <p className="font-semibold text-foreground mb-2 text-lg">Review the code</p>
                                            <Link
                                                href="https://github.com/nayandas69/discord-role-guardian"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 text-success hover:text-success/80 transition-colors font-medium group/link"
                                            >
                                                <span>github.com/nayandas69/discord-role-guardian</span>
                                                <ExternalLink className="h-4 w-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                                            </Link>
                                            <p className="text-sm mt-3">
                                                Inspect our privacy practices, audit data handling, and verify that we do exactly what we say.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <p className="text-sm italic">
                                    Self-hosting gives you complete control over data storage and privacy. See our installation guide for
                                    details.
                                </p>
                            </div>
                        </section>

                        {/* Children's Privacy */}
                        <section className="group rounded-2xl border border-border/50 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm p-8 hover:border-success/30 transition-all">
                            <h2 className="mb-5 text-3xl font-bold text-foreground flex items-center gap-3">
                                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-success/10 text-success text-lg font-bold">
                                    9
                                </span>
                                Children's Privacy
                            </h2>
                            <div className="space-y-3 text-muted-foreground text-base leading-relaxed pl-13">
                                <p>
                                    Discord Role Guardian is designed for use on Discord, which requires users to be at least 13 years old
                                    (or older depending on location).
                                </p>
                                <p>
                                    We do not knowingly collect personal information from children under 13. If you believe we have
                                    collected data from a child under 13, please contact us immediately, and we will delete the data.
                                </p>
                            </div>
                        </section>

                        {/* Discord's Privacy Policy */}
                        <section className="group rounded-2xl border border-border/50 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm p-8 hover:border-success/30 transition-all">
                            <h2 className="mb-5 text-3xl font-bold text-foreground flex items-center gap-3">
                                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-success/10 text-success text-lg font-bold">
                                    10
                                </span>
                                Discord's Privacy Policy
                            </h2>
                            <div className="space-y-3 text-muted-foreground text-base leading-relaxed pl-13">
                                <p>
                                    Discord Role Guardian operates within Discord's platform and is subject to Discord's Terms of Service
                                    and Privacy Policy.
                                </p>
                                <p>
                                    Discord collects its own data independently of this bot. Please review{" "}
                                    <Link
                                        href="https://discord.com/privacy"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-primary hover:underline"
                                    >
                                        Discord's Privacy Policy
                                    </Link>{" "}
                                    to understand how Discord handles your data.
                                </p>
                            </div>
                        </section>

                        {/* Changes to Privacy Policy */}
                        <section className="group rounded-2xl border border-border/50 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm p-8 hover:border-success/30 transition-all">
                            <h2 className="mb-5 text-3xl font-bold text-foreground flex items-center gap-3">
                                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-success/10 text-success text-lg font-bold">
                                    11
                                </span>
                                Changes to Privacy Policy
                            </h2>
                            <div className="space-y-3 text-muted-foreground text-base leading-relaxed pl-13">
                                <p>
                                    We may update this Privacy Policy from time to time. Changes will be posted on this page with an
                                    updated "Last updated" date.
                                </p>
                                <p>
                                    For significant changes that affect how we handle your data, we will make reasonable efforts to notify
                                    users through our GitHub repository or Discord support server.
                                </p>
                                <p>Continued use of the bot after changes constitutes acceptance of the updated Privacy Policy.</p>
                            </div>
                        </section>

                        {/* Contact */}
                        <section className="rounded-2xl border border-success/50 bg-gradient-to-br from-success/10 via-primary/5 to-card/40 backdrop-blur-sm p-8">
                            <h2 className="mb-4 text-2xl font-bold text-foreground">Questions About Your Privacy?</h2>
                            <p className="text-muted-foreground text-base leading-relaxed mb-5">
                                If you have questions, concerns, or requests regarding this Privacy Policy or your data, please contact
                                us on GitHub.
                            </p>
                            <Link
                                href="https://github.com/nayandas69/discord-role-guardian/issues"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 rounded-lg bg-success/20 border border-success/30 px-6 py-3 font-semibold text-success hover:bg-success/30 transition-all group/btn"
                            >
                                <span>Open GitHub Issue</span>
                                <ExternalLink className="h-5 w-5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                            </Link>
                        </section>

                        {/* Navigation Links */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-6">
                            <Link
                                href="/terms-of-service"
                                className="group rounded-xl border border-border/50 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm px-8 py-6 text-center font-semibold text-foreground transition-all hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 hover:scale-[1.02]"
                            >
                                <span className="block mb-1">Read Terms of Service</span>
                                <span className="text-sm font-normal text-muted-foreground group-hover:text-primary transition-colors">
                                    Understand the usage terms
                                </span>
                            </Link>
                            <Link
                                href="/#contact"
                                className="group rounded-xl border border-border/50 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm px-8 py-6 text-center font-semibold text-foreground transition-all hover:border-accent/50 hover:shadow-2xl hover:shadow-accent/10 hover:scale-[1.02]"
                            >
                                <span className="block mb-1">Contact Us</span>
                                <span className="text-sm font-normal text-muted-foreground group-hover:text-accent transition-colors">
                                    Questions? Reach out on GitHub
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    )
}
