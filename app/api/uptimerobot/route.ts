/**
 * UptimeRobot API Integration
 * Fetches real monitor data from UptimeRobot API v2
 * Uses read-only API key stored in environment variables
 *
 * Author: nayandas69
 * Repository: https://github.com/nayandas69/discord-role-guardian
 */

import { NextResponse } from "next/server"

/**
 * UptimeRobot monitor status codes
 * 0 = Paused, 1 = Not checked yet, 2 = Up, 8 = Seems down, 9 = Down
 */
const UPTIME_STATUS = {
    0: "paused",
    1: "not_checked",
    2: "up",
    8: "seems_down",
    9: "down",
} as const

/**
 * Monitor response from UptimeRobot API
 */
interface UptimeRobotMonitor {
    id: number
    friendly_name: string
    url: string
    status: number
    average_response_time: number
    custom_uptime_ratio: string
    logs?: Array<{
        type: number
        datetime: number
        duration: number
    }>
}

/**
 * API response structure from UptimeRobot
 */
interface UptimeRobotResponse {
    stat: string
    pagination?: {
        offset: number
        limit: number
        total: number
    }
    monitors: UptimeRobotMonitor[]
}

/**
 * Cache configuration for production performance
 * Revalidate every 60 seconds to reduce API calls
 */
export const revalidate = 60

/**
 * GET endpoint to fetch monitor data from UptimeRobot
 * Returns formatted monitor data for status page display
 */
export async function GET() {
    try {
        // Get API key from environment variables
        const apiKey = process.env.UPTIMEROBOT_API_KEY

        // Validate API key exists
        if (!apiKey) {
            console.error("[UptimeRobot] API key not configured")
            return NextResponse.json({ error: "UptimeRobot API key not configured" }, { status: 500 })
        }

        // Make request to UptimeRobot API v2
        // Using getMonitors endpoint with response times and logs
        const response = await fetch("https://api.uptimerobot.com/v2/getMonitors", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Cache-Control": "no-cache",
            },
            body: JSON.stringify({
                api_key: apiKey,
                format: "json",
                // Get detailed monitor information
                logs: 1, // Include logs for incident history
                log_types: "1-2", // Down and up events
                response_times: 1, // Include response time data
                response_times_average: 30, // 30-day average
                custom_uptime_ratios: "1-7-30", // 1, 7, and 30 day uptime ratios
            }),
        })

        // Check if API request was successful
        if (!response.ok) {
            console.error("[UptimeRobot] API request failed:", response.status)
            return NextResponse.json({ error: "Failed to fetch from UptimeRobot API" }, { status: response.status })
        }

        // Parse response data
        const data: UptimeRobotResponse = await response.json()

        // Check if API returned success status
        if (data.stat !== "ok") {
            console.error("[UptimeRobot] API returned error status")
            return NextResponse.json({ error: "UptimeRobot API returned error" }, { status: 500 })
        }

        // Transform monitors data for frontend consumption
        const monitors = data.monitors.map((monitor) => {
            // Parse uptime ratio (30-day)
            const uptimeRatio = Number.parseFloat(monitor.custom_uptime_ratio) || 0

            // Determine service status based on monitor status
            let status: "operational" | "degraded" | "outage"
            if (monitor.status === 2) {
                status = "operational"
            } else if (monitor.status === 8) {
                status = "degraded"
            } else {
                status = "outage"
            }

            // Get recent incidents from logs
            const recentIncidents =
                monitor.logs
                    ?.filter((log) => log.type === 1) // Type 1 = Down
                    .slice(0, 5) // Last 5 incidents
                    .map((log) => ({
                        timestamp: new Date(log.datetime * 1000).toISOString(),
                        duration: log.duration,
                    })) || []

            return {
                id: monitor.id,
                name: monitor.friendly_name,
                url: monitor.url,
                status,
                responseTime: monitor.average_response_time,
                uptime: uptimeRatio,
                recentIncidents,
            }
        })

        // Calculate overall statistics
        const totalMonitors = monitors.length
        const operationalMonitors = monitors.filter((m) => m.status === "operational").length
        const averageUptime = monitors.reduce((sum, m) => sum + m.uptime, 0) / totalMonitors
        const averageResponseTime = Math.round(monitors.reduce((sum, m) => sum + m.responseTime, 0) / totalMonitors)

        // Determine overall system status
        let overallStatus: "operational" | "degraded" | "outage"
        if (operationalMonitors === totalMonitors) {
            overallStatus = "operational"
        } else if (operationalMonitors > totalMonitors / 2) {
            overallStatus = "degraded"
        } else {
            overallStatus = "outage"
        }

        // Return formatted data
        return NextResponse.json({
            overallStatus,
            stats: {
                totalMonitors,
                operationalMonitors,
                averageUptime: averageUptime.toFixed(2),
                averageResponseTime,
            },
            monitors,
            lastUpdate: new Date().toISOString(),
        })
    } catch (error) {
        console.error("[UptimeRobot] Error fetching monitor data:", error)
        return NextResponse.json({ error: "Internal server error while fetching monitor data" }, { status: 500 })
    }
}
