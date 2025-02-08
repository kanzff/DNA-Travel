import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Building2, CalendarDays, Users, Search } from "lucide-react"
import { HeroNav } from "./hero-nav"

export function HeroSection() {
  return (
    <div
      className="relative min-h-[600px] bg-cover bg-center"
    //   style={{
    //     backgroundImage:
    //       "url('/travel-landing.jpg')",
    //   }}
    >
      {/* Hero Heading */}
      <div className="pt-12 pb-4">
        <h1 className="text-2xl md:text-3xl font-bold text-white text-center">
          From Southeast Asia to the World, All Yours.
        </h1>
      </div>
      <HeroNav />
      <div className="container mx-auto px-4">
        <div className="border-b border-white opacity-50 max-w-5xl mx-auto"></div>
      </div>
      {/* Search Section */}
      <div className="container mx-auto px-4 pt-8">
        <div className="bg-transparent p-6 max-w-5xl mx-auto">
          <Tabs defaultValue="hotels" className="mb-6">
            <TabsList className="bg-transparent p-1 gap-1">
              <TabsTrigger
                value="hotels"
                className="flex-1 bg-white bg-opacity-20 text-white data-[state=active]:bg-white data-[state=active]:text-primary"
              >
                Hotels
              </TabsTrigger>
              <TabsTrigger
                value="villa"
                className="flex-1 bg-white bg-opacity-20 text-white data-[state=active]:bg-white data-[state=active]:text-primary"
              >
                Villa
              </TabsTrigger>
              <TabsTrigger
                value="apartment"
                className="flex-1 bg-white bg-opacity-20 text-white data-[state=active]:bg-white data-[state=active]:text-primary"
              >
                Apartment
              </TabsTrigger>
            </TabsList>
          </Tabs>

          <div className="flex w-full">
            <div className="w-full">
              <label className="text-sm font-medium mb-2 block text-gray-200 ">City, destination, or hotel name</label>
              <div className=" bg-white p-1 rounded-l-xl">
                <Building2 className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <Input placeholder="Jakarta" className="pl-10 border-gray-200 text-gray-200 placeholder-gray-400" />
              </div>
            </div>

            <div className="w-full">
              <label className="text-sm font-medium mb-2 block text-gray-200">Check-in & Check-out Dates</label>
              <div className="relative bg-white p-1">
                <CalendarDays className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <Input
                  placeholder="08 Feb 2025 - 09 Feb 2025"
                  className="pl-10 border-gray-200 text-gray-200 placeholder-gray-400"
                />
              </div>
            </div>

            <div className="w-full">
              <label className="text-sm font-medium mb-2 block text-gray-200">Guests and Rooms</label>
              <div className="relative bg-white p-1">
                <Users className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <Input
                  placeholder="1 Adult(s), 0 Child, 1 Room"
                  className="pl-10 border-gray-200 text-gray-200 placeholder-gray-400"
                />
              </div>
            </div>

            <div className="flex items-end">
              <Button className="w-auto h-11 px-4 bg-[#FF5E1F] hover:bg-[#FF5E1F]/90 rounded-none rounded-r-xl">
                <Search className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

