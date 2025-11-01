import React from 'react'
import HeroSlider from '../Components/HeroSlider'
import Booking from '../Components/Booking'
import TourSpots from '../Components/TourSpots'

export default function HomePage() {
  return (
    <div>
        <HeroSlider/>
        <TourSpots/>
        <Booking/>
    </div>
  )
}