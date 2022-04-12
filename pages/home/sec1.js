import React from 'react'
import Image from 'next/image'
import BG from '../assets/bg1.jpg'

function Section1() {
  return (
    <div className='scrollbar-hide'>
        <div className="invisible md:visible bg-fixed w-full">

 <Image
        src={BG}
        alt='BG'
        width='100vh'
        height='55%'
        layout='responsive'
        priority
      /> 
        </div>
        <div className="relative w-full max-w-md -top-10 sm:-top-44 sm:left-28 p-28 sm:p-16 md:invisible">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
    <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
    <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>

        <div className='absolute top-44 p-3 inset-x-0  w-full text-center object-center md:top-28 lg:top-56' >
        <h1 className="text-xl sm:text-3xl font-extrabold  text-indigo-700 md:text-5xl ">Full Stack of Anything  Everyhting </h1>
        <h1 className="text-2xl sm:text-4xl font-extrabold text-indigo-700  md:text-5xl ">@scale</h1>
        <p className=' text-sm pl-10 pr-10 md:text-xl font-medium md:text-white text-black'>Accelerae digital transdormation journey of your new hires and lateral telent with deep tech skills</p>
        <div className="space-x-3 mt-2">
        <button className="border-2 font-semibold text-xs   border-indigo-700 rounded-md text-white p-1 hover:text-white hover:bg-indigo-700 md:font-semibold md:text-lg md:p-3">Learn more</button>
        <button className="border-2 font-semibold text-xs  border-indigo-700 rounded-md p-1 text-white hover:text-white hover:bg-indigo-700 md:font-semibold md:text-lg md:p-3">Talk to us </button>
        </div>
        </div>
        
    </div>
  )
}

export default Section1

{/*  */}