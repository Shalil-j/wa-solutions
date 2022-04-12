import React from "react";
import { AiOutlinePhone, AiOutlineMail } from "react-icons/ai";
import { MdOutlineLocationOn } from "react-icons/md";

function Section7() {
  return (

    <div className="flex-col mx-auto bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 h-auto md:flex md:flex-row">
      <div className=" md:w-1/2 mt-5 p-10">
        <h1 className='text-xl md:text-3xl text-white font-semibold'>Reach Us Out</h1>
        <p className='text-sm md:text-xl text-white'>
          Got a question about our programs? Interested in partnering with us?
          Got suggestions or just want to say hi?
        </p>
        <p className='flex mt-5 text-sm md:text-lg items-center  text-white'>
          <AiOutlinePhone className="h-5 w-5 md:h-8 md:w-8" />
          +91-999 999 9999
        </p>
        <p className='flex mt-5 text-sm md:text-lg items-center  text-white'>
          <AiOutlineMail className="h-5 w-5 md:h-8 md:w-8" />Solution@AW.co.in
        </p>
        <p className='flex mt-5 text-sm md:text-lg items-center  text-white'>
          <MdOutlineLocationOn className="h-5 w-5 md:h-8 md:w-8" />Chambur,Mumbai-400071
        </p>
      </div>

      <div className="p-5 md:p-10">
        <div className=" bg-white bg-opacity-30 w-full p-10  rounded-3xl shadow-xl">
          <p className=' text-xl md:text-2xl text-white font-mono text-center'>Send us a message</p>
          <form action="" className="space-y-5 p-5">
            <div className=" space-y-2 md:space-y-0 md:flex md:space-x-5 ">
              <label className='flex flex-col text-white font-semibold text-sm md:text-base'>Name:<input type="text" className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-black " /></label>

              <label className='flex flex-col text-white font-semibold text-sm md:text-base'>Email:<input type="email" className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-black " /></label>
            </div>

            <div className='space-y-2 md:space-y-0 md:flex md:space-x-5 '>
              <label className='flex flex-col text-white font-semibold text-sm md:text-base'>Phone no.:<input type="tel" className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-black " /></label>

              <label className='flex flex-col text-white font-semibold text-sm md:text-base'>College / Company: <input type="text" className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-black " /></label>

            </div>
            <div className="flex flex-col">
              <label className='flex flex-col text-white font-semibold text-sm md:text-base'>How we can help you?</label>
              {/* <input type="text" maxLength={500} cols='50' row='4' className="bg-gray-200 block appearance-none border-2 h-28 text-sm border-gray-200 place-self-start rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-black " /> */}
            <textarea id="story" name="story"
              rows="5" cols="33" className="bg-gray-200 block appearance-none border-2 h-28 text-sm border-gray-200 place-self-start rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-black ">
            </textarea></div>
            <button type='submit' className="text-white bg-red-500 hover:bg-gradient-to-bl place-item-center focus:outline-none   font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 border border-opacity-50 focus:border-white">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Section7;
