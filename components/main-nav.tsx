import Link from "next/link"
import {ChevronDown } from "lucide-react"

export function MainNav({textColor} : {textColor?: string | undefined}) {
  return (
    <nav className="bg-transparent">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-start gap-5 h-14 max-w-5xl mx-auto">
          <Link href="/hotels" className={`flex items-center gap-2 ${textColor} font-semibold hover:text-secondary`}>
            <span>Hotels</span>
          </Link>

          <Link href="/flights" className={`flex items-center gap-2 ${textColor} font-semibold hover:text-secondary`}>
            <span>Flights</span>
          </Link>

          <Link href="/trains" className={`flex items-center gap-2 ${textColor} font-semibold hover:text-secondary`}>
            <span>Trains</span>
          </Link>

          <Link href="/bus" className={`flex items-center gap-2 ${textColor} font-semibold hover:text-secondary`}>
            <span>Bus & Travel</span>
          </Link>

          <Link href="/airport" className={`flex items-center gap-2 ${textColor} font-semibold hover:text-secondary`}>
            <span>Airport Transfer</span>
          </Link>

          <Link href="/car-rental" className={`flex items-center gap-2 ${textColor} font-semibold hover:text-secondary`}>
            <span>Car Rental</span>
          </Link>

          <Link href="/attractions" className={`flex items-center gap-2 ${textColor} font-semibold hover:text-secondary`}>
            <span>Things to Do</span>
          </Link>

          <Link href="/more" className={`flex items-center gap-2 ${textColor} font-semibold hover:text-secondary`}>
            <span>More</span>
            <ChevronDown className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </nav>
  )
}

