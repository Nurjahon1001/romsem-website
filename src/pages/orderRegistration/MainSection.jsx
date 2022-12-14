import React from "react";
import Frame from "../../images/desktop/Frame.svg";
import Image2 from "../../images/desktop/Vector10.svg";
import Tick from "../../images/desktop/Group 13 (4).png";
import Vector from "../../images/mobile/Vector 11.svg";
import Plus from "../../images/mobile/Group 15.png";
import Navbar from "../../components/Navbar";

function MainSection() {
  return (
    <>
        <div>
          <Navbar className="sm:hidden block bg-white" />
          <div className="md:h-screen sm:py-14 py-3 px-5 bg-gray">
            <div className="mx-auto max-w-3xl">
              <p className="text-2xl font-medium sm:text-start text-center">
                Ваши данные
              </p>
              <form className="sm:mt-8 mt-3">
                <div className="lg:flex lg:gap-x-10">
                  <div className="lg:basis-3/5">
                    <div className="flex sm:gap-5 gap-2">
                      <div className="mb-5 w-full">
                        <input
                          type="text"
                          className="rounded p-2.5 w-full"
                          placeholder="Телефон"
                        />
                      </div>
                      <div className="mb-5 w-full">
                        <input
                          type="text"
                          className="rounded p-2.5 w-full"
                          placeholder="Имя"
                        />
                      </div>
                    </div>
                    <div className="flex mb-5">
                      <button className="flex w-1/2 bg-orange-400 px-5 gap-3 py-2.5 items-center text-white rounded-tl-md rounded-bl-md">
                        <img src={Image2} alt="frame" />
                        Наличными
                      </button>
                      <button className="flex w-1/2 gap-3 py-2.5 items-center px-11 rounded-tr-md rounded-br-md bg-white">
                        <img src={Frame} alt="frame" />
                        Картой
                      </button>
                    </div>
                    <div className="mb-5 flex justify-between ">
                      <label
                        htmlFor="sum"
                        className=" flex items-center gap-x-2"
                      >
                        <img src={Tick} className="w-5 h-5" alt="tick" />
                        <span className="lg:text-lg">Подготовить сдачу с</span>
                      </label>
                      <input
                        type="text"
                        id="sum"
                        className="w-28 rounded p-2.5 h-10"
                        placeholder="Сумма"
                      />
                    </div>
                    <div className="mb-5">
                      <input
                        type="text"
                        className="rounded p-2.5 w-full"
                        placeholder="Комменатрий к заказу"
                      />
                    </div>
                    <div className="mb-5">
                      <div className="flex justify-between">
                        <p className="sm:text-lg text-base font-medium">
                          Палочки + соусник обычные
                        </p>
                        <div className="flex items-center">
                          <img src={Vector} alt="vector" />
                          <span className="text-lg font-bold mx-2">10</span>
                          <img src={Plus} className="w-4" alt="plus" />
                        </div>
                      </div>
                      <div className="flex justify-between">
                        <p className="sm:text-lg text-base font-medium">
                          Палочки + соусник обычные
                        </p>
                        <div className="flex items-center">
                          <img src={Vector} alt="vector" />
                          <span className="text-lg font-bold mx-2">10</span>
                          <img src={Plus} className="w-4" alt="plus" />
                        </div>
                      </div>
                    </div>
                    <div className="my-10">
                      <input
                        type="text"
                        className="rounded p-2.5 w-full"
                        placeholder="Введите промокод"
                      />
                    </div>
                  </div>

                  <div className="lg:basis-2/5">
                    <div className="flex mb-5">
                      <button className="w-1/2 px-12 bg-orange-400 text-center gap-3 py-2.5  text-white rounded-tl-md rounded-bl-md">
                        Курьером
                      </button>
                      <button className="w-1/2 gap-3 px-10 py-2.5  text-center  rounded-tr-md rounded-br-md bg-white">
                        Самовывоз
                      </button>
                    </div>
                    <div className="flex gap-5 justify-between">
                      <div className="mb-5 w-full">
                        <input
                          type="text"
                          className="rounded p-2.5 lg:w-72 w-full"
                          placeholder="Улица"
                        />
                      </div>
                      <div className="mb-5 w-full">
                        <input
                          type="text"
                          className="rounded p-2.5 lg:w-20 w-full"
                          placeholder="Дом"
                        />
                      </div>
                    </div>
                    <div className="grid lg:grid-cols-4 grid-cols-2  gap-x-5 justify-between">
                      <div className="mb-5">
                        <input
                          type="text"
                          placeholder="Кв"
                          className="rounded w-full p-2.5"
                        />
                      </div>
                      <div className="mb-5">
                        <input
                          type="text"
                          placeholder="Подъезд"
                          className="rounded w-full p-2.5"
                        />
                      </div>
                      <div className="mb-5">
                        <input
                          type="text"
                          placeholder="Этаж"
                          className="rounded w-full p-2.5"
                        />
                      </div>
                      <div className="mb-5">
                        <input
                          type="text"
                          placeholder="Код"
                          className="rounded w-full p-2.5"
                        />
                      </div>
                    </div>
                    <div className="flex mb-5">
                      <button className="w-1/2 sm:px-12 bg-orange-400 text-center gap-3 py-2.5 text-white rounded-tl-md rounded-bl-md">
                        На сейчас
                      </button>
                      <button className="w-1/2 gap-3 px-10 py-2.5 text-center rounded-tr-md rounded-br-md bg-white">
                        На время
                      </button>
                    </div>
                    <div className="mb-5">
                      <input
                        type="email"
                        className="rounded p-2.5 w-full"
                        placeholder="E-mail(необязательно)"
                      />
                    </div>
                  </div>
                </div>
                <div className="my-3">
                  <button className="p-2.5 bg-orange-500 text-white w-full rounded font-medium text-lg">
                    Оформить заказ
                  </button>
                </div>
                <p className="mb-5 text-sm text-center sm:block hidden">
                  Нажимая на кнопку Оформить заказ, Вы подтверждаете свое
                  согласие на обработку персональных данных в соответствии с{" "}
                  <u>Публичной оффертой</u>
                </p>
              </form>
            </div>
          </div>
        </div>
     
    </>
  );
}

export default MainSection;
