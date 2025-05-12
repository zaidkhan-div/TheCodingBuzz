import React from 'react'
import Carts from './Carts'
import { AiFillSafetyCertificate } from "react-icons/ai";
import { GiProgression } from "react-icons/gi";
import { MdVerified } from "react-icons/md";

const ChooseCart = () => {
    return (
        <div>
            <h2 className='text-2xl text-center text-black my-[50px] font-black uppercase Montserrat '>why choose us?</h2>
            <div className='flex flex-col md:flex-row justify-between items-center gap-8 mb-20'>
                <div className='flex flex-col items-center w-[280px] '>
                    <Carts Icon={AiFillSafetyCertificate} title='Quality' para='Dedicated purveyors of the finest fresh produce, upheld by the highest quality standards. From our fields to your kitchen — always fresh, always flavorful.' />
                </div>
                <div className='flex flex-col items-center w-[280px] '>
                    <Carts Icon={GiProgression} title='Efficiency' para='Dedicated purveyors of the finest fresh produce, upheld by the highest quality standards. From our fields to your kitchen — always fresh, always flavorful.' />
                </div>
                <div className='flex flex-col items-center w-[280px] '>
                    <Carts Icon={MdVerified} title='Reliability' para='Dedicated purveyors of the finest fresh produce, upheld by the highest quality standards. From our fields to your kitchen — always fresh, always flavorful.' />
                </div>
            </div>
        </div>
    )
}

export default ChooseCart