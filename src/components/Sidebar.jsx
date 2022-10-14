import React from 'react'
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
      <div className='xl:w-[9%] lg:w-[15%] w-[30%]  mx-auto mt-6 text-center'>
         <div className='flex flex-col items-center'>
            <a href="#">
               <img src={Logo} alt="Romsem_logo" />
            </a>
            <img className='py-7' src={Line} alt="line" />
         </div>
         <div className='flex flex-col justify-end mx-auto items-start'>
            <div className={'flex justify-center gap-5 pb-7'}>
               <img src={Pizza} alt="pizza" />
               <p className='xl:text-2xl lg:text-xl text-base font-normal'>Пицца</p>
            </div>
            <div className={'flex justify-center gap-5 pb-7'}>
               <img src={Seti} alt="Seti" />
               <p className='xl:text-2xl lg:text-xl text-base font-normal'>Сеты</p>
            </div>
            <div className={'flex justify-center gap-5 pb-7'}>
               <img src={WOK} alt="pizza" />
               <p className='xl:text-2xl lg:text-xl text-base font-normal'>WOK</p>
            </div>
            <div className={'flex justify-center gap-5 pb-7'}>
               <img src={Roli} alt="pizza" />
               <p className='xl:text-2xl lg:text-xl text-base font-normal'>Роллы</p>
            </div>
            <div className={'flex justify-center gap-5 pb-7'}>
               <img src={Sushi} alt="pizza" />
               <p className='xl:text-2xl lg:text-xl text-base font-normal'>Суши</p>
            </div>
            <div className={'flex justify-center gap-5 pb-7'}>
               <img src={Salati} alt="pizza" />
               <p className='xl:text-2xl lg:text-xl text-base font-normal'>Салаты</p>
            </div>
            <div className={'flex justify-center gap-5 pb-7'}>
               <img src={Supi} alt="pizza" />
               <p className='xl:text-2xl lg:text-xl text-base font-normal'>Супы</p>
            </div>
            <div className={'flex justify-center gap-5 pb-7'}>
               <img src={Korn_dogi} alt="pizza" />
               <p className='xl:text-2xl lg:text-xl text-base font-normal'>Корн доги</p>
            </div>
            <div className={'flex justify-center gap-5 pb-7'}>
               <img src={Napitki} alt="pizza" />
               <p className='xl:text-2xl lg:text-xl text-base font-normal'>Напитки</p>
            </div>
            <div className={'flex justify-center gap-5 pb-7'}>
               <img src={Aksii} alt="pizza" />
               <p className='xl:text-2xl lg:text-xl text-base font-normal'>Акции</p>
            </div>
         </div>
      </div>
   )
}

export default sidebar