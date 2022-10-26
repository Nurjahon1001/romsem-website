import React, { useContext } from 'react'
import { AiOutlineMinusCircle } from 'react-icons/ai';
import { AiFillPlusCircle } from 'react-icons/ai';
import CartContext from '../../contexts/CartContext';

function CartProduct({item}) {
   const { removeFromCart, increase, decrease} = useContext(CartContext);
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
         <p className='text-white font-bold w-7 h-7 rounded-full bg-orange-500 mt-1'>{item.quantity}</p>

         <div className="flex items-center my-3">
            <div className='flex items-center'>
               {item.quantity > 1 && (
                  <button onClick={() => decrease({...item, quantity: item.quantity -= 1})}>
                     <AiOutlineMinusCircle className='text-3xl' />
                  </button>
               )}
               <span className='text-xl font-bold mx-2'>{item.price} COM</span>
               <button
                  onClick={() => increase({...item, quantity: item.quantity += 1})}
               >
                  <AiFillPlusCircle className='text-3xl text-orange-500' />
               </button>
            </div>
         </div>
         <div className='w-full bg-orange-400'>
            <p className='text-2xl text-white font-bold my-2'>Total: {item.price * item.quantity} COM</p>
         </div>
      </div>
   )
}

export default CartProduct