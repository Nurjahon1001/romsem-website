import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation, Mousewheel, Keyboard } from "swiper";
import FirstCard from "./FirstCard";
import SecondCard from "./SecondCard";
import ThirdCard from "./ThirdCard";

export default function DetailPage() {
   return (
      <div className="w-[85%] mx-auto mb-10">
         <p className="2xl:text-2xl text-xl font-medium text-center my-4">Рекомендуем к этому товару</p>
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
            className="mySwiper goodsCards"
         >
            <SwiperSlide>
               <SecondCard className="p-10"/>
            </SwiperSlide>
            <SwiperSlide>
               <FirstCard />
            </SwiperSlide>
            <SwiperSlide>
               <ThirdCard />
            </SwiperSlide>
            <SwiperSlide>
               <FirstCard />
            </SwiperSlide>
            <SwiperSlide>
               <SecondCard />
            </SwiperSlide>
            <SwiperSlide>
               <ThirdCard />
            </SwiperSlide>
         </Swiper>
      </div>
   )
}