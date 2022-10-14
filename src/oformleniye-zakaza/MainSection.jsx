import React from 'react'
import Frame from '../images/desktop/Frame.svg'
import Image2 from '../images/desktop/Vector10.svg'
import Tick from '../images/desktop/Group 13 (4).png'
import Vector from '../images/mobile/Vector 11.svg'
import Plus from '../images/mobile/Group 15.png'
function MainSection() {
    return (
        <div style={{ background: '#E5E5E5' }} className='h-screen py-14'>
            <div className='mx-auto max-w-3xl'>
                <p className="text-2xl font-medium">Ваши данные</p>
                <form className='mt-8'>
                    <div className="flex gap-10">
                        <div>
                            <div className='flex gap-5'>
                                <div className="mb-5">
                                    <input type="text" className='rounded p-2.5' placeholder='Телефон' />
                                </div>
                                <div className="mb-5">
                                    <input type="text" className='rounded p-2.5' placeholder='Имя' />
                                </div>
                            </div>
                            <div className="flex mb-5">
                                <button style={{ background: '#FF9846' }} className='flex w-1/2 px-5 gap-3 py-2.5 items-center text-white rounded-tl-md rounded-bl-md'>
                                    <img src={Image2} alt="frame" />
                                    Наличными
                                </button>
                                <button className='flex w-1/2 gap-3 py-2.5 items-center px-11 rounded-tr-md rounded-br-md bg-white'>
                                    <img src={Frame} alt="frame" />
                                    Картой
                                </button>

                            </div>
                            <div className="mb-5 flex justify-between">
                                <label htmlFor="sum" className='flex items-center gap-x-2.5'>
                                    <img src={Tick} className='w-5 h-5' alt="tick" />
                                    <span className="text-lg">Подготовить сдачу с</span>
                                </label>
                                <input type="text" id='sum' className='rounded p-2.5' placeholder='Сумма' />
                            </div>
                            <div className="mb-5">
                                <input type="text" className='rounded p-2.5 w-full' placeholder='Комменатрий к заказу' />
                            </div>
                            <div className="mb-5">
                                <div className="flex justify-between">
                                    <p className='text-lg font-medium'>Палочки + соусник обычные</p>
                                    <div className='flex items-center'>
                                        <img src={Vector} alt="vector" />
                                        <span className='text-lg font-bold mx-2'>10</span>
                                        <img src={Plus} style={{ width: '19.28px', height: '19.28px' }} alt="plus" />
                                    </div>
                                </div>
                                <div className="flex justify-between">
                                    <p className='text-lg font-medium'>Палочки + соусник обычные</p>
                                    <div className='flex items-center'>
                                        <img src={Vector} alt="vector" />
                                        <span className='text-lg font-bold mx-2'>10</span>
                                        <img src={Plus} style={{ width: '19.28px', height: '19.28px' }} alt="plus" />
                                    </div>
                                </div>
                            </div>
                            <div className="my-10">
                                <input type="text" className='rounded p-2.5 w-full' placeholder='Введите промокод' />
                            </div>
                        </div>

                        <div>
                            <div className="flex mb-5">
                                <button style={{ background: '#FF9846', paddingLeft:'52px', paddingRight: '52px' }} className='w-1/2 text-center gap-3 py-2.5  text-white rounded-tl-md rounded-bl-md'>    
                                Курьером
                                </button>
                                <button style={{paddingLeft: '42px', paddingRight: '42px'}} className='w-1/2  gap-3 py-2.5  text-center  rounded-tr-md rounded-br-md bg-white'>
                                Самовывоз
                                </button>
                            </div>
                            <div className='flex gap-5'>
                                <div className="mb-5 basis-64">
                                    <input type="text" className='rounded p-2.5' placeholder='Улица' />
                                </div>
                                <div className="mb-5 basis-1/4">
                                    <input type="text" className='rounded p-2.5' placeholder='Дом' />
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default MainSection