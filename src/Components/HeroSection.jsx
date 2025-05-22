import React from 'react';
import Heroimg1 from '../../src/assets/Hero.webp';
import mblHero from '../../src/assets/Mobile_Hero.webp'

const HeroSection = () => {
    return (
        <div id='home' className='w-full max-w-[1372px] mx-auto mt-2 px-4 relative h-[587.56px]'>
            <picture>
                <source media="(max-width: 768px)" srcSet={mblHero} />
                <source media="(min-width: 769px)" srcSet={Heroimg1} />
                <img
                    src={Heroimg1}
                    alt="HeroImage"
                    width="1372"
                    height="587"
                    className="absolute top-0 left-0 w-full h-full object-cover -z-10"
                    fetchpriority="high"
                    decoding="async"
                />
            </picture>
            <div className="flex flex-col items-center justify-center h-full text-6xl lg:text-[64px] font-bold text-white text-center font-mono">
                <h1><span className='font-lilyScript'>Welcome to </span><br /><span className='font-lilita'>Big Valley PRODUCE</span></h1>
                <button className='btn uppercase rounded-full bg-[#86AF35] w-52 lg:w-[352px] h-[60px] 
                 text-title text-white lg:text-title'><a href="#contact">contact us</a></button>
            </div>
        </div>

    );
};

export default HeroSection;