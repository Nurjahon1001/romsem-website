import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Mousewheel, Keyboard } from "swiper";
import Card from "../components/Card";
import { defaultProducts } from '../constants/data/defaultProducts';


const ThreeCardSwiper = () => {
   return (
      <Swiper
         slidesPerView={3}
         spaceBetween={30}
         slidesPerGroup={3}
         loop={false}
         loopFillGroupWithBlank={false}
         pagination={{
            clickable: true,
         }}
         navigation={true}
         modules={[Pagination, Navigation, Mousewheel, Keyboard]}
         className="mySwiper multiCards lg:block hidden"
      >
         {defaultProducts.map(product => {
            return (
               <SwiperSlide>
                  <Card product={product} />
               </SwiperSlide>
            )
         })}
      </Swiper>
   );
}

export default ThreeCardSwiper;
