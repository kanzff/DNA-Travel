'use client'

import React from 'react'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { CalendarIcon } from "lucide-react"
import { addDays, format } from "date-fns"
import { Search, MapPin, Contact } from "lucide-react"
import { DateRange } from "react-day-picker"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
 
import { cn } from "@/lib/utils"

const MainSearch = ({ region }: { region?: string | null }) => {
  const router = useRouter()

  const [date, setDate] = React.useState<DateRange | undefined>({
    from: new Date(2022, 0, 20),
    to: addDays(new Date(2022, 0, 20), 20),
  })
  const [open, setOpen] = React.useState(false)
  const [openRoom, setOpenRoom] = React.useState(false)
  const [value, setValue] = React.useState<string>("")
  const [roomValue, setRoomValue] = React.useState({
    adult: 1,
    children: 0,
    room: 1
  })

  useEffect(() => {
    if (!!region) setValue(region)
  }, [])
  

  const regions = [
    {
      label: 'Jakarta',
      value: 'Jakarta'
    },
    {
      label: 'Bandung',
      value: 'Bandung'
    },
    {
      label: 'Malang',
      value: 'Malang'
    }
  ]

  return (
    <div className="flex w-full">
      <div className="w-full">
        <div className=" bg-white ">
          {/* <Building2 className="absolute left-3 top-3 h-5 w-5 text-gray-400" /> */}
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                role="combobox"
                aria-expanded={open}
                className="justify-start w-full"
              >
                <MapPin className='text-sky-600'/>
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
        <div className=" bg-white ">
          <Popover>
            <PopoverTrigger asChild>
              <Button
                id="date"
                variant={"outline"}
                className={cn(
                  "w-full justify-start text-left font-normal",
                  !date && "text-muted-foreground"
                )}
              >
                <CalendarIcon className='text-sky-600'/>
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
        <div className="bg-white">
          {/* <Users className="absolute left-3 top-3 h-5 w-5 text-gray-400" /> */}
          <Popover open={openRoom} onOpenChange={setOpenRoom}>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                role="combobox"
                aria-expanded={openRoom}
                className="justify-start w-full"
              >
                <Contact className='text-sky-600'/>
                {`${roomValue.adult} Adult(s), ${roomValue.children} Child, ${roomValue.room} Room`}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[300px]">
              <div className="flex justify-between items-center">
                <p>Adult</p>
                <div className="flex gap-2">
                  <button
                    onClick={() => setRoomValue(prev => ({ ...prev, adult: Math.max(1, prev.adult - 1) }))}
                    className="px-2 py-0 rounded-md bg-gray-200">
                  -</button>
                  <p className="w-4 text-center">{roomValue.adult}</p>
                  <button
                    onClick={() => setRoomValue(prev => ({ ...prev, adult: prev.adult + 1 }))}
                    className="px-2 py-0 rounded-md bg-gray-200 text-sky-500">
                  +</button>
                </div>
              </div>
              <div className="flex justify-between mt-2">
                <p>Children</p>
                <div className="flex gap-2">
                  <button
                    onClick={() => setRoomValue(prev => ({ ...prev, children: Math.max(0, prev.children - 1) }))}
                    className=" px-2 py-0 rounded-md bg-gray-200">
                  -</button>
                  <p className="w-4 text-center">{roomValue.children}</p>
                  <button
                    onClick={() => setRoomValue(prev => ({ ...prev, children: prev.children + 1 }))}
                    className="px-2 py-0 rounded-md bg-gray-200 text-sky-500">
                  +</button>
                </div>                  
              </div>
              <div className="flex justify-between mt-2">
                <p>Room</p>
                <div className="flex gap-2">
                  <button
                    onClick={() => setRoomValue(prev => ({ ...prev, room: Math.max(1, prev.room - 1) }))}
                    className="px-2 py-0 rounded-md bg-gray-200">
                  -</button>
                  <p className="w-4 text-center">{roomValue.room}</p>
                  <button
                    onClick={() => setRoomValue(prev => ({ ...prev, room: prev.room + 1 }))}
                    className="px-2 py-0 rounded-md bg-gray-200 text-sky-500">
                  +</button>                    
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>

      <div className="flex items-center">
        <Button 
          onClick={() => router.push(`/hotel?region=${value}`)}
          disabled={value === null || value === ""}
          className="w-auto h-9 px-4 bg-sky-500 rounded-r-xl hover:bg-sky-600">
          <Search className="w-5 h-5" />
          Search Hotels
        </Button>
      </div>
    </div>
  )
}

export default MainSearch