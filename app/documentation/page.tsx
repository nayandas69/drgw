/**
 * Documentation Page
 * Comprehensive guide for Discord Role Guardian bot
 * Based on actual bot commands from discord-role-guardian/src/commands
 * Includes detailed command reference, setup tutorials, and troubleshooting
 * Author: nayandas69
 * Repository: https://github.com/nayandas69/discord-role-guardian
 */

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
    Sparkles,
    UserPlus,
    Trophy,
    Ticket,
    Clock,
    Shield,
    AlertCircle,
    CheckCircle,
    Terminal,
    BookOpen,
    Wrench,
} from "lucide-react"
import Link from "next/link"

/**
 * Command category interface
 * Defines structure for command documentation
 */
interface Command {
    name: string
    description: string
    usage: string
    permission: string
    examples: string[]
    notes?: string
}

/**
 * Command categories grouped by feature
 * UPDATED: Based on actual bot commands from src/commands folder
 */
const commandCategories = [
    {
        title: "Reaction Roles",
        icon: Sparkles,
        color: "text-[var(--feature-reaction-roles)]",
        bgColor: "bg-[var(--feature-reaction-roles)]/10",
        commands: [
            {
                name: "/setup-reaction-roles",
                description: "Create a reaction role message with customizable embeds",
                usage: "/setup-reaction-roles channel:<channel> title:<title> description:<description> roles:<format>",
                permission: "Administrator",
                examples: [
                    '/setup-reaction-roles channel:#roles title:"Choose Your Roles" description:"React to get roles" roles:🔴:123456789,🔵:987654321',
                    '/setup-reaction-roles channel:#get-roles title:"Game Roles" description:"Pick your games" roles:🎮:111222333,🎨:444555666',
                ],
                notes: "Role format: emoji1:roleID1,emoji2:roleID2 - Bot automatically adds reactions to the message",
            },
            {
                name: "/remove-reaction-roles",
                description: "Remove reaction role configuration from a message",
                usage: "/remove-reaction-roles message-id:<id>",
                permission: "Administrator",
                examples: ["/remove-reaction-roles message-id:123456789012345678"],
            },
        ],
    },
    {
        title: "Welcome & Leave System",
        icon: UserPlus,
        color: "text-[var(--feature-welcome)]",
        bgColor: "bg-[var(--feature-welcome)]/10",
        commands: [
            {
                name: "/setup-welcome",
                description: "Configure welcome messages for new members",
                usage: "/setup-welcome channel:<channel> message:<message> [embed-color:<color>]",
                permission: "Administrator",
                examples: [
                    '/setup-welcome channel:#welcome message:"Welcome {user} to {server}! You are member #{count}!" embed-color:#00ff00',
                    '/setup-welcome channel:#general message:"Hey {user}, read the rules!"',
                ],
                notes:
                    "Placeholders: {user} = mention user, {server} = server name, {count} = total member count. Default color: #00ff00",
            },
            {
                name: "/setup-leave",
                description: "Set up goodbye messages for departing members",
                usage: "/setup-leave channel:<channel> message:<message> [embed-color:<color>]",
                permission: "Administrator",
                examples: [
                    '/setup-leave channel:#goodbye message:"Goodbye {user}! We\'ll miss you!" embed-color:#ff0000',
                    '/setup-leave channel:#general message:"{user} has left {server}"',
                ],
                notes: "Placeholders: {user} = username, {server} = server name. Default color: #ff0000",
            },
        ],
    },
    {
        title: "Leveling System",
        icon: Trophy,
        color: "text-[var(--feature-leveling)]",
        bgColor: "bg-[var(--feature-leveling)]/10",
        commands: [
            {
                name: "/setup-leveling",
                description: "Enable and configure the XP leveling system",
                usage:
                    "/setup-leveling enabled:<true/false> [announce-channel:<channel>] [xp-min:<15>] [xp-max:<25>] [cooldown:<60>] [announce-level:<true>] [announce-xp:<false>]",
                permission: "Administrator",
                examples: [
                    "/setup-leveling enabled:true announce-channel:#level-up xp-min:15 xp-max:25 cooldown:60",
                    "/setup-leveling enabled:true announce-channel:#general xp-min:10 xp-max:30 announce-xp:true",
                ],
                notes: "XP range: 1-100 per message. Cooldown: 10-300 seconds. Level formula: Level = √(XP/100)",
            },
            {
                name: "/add-level-role",
                description: "Add automatic role rewards for reaching specific levels",
                usage: "/add-level-role level:<1-100> role:<role>",
                permission: "Administrator",
                examples: [
                    "/add-level-role level:5 role:@Novice",
                    "/add-level-role level:10 role:@Expert",
                    "/add-level-role level:25 role:@Legend",
                ],
                notes: "Roles are automatically assigned when members reach the specified level. Supports up to Level 100",
            },
            {
                name: "/rank",
                description: "Check your current level, XP, and progress to next level",
                usage: "/rank [user:<user>]",
                permission: "Everyone",
                examples: ["/rank", "/rank user:@username"],
                notes: "Shows XP progress bar, current level, and XP needed for next level",
            },
            {
                name: "/leaderboard",
                description: "View server XP leaderboard with top members",
                usage: "/leaderboard [limit:<5-25>]",
                permission: "Everyone",
                examples: ["/leaderboard", "/leaderboard limit:15", "/leaderboard limit:25"],
                notes: "Default shows top 10. Top 3 get medal badges (🥇🥈🥉)",
            },
        ],
    },
    {
        title: "Ticket System",
        icon: Ticket,
        color: "text-[var(--feature-ticket)]",
        bgColor: "bg-[var(--feature-ticket)]/10",
        commands: [
            {
                name: "/setup-ticket",
                description: "Configure ticket support system with panel and categories",
                usage:
                    "/setup-ticket panel-channel:<channel> category:<category> staff-role-1:<role> [staff-role-2-5:<roles>] [transcript-channel:<channel>] [embed-color:<color>]",
                permission: "Administrator",
                examples: [
                    "/setup-ticket panel-channel:#create-ticket category:Support staff-role-1:@Support",
                    "/setup-ticket panel-channel:#tickets category:Tickets staff-role-1:@Mod staff-role-2:@Admin transcript-channel:#transcripts",
                ],
                notes:
                    "Supports up to 5 staff roles. Bot role must be above staff roles in hierarchy. Creates button panel for users to open tickets",
            },
            {
                name: "/ticket-stats",
                description: "View ticket system statistics and analytics",
                usage: "/ticket-stats",
                permission: "Administrator",
                examples: ["/ticket-stats"],
                notes: "Shows total tickets, active tickets, closed tickets, and current configuration",
            },
        ],
    },
    {
        title: "Scheduled Messages",
        icon: Clock,
        color: "text-[var(--feature-scheduled)]",
        bgColor: "bg-[var(--feature-scheduled)]/10",
        commands: [
            {
                name: "/schedule-message",
                description: "Schedule automatic messages (one-time, daily, weekly, monthly)",
                usage:
                    "/schedule-message name:<name> channel:<channel> type:<once/daily/weekly/monthly> time:<HH:MM> message:<message> [timezone-offset:<offset>] [day-of-week:<0-6>] [day-of-month:<1-31>]",
                permission: "Administrator",
                examples: [
                    '/schedule-message name:announcement channel:#announcements type:once time:14:30 message:"Event starts now!" timezone-offset:+6',
                    '/schedule-message name:daily-reminder channel:#general type:daily time:09:00 message:"Good morning!"',
                    '/schedule-message name:weekly-event channel:#events type:weekly time:19:00 day-of-week:5 message:"Friday event!"',
                    '/schedule-message name:monthly-update channel:#updates type:monthly time:12:00 day-of-month:1 message:"Monthly recap!"',
                ],
                notes:
                    "Time in 24-hour format (HH:MM). Weekly: 0=Sunday, 6=Saturday. Timezone offset from UTC (e.g., -5 for EST, +5:30 for IST)",
            },
            {
                name: "/list-scheduled",
                description: "View all scheduled messages for this server",
                usage: "/list-scheduled",
                permission: "Administrator",
                examples: ["/list-scheduled"],
                notes: "Shows name, schedule type, channel, timezone, and message preview for all scheduled messages",
            },
            {
                name: "/remove-scheduled",
                description: "Cancel a scheduled message (with autocomplete support)",
                usage: "/remove-scheduled name:<name>",
                permission: "Administrator",
                examples: ["/remove-scheduled name:announcement"],
                notes: "Has autocomplete showing all scheduled message names. Cancels timer immediately without restart",
            },
        ],
    },
    {
        title: "Server Management",
        icon: Shield,
        color: "text-[var(--feature-role-management)]",
        bgColor: "bg-[var(--feature-role-management)]/10",
        commands: [
            {
                name: "/reset",
                description: "Reset all bot configurations for this server",
                usage: "/reset",
                permission: "Administrator",
                examples: ["/reset"],
                notes:
                    "⚠️ CANNOT BE UNDONE! Removes: welcome/leave messages, reaction roles, leveling system + all XP, scheduled messages, ticket system. Deletes panel messages. No restart needed",
            },
        ],
    },
]

/**
 * Setup guide steps for first-time users
 */
const setupSteps = [
    {
        step: 1,
        title: "Invite the Bot",
        description: "Click the invite link and select your server",
        icon: UserPlus,
    },
    {
        step: 2,
        title: "Grant Permissions",
        description: "Ensure the bot has Administrator permissions for full functionality",
        icon: Shield,
    },
    {
        step: 3,
        title: "Run Commands",
        description: "Use slash commands to configure features. Start with /setup-welcome",
        icon: Terminal,
    },
    {
        step: 4,
        title: "Test & Enjoy",
        description: "Test each feature and customize to your needs",
        icon: CheckCircle,
    },
]

/**
 * Common troubleshooting issues and solutions
 */
const troubleshooting = [
    {
        issue: "Bot not responding to commands",
        solutions: [
            "Verify the bot has Administrator permission",
            "Check if the bot is online and appears in the member list",
            "Try kicking and re-inviting the bot",
            "Ensure you're using slash commands (/) not prefix commands",
        ],
    },
    {
        issue: "Reaction roles not working",
        solutions: [
            "Bot role must be higher than the roles being assigned",
            "Check bot has Manage Roles permission",
            "Verify emoji is from the same server or is a standard emoji",
            "Make sure message ID is correct",
        ],
    },
    {
        issue: "Leveling system not tracking XP",
        solutions: [
            "Ensure leveling is enabled with /setup-leveling",
            "Check if the channel has proper bot permissions",
            "XP only counts every 60 seconds per user (anti-spam)",
            "Bot must have Read Message History permission",
        ],
    },
    {
        issue: "Scheduled messages not sending",
        solutions: [
            "Verify bot has Send Messages permission in target channel",
            "Check timezone settings match your location",
            "Confirm schedule wasn't accidentally removed with /list-scheduled",
            "Bot must remain in server for schedules to work",
        ],
    },
]

export default function DocumentationPage() {
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
                            className="absolute -right-1/4 top-1/2 h-96 w-96 animate-pulse rounded-full bg-accent/20 blur-3xl"
                            style={{ animationDelay: "1s" }}
                        />
                    </div>

                    <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
                        <div className="text-center">
                            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 animate-fade-in-down">
                                <BookOpen className="h-4 w-4 text-primary" />
                                <span className="text-sm font-medium text-primary">Complete Guide</span>
                            </div>
                            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl animate-fade-in-up">
                                Documentation
                            </h1>
                            <p
                                className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground animate-fade-in-up"
                                style={{ animationDelay: "0.1s" }}
                            >
                                Everything you need to know about Discord Role Guardian. Detailed command reference, setup tutorials,
                                and troubleshooting guides.
                            </p>
                            <div
                                className="mt-10 flex flex-wrap items-center justify-center gap-4 animate-fade-in-up"
                                style={{ animationDelay: "0.2s" }}
                            >
                                <Link
                                    href="#commands"
                                    className="rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/30"
                                >
                                    View Commands
                                </Link>
                                <Link
                                    href="#setup"
                                    className="rounded-lg border border-border bg-card px-6 py-3 font-semibold text-foreground transition-all hover:bg-muted hover:shadow-lg"
                                >
                                    Setup Guide
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Quick Setup Guide */}
                <section id="setup" className="py-20 lg:py-32">
                    <div className="mx-auto max-w-7xl px-4 lg:px-8">
                        <div className="text-center animate-fade-in-up">
                            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Quick Setup Guide</h2>
                            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
                                Get started with Discord Role Guardian in minutes
                            </p>
                        </div>

                        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                            {setupSteps.map((step, index) => (
                                <Card
                                    key={step.step}
                                    className="group relative overflow-hidden border-border transition-all hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 animate-fade-in-up"
                                    style={{ animationDelay: `${index * 100}ms` }}
                                >
                                    {/* Step number badge */}
                                    <div className="absolute right-4 top-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-2xl font-bold text-primary">
                                        {step.step}
                                    </div>
                                    <CardHeader>
                                        <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 transition-all group-hover:scale-110 group-hover:bg-primary/20">
                                            <step.icon className="h-6 w-6 text-primary" />
                                        </div>
                                        <CardTitle className="pr-14">{step.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <CardDescription>{step.description}</CardDescription>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Command Reference */}
                <section id="commands" className="bg-secondary/30 py-20 lg:py-32">
                    <div className="mx-auto max-w-7xl px-4 lg:px-8">
                        <div className="text-center animate-fade-in-up">
                            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Command Reference</h2>
                            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
                                Complete documentation for all available commands
                            </p>
                        </div>

                        <div className="mt-16 space-y-12">
                            {commandCategories.map((category, categoryIndex) => (
                                <div
                                    key={category.title}
                                    className="animate-fade-in-up"
                                    style={{ animationDelay: `${categoryIndex * 100}ms` }}
                                >
                                    {/* Category header */}
                                    <div className="mb-6 flex items-center gap-3">
                                        <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${category.bgColor}`}>
                                            <category.icon className={`h-5 w-5 ${category.color}`} />
                                        </div>
                                        <h3 className="text-2xl font-bold text-foreground">{category.title}</h3>
                                    </div>

                                    {/* Commands in this category */}
                                    <div className="space-y-4">
                                        {category.commands.map((command, commandIndex) => (
                                            <Card
                                                key={command.name}
                                                className="border-border transition-all hover:border-primary/30 hover:shadow-lg animate-fade-in"
                                                style={{ animationDelay: `${categoryIndex * 100 + commandIndex * 50}ms` }}
                                            >
                                                <CardHeader>
                                                    <div className="flex flex-wrap items-start justify-between gap-4">
                                                        <div className="flex-1">
                                                            <code className="inline-block rounded-lg bg-muted px-3 py-1.5 font-mono text-lg text-primary">
                                                                {command.name}
                                                            </code>
                                                            <CardDescription className="mt-2">{command.description}</CardDescription>
                                                        </div>
                                                        <Badge
                                                            variant={command.permission === "Everyone" ? "default" : "secondary"}
                                                            className="whitespace-nowrap"
                                                        >
                                                            {command.permission}
                                                        </Badge>
                                                    </div>
                                                </CardHeader>
                                                <CardContent className="space-y-4">
                                                    {/* Usage */}
                                                    <div>
                                                        <h4 className="mb-2 text-sm font-semibold text-foreground">Usage:</h4>
                                                        <code className="block rounded-lg bg-muted p-3 font-mono text-sm text-muted-foreground">
                                                            {command.usage}
                                                        </code>
                                                    </div>

                                                    {/* Examples */}
                                                    <div>
                                                        <h4 className="mb-2 text-sm font-semibold text-foreground">Examples:</h4>
                                                        <div className="space-y-2">
                                                            {command.examples.map((example, exampleIndex) => (
                                                                <code
                                                                    key={exampleIndex}
                                                                    className="block rounded-lg bg-muted p-3 font-mono text-sm text-primary"
                                                                >
                                                                    {example}
                                                                </code>
                                                            ))}
                                                        </div>
                                                    </div>

                                                    {/* Notes if available */}
                                                    {command.notes && (
                                                        <div className="flex gap-2 rounded-lg border border-primary/20 bg-primary/5 p-3">
                                                            <AlertCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                                                            <p className="text-sm text-muted-foreground">{command.notes}</p>
                                                        </div>
                                                    )}
                                                </CardContent>
                                            </Card>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Troubleshooting Section */}
                <section id="troubleshooting" className="py-20 lg:py-32">
                    <div className="mx-auto max-w-7xl px-4 lg:px-8">
                        <div className="text-center animate-fade-in-up">
                            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2">
                                <Wrench className="h-4 w-4 text-primary" />
                                <span className="text-sm font-medium text-primary">Need Help?</span>
                            </div>
                            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Troubleshooting</h2>
                            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">Common issues and how to fix them</p>
                        </div>

                        <div className="mt-16 grid gap-8 lg:grid-cols-2">
                            {troubleshooting.map((item, index) => (
                                <Card
                                    key={index}
                                    className="border-border transition-all hover:border-primary/30 hover:shadow-xl animate-fade-in-up"
                                    style={{ animationDelay: `${index * 100}ms` }}
                                >
                                    <CardHeader>
                                        <div className="flex items-start gap-3">
                                            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-destructive/10">
                                                <AlertCircle className="h-5 w-5 text-destructive" />
                                            </div>
                                            <CardTitle className="text-foreground">{item.issue}</CardTitle>
                                        </div>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="space-y-3">
                                            <p className="text-sm font-semibold text-foreground">Solutions:</p>
                                            <ul className="space-y-2">
                                                {item.solutions.map((solution, solutionIndex) => (
                                                    <li key={solutionIndex} className="flex gap-2 text-sm text-muted-foreground">
                                                        <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-success" />
                                                        <span>{solution}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>

                        {/* Still need help CTA */}
                        <Card
                            className="mt-12 border-primary/20 bg-gradient-to-r from-primary/5 to-accent/5 animate-fade-in-up"
                            style={{ animationDelay: "0.4s" }}
                        >
                            <CardHeader>
                                <CardTitle className="text-center text-2xl text-foreground">Still Need Help?</CardTitle>
                            </CardHeader>
                            <CardContent className="flex flex-col items-center gap-4">
                                <p className="text-center text-muted-foreground">
                                    Can't find what you're looking for? Check our GitHub for more resources or contact us directly.
                                </p>
                                <div className="flex flex-wrap gap-4">
                                    <Link
                                        href="https://github.com/nayandas69/discord-role-guardian/issues"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/30"
                                    >
                                        Report Issue on GitHub
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
