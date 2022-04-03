import React from 'react'
import {AiOutlineQrcode} from 'react-icons/ai';
import {MdAutoGraph} from 'react-icons/md';
import {FiShoppingCart} from 'react-icons/fi';
import {AiFillPieChart} from 'react-icons/ai';

function Section5() {
  return (
    <div  className='bg-gradient-to-r from-rose-700 to-indigo-700 h-auto w-full'>
        <h1 className='text-4xl text-center pt-5 text-slate-100 font-bold'>Learning Accelerator for your Organization</h1>
        <p className='text-center mt-3 text-base font-semibold text-slate-300'>Accelerate the learning journey of your employees to give them knowledge of latest technologies going on in market.</p>
        <div className='grid grid-row-4 grid-flow-col pl-24 pr-24 pt-10 pb-10 gap-4'>

        <div className='bg-white bg-opacity-30 h-auto item-center text-center justify-center rounded-xl p-3'>
          <AiOutlineQrcode className='w-10 h-10 p-1  text-white  '/>
          <h1 className='text-xl text-white font-semibold mt-3 '>Structured pedagogy</h1>
          <p className='text-sm text-slate-300'>We offer comprehensive learning programs on Full stack development, Devops & Cloud Engineering, AI/ML, Data Science, Cyber Security, Agile Leadership & Product Management</p>
        </div>

        <div className='bg-white bg-opacity-30 h-auto item-center text-center justify-center rounded-xl p-3'>
        <MdAutoGraph className='w-10 h-10 p-1  text-white '/>
          <h1 className='text-xl text-white font-semibold '>Customized Learning path</h1>
          <p className='text-sm text-slate-300'>Our learning programs are bespoke which can be customized to meet your specific business requirements</p>
        </div>

        <div className='bg-white bg-opacity-30 h-auto item-center text-center justify-center rounded-xl p-3'>
        <FiShoppingCart className='w-10 h-10 p-1  text-white '/>
          <h1 className='text-xl text-white font-semibold '>Captsone projects</h1>
          <p className='text-sm text-slate-300'>We believe in learning by doing with emphasis on bringing experential immersive capstone projects</p>
        </div>

        <div className='bg-white bg-opacity-30 h-auto item-center text-center justify-center rounded-xl p-3'>
        <AiFillPieChart className='w-10 h-10 p-1  text-white '/>
          <h1 className='text-xl text-white font-semibold '>Reporting & Analytics</h1>
          <p className='text-sm text-slate-300'>Indepth learning management & tracking with insights on SWOT analysis for each learner, topic wise coverage, leaderboard, daily and weekly quiz and assignments</p>
        </div>
        </div>
    </div>
  )
}

export default Section5