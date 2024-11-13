
"use client";
// components/Header.tsx
import React from 'react';
import { usePathname } from 'next/navigation';
import { GoHome } from 'react-icons/go';
import './style.css'

const headerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '16px',
  // borderBottom: '1px solid #e5e5e5',
};

// Define titles for specific paths
const pageTitles: { [key: string]: string } = {
  '/dashboard': 'Dashboard',
  '/users': 'Users',
  '/dashboard/users/usercards': 'User Cards',
  '/dashboard/users/userlist': 'User Lists',
  '/dashboard/users/useredit': 'Edit User',
  '/dashboard/users/useradd': 'Add User',
  '/dashboard/products/product': 'Products',
  '/dashboard/products/productlist': 'Product List',
  '/dashboard/products/addproduct': 'Add Products',
  '/dashboard/purchase': 'Purchase List',
  '/dashboard/purchase/add': 'Add Purchase',
  '/dashboard/sale': 'Sales List',
  '/dashboard/sale/add': 'Add Sales',
  // Add more paths as needed
};

const Header = () => {
  const pathname = usePathname();

  // Check if exact path exists in pageTitles, otherwise default to 'Page'
  const title = pageTitles[pathname] || 'Page';

  // Build breadcrumbs by splitting pathname
  const breadcrumbs = pathname
    .split('/')
    .filter(Boolean)
    .map((crumb, index, arr) => {
      // Reconstruct each path segment
      const crumbPath = '/' + arr.slice(0, index + 1).join('/');
      // Use mapped title if exists, else default to the crumb itself
      return pageTitles[crumbPath] || crumb.charAt(0).toUpperCase() + crumb.slice(1);
    });

  return (
    <header style={headerStyle} >
      <div className="flex flex-col sm:flex-row w-full justify-between items-start sm:items-center">
        {/* Title on the left */}
        <h1 className="text-[21px] text-[#3D3D47] dark:text-[#FFFFFFCC] font-semibold">
          {title}
        </h1>

        {/* Breadcrumbs on the right */}
        <div className="path flex items-center gap-2 text-sm font-semibold text-[#43b9b2] mt-1 sm:mt-0 sm:justify-end">
          <div className="text-lg bg-[#43B9B21A] p-2 rounded">
            <GoHome />
          </div>
          {breadcrumbs.map((crumb, index) => (
            <React.Fragment key={index}>
              <span>/</span>
              <span>{crumb}</span>
            </React.Fragment>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
