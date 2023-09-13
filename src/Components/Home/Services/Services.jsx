/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import part01 from "../../../assets/Images/01.png"
import tick from "../../../assets/icons/tick.png";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Services = () => {
    useEffect(() => {
        AOS.init();
      }, [])
    return (
        <div className="flex flex-col md:flex-row lg:flex-row justify-center items-center my-20 p-10">
            <div data-aos="fade-right">
                <div className='p-5 transition-transform transform translate-y-0 hover:translate-y-0.1 animate-pulse'>
                    <img src={part01} className='w-full h-full' alt="" />
                </div>
            </div>
            <div data-aos="fade-left" className='p-1 md:p-5 lg:p-10 flex flex-col justify-center items-start text-left'>
                <p className='text-lg text-red-500 my-3'>সর্বোত্তম সবাধান</p>
                <h1 className='text-4xl text-[#0b2154] mb-5'>গাড়ি সংক্রান্ত সেবাদানে দক্ষ এবং মানসম্মত প্রতিষ্ঠান</h1>
                <p className='text-black my-3 text-xl'>আমাদের প্রতিষ্ঠান নিন্মোক্ত সেবা সমূহ প্রদান করে থাকে ঃ </p>
                <div className='grid grid-cols-2 gap-5  text-xl'>
                    <div className='flex justify-center items-center'>
                        <div className='w-5 h-5 rounded-full'>
                            <img src={tick} className='w-full h-full' alt="" />
                        </div>
                        <p className='mx-5 '>
                            টায়ার এবং চাকা 
                        </p>
                    </div>
                    <div className='flex justify-center items-center'>
                        <div className='w-5 h-5 rounded-full'>
                            <img src={tick} className='w-full h-full' alt="" />
                        </div>
                        <p className='mx-5'>
                            টায়ার এবং চাকা 
                        </p>
                    </div>
                    <div className='flex justify-center items-center'>
                        <div className='w-5 h-5 rounded-full'>
                            <img src={tick} className='w-full h-full' alt="" />
                        </div>
                        <p className='mx-5'>
                            টায়ার এবং চাকা 
                        </p>
                    </div>
                    <div className='flex justify-center items-center'>
                        <div className='w-5 h-5 rounded-full'>
                            <img src={tick} className='w-full h-full' alt="" />
                        </div>
                        <p className='mx-5'>
                            টায়ার এবং চাকা 
                        </p>
                    </div>
                    <div className='flex justify-center items-center'>
                        <div className='w-5 h-5 rounded-full'>
                            <img src={tick} className='w-full h-full' alt="" />
                        </div>
                        <p className='mx-5'>
                            টায়ার এবং চাকা 
                        </p>
                    </div>
                    <div className='flex justify-center items-center'>
                        <div className='w-5 h-5 rounded-full'>
                            <img src={tick} className='w-full h-full' alt="" />
                        </div>
                        <p className='mx-5'>
                            টায়ার এবং চাকা 
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;