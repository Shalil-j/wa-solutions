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
