import React from 'react'
import {Link} from "react-router-dom"
import telegram from '../images/desktop/desktop-home-page/telegram.svg'
import whatsapp from '../images/desktop/desktop-home-page/whatsapp.svg'
import instagram from '../images/desktop/desktop-home-page/instagram.svg'
import menu from '../images/mobile/mob-home-page/Vector.png'
import korzina from '../images/mobile/mob-home-page/Frame.png'
import otziv from '../images/mobile/mob-home-page/Frame (1).png'


function Footer() {
  return (
    <div>
      <div className="mt-9 m-auto xl:text-lg lg:text-base md:text-sm md:flex hidden bg-gray pt-5">
        <div className='w-[85%] m-auto border-t pt-3 xl:gap-12 2xl:gap-12 2xl:justify-between gap-3 flex border-gray-300'>
          <div className='flex gap-2 flex-col'>
            <Link className='lg:text-sm'>О компании</Link>
            <Link className='lg:text-sm'>Доставка и оплата</Link>
            <Link className='lg:text-sm'>Лента материалов</Link>
            <Link className='lg:text-sm'>Политика возврата</Link>
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
              <Link><img className='socialMedia 2xl:w-[100%] w-[80%]' src={telegram} alt="telegram" /></Link>
              <Link><img className='socialMedia 2xl:w-[100%] w-[80%]' src={whatsapp} alt="whatsapp" /></Link>
              <Link><img className='socialMedia 2xl:w-[100%] w-[80%]' src={instagram} alt="instagram" /></Link>
            </div>
          </div>
          <div className='flex flex-col text-gray-400'>
            <p className='lg:text-sm'>Тел: +996 705 188 955</p>
            <p className='lg:text-sm py-1'>Тел:  +996 555 188 955</p>
            <p className='lg:text-sm'>Адрес:Бакаева 126</p>
          </div>
        </div>
      </div>

      <div className='md:hidden'>
        <div className='md:hidden flex bg-gray justify-around mobile:flex-col items-center py-2 border-b-2'>
          <div className='flex flex-col items-center'>
            <div className='flex flex-col items-center'>
              <p className='text-sm text-gray-400'>Выберите удобный</p>
              <p className='text-sm text-gray-400'>мессенджер для общения</p>
            </div>
            <div className='flex gap-3 flex-row'>
              <Link><img className='socialMedia w-[70%]' src={telegram} alt="telegram" /></Link>
              <Link><img className='socialMedia w-[70%]' src={whatsapp} alt="whatsapp" /></Link>
              <Link><img className='socialMedia w-[70%]' src={instagram} alt="instagram" /></Link>
            </div>
          </div>
          <div className='flex flex-col items-center'>
            <p className='text-sm text-gray-400'>Тел:+996 705 188 955</p>
            <p className='text-sm text-gray-400'>Тел:+996 555 188 955</p>
            <p className='text-sm text-gray-400'>Адрес:Бакаева 126</p>
          </div>
        </div>
        <div className='sm:hidden flex items-center justify-around p-5'>
          <div className='flex flex-col items-center'>
            <img src={menu} alt="" />
            <p className='text-sm'>Меню</p>
          </div>
          <div className='flex flex-col items-center'>
            <img src={korzina} alt="" />
            <p className='text-sm'>Корзина</p>
          </div>
          <div className='flex flex-col items-center'>
            <img src={otziv} alt="" />
            <p className='text-sm'>Отзывы</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer