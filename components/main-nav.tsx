import Link from "next/link"
import { Plane, Building2, Train, Bus, Car, MapPin, MoreHorizontal } from "lucide-react"

export function MainNav() {
  return (
    <nav className="bg-transparent">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-14 max-w-5xl mx-auto">
          <Link href="/hotels" className="flex items-center gap-2 text-white hover:text-secondary">
            <Building2 className="w-5 h-5" />
            <span>Hotels</span>
          </Link>

          <Link href="/flights" className="flex items-center gap-2 text-white hover:text-secondary">
            <Plane className="w-5 h-5" />
            <span>Flights</span>
          </Link>

          <Link href="/trains" className="flex items-center gap-2 text-white hover:text-secondary">
            <Train className="w-5 h-5" />
            <span>Trains</span>
          </Link>

          <Link href="/bus" className="flex items-center gap-2 text-white hover:text-secondary">
            <Bus className="w-5 h-5" />
            <span>Bus & Travel</span>
          </Link>

          <Link href="/airport" className="flex items-center gap-2 text-white hover:text-secondary">
            <Car className="w-5 h-5" />
            <span>Airport Transfer</span>
          </Link>

          <Link href="/car-rental" className="flex items-center gap-2 text-white hover:text-secondary">
            <Car className="w-5 h-5" />
            <span>Car Rental</span>
          </Link>

          <Link href="/attractions" className="flex items-center gap-2 text-white hover:text-secondary">
            <MapPin className="w-5 h-5" />
            <span>Things to Do</span>
          </Link>

          <Link href="/more" className="flex items-center gap-2 text-white hover:text-secondary">
            <MoreHorizontal className="w-5 h-5" />
            <span>More</span>
          </Link>
        </div>
      </div>
    </nav>
  )
}

