/**
 * Commands Section Component
 * Display all available slash commands
 */

import { Badge } from "@/components/ui/badge"

const commands = [
  {
    name: "/setup-reaction-roles",
    description: "Configure reaction roles on a message",
    permission: "Admin",
  },
  {
    name: "/remove-reaction-roles",
    description: "Remove reaction role configuration",
    permission: "Admin",
  },
  {
    name: "/setup-welcome",
    description: "Set up welcome messages for new members",
    permission: "Admin",
  },
  {
    name: "/setup-leave",
    description: "Configure leave/goodbye messages",
    permission: "Admin",
  },
  {
    name: "/setup-leveling",
    description: "Enable and configure the leveling system",
    permission: "Admin",
  },
  {
    name: "/add-level-role",
    description: "Add auto-role rewards for levels",
    permission: "Admin",
  },
  {
    name: "/rank",
    description: "Check your current level and XP",
    permission: "Public",
  },
  {
    name: "/leaderboard",
    description: "View server XP leaderboard",
    permission: "Public",
  },
  {
    name: "/setup-ticket",
    description: "Configure the ticket support system",
    permission: "Admin",
  },
  {
    name: "/ticket-stats",
    description: "View ticket statistics",
    permission: "Admin",
  },
  {
    name: "/schedule-message",
    description: "Schedule one-time or recurring messages",
    permission: "Admin",
  },
  {
    name: "/list-scheduled",
    description: "List all scheduled messages",
    permission: "Admin",
  },
  {
    name: "/remove-scheduled",
    description: "Cancel a scheduled message",
    permission: "Admin",
  },
  {
    name: "/reset",
    description: "Reset bot configurations for this server",
    permission: "Admin",
  },
]

export function CommandsSection() {
  return (
    <section id="commands" className="bg-secondary/30 py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center animate-fade-in-up">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Slash Commands</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Easy-to-use slash commands for all bot features
          </p>
        </div>

        {/* Commands Table */}
        <div
          className="mt-16 overflow-hidden rounded-lg bg-card shadow-lg animate-fade-in-up"
          style={{ animationDelay: "0.2s", opacity: 0, animationFillMode: "forwards" }}
        >
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-muted/50">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Command</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Description</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Permission</th>
                </tr>
              </thead>
              <tbody>
                {commands.map((cmd, index) => (
                  <tr
                    key={cmd.name}
                    className="transition-all duration-300 hover:bg-muted/30 animate-fade-in"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <td className="whitespace-nowrap px-6 py-4">
                      <code className="rounded bg-muted px-2 py-1 font-mono text-sm text-primary transition-all duration-300 hover:bg-primary/10 hover:shadow-md">
                        {cmd.name}
                      </code>
                    </td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">{cmd.description}</td>
                    <td className="whitespace-nowrap px-6 py-4">
                      <Badge
                        variant={cmd.permission === "Public" ? "default" : "secondary"}
                        className={`transition-all duration-300 hover:scale-110 ${
                          cmd.permission === "Public"
                            ? "bg-success text-success-foreground hover:shadow-lg hover:shadow-success/30"
                            : "hover:bg-primary/20 hover:text-primary"
                        }`}
                      >
                        {cmd.permission}
                      </Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}
