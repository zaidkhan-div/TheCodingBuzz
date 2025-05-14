"use client"
import React, { useState } from 'react';
import FormImg from '../../public/assets/form.png';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Image from 'next/image';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        customer_type: '',
        company: '',
        user_name: '',
        phone: '',
        email: '',
        message: ''
    });

    const API_URL = process.env.NEXT_PUBLIC_API_URL;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const sendEmail = async (e) => {
        e.preventDefault();
        
        try {
            const response = await fetch(API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                toast.success('Email sent successfully!');
                setFormData({ 
                    customer_type: '',
                    company: '', 
                    user_name: '', 
                    phone: '', 
                    email: '', 
                    message: '' 
                });
            } else {
                toast.error('Error sending email');
            }
        } catch (error) {
            toast.error('Network error');
        }
    };

    return (
        <div id='contact' className='mt-[80px] mb-5 bg-center bg-cover p-2 relative'>
            {/* Background Image */}
            <div className="absolute inset-0 -z-10">
                <Image
                    src={FormImg}
                    alt="Form background"
                    fill
                    className="object-cover"
                />
            </div>

            <div className="w-full min-w-[50%] mx-auto space-y-3 pt-5 relative z-10">
                <h2 className='text-2xl text-black font-black text-center'>Big Valley Produce, 202-544-7707 Washington DC</h2>
                <p className='text-lg text-center text-desc'>Please place your order here or send us an email. We're produce wholesalers in Washington DC, We can deliver to your business. You can count on us.</p>
            </div>

            <form onSubmit={sendEmail} className='mt-[80px] w-full max-w-[1140px] p-5 mx-auto relative z-10 rounded-lg'>
                <div>
                    <h2 className='text-title text-black font-bold mb-5'>Choose one<span className="text-red-600">*</span></h2>
                    <div className="flex flex-col md:flex-row gap-10">
                        <label className="flex items-center gap-3 cursor-pointer text-title text-black">
                            <input
                                name="customer_type"
                                value="Existing Customer"
                                type="radio"
                                checked={formData.customer_type === 'Existing Customer'}
                                className="accent-green-700 w-[30px] h-[30px]"
                                onChange={handleChange}
                            />
                            Existing customer
                        </label>

                        <label className="flex items-center gap-3 cursor-pointer text-title text-black">
                            <input
                                name="customer_type"
                                value="New Customer"
                                checked={formData.customer_type === 'New Customer'}
                                type="radio"
                                className="accent-green-700 w-[30px] h-[30px]"
                                onChange={handleChange}
                            />
                            Become a customer
                        </label>

                        <label className="flex items-center gap-3 cursor-pointer text-title text-black">
                            <input
                                name="customer_type"
                                value="Email"
                                checked={formData.customer_type === 'Email'}
                                type="radio"
                                className="accent-green-700 w-[30px] h-[30px]"
                                onChange={handleChange}
                            />
                            Email us
                        </label>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-[70px] mb-6 w-full">
                        {/* Form fields */}
                        {['company', 'user_name', 'phone', 'email'].map((field) => (
                            <div key={field}>
                                <label className="block text-descsize mb-1">
                                    {field === 'company' ? 'Company' : 
                                     field === 'user_name' ? 'Your Name' : 
                                     field.charAt(0).toUpperCase() + field.slice(1)}
                                    <span className="text-red-600">*</span>
                                </label>
                                <input 
                                    type={field === 'email' ? 'email' : 'text'}
                                    name={field}
                                    value={formData[field]}
                                    onChange={handleChange}
                                    className="w-full p-3 rounded-md border border-gray-300 focus:outline-blue-400"
                                    required
                                />
                            </div>
                        ))}
                    </div>

                    <div className="mb-6">
                        <label className="block text-descsize mb-1">
                            Place your order or send us a message <span className="text-red-600">*</span>
                        </label>
                        <textarea 
                            name='message' 
                            value={formData.message} 
                            onChange={handleChange} 
                            className="w-full p-3 rounded-md border border-gray-300 focus:outline-none min-h-[130px]"
                            required
                        ></textarea>
                    </div>

                    <button 
                        type="submit"
                        className='w-full rounded-full bg-[#005A2F] text-white text-title h-[50px] transition-colors'
                    >
                        Submit
                    </button>
                </div>
            </form>
            <ToastContainer position="bottom-right" autoClose={3000} />
        </div>
    );
};

export default ContactForm;