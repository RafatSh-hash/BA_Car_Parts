/* eslint-disable no-unused-vars */
import React from 'react';
import p1 from "../../assets/Images/part1.png";
import p2 from "../../assets/Images/part2.png";
import p3 from "../../assets/Images/part3.png";
import p4 from "../../assets/Images/part4.png";
import p5 from "../../assets/Images/part5.png";
import p6 from "../../assets/Images/part6.png";
import p7 from "../../assets/Images/part7.png";
import p8 from "../../assets/Images/part8.png";
import p9 from "../../assets/Images/part9.png";
import p10 from "../../assets/Images/part10.png";
import p11 from "../../assets/Images/part11.png";
import p12 from "../../assets/Images/part12.png";
import p13 from "../../assets/Images/part13.png";
import p14 from "../../assets/Images/part14.png";

const Parts = () => {
    return (
        <div className='mt-20 p-5'>
            <h1 className='text-4xl font-semibold text-center'>আমাদের কাছে যা পাবেন</h1>
            <div className='grid grid-cols-2 md:grid-cols-5 lg:grid-cols-7 gap-5 my-10'>
                <div className='flex flex-col items-center justify-center rounded-md shadow-lg transition-all duration-500 hover:shadow-2xl p-3'>
                    <div className='w-36 h-36 pContainer'>
                        <img src={p1} className='w-full h-full' alt="" />
                    </div>
                    <h1 className='text-xl my-3'>ইঞ্জিন ওয়েল</h1>
                </div>
                <div className='flex flex-col items-center justify-center rounded-md shadow-lg transition-all duration-500 hover:shadow-2xl p-3'>
                    <div className='w-36 h-36 pContainer'>
                        <img src={p2} className='w-full h-full' alt="" />
                    </div>
                    <h1 className='text-xl  my-3'>ব্রেক</h1>
                </div>
                <div className='flex flex-col items-center justify-center rounded-md shadow-lg transition-all duration-500 hover:shadow-2xl p-3'>
                    <div className='w-36 h-36 pContainer'>
                        <img src={p3} className='w-full h-full' alt="" />
                    </div>
                    <h1 className='text-xl  my-3'>ফিল্টার</h1>
                </div>
                <div className='flex flex-col items-center justify-center rounded-md shadow-lg transition-all duration-500 hover:shadow-2xl p-3'>
                    <div className='w-36 h-36 pContainer'>
                        <img src={p4} className='w-full h-full' alt="" />
                    </div>
                    <h1 className='text-xl my-3'>ওয়াইপার ব্লেড</h1>
                </div>
                <div className='flex flex-col items-center justify-center rounded-md shadow-lg transition-all duration-500 hover:shadow-2xl p-3'>
                    <div className='w-36 h-36 pContainer'>
                        <img src={p5} className='w-full h-full' alt="" />
                    </div>
                    <h1 className='text-xl my-3'>হর্ণ</h1>
                </div>
                <div className='flex flex-col items-center justify-center rounded-md shadow-lg transition-all duration-500 hover:shadow-2xl p-3'>
                    <div className='w-36 h-36 pContainer'>
                        <img src={p6} className='w-full h-full' alt="" />
                    </div>
                    <h1 className='text-xl my-3'>বাল্ব - এল ই ডি</h1>
                </div>
                <div className='flex flex-col items-center justify-center rounded-md shadow-lg transition-all duration-500 hover:shadow-2xl p-3'>
                    <div className='w-36 h-36 pContainer'>
                        <img src={p7} className='w-full h-full' alt="" />
                    </div>
                    <h1 className='text-xl my-3'>কেয়ার প্রোডাক্ট</h1>
                </div>
                <div className='flex flex-col items-center justify-center rounded-md shadow-lg transition-all duration-500 hover:shadow-2xl p-3'>
                    <div className='w-36 h-36 pContainer'>
                        <img src={p8} className='w-full h-full' alt="" />
                    </div>
                    <h1 className='text-xl  my-3'>টায়ার</h1>
                </div>
                <div className='flex flex-col items-center justify-center rounded-md shadow-lg transition-all duration-500 hover:shadow-2xl p-3'>
                    <div className='w-36 h-36 pContainer'>
                        <img src={p9} className='w-full h-full' alt="" />
                    </div>
                    <h1 className='text-xl  my-3'>ইলেকট্রিক পার্ট</h1>
                </div>
                <div className='flex flex-col items-center justify-center rounded-md shadow-lg transition-all duration-500 hover:shadow-2xl p-3'>
                    <div className='w-36 h-36 pContainer'>
                        <img src={p10} className='w-full h-full' alt="" />
                    </div>
                    <h1 className='text-xl  my-3'>স্পার্ক প্লাগ </h1>
                </div>
                <div className='flex flex-col items-center justify-center rounded-md shadow-lg transition-all duration-500 hover:shadow-2xl p-3'>
                    <div className='w-36 h-36 pContainer'>
                        <img src={p11} className='w-full h-full' alt="" />
                    </div>
                    <h1 className='text-xl  my-3'>শক এবজর্ভার </h1>
                </div>
                <div className='flex flex-col items-center justify-center rounded-md shadow-lg transition-all duration-500 hover:shadow-2xl p-3'>
                    <div className='w-36 h-36 pContainer'>
                        <img src={p12} className='w-full h-full' alt="" />
                    </div>
                    <h1 className='text-xl  my-3'>যন্ত্রাদি</h1>
                </div>
                <div className='flex flex-col items-center justify-center rounded-md shadow-lg transition-all duration-500 hover:shadow-2xl p-3'>
                    <div className='w-36 h-36 pContainer'>
                        <img src={p13} className='w-full h-full' alt="" />
                    </div>
                    <h1 className='text-xl  my-3'>বডি পার্ট </h1>
                </div>
                <div className='flex flex-col items-center justify-center rounded-md shadow-lg transition-all duration-500 hover:shadow-2xl p-3'>
                    <div className='w-36 h-36 pContainer'>
                        <img src={p14} className='w-full h-full' alt="" />
                    </div>
                    <h1 className='text-xl  my-3'>ব্যাটারি</h1>
                </div>
                
            </div>
        </div>
    );
};

export default Parts;