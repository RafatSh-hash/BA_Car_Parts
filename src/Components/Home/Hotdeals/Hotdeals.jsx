/* eslint-disable no-unused-vars */
import { Button, Card, CardFooter, CardHeader, Image } from '@nextui-org/react';
import React from 'react';
import gem from "../../../assets/icons/gem.png"
import hot1 from "../../../assets/Images/hot1.jpg";
import hot2 from "../../../assets/Images/hot2.jpg";
import hot3 from "../../../assets/Images/hot3.jpg";
import hot4 from "../../../assets/Images/hot4.jpg";
import hot5 from "../../../assets/Images/hot5.jpg";
import hot6 from "../../../assets/Images/hot6.jpg";

const Hotdeals = () => {
    return (
        <div className='mt-20 p-5'>
                <h1 className='text-4xl font-semibold text-center'>জরুরী পণ্য, হাতের কাছে</h1>
                <div className='my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                <div>
                <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-7">
      <CardHeader className="absolute z-10 top-1 flex-col items-start">
        <p className="text-lg text-white uppercase font-bold">এয়ার কন্ডিশন সিস্টেম</p>
        <h4 className="text-white font-semibold text-3xl my-5">উন্নত মানের এসি বেছে নিন আমাদের কাছ থেকে</h4>
      </CardHeader>
      <Image
        removeWrapper
        alt="Relaxing app background"
        className="z-0 w-full h-full object-cover"
        src={hot1}
      />
      <CardFooter className="absolute  bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
        <div className="flex flex-grow gap-2 items-center">
          <Image
            alt="Breathing app icon"
            className="rounded-full w-10 h-10 bg-black"
            src={gem}
          />
          <div className="flex flex-col">
          <p className="text-tiny text-white/60">স্বল্প মূল্যে ভালো পণ্য</p>
          </div>
        </div>
       
      </CardFooter>
    </Card>
                </div>
                <div>
                <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-7">
      <CardHeader className="absolute z-10 top-1 flex-col items-start">
        <p className="text-lg text-white uppercase font-bold">আকর্ষনীয় লাইট</p>
        <h4 className="text-white font-semibold text-3xl my-5">উন্নত মানের লাইট বেছে নিন আমাদের কাছ থেকে</h4>
      </CardHeader>
      <Image
        removeWrapper
        alt="Relaxing app background"
        className="z-0 w-full h-full object-cover"
        src={hot3}
      />
      <CardFooter className="absolute  bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
        <div className="flex flex-grow gap-2 items-center">
          <Image
            alt="Breathing app icon"
            className="rounded-full w-10 h-10 bg-black"
            src={gem}
          />
          <div className="flex flex-col">
          <p className="text-tiny text-white/60">স্বল্প মূল্যে ভালো পণ্য</p>
          </div>
        </div>
       
      </CardFooter>
    </Card>
                </div>
                <div>
                <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-7">
      <CardHeader className="absolute z-10 top-1 flex-col items-start">
        <p className="text-lg text-white uppercase font-bold">সাউন্ড সিস্টেম</p>
        <h4 className="text-white font-semibold text-3xl my-5">উন্নত মানের সাউন্ড সিস্টেম বেছে নিন আমাদের কাছ থেকে</h4>
      </CardHeader>
      <Image
        removeWrapper
        alt="Relaxing app background"
        className="z-0 w-full h-full object-cover"
        src={hot2}
      />
      <CardFooter className="absolute  bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
        <div className="flex flex-grow gap-2 items-center">
          <Image
            alt="Breathing app icon"
            className="rounded-full w-10 h-10 bg-black"
            src={gem}
          />
          <div className="flex flex-col">
          <p className="text-tiny text-white/60">স্বল্প মূল্যে ভালো পণ্য</p>
          </div>
        </div>
       
      </CardFooter>
    </Card>
                </div>
                <div>
                <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-7">
      <CardHeader className="absolute z-10 top-1 flex-col items-start">
        <p className="text-lg text-white uppercase font-bold">ইঞ্জিন ওয়েল</p>
        <h4 className="text-white font-semibold text-3xl my-5">আমাদের কাছে পাচ্ছেন বাজারের সেরা ইঞ্জিন-ওয়েল সমূহ</h4>
      </CardHeader>
      <Image
        removeWrapper
        alt="Relaxing app background"
        className="z-0 w-full h-full object-cover"
        src={hot4}
      />
      <CardFooter className="absolute  bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
        <div className="flex flex-grow gap-2 items-center">
          <Image
            alt="Breathing app icon"
            className="rounded-full w-10 h-10 bg-black"
            src={gem}
          />
          <div className="flex flex-col">
          <p className="text-tiny text-white/60">স্বল্প মূল্যে ভালো পণ্য</p>
          </div>
        </div>
       
      </CardFooter>
    </Card>
                </div>
                <div>
                <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-7">
      <CardHeader className="absolute z-10 top-1 flex-col items-start">
        <p className="text-lg text-white uppercase font-bold">পেইন্ট </p>
        <h4 className="text-white font-semibold text-3xl my-5">দীর্ঘস্থায়ী ও ভালো মানের পেইন্ট জব</h4>
      </CardHeader>
      <Image
        removeWrapper
        alt="Relaxing app background"
        className="z-0 w-full h-full object-cover"
        src={hot5}
      />
      <CardFooter className="absolute  bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
        <div className="flex flex-grow gap-2 items-center">
          <Image
            alt="Breathing app icon"
            className="rounded-full w-10 h-10 bg-black"
            src={gem}
          />
          <div className="flex flex-col">
          <p className="text-tiny text-white/60">স্বল্প মূল্যে ভালো পণ্য</p>
          </div>
        </div>
       
      </CardFooter>
    </Card>
                </div>
                <div>
                <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-7">
      <CardHeader className="absolute z-10 top-1 flex-col items-start">
        <p className="text-lg text-white uppercase font-bold">হুউল সিস্টেম</p>
        <h4 className="text-white font-semibold text-3xl my-5">যাত্রা হোক আরামদায়ক</h4>
      </CardHeader>
      <Image
        removeWrapper
        alt="Relaxing app background"
        className="z-0 w-full h-full object-cover"
        src={hot6}
      />
      <CardFooter className="absolute  bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
        <div className="flex flex-grow gap-2 items-center">
          <Image
            alt="Breathing app icon"
            className="rounded-full w-10 h-10 bg-black"
            src={gem}
          />
          <div className="flex flex-col">
          <p className="text-tiny text-white/60">স্বল্প মূল্যে ভালো পণ্য</p>
          </div>
        </div>
       
      </CardFooter>
    </Card>
                </div>
               
    
    
    
    
                </div>
        </div>
    );
};

export default Hotdeals;