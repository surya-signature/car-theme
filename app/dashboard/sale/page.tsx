"use client"
import React, { useState } from 'react';
import Header from '../Header';
import { FaPrint } from 'react-icons/fa';
import dynamic from 'next/dynamic';

const SalesAdd = dynamic(() => import('./add/page'), {ssr: false});

const ResponsiveTable: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  
  const data = [
    { id: 1,customer: 'John Doe',vehicle:'KL59AG9693-hundai-eon-2015',insurance:'yes',tax:'yes',payment:'cash',amount:'250000',initial:'10000',finance:'0' },
    { id: 2 ,customer: 'John Doe',vehicle:'KL59AG9693-hundai-eon-2015',insurance:'yes',tax:'yes',payment:'cash',amount:'250000',initial:'10000',finance:'0'  },
    { id: 1,customer: 'John Doe',vehicle:'KL59AG9693-hundai-eon-2015',insurance:'yes',tax:'yes',payment:'cash',amount:'250000',initial:'10000',finance:'0' },       
    { id: 2 ,customer: 'John Doe',vehicle:'KL59AG9693-hundai-eon-2015',insurance:'yes',tax:'yes',payment:'cash',amount:'250000',initial:'10000',finance:'0'  },
    ];

  return (
    <div className='dark:bg-[#292e37]'>
   <Header/>
   <div className="flex justify-between items-center p-4 space-x-4">
  <input
    type="text"
    placeholder="Search users..."
    className="dark:bg-[#22262c]  border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:border-blue-500 w-full sm:w-64"
  />

  <button  onClick={openModal} className="bg-[#43B9B21A] text-[#43b9b2] px-4 py-2 rounded-md border border-[#43b9b2]">Create</button>
  {/* <SalesAdd isOpen={isModalOpen} onClose={handleCloseModal} /> */}
  {isModalOpen && <SalesAdd onClose={closeModal} />}
</div>
    <div className="max-w-full sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl mx-auto p-4">
      <div className="overflow-x-auto w-full">
        <table className="dark:bg-[#292e37] min-w-full bg-white border border-gray-200">
          <thead>
            <tr className="dark:bg-[#292e37] dark:text-[#FFFFFFCC] border-b bg-gray-200 text-gray-600 text-left text-sm leading-normal">
              <th className="py-3 px-6 font-semibold">SL No</th>
              <th className="py-3 px-6 font-semibold">Customer</th>
              <th className="py-3 px-6 font-semibold">Vehicle</th>
              <th className="py-3 px-6 font-semibold">Insurance</th>
              <th className="py-3 px-6 font-semibold">Tax</th>
              <th className="py-3 px-6 font-semibold">Payment Mode</th>
              <th className="py-3 px-6 font-semibold">Amount</th>
              <th className="py-3 px-6 font-semibold">Initial Amount</th>
              <th className="py-3 px-6 font-semibold">Finance Amount</th>
              <th className="py-3 px-6 font-semibold">Action</th>
              <th className="py-3 px-6 font-semibold">Sales Agreement</th>
            </tr>
          </thead>
          <tbody className="text-gray-700 text-sm dark:text-[#FFFFFFCC]">
            {data.map((item, index) => (
              <tr key={index} className="border-b border-gray-200">
                <td className="py-3 px-6">{index+1}</td>
                
                <td className="py-3 px-6">{item.customer}</td>
                <td className="py-3 px-6">{item.vehicle}</td>
                <td className="py-3 px-6">{item.insurance}</td>
                <td className="py-3 px-6">{item.tax}</td>
                <td className="py-3 px-6">{item.payment}</td>
                <td className="py-3 px-6">{item.amount}</td>
                <td className="py-3 px-6">{item.initial}</td>
                <td className="py-3 px-6">{item.finance}</td>
                <td className="py-3 px-6"><FaPrint style={{ color: '#43b9b2' }}/></td>
                <td className="py-3 px-6"><FaPrint style={{ color: '#43b9b2' }}/></td>
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