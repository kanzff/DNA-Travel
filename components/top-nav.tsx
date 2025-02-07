import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Globe, ChevronDown } from "lucide-react"

export function TopNav() {
  return (
    <nav className="bg-primary">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        <Link href="/" className="flex items-center">
          {/* <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-07%20110004-SS7F8QUfifgXmJmlPkzJY9PF8WYajk.png"
            alt="Traveloka"
            width={130}
            height={40}
            className="w-32"
          /> */}
        </Link>

        <div className="flex items-center gap-6">
          <div className="flex items-center text-white">
            <Globe className="w-4 h-4 mr-1" />
            <span className="mr-1">EN</span>
            <span className="mx-1">|</span>
            <span className="mr-1">IDR</span>
            <ChevronDown className="w-4 h-4" />
          </div>

          <Link href="/deals" className="text-white hover:text-gray-200">
            Deals
          </Link>

          <div className="flex items-center gap-2 text-white">
            <span>Support</span>
            <ChevronDown className="w-4 h-4" />
          </div>

          <Link href="/partnership" className="text-white hover:text-gray-200">
            Partnership
          </Link>

          <Link href="/corporates" className="text-white hover:text-gray-200">
            For Corporates
          </Link>

          <Link href="/bookings" className="text-white hover:text-gray-200">
            Bookings
          </Link>

          <Button variant="ghost" className="text-white hover:text-gray-200">
            Log In
          </Button>

          <Button className="bg-secondary hover:bg-secondary/90 text-white">Register</Button>
        </div>
      </div>
    </nav>
  )
}

