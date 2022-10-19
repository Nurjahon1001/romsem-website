import React, { useContext }  from 'react'
import { ThemeContext } from '../../contextUI'
import Basket from '../mainPage/Basket'
import Sidebar from '../../components/Sidebar'
import GoodsMain from './GoodsMain'
import ThirdCol from '../mainPage/ThirdCol'


export default function Goods() {
  const { cart, isShowBasket, setIsShowBasket, handleAddToCart } = useContext(ThemeContext)

  return (
    <div className='flex'>
      <Sidebar />
      <GoodsMain/>
      <ThirdCol/>
      {isShowBasket ? <Basket/> : ""}      

    </div>
  )
}
