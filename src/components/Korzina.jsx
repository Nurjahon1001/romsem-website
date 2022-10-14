import React from 'react'
import FirstImage from '../images/mobile/Rectangle 16.png'
import Vector from '../images/mobile/Vector 11.svg'
import Plus from '../images/mobile/Group 15.png'

function Korzina() {
  return (
    <div className='h-screen flex flex-col justify-between' style={{ paddingRight:'74px'}}>
       <div style={{paddingTop:'59px', paddingLeft:'66px'}}>
            <button className='text-2xl text-medium text-black py-2.5  px-24' style={{background:'#f2f2f2', borderRadius:'5px'}}>Корзина</button>
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
                        <img src={Plus} style={{width:'19.28px', height:'19.28px'}} alt="plus" />
                        </div>

                        <span className='text-lg font-bold'>170 СОМ</span>
                    </div>
                </div>
            </div>
       </div> 
        <div className='mb-9'>
            <div className='border-b'  style={{borderColor: '#A4ACAD', borderWidth:'.5px'}}>ddd</div>
        </div>
    </div>
  )
}

export default Korzina