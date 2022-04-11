import {HiOutlineArrowNarrowRight} from 'react-icons/hi'
import React from "react";
import Lottie from 'react-lottie-player'
import FS from '../assets/fs.json'
import Sec1 from './fssec1';
import Sec2 from './fssec2';
import Footer from '../header/footer'

function Fullstackjava() {


  return (
    <div>
      <div className='w-full h-16'></div>
      <div className='flex '> 
        <div className='lg:w-1/2 space-y-1 p-14 pt-20'>
        <p className='text-sm text-gray-400'>Pay Rs 0 untill you get placed</p>
        <h1 className='text-xl font-bold text-indigo-900 '>Guaranteed Job with a CTC of 5+ LPA</h1>
        <h2 className='text-5xl font-bold text-indigo-700'>Full Stack Javascript Developer</h2>
        <p className='text-base text-gray-600 font-medium'>Advance your career in MERN stack Javascript by working on internship-grade tech projects and building new-age applications. Gain real work experience and learn
        <span className='text-indigo-700 font-semibold'> Html, CSS, Tailwind, ReactJs, NodeJs, MongoDb, ExpressJs and more </span> to land a top career as a full-stack Javascript Developer.</p>
        <h1 className='text-lg font-semibold'>Next batch starts <span className='text-indigo-700'>20th Dec</span></h1>
        <a className='bg-indigo-700 max-w-3xl px-5 course-pointer flex text-white font-semibold py-4 text-center rounded-full'> Register Now
         <HiOutlineArrowNarrowRight className='h-7 w-10'/></a>
        </div>   
        <div className='invisible lg:visible  right-0 w-1/2 absolute '>
        <Lottie
      loop
      animationData={FS}
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

export default Fullstackjava