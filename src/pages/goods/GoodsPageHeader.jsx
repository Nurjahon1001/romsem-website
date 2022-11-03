import React, { useContext} from 'react';
import setiGoods from '../../images/desktop/desktop-goods/goodsSeti.png'
import { AiOutlineShoppingCart } from 'react-icons/ai';
import CartContext from '../../contexts/CartContext';

const GoodsPageHeader = () => {

  const { cartItems, setIsShowBasket } = useContext(CartContext);

   return (
      <div className='flex gap-3 justify-center items-center py-5'>
         <img src={setiGoods} alt="settings" />
         <p className='lg:text-2xl sm:text-xl text-3xl font-medium'>Сеты</p>
         <div className="flex gap-2 justify-end" onClick={() => setIsShowBasket(true)} style={{ background: '#f2f2f2', borderRadius: '5px' }}>
            <AiOutlineShoppingCart className="lg:text-[40px] md:text-[30px] sm:text-[26px] text-[36px] cursor-pointer hover:text-orange-500" />
            {cartItems.length > 0 && (
               <span className="bg-orange-500 text-white lg:w-7 lg:h-7 sm:w-5 sm:h-5 w-7 h-7 grid items-center rounded-full -translate-y-3 -translate-x-6 text-center leading-5 ">
                  {cartItems.length}
               </span>
            )}
         </div>
      </div>
   );
}

export default GoodsPageHeader;
