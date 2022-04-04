import Image from 'next/image'
import React ,{useState} from 'react'
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import l1 from '../assets/1.png'
import l2 from '../assets/2.png'
import l3 from '../assets/3.png'
import l4 from '../assets/4.png'
import l5 from '../assets/5.png'



function Section2() {
  const [arrow,setArrow]=useState(false)


  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    },
    
    
  };

  return (
    <div className=' text-center mt-48 md:mt-0  h-60'>
        <h1 className="uppercase text-base md:text-xl font-bold text-slate-500 mt-5">Trusted by TOP Organization</h1>
        <div className='mt-10 p-10'>
        <Carousel responsive={responsive}
        
  swipeable={false}
  draggable={false}
  showDots={false}
  infinite={true}
  autoPlaySpeed={1000}
  keyBoardControl={true}
  customTransition="all .5"
  transitionDuration={500}
  containerClass="carousel-container"
  removeArrowOnDeviceType={["tablet", "mobile"]}
  dotListClass="custom-dot-list-style"
  itemClass="carousel-item-padding-40-px"
  arrows={arrow}
        
        >
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
  </Carousel> 

  </div>
  <button type='radio' className="border text-white border-gray-200 rounded-md p-2 hover:text-white hover:bg-indigo" onClick={()=>{setArrow(!arrow)}}></button>
    </div>
  )
}

export default Section2