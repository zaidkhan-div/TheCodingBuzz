import React from 'react'
import Image from 'next/image'
import Heroimg1 from '../../public/assets/Hero.png'



const HeroSection = () => {
    return (
        <div className="relative h-[587px] mt-5">
            <Image src={Heroimg1} alt="Hero" fill className="object-cover lg:object-contain -z-10" priority/>
            <div className="flex flex-col items-center justify-center h-full text-5xl lg:text-[64px] font-bold text-white text-center font-mono">
                <h1><span className='font-[LilitaOne]'>Welcome to </span><br /><span className='font-lilita'>Big Valley PRODUCE</span></h1>
                <button className='btn uppercase rounded-full bg-[#86AF35] px-6 pt-3 text-sm sm:text-3xl '><a href="#contact">contact us</a></button>
            </div>
        </div>

    )
}

export default HeroSection