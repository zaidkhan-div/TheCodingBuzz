import React from 'react'
import Family1 from '../assets/family1.png'
import Family2 from '../assets/family2.png'


const FamilyCart3 = () => {
    return (
        <div className='my-[80px]'>
            <h2 className='text-title text-center text-black mb-[10px] font-black uppercase Montserrat '>A Family Business</h2>
            <p className='text-center mb-[28px] mx-auto'>Lorem ipsum dolor sit amet consectetur. Nisi lacus etiam scelerisque <br /> suspendisse sit suspendisse. Sed lacus iaculis enim proin amet elementum.</p>
            <div className='mt-[40px]'>
                <div className='flex flex-col md:flex-row  justify-between items-center '>
                    <div className='w-full max-w-[534px] space-y-2 p-2'>
                        <h2 className='text-center mid:text-left text-title font-bold'>Cranberries</h2>
                        <p className='text-center mid:text-left text-desc text-xl Montserrat'>Lorem ipsum dolor sit amet consectetur. Morbi vestibulum pulvinar volutpat adipiscing sapien nulla. Consectetur aliquam libero curabitur mi ut. Id nunc luctus risus tincidunt purus amet nulla hendrerit. Fusce ut pharetra cursus sed cras.
                            Arcu elit viverra quam facilisis vestibulum in. Tincidunt ut a sodales in. Tempus netus condimentum sollicitudin in est sed morbi.</p>
                    </div>
                    <div className='w-full max-w-[607px] h-[380.17px]'>
                        <img className='w-full h-full object-cover' src={Family1} alt="" />
                    </div>
                </div>
                <div className='flex flex-col-reverse    md:flex-row  justify-between items-center '>
                    <div className='w-full max-w-[607px] h-[380px]'>
                        <img className='w-full h-full object-cover' src={Family2} alt="" />
                    </div>
                    <div className='w-full  max-w-[534px] mb-5 space-y-2 p-2 '>
                        <h2 className='text-center mid:text-left text-title font-bold'>Cranberries</h2>
                        <p className='text-center mid:text-left text-xl text-desc leading-6 Montserrat '>Lorem ipsum dolor sit amet consectetur. Morbi vestibulum pulvinar volutpat adipiscing sapien nulla. Consectetur aliquam libero curabitur mi ut. Id nunc luctus risus tincidunt purus amet nulla hendrerit. Fusce ut pharetra cursus sed cras.
                            Arcu elit viverra quam facilisis vestibulum in. Tincidunt ut a sodales in. Tempus netus condimentum sollicitudin in est sed morbi.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FamilyCart3