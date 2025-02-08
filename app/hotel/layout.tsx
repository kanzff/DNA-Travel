import { MainNav } from "@/components/main-nav"
import MainSearch from "@/components/main-search"
import { TopNav } from "@/components/top-nav"

export default function HotelLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        {/* Layout UI */}
        {/* Place children where you want to render a page or nested layout */}
        <div className="min-h-screen">
          <TopNav lightMode={true} />
          <MainNav textColor={'text-gray-500'}/>
          <div className="p-6 max-w-5xl mx-auto">
            <MainSearch/>
          </div>
          <main className="bg-slate-100">{children}</main>
        </div>
      </body>
    </html>
  )
}