import Image from 'next/image'
import React from 'react'

import l1 from '../assets/1.png'
import l2 from '../assets/2.png'
import l3 from '../assets/3.png'
import l4 from '../assets/4.png'
import l5 from '../assets/5.png'



function Section2() {
  
  return (
    <div className=' text-center mt-28 md:mt-0  h-auto'>
        <h1 className="uppercase text-base md:text-xl font-bold text-slate-500 mt-5">Trusted by TOP Organization</h1>
        <div className='mt-10 p-10'>
  <div className='grid grid-cols-2 gap-4 grid-flow-row
    md:flex md:space-x-10 items-center md:justify-between'>
  <div>
    <Image
    src={l1}
    width={100}
    height={80}
    alt='logo1'
    />
  </div>
  <div>
  <Image
    src={l2}
    width={120}
    height={50}
    alt='logo2'
    />
  </div>
  <div>
  <Image
    src={l3}
    width={225}
    height={80}
    alt='logo3'
    />
  </div>
  <div>
  <Image
    src={l4}
    width={180}
    height={60}
    alt='logo4'
    />
  </div>
  <div>
  <Image
    src={l5}
    width={100}
    height={90}
    alt='logo5'
    />
  </div>
  </div>

  </div>
    </div>
  )
}

export default Section2