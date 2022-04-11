import {HiOutlineArrowNarrowRight} from 'react-icons/hi'
import React from "react";
import Lottie from 'react-lottie-player'
import BE from '../assets/BE.json'
import Sec1 from './besec1';
import Sec2 from './fssec2';
import Footer from '../header/footer'

function Backendjava() {
  return (
    <div>
      <div className=' w-full h-16'></div>
      <div className='flex '> 
        <div className='lg:w-1/2 space-y-1 p-14 pt-20'>
        <p className='text-sm text-gray-400'>Pay Rs 0 untill you get placed</p>
        <h1 className='text-xl font-bold text-indigo-900 '>Guaranteed Job with a CTC of 5+ LPA</h1>
        <h2 className='text-5xl font-bold text-indigo-700'>Backend Developer Program</h2>
        <p className='text-base text-gray-600 font-medium'>Accelerate your career in backend development by working on internship-grade projects and building an impressive project-backed portfolio. Work in a real developer environment and master 
        <span className='text-indigo-700 font-semibold'>Java, RestAPI, Spring Boot and more</span> to get placed in top product based companies.</p>
        <h1 className='text-lg font-semibold'>Next batch starts <span className='text-indigo-700'>20th Dec</span></h1>
        <a className='bg-indigo-700 px-5 course-pointer flex text-white font-semibold py-4 text-center rounded-full'> Register Now
         <HiOutlineArrowNarrowRight className='h-7 w-10'/></a>
        </div>   
        <div className='invisible lg:visible right-0 w-1/2 absolute top-0'>
        <Lottie
      loop
      animationData={BE}
      play
      
    />
        </div>
        </div>  
    <Sec1/>
    <Sec2/>
    <Footer/>
    </div>
  )
}

export default Backendjava