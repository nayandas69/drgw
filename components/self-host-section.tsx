/**
 * Self Host Section Component
 * Docker and self-hosting instructions
 */

"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Check, Copy, Container, Github, Server } from "lucide-react"

const GITHUB_URL = "https://github.com/nayandas69/discord-role-guardian"
const DOCKER_IMAGE = "ghcr.io/nayandas69/discord-role-guardian:latest"

export function SelfHostSection() {
  const [copiedDocker, setCopiedDocker] = useState(false)
  const [copiedGit, setCopiedGit] = useState(false)

  const copyToClipboard = async (text: string, setter: (value: boolean) => void) => {
    try {
      await navigator.clipboard.writeText(text)
      setter(true)
      setTimeout(() => setter(false), 2000)
    } catch (err) {
      console.error("Failed to copy:", err)
    }
  }

  return (
    <section id="self-host" className="border-y border-border bg-secondary/30 py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center animate-fade-in-up">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Self Host Your Instance</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Full control over your bot. Deploy with Docker or run from source.
          </p>
        </div>

        {/* Tabs for Different Methods */}
        <div className="mt-16 animate-fade-in">
          <Tabs defaultValue="docker" className="mx-auto max-w-4xl">
            <TabsList className="grid w-full grid-cols-2 bg-muted">
              <TabsTrigger value="docker" className="gap-2 transition-all duration-300 data-[state=active]:shadow-lg">
                <Container className="h-4 w-4" />
                Docker
              </TabsTrigger>
              <TabsTrigger value="source" className="gap-2 transition-all duration-300 data-[state=active]:shadow-lg">
                <Github className="h-4 w-4" />
                From Source
              </TabsTrigger>
            </TabsList>

            {/* Docker Tab */}
            <TabsContent value="docker" className="mt-8 animate-fade-in">
              <Card className="border-border bg-card transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-foreground">
                    <Container className="h-5 w-5 text-primary" />
                    Docker Deployment
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    The fastest way to deploy. Requires Docker installed on your system.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Step 1: Pull Image */}
                  <div className="animate-slide-up" style={{ animationDelay: "0.1s" }}>
                    <h4 className="mb-2 text-sm font-semibold text-foreground">1. Pull the Docker image</h4>
                    <div className="relative group">
                      <pre className="code-block overflow-x-auto rounded-lg bg-muted p-4 font-mono text-sm text-foreground transition-all duration-300 group-hover:shadow-lg group-hover:shadow-primary/10">
                        <code>docker pull {DOCKER_IMAGE}</code>
                      </pre>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="absolute top-2 right-2 transition-all duration-300 hover:scale-110"
                        onClick={() => copyToClipboard(`docker pull ${DOCKER_IMAGE}`, setCopiedDocker)}
                      >
                        {copiedDocker ? <Check className="h-4 w-4 text-success" /> : <Copy className="h-4 w-4" />}
                      </Button>
                    </div>
                  </div>

                  {/* Step 2: Run Container */}
                  <div className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
                    <h4 className="mb-2 text-sm font-semibold text-foreground">2. Run the container</h4>
                    <pre className="code-block overflow-x-auto rounded-lg bg-muted p-4 font-mono text-sm text-foreground transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                      <code>{`docker run -d \\
  --name discord-role-guardian \\
  -e DISCORD_TOKEN=your_token_here \\
  -e CLIENT_ID=your_client_id \\
  -v bot-data:/app/data \\
  ${DOCKER_IMAGE}`}</code>
                    </pre>
                  </div>

                  {/* Step 3: Docker Compose */}
                  <div className="animate-slide-up" style={{ animationDelay: "0.3s" }}>
                    <h4 className="mb-2 text-sm font-semibold text-foreground">
                      3. Or use Docker Compose (recommended)
                    </h4>
                    <pre className="code-block overflow-x-auto rounded-lg bg-muted p-4 font-mono text-sm text-foreground transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                      <code>{`# docker-compose.yml
version: '3.8'
services:
  bot:
    image: ${DOCKER_IMAGE}
    environment:
      - DISCORD_TOKEN=your_token_here
      - CLIENT_ID=your_client_id
    volumes:
      - bot-data:/app/data
    restart: unless-stopped

volumes:
  bot-data:`}</code>
                    </pre>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* From Source Tab */}
            <TabsContent value="source" className="mt-8 animate-fade-in">
              <Card className="border-border bg-card transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-foreground">
                    <Server className="h-5 w-5 text-primary" />
                    Build from Source
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    Clone the repository and run directly. Requires Node.js 18+.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Step 1: Clone */}
                  <div className="animate-slide-up" style={{ animationDelay: "0.1s" }}>
                    <h4 className="mb-2 text-sm font-semibold text-foreground">1. Clone the repository</h4>
                    <div className="relative group">
                      <pre className="code-block overflow-x-auto rounded-lg bg-muted p-4 font-mono text-sm text-foreground transition-all duration-300 group-hover:shadow-lg group-hover:shadow-primary/10">
                        <code>git clone {GITHUB_URL}.git</code>
                      </pre>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="absolute top-2 right-2 transition-all duration-300 hover:scale-110"
                        onClick={() => copyToClipboard(`git clone ${GITHUB_URL}.git`, setCopiedGit)}
                      >
                        {copiedGit ? <Check className="h-4 w-4 text-success" /> : <Copy className="h-4 w-4" />}
                      </Button>
                    </div>
                  </div>

                  {/* Step 2: Install */}
                  <div className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
                    <h4 className="mb-2 text-sm font-semibold text-foreground">2. Install dependencies</h4>
                    <pre className="code-block overflow-x-auto rounded-lg bg-muted p-4 font-mono text-sm text-foreground transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                      <code>{`cd discord-role-guardian
npm install`}</code>
                    </pre>
                  </div>

                  {/* Step 3: Configure */}
                  <div className="animate-slide-up" style={{ animationDelay: "0.3s" }}>
                    <h4 className="mb-2 text-sm font-semibold text-foreground">3. Configure environment variables</h4>
                    <pre className="code-block overflow-x-auto rounded-lg bg-muted p-4 font-mono text-sm text-foreground transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                      <code>{`# Create .env file
DISCORD_TOKEN=your_bot_token_here
CLIENT_ID=your_client_id_here`}</code>
                    </pre>
                  </div>

                  {/* Step 4: Run */}
                  <div className="animate-slide-up" style={{ animationDelay: "0.4s" }}>
                    <h4 className="mb-2 text-sm font-semibold text-foreground">4. Start the bot</h4>
                    <pre className="code-block overflow-x-auto rounded-lg bg-muted p-4 font-mono text-sm text-foreground transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                      <code>{`npm start
# Or for development
npm run dev`}</code>
                    </pre>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        {/* Requirements Note */}
        <div className="mx-auto mt-12 max-w-2xl rounded-lg border border-border bg-card p-6 animate-fade-in transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:scale-[1.02]">
          <h3 className="mb-4 text-lg font-semibold text-foreground">Requirements</h3>
          <ul className="space-y-2 text-muted-foreground stagger-animation">
            <li className="flex items-center gap-2 transition-all duration-300 hover:translate-x-2">
              <Check className="h-4 w-4 text-success" />
              Node.js 18.0.0 or higher
            </li>
            <li className="flex items-center gap-2 transition-all duration-300 hover:translate-x-2">
              <Check className="h-4 w-4 text-success" />
              Discord Bot Token from Discord Developer Portal
            </li>
            <li className="flex items-center gap-2 transition-all duration-300 hover:translate-x-2">
              <Check className="h-4 w-4 text-success" />
              Application Client ID
            </li>
            <li className="flex items-center gap-2 transition-all duration-300 hover:translate-x-2">
              <Check className="h-4 w-4 text-success" />
              Docker (optional, for containerized deployment)
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
