import React from 'react';
import Img1 from '../../images/desktop/desktop-home-page/img1.png'
import Img2 from '../../images/desktop/desktop-home-page/img2.png'
import Img3 from '../../images/desktop/desktop-home-page/img3.png'
import Img4 from '../../images/desktop/desktop-home-page/img4.png'
import Img5 from '../../images/desktop/desktop-home-page/img5.png'

const Cards = () => {
   return (
      <div className='flex gap-x-5 w-[85%] mx-auto justify-center items-center mt-10'>
         <div className='flex flex-col gap-y-5'>
            <img className='2xl:w-[100%] ' src={Img1} alt="meal" />
            <img className='2xl:w-[100%] ' src={Img2} alt="meal" />
         </div>
         <div className='flex flex-col gap-y-5'>
            <div className='flex gap-3'>
               <img className='2xl:w-[100%] w-[48%]' src={Img3} alt="meal" />
               <img className='2xl:w-[100%] w-[48%]' src={Img4} alt="meal" />
            </div>
            <img className='2xl:w-[100%]' src={Img5} alt="meal" />
         </div>
      </div>
   );
}

export default Cards;
