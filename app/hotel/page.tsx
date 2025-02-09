'use client'

import React, { Suspense } from 'react'
import HotelPage from './hotel-content'

const Hotel = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HotelPage />
    </Suspense>
  )
}

export default Hotel
