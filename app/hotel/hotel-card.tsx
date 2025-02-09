import React from 'react'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Star, Hotel, MapPin } from 'lucide-react'


const HotelCard = ({hotel}) => {
  return (
    <Card className="w-[1000px] p-0">
      <CardContent className='flex justify-between p-0 '>
        <div className='w-auto'>
          <Image
            className='rounded-tl-lg mb-0.5 w-[309px] h-[200px]'
            width={309}
            height={200}
            src={hotel.image}
            alt='hotel'
          />
          <div className='flex gap-0.5'>
            <Image
              className='rounded-bl-lg'
              width={100}
              height={75}
              src={'/hotel-extra-1.jpeg'}
              alt='hotel'
            />
            <Image
              width={100}
              height={75}
              src={'/hotel-extra-2.jpeg'}
              alt='hotel'
            />
            <Image
              width={100}
              height={75}
              src={'/hotel-extra-3.jpeg'}
              alt='hotel'
            />
          </div>
        </div>
        <div className='w-[500px] p-4 border-r-2'>
          <div className='flex justify-between'>
            <p className='mb-4 font-bold'>{hotel.name}</p>
            <p className='text-sky-500 font-semibold '>{`${hotel.rating}`}<span className='ml-1 text-gray-500 font-normal text-sm'>{`(4,9k reviews)`}</span></p>
          </div>
          <div className='flex items-center'>
            <div className='flex bg-sky-100 px-1  gap-1 rounded mr-2'>
              <Hotel className='w-[16px] text-sky-600'/>
              <p className='text-sky-600'>Hotels</p>
            </div>
            {Array.from({ length: hotel.star }, (_, i) => (
              <Star key={i} className="text-yellow-400 h-4" />
            ))}
          </div>
          <div className='flex items-center gap-2'>
            <MapPin className='w-5 pt-1'/>
            <p className='mt-1'>{hotel.city}</p>
          </div>
          <div className='flex gap-2 mt-2'>
            {
              hotel.tags.map((tag, i) => {
                return (
                  <p className='bg-gray-200 rounded-sm px-1 text-sm' key={i}>{tag.replace(/^./, c => c.toUpperCase())}</p>
                )
              })
            }
          </div>
        </div>
        <div className='w-[200px] flex flex-col justify-end p-4 items-end'>
          <p className='text-xs text-green-600'>Value Rate</p>
          <p className='text-gray-600 text-xs line-through'>Rp. {Number(hotel.old_price).toLocaleString("id-ID").replace(/,/g, ".")}</p>
          <p className='text-orange-500 font-semibold'>Rp. {Number(hotel.price).toLocaleString("id-ID").replace(/,/g, ".")}</p>
          <p className='text-gray-600 text-xs'>Exclude taxes & fees</p>
          <Button className='mt-3 bg-orange-600 hover:bg-orange-700'>Select Room</Button>
        </div>
      </CardContent>
    </Card>
  )
}

export default HotelCard