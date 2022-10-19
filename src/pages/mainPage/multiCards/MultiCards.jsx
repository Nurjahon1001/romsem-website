import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Import Tab styles 
import 'react-tabs/style/react-tabs.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

// import required modules
import { Pagination, Navigation, Mousewheel, Keyboard } from "swiper";
import SingleCard from "./SingleCard";
import SecondCard from "./SecondCard";
import ThirdCard from "./ThirdCard";

export default function MultiCards() {
  return (
    <div className="overflow-hidden ">

      <div className="w-[86%] mx-auto mt-8">
        <Tabs>
          <TabList>
            <Tab>
              <p className="2xl:text-2xl text-sm font-medium">Новинки</p>
            </Tab>
            <Tab>
              <p className="2xl:text-2xl text-sm text-gray-500">Популярное</p>
            </Tab>
          </TabList>

          <TabPanel>
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
              className="mySwiper multiCards"
            >
              <SwiperSlide>
                <SecondCard />
              </SwiperSlide>
              <SwiperSlide>
                <SingleCard />
              </SwiperSlide>
              <SwiperSlide>
                <ThirdCard />
              </SwiperSlide>
              <SwiperSlide>
                <SingleCard />
              </SwiperSlide>
              <SwiperSlide>
                <SecondCard />
              </SwiperSlide>
              <SwiperSlide>
                <ThirdCard />
              </SwiperSlide>
            </Swiper>
          </TabPanel>
          <TabPanel>
            <Swiper
              slidesPerView={3}
              spaceBetween={30}
              slidesPerGroup={3}
              loop={true}
              loopFillGroupWithBlank={true}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Pagination, Navigation, Mousewheel, Keyboard]}
              className="mySwiper multiCards"
            >
              <SwiperSlide>
                <SingleCard />
              </SwiperSlide>
              <SwiperSlide>
                <SecondCard />
              </SwiperSlide>
              <SwiperSlide>
                <ThirdCard />
              </SwiperSlide>
              <SwiperSlide>
                <SingleCard />
              </SwiperSlide>
              <SwiperSlide>
                <SecondCard />
              </SwiperSlide>
              <SwiperSlide>
                <ThirdCard />
              </SwiperSlide>
            </Swiper>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
}
