import Error from './assets/404l.json'
import Link from 'next/link'
import Lottie from 'react-lottie-player'

const NotFound=()=>{
    return(
        <div >
            <div className='h-20'></div>
            <div className='h-96 justify-center flex'>
            <Lottie
      loop
      animationData={Error}
      play
    />
   
            </div>
            <p className='font-semibold text-lg text-center'>Go back to <Link href='/'><span className='hover:text-indigo-700 courser-pointer'>Home</span></Link></p>
        </div>
    )
}
export default NotFound
{/* <div className='text-center pt-20'>
<h1 className='text-[200px] text-indigo-700 font-extrabold'>404</h1>
<p className='font-semibold text-lg'>Page not Found</p>
<p className='font-semibold text-lg'>Go back to<Link href='/' className='hover:text-indigo-900'> HOME</Link></p>
</div> */}


{/* <Lottie
      loop
      animationData={Error}
      play
    /> */}