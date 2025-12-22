/**
 * GitHub Repository Stats API Route
 * Fetches repository statistics (stars, forks, issues, etc.)
 * Author: nayandas69
 * Repository: https://github.com/nayandas69/discord-role-guardian
 */

import { NextResponse } from "next/server"

const GITHUB_REPO = "nayandas69/discord-role-guardian"
const GITHUB_API = `https://api.github.com/repos/${GITHUB_REPO}`

export async function GET() {
    try {
        const headers: HeadersInit = {
            Accept: "application/vnd.github.v3+json",
        }

        // Use GitHub token if available for higher rate limits
        if (process.env.GITHUB_TOKEN) {
            headers["Authorization"] = `token ${process.env.GITHUB_TOKEN}`
        }

        const response = await fetch(GITHUB_API, {
            headers,
            next: { revalidate: 300 }, // Cache for 5 minutes
        })

        if (!response.ok) {
            throw new Error(`GitHub API responded with status: ${response.status}`)
        }

        const data = await response.json()

        // Return relevant stats
        return NextResponse.json({
            stars: data.stargazers_count,
            forks: data.forks_count,
            watchers: data.watchers_count,
            openIssues: data.open_issues_count,
            language: data.language,
            createdAt: data.created_at,
            updatedAt: data.updated_at,
            defaultBranch: data.default_branch,
        })
    } catch (error) {
        console.error("[GitHub Stats API] Error fetching stats:", error)
        return NextResponse.json({ error: "Failed to fetch repository stats" }, { status: 500 })
    }
}
