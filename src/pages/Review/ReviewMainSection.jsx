import React from 'react';

const ReviewMain = () => {
   return (
      <div className='w-[65%] mx-auto bg-gray '>
         <div className='w-[95%] mx-auto mt-10'>
            <div className='flex justify-between'>
               <p className='2xl:text-2xl text-xl font-medium'>Отзывы</p>
               <button className='text-gray-300 bg-black pb-1 px-2'>+ Добавить отзыв</button>
            </div>
            <div className='bg-white p-2 mt-5 mb-4'>
               <div className='flex items-center gap-2'>
                  <p className='2xl:text-2xl text-lg font-medium'>Розалия</p>
                  <p className='text-gray-500 text-[9px]'>02.24.21</p>
               </div>
               <p className='2xl:text-sm text-xs mt-2 w-[65%]'>Ваша доставка и ваши блюда лучшие в Харькове!) всегда очень вкусно, вовремя, всегда вежливые курьеры и девушки на телефоне</p>
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
               <p className='2xl:text-sm text-xs mt-2 w-[65%]'>Заказываем у Вас больше 2 -ух лет, были разные ситуации, но сервис стал лучше, суши вкуснее. За доставку сегодня на время, огромное спасибо, точь-в-точь в минута в минуту. Успехов Вам и приятных бонусов нам )</p>
            </div>
         </div>
      </div>
   );
}

export default ReviewMain;
