"use client"
import React, { useState } from 'react';
import Header from '../Header';
import { FaPrint } from 'react-icons/fa';
import dynamic from 'next/dynamic';

const PurchaseAdd = dynamic(() => import('./add/page'), {ssr: false});
const ResponsiveTable: React.FC = () => {
  
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const data = [
    { id: 1,customer: 'John Doe',vehicle:'KL59AG9693-hundai-eon-2015',amount:'250000',Date:'11-10-2022' },
     { id: 2 ,customer: 'John Doe',vehicle:'KL59AG9693-hundai-eon-2015',amount:'250000',Date:'12-12-2022'  },
   
   { id: 1,customer: 'John Doe',vehicle:'KL59AG9693-hundai-eon-2015',amount:'250000',Date:'11-10-2022' },
      { id: 2 ,customer: 'John Doe',vehicle:'KL59AG9693-hundai-eon-2015',amount:'250000',Date:'12-12-2022'  },
    ];

  return (
    <div className='dark:bg-[#292e37]'>
      <Header/>
      <div className="flex justify-between items-center p-4 space-x-4">
  <input
    type="text"
    placeholder="Search users..."
    className="dark:bg-[#22262c]  border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:border-[#43b9b2] w-full sm:w-64"
  />

  <button onClick={openModal} className="bg-[#43B9B21A] text-[#43b9b2] px-4 py-2 rounded-md border border-[#43b9b2]">Create</button>
  {isModalOpen && <PurchaseAdd onClose={closeModal} />}
</div>
    <div className="max-w-full sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl mx-auto p-4">
      <div className="overflow-x-auto w-full">
        <table className="min-w-full bg-white border border-gray-200 dark:bg-[#292e37]">
          <thead>
            <tr className="dark:text-[#FFFFFFCC] border border-b bg-gray-200 text-gray-600 text-left text-sm leading-normal dark:bg-[#292e37]">
              <th className="py-3 px-6 font-semibold">SL No</th>
              <th className="py-3 px-6 font-semibold">Party Name</th>
              <th className="py-3 px-6 font-semibold">Vehicle Details</th>
              <th className="py-3 px-6 font-semibold">Amount</th>
              <th className="py-3 px-6 font-semibold">Added Date</th>
             
              <th className="py-3 px-6 font-semibold"></th>
            </tr>
          </thead>
          <tbody className="text-gray-700 text-sm dark:text-[#FFFFFFCC]">
            {data.map((item, index) => (
              <tr key={index} className="border-b border-gray-200hover:bg-gray-100">
                <td className="py-3 px-6">{index+1}</td>
                
                <td className="py-3 px-6">{item.customer}</td>
                <td className="py-3 px-6">{item.vehicle}</td>
                <td className="py-3 px-6">{item.amount}</td>
                <td className="py-3 px-6">{item.Date}</td>
                <td className="py-3 px-6 flex text-white">
                <button className=" bg-[#43b9b2]" style={{
                      borderRadius: '5px',
                      padding: '4px 8px',
                      marginRight: '8px',
                    }}>Edit</button>
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