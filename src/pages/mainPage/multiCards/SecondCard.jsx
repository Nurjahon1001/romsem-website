import React from 'react';
import img1 from '../../../images/desktop/desktop-goods/img2.png'
import Button from '../../../components/Button'

const SecondCard = () => {
   return (
      <div className='bg-white p-2'>
         <img src={img1} alt="meal" />
         <p className='2xl:text-2xl text-base font-medium pt-3'>Филадельфия и лосось сет</p>
         <p className='2xl:text-lg text-xs text-gray-400 pt-1 pb-3'>1260 грамм, 36 кусочков</p>
         <div className='flex gap-2 items-center border-t-2 py-2'>
            <p className='2xl:text-2xl text-sm font-bold'>1150 СОМ</p>
            <Button classes={"py-1 2xl:px-10 px-6"} />
         </div>
      </div>
   );
}

export default SecondCard;