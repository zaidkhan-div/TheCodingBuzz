import React from 'react'
import Partner1 from '../assets/partner1.webp'
import Partner2 from '../assets/partner2.webp'
import Partner3 from '../assets/partner3.webp'
import Partner4 from '../assets/partner4.webp'
import Partner5 from '../assets/partner5.webp'
import Partner6 from '../assets/partner6.webp'
import Partner7 from '../assets/partner7.webp'
import Partner8 from '../assets/partner8.webp'

const Partners = () => {


    return (
        <div className='my-[50px]'>
            <h2 className='uppercase text-center font-black text-title mb-10'>our partner</h2>
            <div className="flex flex-col flex-wrap justify-center items-center gap-12 sx:flex-row small:flex-row md:flex-row">
                <div className="w-[100px] h-[100px] rounded-full overflow-hidden ">
                    <img className='w-full h-full object-cover' src={Partner1} alt="parnters" />
                </div>
                <div className="w-[100px] h-[100px] rounded-full overflow-hidden ">
                    <img className='w-full h-full object-cover' src={Partner2} alt="parnters" />
                </div>
                <div className="w-[100px] h-[100px] rounded-full overflow-hidden ">
                    <img className='w-full h-full object-cover' src={Partner3} alt="parnters" />
                </div>

                <div className="w-[100px] h-[100px] rounded-full overflow-hidden ">
                    <img className='w-full h-full object-cover' src={Partner4} alt="parnters" />
                </div>
                <div className="w-[100px] h-[100px] rounded-full overflow-hidden ">
                    <img className='w-full h-full object-cover' src={Partner5} alt="parnters" />
                </div>
                <div className="w-[100px] h-[100px] rounded-full overflow-hidden ">
                    <img className='w-full h-full object-cover' src={Partner6} alt="parnters" />
                </div>
                <div className="w-[100px] h-[100px] rounded-full overflow-hidden ">
                    <img className='w-full h-full object-cover' src={Partner7} alt="parnters" />
                </div>
                <div className="w-[100px] h-[100px] rounded-full overflow-hidden ">
                    <img className='w-full h-full object-cover' src={Partner8} alt="parnters" />
                </div>
            </div>
        </div>
    )
}

export default Partners