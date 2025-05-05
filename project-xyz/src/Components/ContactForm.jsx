import React from 'react'
import FormImg from '../assets/form.png'

const ContactForm = () => {
    return (
        // form:min-h-[1800px]
            <div className='mt-[80px] mb-5 bg-center bg-cover p-2' style={{ backgroundImage: `url(${FormImg})` }}>
                <div className="w-full min-w-[50%] mx-auto space-y-3 pt-5">
                    <h2 className='text-title text-black  font-black text-center'>Big Valley Produce, 202-544-7707 Washington DC</h2>
                    <p className='text-descsize text-center text-desc  ' >Please place your order here or send us an email. We're produce wholesalers in Washington DC, We can deliver to your business. You can count on us.</p>
                </div>
                <div>
                    <form className='mt-[80px] w-full max-w-[1140px] p-5 mx-auto'>
                        <div>
                            <h2 className='text-title text-black font-bold mb-5'>Choose one<span className="text-red-600">*</span></h2>
                            <div className="flex flex-col md:flex-row gap-10">
                                <label htmlFor="customer" className="flex items-center gap-3 cursor-pointer text-title text-black">
                                    <input id="customer" name="customer" type="radio" className="accent-green-700 w-[30px] h-[30px]" />
                                    Existing customer
                                </label>

                                <label htmlFor="new" className="flex items-center gap-3 cursor-pointer text-title text-black">
                                    <input id="new" name="customer" type="radio" className="accent-green-700 w-[30px] h-[30px] " />
                                    Become a customer
                                </label>

                                <label htmlFor="email" className="flex items-center gap-3 cursor-pointer text-title text-black">
                                    <input id="email" name="customer" type="radio" className="accent-green-700 w-[30px] h-[30px]" />
                                    Email us
                                </label>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-[70px] mb-6 w-full">
                                <div>
                                    <label className="block text-descsize  font-descsize mb-1">Company <span className="text-red-600">*</span></label>
                                    <input type="text" className="w-full p-3 rounded-md  focus:outline-blue-400" />
                                </div>
                                <div>
                                    <label className="block text-descsize mb-1">Your Name <span className="text-red-600">*</span></label>
                                    <input type="text" className="w-full p-3 rounded-md  border-gray-300 focus:outline-blue-400" />
                                </div>
                                <div>
                                    <label className="block text-descsize mb-1">Phone <span className="text-red-600">*</span></label>
                                    <input type="text" className="w-full p-3 rounded-md  border-gray-300 focus:outline-blue-400" />
                                </div>
                                <div>
                                    <label className="block text-descsize  mb-1">Email <span className="text-red-600">*</span></label>
                                    <input type="email" className="w-full p-3 rounded-xl  border-gray-300 focus:outline-blue-400" />
                                </div>
                            </div>
                            <div className="mb-6">
                                <label className="block text-descsize mb-1">Place your order or send us a message <span className="text-red-600">*</span></label>
                                <textarea className="w-full p-3 rounded-md focus:outline-none min-h-[130px]"></textarea>
                            </div>
                            <button className='btn w-full rounded-full bg-[#005A2F] text-white text-title h-[50px]'>Submit</button>
                        </div>
                    </form>
                </div>
            </div>

    )
}

export default ContactForm