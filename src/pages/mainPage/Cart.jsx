import React, { useContext } from 'react'
import { ThemeContext } from '../../contextUI'
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { AiOutlineMinusCircle } from 'react-icons/ai';
import { AiFillPlusCircle } from 'react-icons/ai';

function Cart() {
   const { cart, setIsShowBasket, handleAddToCart, handleRemoveFromCart } = useContext(ThemeContext)

   return (
      <div className='w-full fixed inset-0 bg-[rgba(0,0,0,0.7)]' onClick={() => setIsShowBasket(false)}>
         <div
            className='bg-white w-[350px] h-full absolute right-0 overflow-y-scroll animate-fade-in'
            onClick={e => e.stopPropagation()}>
            <div className='flex gap-3 justify-center items-center mt-3'>
               <h1 className="text-orange-500 text-4xl py-2 text-center font-bold">Cart</h1>
               <div className='flex gap-2' onClick={() => setIsShowBasket(true)}>
                  <AiOutlineShoppingCart className="text-[40px] cursor-pointer hover:text-orange-500" />
                  {cart.length > 0 && (
                     <span className="bg-orange-500 text-white w-7 h-7 grid items-center rounded-full -translate-y-3 -translate-x-6 text-center leading-5 ">
                        {cart.length}
                     </span>
                  )}
               </div>
            </div>
            <div className='flex flex-col items-center'>
               {cart.map((item) => {
                  return (
                     <div key={item.id} className="text-center w-full flex flex-col items-center">
                        <div>
                           <img className='w-full' src={item.img} alt={item.title} />
                        </div>
                        <p className='text-2xl font-bold text-black'>{item.title}</p>
                        <div className='flex gap-3'>
                           <p className='2xl:text-lg text-xs text-gray-400 pt-1 pb-3'>{item.weight} грамм</p>
                           <p className='2xl:text-lg text-xs text-gray-400 pt-1 pb-3'>{item.slice} кусочков</p>
                        </div>
                        <p className='text-white font-bold w-7 h-7 rounded-full bg-orange-500 mt-1'>{item.amount}</p>

                        <div className="flex items-center my-3">
                           <div className='flex items-center'>
                              <button onClick={() => handleRemoveFromCart(item.id)}>
                                 <AiOutlineMinusCircle className='text-3xl' />
                              </button>
                              <span className='text-xl font-bold mx-2'>{item.price} COM</span>
                              <button
                                 onClick={() => handleAddToCart(item)}
                              >
                                 <AiFillPlusCircle className='text-3xl text-orange-500' />
                              </button>
                           </div>
                        </div>
                        <div className='w-full bg-orange-400'>
                           <p className='text-2xl text-white font-bold my-2'>Total: {item.price * item.amount} COM</p>
                        </div>
                     </div>
                  )
               })}
            </div>
         </div>
      </div>
   )
}

export default Cart