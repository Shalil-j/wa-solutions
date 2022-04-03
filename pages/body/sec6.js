import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'
import { useState } from 'react'; 
// import Comments from './component/comments'

function Section6() {
   const [comments,setcomments]=useState([
        {name:'shalil',comments:"The course was very comprehensive and easy to understand. The instructors made sure that they are giving the information in a way that won't make me confused. Thank you so much for this great course!",date:'17/02/21'},
        {name:'Rishab',comments:"A detailed review of one of the most important skills in academic research: information seeking. In particular, I enjoyed the tutorials on Mendeley and reference management tools. Highly recommended!",date:'11/03/22'},
        {name:'Aakash',comments:"This course has taught me a lot of techniques in searching information for my  academic researches. Thank you to all people behind this, especially to the professors in this course! ",date:'09/11/22'},
        {name:'Ganesh',comments:"This course is truly one of a kind. Am a matured student planning to go back to study. Trying to navigate and prepare myself for the academic world. This course gave me the necessary tools and insights on what is needed to search and present a good paper. Highly recommend!",date:'23/12/21'},
        {name:'Ankul',comments:"This course taught me enormous tips and tricks of information seeking. This helped me understand the core of information seeking and searching, evaluating, citing and avoiding plagiarism. I really thankful to the instructors.",date:'06/06/21'},
    ])
  return (

    <div className=''>
        <h1 className='text-3xl text-center font-semibold mt-5 '>Reviews</h1>
        <Carousel labels='' infiniteLoop='true' autoPlay='true'interval="5000" width='80' transitionTime='2000' 
        showArrows='false' showStatus='false' autoFocus='true' showIndicators='false' showThumbs='false'>
    {comments.map((com)=>{
        return(
            <div key={com.name} className=' h-60 mt-10 pb-10'>
                <div className='bg-white shadow-xl  border inline-block align-middle p-3 w-1/3  rounded-xl'>
            <p className="text-sm font-thin text-left  ">{com.comments}</p>
            <p className='font-semibold inline-block text-right'>{com.name}</p><br/>
            <p className='text-xs inline-block align-bottom text-right'>{com.date}</p>
            </div>
            </div>
        )
    })}
    </Carousel>
    </div>
  )
}

export default Section6