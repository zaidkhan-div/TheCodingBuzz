import React from 'react'
import Footerimg from '../assets/footer.webp'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
import Footer_logo from '../assets/Logo_Quality.png'

const Footer = () => {
  return (
    <div className='mt-[65px] min-h-[365px] grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center place-items-center p-5' style={{ backgroundImage: `url(${Footerimg})`, backgroundPosition: 'center', backgroundSize: 'cover' }}>
      <div className="text-descsize flex flex-col lg:items-start items-center mt-5 gap-5 uppercase text-white">
        <div className="w-[123px]">
          <img src={Footer_logo} alt="Footer_logo" />
        </div>
        <span>Home</span>
        <span>Our Features</span>
        <span>Contact</span>
      </div>
      <div className="text-descsize flex flex-col items-center lg:items-start gap-10 uppercase text-white">
        <h2 className='text-descsize lg:text-title'>Big Valley PRODUCE</h2>
        <span className='text-sm lg:text-descsize'>Address: Washington DC,</span>
        <span className='text-sm lg:text-descsize'>Phone #: 202-544-7500</span>
        <span className='text-sm lg:text-descsize'>Email: info@xyz.com</span>
      </div>
      <div className="text-sm gap-5 flex flex-col  items-center text-white">
        <h2 className='text-descsize lg:text-title'>@2025-Big Valley PRODUCE</h2>
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