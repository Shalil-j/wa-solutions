import React from 'react'
import Image from 'next/image'
import BG from '../assets/bg1.jpg'

function Section1() {
  return (
    <div className=''>
        <div className="bg-fixed">

 <Image
        src={BG}
        alt='BG'
        width='100vh'
        height='55%'
        layout='responsive'
        priority
      /> 
        </div>

        <div className=' absolute bottom-48 inset-x-0  w-1/2 text-center' >
        <h1 className="text-4xl font-extrabold text-indigo-700">Full Stack of Anything  Everyhting @scale</h1>
        <p className='text-lg font-medium text-white'>Accelerae digital transdormation journey of your new hires and lateral telent with deep tech skills</p>
        <div className="space-x-3">
        <button className="border-2 text-white border-indigo-700 rounded-md p-2 hover:text-white hover:bg-indigo-700 font-semibold">Learn more</button>
        <button className="border-2 text-white border-indigo-700 rounded-md p-2 hover:text-white hover:bg-indigo-700 font-semibold">Talk to us </button>
        </div>
        </div>
        
    </div>
  )
}

export default Section1

{/*  */}