import React, { useContext } from 'react'
import { AiOutlineMinusCircle } from 'react-icons/ai';
import { AiFillPlusCircle } from 'react-icons/ai';
import CartContext from '../../contexts/CartContext';

function CartProduct({ item }) {
   const { removeFromCart, increase, decrease } = useContext(CartContext);
   return (
      <div key={item.id} className="sm:text-center w-full flex sm:flex-col sm:gap-0 gap-4 items-center">
         <div className='sm:w-full w-1/3'>
            <img src={item.img} alt={item.title} />
         </div>
         <div className=''>
            <p className='sm:text-2xl text-base sm:font-bold font-semibold text-black'>{item.title}</p>
            <div className='sm:flex gap-3 hidden'>
               <p className='2xl:text-lg text-xs text-gray-400 pt-1 pb-3'>{item.weight} грамм</p>
               <p className='2xl:text-lg text-xs text-gray-400 pt-1 pb-3'>{item.slice} кусочков</p>
            </div>
            <p className='sm:block hidden  text-white font-bold w-7 h-7 rounded-full bg-orange-500 mt-1'>{item.quantity}</p>
            <div className="flex items-center my-3">
               <div className='flex justify-center items-center'>
                  {item.quantity > 1 && (
                     <button onClick={() => decrease({ ...item, quantity: item.quantity -= 1 })}>
                        <AiOutlineMinusCircle className='sm:text-3xl text-lg' />
                     </button>
                  )}
                   {item.quantity === 1 && (
                     <button onClick={() => removeFromCart(item)}>
                        <AiOutlineMinusCircle className='sm:text-3xl text-lg' />
                     </button>
                  )}
                  <p className='sm:hidden block text-lg font-bold'>{item.quantity}</p>
                  <span className='sm:text-xl hidden sm:block font-bold mx-2'>{item.price} COM</span>
                  <button
                     onClick={() => increase({ ...item, quantity: item.quantity += 1 })}
                  >
                     <AiFillPlusCircle className='sm:text-3xl text-lg text-orange-500' />
                  </button>
                  <span className='sm:text-xl sm:hidden block font-bold mx-2'>{item.price} COM</span>
               </div>
            </div>
         </div>
      </div >
   )
}

export default CartProduct