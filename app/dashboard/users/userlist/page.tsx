


"use client"

import React, { useState } from 'react';
import Header from '../../Header';
import { Button } from 'antd';
import dynamic from 'next/dynamic';
const UserAdd = dynamic(() => import('../useradd/page'), {ssr: false});
const UserEdit = dynamic(() => import('../useredit/page'), {ssr: false});

const ResponsiveTable: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  const [isModalOpens, setIsModalOpens] = useState(false);

  const openModal = () => setIsModalOpens(true);
  const closeModal = () => setIsModalOpens(false);

  const data = [
    { id: 1, image: '/test1.jpeg', name: 'John Doe', phone: '123-456-7890', district: 'Malappuram', state: 'Kerala', address: '123 Main St' },
    { id: 2, image: '/path/to/image2.jpg', name: 'Jane Smith', phone: '987-654-3210', district: 'Malappuram', state: 'Kerala', address: '456 Oak Ave' },
     { id: 3, image: '/test1.jpeg', name: 'John Doe', phone: '123-456-7890', district: 'Malappuram', state: 'Kerala', address: '123 Main St' },
     { id: 4, image: '/test1.jpeg', name: 'John Doe', phone: '123-456-7890', district: 'Malappuram', state: 'Kerala', address: '123 Main St' },
   ];

  return (
    <div className='dark:bg-[#292e37]'>
      <Header/>
      <div className="flex justify-between items-center p-4 space-x-4 ">
  <input
    type="text"
    placeholder="Search users..."
    className="border dark:bg-[#22262c] dark:border-[#22262c] border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:border-[#43b9b2] w-full sm:w-64"
  />

  <button onClick={toggleModal} className="bg-[#43B9B21A] text-[#43b9b2] px-4 py-2 rounded-md border border-[#43b9b2]">Create</button>
  {isModalOpen && <UserAdd onClose={toggleModal} />}
</div>

    <div className="max-w-full sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl mx-auto p-4">
      <div className="overflow-x-auto w-full">
        <table className="min-w-full bg-white border border-gray-200 dark:bg-[#292e37] ">
          <thead>
            <tr className="dark:bg-[#292e37] dark:text-[#FFFFFFCC] bg-gray-200 text-gray-600 text-left text-sm leading-normal border-gray-200 border-b">
              <th className="py-3 px-6 font-semibold">SL No</th>
              <th className="py-3 px-6 font-semibold">Image</th>
              <th className="py-3 px-6 font-semibold">Name</th>
              <th className="py-3 px-6 font-semibold">Phone</th>
              <th className="py-3 px-6 font-semibold">State</th>
              <th className="py-3 px-6 font-semibold">District</th>
              <th className="py-3 px-6 font-semibold">Address</th>
              <th className="py-3 px-6 font-semibold">Delete</th>
            </tr>
          </thead>
          <tbody className="text-gray-700 text-sm dark:text-[#FFFFFFCC]">
            {data.map((item, index) => (
              <tr key={index} className="border-b border-gray-200">
                <td className="py-3 px-6">{index+1}</td>
                <td className="py-3 px-6">
                  <img src={item.image} alt="User" className="h-10 w-10 rounded-full" />
                </td>
                <td className="py-3 px-6">{item.name}</td>
                <td className="py-3 px-6">{item.state}</td>
                <td className="py-3 px-6">{item.phone}</td>
                <td className="py-3 px-6">{item.district}</td>
                <td className="py-3 px-6">{item.address}</td>
                <td className="py-3 px-6 flex text-white">
                <button  onClick={openModal} className=" bg-[#43b9b2]" style={{
                      borderRadius: '5px',
                      padding: '4px 8px',
                      marginRight: '8px',
                    }}>Edit</button>
                     <UserEdit isOpen={isModalOpens} closeModal={closeModal} />
                  <button className="bg-[#c42a02] "style={{
                      
                      borderRadius: '5px',
                      padding: '4px 8px',
                      
                    }}>Delete</button>
                 
                  
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </div>
  );
};

export default ResponsiveTable;
