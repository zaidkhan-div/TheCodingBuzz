import React from 'react'
import Image from 'next/image'
import Footerimg from '../../public/assets/footer.png'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'

const Footer = () => {
    return (
        <div className='relative mt-[65px] min-h-[365px] p-5'>

            <div className='absolute inset-0 -z-10'>
                <Image
                    src={Footerimg}
                    alt='Footer Background'
                    layout='fill'
                    objectFit='cover'
                    quality={100}
                />
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center place-items-center relative z-10'>
                <div className="text-lg flex flex-col lg:items-start items-center mt-5 gap-5 uppercase text-white">
                    <h2 className='font-[LilitaOne] text-[50px]'>LOGO</h2>
                    <span>Home</span>
                    <span>Our Features</span>
                    <span>Contact</span>
                </div>
                <div className="text-lg flex flex-col items-center lg:items-start gap-5 uppercase text-white">
                    <h2 className='text-lg lg:text-2xl'>Big Valley PRODUCE</h2>
                    <span className='text-sm lg:text-lg'>Address: Washington DC,</span>
                    <span className='text-sm lg:text-lg'>Phone #: 0123-1234-5678</span>
                    <span className='text-sm lg:text-lg'>Email: info@xyz.com</span>
                </div>
                <div className="text-sm gap-5 flex flex-col items-center text-white">
                    <h2 className='text-lg lg:text-2xl'>@2025-Big Valley PRODUCE</h2>
                    <div className="flex items-center justify-center md:flex-row gap-14">
                        <span><FaFacebook size='24px' /></span>
                        <span><FaInstagram size='24px' /></span>
                        <span><FaTwitter size='24px' /></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer