import React from 'react'
import midimg from '../../public/assets/midImg.png'
import QuotesImg from '../../public/assets/quotes.png'
import Image from 'next/image'

const MidSection = () => {
    return (
        <div className="flex flex-col items-center justify-center space-y-10 my-[80px] relative min-h-[560px]  2xl:min-h-[1000px]">
            <Image src={midimg} fill alt='Midimage' className='-z-10 object-cover bg-center bg-no-repeat' />
            <Image className='h-[120px] w[120px]' src={QuotesImg} alt="Food-Blogger" />
            <p className='w-full lg:max-w-[50%] text-2xl text-white font-bold text-center'>
                Incredible team with a passion for what they do. Their dedication, creativity, and professionalism truly stand out. A pleasure to work with!
            </p>
            <div className='mt-5'>
                <h1 className='text-white text-2xl font-bold'>-James L.</h1>
                <p className='text-white text-lg'>Food Blogger</p></div>
        </div>

    )
}

export default MidSection