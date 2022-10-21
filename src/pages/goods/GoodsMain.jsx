import React, { useContext } from 'react'
import {Link} from 'react-router-dom'
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { BsChevronDown } from 'react-icons/bs'
import { ThemeContext } from '../../contextUI'
import setiGoods from '../../images/desktop/desktop-goods/goodsSeti.png'
import Text from '../../pages/mainPage/Text'
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Button from '../../components/Button';

const GoodsMain = () => {
   const {defaultProducts, products, setProducts, cart, handleAddToCart, setIsShowBasket } = useContext(ThemeContext)
   let newArray = []
   let sortedCards = []

   function filterByTitle(arr) {
      arr.map(item => {
         newArray.push(item.title)
         return(newArray.sort())
      })
      for (let i = 0; i < newArray.length; i++) {
         sortedCards.push(arr.find(item => item.title === newArray[i]))
      }
      setProducts(sortedCards)
   }

   function compareNumbers(a, b) {
      return a - b;
   }
   let numArray = []
   let sortedByLowPrice = []
   function decendingFilter(arr) {
      arr.map(item => {
         numArray.push(item.price)
         return(numArray.sort(compareNumbers))
      })
      for (let i = 0; i < numArray.length; i++) {
         sortedByLowPrice.push(arr.find(item => item.price === numArray[i]))
      }
      setProducts(sortedByLowPrice);
   }

   const compareFn = (a, b) => a > b ? -1 : 0;
   let numArray2 = []
   let sortedByHighPrice = []
   function ascendingFilter(arr) {
      arr.map(item => {
         numArray2.push(item.price)
         return(numArray2.sort(compareFn))
      })
      for (let i = 0; i < numArray2.length; i++) {
         sortedByHighPrice.push(arr.find(item => item.price === numArray2[i]))
      }
      setProducts(sortedByHighPrice);
   }

   let slicesArray = []
   let sortedBySlice= []
   function filterBySlice(arr) {
      arr.map(item => {
         slicesArray.push(item.slice)
         return(slicesArray.sort(compareNumbers))
      })
      for (let i = 0; i < slicesArray.length; i++) {
         sortedBySlice.push(arr.find(item => item.slice === slicesArray[i]))
      }
      setProducts(sortedBySlice);
   }

  function returnDefaultProducts(arr){
   setProducts(arr)
  }
   
   return (
      <div className='w-[65%] mx-auto bg-gray'>
         <Navbar />
         <div className='w-[85%] mx-auto pb-14'>
            <div className='flex justify-between items-center py-5'>
               <div className='flex gap-3 items-center py-5'>
                  <img src={setiGoods} alt="settings" />
                  <p className='lg:text-2xl text-lg font-medium'>Сеты</p>
               </div>
               <div className='flex items-center gap-3'>
                  <div className='primary-navigation'>
                     <ul>
                        <li><span className="flex gap-4 items-center font-semibold text-xl">Сортировка <BsChevronDown /></span>
                           <ul className="dropdown">
                              <li onClick={() => returnDefaultProducts(defaultProducts)}>По умолчанию</li>
                              <li onClick={() => filterByTitle(products)}>Название</li>
                              <li onClick={() => decendingFilter(products)}>Сначала дешевле</li>
                              <li onClick={() => ascendingFilter(products)}>Сначала дороже</li>
                              <li onClick={() => filterBySlice(products)}>Количество кусочков</li>
                              <li onClick={() => returnDefaultProducts(defaultProducts)}>Вес</li>
                           </ul>
                        </li>
                     </ul>
                  </div>
                  <div className="flex gap-2" onClick={() => setIsShowBasket(true)} style={{ background: '#f2f2f2', borderRadius: '5px' }}>
                     <AiOutlineShoppingCart className="text-[40px] cursor-pointer hover:text-orange-500" />
                     {cart.length > 0 && (
                        <span className="bg-orange-500 text-white w-7 h-7 grid items-center rounded-full -translate-y-3 -translate-x-6 text-center leading-5 ">
                           {cart.length}
                        </span>
                     )}
                  </div>
               </div>
            </div>
            <div className='flex flex-wrap gap-y-5 justify-between'>
               {products.map((product) => {
                  return (
                     <div key={product.id} className='bg-white p-2 max-w-[31%] flex flex-col justify-between'>
                        <img className='w-full' src={product.img} alt="meal" />
                        <Link to="/cards" className='2xl:text-2xl text-base font-medium'>{product.title}</Link>
                        <div className='flex gap-3'>
                           <p className='2xl:text-lg text-xs text-gray-400 pt-1 pb-3'>{product.weight} грамм</p>
                           <p className='2xl:text-lg text-xs text-gray-400 pt-1 pb-3'>{product.slice} кусочков</p>
                        </div>
                        <div className='flex gap-2 justify-between items-center border-t-2 py-2'>
                           <p className='2xl:text-2xl text-lg font-bold'>{product.price}</p>
                           <Button classes={"py-1 2xl:px-10 px-6"} func={() => handleAddToCart(product)} />
                        </div>
                     </div>
                  )
               })}
            </div>
         </div >
         <Text />
         <Footer />
      </div >
   );
}

export default GoodsMain;
