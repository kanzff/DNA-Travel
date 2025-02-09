'use client'

import React, { useEffect } from 'react'
import { useState } from 'react'

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
import { Input } from "@/components/ui/input"

import Image from 'next/image'
import { Star } from 'lucide-react';

import { hotels } from '../../dummy/hotels'

const Hotel = () => {
  const [filters, setFilters] = useState({
    star: [],
    rating: [],
    tags: [],
  });

  useEffect(() => {
    console.log('ini filt', filters)
  }, [filters])
  // Handle checkbox change
  const handleCheckboxChange = (category, value) => {
    setFilters((prev) => {
      const updated = new Set(prev[category]); // Use Set to prevent duplicates
      updated.has(value) ? updated.delete(value) : updated.add(value);
      return { ...prev, [category]: Array.from(updated) };
    });
  };

  // Filter hotels based on selected filters
  const filteredHotels = hotels.filter((hotel) => {
    const matchesStar = filters.star.length
      ? filters.star.includes(hotel.star.toString())
      : true;

    const matchesRating = filters.rating.length
      ? filters.rating.some((rating) => hotel.rating >= Number(rating))
      : true;

    const matchesTags = filters.tags.length
      ? filters.tags.some((tag) => hotel.tags.includes(tag))
      : true;

    return matchesStar && matchesRating && matchesTags;
  });

  return (
    <div className='container mx-auto p-4 flex justify-center gap-4'>
      <div className='flex flex-col gap-4'>
        <Card className="w-[250px]">
          <CardHeader className='p-4'>
            <CardTitle>Price Range</CardTitle>
            <CardDescription>Per room, per night</CardDescription>
          </CardHeader>
          <CardContent className='flex gap-2 px-4 pb-4'>
            <Input type="text" placeholder="From" />
            <p className=''>-</p>
            <Input type="text" placeholder="To" />
          </CardContent>
        </Card>
        <Card className="w-[250px]">
          <CardHeader className='p-4'>
            <CardTitle>Popular Filter</CardTitle>
          </CardHeader>
          <CardContent className='flex flex-col gap-2 px-4 pb-4'>
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
              <Checkbox id="terms" onCheckedChange={() => handleCheckboxChange("star", '5')}/>
              <label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                <div className='flex items-center'>
                  <p>5</p>
                  <Star className='text-yellow-400 h-4'/>
                  <Star className='text-yellow-400 h-4'/>
                  <Star className='text-yellow-400 h-4'/>
                  <Star className='text-yellow-400 h-4'/>
                  <Star className='text-yellow-400 h-4'/>
                </div>
              </label>
            </div>
            <div className="flex items-center space-x-2">
            <Checkbox id="terms" onCheckedChange={() => handleCheckboxChange("star", '4')}/>
              <label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                <div className='flex items-center'>
                  <p>4</p>
                  <Star className='text-yellow-400 h-4'/>
                  <Star className='text-yellow-400 h-4'/>
                  <Star className='text-yellow-400 h-4'/>
                  <Star className='text-yellow-400 h-4'/>
                </div>
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
          <CardHeader className='p-4'>
            <CardTitle>Star Rating</CardTitle>
          </CardHeader>
          <CardContent className='flex flex-col gap-2 px-4 pb-4'>
            <div className="flex items-center space-x-2">
            <Checkbox id="terms" onCheckedChange={() => handleCheckboxChange("star", '1')}/>
              <label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                <div className='flex items-center'>
                  <p>1</p>
                  <Star className='text-yellow-400 h-4'/>
                </div>
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" onCheckedChange={() => handleCheckboxChange("star", '2')}/>
              <label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                <div className='flex items-center'>
                  <p>2</p>
                  <Star className='text-yellow-400 h-4'/>
                  <Star className='text-yellow-400 h-4'/>
                </div>
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" onCheckedChange={() => handleCheckboxChange("star", '3')}/>
              <label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                <div className='flex items-center'>
                  <p>3</p>
                  <Star className='text-yellow-400 h-4'/>
                  <Star className='text-yellow-400 h-4'/>
                  <Star className='text-yellow-400 h-4'/>
                </div>
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" onCheckedChange={() => handleCheckboxChange("star", '4')}/>
              <label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                <div className='flex items-center'>
                  <p>4</p>
                  <Star className='text-yellow-400 h-4'/>
                  <Star className='text-yellow-400 h-4'/>
                  <Star className='text-yellow-400 h-4'/>
                  <Star className='text-yellow-400 h-4'/>
                </div>
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" onCheckedChange={() => handleCheckboxChange("star", '5')}/>
              <label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                <div className='flex items-center'>
                  <p>5</p>
                  <Star className='text-yellow-400 h-4'/>
                  <Star className='text-yellow-400 h-4'/>
                  <Star className='text-yellow-400 h-4'/>
                  <Star className='text-yellow-400 h-4'/>
                  <Star className='text-yellow-400 h-4'/>
                </div>
              </label>
            </div>
          </CardContent>
        </Card>
        <Card className="w-[250px]">
          <CardHeader className='p-4'>
            <CardTitle>Guest Rating</CardTitle>
          </CardHeader>
          <CardContent className='flex flex-col gap-2 px-4 pb-4'>
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" onCheckedChange={() => handleCheckboxChange("rating", '7')}/>
              <label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                <span className='text-sky-500 font-bold'>7+ </span>Convinient
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" onCheckedChange={() => handleCheckboxChange("rating", '8')}/>
              <label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                <span className='text-sky-500 font-bold'>8+ </span>Impressive
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" onCheckedChange={() => handleCheckboxChange("rating", '9')}/>
              <label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                <span className='text-sky-500 font-bold'>9+ </span>Superb
              </label>
            </div>
          </CardContent>
        </Card>
        <Card className="w-[250px]">
          <CardHeader className='p-4'>
            <CardTitle>Popular Facilities</CardTitle>
          </CardHeader>
          <CardContent className='flex flex-col gap-2 px-4 pb-4'>
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" onCheckedChange={() => handleCheckboxChange("tags", 'pools')}/>
              <label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Pools
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" onCheckedChange={() => handleCheckboxChange("tags", 'elevator')}/>
              <label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Elevator
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" onCheckedChange={() => handleCheckboxChange("tags", 'fitness')}/>
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
          <CardContent className='flex justify-between p-0 '>
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