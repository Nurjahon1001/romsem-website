import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
// import { HiBars3CenterLeft } from 'react-icons/all-files/hi/HiBars3CenterLeft'
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
      <div className='sm:w-5/6 w-full sm:mx-auto bg-gray'>
         <Navbar />
         <div className='sm:w-9/12 mx-auto pb-14'>
            <div className='flex sm:flex-row flex-col justify-between items-center lg:py-5'>
               <GoodsPageHeader setIsShowBasket={setIsShowBasket} />
               <Dropdown />
            </div>
            <div className='flex flex-wrap gap-y-5 xl:gap-6 md:gap-3 sm:gap-2 justify-center'>
               {defaultProducts.map((product, index) => {
                  return (
                     <Card key={`card_${index}`} product={product} />
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
