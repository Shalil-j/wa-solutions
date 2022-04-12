import React from 'react'
import {FaGraduationCap} from 'react-icons/fa';
import {MdWork} from 'react-icons/md';
import {GoSettings} from 'react-icons/go';



function Section3() {
  return (
    <div className="h-60 mx-auto mt-14 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-center">
        <h1 className="text-lg md:text-2xl font-bold text-white pt-5">Learn Soultion</h1>
        <p className="text-sm md:text-base font-normal text-slate-300 md:pl-40 md:pr-40">We leverage state of the art Learning Platform and Industry-leading expertise to deliver impactful talent building &amp; training ecosystem that fuels your business outcomes.</p>
        
        <div className="flex flex-col space-y-10 md:space-y-0 md:grid md:grid-col-3 md:grid-flow-col md:gap-4 mt-3 p-10 ">
        <div className='box-content h-auto md:h-60 bg-white rounded-md drop-shadow-2xl'>
        <FaGraduationCap className='h-10 w-10 p-2 text-white bg-indigo-700 md:w-14 md:h-14 md:p-3 rounded-lg z-10 -mt-4 ml-5 '/>
        <h1 className='text-lg  text-indigo-700 font-semibold'>New Hire Bootcamps</h1>
        <p className='text-sm  md:text-base text-slate-500 p-5'>Focused immersive, experiential learning with graduate engineers to make them &apos;Production Ready&apos;</p>
        </div>

        <div className='box-content h-auto md:h-60 bg-white rounded-md drop-shadow-2xl'>
        <MdWork className='h-10 w-10 p-2 text-white bg-indigo-700 md:w-14 md:h-14 md:p-3 rounded-lg z-10 -mt-4 ml-5 '/>
        <h1 className='text-lg  text-indigo-700 font-semibold'>Lateral Deep Skilling Programs</h1>
        <p className='text-sm  md:text-base text-slate-500 p-5'>Customized Programs to upskill/reskill and retool existing experienced talent in your organization.</p>
        </div>
        
        <div className='box-content h-auto md:h-60 bg-white rounded-md drop-shadow-2xl'>
        <GoSettings className='h-10 w-10 p-2 text-white bg-indigo-700 md:w-14 md:h-14 md:p-3 rounded-lg z-10 -mt-4 ml-5 '/>
        <h1 className='text-lg  text-indigo-700 font-semibold'>Managed Learning Services</h1>
        <p className='text-sm  md:text-base text-slate-500 p-5'>Partner with L&amp;D teams to co-create and execute high value programs and webinars throughout the year.</p>
        </div>
        </div>
    </div>
  )
}

export default Section3