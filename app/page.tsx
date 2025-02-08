import { TopNav } from "@/components/top-nav"
import { HeroSection } from "@/components/hero-section"
import { PromotionSection } from "@/components/promotion-section"
import { MainNav } from "@/components/main-nav"

export default function Home() {
  return (
    <main className="min-h-screen">
        <div
            style={{
                backgroundImage:
                  "url('/travel-landing.jpg')",
              }}
        >
            <TopNav textColor={'text-white'} />
            <MainNav textColor={'text-white'}/>
            <HeroSection />
        </div>
      <PromotionSection />
    </main>
  )
}

