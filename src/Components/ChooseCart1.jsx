import React from 'react'
import { AiFillSafetyCertificate } from "react-icons/ai";
import { GiProgression } from "react-icons/gi";
import { MdVerified } from "react-icons/md";


import Divider from './Divider';

const ChooseCart = () => {
    return (
        <div id='chooseUs' className='mt-[80px] mb-[100px] '>
            <h2 className='text-title text-center text-black mb-[50px] font-black uppercase Montserrat '>why choose us?</h2>
            <div className='flex flex-col md:flex-row justify-between items-center'>
                <div className="flex flex-col items-center w-[280px] h-[244px] ">
                    <span className="w-[100px] h-[100px] p-5 rounded-full bg-[#F2F2F2] flex items-center justify-center">
                        <MdVerified className="text-6xl" />
                    </span>
                    <h3 className='text-title text-black text-center font-bold my-4'>Quality</h3>
                    <p className='text-descSize text-center'>Dedicated purveyors of the finest fresh produce, upheld by the highest quality standards. From our fields to your kitchen — always fresh, always flavorful.</p>
                </div>
                <Divider width='1px' height='155px' color='#505050' opacity='0.2' />
                <div className="flex flex-col items-center w-[280.23px] h-[244.61px] ">
                    <span className="w-[100px] h-[100px] p-5 rounded-full bg-[#F2F2F2] flex items-center justify-center">
                        <GiProgression className="text-6xl" />
                    </span>
                    <h3 className='text-title text-black text-center  font-bold my-4'>Efficiency</h3>
                    <p className='text-descSize text-center'>Committed to efficiency with same-day service and prompt, reliable delivery — so you get what you need, when you need it.</p>
                </div>
                <Divider width='1px' height='155px' color='#505050' opacity='0.2' />

                <div className="flex flex-col items-center w-[280.23px] h-[244.61px] ">
                    <span className="w-[100px] h-[100px] p-5 rounded-full bg-[#F2F2F2] flex items-center justify-center">
                        <AiFillSafetyCertificate className="text-6xl" />
                    </span>
                    <h3 className='text-title text-black text-center font-bold my-4'>Reliability</h3>
                    <p className='text-descSize text-center'>Serving our valued local customers six days a week — because your community is our priority.</p>
                </div>
            </div>
        </div>
    )
}

export default ChooseCart