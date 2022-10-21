import React, { useContext }  from 'react'
import { ThemeContext } from '../../contextUI'
import Basket from './Cart'
import Sidebar from '../../components/Sidebar'
import SecondCol from '../../pages/mainPage/secondCol/SecondCol'
import ThirdCol from './ThirdCol'


export default function MainPage() {

  return (
    <>
    <div className='flex'>
      <Sidebar />
      <SecondCol className="w-[100%]"/>
      <ThirdCol />
    </div>
    </>
  )
}
