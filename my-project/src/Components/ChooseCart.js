import React from 'react';
import Carts from './Carts';
import { AiFillSafetyCertificate } from "react-icons/ai";
import { GiProgression } from "react-icons/gi";
import { MdVerified } from "react-icons/md";


const ChooseCart = () => (
    <div>
        <h2 className='text-2xl text-center text-black my-[50px] font-black uppercase Montserrat'>
            Why Choose Us?
        </h2>
        <div className='flex flex-col md:flex-row justify-between items-center gap-8 mb-20'>
            <Carts
                Icon={AiFillSafetyCertificate}
                title='Quality'
                para='Dedicated purveyors of the finest fresh produce, upheld by the highest quality standards. From our fields to your kitchen — always fresh, always flavorful.'
                width={280}
                height={244}
            />
            <Carts
                Icon={GiProgression}
                title='Efficiency'
                para='Committed to efficiency with same-day service and prompt, reliable delivery — so you get what you need, when you need it.'
                width={280}
                height={244}
            />
            <Carts
                Icon={MdVerified}
                title='Reliability'
                para='Serving our valued local customers six days a week — because your community is our priority.'
                width={280}
                height={244}
            />
        </div>
    </div>
);

export default ChooseCart;