import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { BsChevronDown } from 'react-icons/bs'
// import { HiBars3CenterLeft } from 'react-icons/all-files/hi/HiBars3CenterLeft'
import { ThemeContext } from '../../contextUI'
import setiGoods from '../../images/desktop/desktop-goods/goodsSeti.png'
import Text from '../../pages/mainPage/Text'
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Button from '../../components/Button';

const GoodsMain = () => {
   const { defaultProducts, products, setProducts, cart, handleAddToCart, setIsShowBasket } = useContext(ThemeContext)
   let newArray = []
   let sortedCards = []

   function filterByTitle(arr) {
      arr.map(item => {
         newArray.push(item.title)
         return (newArray.sort())
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
         return (numArray.sort(compareNumbers))
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
         return (numArray2.sort(compareFn))
      })
      for (let i = 0; i < numArray2.length; i++) {
         sortedByHighPrice.push(arr.find(item => item.price === numArray2[i]))
      }
      setProducts(sortedByHighPrice);
   }

   let slicesArray = []
   let sortedBySlice = []
   function filterBySlice(arr) {
      arr.map(item => {
         slicesArray.push(item.slice)
         return (slicesArray.sort(compareNumbers))
      })
      for (let i = 0; i < slicesArray.length; i++) {
         sortedBySlice.push(arr.find(item => item.slice === slicesArray[i]))
      }
      setProducts(sortedBySlice);
   }

   function returnDefaultProducts(arr) {
      setProducts(arr)
   }

   return (
      <div className='sm:w-[65%] w-full sm:mx-auto bg-gray'>
         <Navbar />
         <div className='sm:w-[85%] w-[95%] mx-auto pb-14'>
            <div className='flex sm:flex-row flex-col justify-between items-center lg:py-5'>
               <div className='flex gap-3 items-center py-5'>
                  <img src={setiGoods} alt="settings" />
                  <p className='lg:text-2xl sm:text-xl text-3xl font-medium'>Сеты</p>
                  <div className="flex gap-2 justify-end" onClick={() => setIsShowBasket(true)} style={{ background: '#f2f2f2', borderRadius: '5px' }}>
                     <AiOutlineShoppingCart className="lg:text-[40px] md:text-[30px] sm:text-[26px] text-[36px] cursor-pointer hover:text-orange-500" />
                     {cart.length > 0 && (
                        <span className="bg-orange-500 text-white lg:w-7 lg:h-7 sm:w-5 sm:h-5 w-7 h-7 grid items-center rounded-full -translate-y-3 -translate-x-6 text-center leading-5 ">
                           {cart.length}
                        </span>
                     )}
                  </div>
               </div>
               <div className='primary-navigation  md:w-[50%] lg:w-[25%] sm:w-[52%] sm:bg-transparent rounded-lg bg-white w-full'>
                  <ul>
                     {/* <li><HiBars3CenterLeft/></li> */}
                     <li><span className="flex gap-4 items-center font-semibold md:text-xl sm:text-base text-3xl py-2 sm:px-6">Сортировка <BsChevronDown /></span>
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
            </div>
            <div className='flex flex-wrap gap-y-5 xl:gap-6 md:gap-3 sm:gap-2 justify-center'>
               {products.map((product) => {
                  return (
                     <div key={product.id} className='bg-white rounded-lg sm:p-2 p-3 lg:max-w-[31%] sm:max-w-[47%] w-[96%] items-center flex sm:flex-col justify-between'>
                        <div className='sm:w-full w-[40%]'>
                           <img className='sm:w-full w-[100%]' src={product.img} alt="meal" />
                        </div>
                        <div>
                           <Link to="/cards" className='2xl:text-2xl text-base font-medium'>{product.title}</Link>
                           <div className='flex gap-3'>
                              <p className='2xl:text-lg text-xs text-gray-400 pt-1 pb-3'>{product.weight} грамм</p>
                              <p className='2xl:text-lg text-xs text-gray-400 pt-1 pb-3'>{product.slice} кусочков</p>
                           </div>
                           <div className='flex gap-2 justify-between items-center border-t-2 py-2'>
                              <p className='2xl:text-2xl lg:text-lg text-sm font-bold'>{product.price} COM</p>
                              <Button classes={"py-1 2xl:px-10 xl:px-6 px-3"} func={() => handleAddToCart(product)} />
                           </div>
                        </div>
                     </div>)
               })}
            </div>
         </div >
         <Text />
         <Footer />
      </div>
   );
}

export default GoodsMain;
