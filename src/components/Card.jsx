import React, { useContext } from 'react';
import CartContext from '../contexts/CartContext';
import Button from './Button';

const Card = ({ product }) => {
   const { addToCart} = useContext(CartContext);
   return (
      <div key={product.id} className='bg-white p-2 md:h-full sm:h-[270px] flex flex-col justify-between'>
         <img className="w-[90%]" src={product.img} alt="meal" />
         <p className='text-base font-medium pt-3'>{product.title}</p>
         <div className="flex gap-2 items-center">
            <p className='text-xs text-gray-400 pt-1 pb-3'>{product.weight} грамм</p>
            <p className='text-xs text-gray-400 pt-1 pb-3'>{product.slice} кусочков</p>
         </div>
         <div className='flex md:gap-2 items-center justify-between border-t-2 py-2'>
            <p className='text-sm font-bold'>{product.price} СОМ</p>
            <Button classes={"py-1 px-3"} func={() => addToCart(product)} />
         </div>
      </div>
   );
}

export default Card;