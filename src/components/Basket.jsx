import React from 'react'
import FirstImage from '../images/mobile/Rectangle 16.png'
import Vector from '../images/mobile/Vector 11.svg'
import Plus from '../images/mobile/Group 15.png'

function Basket() {
    return (
        <div className='lg:h-screen flex flex-col justify-between pr-16'>
            <div className='hidden lg:block pt-14 pl-16'>
                <button className='text-2xl text-medium text-black py-2.5 bg-slate-100 rounded-md px-24'>Корзина</button>
                <div className="flex mt-2.5 gap-x-7">
                    <div>
                        <img src={FirstImage} className="w-full" alt="sushi" />
                    </div>
                    <div className="mt-0.5">
                        <span className='text-lg'>Самая большая Фи...</span>
                        <div className="flex items-center gap-7">
                            <div className='flex items-center'>
                                <img src={Vector} alt="vector" />
                                <span className='text-lg font-bold mx-2'>10</span>
                                <img src={Plus} className="w-5 h-5" alt="plus" />
                            </div>
                            <span className='text-lg font-bold'>170 СОМ</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mb-9'>
                <div  className='max-w-sm mx-auto lg:mx-0 border-b-2'>
                    <div className="flex justify-between pl-16">
                      <p className="text-lg font-medium">1 товар</p>
                      <p className="text-lg font-medium">170 СОМ</p>  
                    </div>
                </div>
                <div className='border-b-2 max-w-sm mx-auto lg:mx-0'>
                    <div className="flex justify-between pl-16">
                      <p className="text-lg font-medium">Скидка</p>
                      <p className="text-lg font-medium ">0 СОМ</p>  

                    </div>
                </div>
                <div className='border-b-2 max-w-sm mx-auto lg:mx-0'>
                    <div className="flex justify-between pl-16">
                      <p className="text-lg font-medium">Доставка</p>
                      <p className="text-lg font-medium">Бесплатно</p>  
                    </div>
                </div>
                <div className='border-b-2 max-w-sm mx-auto lg:mx-0'>
                    <div className="flex justify-between pl-16 text-orange-500">
                      <p className="text-lg font-medium">Доставка</p>
                      <p className="text-lg font-medium">Бесплатно</p>  

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Basket;