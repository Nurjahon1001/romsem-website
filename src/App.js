import { useContext, useState, React, createContext } from "react";
import { ThemeContext } from './contextUI'
import useLocalStorage from "./hooks/useLocalStorage";
import {
  BrowserRouter as Router,
  Routes, Switch, Route, Link
} from "react-router-dom";

import Goods from "./pages/goods/Goods";
import MainPage from "./pages/mainPage/mainPage";
import GoodsCard from './pages/goodsCard/GoodsCard'
import Review from './pages/review/Review'
import OformeleniyaZakaza from './pages/orderRegistration/orderRegistration'

function App() {
  const [isShowBasket, setIsShowBasket] = useLocalStorage(false);
  const [cart, setCart] = useLocalStorage("carts", []);

  const handleAddToCart = product => {
    setCart(prev => {
      const findProductInCart = prev.find(item => item.id === product.id);
      if (findProductInCart) {
        return prev.map(item =>
          item.id === product.id ? { ...item, amount: item.amount + 1 } : item);
      }
      return [...prev, { product, amount: 1 }]
    })

  }

  return (
    <div className="App">
      <div className='wrapper'>
        <ThemeContext.Provider value={{ cart, setCart, isShowBasket, setIsShowBasket, handleAddToCart }}>
          <Router>
            <Routes>
              <Route path="/" element={<MainPage />}></Route>
              <Route path="/goods" element={
                <Goods />
              }>
              </Route>
              <Route path="/cards" element={<GoodsCard />}></Route>
              <Route path="/review" element={<Review />}></Route>
              <Route path="/zakaz" element={<OformeleniyaZakaza />}></Route>
            </Routes>
          </Router>
        </ThemeContext.Provider>
      </div>
    </div >
  );
}

export default App;
