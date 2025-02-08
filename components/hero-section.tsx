"use client"

import * as React from "react"


import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { HeroNav } from "./hero-nav"
import LandingSearch from "./landing-search"

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
          <LandingSearch/>
          
        </div>
      </div>
    </div>
  )
}

