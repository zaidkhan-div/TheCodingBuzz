import React from 'react'
import TwoDivComp from './TwoDivComp'
import Family1 from '../../public/assets/family1.png'
import Family2 from '../../public/assets/family2.png'

const Family = () => {
    return (
        <div className='my-20'>
            <h2 className='text-2xl text-center text-black mb-[10px] font-black uppercase Montserrat '>A Family Business</h2>
            <p className='text-center mb-[28px] mx-auto'>Rooted in tradition, built with love — our family business is more than just a venture; it’s a legacy passed down through generations.<br /> With care in every detail and passion in every product, we treat every customer like family.</p>
            <div className='mt-10'>
                <TwoDivComp title='Cranberries' para='Bursting with natural flavor and packed with health benefits, our cranberries are a true superfruit. Carefully harvested at peak ripeness, they’re rich in antioxidants, vitamins, and bold taste. Whether enjoyed fresh, dried, or in your favorite recipe, they bring a perfect blend of tart and sweet to every bite — a wholesome treat you can feel good about every day.' img={Family1} />
                <TwoDivComp title='Cranberries' para='Bursting with natural flavor and packed with health benefits, our cranberries are a true superfruit. Carefully harvested at peak ripeness, they’re rich in antioxidants, vitamins, and bold taste. Whether enjoyed fresh, dried, or in your favorite recipe, they bring a perfect blend of tart and sweet to every bite — a wholesome treat you can feel good about every day.' reverse img={Family2} />
            </div>
        </div>

    )
}

export default Family