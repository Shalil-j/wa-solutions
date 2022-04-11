import React from 'react'
import { AiFillYoutube,AiFillGithub } from "react-icons/ai";
import { BsLinkedin,BsFacebook } from "react-icons/bs";




function Footer() {
  return (
    <div className='md:flex mt-14 items-center justify-between p-10 md:p-14 bottom-0'>
        <div className='text-base text-slate-500 font-normal'>
            <p>
            &#169; WA Soultions</p>
            <p>
            Chambur,Mumbai,Maharashtra,India 
            </p>
            <p>Email:hello@wa.co.in</p>
        </div>

        <div className='mt-2 md:mt-0 flex space-x-5 items-center'>
        <AiFillYoutube className='h-7 w-7 text-slate-500 hover:text-red-600'/>
        <BsLinkedin className='h-6 w-6 text-slate-500 hover:text-blue-600'/>
        <BsFacebook className='h-6 w-6 text-slate-500 hover:text-blue-800'/>
        <AiFillGithub className='h-6 w-6 text-slate-500 hover:text-black'/>
        </div>

    </div>
  )
}

export default Footer