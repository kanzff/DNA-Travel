"use client"

import * as React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Calendar } from "@/components/ui/calendar"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Building2, CalendarDays, Users, Search } from "lucide-react"
import { HeroNav } from "./hero-nav"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { addDays, format } from "date-fns"
import { CalendarIcon } from "lucide-react"
import { DateRange } from "react-day-picker"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
 
import { cn } from "@/lib/utils"

export function HeroSection() {
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: new Date(2022, 0, 20),
    to: addDays(new Date(2022, 0, 20), 20),
  })
  const [open, setOpen] = React.useState(false)
  const [openRoom, setOpenRoom] = React.useState(false)
  const [value, setValue] = React.useState<String>("")
  const [roomValue, setRoomValue] = React.useState({
    adult: 1,
    children: 0,
    room: 1
  })

  const regions = [
    {
      label: 'Jakarta',
      value: 'jakarta'
    },
    {
      label: 'Bandung',
      value: 'bandung'
    },
    {
      label: 'Malang',
      value: 'malang'
    }
  ]

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
                {/* <Building2 className="absolute left-3 top-3 h-5 w-5 text-gray-400" /> */}
                <Popover open={open} onOpenChange={setOpen}>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      role="combobox"
                      aria-expanded={open}
                      className="justify-between w-full"
                    >
                      {value
                        ? regions.find((region) => region.value === value)?.label
                        : "City, hotel, place to go"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-full ">
                    <Command>
                      <CommandInput placeholder="Search region..." className="h-9" />
                      <CommandList>
                        <CommandEmpty>No region found.</CommandEmpty>
                        <CommandGroup>
                          {regions.map((region) => (
                            <CommandItem
                              key={region.value}
                              value={region.value}
                              onSelect={(currentValue) => {
                                setValue(currentValue === value ? "" : currentValue)
                                setOpen(false)
                              }}
                            >
                              {region.label}
                            </CommandItem>
                          ))}
                        </CommandGroup>
                      </CommandList>
                    </Command>
                  </PopoverContent>
                </Popover>
              </div>
            </div>

            <div className="w-full">
              <label className="text-sm font-medium mb-2 block text-gray-200">Check-in & Check-out Dates</label>
              <div className="relative bg-white p-1">
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      id="date"
                      variant={"outline"}
                      className={cn(
                        "w-[300px] justify-start text-left font-normal",
                        !date && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon />
                      {date?.from ? (
                        date.to ? (
                          <>
                            {format(date.from, "LLL dd, y")} -{" "}
                            {format(date.to, "LLL dd, y")}
                          </>
                        ) : (
                          format(date.from, "LLL dd, y")
                        )
                      ) : (
                        <span>Pick a date</span>
                      )}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      initialFocus
                      mode="range"
                      defaultMonth={date?.from}
                      selected={date}
                      onSelect={setDate}
                      numberOfMonths={2}
                    />
                  </PopoverContent>
                </Popover>
              </div>
            </div>

            <div className="w-full">
              <label className="text-sm font-medium mb-2 block text-gray-200">Guests and Rooms</label>
              <div className="relative bg-white p-1">
                {/* <Users className="absolute left-3 top-3 h-5 w-5 text-gray-400" /> */}
                <Popover open={openRoom} onOpenChange={setOpenRoom}>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      role="combobox"
                      aria-expanded={openRoom}
                      className="justify-between w-full"
                    >
                      {`${roomValue.adult} Adult(s), ${roomValue.children} Child, ${roomValue.room} Room`}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-[300px]">
                    <div className="flex justify-between items-center">
                      <p>Adult</p>
                      <div className="flex gap-2">
                        <button
                          onClick={() => setRoomValue(prev => ({ ...prev, adult: Math.max(1, prev.adult - 1) }))}
                          className="px-2 py-0 rounded-md bg-gray-400">
                        -</button>
                        <p className="w-4 text-center">{roomValue.adult}</p>
                        <button
                          onClick={() => setRoomValue(prev => ({ ...prev, adult: prev.adult + 1 }))}
                          className="px-2 py-0 rounded-md bg-gray-400">
                        +</button>
                      </div>
                    </div>
                    <div className="flex justify-between mt-2">
                      <p>Children</p>
                      <div className="flex gap-2">
                        <button
                          onClick={() => setRoomValue(prev => ({ ...prev, children: Math.max(0, prev.children - 1) }))}
                          className=" px-2 py-0 rounded-md bg-gray-400">
                        -</button>
                        <p className="w-4 text-center">{roomValue.children}</p>
                        <button
                          onClick={() => setRoomValue(prev => ({ ...prev, children: prev.children + 1 }))}
                          className="px-2 py-0 rounded-md bg-gray-400">
                        +</button>
                      </div>                  
                    </div>
                    <div className="flex justify-between mt-2">
                      <p>Room</p>
                      <div className="flex gap-2">
                        <button
                          onClick={() => setRoomValue(prev => ({ ...prev, room: Math.max(1, prev.room - 1) }))}
                          className="px-2 py-0 rounded-md bg-gray-400">
                        -</button>
                        <p className="w-4 text-center">{roomValue.room}</p>
                        <button
                          onClick={() => setRoomValue(prev => ({ ...prev, room: prev.room + 1 }))}
                          className="px-2 py-0 rounded-md bg-gray-400">
                        +</button>                    
                      </div>
                    </div>
                  </PopoverContent>
                </Popover>
              </div>
            </div>

            <div className="flex items-end">
              <Button disabled={value === null || value === ""} className="w-auto h-11 px-4 bg-[#FF5E1F] hover:bg-[#FF5E1F]/90 rounded-none rounded-r-xl">
                <Search className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

