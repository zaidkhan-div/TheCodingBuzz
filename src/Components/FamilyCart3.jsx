import React from 'react'
import Family1 from '../assets/family1.webp'
import Family2 from '../assets/family2.webp'


const FamilyCart3 = () => {


    return (
        <div className='my-[80px]'>
            <h2 className='text-title text-center text-black mb-[10px] font-black uppercase Montserrat '>A Family Business</h2>
            <p className='text-center mb-[28px] mx-auto'>Rooted in tradition, built with love — our family business is more than just a venture; it’s a legacy passed down through generations.<br /> With care in every detail and passion in every product, we treat every customer like family.</p>
            <div className='mt-[40px]'>
                <div className='flex flex-col-reverse md:flex-row  justify-between items-center '>
                    <div className='w-full max-w-[534px] space-y-2 p-2'>
                        <h2 className='text-center mid:text-left text-title font-bold'>Cranberries</h2>
                        <p className='text-center mid:text-left text-desc text-xl Montserrat'>Bursting with natural flavor and packed with health benefits, our cranberries are a true superfruit. Carefully harvested at peak ripeness, they’re rich in antioxidants, vitamins, and bold taste. Whether enjoyed fresh, dried, or in your favorite recipe, they bring a perfect blend of tart and sweet to every bite — a wholesome treat you can feel good about every day.</p>
                    </div>
                    <div className='w-full max-w-[607px] h-[380.17px]'>
                        <img className='w-full h-full object-contain' fetchPriority='low' loading="lazy" src={Family1} alt="Cranberries" />
                    </div>
                </div>
                <div className='flex flex-col   md:flex-row  justify-between items-center '>
                    <div className='w-full max-w-[607px] h-[380px]'>
                        <img className='w-full h-full object-contain' fetchPriority='low' loading="lazy" src={Family2} alt="Cranberries" />
                    </div>
                    <div className='w-full  max-w-[534px] mb-5 space-y-2 p-2 '>
                        <h2 className='text-center mid:text-left text-title font-bold'>Cranberries</h2>
                        <p className='text-center mid:text-left text-xl text-desc leading-6 Montserrat '>Bursting with natural flavor and packed with health benefits, our cranberries are a true superfruit. Carefully harvested at peak ripeness, they’re rich in antioxidants, vitamins, and bold taste. Whether enjoyed fresh, dried, or in your favorite recipe, they bring a perfect blend of tart and sweet to every bite — a wholesome treat you can feel good about every day.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FamilyCart3