import React, { useContext } from 'react'
import Checkout from '../../components/Checkout';
import LoginPage from '../../components/LoginPage';
import CartContext from '../../contexts/CartContext'
import CartHeader from './CartHeader';
import CartProduct from './CartProduct';

function Cart() {
   const { cartItems, isShowBasket, setIsShowBasket, isModalOpen, setIsModalOpen } = useContext(CartContext)
   return (
      <>
         {isModalOpen && (
            <div className='w-full fixed inset-0 bg-[rgba(0,0,0,0.7)]' onClick={() => setIsModalOpen(false)}>
               <LoginPage />
            </div>
         )}
         {isShowBasket && (
            <div className='w-full fixed inset-0 bg-[rgba(0,0,0,0.7)]' onClick={() => setIsShowBasket(false)}>
               <div
                  className='bg-white w-[350px] h-full flex flex-col  absolute right-0 overflow-y-scroll animate-fade-in'
                  onClick={e => e.stopPropagation()}>
                  <CartHeader />
                  {cartItems.length === 0 ? (
                     <h4>Cart is empty</h4>
                  ) : (
                     <div className='flex flex-col items-center mt-12'>
                        {cartItems.map((item, index) => {
                           return (
                              <CartProduct key={`prod_${index}`} item={item} />
                           )
                        })}
                     </div>
                  )}
                  {cartItems.length > 0 && <Checkout />}
               </div>
            </div>
         )}
      </>
   )
}

export default Cart