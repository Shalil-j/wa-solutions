import React from 'react'
import {FiAlertTriangle} from 'react-icons/fi'

function Sec1() {
  return (
    <div>
      <div className='text-center mt-28'>
      <h1 className='text-5xl font-bold text-indigo-700'>The path to your success</h1>
      <p className='text-base mt-1 text-gray-400 font-semibold'>Join the skill-based learning programs at IA Labs and launch your career in the technology industry.</p>
      <div className='flex justify-between p-10 rounded-xl  ml-14 mr-14 shadow-xl'>
        <p className='text-lg font-medium text-gray-400'>Program Duration<br /><span className='text-4xl font-extrabold text-indigo-700'>16 Weeks</span></p>
        <p className='text-lg font-medium text-gray-400' >Class Schedule<br /><span className='text-4xl font-extrabold text-indigo-700'>8 PM - 11 PM</span></p>
        <p className='text-lg font-medium text-gray-400'>Delivery Mode<br /><span className='text-4xl font-extrabold text-indigo-700'>Online</span></p>
      </div>
      <p className='text-base mt-5 text-gray-400 font-semibold'>
        Apply only if you are able to take up job immediately after finishing the program.</p>
    </div>
    {/* pragram */}
    <div className='mt-20 text-center'>
    <h1 className='text-4xl font-bold'>Program Curriculum</h1>
    {/* module */}
    <div className='ml-28 mt-20 space-y-5'>
      {/* model1 */}
      <div className='flex p-1'>
        <div className='border-r-2 p-3'>
        <p className='font-semibold text-gray-400'>Module</p>
        <h1 className='font-bold text-5xl'>1</h1>
        </div>
        <div className='text-left ml-3'>
        <h1 className='text-lg font-semibold'>Web Developer Essentials</h1>
        <h2 className='text-base text-gray-600 '>Learn web development skills that form the foundation of any successfull modern web developer</h2>
        <ul className='text-xs flex space-x-4'>
          <li className='bg-indigo-200 p-1 rounded-full px-2'>HTTP</li>
          <li className='bg-indigo-200 p-1 rounded-full px-2'>REST API</li>
          <li className='bg-indigo-200 p-1 rounded-full px-2'>LINUX</li>
          <li className='bg-indigo-200 p-1 rounded-full px-2'>CLoud Deployment</li>
        </ul>
        </div>
      </div>
      {/* model2 */}
      
      <div className='flex p-1'>
        <div className='border-r-2 p-3'>
        <p className='font-semibold text-gray-400'>Module</p>
        <h1 className='font-bold text-5xl'>2</h1>
        </div>
        <div className='text-left ml-3'>
        <h1 className='text-lg font-semibold'>Build your Portfolio website - HTML CSS Essentials</h1>
        <h2 className='text-base text-gray-600 '>Build a responsive mobile-first front end for I-Profile, a portfolio website, and learn HTML, CSS and more.</h2>
        <ul className='text-xs flex space-x-4'>
          <li className='bg-indigo-200 p-1 rounded-full px-2'>HTML</li>
          <li className='bg-indigo-200 p-1 rounded-full px-2'>CSS</li>
          <li className='bg-indigo-200 p-1 rounded-full px-2'>Tailwind</li>
          <li className='bg-indigo-200 p-1 rounded-full px-2'>Flexbox</li>
        </ul>
        </div>
      </div>
      {/* model3 */}
      
      <div className='flex p-1'>
        <div className='border-r-2 p-3'>
        <p className='font-semibold text-gray-400'>Module</p>
        <h1 className='font-bold text-5xl'>3</h1>
        </div>
        <div className='text-left ml-3'>
        <h1 className='text-lg font-semibold'>Dynamic Frontend Fundamentals</h1>
        <h2 className='text-base text-gray-600 '>ReactJS</h2>
        <ul className='text-xs flex space-x-4'>
          <li className='bg-indigo-200 p-1 rounded-full px-2'>React</li>
          <li className='bg-indigo-200 p-1 rounded-full px-2'>Redux</li>
          <li className='bg-indigo-200 p-1 rounded-full px-2'>Hooks</li>
          <li className='bg-indigo-200 p-1 rounded-full px-2'>Node js</li>
          <li className='bg-indigo-200 p-1 rounded-full px-2'>Express</li>
          <li className='bg-indigo-200 p-1 rounded-full px-2'>Mongo DB</li>
        </ul>
        </div>
      </div>
      {/* model4 */}
      
      <div className='flex p-1'>
        <div className='border-r-2 p-3'>
        <p className='font-semibold text-gray-400'>Module</p>
        <h1 className='font-bold text-5xl'>4</h1>
        </div>
        <div className='text-left ml-3'>
        <h1 className='text-lg font-semibold'>Build I-Jobs</h1>
        <h2 className='text-base text-gray-600 '>Build a scalable, distributed, naukri like app where employers can post jobs & candidates can apply</h2>
        <ul className='text-xs flex space-x-4'>
          <li className='bg-indigo-200 p-1 rounded-full px-2'>Component</li>
          <li className='bg-indigo-200 p-1 rounded-full px-2'>Component lifecycle</li>
          <li className='bg-indigo-200 p-1 rounded-full px-2'>Component state management</li>
          <li className='bg-indigo-200 p-1 rounded-full px-2'>Component styling</li>
          <li className='bg-indigo-200 p-1 rounded-full px-2'>Global context</li>
        </ul>
        </div>
      </div>
{/* model5 */}

<div className='flex p-1'>
        <div className='border-r-2 p-3'>
        <p className='font-semibold text-gray-400'>Module</p>
        <h1 className='font-bold text-5xl'>5</h1>
        </div>
        <div className='text-left ml-3'>
        <h1 className='text-lg font-semibold'>Data Structures/Algorithms and System Design practice</h1>
        <h2 className='text-base text-gray-600 '>Curated, self-paced Data Structures, Algorithms and System Design practice with mock-tests to crack interview rounds with ease.</h2>
        <ul className='text-xs flex space-x-4'>
          <li className='bg-indigo-200 p-1 rounded-full px-2'>Arrays</li>
          <li className='bg-indigo-200 p-1 rounded-full px-2'>Strings</li>
          <li className='bg-indigo-200 p-1 rounded-full px-2'>Trees</li>
          <li className='bg-indigo-200 p-1 rounded-full px-2'>Graphs</li>
          <li className='bg-indigo-200 p-1 rounded-full px-2'>Searching</li>
          <li className='bg-indigo-200 p-1 rounded-full px-2'>Sorting</li>
          <li className='bg-indigo-200 p-1 rounded-full px-2'>Recursion</li>
        </ul>
        </div>
      </div>

    </div>
    </div>

    

    </div>
  )
}

export default Sec1