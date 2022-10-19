import React from 'react';
import img1 from '../../images/desktop/desktop-goods-card/img1.png'
import smallPlus from '../../images/desktop/desktop-goods-card/smallPlus.png'

const FirstCard = ({ classes, title, price, img }) => {
   return (
      <div className='w-[70%] text-center'>
         <div>
            <img className='' src={img} alt="meal" />
         </div>
         <p className='2xl:text-base text-xs font-medium pt-1'>{title}</p>
         <div className='flex gap-2 justify-center items-center mt-1'>
            <p className='2xl:text-2xl text-base font-bold'>{price}</p>
            <img className='w-[12%]' src={smallPlus} alt="plus" />
         </div>
      </div>
   );
}

export default FirstCard;