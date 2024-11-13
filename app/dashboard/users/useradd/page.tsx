
import React from 'react';
import { BsCloudUpload } from 'react-icons/bs';

interface UserAddProps {
  onClose: () => void;
}

const UserAdd: React.FC<UserAddProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-[#22262c] bg-opacity-50 flex items-center justify-center">
      <div className="bg-white dark:bg-[#22262c] rounded-lg shadow-lg w-full max-w-3xl p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-[#43b9b2] bg-[#43B9B21A] mr-4 mb-4 border border-[#43b9b2] px-2 rounded"
        >
          &times;
        </button>
        <form className="w-full grid grid-cols-1 lg:grid-cols-3 gap-6 text-sm mt-2">
          {/* First Column - 1/3 width on large screens */}
          <div className="lg:col-span-1 bg-white shadow-md rounded-md p-4 dark:bg-[#292e37] text-gray-700 dark:text-[#FFFFFFCC]">
            <label htmlFor="name" className="block font-medium">Name</label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              className="dark:bg-[#22262c] w-full px-4 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:border-[#43b9b2]"
              required
            />

            {/* Place and Zip Code in a single line */}
            <div className="flex gap-4">
              <div className="flex-1">
                <label htmlFor="place" className=" block font-medium ">Place</label>
                <input
                  type="text"
                  id="place"
                  placeholder="Enter place"
                  className="dark:bg-[#22262c] w-full px-4 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:border-[#43b9b2]"
                  required
                />
              </div>
              <div className="flex-1">
                <label htmlFor="zipCode" className=" block font-medium ">Zip Code</label>
                <input
                  type="text"
                  id="zipCode"
                  placeholder="Enter zip code"
                  className="dark:bg-[#22262c] w-full px-4 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:border-[#43b9b2]"
                  required
                />
              </div>
            </div>

            <label htmlFor="state" className="block font-medium">State</label>
            <input
              type="text"
              id="state"
              placeholder="Enter state"
              className="dark:bg-[#22262c] w-full px-4 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:border-[#43b9b2]"
              required
            />

            <label htmlFor="district" className="  block font-medium">District</label>
            <input
              type="text"
              id="district"
              placeholder="Enter district"
              className="dark:bg-[#22262c] w-full px-4 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:border-[#43b9b2]"
              required
            />
          </div>

          {/* Second Column - 2/3 width on large screens */}
          <div className="lg:col-span-2 bg-white shadow-md rounded-md p-4 dark:bg-[#292e37] text-gray-700 dark:text-[#FFFFFFCC]">
            <label htmlFor="mobile" className=" block font-medium ">Mobile</label>
            <input
              type="tel"
              id="mobile"
              placeholder="Enter mobile number"
              className="dark:bg-[#22262c] w-full px-4 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:border-[#43b9b2]"
              required
            />

            <label htmlFor="address" className=" block  font-medium">Address</label>
            <textarea
              id="address"
              placeholder="Enter address"
              className="dark:bg-[#22262c] w-full px-4 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:border-[#43b9b2]"
              rows={3}
              required
            />

            <label htmlFor="aadhaar" className="block  font-medium">Aadhaar</label>
            <div className="dark:bg-[#22262c] border-dashed border-2 border-teal-500 bg-teal-50 rounded-md p-8 flex justify-center items-center mb-4">
              <input
                type="file"
                id="aadhaarImage"
                className="hidden"
              />
              <label htmlFor="aadhaarImage" className="cursor-pointer flex flex-col items-center">
                <BsCloudUpload className="text-teal-500 text-xl mb-2 cursor-pointer" />
                <span className="text-teal-500">Drop files here or click to upload.</span>
              </label>
            </div>

            <button
              type="submit"
              className="mt-4 px-4 py-2 bg-[#43B9B2] text-white rounded-md hover:bg-[#43b9b21A] hover:text-[#43b9b2] hover:border-[#43b9b2] hover:border transition duration-300"
            >
              Add Details
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserAdd;
