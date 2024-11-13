
"use client";
import React, { useState } from "react";
import { BsCloudUpload } from "react-icons/bs";

// Modal Component
const AddProduct = ({ isOpen, closeModal }: { isOpen: boolean; closeModal: () => void }) => {
  const [formData, setFormData] = useState({
    productName: "",
    productDescription: "",
    productCategory: "",
    brand: "",
    icons: "",
    color: "",
    quality: "",
    image: null,
    size: "",
    date: "",
    price: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    setFormData({
      ...formData,
      image: file,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
    <>
      {isOpen && (
        <div className="dark:bg-[#22262c]  fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 h-auto">
          <div className="bg-white dark:bg-[#22262c]  w-full md:w-2/3 lg:w-1/2 p-4 pt-9 rounded-md shadow-lg relative">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6">
                {/* Left Column */}
                <div className="flex-1 space-y-6 border p-4 rounded-md dark:bg-[#292e37] text-gray-700 dark:text-[#FFFFFFCC]">
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Description</h3>
                    <div className="space-y-4 border p-4 rounded-md">
                      <div>
                        <label
                          htmlFor="productName"
                          className="block text-sm font-medium "
                        >
                          Product Name
                        </label>
                        <input
                          type="text"
                          id="productName"
                          name="productName"
                          value={formData.productName}
                          onChange={handleChange}
                          className="dark:bg-[#22262c] border mt-1 block w-full px-3 py-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#43b9b2] focus:border-[#43b9b2]"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="productDescription"
                          className="block text-sm font-medium "
                        >
                          Product Description
                        </label>
                        <textarea
                          id="productDescription"
                          name="productDescription"
                          value={formData.productDescription}
                          onChange={handleChange}
                          rows={1}
                          className="dark:bg-[#22262c] block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#43b9b2] focus:border-[#43b9b2]"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold  mb-4">Categories</h3>
                    <div className="space-y-4 border rounded-md p-4">
                      <div>
                        <label
                          htmlFor="productCategory"
                          className="block text-sm font-medium "
                        >
                          Product Category
                        </label>
                        <select
                          id="productCategory"
                          name="productCategory"
                          value={formData.productCategory}
                          onChange={handleChange}
                          className="dark:bg-[#22262c] border text-[12px] text-[#767676] mt-1 block w-full px-3 py-2  border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#43b9b2] focus:border-[#43b9b2]"
                        >
                          <option value="">Select Category</option>
                          <option value="electronics">Electronics</option>
                          <option value="clothing">Clothing</option>
                          <option value="home">Home</option>
                        </select>
                      </div>
                      <div className="flex space-x-4">
                        <div className="flex-1">
                          <label
                            htmlFor="brand"
                            className="block text-sm font-medium "
                          >
                            Brand Icons
                          </label>
                          <select
                            id="brand"
                            name="brand"
                            value={formData.brand}
                            onChange={handleChange}
                            className="dark:bg-[#22262c] border text-[12px] text-[#767676] mt-1 block w-full px-3 py-2  border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#43b9b2] focus:border-[#43b9b2]"
                          >
                            <option value="">Select Brand</option>
                            <option value="brandA">Brand A</option>
                            <option value="brandB">Brand B</option>
                            <option value="brandC">Brand C</option>
                          </select>
                        </div>
                        <div className="flex-1">
                          <label
                            htmlFor="color"
                            className="block text-sm font-medium "
                          >
                            Color
                          </label>
                          <select
                            id="color"
                            name="color"
                            value={formData.color}
                            onChange={handleChange}
                            className="dark:bg-[#22262c] border text-[12px] text-[#767676] mt-1 block w-full px-3 py-2  border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#43b9b2] focus:border-[#43b9b2]"
                          >
                            <option value="">Select Color</option>
                            <option value="red">Red</option>
                            <option value="blue">Blue</option>
                            <option value="green">Green</option>
                          </select>
                        </div>
                      </div>
                      <div>
                        <label
                          htmlFor="quality"
                          className="block text-sm font-medium "
                        >
                          Quality
                        </label>
                        <input
                          type="text"
                          id="quality"
                          name="quality"
                          value={formData.quality}
                          onChange={handleChange}
                          className="dark:bg-[#22262c] mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#43b9b2] focus:border-[#43b9b2]"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column */}
                <div className="flex-1 space-y-6 border rounded-md p-4 text-gray-700 dark:text-[#FFFFFFCC] dark:bg-[#292e37]">
                  <div>
                    <h3 className="text-lg font-semibold  mb-4">Product Image</h3>
                    <div className="border-dashed border-2 border-[#43b9b2] bg-[#43B9B21A] rounded-md p-8 flex justify-center items-center mb-4 min-w-[150px] min-h-[180px]">
                      <input
                        type="file"
                        id="productImage"
                        onChange={handleFileChange}
                        className="hidden dark:bg-[#22262c] "
                      />
                      <label
                        htmlFor="productImage"
                        className="cursor-pointer flex flex-col items-center"
                      >
                        <BsCloudUpload className="text-[#43b9b2] text-4xl mb-2" />
                        <span className="text-[#43b9b2]">
                          Drop files here or click to upload.
                        </span>
                      </label>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold  mb-4">Select Size</h3>
                    <div className="space-y-4 border rounded-md p-4">
                      <div className="flex space-x-4">
                        <div className="flex-1">
                          <label htmlFor="size" className="block text-sm font-medium ">
                            Size
                          </label>
                          <input
                            type="text"
                            id="size"
                            name="size"
                            value={formData.size}
                            onChange={handleChange}
                            className="dark:bg-[#22262c] mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#43b9b2] focus:border-[#43b9b2]"
                          />
                        </div>
                        <div className="flex-1">
                          <label htmlFor="date" className="block text-sm font-medium ">
                            Date
                          </label>
                          <input
                            type="date"
                            id="date"
                            name="date"
                            value={formData.date}
                            onChange={handleChange}
                            className="dark:bg-[#22262c] mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#43b9b2] focus:border-[#43b9b2]"
                          />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="price" className="block text-sm font-medium ">
                          Price
                        </label>
                        <input
                          type="number"
                          id="price"
                          name="price"
                          value={formData.price}
                          onChange={handleChange}
                          className="dark:bg-[#22262c] mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#43b9b2] focus:border-[#43b9b2]"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-end space-x-4">
                  <button
                  type="submit"
                  className="px-6 py-2 text-sm font-semibold text-white bg-[#43b9b2] rounded-md"
                >
                  Add
                </button>
                <button
                  type="button"
                  onClick={closeModal}
                  className="px-6 py-2 text-sm font-semibold text-white bg-[#c280d2] rounded-md"
                >
                  Cancel
                </button>
               
              </div>
                </div>
              </div>
            </form>
            <button
              className="absolute top-2 px-2 right-4 text-[#43b9b2] bg-[#43b9b21A] border border-[#43b9b2] rounded-md" 
              onClick={closeModal}
            >
              ×
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default AddProduct;
