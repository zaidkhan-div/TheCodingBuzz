import React from 'react'
import { FaSearch, FaCartArrowDown, FaHamburger } from 'react-icons/fa'
const Header = () => {
    return (
        <>
            <div className='w-full bg-[#005A2F] text-white text-center uppercase p-5 rounded-b-[40px] Montserrat text-sm lg:text-title'>
                Did YOU KNOW xyz offers HOME DELIVERY?
            </div>
            <div className="w-full max-w-[1340px] mx-auto px-4 flex justify-between items-center mt-5">
                {/* Hamburger (mobile) */}
                <div className="lg:hidden">
                    <button><FaHamburger size='30px' color='#005A2F' /></button>
                </div>
                {/* Logo */}
                <div className="text-3xl lg:text-5xl font-bold text-[#005A2F] font-lilita uppercase mx-auto lg:mx-0">
                    L <span className='text-secondary'>o</span>g <span className='text-secondary'>o</span>
                </div>

                {/* Desktop Menu */}
                <div className="hidden lg:flex gap-5 uppercase text-lg font-bold">
                    <span>home</span>
                    <span>Our feature</span>
                    <span>contact us</span>
                </div>

                {/* Button + Icons (desktop) */}
                <button className='w-40 h-10 lg:w-64 lg:h-12 text-white uppercase rounded-full bg-[#86AF35] text-xs lg:text-title'>
                    start your order
                </button>
                <div className='hidden lg:flex items-center gap-5'>
                    <FaSearch size='30px' className='text-primary' />
                    <FaCartArrowDown size='30px' className='text-primary' />
                </div>
            </div>
        </>
    )
}

export default Header

// <div className="min-w-[1340px] lg:flex justify-between mx-auto items-center mt-5">
{/* <div className="hidden lg:flex gap-5 uppercase text-[18px] font-bold">
<span>home</span>
<span>Our feature</span>
<span>contact us</span>
</div>
<div className="text-[50px] font-bold text-[#005A2F] font-lilita uppercase">L <span className='text-secondary'>o</span>g <span className='text-secondary'>o</span></div>
<div className="btn"><button className='btn w-[274.88px] h-[48px] text-white uppercase rounded-full bg-[#86AF35] text-[20px] '>start your order</button></div>
<div className="hidden lg:flex items-center gap-5">
<FaSearch size='30px' className='text-primary' />
<FaCartArrowDown size='30px' className='text-primary' />
</div>
</div> */}