/**
 * Status Page
 * Real-time bot uptime and system health monitoring powered by UptimeRobot
 * Shows operational status, response times, server metrics, and incident history
 * Author: nayandas69
 * Repository: https://github.com/nayandas69/discord-role-guardian
 */

"use client"

import { useState, useEffect } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, XCircle, AlertCircle, Activity, Server, Database, Zap, Clock, ExternalLink } from "lucide-react"

/**
 * Service status types
 */
type ServiceStatus = "operational" | "degraded" | "outage"

/**
 * Service interface
 */
interface Service {
    name: string
    status: ServiceStatus
    responseTime: number
    uptime: number
    icon: typeof Activity
}

/**
 * Bot health response from Railway endpoint
 * Matches the structure from discord-role-guardian/src/index.js health check
 */
interface BotHealth {
    status: string
    bot: string
    uptime: number
    servers: number
    timestamp: string
    storage: {
        configured: boolean
        dataPath: string
    }
}

/**
 * Monitor data from UptimeRobot API
 */
interface Monitor {
    id: number
    name: string
    url: string
    status: "operational" | "degraded" | "outage"
    responseTime: number
    uptime: number
    recentIncidents: Array<{
        timestamp: string
        duration: number
    }>
}

/**
 * UptimeRobot API response structure
 */
interface UptimeRobotData {
    overallStatus: "operational" | "degraded" | "outage"
    stats: {
        totalMonitors: number
        operationalMonitors: number
        averageUptime: string
        averageResponseTime: number
    }
    monitors: Monitor[]
    lastUpdate: string
}

/**
 * Status configuration for visual display
 */
const statusConfig: Record<ServiceStatus, { icon: typeof CheckCircle; label: string; color: string; bgColor: string }> =
{
    operational: {
        icon: CheckCircle,
        label: "Operational",
        color: "text-[var(--feature-welcome)]",
        bgColor: "bg-[var(--feature-welcome)]/10",
    },
    degraded: {
        icon: AlertCircle,
        label: "Degraded",
        color: "text-[var(--feature-leveling)]",
        bgColor: "bg-[var(--feature-leveling)]/10",
    },
    outage: {
        icon: XCircle,
        label: "Outage",
        color: "text-destructive",
        bgColor: "bg-destructive/10",
    },
}

export default function StatusPage() {
    /**
     * Service status state
     * In production, this would fetch from your API
     */
    const [uptimeData, setUptimeData] = useState<UptimeRobotData | null>(null)
    const [botHealth, setBotHealth] = useState<BotHealth | null>(null)
    const [loading, setLoading] = useState(true)
    const [lastUpdate, setLastUpdate] = useState<Date>(new Date())

    /**
     * Fetch UptimeRobot monitor data and bot health
     * Updates every 60 seconds automatically
     */
    useEffect(() => {
        async function fetchStatusData() {
            try {
                const [uptimeResponse, healthResponse] = await Promise.all([fetch("/api/uptimerobot"), fetch("/api/uptime")])

                // Process UptimeRobot data
                if (uptimeResponse.ok) {
                    const uptimeData = await uptimeResponse.json()
                    setUptimeData(uptimeData)
                }

                // Process bot health data for additional stats
                if (healthResponse.ok) {
                    const healthData = await healthResponse.json()
                    setBotHealth(healthData)
                }

                setLastUpdate(new Date())
            } catch (error) {
                console.error("[Status] Error fetching status data:", error)
            } finally {
                setLoading(false)
            }
        }

        // Initial fetch
        fetchStatusData()

        // Auto-refresh every 60 seconds
        const interval = setInterval(fetchStatusData, 60000)

        return () => clearInterval(interval)
    }, [])

    const services: (Monitor & { icon: typeof Activity })[] = uptimeData
        ? uptimeData.monitors.map((monitor, index) => {
            // Assign icons based on monitor name or index
            const icons = [Activity, Server, Database, Zap]
            return {
                ...monitor,
                icon: icons[index % icons.length],
            }
        })
        : []

    const stats = {
        totalServers: botHealth?.servers || 0,
        averageResponseTime: uptimeData?.stats.averageResponseTime || 0,
    }

    /**
     * Format uptime in human-readable format
     */
    function formatUptime(seconds: number): string {
        const days = Math.floor(seconds / 86400)
        const hours = Math.floor((seconds % 86400) / 3600)
        const minutes = Math.floor((seconds % 3600) / 60)

        if (days > 0) return `${days}d ${hours}h`
        if (hours > 0) return `${hours}h ${minutes}m`
        return `${minutes}m`
    }

    const overallStatus: ServiceStatus = uptimeData?.overallStatus || "outage"
    const overallConfig = statusConfig[overallStatus]

    return (
        <div className="min-h-screen bg-background">
            <Header />

            <main className="relative">
                {/* Hero Section with Status Badge */}
                <section className="relative overflow-hidden border-b border-border/50 bg-gradient-to-b from-card to-background py-16 lg:py-24">
                    {/* Animated gradient orbs - Color changes based on status */}
                    <div className="absolute inset-0 overflow-hidden opacity-30">
                        <div
                            className={`absolute -left-1/4 top-0 h-96 w-96 animate-pulse rounded-full blur-3xl transition-colors duration-1000 ${overallStatus === "operational"
                                    ? "bg-[var(--feature-welcome)]/30"
                                    : overallStatus === "degraded"
                                        ? "bg-[var(--feature-leveling)]/30"
                                        : "bg-destructive/30"
                                }`}
                        />
                        <div
                            className="absolute -right-1/4 top-1/2 h-96 w-96 animate-pulse rounded-full bg-primary/20 blur-3xl"
                            style={{ animationDelay: "1s" }}
                        />
                    </div>

                    <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
                        <div className="text-center">
                            <div
                                className={`mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-2 animate-fade-in-down ${overallConfig.bgColor} ${overallStatus === "operational" ? "border-[var(--feature-welcome)]/20" : overallStatus === "degraded" ? "border-[var(--feature-leveling)]/20" : "border-destructive/20"}`}
                            >
                                <overallConfig.icon className={`h-4 w-4 ${overallConfig.color}`} />
                                <span className={`text-sm font-medium ${overallConfig.color}`}>All Systems {overallConfig.label}</span>
                            </div>
                            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl animate-fade-in-up">
                                System Status
                            </h1>
                            <p
                                className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground animate-fade-in-up"
                                style={{ animationDelay: "0.1s" }}
                            >
                                Real-time monitoring powered by UptimeRobot. Check uptime, performance, and system health.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="py-12 bg-secondary/30">
                    <div className="mx-auto max-w-7xl px-4 lg:px-8">
                        {uptimeData && botHealth && (
                            <div className="mb-8 text-center animate-fade-in-up">
                                <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2">
                                    <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                                    <span className="text-sm text-muted-foreground">
                                        {uptimeData.stats.operationalMonitors} live •{" "}
                                        {uptimeData.stats.totalMonitors - uptimeData.stats.operationalMonitors} dn • Bot: {botHealth.bot} •
                                        Uptime: {formatUptime(botHealth.uptime)}
                                    </span>
                                </div>
                                <p className="mt-2 text-xs text-muted-foreground">Last updated: {lastUpdate.toLocaleTimeString()}</p>
                            </div>
                        )}

                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2 max-w-4xl mx-auto">
                            {/* Total Servers - From bot health endpoint (/api/uptime) */}
                            <Card className="border-border transition-all hover:border-primary/30 hover:shadow-lg hover:scale-105 animate-fade-in-up">
                                <CardContent className="flex items-center gap-4 p-6">
                                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                                        <Server className="h-7 w-7 text-primary" />
                                    </div>
                                    <div>
                                        <p className="text-3xl font-bold text-foreground">
                                            {loading ? "..." : stats.totalServers.toLocaleString()}
                                        </p>
                                        <p className="text-sm text-muted-foreground">Total Servers</p>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Average Response - From UptimeRobot monitors (/api/uptimerobot) */}
                            <Card
                                className="border-border transition-all hover:border-[var(--feature-ticket)]/30 hover:shadow-lg hover:scale-105 animate-fade-in-up"
                                style={{ animationDelay: "0.1s" }}
                            >
                                <CardContent className="flex items-center gap-4 p-6">
                                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[var(--feature-ticket)]/10">
                                        <Clock className="h-7 w-7 text-[var(--feature-ticket)]" />
                                    </div>
                                    <div>
                                        <p className="text-3xl font-bold text-foreground">
                                            {loading ? "..." : `${stats.averageResponseTime}ms`}
                                        </p>
                                        <p className="text-sm text-muted-foreground">Avg Response</p>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>

                <section className="py-20 lg:py-32">
                    <div className="mx-auto max-w-7xl px-4 lg:px-8">
                        <div className="text-center animate-fade-in-up">
                            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Service Status</h2>
                            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
                                Monitor the health of all bot services in real-time via UptimeRobot
                            </p>
                        </div>

                        {loading ? (
                            <div className="mt-16 grid gap-6 md:grid-cols-2">
                                {[...Array(4)].map((_, i) => (
                                    <Card key={i} className="border-border animate-pulse">
                                        <CardHeader>
                                            <div className="h-6 bg-muted rounded w-1/3" />
                                        </CardHeader>
                                        <CardContent>
                                            <div className="space-y-4">
                                                <div className="h-4 bg-muted rounded w-1/2" />
                                                <div className="h-2 bg-muted rounded w-full" />
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        ) : (
                            <div className="mt-16 grid gap-6 md:grid-cols-2">
                                {services.map((service, index) => {
                                    const config = statusConfig[service.status]
                                    return (
                                        <Card
                                            key={service.id}
                                            className="border-border transition-all hover:border-primary/30 hover:shadow-xl animate-fade-in-up group"
                                            style={{ animationDelay: `${index * 100}ms` }}
                                        >
                                            <CardHeader>
                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center gap-3">
                                                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                                                            <service.icon className="h-5 w-5 text-primary" />
                                                        </div>
                                                        <div>
                                                            <CardTitle className="text-lg">{service.name}</CardTitle>
                                                            <a
                                                                href={service.url}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="text-xs text-muted-foreground hover:text-primary flex items-center gap-1 mt-1 transition-colors"
                                                            >
                                                                {service.url.replace(/^https?:\/\//, "").substring(0, 40)}
                                                                {service.url.length > 40 ? "..." : ""}
                                                                <ExternalLink className="h-3 w-3" />
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <Badge className={`${config.bgColor} ${config.color} border-transparent`}>
                                                        <config.icon className="mr-1 h-3 w-3" />
                                                        {config.label}
                                                    </Badge>
                                                </div>
                                            </CardHeader>
                                            <CardContent>
                                                <div className="grid grid-cols-2 gap-4 mb-4">
                                                    {/* Response Time from UptimeRobot */}
                                                    <div>
                                                        <p className="text-sm text-muted-foreground mb-1">Response Time</p>
                                                        <p className="text-2xl font-bold text-foreground">{service.responseTime}ms</p>
                                                    </div>
                                                    {/* Uptime percentage (30-day) from UptimeRobot */}
                                                    <div>
                                                        <p className="text-sm text-muted-foreground mb-1">Uptime (30d)</p>
                                                        <p className="text-2xl font-bold text-[var(--feature-welcome)]">
                                                            {service.uptime.toFixed(2)}%
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="h-2 overflow-hidden rounded-full bg-muted">
                                                    <div
                                                        className="h-full bg-gradient-to-r from-[var(--feature-welcome)] to-primary transition-all duration-500"
                                                        style={{ width: `${service.uptime}%` }}
                                                    />
                                                </div>
                                            </CardContent>
                                        </Card>
                                    )
                                })}
                            </div>
                        )}
                    </div>
                </section>

                <section className="border-t border-border/50 bg-secondary/30 py-20 lg:py-32">
                    <div className="mx-auto max-w-7xl px-4 lg:px-8">
                        <div className="text-center animate-fade-in-up">
                            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Recent Incidents</h2>
                            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
                                {uptimeData && uptimeData.monitors.some((m) => m.recentIncidents.length > 0)
                                    ? "Recent downtime and maintenance events"
                                    : "No recent incidents reported. All systems running smoothly!"}
                            </p>
                        </div>

                        {uptimeData && uptimeData.monitors.some((m) => m.recentIncidents.length > 0) ? (
                            <div className="mt-12 space-y-4 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                                {uptimeData.monitors.map((monitor) =>
                                    monitor.recentIncidents.slice(0, 3).map((incident, index) => (
                                        <Card
                                            key={`${monitor.id}-${index}`}
                                            className="border-destructive/20 hover:border-destructive/40 transition-colors"
                                        >
                                            <CardContent className="flex items-center justify-between p-6">
                                                <div className="flex items-center gap-4">
                                                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-destructive/10">
                                                        <XCircle className="h-5 w-5 text-destructive" />
                                                    </div>
                                                    <div>
                                                        <h3 className="font-semibold text-foreground">{monitor.name} - Downtime</h3>
                                                        <p className="text-sm text-muted-foreground">
                                                            Duration: {Math.floor(incident.duration / 60)} minutes
                                                        </p>
                                                    </div>
                                                </div>
                                                <p className="text-sm text-muted-foreground">{new Date(incident.timestamp).toLocaleString()}</p>
                                            </CardContent>
                                        </Card>
                                    )),
                                )}
                            </div>
                        ) : (
                            <Card
                                className="mt-12 border-[var(--feature-welcome)]/20 bg-gradient-to-r from-[var(--feature-welcome)]/5 to-primary/5 animate-fade-in-up"
                                style={{ animationDelay: "0.2s" }}
                            >
                                <CardContent className="flex flex-col items-center gap-4 p-12 text-center">
                                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[var(--feature-welcome)]/10 animate-pulse">
                                        <CheckCircle className="h-8 w-8 text-[var(--feature-welcome)]" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-foreground">All Clear!</h3>
                                        <p className="mt-2 text-muted-foreground max-w-md">
                                            No incidents or maintenance scheduled. Discord Role Guardian is running at peak performance.
                                        </p>
                                    </div>
                                    <p className="text-sm text-muted-foreground">
                                        Powered by UptimeRobot • Last updated: {lastUpdate.toLocaleString()}
                                    </p>
                                </CardContent>
                            </Card>
                        )}
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    )
}
