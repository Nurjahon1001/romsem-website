import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import main_bg from '../../images/desktop/desktop-goods/main_bg.png'

import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import Button from "../../components/Button";

export default function MainSection() {
   return (
      <Swiper
         cssMode={true}
         navigation={true}
         pagination={{
            clickable: true,
          }}
         mousewheel={true}
         keyboard={true}
         modules={[Navigation, Pagination, Mousewheel, Keyboard]}
         className="mySwiper bg-white mt-5"
      >
         <SwiperSlide>
            <div
               className='flex flex-col items-end h-[50vh] w-[88%] bg-no-repeat bg-contain mx-auto mt-5'
               style={{
                  backgroundImage: `url(${main_bg})`
               }}>
               <i className='text-2xl font-medium'>"Филадельфия и лосось"</i>
               <p className="2xl:text-sm text-xs text-orange-500">1260 грамм 36 кусочек </p>

               <p className="pt-16 font-medium"><p className="block w-[110%] h-[8%] bg-orange-500 translate-y-4 -rotate-12"></p> 1599 СОМ</p>
               <p className="text-2xl pt-1 pb-14 font-bold">599 СОМ</p>
               <Button classes={'px-14'} />
            </div>
         </SwiperSlide>
         <SwiperSlide>
            <div
               className='flex flex-col items-end h-[50vh] w-[88%] bg-no-repeat bg-contain mx-auto  mt-5'
               style={{
                  backgroundImage: `url(${main_bg})`
               }}>
               <i className='text-2xl font-medium'>"Филадельфия и лосось"</i>
               <p className="2xl:text-sm text-xs text-orange-500">1260 грамм 36 кусочек </p>

               <p className="pt-16 font-medium"><p className="block w-[110%] h-[8%] bg-orange-500 translate-y-4 -rotate-12"></p> 1599 СОМ</p>
               <p className="text-2xl pt-1 pb-14 font-bold">599 СОМ</p>
               <Button classes={'px-14'} />
            </div>
         </SwiperSlide>
         <SwiperSlide>
            <div
               className='flex flex-col items-end h-[50vh] w-[88%] bg-no-repeat bg-contain mx-auto  mt-5'
               style={{
                  backgroundImage: `url(${main_bg})`
               }}>
               <i className='text-2xl font-medium'>"Филадельфия и лосось"</i>
               <p className="2xl:text-sm text-xs text-orange-500">1260 грамм 36 кусочек </p>

               <p className="pt-16 font-medium"><p className="block w-[110%] h-[8%] bg-orange-500 translate-y-4 -rotate-12"></p> 1599 СОМ</p>
               <p className="text-2xl pt-1 pb-14 font-bold">599 СОМ</p>
               <Button classes={'px-14'} />
            </div>
         </SwiperSlide>
         <SwiperSlide>
            <div
               className='flex flex-col items-end h-[50vh] w-[88%] bg-no-repeat bg-contain mx-auto  mt-5'
               style={{
                  backgroundImage: `url(${main_bg})`
               }}>
               <i className='text-2xl font-medium'>"Филадельфия и лосось"</i>
               <p className="2xl:text-sm text-xs text-orange-500">1260 грамм 36 кусочек </p>

               <p className="pt-16 font-medium"><p className="block w-[110%] h-[8%] bg-orange-500 translate-y-4 -rotate-12"></p> 1599 СОМ</p>
               <p className="text-2xl pt-1 pb-14 font-bold">599 СОМ</p>
               <Button classes={'px-14'} />
            </div>
         </SwiperSlide>
         <SwiperSlide>
            <div
               className='flex flex-col items-end h-[50vh] w-[88%] bg-no-repeat bg-contain mx-auto  mt-5'
               style={{
                  backgroundImage: `url(${main_bg})`
               }}>
               <i className='text-2xl font-medium'>"Филадельфия и лосось"</i>
               <p className="2xl:text-sm text-xs text-orange-500">1260 грамм 36 кусочек </p>

               <p className="pt-16 font-medium"><p className="block w-[110%] h-[8%] bg-orange-500 translate-y-4 -rotate-12"></p> 1599 СОМ</p>
               <p className="text-2xl pt-1 pb-14 font-bold">599 СОМ</p>
               <Button classes={'px-14'} />
            </div>
         </SwiperSlide>
      </Swiper>
   )
}