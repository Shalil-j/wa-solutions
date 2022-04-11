import React from 'react'
import Image from 'next/image'
import BG from '../assets/bg3.jpg'
import {AiOutlineCheck} from 'react-icons/ai'
import Footer from '../header/footer'


function College() {
  return (
<div>
<div className='lg:h-20'></div>
<div className='lg:flex'>
<div className='invisible lg:visible bg-fixed lg:w-3/5'>
<Image
        src={BG}
        alt='BG'
        width='100vh'
        height='65%'
        layout='responsive'
        priority
      /> 
</div>
<div className='absolute left-10 top-28 sm:top-20 md:top-40 md:left-64 lg:top-0 lg:left-0 lg:relative lg:mt-32 text-center z-10'>
<h1 className='text-4xl sm:text-5xl font-extrabold'>Make your Campus</h1>
<h1 className='text-4xl sm:text-5xl  font-extrabold text-indigo-700'>Industry-Ready</h1>
<p className='text-base font-medium text-gray-400'>We help your students crack jobs at<br />
  <span className='text-gray-700'>Top Product Companies </span>with <span className='text-indigo-700'>CTC upto 35 Lakhs
    </span></p>
    <div className='pt-5 space-x-5 text-base font-semibold text-white '>
      <button className='bg-indigo-500 hover:bg-indigo-800 px-6 py-5 rounded-lg transition duration-300'>Get In Touch</button>
      <button className='bg-indigo-200 px-6 py-5 rounded-lg hover:bg-indigo-400 transition duration-300 '>Join Slack</button>
    </div>
</div>
</div>
{/* sec1 */}
<div className='mt-40 text-left p-5 md:text-center '>
<h1 className='text-2xl md:text-4xl font-bold'>Our Curriculum will help you create impact</h1>
<p className='text-gray-400 mt-5'>Choose the track that suits you best</p>
<p className='text-lg  sm:text-2xl font-bold text-left mt-5'>Module One <span className='text-gray-400'>- Career Essentials</span></p>
</div>
{/* cards  */}
<div className='grid grid-rows-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-5'>
{/* 1 */}
<div className=' p-5 border rounded-2xl '>
  <p className='text-lg font-semibold'>DSA Foundation</p>
  <p className='text-sm'>Foundations of Data Structures and Algorithms</p>
  <button className='bg-indigo-500 text-white font-medium  w-full mt-2 rounded-md'>150+ hours of live classes</button>
  <div className='mt-3'>
    <p className='border-t-2 font-bold text-sm'>WHAT'S INCLUDED</p>
    <ul className='space-y-3 mt-5'>
      <li className='text-gray-500 text-sm flex text-center'><AiOutlineCheck/>Arrays</li>
      <li className='text-gray-500 text-sm flex text-center'><AiOutlineCheck/>Basic Maths</li>
      <li className='text-gray-500 text-sm flex text-center'><AiOutlineCheck/>Bit manipulations</li>
      <li className='text-gray-500 text-sm flex text-center'><AiOutlineCheck/>Searching &#38; Sorting</li>
      <li className='text-gray-500 text-sm flex text-center'><AiOutlineCheck/>Recursion &#38; Hashing</li>
      <li className='text-gray-500 text-sm flex text-center'><AiOutlineCheck/>LinkedLists</li>
      <li className='text-gray-500 text-sm flex text-center'><AiOutlineCheck/>Arrays</li>
      <li className='text-gray-500 text-sm flex text-center'><AiOutlineCheck/>Queues and Stacks</li>
    </ul>
  </div>
</div>
{/* 2 */}
<div className=' p-5 border rounded-2xl '>
  <p className='text-lg font-semibold'>Advanced DSA</p>
  <p className='text-sm'>Taking Data Structures and Algorithms to next level</p>
  <button className='bg-indigo-500 text-white font-medium  w-full mt-2 rounded-md'>200+ hours of live classes</button>
  <div className='mt-3'>
    <p className='border-t-2 font-bold text-sm'>WHAT&#39;S INCLUDED</p>
    <ul className='space-y-3 mt-5'>
      <li className='text-gray-500 text-sm flex text-center'><AiOutlineCheck/>Trees</li>
      <li className='text-gray-500 text-sm flex text-center'><AiOutlineCheck/>Tries</li>
      <li className='text-gray-500 text-sm flex text-center'><AiOutlineCheck/>Backtracking</li>
      <li className='text-gray-500 text-sm flex text-center'><AiOutlineCheck/>Maps and Sets</li>
      <li className='text-gray-500 text-sm flex text-center'><AiOutlineCheck/>Heaps</li>
      <li className='text-gray-500 text-sm flex text-center'><AiOutlineCheck/>Dynamic Programming</li>
      <li className='text-gray-500 text-sm flex text-center'><AiOutlineCheck/>Graphs</li>
    </ul>
  </div>
</div>
{/* 3 */}
<div className=' p-5 border rounded-2xl '>
  <p className='text-lg font-semibold'>CS Fundamentals</p>
  <p className='text-sm'>All that is required to become a computer scientist</p>
  <button className='bg-indigo-500 text-white font-medium  w-full mt-2 rounded-md'>100+ hours of live classes</button>
  <div className='mt-3'>
    <p className='border-t-2 font-bold text-sm'>WHAT&#39;S INCLUDED</p>
    <ul className='space-y-3 mt-5'>
      <li className='text-gray-500 text-sm flex text-center'><AiOutlineCheck/>Databses</li>
      <li className='text-gray-500 text-sm flex text-center'><AiOutlineCheck/>Object Oriented design</li>
      <li className='text-gray-500 text-sm flex text-center'><AiOutlineCheck/>Operating Systems</li>
      <li className='text-gray-500 text-sm flex text-center'><AiOutlineCheck/>Computer Networks</li>
      <li className='text-gray-500 text-sm flex text-center'><AiOutlineCheck/>Schema Design</li>
    </ul>
  </div>
</div>
{/* 4 */}
<div className=' p-5 border rounded-2xl '>
  <p className='text-lg font-semibold'>Soft Skills</p>
  <p className='text-sm'>Foundations on Career Readiness toolkit</p>
  <button className='bg-indigo-500 text-white font-medium w-full mt-2 rounded-md'>70+ hours of live classes</button>
  <div className='mt-3'>
    <p className='border-t-2 font-bold text-sm'>WHAT&#39;S INCLUDED</p>
    <ul className='space-y-3 mt-5'>
      <li className='text-gray-500 text-sm flex text-center'><AiOutlineCheck/>Communication Skills</li>
      <li className='text-gray-500 text-sm flex text-center'><AiOutlineCheck/>Problem Solving</li>
      <li className='text-gray-500 text-sm flex text-center'><AiOutlineCheck/>Critical thinking</li>
      <li className='text-gray-500 text-sm flex text-center'><AiOutlineCheck/>Profile &#38; Resume</li>
      <li className='text-gray-500 text-sm flex text-center'><AiOutlineCheck/>Interview Skills</li>
    </ul>
  </div>
</div>
</div>
{/* model1-c */}


{/* model2 */}
<div className='p-3 md:mt-5 text-center'>
<p className='text-lg  sm:text-2xl font-bold text-left mt-5'>Module Two <span className='text-gray-400'>- Career Track</span></p>
{/* cards  */}
<div className='grid grid-rows-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-5'>
{/* 1 */}
<div className=' p-5 border rounded-2xl '>
  <p className='text-lg font-semibold'>Full Stack JS (MERN)</p>
  <p className='text-sm'>Build Anything using Javascript</p>
  <button className='bg-indigo-500 text-white font-medium  w-full mt-2 rounded-md'>150+ hours of live classes</button>
  <div className='mt-3'>
    <p className='border-t-2 font-bold text-sm'>WHAT&#39;S INCLUDED</p>
    <ul className='space-y-3 mt-5'>
      <li className='text-gray-500 text-sm flex text-center'><AiOutlineCheck/>Html/CSS</li>
      <li className='text-gray-500 text-sm flex text-center'><AiOutlineCheck/>Javascript, ES6</li>
      <li className='text-gray-500 text-sm flex text-center'><AiOutlineCheck/>React Js</li>
      <li className='text-gray-500 text-sm flex text-center'><AiOutlineCheck/>Node Js</li>
      <li className='text-gray-500 text-sm flex text-center'><AiOutlineCheck/>MongoDB</li>
      <li className='text-gray-500 text-sm flex text-center'><AiOutlineCheck/>Express Js</li>
    </ul>
  </div>
</div>
{/* 2 */}
<div className=' p-5 border rounded-2xl '>
  <p className='text-lg font-semibold'>Backend using Java</p>
  <p className='text-sm'>Robust technology with no replacement</p>
  <button className='bg-indigo-500 text-white font-medium  w-full mt-2 rounded-md'>150+ hours of live classes</button>
  <div className='mt-3'>
    <p className='border-t-2 font-bold text-sm'>WHAT&#39;S INCLUDED</p>
    <ul className='space-y-3 mt-5'>
      <li className='text-gray-500 text-sm flex text-center'><AiOutlineCheck/>OOPS</li>
      <li className='text-gray-500 text-sm flex text-center'><AiOutlineCheck/>Collections</li>
      <li className='text-gray-500 text-sm flex text-center'><AiOutlineCheck/>Hibernate, JPA</li>
      <li className='text-gray-500 text-sm flex text-center'><AiOutlineCheck/>Spring Boot</li>
      <li className='text-gray-500 text-sm flex text-center'><AiOutlineCheck/>Concurrency</li>
      <li className='text-gray-500 text-sm flex text-center'><AiOutlineCheck/>Data Modelling</li>

    </ul>
  </div>
</div>
{/* 3 */}
<div className=' p-5 border rounded-2xl '>
  <p className='text-lg font-semibold'>Data Science - AI/ML</p>
  <p className='text-sm'>Data Scientist - The Sexiest job of 21st century</p>
  <button className='bg-indigo-500 text-white font-medium  w-full mt-2 rounded-md'>200+ hours of live classes</button>
  <div className='mt-3'>
    <p className='border-t-2 font-bold text-sm'>WHAT&#39;S INCLUDED</p>
    <ul className='space-y-3 mt-5'>
      <li className='text-gray-500 text-sm flex text-center'><AiOutlineCheck/>Data Analytics</li>
      <li className='text-gray-500 text-sm flex text-center'><AiOutlineCheck/>Visualization</li>
      <li className='text-gray-500 text-sm flex text-center'><AiOutlineCheck/>Pandas, Numpy, TF</li>
      <li className='text-gray-500 text-sm flex text-center'><AiOutlineCheck/>Machine Learning</li>
      <li className='text-gray-500 text-sm flex text-center'><AiOutlineCheck/>Deep Learning</li>
    </ul>
  </div>
</div>
{/* 4 */}
<div className=' p-5 border rounded-2xl '>
  <p className='text-lg font-semibold'>Cloud and DevOps</p>
  <p className='text-sm'>Emerging new technology to speedify development</p>
  <button className='bg-indigo-500 text-white font-medium w-full mt-2 rounded-md'>170+ hours of live classes</button>
  <div className='mt-3'>
    <p className='border-t-2 font-bold text-sm'>WHAT&#39;S INCLUDED</p>
    <ul className='space-y-3 mt-5'>
      <li className='text-gray-500 text-sm flex text-center'><AiOutlineCheck/>Core Devops</li>
      <li className='text-gray-500 text-sm flex text-center'><AiOutlineCheck/>Pipelines</li>
      <li className='text-gray-500 text-sm flex text-center'><AiOutlineCheck/>CI/CD</li>
      <li className='text-gray-500 text-sm flex text-center'><AiOutlineCheck/>Kubernetes</li>
      <li className='text-gray-500 text-sm flex text-center'><AiOutlineCheck/>AWS, GCP, Azure</li>
    </ul>
  </div>
</div>
</div>
</div>

<div className='p-5'>
<h1 className='text-2xl font-bold text-center'>All-in-one Learning Platform</h1>
<p className='text-base md:text-center text-gray-500'>All the programs are delivered over LearnifyMe, which makes it easier to study, practice &#38; revise the concepts taught in live classes.</p>
<div className='grid grid-rows-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-5'>

<p className='flex  font-semibold'><AiOutlineCheck/>Outcome &#38; mentor driven learning</p>
<p className='flex  font-semibold'><AiOutlineCheck/>Coding Assignments</p>
<p className='flex  font-semibold'><AiOutlineCheck/>Capstone projects with startups</p>
<p className='flex  font-semibold'><AiOutlineCheck/>Session Recordings</p>
<p className='flex  font-semibold'><AiOutlineCheck/>Guaranteed Job Placements</p>
<p className='flex  font-semibold'><AiOutlineCheck/>Customized learning content</p>
<p className='flex  font-semibold'><AiOutlineCheck/>Structured pedagogy</p>
<p className='flex  font-semibold'><AiOutlineCheck/>Learning by doing</p>
</div>


</div>




<Footer/>
</div>
  )
}

export default College