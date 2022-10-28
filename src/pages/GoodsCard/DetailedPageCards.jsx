import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation, Mousewheel, Keyboard } from "swiper";
import img1 from '../../images/desktop/desktop-goods-card/img1.png'
import img2 from '../../images/desktop/desktop-goods-card/img2.png'
import img3 from '../../images/desktop/desktop-goods-card/img3.png'
import Card from "../../components/Card";

export default function DetailPage() {

   const [detailedCards, setDetailedCards] = useState([
      { id: 1, img: img1, title: 'Банзай', price: '140', plusBtn:'plus'},
      { id: 2, img: img2, title: 'Филадельфия', price: '170', plusBtn:'plus'},
      { id: 3, img: img3, title: 'Аригато', price: '140', plusBtn:'plus'},
      { id: 4, img: img1, title: 'Банзай', price: '140', plusBtn:'plus'},
      { id: 5, img: img2, title: 'Филадельфия', price: '170', plusBtn:'plus'},
      { id: 6, img: img3, title: 'Аригато', price: '140', plusBtn:'plus'}
   ])

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
         className="mySwiper multiCards lg:block hidden"
      >
         {detailedCards.map(product => {
            return (
               <SwiperSlide key={product.id}>
                  <Card product={product} classes={'w-full mt-5'} />
               </SwiperSlide>
            )
         })}
      </Swiper>
      </div>
   )
}