


"use client";
import { LuMenu } from "react-icons/lu";
import { HiOutlineMoon } from "react-icons/hi";
import { BiBell } from "react-icons/bi";
import { FiMail } from "react-icons/fi";
import { useState } from "react";
import { useTheme } from "next-themes"; // Import useTheme to manage theme state
import Image from "next/image";
import Link from "next/link";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { IoMoon, IoSettingsOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";

interface DashboardTopbarProps {
  onToggleSidebar: () => void;
}

const TopBar: React.FC<DashboardTopbarProps> = ({ onToggleSidebar }) => {
  const { theme, setTheme } = useTheme(); // Access the theme and setter from useTheme hook

  const toggleTheme = () => {
    // Toggle between light and dark theme
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("token-info");
    console.log("User logged out");
  };

  return (
    <nav className="flex items-center justify-between bg-white text-black p-4  dark:bg-[#292e37] ">
      <div className="flex items-center space-x-4">
        <div className="font-bold text-lg">
          <Link href="/">
            <Image src="/logo.svg" alt="Car Hub Logo" width={118} height={18} className="object-contain" />
          </Link>
        </div>

        <button onClick={onToggleSidebar} className="text-lg bg-[#43B9B21A] p-2 rounded-md dark:bg-black">
          <LuMenu style={{ fontSize: '24px', color: '#3D3D47' }} />
        </button>

        <div className="ml-8">
          <input
            type="text"
            placeholder="Search..."
            className="px-4 py-2 border rounded-lg dark:bg-black dark:border-[#292e37]"
          />
        </div>
      </div>

      <div className="flex items-center space-x-4 text-[#767676]">
        {/* Theme toggle button */}
        <button onClick={toggleTheme} className="dark:bg-black text-[22px] px-3 py-2 bg-[#43B9B21A] hover:text-[#43b9b2]">
          {theme === 'dark' ? <IoMoon className="text-white"/>: <HiOutlineMoon /> } {/* Icon changes based on theme */}
        </button>
        <button className="dark:bg-black text-[22px] px-3 py-2 bg-[#43B9B21A] hover:text-[#43b9b2]">
          <BiBell />
        </button>
        <button className="dark:bg-black text-[22px] px-3 py-2 bg-[#43B9B21A] hover:text-[#43b9b2]">
          <FiMail />
        </button>
      </div>

      <div className="relative dark:text-[#FFFFFFCC]">
        <button onClick={toggleDropdown} className="flex items-center space-x-2 cursor-pointer">
          <span className="font-semibold text-[#43b9b2]">John Doe</span>
        </button>

        {isDropdownOpen && (
          <div className="dark:bg-[#292e37] dark:border-black   absolute right-2 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg">
            <Link href="/profile" className="block px-4 py-2 dark:text-[#FFFFFFCC] text-gray-700   flex items-center">
              <FaRegUser className="mr-2 text-[#43b9b2] " /> Profile
            </Link>
            <Link href="/settings" className="block px-4 py-2 dark:text-[#FFFFFFCC] text-gray-700  flex items-center">
              <IoSettingsOutline className="mr-2 text-[#43b9b2]" /> Settings
            </Link>
            <button onClick={handleLogout} className=" dark:text-[#FFFFFFCC] block w-full text-left px-4 py-2 text-gray-700 flex items-center">
              <RiLogoutCircleRLine className="mr-2 text-[#43b9b2]" /> Logout
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default TopBar;

