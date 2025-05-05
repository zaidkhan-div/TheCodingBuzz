import React from 'react'
import Heroimg1 from '../assets/Hero.png'
import Heroimg2 from '../assets/hero2.png'

const HeroSection = () => {
    return (
        <div className='w-full max-w-[1372px] mx-auto px-4'>
            <div className="bg-cover bg-center h-[587.56px] flex flex-col items-center justify-center text-[64px] font-bold text-white text-center font-mono mt-5" style={{ backgroundImage: `url(${Heroimg2})`, backgroundImage: `url(${Heroimg1})` }}>
                <h1><span className='font-lilyScript'>Welcome to </span><br /><span className='font-lilita'>XYZ PRODUCE</span></h1>
                <button className='btn uppercase rounded-full bg-[#86AF35] w-40 h-12 lg:w-[352px] h-[60px] 
                 text-sm text-white lg:text-title'>contact us</button>
            </div>
        </div>
    )
}

export default HeroSection