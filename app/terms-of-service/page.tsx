/**
 * Terms of Service Page
 * Legal terms for using Discord Role Guardian bot
 * Author: nayandas69
 * Repository: https://github.com/nayandas69/discord-role-guardian
 */

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Shield, ExternalLink, Check, Code2, Scale } from "lucide-react"
import Link from "next/link"

export const metadata = {
    title: "Terms of Service | Discord Role Guardian",
    description:
        "Terms of Service for Discord Role Guardian bot - Open source Discord bot with role management, leveling, and more.",
}

export default function TermsOfServicePage() {
    // Last updated date
    const lastUpdated = "December 22, 2025"

    return (
        <div className="min-h-screen bg-background">
            <Header />

            <main className="relative overflow-hidden">
                {/* Enhanced background with multiple gradient orbs */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute -top-40 left-1/4 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] animate-pulse" />
                    <div
                        className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-accent/15 rounded-full blur-[100px] animate-pulse"
                        style={{ animationDelay: "1s" }}
                    />
                    <div
                        className="absolute bottom-0 left-1/2 w-[400px] h-[400px] bg-success/10 rounded-full blur-[80px] animate-pulse"
                        style={{ animationDelay: "2s" }}
                    />
                </div>

                <div className="relative mx-auto max-w-5xl px-4 py-20 lg:px-8 lg:py-28">
                    {/* Hero Section with enhanced design */}
                    <div className="mb-16 text-center animate-fade-in-down">
                        <div className="mb-6 flex justify-center">
                            <div className="relative">
                                <div className="absolute inset-0 rounded-3xl bg-primary/20 blur-2xl" />
                                <div className="relative rounded-3xl bg-gradient-to-br from-primary/10 via-accent/10 to-primary/5 p-6 backdrop-blur-sm border border-primary/20">
                                    <Shield className="h-16 w-16 text-primary" strokeWidth={1.5} />
                                </div>
                            </div>
                        </div>
                        <h1 className="mb-6 text-5xl font-bold tracking-tight text-foreground lg:text-7xl bg-gradient-to-br from-foreground to-foreground/60 bg-clip-text text-transparent">
                            Terms of Service
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                            Clear, transparent terms for using Discord Role Guardian. We believe in openness and respect for your
                            community.
                        </p>
                        <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-card/50 backdrop-blur-sm border border-border/50 px-5 py-2.5 text-sm text-muted-foreground">
                            <Scale className="h-4 w-4" />
                            Last updated: {lastUpdated}
                        </div>
                    </div>

                    {/* Key highlights grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16 animate-fade-in-up">
                        <div className="group rounded-2xl bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm border border-border/50 p-6 hover:border-primary/50 transition-all hover:shadow-xl hover:shadow-primary/5">
                            <div className="mb-3 inline-flex items-center justify-center rounded-xl bg-success/10 p-3">
                                <Code2 className="h-6 w-6 text-success" />
                            </div>
                            <h3 className="text-lg font-semibold text-foreground mb-2">100% Open Source</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                Full transparency. Review every line of code on GitHub.
                            </p>
                        </div>
                        <div className="group rounded-2xl bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm border border-border/50 p-6 hover:border-primary/50 transition-all hover:shadow-xl hover:shadow-primary/5">
                            <div className="mb-3 inline-flex items-center justify-center rounded-xl bg-primary/10 p-3">
                                <Shield className="h-6 w-6 text-primary" />
                            </div>
                            <h3 className="text-lg font-semibold text-foreground mb-2">Your Data, Your Control</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                Reset anytime. Self-host for complete ownership.
                            </p>
                        </div>
                        <div className="group rounded-2xl bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm border border-border/50 p-6 hover:border-primary/50 transition-all hover:shadow-xl hover:shadow-primary/5">
                            <div className="mb-3 inline-flex items-center justify-center rounded-xl bg-accent/10 p-3">
                                <Check className="h-6 w-6 text-accent" />
                            </div>
                            <h3 className="text-lg font-semibold text-foreground mb-2">Fair & Free</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                MIT License. Use freely with no hidden costs.
                            </p>
                        </div>
                    </div>

                    {/* Content Section with enhanced styling */}
                    <div className="space-y-6 animate-fade-in-up stagger-animation">
                        {/* Introduction */}
                        <section className="group rounded-2xl border border-border/50 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm p-8 hover:border-primary/30 transition-all">
                            <h2 className="mb-5 text-3xl font-bold text-foreground flex items-center gap-3">
                                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary text-lg font-bold">
                                    1
                                </span>
                                Introduction
                            </h2>
                            <div className="space-y-4 text-muted-foreground text-base leading-relaxed pl-13">
                                <p>
                                    Welcome to <span className="font-semibold text-foreground">Discord Role Guardian</span>! By using our
                                    bot, you agree to comply with and be bound by the following terms and conditions. Please review these
                                    terms carefully before using our service.
                                </p>
                                <p>
                                    Discord Role Guardian is a free, open-source Discord bot designed to help server administrators manage
                                    roles, welcome messages, leveling systems, ticket systems, and scheduled messages. The bot is provided
                                    as-is under the <span className="font-medium text-foreground">MIT License</span>.
                                </p>
                            </div>
                        </section>

                        {/* Acceptance of Terms */}
                        <section className="group rounded-2xl border border-border/50 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm p-8 hover:border-primary/30 transition-all">
                            <h2 className="mb-5 text-3xl font-bold text-foreground flex items-center gap-3">
                                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary text-lg font-bold">
                                    2
                                </span>
                                Acceptance of Terms
                            </h2>
                            <div className="space-y-4 text-muted-foreground text-base leading-relaxed pl-13">
                                <p>
                                    By inviting Discord Role Guardian to your Discord server or using any of its features, you acknowledge
                                    that you have read, understood, and agree to be bound by these Terms of Service.
                                </p>
                                <p>
                                    If you do not agree to these terms, please do not use the bot. We reserve the right to update or
                                    modify these terms at any time without prior notice.
                                </p>
                            </div>
                        </section>

                        {/* Use of Service */}
                        <section className="group rounded-2xl border border-border/50 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm p-8 hover:border-primary/30 transition-all">
                            <h2 className="mb-5 text-3xl font-bold text-foreground flex items-center gap-3">
                                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary text-lg font-bold">
                                    3
                                </span>
                                Use of Service
                            </h2>
                            <div className="space-y-5 text-muted-foreground text-base leading-relaxed pl-13">
                                <p className="font-semibold text-foreground text-lg">
                                    You agree to use Discord Role Guardian only for lawful purposes and in accordance with these terms.
                                </p>
                                <div className="rounded-xl bg-destructive/5 border border-destructive/20 p-5">
                                    <p className="font-semibold text-foreground mb-3">You agree NOT to:</p>
                                    <ul className="space-y-2.5">
                                        <li className="flex items-start gap-3">
                                            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-destructive/20 text-destructive text-xs font-bold mt-0.5">
                                                ✕
                                            </span>
                                            <span>Use the bot to violate any applicable laws or regulations</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-destructive/20 text-destructive text-xs font-bold mt-0.5">
                                                ✕
                                            </span>
                                            <span>Use the bot to harass, abuse, or harm other users</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-destructive/20 text-destructive text-xs font-bold mt-0.5">
                                                ✕
                                            </span>
                                            <span>Attempt to exploit, hack, or reverse-engineer the bot</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-destructive/20 text-destructive text-xs font-bold mt-0.5">
                                                ✕
                                            </span>
                                            <span>Use the bot to spam, flood, or disrupt Discord servers</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-destructive/20 text-destructive text-xs font-bold mt-0.5">
                                                ✕
                                            </span>
                                            <span>Impersonate the bot developers or claim ownership of the bot</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-destructive/20 text-destructive text-xs font-bold mt-0.5">
                                                ✕
                                            </span>
                                            <span>Use the bot in any way that could damage or overburden our infrastructure</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-destructive/20 text-destructive text-xs font-bold mt-0.5">
                                                ✕
                                            </span>
                                            <span>Violate Discord's Terms of Service or Community Guidelines</span>
                                        </li>
                                    </ul>
                                </div>
                                <p>
                                    We reserve the right to terminate or restrict access to the bot for any user or server that violates
                                    these terms.
                                </p>
                            </div>
                        </section>

                        {/* Bot Features and Functionality */}
                        <section className="group rounded-2xl border border-border/50 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm p-8 hover:border-primary/30 transition-all">
                            <h2 className="mb-5 text-3xl font-bold text-foreground flex items-center gap-3">
                                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary text-lg font-bold">
                                    4
                                </span>
                                Bot Features & Functionality
                            </h2>
                            <div className="space-y-5 text-muted-foreground text-base leading-relaxed pl-13">
                                <p className="text-foreground font-medium">Discord Role Guardian provides the following features:</p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="flex items-start gap-3 rounded-lg bg-card/50 border border-border/30 p-4">
                                        <Check className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                                        <div>
                                            <span className="font-semibold text-foreground block mb-1">Reaction Roles</span>
                                            <span className="text-sm">Automatically assign roles based on emoji reactions</span>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3 rounded-lg bg-card/50 border border-border/30 p-4">
                                        <Check className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                                        <div>
                                            <span className="font-semibold text-foreground block mb-1">Welcome Messages</span>
                                            <span className="text-sm">Send customized welcome messages when members join</span>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3 rounded-lg bg-card/50 border border-border/30 p-4">
                                        <Check className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                                        <div>
                                            <span className="font-semibold text-foreground block mb-1">Leave Messages</span>
                                            <span className="text-sm">Send goodbye messages when members leave</span>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3 rounded-lg bg-card/50 border border-border/30 p-4">
                                        <Check className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                                        <div>
                                            <span className="font-semibold text-foreground block mb-1">Leveling System</span>
                                            <span className="text-sm">Track user activity and assign level-based roles</span>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3 rounded-lg bg-card/50 border border-border/30 p-4">
                                        <Check className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                                        <div>
                                            <span className="font-semibold text-foreground block mb-1">Ticket System</span>
                                            <span className="text-sm">Create and manage support tickets</span>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3 rounded-lg bg-card/50 border border-border/30 p-4">
                                        <Check className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                                        <div>
                                            <span className="font-semibold text-foreground block mb-1">Scheduled Messages</span>
                                            <span className="text-sm">Send messages at specified times or intervals</span>
                                        </div>
                                    </div>
                                </div>
                                <p className="text-sm italic">
                                    We strive to keep the bot operational 24/7, but we cannot guarantee uninterrupted service. Features
                                    may be added, modified, or removed at any time.
                                </p>
                            </div>
                        </section>

                        {/* Data Storage and Persistence */}
                        <section className="group rounded-2xl border border-border/50 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm p-8 hover:border-primary/30 transition-all">
                            <h2 className="mb-5 text-3xl font-bold text-foreground flex items-center gap-3">
                                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary text-lg font-bold">
                                    5
                                </span>
                                Data Storage & Persistence
                            </h2>
                            <div className="space-y-5 text-muted-foreground text-base leading-relaxed pl-13">
                                <p>
                                    Discord Role Guardian stores server configurations locally on our hosting infrastructure (Railway.app
                                    with persistent volumes). This includes:
                                </p>
                                <ul className="space-y-2.5">
                                    <li>Server settings and bot configurations</li>
                                    <li>Reaction role configurations</li>
                                    <li>Welcome and leave message settings</li>
                                    <li>User XP and level data for leveling system</li>
                                    <li>Ticket configurations and active ticket data</li>
                                    <li>Scheduled message configurations</li>
                                </ul>
                                <p>
                                    All data is stored securely and is only accessible to your server. Configurations persist across bot
                                    restarts and updates. Server administrators can reset all configurations at any time using the{" "}
                                    <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono">/reset</code> command.
                                </p>
                            </div>
                        </section>

                        {/* Open Source and Self-Hosting */}
                        <section className="group rounded-2xl border border-success/30 bg-gradient-to-br from-success/10 via-card/40 to-card/40 backdrop-blur-sm p-8 hover:border-success/50 transition-all">
                            <h2 className="mb-5 text-3xl font-bold text-foreground flex items-center gap-3">
                                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-success/20 text-success text-lg font-bold">
                                    6
                                </span>
                                Open Source & Self-Hosting
                            </h2>
                            <div className="space-y-5 text-muted-foreground text-base leading-relaxed pl-13">
                                <p className="text-foreground font-medium text-lg">
                                    Discord Role Guardian is <span className="text-success">fully open source</span> and available on
                                    GitHub under the MIT License.
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                    <div className="flex items-start gap-3">
                                        <Check className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                                        <span>View, modify, and distribute the source code</span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <Check className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                                        <span>Self-host your own instance of the bot</span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <Check className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                                        <span>Contribute improvements and bug fixes</span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <Check className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                                        <span>Report issues and request features</span>
                                    </div>
                                </div>
                                <div className="rounded-xl bg-success/10 border border-success/30 p-6">
                                    <div className="flex items-start gap-4">
                                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-success/20 flex-shrink-0">
                                            <Code2 className="h-6 w-6 text-success" />
                                        </div>
                                        <div>
                                            <p className="font-semibold text-foreground mb-2 text-lg">View the source code</p>
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
                                                Check code, report issues, request features, and contribute to make it better for everyone.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <p className="text-sm italic">
                                    If you choose to self-host, you are responsible for your own infrastructure, data storage, and
                                    compliance with these terms.
                                </p>
                            </div>
                        </section>

                        {/* Limitation of Liability */}
                        <section className="group rounded-2xl border border-border/50 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm p-8 hover:border-primary/30 transition-all">
                            <h2 className="mb-5 text-3xl font-bold text-foreground flex items-center gap-3">
                                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary text-lg font-bold">
                                    7
                                </span>
                                Limitation of Liability
                            </h2>
                            <div className="space-y-5 text-muted-foreground text-base leading-relaxed pl-13">
                                <p>
                                    Discord Role Guardian is provided "as is" without any warranties, express or implied. We do not
                                    guarantee that the bot will be error-free, secure, or always available.
                                </p>
                                <p>
                                    To the fullest extent permitted by law, we shall not be liable for any direct, indirect, incidental,
                                    special, or consequential damages arising from your use of the bot, including but not limited to:
                                </p>
                                <ul className="space-y-2.5">
                                    <li>Loss of data or server configurations</li>
                                    <li>Service interruptions or downtime</li>
                                    <li>Bugs, errors, or unintended behavior</li>
                                    <li>Actions taken by server members based on bot functionality</li>
                                    <li>Third-party integrations or hosting platform issues</li>
                                </ul>
                                <p>You use the bot at your own risk and are responsible for backing up important server data.</p>
                            </div>
                        </section>

                        {/* Administrator Responsibilities */}
                        <section className="group rounded-2xl border border-border/50 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm p-8 hover:border-primary/30 transition-all">
                            <h2 className="mb-5 text-3xl font-bold text-foreground flex items-center gap-3">
                                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary text-lg font-bold">
                                    8
                                </span>
                                Administrator Responsibilities
                            </h2>
                            <div className="space-y-5 text-muted-foreground text-base leading-relaxed pl-13">
                                <p>Server administrators who invite Discord Role Guardian are responsible for:</p>
                                <ul className="space-y-2.5">
                                    <li>Configuring the bot appropriately for their server</li>
                                    <li>Ensuring bot usage complies with Discord's Terms of Service</li>
                                    <li>Monitoring bot activity and user interactions</li>
                                    <li>Managing permissions and access controls</li>
                                    <li>Informing server members about data collection (see Privacy Policy)</li>
                                    <li>Handling disputes or issues arising from bot usage</li>
                                </ul>
                                <p>
                                    The bot requires Administrator permission to function properly. Ensure you trust the bot before
                                    granting these permissions.
                                </p>
                            </div>
                        </section>

                        {/* Termination */}
                        <section className="group rounded-2xl border border-border/50 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm p-8 hover:border-primary/30 transition-all">
                            <h2 className="mb-5 text-3xl font-bold text-foreground flex items-center gap-3">
                                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary text-lg font-bold">
                                    9
                                </span>
                                Termination
                            </h2>
                            <div className="space-y-5 text-muted-foreground text-base leading-relaxed pl-13">
                                <p>
                                    You may stop using Discord Role Guardian at any time by removing the bot from your server. All stored
                                    configurations for your server will remain in our database unless you request deletion.
                                </p>
                                <p>
                                    We reserve the right to terminate or suspend access to the bot for any server that violates these
                                    terms, without prior notice or liability.
                                </p>
                            </div>
                        </section>

                        {/* Changes to Terms */}
                        <section className="group rounded-2xl border border-border/50 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm p-8 hover:border-primary/30 transition-all">
                            <h2 className="mb-5 text-3xl font-bold text-foreground flex items-center gap-3">
                                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary text-lg font-bold">
                                    10
                                </span>
                                Changes to Terms
                            </h2>
                            <div className="space-y-5 text-muted-foreground text-base leading-relaxed pl-13">
                                <p>
                                    We may update these Terms of Service from time to time. Changes will be posted on this page with an
                                    updated "Last updated" date. Continued use of the bot after changes constitutes acceptance of the new
                                    terms.
                                </p>
                                <p>
                                    For significant changes, we will make reasonable efforts to notify users through our GitHub repository
                                    or Discord support server.
                                </p>
                            </div>
                        </section>

                        {/* Contact Information */}
                        <section className="group rounded-2xl border border-border/50 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm p-8 hover:border-primary/30 transition-all">
                            <h2 className="mb-5 text-3xl font-bold text-foreground flex items-center gap-3">
                                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary text-lg font-bold">
                                    11
                                </span>
                                Contact Information
                            </h2>
                            <div className="space-y-5 text-muted-foreground text-base leading-relaxed pl-13">
                                <p>If you have questions about these Terms of Service, please contact us:</p>
                                <ul className="space-y-2.5">
                                    <li>
                                        <span className="font-medium text-foreground">GitHub Issues:</span>{" "}
                                        <Link
                                            href="https://github.com/nayandas69/discord-role-guardian/issues"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-primary hover:underline"
                                        >
                                            Report an issue or ask a question
                                        </Link>
                                    </li>
                                    <li>
                                        <span className="font-medium text-foreground">Developer:</span> nayandas69 on GitHub
                                    </li>
                                </ul>
                                <p>
                                    The bot is open source, so you can also review the code, report bugs, or suggest features directly on
                                    our GitHub repository.
                                </p>
                            </div>
                        </section>

                        {/* Agreement */}
                        <section className="rounded-2xl border border-primary/50 bg-gradient-to-br from-primary/10 via-accent/5 to-card/40 backdrop-blur-sm p-8">
                            <h2 className="mb-4 text-2xl font-bold text-foreground">Your Agreement</h2>
                            <p className="text-muted-foreground text-base leading-relaxed">
                                By using Discord Role Guardian, you acknowledge that you have read, understood, and agree to these Terms
                                of Service. If you do not agree, please remove the bot from your server.
                            </p>
                        </section>

                        {/* Navigation Links */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-6">
                            <Link
                                href="/privacy-policy"
                                className="group rounded-xl border border-border/50 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm px-8 py-6 text-center font-semibold text-foreground transition-all hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 hover:scale-[1.02]"
                            >
                                <span className="block mb-1">Read Privacy Policy</span>
                                <span className="text-sm font-normal text-muted-foreground group-hover:text-primary transition-colors">
                                    Learn how we protect your data
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
