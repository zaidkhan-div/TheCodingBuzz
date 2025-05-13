import React from 'react'
import Image from 'next/image'

const TwoDivComp = ({ title, para, img, reverse = false }) => {

    return (
        <div className={`flex flex-col md:flex-row items-center justify-between ${reverse ? "md:flex-row-reverse" : ""}`}>
            <div className='w-full max-w-[534px] space-y-2 p-2'>
                {title && <h2 className='text-center md:text-left text-2xl font-bold'>{title}</h2>}
                {para && <p className='text-center md:text-left text-desc text-xl Montserrat'>{para}</p>}
            </div>
            <div className='w-full relative max-w-[607px] h-[380.17px]'>
                {img && <Image className='w-full h-full object-contain' src={img} alt="Picture of the author" fill />}
            </div>
        </div>
    )
}

export default TwoDivComp