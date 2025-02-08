import { Plane, Building2, Train, Bus, Car, MapPin, MoreHorizontal } from "lucide-react"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function HeroNav() {
  return (
    <nav className="bg-transparent">
      <Tabs defaultValue="hotels" className="container mx-auto px-4">
        <TabsList className="bg-transparent flex items-center justify-between h-14 max-w-5xl mx-auto">
          <TabsTrigger value="hotels" className="flex items-center gap-2 text-white hover:text-secondary">
            <Building2 className="w-5 h-5" />
            <span>Hotels</span>
          </TabsTrigger>

          <TabsTrigger value="flights" className="flex items-center gap-2 text-white hover:text-secondary">
            <Plane className="w-5 h-5" />
            <span>Flights</span>
          </TabsTrigger>

          <TabsTrigger value="trains" className="flex items-center gap-2 text-white hover:text-secondary">
            <Train className="w-5 h-5" />
            <span>Trains</span>
          </TabsTrigger>

          <TabsTrigger value="bus" className="flex items-center gap-2 text-white hover:text-secondary">
            <Bus className="w-5 h-5" />
            <span>Bus & Travel</span>
          </TabsTrigger>

          <TabsTrigger value="airport" className="flex items-center gap-2 text-white hover:text-secondary">
            <Car className="w-5 h-5" />
            <span>Airport Transfer</span>
          </TabsTrigger>

          <TabsTrigger value="car" className="flex items-center gap-2 text-white hover:text-secondary">
            <Car className="w-5 h-5" />
            <span>Car Rental</span>
          </TabsTrigger>

          <TabsTrigger value="things" className="flex items-center gap-2 text-white hover:text-secondary">
            <MapPin className="w-5 h-5" />
            <span>Things to Do</span>
          </TabsTrigger>

          <TabsTrigger value="more" className="flex items-center gap-2 text-white hover:text-secondary">
            <MoreHorizontal className="w-5 h-5" />
            <span>More</span>
          </TabsTrigger>
        </TabsList>
      </Tabs>
    </nav>
  )
}

