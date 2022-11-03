import React, { useContext } from 'react'
import CartContext from '../../contexts/CartContext'
import Text from '../../pages/mainPage/Text'
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Dropdown from '../../components/Dropdown';
import GoodsPageHeader from './GoodsPageHeader';
import Card from '../../components/Card'
import { defaultProducts } from '../../constants/data/defaultProducts'

const GoodsMain = () => {
   const { setIsShowBasket} = useContext(CartContext)

   return (
      <div className='sm:w-11/12 max-w-6xl w-full sm:mx-auto bg-gray'>
         <Navbar />
         <div className='sm:w-11/12 max-w-4xl mx-auto pb-14'>
            <div className='flex sm:flex-row flex-col justify-between items-center lg:py-5'>
               <GoodsPageHeader setIsShowBasket={setIsShowBasket} />
               <Dropdown />
            </div>
            <div className='flex flex-wrap sm:gap-y-5 gap-y-2 xl:gap-6 md:gap-3 sm:gap-2 2xl:justify-between justify-around'>
               {defaultProducts.map((product, index) => {
                  return (
                     <Card key={`card_${index}`} product={product} classes={'lg:w-[31%] sm:w-5/12 w-full bg-white'}/>
                  )
               })}
            </div>
         </div >
         <Text />
         <Footer />
      </div>
   );
}

export default GoodsMain;
