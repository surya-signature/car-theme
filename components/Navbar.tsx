
"use client"

import Image from "next/image"
import Link from "next/link"
import CustomButton from "./CustomButton"
import { useState } from "react"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false); 
  };

  return (
    <nav className="w-full absolute z-10">
      <div className="container mx-auto flex justify-between items-center max-w-[1440px] sm:px-16 px-6 py-4">
        
        {/* Logo */}
        <div>
          <Link href="/">
            <Image src="/logo.svg" alt="Car Hub Logo" width={118} height={18} className="object-contain" />
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-6">
          <button className="custom-btn text-primary-blue rounded-full bg-white min-w-[130px]">
            <Link href="/About">About Us</Link>
          </button>
          <button className="custom-btn text-primary-blue rounded-full bg-white min-w-[130px]">
            <Link href="/contact">Contact Us</Link>
          </button>
          <Link href="/Signin">
            <CustomButton title="Sign In" btnType="button" containerStyles="text-primary-blue rounded-full bg-white min-w-[130px]" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Full-Width Mobile Navigation */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 z-20 flex justify-center items-center">
          <div className="bg-white w-full h-full flex flex-col justify-center items-center space-y-8 p-6 text-lg">
            <Link href="/" onClick={handleLinkClick}>
              <Image src="/logo.svg" alt="Car Hub Logo" width={118} height={18} className="mb-6" />
            </Link>
            <Link href="/About" onClick={handleLinkClick} className="text-black hover:text-primary-blue">
              About Us
            </Link>
            <Link href="/contact" onClick={handleLinkClick} className="text-black hover:text-primary-blue">
              Contact Us
            </Link>
            <Link href="/Signin" onClick={handleLinkClick} className="text-black hover:text-primary-blue">
              Sign In
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar;
