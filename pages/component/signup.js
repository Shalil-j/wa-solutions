import React from 'react'
import Logo from '../assets/logo.png'
import Image from 'next/image'
import Lottie from 'react-lottie-player'
import Sign from '../assets/sign.json'
import Footer from '../header/footer'

function Signup() {
  return (
      <>
      <div className='h-0 md:h-10'></div>
    <div className="flex items-center min-h-screen bg-gray-50">
      <div className="flex-1 h-full max-w-4xl mx-auto bg-white rounded-lg shadow-xl">
        <div className="flex flex-col md:flex-row">
          <div className="invisible lg:visible h-32 md:h-auto md:w-1/2">
          <Lottie
      loop
      animationData={Sign}
      play
    />
          </div>
          <div className="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
            <div className="w-full">
              <div className="flex justify-center">
              <Image
                  src={Logo}
                  alt="logo"
                  width={60}
                  height={40}
                  
                />
         
              </div>
              <h1 className="mb-4 text-2xl font-bold text-center mt-2 text-gray-700">
                Sign up
              </h1>
              <div>
                <label className="block text-sm">
                  Name
                </label>
                <input type="text"
                  className="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
                  placeholder="Name" />
              </div>
              <div className="mt-4">
                <label className="block text-sm">
                  Email
                </label>
                <input type="email"
                  className="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
                  placeholder="Email Address" />
              </div>
              <div>
                <label className="block mt-4 text-sm">
                  Password
                </label>
                <input
                  className="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
                  placeholder="Password" type="password" />
              </div>
              <button
                className="block w-full px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-blue-600 border border-transparent rounded-lg active:bg-blue-600 hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue"
                href="#">
                Sign up
              </button>

              <div className="mt-4 text-center">
                <p className="text-sm">Don&#39;t have an account yet? <a href="#"
                    className="text-blue-600 hover:underline"> Sign up.</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default Signup