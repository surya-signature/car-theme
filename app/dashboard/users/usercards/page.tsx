"use client"
import { users } from '@/constants';
import React from 'react';

import { GoHome } from "react-icons/go";
import Header from '../../Header';
import { useTheme } from 'next-themes';

interface UsersProps {
  isSidebarOpen: boolean;
}

const Users: React.FC<UsersProps> = ({ isSidebarOpen }) => {
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark';

  const imageStyle: React.CSSProperties = {
    borderRadius: '50%',
    width: '70px',
    height: '70px',
    objectFit: 'cover',
    display: 'block',
    margin: '0 auto',
    boxShadow: isDarkMode ? '0px 0px 1px 4px #292e37' : '0px 0px 1px 4px white',
  };
  const containerStyle: React.CSSProperties = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '16px', // Space between cards
    padding: '16px',
    transition: 'margin-left 0.3s ease',
   
  };

  const cardStyle: React.CSSProperties = {
    backgroundImage: 'url(usercardbg.png)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    padding: '16px',
    flex: '1 1 calc(33.333% - 16px)', // Adjusted for correct card spacing
    minWidth: '250px', // Minimum width for cards
    maxWidth: 'calc(33.333% - 16px)', // Maximum width to ensure three cards in a row
    boxSizing: 'border-box',
    display: 'flex', // Use flexbox for card layout
    flexDirection: 'column', // Stack elements vertically
    alignItems: 'center', // Center align items horizontally
    justifyContent: 'center', // Center align items vertically
   
  };

  const imageWrapperStyle: React.CSSProperties = {
    display: 'inline-block',
    borderRadius: '50%',
    padding: '5px',
    position: 'relative',
    marginBottom: '8px',
    background: 'linear-gradient(253deg, var(--theme-default) 11.51%, rgba(67, 185, 178, 0) 82.07%)', // Background for the wrapper
  };


  const svgStyle: React.CSSProperties = {
    position: 'absolute', // Position the SVG absolutely within the wrapper
    bottom: '0px', // Adjust bottom positioning to ensure it's visible
    right: '0px', // Adjust right positioning
    width: '25px', // Adjust SVG size as needed
    height: '25px', // Adjust SVG size as needed
    borderRadius: '50%', // Round border for SVG
    // background: 'white', 
    background: isDarkMode ? '#292e37' : 'white',
    padding: '2px', // Padding for the background
  };

  
  // Header styles
  const headerStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '16px',
    flexWrap: 'wrap',
    gap: '16px', 
    transition: 'margin-left 0.3s ease',
 
  };

  return (
    <div className="dark:bg-[#22262c] bg-[#f4f5f8] dark:text-[#FFFFFFCC] p-1">
     <Header/>
      <div style={containerStyle}>
        {users.map((user, index) => (
          <div key={index} style={cardStyle} className='dark:bg-[#292e37]'>
            <div style={imageWrapperStyle} className='frame dark:text-[#FFFFFFCC]'>
              <img
                style={imageStyle}
                src={user.image}
                alt={`${user.name} photo`}
              />
              <img 
                src="/check-circle1.svg" 
                alt="Tick Icon" 
                style={svgStyle} className='dark:bg-[#22262c]'
              />
            </div>
            <h2 className='dark:text-[#FFFFFFCC] text-[18px] font-semibold text-[#3D3D47]'>{user.name}</h2>
            <h2 style={{ fontSize: '14px', fontWeight: '600', letterSpacing: '.6px', textAlign: 'center', color: '#767676' }}>{user.twitter}</h2>
            <p style={{ textAlign: 'center' }}>{user.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Users;

