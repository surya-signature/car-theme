
"use client";

import { Navbar } from "@/components";
import Link from "next/link";

const Signin = () => {
  return (
  
   
    <div className="flex justify-center items-center min-h-screen m-6 dark:bg-[#292e37]">
     
      <form className="dark:bg-[#292e37] w-[500px] mx-auto p-6 bg-white border border-gray-300 rounded-md shadow-lg">
        <h2 className="text-2xl text-center text-primary-blue mb-6 font-bold">Login</h2>
        
        <div className="mb-4 flex items-center">
          <label htmlFor="name" className="mr-2">Username:</label>
          <input
            type="text"
            id="name"
            placeholder="Enter username"
            className="dark:bg-[#22262c] flex-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-blue"
          />
        </div>

        <div className="mb-4 flex items-center">
          <label htmlFor="inputPassword5" className="mr-2">Password:</label>
          <input
            type="password"
            id="inputPassword5"
            placeholder="Enter password"
            aria-describedby="passwordHelpBlock"
            className="dark:bg-[#22262c] flex-1 p-2 ml-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-blue"
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 text-white bg-primary-blue rounded-md hover:bg-primary-blue focus:outline-none"
        >
          Login
        </button>

        <p className="text-center mt-4">
          Don't have an account?
          <Link href="/Signup" className="text-primary-blue hover:underline ml-1">
            Signup
          </Link>
        </p>
      </form>
    </div>
   
  )
}

export default Signin
