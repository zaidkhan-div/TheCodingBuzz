import React, { useState } from 'react'
import logo from '../assets/Logo_Quality.png'
import { FaSearch, FaCartArrowDown, FaHamburger, FaTimes } from 'react-icons/fa'

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <>
            <div className='w-full bg-[#005A2F] text-white text-center uppercase p-5 rounded-b-[40px] Montserrat text-sm lg:text-title'>
                Did you know big valley produce offers HOME DELIVERY ?
            </div>

            {/* Mobile Menu Overlay */}
            <div className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'} lg:hidden`}
                onClick={() => setIsMenuOpen(false)}>
            </div>
            {/* Mobile Menu */}
            <div className={`fixed top-0 left-0 h-full w-64 bg-white z-50 shadow-lg transform transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} lg:hidden`}>
                <div className="p-4 flex justify-end">
                    <button onClick={() => setIsMenuOpen(false)} aria-label='Button'>
                        <FaTimes size='30px' color='#005A2F' />
                    </button>
                </div>
                <div className="flex flex-col gap-5 uppercase text-lg font-bold p-5 text-[#005A2F]">
                    <span><a href="#home" onClick={() => setIsMenuOpen(false)}>home</a></span>
                    <span><a href="#chooseUs" onClick={() => setIsMenuOpen(false)}>Our feature</a></span>
                    <span><a href="#contact" onClick={() => setIsMenuOpen(false)}>contact us</a></span>
                    <button onClick={() => setIsMenuOpen(false)} className='w-40 h-10 lg:w-64 lg:h-12 text-white uppercase rounded-full bg-[#86AF35] text-sm lg:text-title'>
                        start your order
                    </button>
                </div>
            </div>

            <div className="w-full max-w-[1340px] mx-auto px-5 flex justify-between items-center mt-5">
                <div className="lg:hidden">
                    <button onClick={() => setIsMenuOpen(true)}>
                        <FaHamburger size='30px' color='#005A2F' />
                    </button>
                </div>
                <div className="hidden w-[356px] lg:flex gap-5 uppercase text-lg font-bold">
                    <span><a href="#home">home</a></span>
                    <span><a href="#chooseUs">Our feature</a></span>
                    <span><a href="#contact">contact us</a></span>
                </div>
                <div className="text-3xl lg:text-5xl font-bold text-[#005A2F] font-lilita uppercase w-[123px]">
                    {/* L<span className='text-secondary'>o</span>g<span className='text-secondary'>o</span> */}
                    <img src={logo} fetchPriority='low' loading='lazy' alt="Logo_Image" />
                </div>
                <div className='hidden md:flex justify-between items-center gap-5'>
                    <button className='w-40 h-10 lg:w-64 lg:h-12 text-white uppercase rounded-full bg-[#86AF35] text-sm lg:text-title'>
                        start your order
                    </button>
                    <div className='hidden lg:flex items-center gap-5'>
                        <FaSearch size='30px' className='text-primary' />
                        <FaCartArrowDown size='30px' className='text-primary' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header