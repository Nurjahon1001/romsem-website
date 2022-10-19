import React, { useContext } from 'react'
import { ThemeContext } from '../../contextUI'
import { AiOutlineMinusCircle } from 'react-icons/ai';
import { AiFillPlusCircle } from 'react-icons/ai';

function Basket() {
   const { cart, isShowBasket, setIsShowBasket, handleAddToCart } = useContext(ThemeContext)
   const total = (arr) => {
      return arr.reduce((cal, item) => {
         return cal + item.product.price * item.amount;
      }, 0)
   }
   return (
      <div className='fixed inset-0 bg-[rgba(0,0,0,0.7)]' onClick={() => setIsShowBasket(false)}>
         <div
            className=' lg:h-screen flex flex-col justify-between bg-white absolute z-50 overflow-y-scroll top-0 px-10 right-0'
            onClick={e => e.stopPropagation()}>
            <div className='flex flex-col items-center gap-4'>
               {cart.map((item) => {
                  return (
                     <div key={item.product.id} className="py-2 border-b-4">
                        <div>
                           <img src={item.product.img} alt={item.product.title} />
                        </div>
                        <p className='text-2xl font-bold text-black mb-2'>{item.product.title}</p>
                        <div className="flex items-center gap-7">
                           <div className='flex items-center'>
                              <button>
                                 <AiOutlineMinusCircle className='text-2xl' />
                              </button>
                              <span className='text-2xl font-bold mx-2'>{item.amount}</span>
                              <button
                              // onClick={() => handleAddToCart(item.amount)}
                              >
                                 <AiFillPlusCircle className='text-2xl text-orange-500' />
                              </button>
                           </div>
                           <span className='text-2xl font-bold'>{item.product.price} COM</span>
                        </div>
                     </div>
                  )
               })}
               <p className='text-2xl text-orange-500 font-bold mb-4'>Total: {total(cart)}</p>
            </div>
         </div>
      </div>
   )
}

export default Basket