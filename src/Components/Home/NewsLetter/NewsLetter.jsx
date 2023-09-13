/* eslint-disable no-unused-vars */
import { Button, Input } from '@nextui-org/react';
import React from 'react';
import { MailIcon } from './MailIcon';

const NewsLetter = () => {
    return (
        <div className='flex flex-col md:flex-row lg:flex-row justify-evenly items-center bg-red-600 p-4'>
            <div>
                <h1 className='text-base md:text-lg lg:text-2xl font-semibold text-white py-2'>গাড়ি সংক্রান্ত প্রয়োজনীয় বার্তা পেতে আমাদের সাথেই থাকুন</h1>
            </div>
            <div className='flex justify-center items-center'>
       
                <input type="email" name="email" className='py-2 px-3 rounded-tl-md rounded-bl-md w-[70%]' placeholder='youremail@gmail.com' id="" />
                <button type="submit" className='py-2 px-3 rounded-tr-md rounded-br-md text-white font-semibold bg-blue-500'>সাবস্ক্রাইব</button>
         
          
            </div>      
        </div>
    );
};

export default NewsLetter;