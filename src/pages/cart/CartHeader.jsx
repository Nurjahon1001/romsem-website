import React, { useContext } from 'react'
import CartContext from '../../contexts/CartContext'
import { AiOutlineShoppingCart } from 'react-icons/ai';

function CartHeader() {
   const { cartItems, setIsShowBasket } = useContext(CartContext)

   return (
      <div className='flex gap-3 bg-orange-400 text-white justify-center items-center px-12 fixed'>
         <h1 className="text-white sm:text-4xl text-2xl pl-1 py-2 text-center font-bold ">Корзина</h1>
         <div className='flex gap-2' onClick={() => setIsShowBasket(true)}>
            <AiOutlineShoppingCart className="sm:text-4xl text-3xl cursor-pointer hover:opacity-60" />
            {cartItems.length > 0 && (
               <span className="bg-orange-500 text-white w-6 h-6 grid items-center rounded-full -translate-y-3 -translate-x-6 text-center leading-5 ">
                  {cartItems.length}
               </span>
            )}
         </div>
      </div>
   )
}

export default CartHeader