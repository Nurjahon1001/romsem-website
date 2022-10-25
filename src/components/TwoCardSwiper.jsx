import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Mousewheel, Keyboard } from "swiper";
import Card from "../components/Card";
import { defaultProducts } from '../constants/data/defaultProducts';


const SwiperCard = () => {
   return (
      <Swiper
         slidesPerView={2}
         spaceBetween={30}
         slidesPerGroup={2}
         loop={false}
         loopFillGroupWithBlank={false}
         pagination={{
            clickable: true,
         }}
         navigation={true}
         modules={[Pagination, Navigation, Mousewheel, Keyboard]}
         className="mySwiper multiCards lg:hidden block"
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

export default SwiperCard;
