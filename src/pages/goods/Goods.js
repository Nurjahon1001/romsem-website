import React, { useContext } from 'react'
import CartContext from '../../contexts/CartContext'
import Cart from '../cart/Cart'
import Sidebar from '../../components/Sidebar'
import GoodsMain from './GoodsMain'
import ThirdCol from '../mainPage/ThirdCol'
import LoginPage from '../../components/LoginPage'


export default function Goods() {

  return (
    <div className='flex lg:gap-0 gap-2'>
      <GoodsMain />
    </div>
  )
}
