import { Navbar } from '@/components'
import Link from 'next/link'
import React from 'react'

const Signup = () => {
  return (
   
    <div className="flex justify-center items-center min-h-screen m-6 dark:bg-[#292e37]">
      <form
        className="w-[500px] mx-auto p-6 border border-gray-300 rounded-md shadow-lg"
       
      >
        <h2 className="text-2xl text-center text-primary-blue mb-6 font-semibold">Create your Account</h2>

        <div className="mb-4 flex items-center">
          <label htmlFor="name" className="mr-2">Name:</label>
          <input
            type="text"
            id="name"
            placeholder="Enter name"
         
            className="dark:bg-[#22262c] flex-1 p-2 ml-[1.9rem] border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-blue"
          />
        </div>

        <div className="mb-4 flex items-center">
          <label htmlFor="email" className="mr-2">Email:</label>
          <input
            type="email"
            id="email"
            placeholder="Enter email"
            
            className="dark:bg-[#22262c] flex-1 p-2 ml-[2.09rem] border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-blue"
          />
        </div>

        <div className="mb-4 flex items-center">
          <label htmlFor="phone" className="mr-2">Phone:</label>
          <input
            type="tel"
            id="phone"
            placeholder="Enter your number"
            
            className="dark:bg-[#22262c] flex-1 p-2 ml-6 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-blue"
          />
        </div>

        <div className="mb-4 flex items-center">
          <label htmlFor="inputPassword5" className="mr-2">Password:</label>
          <input
            type="password"
            id="inputPassword5"
            placeholder="Enter password"
            
            className="dark:bg-[#22262c] flex-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-blue"
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 text-white bg-primary-blue rounded-md hover:bg-primary-blue focus:outline-none"
        >
          Create
        </button>

        <p className="text-center mt-4">
          Already have an account?
          <Link href="/Signin" className="text-primary-blue hover:underline ml-1">
            Login
          </Link>
        </p>
      </form>
    </div>
   
  )
}

export default Signup
