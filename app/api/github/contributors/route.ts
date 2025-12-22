/**
 * GitHub Contributors API Route
 * Fetches contributor data from GitHub repository
 * Author: nayandas69
 * Repository: https://github.com/nayandas69/discord-role-guardian
 */

import { NextResponse } from "next/server"

const GITHUB_REPO = "nayandas69/discord-role-guardian"
const GITHUB_API = `https://api.github.com/repos/${GITHUB_REPO}/contributors`

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

        const contributors = await response.json()

        const detailedContributors = await Promise.all(
            contributors.map(async (contributor: any) => {
                try {
                    // Fetch user details to get the display name
                    const userResponse = await fetch(`https://api.github.com/users/${contributor.login}`, {
                        headers,
                        next: { revalidate: 3600 },
                    })

                    if (userResponse.ok) {
                        const userData = await userResponse.json()
                        return {
                            login: contributor.login,
                            name: userData.name || contributor.login, // Use display name if available, fallback to username
                            avatar: contributor.avatar_url,
                            contributions: contributor.contributions,
                            profile: contributor.html_url,
                            type: contributor.type,
                            bio: userData.bio || null,
                        }
                    }
                } catch (error) {
                    console.error(`[GitHub API] Error fetching user data for ${contributor.login}:`, error)
                }

                // Fallback if user details fetch fails
                return {
                    login: contributor.login,
                    name: contributor.login,
                    avatar: contributor.avatar_url,
                    contributions: contributor.contributions,
                    profile: contributor.html_url,
                    type: contributor.type,
                    bio: null,
                }
            }),
        )

        return NextResponse.json(detailedContributors)
    } catch (error) {
        console.error("[GitHub Contributors API] Error fetching contributors:", error)
        return NextResponse.json({ error: "Failed to fetch contributors" }, { status: 500 })
    }
}
