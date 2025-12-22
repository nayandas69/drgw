/**
 * Discord Role Guardian - Main Landing Page
 * Showcase website for the open source Discord bot
 * Author: nayandas69
 * Repository: https://github.com/nayandas69/discord-role-guardian
 */

import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { CommandsSection } from "@/components/commands-section"
import { InstallationSection } from "@/components/installation-section"
import { SelfHostSection } from "@/components/self-host-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <CommandsSection />
        <InstallationSection />
        <SelfHostSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
