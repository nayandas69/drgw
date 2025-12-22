/**
 * FAQ Page
 * Frequently Asked Questions for Discord Role Guardian
 * Addresses common user queries about setup, features, and self-hosting
 * Author: nayandas69
 * Repository: https://github.com/nayandas69/discord-role-guardian
 */

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { HelpCircle, CheckCircle, AlertCircle, Sparkles, Code, Shield } from "lucide-react"
import Link from "next/link"

/**
 * FAQ item interface
 * Defines structure for question and answer pairs
 */
interface FAQItem {
    question: string
    answer: string | string[]
    category: string
}

/**
 * FAQ categories for organized navigation
 */
const categories = [
    { id: "general", name: "General", icon: HelpCircle, color: "text-primary" },
    { id: "features", name: "Features", icon: Sparkles, color: "text-[var(--feature-welcome)]" },
    { id: "setup", name: "Setup & Usage", icon: CheckCircle, color: "text-[var(--feature-leveling)]" },
    { id: "selfhost", name: "Self-Hosting", icon: Code, color: "text-[var(--feature-ticket)]" },
    { id: "troubleshooting", name: "Troubleshooting", icon: AlertCircle, color: "text-destructive" },
]

/**
 * Complete FAQ list organized by category
 * UPDATED: All answers now reflect actual bot functionality
 */
const faqs: FAQItem[] = [
    // General Questions
    {
        category: "general",
        question: "What is Discord Role Guardian?",
        answer:
            "Discord Role Guardian is a free, open-source Discord bot for advanced server management. It provides 14 powerful commands for reaction roles, welcome/leave messages, XP leveling with auto-role rewards, support tickets, and scheduled announcements. Built with Node.js and discord.js.",
    },
    {
        category: "general",
        question: "Is Discord Role Guardian free?",
        answer:
            "Yes! Discord Role Guardian is 100% free and open source under the MIT License. View source code, report bugs, and contribute on GitHub. You can use it for free or host it yourself at no cost.",
    },
    {
        category: "general",
        question: "Do I need coding knowledge to use the bot?",
        answer:
            "No coding knowledge required! The bot uses Discord's slash commands (type / to see all commands). All features are configured through simple commands like /setup-reaction-roles, /setup-welcome, /setup-leveling, etc.",
    },
    {
        category: "general",
        question: "Where is my data stored?",
        answer:
            "Data is stored in JSON files using persistent Railway volumes. This includes reaction role configs, welcome/leave settings, user XP data, scheduled messages, and ticket configurations. If you self-host, all data stays on your server in the /data folder.",
    },
    {
        category: "general",
        question: "Is the bot always online?",
        answer:
            "The public hosted version runs 24/7 on Railway with UptimeRobot monitoring. You can check real-time uptime on our /status page. For self-hosted instances, uptime depends on your hosting setup.",
    },
    {
        category: "general",
        question: "How many servers can use the bot?",
        answer:
            "The bot supports multi-server functionality with guild-specific configurations. Each server has independent settings for all features. There's no limit on how many servers can use the bot simultaneously.",
    },

    // Features Questions
    {
        category: "features",
        question: "What are reaction roles and how do they work?",
        answer: [
            "Members click emoji reactions on a message to self-assign roles",
            "Use /setup-reaction-roles with channel, title, description, and roles (format: emoji:roleID,emoji:roleID)",
            "Bot automatically adds emojis and listens for reactions",
            "Removing the reaction removes the role automatically",
            "Works with both Unicode emojis (🔴🔵) and custom server emojis",
            "Multiple reaction role messages can be created per server",
        ],
    },
    {
        category: "features",
        question: "How does the leveling system work?",
        answer: [
            "Members earn XP by sending messages (default: 15-25 XP per message)",
            "60-second cooldown per user to prevent spam/farming",
            "Level formula: Level N requires (N × N × 100) total XP",
            "Auto role rewards at specific levels with /add-level-role",
            "Check rank with /rank [user] - shows level, XP, and progress bar",
            "View server leaderboard with /leaderboard (top 5-25 members)",
            "Optional level-up announcements and XP gain notifications",
            "Guild-specific XP - doesn't transfer between servers",
        ],
    },
    {
        category: "features",
        question: "Can I customize welcome and leave messages?",
        answer: [
            "Yes! Use /setup-welcome and /setup-leave commands",
            "Placeholders: {user} (mention), {server} (name), {count} (member count)",
            "Custom hex colors for embeds (e.g., #00ff00 for green)",
            "Welcome messages show account creation date and member number",
            "Leave messages show how long member was in server",
            "Both require Send Messages + Embed Links permissions",
        ],
    },
    {
        category: "features",
        question: "What is the ticket system?",
        answer: [
            "Create private support channels with /setup-ticket",
            "Members click a button to create tickets",
            "Each ticket gets a private channel with staff access",
            "Supports up to 5 different staff roles per server",
            "Optional transcript channel for ticket logs",
            "View statistics with /ticket-stats (admin only)",
            "Tickets are organized in a specified category",
        ],
    },
    {
        category: "features",
        question: "Can I schedule recurring messages?",
        answer: [
            "Yes! Use /schedule-message with 4 schedule types:",
            "Once - One-time message (auto-removes after sending)",
            "Daily - Same time every day",
            "Weekly - Specific day and time (0=Sunday, 6=Saturday)",
            "Monthly - Specific day of month (1-31) and time",
            "Timezone-aware scheduling with UTC offset support",
            "View all with /list-scheduled, remove with /remove-scheduled",
            "Changes apply immediately without bot restart",
        ],
    },
    {
        category: "features",
        question: "What commands are available?",
        answer: [
            "Admin Commands (14 total):",
            "/setup-reaction-roles - Create reaction role messages",
            "/remove-reaction-roles - Delete reaction role config",
            "/setup-welcome - Configure welcome messages",
            "/setup-leave - Configure leave messages",
            "/setup-leveling - Enable XP/leveling system",
            "/add-level-role - Add role rewards for levels",
            "/setup-ticket - Create ticket system",
            "/schedule-message - Schedule announcements",
            "/list-scheduled - View scheduled messages",
            "/remove-scheduled - Delete scheduled message",
            "/ticket-stats - View ticket statistics",
            "/reset - Reset all server configurations",
            "",
            "Public Commands:",
            "/rank [user] - Check XP and level",
            "/leaderboard [limit] - View top ranked members",
        ],
    },

    // Setup & Usage Questions
    {
        category: "setup",
        question: "How do I add the bot to my server?",
        answer: [
            "Click the invite link on our homepage",
            "Select your server from the dropdown",
            "Grant Administrator permission (required for full functionality)",
            "The bot will join and slash commands appear within 5-10 minutes",
            "Start configuring with slash commands (type / to see all)",
        ],
    },
    {
        category: "setup",
        question: "What permissions does the bot need?",
        answer: [
            "Required: Administrator (for easiest setup)",
            "Minimum permissions needed:",
            "• View Channels - Access server channels",
            "• Send Messages - Send responses",
            "• Embed Links - Send rich embeds",
            "• Manage Roles - Assign reaction roles and level rewards",
            "• Add Reactions - Add emojis to reaction role messages",
            "• Read Message History - Track reactions",
            "• Manage Channels - Create ticket channels",
            "",
            "IMPORTANT: Bot's role must be ABOVE all roles it assigns in role hierarchy",
        ],
    },
    {
        category: "setup",
        question: "How do I set up reaction roles?",
        answer: [
            "1. Get role IDs (Right-click role → Copy ID, needs Developer Mode enabled)",
            "2. Use: /setup-reaction-roles",
            "   • channel: Where to post the message",
            "   • title: Embed title",
            "   • description: Message description",
            "   • roles: Format is emoji:roleID,emoji:roleID",
            "   • Example: 🔴:123456789,🔵:987654321",
            "3. Bot creates message with reactions automatically",
            "4. Members click reactions to get roles instantly",
        ],
    },
    {
        category: "setup",
        question: "How do I configure the leveling system?",
        answer: [
            "1. Enable with /setup-leveling:",
            "   • enabled: true",
            "   • announce-channel: Where level-ups are announced (optional)",
            "   • xp-min/xp-max: XP range per message (default: 15-25)",
            "   • cooldown: Seconds between XP gains (default: 60)",
            "   • announce-level: Announce level-ups (default: true)",
            "   • announce-xp: Announce XP gains (default: false)",
            "",
            "2. Add role rewards with /add-level-role:",
            "   • level: 1-100",
            "   • role: Role to assign",
            "",
            "3. Members earn XP automatically by chatting",
        ],
    },
    {
        category: "setup",
        question: "Can I reset bot configuration?",
        answer: [
            "Yes! Use /reset (Administrator only) to reset ALL:",
            "• Welcome and leave messages removed",
            "• All reaction role configs deleted",
            "• Leveling system disabled + all user XP/levels cleared",
            "• Scheduled messages cancelled immediately",
            "• Ticket system removed (channels must be deleted manually)",
            "• Reaction role panel messages deleted automatically",
            "",
            "Changes apply IMMEDIATELY without bot restart",
            "Use with caution - this cannot be undone!",
        ],
    },
    {
        category: "setup",
        question: "Do slash commands work immediately?",
        answer:
            "Slash commands register globally and appear within 5-10 minutes after bot joins (Discord API propagation delay). If commands don't appear: ensure bot has Administrator permission, check bot is online, try removing and re-inviting bot.",
    },

    // Self-Hosting Questions
    {
        category: "selfhost",
        question: "Why would I self-host?",
        answer: [
            "Complete control over bot code and data",
            "Customize features and add your own commands",
            "No reliance on external servers",
            "Perfect for learning Node.js and discord.js",
            "Can run on your own hardware (Raspberry Pi, home server)",
            "Full access to logs and debugging",
        ],
    },
    {
        category: "selfhost",
        question: "What do I need to self-host?",
        answer: [
            "Node.js 18.0.0 or higher",
            "Discord Bot Token (from Discord Developer Portal)",
            "Client ID (your bot's application ID)",
            "Basic command line knowledge",
            "24/7 server or cloud hosting (Railway, Heroku, VPS)",
            "For Railway: Persistent volume for data storage",
        ],
    },
    {
        category: "selfhost",
        question: "Where can I find setup instructions?",
        answer: [
            "Complete guides in GitHub repository:",
            "• README.md - Basic setup and features",
            "• DEPLOYMENT.md - Production deployment guide",
            "• .env.example - Environment variable template",
            "",
            "Step-by-step instructions for:",
            "• Local development setup",
            "• Railway deployment with volumes",
            "• Docker deployment",
            "• Environment variable configuration",
        ],
    },
    {
        category: "selfhost",
        question: "Can I modify the bot code?",
        answer:
            "Yes! Discord Role Guardian is open source under MIT License. Modify, customize, and extend freely. The codebase includes detailed comments explaining every function. Contributions welcome on GitHub!",
    },
    {
        category: "selfhost",
        question: "What hosting platforms are supported?",
        answer: [
            "Recommended: Railway (with persistent volumes)",
            "Also works on: Heroku, Render, DigitalOcean, AWS, VPS, Raspberry Pi",
            "Requires: Node.js support and persistent storage",
            "Free tier options available on Railway (500 hours/month)",
            "Health check endpoint at /health for monitoring",
        ],
    },
    {
        category: "selfhost",
        question: "How do I set up UptimeRobot monitoring?",
        answer: [
            "1. Create free UptimeRobot account (50 monitors, 5-min intervals)",
            "2. Add HTTP monitor with your bot's health endpoint URL",
            "3. Configure email alerts for downtime",
            "4. View uptime stats on our /status page (UptimeRobot API integration)",
            "5. Bot includes /health endpoint for monitoring",
            "",
            "Health endpoint returns: bot status, uptime, server count, timestamp",
        ],
    },

    // Troubleshooting Questions
    {
        category: "troubleshooting",
        question: "The bot isn't responding to commands. What should I do?",
        answer: [
            "1. Check bot online status (green dot in member list)",
            "2. Verify Administrator permission is granted",
            "3. Wait 5-10 minutes after inviting (slash command propagation)",
            "4. Type / in chat to see if bot commands appear",
            "5. Check bot has View Channel and Send Messages permissions",
            "6. Try removing and re-inviting with proper permissions",
        ],
    },
    {
        category: "troubleshooting",
        question: "Reaction roles aren't working. How do I fix this?",
        answer: [
            "Role Hierarchy Issue:",
            "• Bot's role MUST be ABOVE all roles it assigns",
            "• Go to Server Settings → Roles",
            "• Drag bot's role above reaction roles",
            "",
            "Permission Issues:",
            "• Bot needs Manage Roles permission",
            "• Bot needs Add Reactions permission",
            "• Bot needs Read Message History",
            "",
            "Configuration Issues:",
            "• Verify correct message ID format",
            "• Check emoji is valid (custom emojis must be from your server)",
            "• Use /remove-reaction-roles to reset and try again",
        ],
    },
    {
        category: "troubleshooting",
        question: "Members aren't earning XP. What's wrong?",
        answer: [
            "1. Enable leveling: /setup-leveling enabled:true",
            "2. Bot needs Read Message History permission",
            "3. XP cooldown: Users earn XP once per 60 seconds (anti-spam)",
            "4. Bot must see messages (check channel permissions)",
            "5. Check bot role has Manage Roles permission (for level rewards)",
            "6. Leveling is per-guild - XP doesn't transfer between servers",
        ],
    },
    {
        category: "troubleshooting",
        question: "Scheduled messages aren't sending. Why?",
        answer: [
            "Check these common issues:",
            "• Bot must be online at scheduled time",
            "• Verify correct timezone offset (use UTC if unsure)",
            "• Check channel still exists and bot has permission",
            "• For monthly: Days 29-31 don't exist in all months",
            "• Use /list-scheduled to verify message is active",
            "• One-time messages auto-remove after sending",
            "",
            "If needed, use /remove-scheduled and recreate with correct settings",
        ],
    },
    {
        category: "troubleshooting",
        question: "Data was lost after bot restart. What happened?",
        answer: [
            "Railway Deployment:",
            "• Persistent volumes required for data storage",
            "• Check Railway dashboard → Variables → Volumes",
            "• DATA_PATH must point to mounted volume (/app/data)",
            "",
            "Self-Hosting:",
            "• Ensure /data folder has write permissions",
            "• Check logs for file write errors",
            "• Verify NODE_ENV and DATA_PATH variables",
            "",
            "All data stored in /data/config.json - backup regularly!",
        ],
    },
    {
        category: "troubleshooting",
        question: "How do I report bugs or request features?",
        answer: [
            "GitHub Issues (preferred):",
            "• Visit: github.com/nayandas69/discord-role-guardian/issues",
            "• Use bug report template for bugs",
            "• Use feature request template for new features",
            "• Include bot version, command used, and error details",
            "",
            "We actively monitor issues and welcome contributions!",
            "Check existing issues before creating duplicates",
        ],
    },
    {
        category: "troubleshooting",
        question: "Can I get help if I'm stuck?",
        answer: [
            "Multiple support channels available:",
            "• Documentation page - Full command reference and guides",
            "• GitHub Issues - Bug reports and feature requests",
            "• GitHub Discussions - Questions and community help",
            "• Contact form on homepage",
            "",
            "Before asking, check:",
            "• FAQ page (you're here!)",
            "• Documentation page for detailed guides",
            "• GitHub issues for similar problems",
        ],
    },
    {
        category: "troubleshooting",
        question: "What are the bot's limitations?",
        answer: [
            "Technical Limitations:",
            "• JSON storage (not suitable for 10,000+ users per guild)",
            "• XP formula is fixed (L×L×100) - not customizable",
            "• No XP decay or seasonal resets",
            "• Scheduled messages require bot online at send time",
            "• Max 5 staff roles per ticket system",
            "",
            "Feature Limitations:",
            "• Slash commands only (no custom prefix)",
            "• No built-in dashboard (code is dashboard-ready)",
            "• No XP transfer between servers",
            "• Scheduled messages are text-only (no embeds)",
            "• Leave messages only for members who joined while bot online",
        ],
    },
]

export default function FAQPage() {
    return (
        <div className="min-h-screen bg-background">
            <Header />

            <main className="relative">
                {/* Hero Section */}
                <section className="relative overflow-hidden border-b border-border/50 bg-gradient-to-b from-card to-background py-20 lg:py-32">
                    {/* Animated gradient orbs in background */}
                    <div className="absolute inset-0 overflow-hidden opacity-30">
                        <div className="absolute -left-1/4 top-0 h-96 w-96 animate-pulse rounded-full bg-[var(--feature-welcome)]/30 blur-3xl" />
                        <div
                            className="absolute -right-1/4 top-1/2 h-96 w-96 animate-pulse rounded-full bg-primary/20 blur-3xl"
                            style={{ animationDelay: "1s" }}
                        />
                    </div>

                    <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
                        <div className="text-center">
                            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 animate-fade-in-down">
                                <HelpCircle className="h-4 w-4 text-primary" />
                                <span className="text-sm font-medium text-primary">Got Questions?</span>
                            </div>
                            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl animate-fade-in-up">
                                Frequently Asked Questions
                            </h1>
                            <p
                                className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground animate-fade-in-up"
                                style={{ animationDelay: "0.1s" }}
                            >
                                Find answers to common questions about Discord Role Guardian. From setup guides to troubleshooting tips.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Category Navigation */}
                <section className="sticky top-0 z-10 border-b border-border/50 bg-card/80 backdrop-blur-lg">
                    <div className="mx-auto max-w-7xl px-4 py-4 lg:px-8">
                        <div className="flex flex-wrap items-center justify-center gap-3">
                            {categories.map((category, index) => (
                                <a
                                    key={category.id}
                                    href={`#${category.id}`}
                                    className="group flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2 transition-all hover:border-primary/50 hover:bg-primary/10 hover:shadow-lg animate-fade-in"
                                    style={{ animationDelay: `${index * 50}ms` }}
                                >
                                    <category.icon className={`h-4 w-4 ${category.color}`} />
                                    <span className="text-sm font-medium text-foreground">{category.name}</span>
                                </a>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FAQ Sections */}
                <div className="mx-auto max-w-4xl px-4 py-20 lg:px-8">
                    {categories.map((category, categoryIndex) => {
                        const categoryFAQs = faqs.filter((faq) => faq.category === category.id)

                        return (
                            <section
                                key={category.id}
                                id={category.id}
                                className="mb-20 scroll-mt-24 animate-fade-in-up"
                                style={{ animationDelay: `${categoryIndex * 100}ms` }}
                            >
                                {/* Category header */}
                                <div className="mb-8 flex items-center gap-3">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                                        <category.icon className={`h-6 w-6 ${category.color}`} />
                                    </div>
                                    <h2 className="text-3xl font-bold text-foreground">{category.name}</h2>
                                </div>

                                {/* FAQ items in this category */}
                                <div className="space-y-4">
                                    {categoryFAQs.map((faq, faqIndex) => (
                                        <Card
                                            key={faqIndex}
                                            className="group border-border transition-all hover:border-primary/30 hover:shadow-lg animate-fade-in"
                                            style={{ animationDelay: `${categoryIndex * 100 + faqIndex * 50}ms` }}
                                        >
                                            <CardContent className="p-6">
                                                {/* Question */}
                                                <h3 className="mb-4 flex items-start gap-3 text-lg font-semibold text-foreground">
                                                    <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-success" />
                                                    <span>{faq.question}</span>
                                                </h3>

                                                {/* Answer */}
                                                {Array.isArray(faq.answer) ? (
                                                    <ul className="ml-8 space-y-2">
                                                        {faq.answer.map((point, pointIndex) => (
                                                            <li key={pointIndex} className="flex gap-2 text-muted-foreground">
                                                                <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                                                                <span>{point}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                ) : (
                                                    <p className="ml-8 text-muted-foreground">{faq.answer}</p>
                                                )}
                                            </CardContent>
                                        </Card>
                                    ))}
                                </div>
                            </section>
                        )
                    })}
                </div>

                {/* Still have questions CTA */}
                <section className="border-t border-border/50 bg-secondary/30 py-20">
                    <div className="mx-auto max-w-4xl px-4 lg:px-8">
                        <Card className="border-primary/20 bg-gradient-to-r from-primary/5 to-accent/5 animate-fade-in-up">
                            <CardContent className="p-8 text-center">
                                <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                                    <Shield className="h-8 w-8 text-primary" />
                                </div>
                                <h3 className="mb-3 text-2xl font-bold text-foreground">Still Have Questions?</h3>
                                <p className="mb-6 text-muted-foreground">
                                    Can't find what you're looking for? We're here to help! Check our documentation or reach out to our
                                    support team.
                                </p>
                                <div className="flex flex-wrap items-center justify-center gap-4">
                                    <Link
                                        href="/documentation"
                                        className="rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/30"
                                    >
                                        View Documentation
                                    </Link>
                                    <Link
                                        href="https://github.com/nayandas69/discord-role-guardian/issues"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="rounded-lg border border-border bg-card px-6 py-3 font-semibold text-foreground transition-all hover:bg-muted hover:shadow-lg"
                                    >
                                        Ask on GitHub
                                    </Link>
                                    <Link
                                        href="/#contact"
                                        className="rounded-lg border border-border bg-card px-6 py-3 font-semibold text-foreground transition-all hover:bg-muted hover:shadow-lg"
                                    >
                                        Contact Support
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
