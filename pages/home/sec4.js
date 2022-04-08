
import React from 'react'
import {ImKey} from 'react-icons/im';
import {GiTechnoHeart} from 'react-icons/gi';
import {BsFillPeopleFill} from 'react-icons/bs';
import {BsStars} from 'react-icons/bs';

function Section4() {
  return (
    <div className='mt-[510px] md:mt-52'>
        <div>
        <h1 className='text-lg  md:text-5xl text-center font-extrabold'>Learning Programs</h1>
        <p className='text-sm md:text-lg text-center p-4 text-slate-500 md:pl-40 md:pr-40 md:mt-5'>Deploy customized digital learning solutions that enable a holistic approach to learning & 
            development with an array of new hire bootcamps, lateral deep skilling programs and managed 
            learning services.</p>

            
            <div className=' md:p-20 mt-5 md:flex'>

            <div className=' md:flex-row md:space-y-5 p-3 md:p-1'>
              <div className='flex items-center '>
                <ImKey className=' text-indigo-700 w-14 h-14  rounded-lg '/>
                    <div className='p-5 md:p-3'>
                    <h1 className='text-lg font-semibold flex'>Outcome Driven FSD Bootcamps</h1>
                    <p className=' text-xs md:text-sm text-slate-500'>We offer comprehensive learning programs on Full stack development, 
                        Devops & Cloud Engineering, AI/ML, Data Science, Cyber Security, Agile Leadership & Product Management</p>
                    </div>
                </div>
                
                <div className='flex items-center '>
                <GiTechnoHeart className='text-indigo-700 w-10 h-10 md:w-14 md:h-14  rounded-lg '/>
                    <div className='p-5 md:p-3'>
                    <h1 className='text-lg font-semibold flex'>Technical Programs for Architects</h1>
                    <p className=' text-xs md:text-sm text-slate-500'>We believe in learning by doing with emphasis on bringing experential immersive capstone projects</p>
                    </div>
                </div>
            </div>

            <div>
            <div className='md:flex-row md:space-y-5 p-3 md:p-1'>

            <div className='flex items-center '>
                <BsStars className=' text-indigo-700 w-14 h-14  rounded-lg '/>
                    <div className='p-5 md:p-3'>
                    <h1 className='text-lg font-semibold flex'>Leadership Training Programs</h1>
                    <p className='text-xs md:text-sm text-slate-500'>Indepth learning management & tracking with insights on SWOT analysis for each learner,
                     topic wise coverage, leaderboard, daily and weekly quiz and assignments</p>
                    </div>
                </div>

              <div className='flex items-center '>
                <BsFillPeopleFill className='text-indigo-700 w-10 h-10 md:w-14 md:h-14  rounded-lg '/>
                    <div className='p-5 md:p-3'>
                    <h1 className='text-lg font-semibold flex'>Developer Solutions for Multi Skilled Engineers</h1>
                    <p className='text-xs md:text-sm text-slate-500'>Our learning programs are bespoke which can be customized to meet 
                    your specific business requirements</p>
                    </div>
                </div>
                

            </div>
            </div>

            </div>
        </div>
    </div>
  )
}

export default Section4 