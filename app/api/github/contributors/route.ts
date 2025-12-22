/**
 * GitHub Contributors API Route
 * Fetches contributor data from both repositories (bot and website)
 * Author: nayandas69
 * Repositories:
 * - Bot: https://github.com/nayandas69/discord-role-guardian
 * - Website: https://github.com/nayandas69/drgw
 */

import { NextResponse } from "next/server"

const BOT_REPO = "nayandas69/discord-role-guardian"
const WEBSITE_REPO = "nayandas69/drgw"

const BOT_GITHUB_API = `https://api.github.com/repos/${BOT_REPO}/contributors`
const WEBSITE_GITHUB_API = `https://api.github.com/repos/${WEBSITE_REPO}/contributors`

export async function GET() {
    try {
        const headers: HeadersInit = {
            Accept: "application/vnd.github.v3+json",
        }

        // Use GitHub token if available for higher rate limits
        if (process.env.GITHUB_TOKEN) {
            headers["Authorization"] = `token ${process.env.GITHUB_TOKEN}`
        }

        const [botResponse, websiteResponse] = await Promise.all([
            fetch(BOT_GITHUB_API, {
                headers,
                next: { revalidate: 3600 }, // Cache for 1 hour
            }),
            fetch(WEBSITE_GITHUB_API, {
                headers,
                next: { revalidate: 3600 }, // Cache for 1 hour
            }),
        ])

        if (!botResponse.ok) {
            throw new Error(`GitHub API responded with status for bot repo: ${botResponse.status}`)
        }

        if (!websiteResponse.ok) {
            throw new Error(`GitHub API responded with status for website repo: ${websiteResponse.status}`)
        }

        const botContributors = await botResponse.json()
        const websiteContributors = await websiteResponse.json()

        const contributorMap = new Map<
            string,
            {
                login: string
                contributions: {
                    bot: number
                    website: number
                }
                avatar_url: string
                html_url: string
                type: string
            }
        >()

        // Add bot contributors to the map
        for (const contributor of botContributors) {
            contributorMap.set(contributor.login, {
                login: contributor.login,
                contributions: {
                    bot: contributor.contributions,
                    website: 0,
                },
                avatar_url: contributor.avatar_url,
                html_url: contributor.html_url,
                type: contributor.type,
            })
        }

        // Add website contributors to the map (merge if already exists)
        for (const contributor of websiteContributors) {
            if (contributorMap.has(contributor.login)) {
                const existing = contributorMap.get(contributor.login)!
                existing.contributions.website = contributor.contributions
            } else {
                contributorMap.set(contributor.login, {
                    login: contributor.login,
                    contributions: {
                        bot: 0,
                        website: contributor.contributions,
                    },
                    avatar_url: contributor.avatar_url,
                    html_url: contributor.html_url,
                    type: contributor.type,
                })
            }
        }

        const detailedContributors = await Promise.all(
            Array.from(contributorMap.values()).map(async (contributor) => {
                try {
                    // Fetch user details to get the display name
                    const userResponse = await fetch(`https://api.github.com/users/${contributor.login}`, {
                        headers,
                        next: { revalidate: 3600 },
                    })

                    if (userResponse.ok) {
                        const userData = await userResponse.json()

                        let contributorType = ""
                        if (contributor.login.toLowerCase() !== "nayandas69") {
                            if (contributor.contributions.bot > 0 && contributor.contributions.website > 0) {
                                contributorType = "Bot and Website Contributor"
                            } else if (contributor.contributions.bot > 0) {
                                contributorType = "Bot Contributor"
                            } else if (contributor.contributions.website > 0) {
                                contributorType = "Website Contributor"
                            }
                        }

                        let description = ""
                        if (contributor.login.toLowerCase() === "nayandas69") {
                            description =
                                "Creator and lead developer of Discord Role Guardian. Passionate about open-source and building tools for the Discord community."
                        } else {
                            description = userData.bio || "Open source contributor helping improve the project"
                        }

                        return {
                            login: contributor.login,
                            name: userData.name || contributor.login,
                            avatar: contributor.avatar_url,
                            contributions: contributor.contributions.bot + contributor.contributions.website,
                            botContributions: contributor.contributions.bot,
                            websiteContributions: contributor.contributions.website,
                            contributorType,
                            profile: contributor.html_url,
                            type: contributor.type,
                            bio: userData.bio || null,
                            description,
                        }
                    }
                } catch (error) {
                    console.error(`[GitHub API] Error fetching user data for ${contributor.login}:`, error)
                }

                // Fallback if user details fetch fails
                let contributorType = ""
                if (contributor.login.toLowerCase() !== "nayandas69") {
                    if (contributor.contributions.bot > 0 && contributor.contributions.website > 0) {
                        contributorType = "Bot and Website Contributor"
                    } else if (contributor.contributions.bot > 0) {
                        contributorType = "Bot Contributor"
                    } else if (contributor.contributions.website > 0) {
                        contributorType = "Website Contributor"
                    }
                }

                let description = ""
                if (contributor.login.toLowerCase() === "nayandas69") {
                    description =
                        "Creator and lead developer of Discord Role Guardian. Passionate about open-source and building tools for the Discord community."
                } else {
                    description = "Open source contributor helping improve the project"
                }

                return {
                    login: contributor.login,
                    name: contributor.login,
                    avatar: contributor.avatar_url,
                    contributions: contributor.contributions.bot + contributor.contributions.website,
                    botContributions: contributor.contributions.bot,
                    websiteContributions: contributor.contributions.website,
                    contributorType,
                    profile: contributor.html_url,
                    type: contributor.type,
                    bio: null,
                    description,
                }
            }),
        )

        return NextResponse.json(detailedContributors)
    } catch (error) {
        console.error("[GitHub Contributors API] Error fetching contributors:", error)
        return NextResponse.json({ error: "Failed to fetch contributors" }, { status: 500 })
    }
}
