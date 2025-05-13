import React from 'react'
import Partner1 from '../../public/assets/partner1.png'
import Partner2 from '../../public/assets/partner2.png'
import Partner3 from '../../public/assets/partner3.png'
import Partner4 from '../../public/assets/partner4.png'
import Partner5 from '../../public/assets/partner5.png'
import Partner6 from '../../public/assets/partner6.png'
import Partner7 from '../../public/assets/partner7.png'
import Partner8 from '../../public/assets/partner8.png'
import Image from 'next/image'

const Partners = () => {
    return (
        <div className='my-[50px]'>
            <h2 className='uppercase text-center font-black text-title mb-10'>our partner</h2>
            <div className="flex flex-col flex-wrap justify-center items-center gap-12 sx:flex-row small:flex-row md:flex-row">
                <div className="w-[100px] relative h-[100px] rounded-full overflow-hidden ">
                    <Image className='w-full h-full object-cover' src={Partner1} alt="parnters" />
                </div>
                <div className="w-[100px] relative h-[100px] rounded-full overflow-hidden ">
                    <Image className='w-full h-full object-cover' src={Partner2} alt="parnters" />
                </div>
                <div className="w-[100px] relative h-[100px] rounded-full overflow-hidden ">
                    <Image className='w-full h-full object-cover' src={Partner3} alt="parnters" />
                </div>

                <div className="w-[100px] relative h-[100px] rounded-full overflow-hidden ">
                    <Image className='w-full h-full object-cover' src={Partner4} alt="parnters" />
                </div>
                <div className="w-[100px] relative h-[100px] rounded-full overflow-hidden ">
                    <Image className='w-full h-full object-cover' src={Partner5} alt="parnters" />
                </div>
                <div className="w-[100px] relative h-[100px] rounded-full overflow-hidden ">
                    <Image className='w-full h-full object-cover' src={Partner6} alt="parnters" />
                </div>
                <div className="w-[100px] relative h-[100px] rounded-full overflow-hidden ">
                    <Image className='w-full h-full object-cover' src={Partner7} alt="parnters" />
                </div>
                <div className="w-[100px] relative h-[100px] rounded-full overflow-hidden ">
                    <Image className='w-full h-full object-cover' src={Partner8} alt="parnters" />
                </div>
            </div>
        </div>
    )
}

export default Partners