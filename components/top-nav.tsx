import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Globe, ChevronDown } from "lucide-react"

export function TopNav({textColor, lightMode} : {textColor?: String | undefined, lightMode?: Boolean | undefined}) {
  return (
    <nav className="">
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
          <div className={`flex items-center ${textColor}`}>
            <Globe className="w-4 h-4 mr-1" />
            <span className="mr-1">EN</span>
            <span className="mx-1">|</span>
            <span className="mr-1">IDR</span>
            <ChevronDown className="w-4 h-4" />
          </div>

          <Link href="/deals" className={`${textColor} hover:text-gray-200`}>
            Deals
          </Link>

          <div className={`flex items-center gap-2 ${textColor}`}>
            <span>Support</span>
            <ChevronDown className="w-4 h-4" />
          </div>

          <Link href="/partnership" className={`${textColor} hover:text-gray-200`}>
            Partnership
          </Link>

          <Link href="/corporates" className={`${textColor} hover:text-gray-200`}>
            For Corporates
          </Link>

          <Link href="/bookings" className={`${textColor} hover:text-gray-200`}>
            Bookings
          </Link>

          <div>
            <Button variant="ghost" className={`${textColor} hover:text-gray-200 border mr-1 ${lightMode ? 'border-sky-500' : ''}`}>
              Log In
            </Button>

            <Button className="bg-secondary hover:bg-secondary/90 textColor bg-sky-500">Register</Button>
          </div>
        </div>
      </div>
    </nav>
  )
}

