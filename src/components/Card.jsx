import React, { useContext } from 'react';
import CartContext from '../contexts/CartContext';
import Button from './Button';
import { AiFillPlusCircle } from 'react-icons/ai';

const Card = ({ product, classes }) => {
   const { addToCart } = useContext(CartContext);
   return (
      <div className={`bg- sm:p-2 p-4 flex sm:gap-0 gap-4 sm:flex-col sm:justify-between ${classes}`}>
         <div className='sm:w-11/12 w-1/3'>
            <img className='w-full' src={product.img} alt="meal" />
         </div>
         <div>
            <p className='sm:text-base text-sm font-medium pt-3'>{product.title}</p>
            <div className="flex gap-2 items-center space-y-1">
               {product.weight ? <p className='text-xs text-gray-400'>{product.weight} грамм</p> : ""}
               {product.slice ? <p className='text-xs text-gray-400'>{product.slice} кусочков</p> : ""}
            </div>
            <div className='flex md:gap-2 gap-6 items-center justify-between sm:border-t-2 py-2'>
               <p className='sm:text-sm text-lg font-bold'>{product.price} СОМ</p> 
               {product.plusBtn ? <AiFillPlusCircle className={"text-3xl text-orange-400"} onClick={() => addToCart(product)}/> : <Button classes={"sm:py-1 sm:px-3 px-5"} func={() => addToCart(product)}/>}
            </div>
         </div>
      </div>
   );
}

export default Card;