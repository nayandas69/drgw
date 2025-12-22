/**
 * GitHub Releases API Route
 * Fetches release data from GitHub repository
 * Author: nayandas69
 * Repository: https://github.com/nayandas69/discord-role-guardian
 */

import { NextResponse } from "next/server"

const GITHUB_REPO = "nayandas69/discord-role-guardian"
const GITHUB_API = `https://api.github.com/repos/${GITHUB_REPO}/releases`

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
            next: { revalidate: 3600 }, // Cache for 1 hour
        })

        if (!response.ok) {
            throw new Error(`GitHub API responded with status: ${response.status}`)
        }

        const releases = await response.json()

        // Transform releases to match our format
        const transformedReleases = releases.map((release: any) => ({
            version: release.tag_name,
            date: release.published_at,
            title: release.name || release.tag_name,
            body: release.body,
            url: release.html_url,
            prerelease: release.prerelease,
            draft: release.draft,
        }))

        return NextResponse.json(transformedReleases)
    } catch (error) {
        console.error("[GitHub Releases API] Error fetching releases:", error)
        return NextResponse.json({ error: "Failed to fetch releases" }, { status: 500 })
    }
}
