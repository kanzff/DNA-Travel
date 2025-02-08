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

import { Button } from "@/components/ui/button"

const Hotel = () => {
  return (
    <div className='container mx-auto p-4 flex justify-center gap-4'>
      <div className='flex flex-col gap-4'>
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle>Price Range</CardTitle>
            <CardDescription>Per room, per night</CardDescription>
          </CardHeader>
          <CardContent>
            
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline">Cancel</Button>
            <Button>Deploy</Button>
          </CardFooter>
        </Card>
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle>Price Range</CardTitle>
            <CardDescription>Per room, per night</CardDescription>
          </CardHeader>
          <CardContent>
            
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline">Cancel</Button>
            <Button>Deploy</Button>
          </CardFooter>
        </Card>
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle>Price Range</CardTitle>
            <CardDescription>Per room, per night</CardDescription>
          </CardHeader>
          <CardContent>
            
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline">Cancel</Button>
            <Button>Deploy</Button>
          </CardFooter>
        </Card>
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle>Price Range</CardTitle>
            <CardDescription>Per room, per night</CardDescription>
          </CardHeader>
          <CardContent>
            
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline">Cancel</Button>
            <Button>Deploy</Button>
          </CardFooter>
        </Card>
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle>Price Range</CardTitle>
            <CardDescription>Per room, per night</CardDescription>
          </CardHeader>
          <CardContent>
            
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline">Cancel</Button>
            <Button>Deploy</Button>
          </CardFooter>
        </Card>
      </div>
      <div>
        ini list
      </div>
    </div>
  )
}

export default Hotel