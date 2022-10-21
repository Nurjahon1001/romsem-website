import React from 'react'
import {Link} from 'react-router-dom'

import Logo from '../images/desktop/desktop-home-page/Logo.svg'
import Line from '../images/desktop/desktop-home-page/line.png'
import Pizza from '../images/desktop/desktop-home-page/1.png'
import Seti from '../images/desktop/desktop-home-page/seti.png'
import WOK from '../images/desktop/desktop-home-page/WOK.png'
import Roli from '../images/desktop/desktop-home-page/roli.png'
import Sushi from '../images/desktop/desktop-home-page/sushi.png'
import Salati from '../images/desktop/desktop-home-page/salati.png'
import Supi from '../images/desktop/desktop-home-page/supi.png'
import Korn_dogi from '../images/desktop/desktop-home-page/korn_dogi.png'
import Napitki from '../images/desktop/desktop-home-page/napitki.png'
import Aksii from '../images/desktop/desktop-home-page/aksii.png'

function sidebar() {
   return (
      <div className='2xl:w-[15%] lg:w-[12%] md:w-[16%] w-[20%] flex flex-col items-center mt-6 text-center'>
         <div className='flex flex-col items-center 2xl:w-[100%] lg:w-[70%]'>
            <a href="#">
               <img src={Logo} alt="Romsem_logo" />
            </a>
            <img className='2xl:py-7 lg:py-4' src={Line} alt="line" />
         </div>
         <div className='flex flex-col justify-end items-start'>
            <div className={'flex justify-center 2xl:gap-5 gap-3 2xl:pb-7 pb-3'}>
               <img src={Pizza} alt="pizza" />
               <a className='2xl:text-2xl text-base font-normal'>Пицца</a>
            </div>
            <div className={'flex justify-center 2xl:gap-5 gap-3 2xl:pb-7 pb-3'}>
               <img src={Seti} alt="Seti" />
               <Link to="/goods"><span className='2xl:text-2xl text-base font-normal'>Сеты</span></Link>
            </div>
            <div className={'flex justify-center 2xl:gap-5 gap-3 2xl:pb-7 pb-3'}>
               <img src={WOK} alt="pizza" />
               <a className='2xl:text-2xl text-base font-normal'>WOK</a>
            </div>
            <div className={'flex justify-center 2xl:gap-5 gap-3 2xl:pb-7 pb-3'}>
               <img src={Roli} alt="pizza" />
               <a className='2xl:text-2xl text-base font-normal'>Роллы</a>
            </div>
            <div className={'flex justify-center 2xl:gap-5 gap-3 2xl:pb-7 pb-3'}>
               <img src={Sushi} alt="pizza" />
               <a className='2xl:text-2xl text-base font-normal'>Суши</a>
            </div>
            <div className={'flex justify-center 2xl:gap-5 gap-3 2xl:pb-7 pb-3'}>
               <img src={Salati} alt="pizza" />
               <a className='2xl:text-2xl text-base font-normal'>Салаты</a>
            </div>
            <div className={'flex justify-center 2xl:gap-5 gap-3 2xl:pb-7 pb-3'}>
               <img src={Supi} alt="pizza" />
               <a className='2xl:text-2xl text-base font-normal'>Супы</a>
            </div>
            <div className={'flex justify-center 2xl:gap-5 gap-3 2xl:pb-7 pb-3'}>
               <img src={Korn_dogi} alt="pizza" />
               <a className='2xl:text-2xl text-base font-normal'>Корн доги</a>
            </div>
            <div className={'flex justify-center 2xl:gap-5 gap-3 2xl:pb-7 pb-3'}>
               <img src={Napitki} alt="pizza" />
               <a className='2xl:text-2xl text-base font-normal'>Напитки</a>
            </div>
            <div className={'flex justify-center 2xl:gap-5 gap-3 2xl:pb-7 pb-3'}>
               <img src={Aksii} alt="pizza" />
               <a className='2xl:text-2xl text-base font-normal'>Акции</a>
            </div>
         </div>
      </div>
   )
}

export default sidebar