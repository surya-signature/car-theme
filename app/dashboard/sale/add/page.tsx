
import React from 'react';
import { MdOutlineNoteAdd } from 'react-icons/md';

interface SalesAddProps {
  onClose: () => void;
}

const SalesAdd: React.FC<SalesAddProps> = ({ onClose }) => {

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
    <div className="dark:bg-[#292e37] bg-white rounded-md p-6 shadow-md w-full max-w-lg relative">
      <button
        onClick={onClose}
     className="absolute top-3 right-3 text-[#43b9b2] bg-[#43B9B21A] mr-4 mb-4 border border-[#43b9b2] px-2 rounded"
      >
        &times;
      </button>
      
    
        <form className="dark:bg-[#292e37] text-gray-700 dark:text-[#FFFFFFCC] mx-auto p-4 bg-white shadow-md rounded-md space-y-4">
        
            <label htmlFor="partyName" className="block  font-medium"style={{ fontSize: '15px' }}>
              Party Name
            </label>
            <input
              type="text"
              id="partyName"
              placeholder="Enter party name"
              className="dark:bg-[#22262c] w-full px-4 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:border-[#43b9b2]"
              required
            />
         

          {/* Vehicle Details Field */}
          
            <label htmlFor="vehicleDetails" className="block font-medium" style={{ fontSize: '15px' }}>
              Vehicle Details
            </label>
            <input
              type="text"
              id="vehicleDetails"
              placeholder="Enter vehicle details"
              className="dark:bg-[#22262c] w-full px-4 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:border-[#43b9b2]"
              required
            />
          

          {/* Amount Field */}
        
            <label htmlFor="amount" className="block  font-medium" style={{ fontSize: '15px' }}>
              Amount
            </label>
            <input
              type="number"
              id="amount"
              placeholder="Enter amount"
              className="dark:bg-[#22262c] w-full px-4 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:border-[#43b9b2]"
              required
            />
          

          {/* Inline Fields for Fuel and Year */}
          <div className="flex gap-4" >
            <div className="flex-1">
              <label htmlFor="fuel" className="block  font-medium" style={{ fontSize: '15px' }}>
                Fuel Type
              </label>
              <select
                id="fuel"
                className="dark:bg-[#22262c] w-full px-4 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:border-[#43b9b2]"
                required
              >
                <option value="">Select fuel type</option>
                <option value="gas">Gas</option>
                <option value="petrol">Petrol</option>
                <option value="diesel">Diesel</option>
              </select>
            </div>

            <div className="flex-1">
              <label htmlFor="year" className="block  font-medium " style={{ fontSize: '15px' }}>
                Year
              </label>
              <select
                id="year"
                className="dark:bg-[#22262c] w-full px-4 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:border-[#43b9b2]"
                required
              >
                <option value="">Select year</option>
                {[...Array(31)].map((_, i) => {
                  const year = new Date().getFullYear() - i;
                  return (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>

          {/* Model Field */}
          <div >
            <label htmlFor="model" className="block font-medium " style={{ fontSize: '15px' }}>
              Model
            </label>
            <input
              type="text"
              id="model"
              placeholder="Enter model"
              className="dark:bg-[#22262c] w-full px-4 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:border-[#43b9b2]"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="flex mt-4 px-4 py-2 bg-[#43B9B2] text-white rounded-md  hover:bg-[#43b9b21A] hover:text-[#43b9b2] hover:border-[#43b9b2] hover:border transition duration-300"
          >
            <MdOutlineNoteAdd className="mr-2 mt-1" /> Add
          </button>
        </form>
      </div>
   </div>
  );
};

export default SalesAdd;
