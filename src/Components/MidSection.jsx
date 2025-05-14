import React from 'react'
import midimg from '../assets/midImg.webp'
import QuotesImg from '../assets/quotes.webp'

const MidSection = () => {
    return (
        <div className="flex flex-col items-center justify-center space-y-10 my-[80px] min-h-[560px] 3xl:min-h-[1000px]" style={{ backgroundImage: `url(${midimg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <img className='h-[120px] w[120px]' src={QuotesImg} alt="Food-Blogger" />
            <p className='w-full lg:max-w-[50%] text-title text-white font-bold text-center'>
                Incredible team with a passion for what they do. Their dedication, creativity, and professionalism truly stand out. A pleasure to work with!
            </p>
            <div className='mt-5'>
                <h1 className='text-white text-title font-bold'>-James L.</h1>
                <p className='text-white text-descsize'>Food Blogger</p></div>
        </div>

    )
}

export default MidSection