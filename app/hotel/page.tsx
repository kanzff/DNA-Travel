'use client'

import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import Image from 'next/image'


const Hotel = () => {
  return (
    <div className='container mx-auto p-4 flex justify-center gap-4'>
      <div className='flex flex-col gap-4'>
        <Card className="w-[250px]">
          <CardHeader>
            <CardTitle>Price Range</CardTitle>
            <CardDescription>Per room, per night</CardDescription>
          </CardHeader>
          <CardContent>
            
          </CardContent>
        </Card>
        <Card className="w-[250px]">
          <CardHeader>
            <CardTitle>Popular Filter</CardTitle>
          </CardHeader>
          <CardContent className='flex flex-col gap-2'>
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" />
              <label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Promo Domestik
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" />
              <label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                5 Star
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" />
              <label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                4 Star
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" />
              <label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Pools
              </label>
            </div>
          </CardContent>
        </Card>
        <Card className="w-[250px]">
          <CardHeader>
            <CardTitle>Promo & Discount</CardTitle>
          </CardHeader>
          <CardContent className='flex flex-col gap-2'>
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" />
              <label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Promo for You
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" />
              <label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Extra Benefit
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" />
              <label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Promo Domestik
              </label>
            </div>
          </CardContent>
        </Card>
        <Card className="w-[250px]">
          <CardHeader>
            <CardTitle>Star Rating</CardTitle>
          </CardHeader>
          <CardContent className='flex flex-col gap-2'>
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" />
              <label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                1 Star
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" />
              <label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                2 Star
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" />
              <label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                3 Star
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" />
              <label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                4 Star
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" />
              <label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                5 Star
              </label>
            </div>
          </CardContent>
        </Card>
        <Card className="w-[250px]">
          <CardHeader>
            <CardTitle>Popular Facilities</CardTitle>
          </CardHeader>
          <CardContent className='flex flex-col gap-2'>
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" />
              <label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Pools
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" />
              <label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Elevator
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" />
              <label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Fitness Center
              </label>
            </div>
          </CardContent>
        </Card>
      </div>
      <div className='flex flex-col gap-4'>
        <Card className="w-[900px] p-0">
          <CardContent className='flex justify-between p-0'>
            <div className='w-auto'>
              <Image
                className='rounded-tl-lg mb-0.5'
                width={309}
                height={200}
                src={'/hotel-1.jpeg'}
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
            <div className='w-[400px] p-4 border-r-2'>
              <p className='mb-4 font-bold'>HOtel XVCVC</p>
              <p>Hotels <span>ini star</span> </p>
              <p>ini location</p>
              <p>ini multi tags</p>
            </div>
            <div className='w-[200px] flex flex-col justify-end p-4 items-end'>
              <p className='text-xs text-green-600'>Value Rate</p>
              <p className='text-gray-600 text-xs line-through'>Rp. 5.049.348</p>
              <p className='text-orange-500 font-semibold'>Rp. 3.849.348</p>
              <p className='text-gray-600 text-xs'>Exclude taxes & fees</p>
              <Button className='mt-3 bg-orange-600 '>Select Room</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default Hotel