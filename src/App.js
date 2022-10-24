import { React } from "react";
import { ThemeContext } from './contextUI'
import useLocalStorage from "./hooks/useLocalStorage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Goods from "./pages/goods/Goods";
import MainPage from "./pages/mainPage/mainPage";
import GoodsCards from './pages/goodsCard/GoodsCards'
import Review from './pages/review/Review'
import OrderRegistration from './pages/orderRegistration/orderRegistration'
import {defaultProducts} from './pages/Sliders'

// card images

import img1 from './images/desktop/desktop-goods/img1.png'
import img2 from './images/desktop/desktop-goods/2.png'
import img3 from './images/desktop/desktop-goods/3.png'
import img4 from './images/desktop/desktop-goods/4.png'
import img5 from './images/desktop/desktop-goods/5.png'
import img6 from './images/desktop/desktop-goods/6.png'
import img7 from './images/desktop/desktop-goods/7.png'
import img8 from './images/desktop/desktop-goods/10.png'
import img9 from './images/desktop/desktop-goods/9.png'

// bismillah

function App() {
  const [isShowBasket, setIsShowBasket] = useLocalStorage(true);
  const [cart, setCart] = useLocalStorage("carts", []);
  const [products, setProducts] = useLocalStorage("products", [
    { id: 1, img: img1, title: "Филадельфия и лосось", weight: "1260", slice: "28", price: 1150 },
    { id: 2, img: img2, title: "Сет '5 Филадельфий'", weight: "1272", slice: "36", price: 1499 },
    { id: 3, img: img3, title: "Саломон сет", weight: "1189", slice: "30", price: 1489 },
    { id: 4, img: img4, title: "Самая большая Филадельфия", weight: "1023", slice: "24", price: 1559 },
    { id: 5, img: img5, title: "Камикадзе сет", weight: "1412", slice: "32", price: 1519 },
    { id: 6, img: img6, title: "Топовый сет", weight: "1499", slice: "40", price: 1469 },
    { id: 7, img: img7, title: "Банзай", weight: "1982", slice: "29", price: 1059 },
    { id: 8, img: img8, title: "Аригато", weight: "1277", slice: "33", price: 1479 },
    { id: 9, img: img9, title: "Якудза сет", weight: "1168", slice: "19", price: 1399 }
  ])

 

  const handleAddToCart = (product) => {
    setCart((prev) => {
      const findProductInCart = prev.find((item) => item.id === product.id);
      if (findProductInCart) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, amount: item.amount + 1 } : item
        );
      }
      return [...prev, { ...product, amount: 1 }];
    });
  };

  //Handle Remove from cart
  const handleRemoveFromCart = (id) => {
    setCart((prev) => {
      return prev.reduce((cal, item) => {
        if (item.id === id) {
          if (item.amount === 1) return cal;
          return [...cal, { ...item, amount: item.amount - 1 }];
        }
        return [...cal, { ...item }];
      }, []);
    });
  };

  return (
    <div className="App">
      <div className='wrapper'>
        <ThemeContext.Provider value={{defaultProducts, products, setProducts, cart, setCart, isShowBasket, setIsShowBasket, handleAddToCart, handleRemoveFromCart }}>
          <Router>
            <Routes>
              <Route path="/" element={<MainPage />}></Route>
              <Route path="goods" element={<Goods />}></Route>
              <Route path="cards" element={<GoodsCards />}></Route>
              <Route path="review" element={<Review />}></Route>
              <Route path="/order" element={<OrderRegistration />}></Route>
            </Routes>
          </Router>
        </ThemeContext.Provider>
      </div>
    </div >
  );
}

export default App;
