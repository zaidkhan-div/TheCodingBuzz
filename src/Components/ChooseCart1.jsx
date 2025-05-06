import React from 'react'
import { AiOutlineSafety } from "react-icons/ai";
import Divider from './Divider';

const ChooseCart = () => {
    return (
        <div id='chooseUs' className='mt-[80px] mb-[100px] '>
            <h2 className='text-title text-center text-black mb-[50px] font-black uppercase Montserrat '>why choose us?</h2>
            <div className='flex flex-col md:flex-row justify-between items-center'>
                <div className="flex flex-col items-center w-[280px] h-[244px] ">
                    <span className="w-[100px] h-[100px] p-5 rounded-full bg-[#F2F2F2] flex items-center justify-center">
                        <AiOutlineSafety className="text-6xl" />
                    </span>
                    <h3 className='text-title text-black text-center font-bold my-4'>Quality</h3>
                    <p className='text-descSize text-center'>Lorem ipsum dolor sit amet consectetur. Placerat donec quis donec ac lorem ut venenatis. Cursus arcu enim.</p>
                </div>
                <Divider width='1px' height='155px' color='#505050' opacity='0.2' />
                <div className="flex flex-col items-center w-[280.23px] h-[244.61px] ">
                    <span className="w-[100px] h-[100px] p-5 rounded-full bg-[#F2F2F2] flex items-center justify-center">
                        <AiOutlineSafety className="text-6xl" />
                    </span>
                    <h3 className='text-title text-black text-center  font-bold my-4'>Efficiency</h3>
                    <p className='text-descSize text-center'>Lorem ipsum dolor sit amet consectetur. Placerat donec quis donec ac lorem ut venenatis. Cursus arcu enim.</p>
                </div>
                <Divider width='1px' height='155px' color='#505050' opacity='0.2' />

                <div className="flex flex-col items-center w-[280.23px] h-[244.61px] ">
                    <span className="w-[100px] h-[100px] p-5 rounded-full bg-[#F2F2F2] flex items-center justify-center">
                        <AiOutlineSafety className="text-6xl" />
                    </span>
                    <h3 className='text-title text-black text-center font-bold my-4'>Reliability</h3>
                    <p className='text-descSize text-center'>Lorem ipsum dolor sit amet consectetur. Placerat donec quis donec ac lorem ut venenatis. Cursus arcu enim.</p>
                </div>
            </div>
        </div>
    )
}

export default ChooseCart