import React, { useContext } from 'react'
import CartContext from '../../contexts/CartContext'
import CartHeader from './CartHeader';
import CartProduct from './CartProduct';

function Cart() {
   const { cartItems, setIsShowBasket } = useContext(CartContext)
   return (
      <div className='w-full fixed inset-0 bg-[rgba(0,0,0,0.7)]' onClick={() => setIsShowBasket(false)}>
         <div
            className='bg-white w-[350px] h-full absolute right-0 overflow-y-scroll animate-fade-in'
            onClick={e => e.stopPropagation()}>
            <CartHeader />
            {/* {cartItems.length === 0 ? (
               <h4>Cart is empty</h4>
            ) : (
            )} */}
            <div className='flex flex-col items-center mt-12'>
               {cartItems.map((item) => {
                  return (
                     <CartProduct item={item}/>
                  )
               })}

            </div>
         </div>
      </div>
   )
}

export default Cart