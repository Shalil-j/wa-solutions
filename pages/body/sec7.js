import React from "react";
import { AiOutlinePhone, AiOutlineMail } from "react-icons/ai";
import { MdOutlineLocationOn } from "react-icons/md";

function Section7() {
  return (

    <div className="bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 h-auto flex flex-row">
      <div className="w-1/2 mt-5 p-10">
        <h1 className='text-3xl text-white font-semibold'>Reach Us Out</h1>
        <p className='text-xl text-white'>
          Got a question about our programs? Interested in partnering with us?
          Got suggestions or just want to say hi?
        </p>
        <p className='flex mt-5 text-lg items-center  text-white'>
          <AiOutlinePhone className="h-8 w-8" />
          +91-999 999 9999
        </p>
        <p className='flex mt-5 text-lg items-center  text-white'>
            <AiOutlineMail className="h-8 w-8"/>Solution@AW.co.in
        </p>
        <p className='flex mt-5 text-lg items-center  text-white'>
            <MdOutlineLocationOn className="h-8 w-8"/>Chambur,Mumbai-400071
        </p>
      </div>

        <div className="p-10">
      <div className=" bg-white bg-opacity-50 w-full p-10  rounded-3xl shadow-xl">
         <p className='text-2xl text-white font-mono text-center'>Send us a message</p>
         <form action="" className="space-y-5 p-5">
             <div className="flex space-x-5">
            <label className='flex flex-col text-white font-semibold text-base'>Name:<input type="text" className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-black "/></label>
            
            <label className='flex flex-col text-white font-semibold text-base'>Email:<input type="email" className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-black " /></label>
            </div>

            <div className='flex space-x-5'>
            <label className='flex flex-col text-white font-semibold text-base'>Phone no.:<input type="tel" className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-black "/></label>
            
            <label className='flex flex-col text-white font-semibold text-base'>College / Company: <input type="text" className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-black " /></label>
           
            </div>
            <div className="flex flex-col">
            <label className='flex flex-col text-white font-semibold text-base'>How we can help you?</label>
            <input type="text" maxLength={500}  row='4' className="bg-gray-200 block appearance-none border-2 h-28 text-sm border-gray-200 place-self-start rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-black "/></div>
            <button type='submit' className="text-white bg-red-500 hover:bg-gradient-to-bl  focus:outline-none   font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 border border-opacity-50 focus:border-white">Submit</button>
         </form>
      </div>
      </div>
    </div>
  );
}

export default Section7;
