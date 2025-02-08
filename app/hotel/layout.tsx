import { MainNav } from "@/components/main-nav"
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
          <TopNav />
          <MainNav textColor={'text-gray-500'}/>
          <main className="bg-slate-100">{children}</main>
        </div>
      </body>
    </html>
  )
}