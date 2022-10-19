import React from 'react';
import arrowDown from '../../images/desktop/desktop-goods/arrowDown.png'

const Text = () => {
   return (
      <div className='text-gray-400 text-xs w-[85%] mx-auto mt-10'>
         <p className='2xl:text-2xl text-lg font-semibold mb-2'>Заказать суши в Бишкеке</p>
         <p>Ресторан “Суши и Лапша” предлагаем своим клиентам самые вкусные суши с доставкой на дом, приготовленные по классическим и адаптированным к европейской аудитории рецептам, а также собственным наработкам наших поваров. Мы ценим время наших клиентов, поэтому вы можете заказать суши в Харькове с доставкой на дом или в офис.
            <ul className='list-disc my-2'>
               В нашем меню более 20 видов суши:
               <li className='ml-8'>Классические с сырым лососем, тунцом, окунем.</li>
               <li className='ml-8'>Экзотические с тигровой креветкой, морским гребешком.</li>
               <li className='ml-8'>Пикантные с копченым лососем, угрем.</li>
            </ul>
            В меню также представлены гунканы: с начинкой из красной икры и тобико, а также феликсы, где японский майонез сочетается с рыбой, морепродуктами, угрем. Любители острых блюд могут купить суши с соусом спайси. Популярные начинки — копченая курица, снежный краб, креветки, гребешки, тунец, лосось и окунь.</p>
            <div className='flex items-center justify-center gap-2 my-3'>
               <p className='2xl:text-xl text-base text-orange-500 font-medium'>Подробнее</p>
               <img src={arrowDown} alt="arrowDown" />
            </div>
      </div>
   );
}

export default Text;
