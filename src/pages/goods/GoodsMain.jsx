import React, { useContext } from 'react'
import useLocalStorage from "../../hooks/useLocalStorage";
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { ThemeContext } from '../../contextUI'
import setiGoods from '../../images/desktop/desktop-goods/goodsSeti.png'
import img1 from '../../images/desktop/desktop-goods/img1.png'
import img2 from '../../images/desktop/desktop-goods/2.png'
import img3 from '../../images/desktop/desktop-goods/3.png'
import img4 from '../../images/desktop/desktop-goods/4.png'
import img5 from '../../images/desktop/desktop-goods/5.png'
import img6 from '../../images/desktop/desktop-goods/6.png'
import img7 from '../../images/desktop/desktop-goods/7.png'
import img8 from '../../images/desktop/desktop-goods/10.png'
import img9 from '../../images/desktop/desktop-goods/9.png'
import Button from '../../components/Button'
import Text from '../../pages/mainPage/Text'
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const GoodsMain = () => {
   const { cart, handleAddToCart, setIsShowBasket } = useContext(ThemeContext)
   const [products, setProducts] = useLocalStorage("products", [
      { id: 1, img: img1, title: "Филадельфия и лосось", slice: "1260 грамм, 28 кусочков", price: 1150 },
      { id: 2, img: img2, title: "Сет '5 Филадельфий'", slice: "1272 грамм, 36 кусочков", price: 1499 },
      { id: 3, img: img3, title: "Саломон сет", slice: "1189 грамм, 30 кусочков", price: 1499 },
      { id: 4, img: img4, title: "Самая большая Филадельфия", slice: "1023 грамм, 24 кусочков", price: 1559 },
      { id: 5, img: img5, title: "Камикадзе сет", slice: "1412 грамм, 32 кусочков", price: 1519 },
      { id: 6, img: img6, title: "Топовый сет", slice: "1499 грамм, 40 кусочков", price: 1469 },
      { id: 7, img: img7, title: "Банзай", slice: "1982 грамм, 29 кусочков", price: 1559 },
      { id: 8, img: img8, title: "Аригато", slice: "1277 грамм, 33 кусочков", price: 1479 },
      { id: 9, img: img9, title: "Якудза сет", slice: "1168 грамм, 19 кусочков", price: 1499 }
   ])

   return (
      <div className='w-[65%] mx-auto bg-gray'>
         <Navbar />
         <div className='w-[85%] mx-auto pb-14'>
            <div className='flex justify-between items-center py-5'>
               <div className='flex gap-3 items-center py-5'>
                  <img src={setiGoods} alt="settings" />
                  <p className='lg:text-2xl text-lg font-medium'>Сеты</p>
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
            <div className='flex flex-wrap gap-y-5 justify-between'>
               {products.map((card, index) => {
                  return (
                     <div key={card.id} className='bg-white p-2 w-[31%]'>
                        <img src={card.img} alt="meal" />
                        <p className='2xl:text-2xl text-base font-medium pt-3'>{card.title}</p>
                        <p className='2xl:text-lg text-xs text-gray-400 pt-1 pb-3'>{card.slice}</p>
                        <div className='flex gap-2 justify-between items-center border-t-2 py-2'>
                           <p className='2xl:text-2xl text-lg font-bold'>{card.price}</p>
                           <Button classes={"py-1 2xl:px-10 px-6"} func={() => handleAddToCart(card)} />
                        </div>
                     </div>
                  )
               })}
            </div>
         </div>
         <Text />
         <Footer />
      </div>
   );
}

export default GoodsMain;
