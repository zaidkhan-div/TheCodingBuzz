import React from 'react'
import season1 from '../assets/season1.png'
import season2 from '../assets/season2.png'
import season3 from '../assets/season3.png'

const SeasonCart = () => {
    return (
        <>
            <div className='my-[80px] '>
                <h2 className='text-title text-center text-black mb-[10px] font-black uppercase Montserrat '>In Season Now</h2>
                <p className='text-center mb-[28px] mx-auto'>Lorem ipsum dolor sit amet consectetur. Nisi lacus etiam scelerisque <br /> suspendisse sit suspendisse. Sed lacus iaculis enim proin amet elementum.</p>
                <div className='flex flex-col md:flex-row justify-between items-center'>
                    <div className="flex flex-col items-center w-[280.23px] ">
                        <div className="w-full max-w-[460.32px]">
                            <img src={season1} alt="" />
                        </div>
                        <h3 className='text-title text-black text-center font-bold mb-3'>Cranberries</h3>
                        <p className='text-descSize text-center'>Lorem ipsum dolor sit amet <br /> consectetur.</p>
                    </div>
                    <div className="flex flex-col items-center w-[280.23px] ">
                        <div className="w-full max-w-[460.32px]">
                            <img src={season3} alt="" />
                        </div>
                        <h3 className='text-title text-black text-center  font-bold mb-3'>Brussel Sprouts</h3>
                        <p className='text-descSize text-center'>Lorem ipsum dolor sit amet <br /> consectetur.</p>
                    </div>
                    <div className="flex flex-col items-center w-[280.23px] ">
                        <div className="w-full max-w-[460.32px]">
                            <img src={season2} alt="" />
                        </div>
                        <h3 className='text-title text-black text-center font-bold mb-3'>Sweet Potatoes</h3>
                        <p className='text-descSize text-center'>Lorem ipsum dolor sit amet <br /> consectetur.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SeasonCart