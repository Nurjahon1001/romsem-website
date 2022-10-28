import React from 'react';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';

const ReviewMain = () => {
   return (
      <div className='max-w-6xl xl:w-full sm:mx-3 lg:mx-auto bg-gray '>
         <Navbar/>
         <div className='w-11/12 mx-auto sm:mt-10 mt-3'>
            <div className='flex sm:justify-between justify-center'>
               <p className='2xl:text-2xl text-xl font-medium'>Отзывы</p>
               <button className='text-gray-300 bg-black pb-1 px-2 sm:block hidden'>+ Добавить отзыв</button>
            </div>
            <div className='bg-white p-2 sm:my-4 my-2'>
               <div className='flex items-center gap-2'>
                  <p className='2xl:text-2xl text-lg font-medium'>Розалия</p>
                  <p className='text-gray-500 text-[9px]'>02.24.21</p>
               </div>
               <p className='2xl:text-sm text-xs mt-2 w-[65%]'>Ваша доставка и ваши блюда лучшие в Харькове! всегда очень вкусно, вовремя, всегда вежливые курьеры и девушки на телефоне</p>
            </div>
            <div className='bg-white p-2 mb-4'>
               <div className='flex items-center gap-2'>
                  <p className='2xl:text-2xl text-lg font-medium'>Елена</p>
                  <p className='text-gray-500 text-[9px]'>02.24.21</p>
               </div>
               <p className='2xl:text-sm text-xs mt-2 w-[65%]'>Ооочень вкусно!!!!!</p>
            </div>
            <div className='bg-white p-2 mb-4'>
               <div className='flex items-center gap-2'>
                  <p className='2xl:text-2xl text-lg font-medium'>Сергей Гаврилюк</p>
                  <p className='text-gray-500 text-[9px]'>02.24.21</p>
               </div>
               <p className='2xl:text-sm text-xs mt-2 w-[65%]'>Заказываем у Вас больше 2 -ух лет, были разные ситуации, но сервис стал лучше, суши вкуснее. За доставку сегодня на время, огромное спасибо, точь-в-точь в минута в минуту. Успехов Вам и приятных бонусов нам</p>
            </div>
            <button className='text-gray-300 w-full py-1 rounded-md bg-black px-2 block sm:hidden'>+ Добавить отзыв</button>
         </div>
         <Footer/>
      </div>
   );
}

export default ReviewMain;
