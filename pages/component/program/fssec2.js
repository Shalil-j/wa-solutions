import React,{useState} from 'react'
import {AiOutlineCheck} from 'react-icons/ai'


function Sec2() {

  const [cards,setCard]=useState(true)
  
  let card1
  let card2
  if(cards){
card1=<div className='grid grid-col-3 grid-flow-col gap-5 pb-10 pl-28 pr-28 pt-10'>

<div className='bg-white bg-opacity-10 pt-5 space-y-3 text-white hover:text-indigo-700 hover:bg-opacity-100 h-64 transition duration-700 ease-in-out rounded-xl'>
<h1 className='text-base font-semibold '>CTC ₹5 TO ₹10 LPA</h1>

<h1 className='text-3xl font-extrabold border-b-2 border-dashed p-2'> ₹10,000<span clas className='text-xs '>per month</span></h1>
<div className='mt-5'>
<p className='text-sm flex text-left pl-5 p-2 mt-5 space-x-5'><AiOutlineCheck className='h-5 w-5'/> Paid Monthly for 12 Months</p>
<p className='text-sm flex text-left pl-5 mt-5 space-x-5'> <AiOutlineCheck/>Pay after you get placed</p>
<p className='text-sm flex text-left pl-5 mt-5 space-x-5 '><AiOutlineCheck/>Total Amount Payable - ₹1,20,000 + GST</p>
</div>
</div>

<div className='bg-white bg-opacity-10 pt-5 space-y-3 text-white hover:text-indigo-700 hover:bg-opacity-100 h-64 transition duration-700 ease-in-out rounded-xl'>
<h1 className='text-base font-semibold '>CTC ₹10 TO ₹18 LPA</h1>

<h1 className='text-3xl font-extrabold border-b-2 border-dashed p-2'>₹15,000

<span clas className='text-xs '>per month</span></h1>
<div className='mt-5'>
<p className='text-sm flex text-left pl-5 p-2 mt-5 space-x-5'><AiOutlineCheck className='h-5 w-5'/> Paid Monthly for 12 Months</p>
<p className='text-sm flex text-left pl-5 mt-5 space-x-5'> <AiOutlineCheck/>Pay after you get placed</p>
<p className='text-sm flex text-left pl-5 mt-5 space-x-5 '><AiOutlineCheck/>Total Amount Payable - ₹1,80,000 + GST</p>
</div>
</div>

<div className='bg-white bg-opacity-10 pt-5 space-y-3 text-white hover:text-indigo-700 hover:bg-opacity-100 h-64 transition duration-700 ease-in-out rounded-xl'>
<h1 className='text-base font-semibold '>CTC &gt; ₹18 LPA</h1>

<h1 className='text-3xl font-extrabold border-b-2 border-dashed p-2'>₹20,000<span clas className='text-xs '>per month</span></h1>
<div className='mt-5'>
<p className='text-sm flex text-left pl-5 p-2 mt-5 space-x-5'><AiOutlineCheck className='h-5 w-5'/> Paid Monthly for 12 Months</p>
<p className='text-sm flex text-left pl-5 mt-5 space-x-5'> <AiOutlineCheck/>Pay after you get placed</p>
<p className='text-sm flex text-left pl-5 mt-5 space-x-5 '><AiOutlineCheck/>Total Amount Payable - ₹2,40,000 + GST</p>
</div>
</div>
</div>
  }
  card2=      <div className='flex place-content-center pb-10'>
  <div className='mt-10 w-80 bg-white bg-opacity-10 pt-5 space-y-3 text-white hover:text-indigo-700 hover:bg-opacity-100 h-64 transition duration-700 ease-in-out rounded-xl'>
  <h1 className='text-base font-semibold '>AT COURSE START</h1>
  
  <h1 className='text-3xl font-extrabold border-b-2 border-dashed p-2'>₹49,999<span clas className='text-xs '>one time payment</span></h1>
  <div className='mt-5'>
  <p className='text-sm flex text-left pl-5 p-2 mt-5 space-x-5'><AiOutlineCheck className='h-5 w-5'/> 0 Cost EMI options available</p>
  <p className='text-sm flex text-left pl-5 mt-5 space-x-5'> <AiOutlineCheck/>No Additional Payment after placement</p>
  <p className='text-sm flex text-left pl-5 mt-5 space-x-5 '><AiOutlineCheck/>GST Extra Applicable</p>
  </div>
  </div>
  </div>

  return (
    <div>
    <div className='text-center h-auto bg-indigo-700 mt-10 '>
        <h1 className='text-5xl pt-10 font-bold text-white'>Flat pricing, No percentage, No Problems</h1>
        <p className='text-gray-300 mt-1'>You pay according to the package you get when you get placed in easy monthly</p>

        <div class="flex items-center mt-2 justify-center">
  <div class="inline-flex focus:shadow-lg" role="group">
    <button onClick={()=>setCard(true)} type="button" class="rounded-l inline-block px-6 py-2.5 bg-indigo-600 text-white font-medium text-xs leading-tight uppercase hover:bg-white hover:text-indigo-700 focus:bg-blue-700 focus:outline-none focus:ring-0 active:bg-white transition duration-150 ease-in-out">Pay After Placement</button>
    <button onClick={()=>setCard(false)} type="button" class=" rounded-r inline-block px-6 py-2.5 bg-indigo-600 text-white font-medium text-xs leading-tight uppercase hover:bg-white focus:bg-blue-700 focus:outline-none hover:text-indigo-700 focus:ring-0 active:bg-white transition duration-150 ease-in-out">Pay Upfront</button>
  </div>
</div>
{/* card */}
<div>
  {cards? card1 : card2}
</div>
    </div>
    <div className='flex p-10 justify-between'>
    <p className='text-4xl font-extrabold text-indigo-700 '>Do you know someone, who needs this program?<br />
<span className='text-black'>Refer Now and earn 5000 Rs per refferal.</span></p>
<button className='bg-indigo-700 h-10 px-4 text-semibold mt-10 text-white rounded-full  py-2'>Refer Now!</button>
</div>
    </div>
  )
}

export default Sec2

{/*  */}