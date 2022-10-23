import React from 'react';
import Img1 from '../../images/desktop/desktop-home-page/img1.png'
import Img2 from '../../images/desktop/desktop-home-page/img2.png'
import Img3 from '../../images/desktop/desktop-home-page/img3.png'
import Img4 from '../../images/desktop/desktop-home-page/img4.png'
import Img5 from '../../images/desktop/desktop-home-page/img5.png'

const Cards = () => {
   return (
      <div className='sm:flex hidden md:gap-x-5 sm:gap-x-2 w-[85%] mx-auto justify-between items-center mt-10'>
         <div className='flex flex-col gap-y-2 sm:gap-y-5 w-1/2'>
            <img className='2xl:w-full ' src={Img1} alt="meal" />
            <img className='2xl:w-full ' src={Img2} alt="meal" />
         </div>
         <div className='flex flex-col gap-y-2 sm:gap-y-5 w-1/2'>
            <div className='flex justify-between gap-3 sm:gap-x-1'>
               <img className='2xl:w-full w-[48%]' src={Img3} alt="meal" />
               <img className='2xl:w-full w-[48%]' src={Img4} alt="meal" />
            </div>
            <img className='2xl:w-[100%]' src={Img5} alt="meal" />
         </div>
      </div>
   );
}

export default Cards;
