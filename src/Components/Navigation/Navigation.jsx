/* eslint-disable no-unused-vars */
import React from 'react';
import Logo from "../../assets/BALogo.png";
import rightArrow from "../../assets/icons/right.png"
import Banner from '../Home/Banner/Banner';

const Navigation = () => {
    return (
     

<div className='relative'>
    <div>
        <Banner></Banner>
    </div>
<div className="flex justify-between items-center px-5 py-1 bg-transparent top-0 w-full absolute z-10">
            <div>
            <div className="w-36 md:w-40 lg:w-72 h-20">
            <img src={Logo} className="w-full h-full" alt="" />
</div>
            </div>
            <div>

            <button className="border-2 border-red-500 py-2 px-2 bg-gradient-to-r from-transparent to-red-500 appointment hover:bg-red-500 transition-all duration-500">
  <div className="flex justify-between items-center">
    <p className="text-xl px-2 text-white font-semibold">যোগাযোগ</p>
    <div className="flex w-5 overflow-hidden">
      <img src={rightArrow} className="w-4 h-4 me-2 transition-all duration-200 arrow" alt="" />
      <img src={rightArrow} className="w-4 h-4 ms-2 transition-all duration-200 arrow1" alt="" />
    </div>
  </div>
</button>


            </div>
        </div>
        
</div>
     
       
    );
};

export default Navigation;
