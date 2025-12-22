/**
 * Uptime Robot Status API Route
 * Fetches bot uptime status from UptimeRobot or health endpoint
 * Author: nayandas69
 * Repository: https://github.com/nayandas69/discord-role-guardian
 */

import { NextResponse } from "next/server"

// Bot health check endpoint (Railway deployment)
const BOT_HEALTH_URL = process.env.BOT_HEALTH_URL || "https://discord-role-guardian-production.up.railway.app/health"

export async function GET() {
    try {
        // Fetch from bot's health endpoint
        const response = await fetch(BOT_HEALTH_URL, {
            next: { revalidate: 60 }, // Cache for 1 minute
        })

        if (!response.ok) {
            throw new Error(`Health check failed with status: ${response.status}`)
        }

        const data = await response.json()

        // Transform health data to status format
        return NextResponse.json({
            status: data.status === "online" ? "operational" : "down",
            uptime: data.uptime,
            servers: data.servers,
            lastCheck: data.timestamp,
            bot: data.bot,
            storage: data.storage,
        })
    } catch (error) {
        console.error("[Uptime API] Error fetching uptime:", error)

        // Return degraded status if health check fails
        return NextResponse.json({
            status: "down",
            uptime: 0,
            servers: 0,
            lastCheck: new Date().toISOString(),
            bot: "unknown",
            storage: { configured: false, dataPath: "unknown" },
            error: "Failed to reach bot health endpoint",
        })
    }
}
