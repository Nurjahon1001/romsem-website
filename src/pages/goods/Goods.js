import React, { useContext }  from 'react'
import CartContext from '../../contexts/CartContext'
import Cart from '../cart/Cart'
import Sidebar from '../../components/Sidebar'
import GoodsMain from './GoodsMain'
import ThirdCol from '../mainPage/ThirdCol'


export default function Goods() {
  const { isShowBasket } = useContext(CartContext)

  return (
    <div className='flex lg:gap-0 gap-2'>
      <Sidebar />
      <GoodsMain/>
      <ThirdCol/>
      {isShowBasket ? <Cart/> : ""}
    </div>
  )
}
