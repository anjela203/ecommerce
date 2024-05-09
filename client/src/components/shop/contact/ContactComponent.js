import React from 'react'
import './contact.css';
import { FaHome, FaPhoneAlt } from "react-icons/fa";
import { MdEmail, MdOutlineSupportAgent } from "react-icons/md";

function ContactComponent() {
  return (
    <div className="contact__wrapper">
        <h1>Contact Us</h1>
        <div className="m-4 mt-10 grid grid-cols-1 md:grid-cols-4 row-gap-4 col-gap-4">
        <div className="flex flex-col justify-center items-center col-span-1 bg-white p-6 shadow-lg cursor-pointer transition-all duration-300 ease-in border-b-4 border-opacity-0 border-indigo-200">
          <div className="bg-indigo-200 p-3 cursor-pointer rounded-full">
          <FaPhoneAlt className='text-2xl' />
          </div>
          <div className="text-2xl font-semibold">
            Phone
          </div>
          <div className="text-lg font-medium text-gray-600 mt-2">+1 19192 1212</div>
         
        </div>
        <div className="flex flex-col justify-center items-center col-span-1 bg-white p-6 shadow-lg cursor-pointer transition-all duration-300 ease-in border-b-4 border-opacity-0 border-indigo-200">
          <div className="bg-orange-200 p-3 cursor-pointer rounded-full">
          <MdEmail  className='text-2xl' />
          </div>
          <div className="text-2xl font-semibold">
            Email
          </div>
          <div className="text-lg font-medium text-gray-600 mt-2">shopme@support.com</div>
         
        </div>

        <div className="flex flex-col justify-center items-center col-span-1 bg-white p-6 shadow-lg cursor-pointer transition-all duration-300 ease-in border-b-4 border-opacity-0 border-indigo-200">
          <div className="bg-purple-200 p-3 cursor-pointer rounded-full">
          <FaHome  className='text-2xl' />
          </div>
          <div className="text-2xl font-semibold">
            Address
          </div>
          <div className="text-lg font-medium text-gray-600 mt-2">N-1, Block D, New Street LA 111111</div>
         
        </div>

        <div className="flex flex-col justify-center items-center col-span-1 bg-white p-6 shadow-lg cursor-pointer transition-all duration-300 ease-in border-b-4 border-opacity-0 border-indigo-200">
          <div className="bg-red-200 p-3 cursor-pointer rounded-full">
          <MdOutlineSupportAgent   className='text-2xl' />
          </div>
          <div className="text-2xl font-semibold">
            Working Hours
          </div>
          <div className="text-lg font-medium text-gray-600 mt-2">Mon-Fri (9am to 8pm)</div>
         
        </div>
      
      </div>
    </div>
  )
}

export default ContactComponent