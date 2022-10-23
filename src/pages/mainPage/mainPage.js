import React from 'react'
import Sidebar from '../../components/Sidebar'
import SecondCol from '../../pages/mainPage/secondCol/SecondCol'
import ThirdCol from './ThirdCol'


export default function MainPage() {

  return (
    <div className='flex xl:gap-0 gap-5'>
      <Sidebar />
      <SecondCol/>
      <ThirdCol />
    </div>
  )
}
