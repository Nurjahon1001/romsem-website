import React from "react";
import clock from "../images/desktop/desktop-home-page/clock.png";
import Group from "../images/desktop/desktop-home-page/Group.png";
import logotablet from "../images/desktop/desktop-home-page/logotablet.svg"
function Navbar() {
  return (
  <div className="font-serif">
    <div className=" xl:text-lg lg:text-base md:text-sm md:flex bg-gray mx-auto justify-between items-center
      xl:px-4 lg:px-2 border-b border-gray-300 hidden ">
      <div className="flex items-center lg:gap-x-7">
      <div className="text-center px-4 border-r  border-gray-300">
        <p>Наш телефон</p>
        <p className="text-red-400">+996 705 188 955</p>
        <p className="text-red-400">+996 555 188 955</p>
        <div className="flex items-center gap-2 justify-center">
          <img src={clock} alt="clock" className="w-4 h-4" />
          <p className="text-neutral-400">работаем с 10:00 до 00:00</p>
        </div>
      </div>
      <div className="pl-1">
          <p className="text-light text-gray-400">Город:</p>
          <p>Бишкек</p>
      </div>
      </div>
      <div className="flex gap-x-96 items-center ">
        <div className="flex lg:justify-between lg:gap-x-8 md:gap-4 items-center">
          <div className="flex flex-col  gap-x-2.5">
            <a>Отзывы</a>
            <a className="text-red-400" href="#">Доставка и оплата</a>
          </div>
          <div>
            <img src={Group} alt="" />
          </div>
        </div>
      </div>
    </div>


    <div className="h-24 mx-auto flex justify-around items-center border-b border-gray-400 md:hidden">
      <div className="flex">
        <img src={logotablet} alt="" />
      </div>
      <div className="flex lg:gap-x-6 items-center md:gap-12 sm:gap-x-10 mobile:gap-6">
        <div className="text-center">
          <p className="2xl:text-lg text-sm">Наш телефон</p>
          <p className="text-orange-500 text-sm">+996 705 188 955</p>
          <p className="text-orange-500 text-sm">+996 555 188 955</p>
        </div>
        <div className=" w-28 mobile:w-20 flex-col justify-center align-center text-center">
          <div className="flex justify-center text-center"><img src={clock} alt="clock" className="w-4 h-4" /></div>
          <p className="text-neutral-400">работаем с 10:00 до 00:00</p>
        </div>
      </div>
      <img className="sm:w-12 sm:h-12 mobile:w-10 mobile:h-10" src={Group} alt="" />
    </div>
  </div>
  );
}

export default Navbar;