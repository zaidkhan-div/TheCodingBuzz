import React, { useState } from 'react';
import FormImg from '../assets/form.png';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        customer_type: '',
        company: '',
        user_name: '',
        phone: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const sendEmail = async (e) => {
        e.preventDefault();

        const response = await fetch('http://localhost:3000/sendmail', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        if (response.ok) {
            alert('Email sent successfully!');
        } else {
            alert('Error sending email');
        }
    };

    return (
        <div className='mt-[80px] mb-5 bg-center bg-cover p-2' style={{ backgroundImage: `url(${FormImg})` }}>
            <div className="w-full min-w-[50%] mx-auto space-y-3 pt-5">
                <h2 className='text-title text-black font-black text-center'>Big Valley Produce, 202-544-7707 Washington DC</h2>
                <p className='text-descsize text-center text-desc'>Please place your order here or send us an email. We're produce wholesalers in Washington DC, We can deliver to your business. You can count on us.</p>
            </div>

            <form onSubmit={sendEmail} className='mt-[80px] w-full max-w-[1140px] p-5 mx-auto'>
                <div>
                    <h2 className='text-title text-black font-bold mb-5'>Choose one<span className="text-red-600">*</span></h2>
                    <div className="flex flex-col md:flex-row gap-10">
                        <label htmlFor="customer" className="flex items-center gap-3 cursor-pointer text-title text-black">
                            <input
                                id="customer"
                                name="customer_type"
                                value="Existing Customer"
                                type="radio"
                                className="accent-green-700 w-[30px] h-[30px]"
                                onChange={handleChange}
                            />
                            Existing customer
                        </label>

                        <label htmlFor="new" className="flex items-center gap-3 cursor-pointer text-title text-black">
                            <input
                                id="new"
                                name="customer_type"
                                value="new customer"
                                type="radio"
                                className="accent-green-700 w-[30px] h-[30px]"
                                onChange={handleChange}
                            />
                            Become a customer
                        </label>

                        <label htmlFor="email" className="flex items-center gap-3 cursor-pointer text-title text-black">
                            <input
                                id="email"
                                name="customer_type"
                                value="email"
                                type="radio"
                                className="accent-green-700 w-[30px] h-[30px]"
                                onChange={handleChange}
                            />
                            Email us
                        </label>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-[70px] mb-6 w-full">
                        <div>
                            <label className="block text-descsize font-descsize mb-1">Company <span className="text-red-600">*</span></label>
                            <input type="text" name='company' value={formData.company} onChange={handleChange} className="w-full p-3 rounded-md focus:outline-blue-400" required />
                        </div>
                        <div>
                            <label className="block text-descsize mb-1">Your Name <span className="text-red-600">*</span></label>
                            <input type="text" name='user_name' value={formData.user_name} onChange={handleChange} className="w-full p-3 rounded-md border-gray-300 focus:outline-blue-400" required />
                        </div>
                        <div>
                            <label className="block text-descsize mb-1">Phone <span className="text-red-600">*</span></label>
                            <input type="text" name='phone' value={formData.phone} onChange={handleChange} className="w-full p-3 rounded-md border-gray-300 focus:outline-blue-400" required />
                        </div>
                        <div>
                            <label className="block text-descsize mb-1">Email <span className="text-red-600">*</span></label>
                            <input type="email" name='email' value={formData.email} onChange={handleChange} className="w-full p-3 rounded-xl border-gray-300 focus:outline-blue-400" required />
                        </div>
                    </div>

                    <div className="mb-6">
                        <label className="block text-descsize mb-1">Place your order or send us a message <span className="text-red-600">*</span></label>
                        <textarea name='message' value={formData.message} onChange={handleChange} className="w-full p-3 rounded-md focus:outline-none min-h-[130px]"></textarea>
                    </div>

                    <button className='btn w-full rounded-full bg-[#005A2F] text-white text-title h-[50px]'>Submit</button>
                </div>
            </form>
        </div>
    );
};

export default ContactForm;
