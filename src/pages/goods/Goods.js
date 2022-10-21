import React, { useContext }  from 'react'
import { ThemeContext } from '../../contextUI'
import Cart from '../mainPage/Cart'
import Sidebar from '../../components/Sidebar'
import GoodsMain from './GoodsMain'
import ThirdCol from '../mainPage/ThirdCol'


export default function Goods() {
  const { isShowBasket } = useContext(ThemeContext)

  return (
    <div className='flex'>
      <Sidebar />
      <GoodsMain/>
      <ThirdCol/>
      {isShowBasket ? <Cart/> : ""}      

    </div>
  )
}
