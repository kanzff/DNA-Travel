'use client'

import React, { useEffect } from 'react'
import { useState } from 'react'

import { useSearchParams } from 'next/navigation'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"

import { Star } from 'lucide-react';

import { hotels } from '../../dummy/hotels'
import HotelCard from './hotel-card'

const HotelContent = () => {
  const searchParams = useSearchParams()
  const region = searchParams.get('region')

  const [filters, setFilters] = useState({
    star: [],
    rating: [],
    tags: [],
    minPrice: "",
    maxPrice: ""
  });

  const hotelsByRegion = hotels.filter(hotel => hotel.city === region)

  useEffect(() => {
    console.log('ini filt', filters)
  }, [filters])

  // Handle checkbox change
  // const handleCheckboxChange = (category, value) => {
  //   setFilters((prev) => {
  //     const updated = new Set(prev[category]); // Use Set to prevent duplicates
  //     updated.has(value) ? updated.delete(value) : updated.add(value);
  //     return { ...prev, [category]: Array.from(updated) };
  //   });
  // };

  const handleCheckboxChange = (category, value) => {
    setFilters((prev) => {
      const updated = prev[category].includes(value)
        ? prev[category].filter((item) => item !== value) // Remove value if it exists
        : [...prev[category], value]; // Add value if not present
  
      return { ...prev, [category]: updated };
    });
  };

  const handlePriceChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  // Filter hotels based on selected filters
  const filteredHotels = hotelsByRegion.filter((hotel) => {
    const matchesStar = filters.star.length
      ? filters.star.includes(hotel.star.toString())
      : true;

    const matchesRating = filters.rating.length
      ? filters.rating.some((rating) => hotel.rating >= Number(rating))
      : true;

    const matchesTags = filters.tags.length
      ? filters.tags.every((tag) => hotel.tags.includes(tag))
      : true;

    const matchesPrice =
      (!filters.minPrice || Number(hotel.price) >= Number(filters.minPrice)) &&
      (!filters.maxPrice || Number(hotel.price) <= Number(filters.maxPrice));
    
    return matchesStar && matchesRating && matchesTags && matchesPrice;
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
            <Input 
              value={filters.minPrice}
              onChange={handlePriceChange}
              type="text"
              name="minPrice"
              placeholder="From" />
            <p className=''>-</p>
            <Input 
              value={filters.maxPrice}
              onChange={handlePriceChange}
              type="text"
              name="maxPrice"
              placeholder="To" />
          </CardContent>
        </Card>
        {/* <Card className="w-[250px]">
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
        </Card> */}
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
      <div className='flex flex-col gap-4 min-w-[1000px]'>
        {
          filteredHotels.map((hotel, i) => {
            return (
              <HotelCard hotel={hotel} key={i}/>
            )
          })
        }
      </div>
    </div>
  )
}

export default HotelContent