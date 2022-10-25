import React, { useContext } from 'react'
import CartContext from '../../contexts/CartContext'
import { AiOutlineShoppingCart } from 'react-icons/ai';

function CartHeader() {
   const { cartItems, setIsShowBasket } = useContext(CartContext)

   return (
      <div className='w-[12%] flex gap-3 bg-orange-400 text-white justify-center items-center fixed'>
         <h1 className="text-white text-4xl py-3 text-center font-bold ">Cart</h1>
         <div className='flex gap-2' onClick={() => setIsShowBasket(true)}>
            <AiOutlineShoppingCart className="text-[40px] cursor-pointer hover:opacity-60" />
            {cartItems.length > 0 && (
               <span className="bg-orange-500 text-white w-7 h-7 grid items-center rounded-full -translate-y-3 -translate-x-6 text-center leading-5 ">
                  {cartItems.length}
               </span>
            )}
         </div>
      </div>
   )
}

export default CartHeader