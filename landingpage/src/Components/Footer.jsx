import React from 'react'
import Footerimg from '../assets/footer.png'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'


const Footer = () => {
  return (
    <div className='mt-[65px] min-h-[365px] grid grid-cols-1 md:grid-cols-3 gap-4 justify-items-center place-items-center p-5' style={{ backgroundImage: `url(${Footerimg})`, backgroundPosition: 'center', backgroundSize: 'cover' }}>
      <div className="text-descsize flex flex-col lg:items-start items-center mt-5 gap-5 uppercase text-white">
        <h2 className='font-lilita  text-[50px]'>LOGO</h2>
        <span>Home</span>
        <span>Our Features</span>
        <span>Contact</span>
      </div>
      <div className="text-descsize flex flex-col items-center lg:items-start gap-5 uppercase text-white">
        <h2 className='text-descsize lg:text-title'>XYZ company</h2>
        <span className='text-sm lg:text-descsize'>Home</span>
        <span className='text-sm lg:text-descsize'>Our Features</span>
        <span className='text-sm lg:text-descsize'>Contact</span>
      </div>
      <div className="text-sm gap-5 flex flex-col  items-center text-white">
        <h2 className='text-descsize lg:text-title'>@2025-XYZ COMPANY</h2>
        <div className="flex items-center justify-center md:flex-row gap-14">
          <span><FaFacebook size='24px' /></span>
          <span><FaInstagram size='24px' /></span>
          <span><FaTwitter size='24px' /></span>
        </div>
      </div>
    </div>
  )
}

export default Footer