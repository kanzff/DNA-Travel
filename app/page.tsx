import { TopNav } from "@/components/top-nav"
import { HeroSection } from "@/components/hero-section"
import { PromotionSection } from "@/components/promotion-section"

export default function Home() {
  return (
    <main className="min-h-screen">
      <TopNav />
      <HeroSection />
      <PromotionSection />
    </main>
  )
}

