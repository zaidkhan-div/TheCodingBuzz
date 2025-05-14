import React from 'react';
import Image from 'next/image';
import season1 from '../../public/assets/season1.png';
import season2 from '../../public/assets/season2.png';
import season3 from '../../public/assets/season3.png';

const ChooseCart = () => (
    <div className='my-[80px] '>
        <h2 className='text-title text-center text-black mb-[10px] font-black uppercase Montserrat '>In Season Now</h2>
        <p className='text-center mb-[28px] mx-auto'>Fresh, flavorful, and harvested at their peak — these seasonal picks are perfect for your table. <br /> Enjoy nature’s best, just when it's meant to be.</p>
        <div className='flex flex-col md:flex-row justify-between items-center'>
            <div className="flex flex-col items-center w-[280.23px] ">
                <div className="w-full relative max-w-[460.32px]">
                    <Image src={season1}  alt="season" />
                </div>
                <h3 className='text-title text-black text-center font-bold mb-3'>Cranberries</h3>
                <p className='text-descSize text-center'>Bold, tangy, and bursting with freshness — a perfect seasonal delight.</p>
            </div>
            <div className="flex flex-col items-center w-[280.23px] ">
                <div className="w-full relative max-w-[460.32px]">
                    <Image src={season3}  alt="Cranberries" />
                </div>
                <h3 className='text-title text-black text-center  font-bold mb-3'>Brussel Sprouts</h3>
                <p className='text-descSize text-center'>Crisp, green, and packed with goodness straight from the farm.</p>
            </div>
            <div className="flex flex-col items-center w-[280.23px] ">
                <div className="w-full relative max-w-[460.32px]">
                    <Image src={season2}  alt="Brussel" />
                </div>
                <h3 className='text-title text-black text-center font-bold mb-3'>Sweet Potatoes</h3>
                <p className='text-descSize text-center'>Earthy, sweet, and rich in flavor a comforting seasonal favorite.</p>
            </div>
        </div>
    </div>
);

export default ChooseCart;