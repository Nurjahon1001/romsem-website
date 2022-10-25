import React, { useContext } from 'react';
import CartContext from '../contexts/CartContext';
import { BsChevronDown } from 'react-icons/bs'


const Dropdown = () => {
   const { defaultProducts, products, setProducts, cart, handleAddToCart, setIsShowBasket } = useContext(CartContext)

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
      <div className='primary-navigation  md:w-[50%] lg:w-[25%] sm:w-[52%] sm:bg-transparent rounded-lg bg-white w-full'>
         <ul>
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
   );
}

export default Dropdown;
