
import React from 'react';
import { MdOutlineNoteAdd } from 'react-icons/md';

interface PurchaseAddProps {
  onClose: () => void;
}

const PurchaseAdd: React.FC<PurchaseAddProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="dark:text-[#FFFFFFCC] text-gray-700 bg-white rounded-md p-6 shadow-md w-full max-w-lg relative dark:bg-[#292e37]">
        <button
          onClick={onClose}
       className="absolute top-3 right-3 text-[#43b9b2] bg-[#43B9B21A] mr-4 mb-4 border border-[#43b9b2] px-2 rounded"
        >
          &times;
        </button>
        
        <h4 className="font-semibold text-lg  mb-4">Add Purchase</h4>
        
        <form className="space-y-4">
          {/* Party Name Field */}
          <div>
            <label htmlFor="partyName" className="block  font-medium">
              Party Name
            </label>
            <input
              type="text"
              id="partyName"
              placeholder="Enter party name"
              className="dark:bg-[#22262c] w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-[#43b9b2]"
              required
            />
          </div>

          {/* Vehicle Details Field */}
          <div>
            <label htmlFor="vehicleDetails" className="block font-medium">
              Vehicle Details
            </label>
            <input
              type="text"
              id="vehicleDetails"
              placeholder="Enter vehicle details"
              className="dark:bg-[#22262c] w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-[#43b9b2]"
              required
            />
          </div>

          {/* Amount Field */}
          <div>
            <label htmlFor="amount" className="block  font-medium">
              Amount
            </label>
            <input
              type="number"
              id="amount"
              placeholder="Enter amount"
              className="dark:bg-[#22262c] w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-[#43b9b2]"
              required
            />
          </div>

          {/* Fuel Type and Year Fields */}
          <div className="flex gap-4">
            <div className="flex-1">
              <label htmlFor="fuel" className="block font-medium">
                Fuel Type
              </label>
              <select
                id="fuel"
                className="dark:bg-[#22262c] w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-[#43b9b2]"
                required
              >
                <option value="">Select fuel type</option>
                <option value="gas">Gas</option>
                <option value="petrol">Petrol</option>
                <option value="diesel">Diesel</option>
              </select>
            </div>
            
            <div className="flex-1">
              <label htmlFor="year" className="block  font-medium">
                Year
              </label>
              <select
                id="year"
                className="dark:bg-[#22262c] w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-[#43b9b2]"
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
          <div>
            <label htmlFor="model" className="block  font-medium">
              Model
            </label>
            <input
              type="text"
              id="model"
              placeholder="Enter model"
              className="dark:bg-[#22262c] w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-[#43b9b2]"
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

export default PurchaseAdd;
