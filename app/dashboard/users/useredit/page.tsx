
import React from 'react';
import Header from '../../Header';

interface UserEditModalProps {
  isOpen: boolean;
  closeModal: () => void;
}

const UserEditModal: React.FC<UserEditModalProps> = ({ isOpen, closeModal }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#22262c] bg-opacity-50 z-50">
      <div className="dark:bg-[#22262c] bg-white p-6 rounded-lg w-full max-w-4xl shadow-lg overflow-auto max-h-screen relative">
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 text-[#43b9b2] font-bold text-xl"
        >
          ×
        </button>
        <div className=' dark:bg-[#22262c] bg-[#f9fafc] p-1' >
       
          <div className="flex flex-col md:flex-row p-4 gap-6">
            {/* Profile Column */}
            <div className="dark:bg-[#292e37] text-gray-700 dark:text-[#FFFFFFCC] w-full md:w-1/3 p-4 border-gray-200 bg-white rounded-lg shadow-md">
              <h2 className="font-semibold mb-4 pt-1 text-[18px] text-[#767676] dark:text-[#FFFFFFCC]" >My Profile</h2>
              <div className="flex items-center mb-4" style={{ marginTop: '2rem' }}>
                <img src="test1.jpeg" alt="Profile" className="rounded-full mr-3" style={{ width: '4rem', height: '4rem' }} />
                <span className="text-lg font-semibold" style={{ marginLeft: '1rem', fontSize: '17.12px', color: '#3D3D47' }}>John Doe</span>
              </div>
              <div className="space-y-4 dark:text-[#FFFFFFCC] text-gray-700">
                <div>
                  <label htmlFor="bio" className="block text-sm font-medium mb-1">Bio</label>
                  <textarea id="bio" placeholder="Short bio about yourself" className="dark:bg-[#22262c] dark:border-[#22262c] w-full p-2 border border-gray-300 rounded" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium  mb-1">Email</label>
                  <input type="email" id="email" placeholder="Email" className="dark:bg-[#22262c] dark:border-[#22262c] w-full p-2 border border-gray-300 rounded" />
                </div>
                <div>
                  <label htmlFor="password" className="block text-sm font-medium  mb-1">Password</label>
                  <input type="password" id="password" placeholder="Password" className="dark:bg-[#22262c] dark:border-[#22262c] w-full p-2 border border-gray-300 rounded" />
                </div>
                <div>
                  <label htmlFor="website" className="block text-sm font-medium  mb-1">Website</label>
                  <input type="url" id="website" placeholder="Website" className="dark:bg-[#22262c] dark:border-[#22262c] w-full p-2 border border-gray-300 rounded" />
                </div>
                <button className="mt-4 px-4 py-2 bg-[#43B9B2] text-white rounded-md hover:bg-[#43b9b21A] hover:text-[#43b9b2] hover:border-[#43b9b2] hover:border transition duration-300">Save</button>
              </div>
            </div>
            {/* Edit Profile Column */}
            <div className="dark:bg-[#292e37] dark:text-[#FFFFFFCC] w-full md:w-2/3 p-4 border-gray-200 bg-white rounded-lg shadow-md text-gray-700">
              <h2 className="text-lg font-semibold mb-4 pt-1 text-[18px] text-[#767676] dark:text-[#FFFFFFCC]">Edit Profile</h2>
              <div className="flex flex-col sm:flex-row gap-4 mb-4">
                <div className="flex-1">
                  <label className="block text-sm font-medium mb-1" htmlFor="company">Company</label>
                  <input type="text" id="company" className="dark:bg-[#22262c] dark:border-[#22262c] w-full border border-gray-300 p-2 rounded" />
                </div>
                <div className="flex-1">
                  <label className="block text-sm font-medium mb-1" htmlFor="username">Username</label>
                  <input type="text" id="username" className="dark:bg-[#22262c] dark:border-[#22262c] w-full border border-gray-300 p-2 rounded" />
                </div>
                <div className="flex-1">
                  <label className="block text-sm font-medium mb-1" htmlFor="email">Email</label>
                  <input type="email" id="email" className=" dark:bg-[#22262c] dark:border-[#22262c] w-full border border-gray-300 p-2 rounded" />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium mb-1" htmlFor="first-name">First Name</label>
                  <input type="text" id="first-name" className="dark:bg-[#22262c] dark:border-[#22262c] w-full border border-gray-300 p-2 rounded" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1" htmlFor="second-name">Second Name</label>
                  <input type="text" id="second-name" className="dark:bg-[#22262c] dark:border-[#22262c] w-full border border-gray-300 p-2 rounded" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="address">Address</label>
                <input type="text" id="address" className="dark:bg-[#22262c] dark:border-[#22262c] w-full border border-gray-300 p-2 rounded" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium mb-1" htmlFor="city">City</label>
                  <input type="text" id="city" className="dark:bg-[#22262c] dark:border-[#22262c] w-full border border-gray-300 p-2 rounded" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1" htmlFor="postal-code">Postal Code</label>
                  <input type="text" id="postal-code" className="dark:bg-[#22262c] dark:border-[#22262c] w-full border border-gray-300 p-2 rounded" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1" htmlFor="country">Country</label>
                  <input type="text" id="country" className="dark:bg-[#22262c] dark:border-[#22262c] w-full border border-gray-300 p-2 rounded" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="message">About me</label>
                <textarea id="message" className="dark:bg-[#22262c] dark:border-[#22262c] w-full border border-gray-300 p-2 rounded" rows={3} />
              </div>
              <div className="flex justify-end mt-4">
                <button className="mt-4 px-4 py-2 bg-[#43B9B2] text-white rounded-md hover:bg-[#43b9b21A] hover:text-[#43b9b2] hover:border-[#43b9b2] hover:border transition duration-300">Update Profile</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserEditModal;

