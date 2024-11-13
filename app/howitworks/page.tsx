import Image from 'next/image'
import React from 'react'

const Howitworks = () => {
  return (
    <div className="flex xl:flex-row flex-col gap-5 relative z-0 max-w-[1440px] mx-auto ">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="2xl:text-[70px] sm:text-[60px] text-[50px] font-extrabold ">How it works</h1>
        <div className='border-b-8 border-primary-blue w-20 '></div>
        <p className="text-[20px] text-black-100 font-light mt-5">
          We make great design work happen with our global community of professional designers. If you'd like to speak to a human, talk to one of our design experts.
          </p>
      </div>
      <div className="xl:flex-[1.5] flex justify-end items-end w-full xl:h-screen">
      <div className="relative xl:w-full w-[90%] xl:h-full h-[590px] z-0 mr-10">
      <Image src='/car-work.jpg' alt="car work"
          fill
          priority
          className="object-contain"/>
          </div>
          </div>
    </div>
  )
}

export default Howitworks

