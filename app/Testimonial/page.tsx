import { testimonial } from "@/constants"
import Image from "next/image"
import { FaTwitter } from "react-icons/fa";

const Testmoniol = () => {
  return (
    <div className="pt-[5rem]">

<div className=" min-h-screen flex items-center justify-center p-6">
      <div className="max-w-5xl w-full text-center">
        <h1 className="text-4xl font-semibold mb-8 text-gray-800">What Our Clients Say</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonial.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center"
            >
              <img
                className="w-[6rem] h-[6rem] rounded-full mb-4"
                src={testimonial.image}
                alt={`${testimonial.name} photo`}
              />
              <h2 className="text-lg font-semibold text-gray-700">{testimonial.name}</h2>
              <p className="text-sm text-gray-500 mb-4 flex"><FaTwitter className="mt-1 mr-2 text-[#1DA1F2]"/>{testimonial.twitter}</p>
              <p className="text-gray-600 italic">"{testimonial.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </div>

    </div>
  )
}

export default Testmoniol
