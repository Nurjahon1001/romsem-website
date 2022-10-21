import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import main_bg from '../../images/desktop/desktop-goods/main_bg.png'

import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import Button from "../../components/Button";

export default function MainSection() {

   const [sliders, setSliders] = useState([
      { id: 1, img: main_bg, title: "Филадельфия и лосось", slice: "1260 грамм 36 кусочек", price: "1599 СОМ", sale: "599 СОМ" },
      { id: 2, img: main_bg, title: "Филадельфия и лосось", slice: "1260 грамм 36 кусочек", price: "1599 СОМ", sale: "599 СОМ" },
      { id: 3, img: main_bg, title: "Филадельфия и лосось", slice: "1260 грамм 36 кусочек", price: "1599 СОМ", sale: "599 СОМ" },
      { id: 4, img: main_bg, title: "Филадельфия и лосось", slice: "1260 грамм 36 кусочек", price: "1599 СОМ", sale: "599 СОМ" },
      { id: 5, img: main_bg, title: "Филадельфия и лосось", slice: "1260 грамм 36 кусочек", price: "1599 СОМ", sale: "599 СОМ" },
      { id: 6, img: main_bg, title: "Филадельфия и лосось", slice: "1260 грамм 36 кусочек", price: "1599 СОМ", sale: "599 СОМ" },
   ])

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
         {sliders.map(item => {
            return (
               <SwiperSlide>
                  <div
                     className='mainPageSlider'
                     style={{
                        backgroundImage: `url(${item.img})`
                     }}>
                     <div className="flex flex-col items-end">
                        <i className='mainPageSliderTitle'>{item.title}</i>
                        <p className="2xl:text-sm text-xs text-orange-500 pt-2">{item.slice}</p>
                     </div>
                     <div className="flex flex-col items-end">
                        <p className="font-medium"><span className="mainPageSliderPrice"></span>{item.price}</p>
                        <p className=" mainPageSliderSale">{item.sale}</p>
                     </div>
                     <Button classes={'px-14 mb-5'} />
                  </div>
               </SwiperSlide>
            )
         })}
      </Swiper>
   )
}