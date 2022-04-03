import React from 'react'
import { AiFillYoutube,AiFillGithub } from "react-icons/ai";
import { BsLinkedin,BsFacebook } from "react-icons/bs";




function Footer() {
  return (
    <div className='flex mt-14 items-center justify-between p-14'>
        <div className='text-base text-slate-500 font-normal'>
            <p>
            &#169; WA Soultions,Chambur,Mumbai,Maharashtra,India 
            </p>
            <p>Email:hello@wa.co.in</p>
        </div>

        <div className='flex space-x-5 items-center'>
        <AiFillYoutube className='h-7 w-7 text-slate-500'/>
        <BsLinkedin className='h-6 w-6 text-slate-500'/>
        <BsFacebook className='h-6 w-6 text-slate-500'/>
        <AiFillGithub className='h-6 w-6 text-slate-500'/>
        </div>

    </div>
  )
}

export default Footer