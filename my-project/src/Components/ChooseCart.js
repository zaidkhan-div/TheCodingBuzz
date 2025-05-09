import React from 'react'
import Carts from './Carts'
import { AiFillSafetyCertificate } from "react-icons/ai";
import { GiProgression } from "react-icons/gi";
import { MdVerified } from "react-icons/md";

const ChooseCart = () => {
    return (
        <div className='flex flex-col md:flex-row'>
            <Carts Icon={AiFillSafetyCertificate} title='Quality' para='Dedicated purveyors of the finest fresh produce, upheld by the highest quality standards. From our fields to your kitchen — always fresh, always flavorful.' />
            <Carts Icon={GiProgression} title='Quality' para='Dedicated purveyors of the finest fresh produce, upheld by the highest quality standards. From our fields to your kitchen — always fresh, always flavorful.' />
            <Carts Icon={MdVerified} title='Quality' para='Dedicated purveyors of the finest fresh produce, upheld by the highest quality standards. From our fields to your kitchen — always fresh, always flavorful.' />
        </div>
    )
}

export default ChooseCart