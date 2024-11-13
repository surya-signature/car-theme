import { Footer, Navbar } from '@/components'

import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <div className='p-16 pt-[7rem]'>
    <div className="flex flex-col md:flex-row items-center justify-between  mb-0">
     
      <div className="md:w-1/2 pr-6 mt-4 md:mt-0">
      <h1 className="text-2xl md:text-4xl font-bold text-start">About Us</h1>
      <p className="text-base text-start mt-6">
      Part of CarTrade Tech, CarWale's mission is to bring delight in car buying, we offer a bouquet of reliable tools and services to help car consumers decide on buying the right car, at the right price and from the right partner.
      Part of CarTrade Tech, CarWale's mission is to bring delight in car buying, we offer a bouquet of reliable tools and services to help car consumers decide on buying the right car, at the right price and from the right partner.
      Part of CarTrade Tech, CarWale's mission is to bring delight in car buying, we offer a bouquet of reliable tools and services to help car consumers decide on buying the right car, at the right price and from the right partner.
        </p>
      </div>
      <div className="md:w-1/2">
        <img
          src="/about.avif" 
          alt="Descriptive Alt Text"
          className="w-full h-[28rem] object-cover rounded-lg shadow-lg" 
        />
      </div>
    </div>
    <div className="flex flex-col md:flex-row items-center justify-between p-6 mt-8 mb-0">
     
     
     <div className="md:w-1/2">
       <img
         src="/md.jpg" 
         alt="Descriptive Alt Text"
         className="w-full h-[28rem] object-cover rounded-lg shadow-lg" 
       />
     </div>
     <div className="md:w-1/2 pl-6 mt-4 md:mt-0">
     <h1 className="text-2xl md:text-4xl font-bold text-start">MD</h1>
     <p className="text-base text-start mt-6">
     Mr. Unsoo Kim is the Managing Director of Hyundai Motor India Limited. He joined Hyundai Motor Company, South Korea in 1991.
His experience with Hyundai spans over a period of 30 years, wherein he has worked on different assignments at Global Locations.
He has a diverse experience across multiple markets in Business Planning, Strategy and Operations. Prior to his leadership role at Hyundai Motor India, Mr. Kim was the Executive Vice President of Global Operations at Hyundai Motor Company.
In his previous stints with Hyundai Motor India, Mr. Unsoo Kim has served for a period of four years, including his tenure as the Executive Director of Corporate Planning Division from 2014 ~ 2015.
       </p>
     </div>
   </div>
    
    </div>
  )
}

export default About
