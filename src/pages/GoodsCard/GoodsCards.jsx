import React from 'react';
import { Link } from 'react-router-dom'

import goodsCardImg from '../../images/desktop/desktop-goods-card/goodsCard.png'
import smallPlus from '../../images/desktop/desktop-goods-card/smallPlus.png'
import leftArrow from '../../images/desktop/desktop-goods-card/leftArrow.png'
import rightArrow from '../../images/desktop/desktop-goods-card/rightArrow.png'
import smallLine from '../../images/desktop/desktop-goods-card/shortLine.png'
import Button from '../../components/Button'
import Goodscard_Cards from './Goodscard_Cards';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const GoodsCard = () => {
   return (
      <div className='w-[65%] mx-auto bg-gray'>
         <Navbar/>
         <div className='flex justify-between mt-5 w-[90%] mx-auto'>
            <Link to="/goods">
               <div className='flex gap-2 items-center'>
                  <img src={leftArrow} alt="leftArrow" />
                  <p>Назад</p>
               </div>
            </Link>
            <div className='flex gap-2 items-center'>
               <p>Вперед</p>
               <img src={rightArrow} alt="rightArrow" />
            </div>
         </div>
         <div className='flex items-center bg-white mt-10'>
            <img className='w-[50%]' src={goodsCardImg} alt="meal" />
            <div
               className='h-[50vh] w-[40%] mt-5'>
               <p className='2xl:text-4xl sm:text-3xl text-2xl font-medium'>Филадельфия и лосось сет</p>
               <p className="2xl:text-sm text-xs text-orange-500 mt-1">290 грамм</p>
               <div className='flex gap-3 items-center mt-7'>
                  <p className=" text-lg font-medium">1150 СОМ </p>
                  <img src={smallLine} alt="plus" />
                  <p className=" text-lg font-medium">10</p>
                  <img src={smallPlus} alt="plus" />
               </div>
               <p className="text-xs pt-3 font-medium">Состав</p>
               <p className="text-xs text-gray-500 pb-4">Лосось, сыр "Филадельфия", огурец, авокадо</p>
               <Button classes={'px-12 py-1'} />
            </div>
         </div>
         <Goodscard_Cards />
         <Footer/>
      </div>
   );
}

export default GoodsCard;
