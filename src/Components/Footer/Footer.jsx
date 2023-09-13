/* eslint-disable no-unused-vars */
import React from 'react';
import Logo from "../../assets/BALogo.png"

const Footer = () => {
    return (
        <div className='mt-20 flex flex-col md:flex-row lg:flex-row items-center justify-evenly bg-gray-100'>
           <div className='flex flex-col items-center justify-center p-5'>
           <div>
            <img src={Logo} alt="" />
           </div>
           <h1 className='text-3xl font-semibold'>আমাদের সেবা, আপনার অধিকার</h1>
           </div>
           <div className='p-5'>
                <h1 className='text-3xl my-5'>
                যোগাযোগ


                </h1>
                <h2 className='font-semibold text-xl'>ফোন নম্বর ঃ </h2>
                <p> </p>
           </div>
        </div>
    );
};

export default Footer;