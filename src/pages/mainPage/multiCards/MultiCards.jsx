import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { defaultProducts } from "../../Sliders";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Import Tab styles 
import 'react-tabs/style/react-tabs.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

// import required modules
import { Pagination, Navigation, Mousewheel, Keyboard } from "swiper";
import Button from "../../../components/Button";

export default function MultiCards() {
  return (
    <div className="overflow-hidden sm:block hidden">
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
              className="mySwiper multiCards lg:block hidden"
            >
              {defaultProducts.map(product => {
                return (
                  <SwiperSlide>
                    <div key={product.id} className='bg-white p-2 2xl:h-[470px] xl:h-[420px] lg:h-[330px] flex flex-col justify-between'>
                      <img className="" src={product.img} alt="meal" />
                      <p className='xl:text-2xl text-xl font-medium pt-3'>{product.title}</p>
                      <div className="flex gap-2 items-center">
                        <p className='2xl:text-lg xl:text-lg text-sm text-gray-400 pt-1 pb-3'>{product.weight} грамм</p>
                        <p className='2xl:text-lg xl:text-lg text-sm text-gray-400 pt-1 pb-3'>{product.slice} кусочков</p>
                      </div>
                      <div className='flex gap-1 items-center justify-between border-t-2 py-2'>
                        <p className='2xl:text-2xl xl:text-xl lg:text-lg text-sm font-bold'>{product.price} СОМ</p>
                        <Button classes={"py-3 2xl:px-10 xl:px-7 px-4"} />
                      </div>
                    </div>
                  </SwiperSlide>
                )
              })}
            </Swiper>
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
                    <div key={product.id} className='bg-white p-2 md:h-full sm:h-[270px] flex flex-col justify-between'>
                      <img className="w-[90%]" src={product.img} alt="meal" />
                      <p className='text-base font-medium pt-3'>{product.title}</p>
                      <div className="flex gap-2 items-center">
                        <p className='text-xs text-gray-400 pt-1 pb-3'>{product.weight} грамм</p>
                        <p className='text-xs text-gray-400 pt-1 pb-3'>{product.slice} кусочков</p>
                      </div>
                      <div className='flex md:gap-2 items-center justify-between border-t-2 py-2'>
                        <p className='text-sm font-bold'>{product.price} СОМ</p>
                        <Button classes={"py-1 px-3"} />
                      </div>
                    </div>
                  </SwiperSlide>
                )
              })}
            </Swiper>
          </TabPanel>
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
              className="mySwiper multiCards lg:block hidden"
            >
              {defaultProducts.map(product => {
                return (
                  <SwiperSlide>
                    <div key={product.id} className='bg-white p-2 2xl:h-[440px] xl:h-[420px] lg:h-[350px] flex flex-col justify-between'>
                      <img className="" src={product.img} alt="meal" />
                      <p className='xl:text-2xl text-xl font-medium pt-3'>{product.title}</p>
                      <div className="flex gap-2 items-center">
                        <p className='2xl:text-lg xl:text-lg text-sm text-gray-400 pt-1 pb-3'>{product.weight} грамм</p>
                        <p className='2xl:text-lg xl:text-lg text-sm text-gray-400 pt-1 pb-3'>{product.slice} кусочков</p>
                      </div>
                      <div className='flex gap-1 items-center justify-between border-t-2 py-2'>
                        <p className='xl:text-2xl text-sm font-bold'>{product.price} СОМ</p>
                        <Button classes={"py-3 2xl:px-10 xl:px-7 px-4"} />
                      </div>
                    </div>
                  </SwiperSlide>
                )
              })}
            </Swiper>
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
                    <div key={product.id} className='bg-white p-2 md:h-full sm:h-[270px] flex flex-col justify-between'>
                      <img className="w-[90%]" src={product.img} alt="meal" />
                      <p className='text-base font-medium pt-3'>{product.title}</p>
                      <div className="flex gap-2 items-center">
                        <p className='text-xs text-gray-400 pt-1 pb-3'>{product.weight} грамм</p>
                        <p className='text-xs text-gray-400 pt-1 pb-3'>{product.slice} кусочков</p>
                      </div>
                      <div className='flex md:gap-2 items-center justify-between border-t-2 py-2'>
                        <p className='text-sm font-bold'>{product.price} СОМ</p>
                        <Button classes={"py-1 px-3"} />
                      </div>
                    </div>
                  </SwiperSlide>
                )
              })}
            </Swiper>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
}
