import React from 'react'
import telegram from '../images/desktop/desktop-home-page/telegram.svg'
import whatsapp from '../images/desktop/desktop-home-page/whatsapp.svg'
import instagram from '../images/desktop/desktop-home-page/instagram.svg'
import menu from '../images/mobile/mob-home-page/Vector.png'
import korzina from '../images/mobile/mob-home-page/Frame.png'
import otziv from '../images/mobile/mob-home-page/Frame (1).png'


function Footer() {
  return (
    	<div>
        <div className="font-serif mt-9 m-auto xl:text-lg lg:text-base md:text-sm md:flex hidden bg-gray pt-5">
          <div className='w-[85%] m-auto border-t pt-3 xl:gap-12 2xl:gap-12 2xl:justify-between gap-3 flex border-gray-300'>
            <div className='flex gap-2 flex-col'>
              <a className='lg:text-sm' href="#">О компании</a>
              <a className='lg:text-sm' href="#">Доставка и оплата</a>
              <a className='lg:text-sm' href="#">Лента материалов</a>
              <a className='lg:text-sm' href="#">Политика возврата</a>
            </div>
            <div className='flex-col flex gap-2 border-l px-8 border-r border-gray-300'>
              <div className='flex flex-col gap-2' >
                <p className='lg:text-sm'>Введите номер</p>
                <p className='lg:text-sm'>+996 (__) ___ __ __</p>
                <div className='text-gray-400'>
                  <p className='lg:text-sm'>Выберите удобный</p>
                  <p className='lg:text-sm'>мессенджер для общения</p>
                </div>
              </div>
              <div className='flex gap-3 flex-row'>
                <a href="#"><img className='opacity-25 hover:opacity-100 transition ease-in-out duration-75 2xl:w-[100%] w-[80%]' src={telegram} alt="" /></a>
                <a href="#"><img className='opacity-25 hover:opacity-100 transition ease-in-out duration-75 2xl:w-[100%] w-[80%]' src={whatsapp} alt="" /></a>
                <a href="#"><img className='opacity-25 hover:opacity-100 transition ease-in-out duration-75 2xl:w-[100%] w-[80%]' src={instagram} alt="" /></a>
              </div>
            </div>
            <div className='flex flex-col text-gray-400'>
              <p className='lg:text-sm'>Тел: +996 705 188 955</p>
              <p className='lg:text-sm py-1'>Тел:  +996 555 188 955</p>
              <p className='lg:text-sm'>Адрес:Бакаева 126</p>
            </div>
          </div>
        </div>

        <div className='md:hidden font-serif text-lg'>
          <div className=' m-auto md:hidden flex  bg-gray-200 md:justify-around mobile:flex-col items-center'>
            <div className='flex flex-col items-center'>
              <div className='flex flex-col items-center'>
                <p>Выберите удобный</p>
                <p>мессенджер для общения</p>
              </div>
              <div className='flex gap-3 flex-row'>
                  <a href="#"><img className='opacity-25 hover:opacity-100 transition ease-in-out duration-75' src={telegram} alt="" /></a>
                  <a href="#"><img className='opacity-25 hover:opacity-100 transition ease-in-out duration-75' src={whatsapp} alt="" /></a>
                  <a href="#"><img className='opacity-25 hover:opacity-100 transition ease-in-out duration-75' src={instagram} alt="" /></a>
              </div>
            </div>
            <div className='flex flex-col items-center'>
                <p>Тел:+996 705 188 955</p>
                <p>Тел:+996 555 188 955</p>
                <p>Адрес:Бакаева 126</p>
            </div>
          </div>
          <div className='flex items-center justify-around p-5'>
            <div className='flex flex-col items-center'>
              <img src={menu} alt="" />
              <p>Меню</p>
            </div>
            <div className='flex flex-col items-center'>
              <img src={korzina} alt="" />
              <p>Корзина</p>
            </div>
            <div className='flex flex-col items-center'>
              <img src={otziv} alt="" />
              <p>Отзывы</p>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Footer