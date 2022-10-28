import React, { useState } from "react";
import {Link} from "react-router-dom"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import main_bg from '../../images/desktop/desktop-goods/main_bg.png'
import img1 from '../../images/mobile/mob-home-page/img2.png'
import img2 from '../../images/mobile/mob-home-page/img.png'
import img3 from '../../images/mobile/mob-home-page/img7.png'
import img4 from '../../images/mobile/mob-home-page/img8.png'
import img5 from '../../images/mobile/mob-home-page/img9.png'
import img6 from '../../images/mobile/mob-home-page/img10.png'
import img7 from '../../images/mobile/mob-home-page/Component 12.png'
import img8 from '../../images/mobile/mob-home-page/Component 15.png'
import img9 from '../../images/mobile/mob-home-page/img4.png'
import img10 from '../../images/mobile/mob-home-page/img3.png'
import img11 from '../../images/mobile/mob-home-page/img5.png'
import img12 from '../../images/mobile/mob-home-page/img6.png'
import img13 from '../../images/mobile/mob-home-page/img1.png'

import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import Button from "../../components/Button";

export default function MainSection() {

   const [sliders] = useState([
      { id: 1, img: main_bg, title: "Филадельфия и лосось", slice: "1260 грамм 36 кусочек", price: "1599 СОМ", sale: "599 СОМ" },
      { id: 2, img: main_bg, title: "Филадельфия и лосось", slice: "1260 грамм 36 кусочек", price: "1599 СОМ", sale: "599 СОМ" },
      { id: 3, img: main_bg, title: "Филадельфия и лосось", slice: "1260 грамм 36 кусочек", price: "1599 СОМ", sale: "599 СОМ" },
      { id: 4, img: main_bg, title: "Филадельфия и лосось", slice: "1260 грамм 36 кусочек", price: "1599 СОМ", sale: "599 СОМ" },
      { id: 5, img: main_bg, title: "Филадельфия и лосось", slice: "1260 грамм 36 кусочек", price: "1599 СОМ", sale: "599 СОМ" },
      { id: 6, img: main_bg, title: "Филадельфия и лосось", slice: "1260 грамм 36 кусочек", price: "1599 СОМ", sale: "599 СОМ" },
   ])

   return (
      <>
         <div className="max-w-6xl xl:h-[23%] lg:h-[20%] md:h-[18%] sm:h-[15%] sm:block hidden">
            <Swiper
               cssMode={true}
               navigation={true}
               pagination={{
                  clickable: true,
               }}
               mousewheel={true}
               keyboard={true}
               modules={[Navigation, Pagination, Mousewheel, Keyboard]}
               className="mySwiper bg-white mt-5 h-full"
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
                           <Button classes={'lg:px-14 px-10 xl:py-3 xl:px-24 md:text-2xl sm:text-lg lg:py-2 py-1 mb-5'} />
                        </div>
                     </SwiperSlide>
                  )
               })}
            </Swiper>
         </div>
         <div className="sm:hidden flex flex-wrap justify-around items-center gap-x-2 gap-y-2 w-full px-3 mt-3">
            <img src={img1} alt="img" />
            <Link to="/goods"><img src={img2} alt="img" /></Link>
            <img src={img3} alt="img" />
            <img src={img4} alt="img" />
            <img src={img5} alt="img" />
            <img src={img6} alt="img" />
            <img src={img7} alt="img" />
            <img src={img8} alt="img" />
            <img src={img9} alt="img" />
            <img src={img10} alt="img" />
            <img src={img11} alt="img" />
            <img src={img12} alt="img" />
            <img src={img13} alt="img" />
         </div>
      </>
   )
}