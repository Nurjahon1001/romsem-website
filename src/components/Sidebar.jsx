import React from 'react'
import { Link } from 'react-router-dom'

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
      <div className='max-w-sm sm:flex flex-col items-center mt-6 text-center hidden'>
         <div className='flex flex-col items-center md:w-[100%] w-[70%]'>
            <Link to="/">
               <img src={Logo} alt="Logo" />
            </Link>
            <img className='2xl:py-7 py-4' src={Line} alt="line" />
         </div>
         <div className='flex flex-col justify-end items-start'>
            <div className={'sidebarLinkDiv'}>
               <img src={Pizza} alt="pizza" />
               <Link to="/" className='sidebarLink'>Пицца</Link>
            </div>
            <div className={'sidebarLinkDiv'}>
               <img src={Seti} alt="Seti" />
               <Link to="goods" className='sidebarLink'>Сеты</Link>
               <Link to="/"><span className='sidebarLink'></span></Link>
            </div>
            <div className={'sidebarLinkDiv'}>
               <img src={WOK} alt="pizza" />
               <Link to="/" className='sidebarLink'>WOK</Link>
            </div>
            <div className={'sidebarLinkDiv'}>
               <img src={Roli} alt="pizza" />
               <Link to="/" className='sidebarLink'>Роллы</Link>
            </div>
            <div className={'sidebarLinkDiv'}>
               <img src={Sushi} alt="pizza" />
               <Link to="/" className='sidebarLink'>Суши</Link>
            </div>
            <div className={'sidebarLinkDiv'}>
               <img src={Salati} alt="pizza" />
               <Link to="/" className='sidebarLink'>Салаты</Link>
            </div>
            <div className={'sidebarLinkDiv'}>
               <img src={Supi} alt="pizza" />
               <Link to="/" className='sidebarLink'>Супы</Link>
            </div>
            <div className={'sidebarLinkDiv'}>
               <img src={Korn_dogi} alt="pizza" />
               <Link to="/" className='sidebarLink  flex-none'>Корн доги</Link>
            </div>
            <div className={'sidebarLinkDiv'}>
               <img src={Napitki} alt="pizza" />
               <Link to="/" className='sidebarLink'>Напитки</Link>
            </div>
            <div className={'sidebarLinkDiv'}>
               <img src={Aksii} alt="pizza" />
               <Link to="/" className='sidebarLink'>Акции</Link>
            </div>
         </div>
      </div>
   )
}

export default sidebar