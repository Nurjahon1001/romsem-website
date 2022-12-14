import React from "react";
import { Link } from 'react-router-dom'
import clock from "../images/desktop/desktop-home-page/clock.png";
import Group from "../images/desktop/desktop-home-page/Group.png";
import logotablet from "../images/desktop/desktop-home-page/logotablet.svg"
function Navbar() {
  return (
    <div className="font-serif">
      <div className="2xl:text-lg lg:text-sm sm:flex bg-gray mx-auto justify-between items-center lg:px-3 border-b border-gray-300 hidden">
        <div className="flex items-center lg:gap-x-7">
          <div className="text-center px-4 border-r border-gray-300">
            <p className="lg:text-base md:text-sm sm:text-xs">Наш телефон</p>
            <p className="text-orange-400 sm:text-xs">+996 705 188 955</p>
            <p className="text-orange-400 sm:text-xs">+996 555 188 955</p>
            <div className="flex items-center gap-2 justify-center">
              <img src={clock} alt="clock" className="w-4 h-4" />
              <p className="text-neutral-400 lg:text-base md:text-sm sm:text-[10px]">работаем с 10:00 до 00:00</p>
            </div>
          </div>
          <div className="pl-1">
            <p className="text-light text-gray-400 lg:text-base md:text-sm sm:text-xs">Город:</p>
            <p className="lg:text-base md:text-sm sm:text-xs">Бишкек</p>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex lg:justify-between lg:gap-x-8 md:gap-4 items-center">
            <div className="flex flex-col mx-3 gap-x-2.5">
              <Link className="hover:text-orange-600 lg:text-base md:text-sm sm:text-xs" to="/review">Отзывы</Link>
              <Link className="hover:text-orange-600 lg:text-base md:text-sm sm:text-xs" to="/order">Доставка и оплата</Link>
            </div>
            <div className="mr-3">
              <img src={Group} alt="" />
            </div>
          </div>
        </div>
      </div>


      <div className="py-2 bg-white mx-auto flex justify-around items-center border-b border-gray-300 sm:hidden">
        <div className="flex">
          <Link to="/"><img src={logotablet} alt="" /></Link>
        </div>
        <div className="flex lg:gap-x-6 items-center md:gap-12 sm:gap-x-10 mobile:gap-6">
          <div className="text-center">
            <p className="xl:text-lg text-[10px]">Наш телефон</p>
            <p className="text-orange-500 sm:text-sm text-[10px]">+996 705 188 955</p>
            <p className="text-orange-500 sm:text-sm text-[10px]">+996 555 188 955</p>
          </div>
          <div className=" w-28 mobile:w-20 flex-col justify-center align-center text-center">
            <div className="flex justify-center text-center"><img src={clock} alt="clock" className="w-4 h-4" /></div>
            <p className="text-neutral-400 text-[11px]">работаем с 10:00 до 00:00</p>
          </div>
        </div>
        <img className="sm:w-12 sm:h-12 mobile:w-10 mobile:h-10" src={Group} alt="" />
      </div>
    </div>
  );
}

export default Navbar;