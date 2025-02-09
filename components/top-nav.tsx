import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Globe, ChevronDown, User } from "lucide-react"

export function TopNav({textColor, lightMode} : {textColor?: String | undefined, lightMode?: Boolean | undefined}) {
  return (
    <nav className="">
      <div className="container mx-auto px-4 flex items-center justify-center gap-24 h-16">
        <Link href="/" className="flex items-center">
          <p className={`text-3xl font-semibold ${lightMode ? 'text-gray-600': 'text-slate-100'}`}>traveloka</p>
          <Image
            src="/traveloka.png"
            alt="Traveloka"
            width={130}
            height={40}
            className="w-8 mb-4"
          />
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

          <div className="flex">
            <Button variant="ghost" className={`${textColor} px-2 hover:text-white ${lightMode ? 'hover:bg-slate-200 hover:text-black' : 'hover:bg-sky-950'} border mr-1 ${lightMode ? 'border-sky-500' : ''}`}>
              <div className="flex items-center gap-2">
                <User/>
                <p>Log In</p>
              </div>
            </Button>

            <Button className="bg-secondary hover:text-white hover:bg-sky-600 bg-sky-500">Register</Button>
          </div>
        </div>
      </div>
    </nav>
  )
}

