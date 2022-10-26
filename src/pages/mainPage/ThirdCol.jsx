import React from 'react'

import map from '../../images/desktop/desktop-home-page/map.png'
import location from '../../images/desktop/desktop-home-page/location.png'

export default function ThirdCol() {
  
  return (
      <div className='max-w-md mt-10 ml-5 sm:block hidden'>
        <div className='bg-gray py-2 text-center'>
          <p className='2xl:text-2xl md:text-lg sm:text-xs font-medium'>Ваша корзина пуста.</p>
          <p className='mt-1 mb-5 text-gray-500 text-xs'>Добавьте же скорее что-нибудь!</p>
          <button className='bg-orange-400 py-2 text-white w-[100%] text-xs'>Бесплатная доставка от 800 СОМ</button>
        </div>
        <div>
          <img src={map} alt="location" />
          <div className='bg-gray py-2 text-center'>
            <div className='2xl:w-[18%] w-[20%] py-1 -translate-y-7 bg-orange-500 grid items-center justify-center mx-auto rounded-[50%]'>
              <img src={location} alt="location" />
            </div>
            <p className='mt-[-10%] md:text-base sm:text-sm'>Укажите адрес</p>
            <p className='mt-2 text-gray-500 text-xs'>И узнайте время доставки</p>
          </div>
        </div>
      </div>
  )
}
