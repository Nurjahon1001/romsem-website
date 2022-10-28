import React from 'react';
import arrowDown from '../../images/desktop/desktop-goods/arrowDown.png'

const Text = () => {
   return (
      <div className='text-gray-400 text-xs sm:w-[85%] w-full mx-auto sm:px-0 px-4 sm:mt-10'>
         <p className='2xl:text-2xl text-lg font-semibold my-2'>Заказать суши в Бишкеке</p>
         <div>
            <p>Ресторан “Суши и Лапша” предлагаем своим клиентам самые вкусные суши с доставкой на дом, приготовленные по классическим и адаптированным к европейской аудитории рецептам, а также собственным наработкам наших поваров. Мы ценим время наших клиентов, поэтому вы можете заказать суши в Харькове с доставкой на дом или в офис.</p>
            <ul className='list-disc my-2 space-x-8'>
               В нашем меню более 20 видов суши:
               <li>Классические с сырым лососем, тунцом, окунем.</li>
               <li>Экзотические с тигровой креветкой, морским гребешком.</li>
               <li>Пикантные с копченым лососем, угрем.</li>
            </ul>
            <p>
               В меню также представлены гунканы: с начинкой из красной икры и тобико, а также феликсы, где японский майонез сочетается с рыбой, морепродуктами, угрем. Любители острых блюд могут купить суши с соусом спайси. Популярные начинки — копченая курица, снежный краб, креветки, гребешки, тунец, лосось и окунь.</p>
         </div>
         <div className='flex items-center justify-center gap-2 my-3'>
            <p className='2xl:text-xl text-base text-orange-500 font-medium'>Подробнее</p>
            <img src={arrowDown} alt="arrowDown" />
         </div>
      </div>
   );
}

export default Text;
