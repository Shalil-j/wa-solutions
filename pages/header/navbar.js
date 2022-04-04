import React ,{useState} from "react";
import Image from "next/image";
import { AiOutlineMenu,AiOutlineClose } from "react-icons/ai";
import Link from 'next/link'
import Logo from '../assets/logo.png'


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



  return (
    <>
    {/* // <!-- Navbar goes here --> */}
    <nav className="bg-black fixed w-full z-40">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-10">
            <div>
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
            <Link href="/">
              <a
              
                className="py-4 px-2 text-gray-400 hover:text-white font-semibold transition duration-300 "
              >
                Programs
              </a>
              </Link>
              <Link href="/">
              <a
              
                className="py-4 px-2 text-gray-400 font-semibold hover:text-white transition duration-300"
              >
             College
              </a>
              </Link>
              <Link href="/">
              <a
                
                className="py-4 px-2 text-gray-400 font-semibold hover:text-white transition duration-300"
              >
               PIET
              </a>
              </Link>
              <Link href="/">
              <a
             
                className="py-4 px-2 text-gray-400 font-semibold hover:text-white transition duration-300"
              >
                View Jobs
              </a>
              </Link>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-3 ">
          <Link href="/">
          <a
            
              className="py-2 px-2 font-medium text-slate-600 bg-white hover:bg-indigo-500 hover:text-white rounded-md transition duration-300"
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

