

import CustomButton from '@/components/CustomButton';
import Map from '@/components/Map';
import Image from 'next/image';
import React from 'react';

const Contact = () => {
  return (
    <div className='pt-16'>
     
      <Image src='/contact-car.avif' width={1500} height={300} alt='contact'/>
      <div className="flex flex-col items-center">
        <div className="flex-1 pt-30 padding-x">
          <h1 className="2xl:text-[70px] sm:text-[55px] text-[50px] font-extrabold text-center">Contact Us</h1>
          <p className='text-center text-primary-blue text-[22px] leading-[26px] font-bold capitalize pb-8'>Call 1-800-331-4331</p>
          <p className='text-center'>Monday - Friday: 8:00 a.m. - 8:00 p.m. ET</p>
          <p className='text-center'>Saturday: 9:00 a.m. - 7:00 p.m. ET</p>
          <div className='w-full flex-center gap-5 mt-10'>
            <CustomButton title="Contact Us" btnType='button' containerStyles='bg-primary-blue rounded-full text-white' />
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between w-full padding-x pt-20">
          <div className="flex-1 mr-4">
            {/* <h1 className="2xl:text-[40px] sm:text-[30px] text-[20px] font-bold text-start">How Can We Help?</h1> */}
            <div className='flex flex-col'>
              <Map />
            </div>
          </div>

          <div className="flex-1 ml-4">
            <h1 className="text-2xl font-bold mb-4">How Can We Help?</h1>
            <form className="bg-white p-6 rounded-lg shadow-md">
              <div className='flex flex-col mb-4'>
                <label className="block mb-2">First Name</label>
                <input
                  type="text"
                  className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-primary-blue"
                />
              </div>
              <div className='flex flex-col mb-4'>
                <label className="block mb-2">Last Name</label>
                <input
                  type="text"
                  className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-primary-blue"
                />
              </div>
              <div className='flex flex-col mb-4'>
                <label className="block mb-2">Email</label>
                <input
                  type="email"
                  className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-primary-blue"
                />
              </div>
              <div className='flex flex-col mb-4'>
                <label className="block mb-2">Phone</label>
                <input
                  type="tel"
                  className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-primary-blue"
                />
              </div>
              <div className='flex flex-col mb-4'>
                <label className="block mb-2">Comments</label>
                <textarea
                  className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-primary-blue"
                  rows="4"
                />
              </div>
              <div className='flex justify-end'>
                <CustomButton title="Send Message" btnType='button' containerStyles='bg-primary-blue rounded-full text-white mt-4' />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;