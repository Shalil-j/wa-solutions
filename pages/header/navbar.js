import React ,{useState} from "react";
import Image from "next/image";
import { AiOutlineMenu,AiOutlineClose } from "react-icons/ai";
import Link from 'next/link'
import Logo from '../assets/logo.png'
import {useRouter} from "next/router";


function Navbar() {
 const [showMenu,setShowMenu]=useState(false)
 let menu
 if(showMenu){
menu=<div className="fixed top-[71.9px] bg-black  h-auto z-50 w-full font-semibold md:hidden">
   <ul className='p-3 space-y-5'>
          <li className="active">
            <Link href="/">
            <a
             
              className="block text-base px-10 py-4 text-white hover:bg-zinc-700 rounded-2xl  font-semibold "
            >
              Programs
            </a>
            </Link>
          </li>
          <li>
          <Link href="/">
            <a
             
              className="block text-base px-10 py-4 text-white hover:bg-zinc-700 rounded-2xl  font-semibold "
            >
              College
            </a>
            </Link>
          </li>
          
          <li>
          <Link href="/">
            <a
              
              className="block text-base px-10 py-4 text-white hover:bg-zinc-700 rounded-2xl  font-semibold "
            >
              PIET
            </a>
            </Link>
          </li>
          <li>
          <Link href="/">
            <a
              
              className="block text-base px-10 py-4 text-white hover:bg-zinc-700 rounded-2xl  font-semibold "
            >
              View Jobs
            </a>
            </Link>
          </li>
          <li>
          <Link href="/">
          <a
             
              className="block text-base px-10 py-4 text-white hover:bg-zinc-700 rounded-2xl  font-semibold "
            >
              Signup
            </a>
            </Link>
          </li>
        </ul>
  
</div>
 }
 const router = useRouter()


  return (
    <>
    {/* // <!-- Navbar goes here --> */}
    <nav className="bg-black fixed w-full z-40">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-10">
            <div onClick={()=>router.push('/')}>
              {/* <!-- Website Logo --> */}
              <a href="#" className="flex items-center py-4 px-2">
                <Image
                  src={Logo}
                  alt="logo"
                  width={60}
                  height={40}
                  
                />
                <span className="font-semibold text-white text-lg">
                  WASolutions
                </span>
              </a>
            </div>
            {/* <!-- Primary Navbar items --> */}
            <div className="hidden md:flex  items-center space-x-5">
            <div class="group inline-block relative">
        <button
          class=" text-gray-400 hover:text-white font-semibold py-2 px-4 rounded inline-flex items-center"
        >
          <span class="mr-1">Programs</span>
          <svg
            class="fill-current h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path
              d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
            />
          </svg>
        </button>
        <ul class="absolute hidden text-gray-700 pt-1 w-80 group-hover:block">
        <Link href='../component/program/fullstack'>
            <a
              class="rounded-t text-lg font-bold text-black bg-white hover:text-indigo-700 py-2 px-4 block whitespace-no-wrap"
              href="#"
              >Full Stack Developer Program
              <p className="text-xs font-normal text-gray-700">
              Become skilled full stack javascript developer by learning to build web applications using MERN stack
              </p>
              </a>
              </Link>
          <Link href='../component/program/backend'>
            <a
              class="rounded-b bg-white text-lg font-bold text-black hover:text-indigo-700 py-2 px-4 block whitespace-no-wrap"
              href="#"
              >Backend Java Developer Program
              <p className='text-xs font-normal text-gray-700'>
                Become a great Java Backend developer by building multiple hands on projects using Spring Boot, Hibernate and RestApis</p>
              </a>
          </Link>
        </ul>
      </div>

              
              <Link href="../component/college/college">
              <a
              
                className="py-4 px-2 text-gray-400 font-semibold hover:text-white transition duration-300"
              >
             College
              </a>
              </Link>
              <Link href="../component/jobs/job">
              <a
             
                className="py-4 px-2 text-gray-400 font-semibold hover:text-white transition duration-300"
              >
                View Jobs
              </a>
              </Link>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-3 ">
          <Link href="../component/signup">
          <a
            
              className="py-2 px-2 font-medium text-slate-300  hover:bg-indigo-500 hover:text-white rounded-md transition duration-300"
            >
              Sign Up
            </a>
            </Link>
					</div>



          {/* <!-- Mobile menu button -->    */}
          <div className=" md:hidden flex items-center">
            <button className="outline-none mobile-menu-button">
              {showMenu ? <AiOutlineClose onClick={()=>setShowMenu(!showMenu)} className="text-xl text-slate-500 hover:text-white"/> : <AiOutlineMenu onClick={()=>setShowMenu(!showMenu)} className="text-xl text-slate-500 hover:text-white"/>}
            
            </button>
          </div>
        </div>
      </div>

      {/* <!-- mobile menu --> */}
      
    </nav>
    {menu}
    </>
  );
}

export default Navbar;

