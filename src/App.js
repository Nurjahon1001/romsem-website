import { React } from "react";
import { CartContext } from './contexts/CartContext'
import useLocalStorage from "./hooks/useLocalStorage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Goods from "./pages/goods/Goods";
import MainPage from "./pages/mainPage/mainPage";
import GoodsCards from './pages/goodsCard/GoodsCards'
import Review from './pages/review/Review'
import OrderRegistration from './pages/orderRegistration/orderRegistration'
import { defaultProducts } from './constants/data/defaultProducts'
import LoginPage from "./components/LoginPage";
import Cart from './pages/cart/Cart'
import SecondCol from './pages/mainPage/secondCol/SecondCol'

// bismillah

function App() {
  const [cart, setCart] = useLocalStorage("carts", []);
  const [products, setProducts] = useLocalStorage("products", [])

  // const handleAddToCart = (product) => {
  //   setCart((prev) => {
  //     const findProductInCart = prev.find((item) => item.id === product.id);
  //     if (findProductInCart) {
  //       return prev.map((item) =>
  //         item.id === product.id ? { ...item, amount: item.amount + 1 } : item
  //       );
  //     }
  //     return [...prev, { ...product, amount: 1 }];
  //   });
  // };

  //Handle Remove from cart

  // const handleRemoveFromCart = (id) => {
  //   setCart((prev) => {
  //     return prev.reduce((cal, item) => {
  //       if (item.id === id) {
  //         if (item.amount === 1) return cal;
  //         return [...cal, { ...item, amount: item.amount - 1 }];
  //       }
  //       return [...cal, { ...item }];
  //     }, []);
  //   });
  // };

  return (
    <div className="App">
      <div className='wrapper'>
        <Router>
          <Routes>
            <Route path="/" element={<MainPage />}>
              <Route path="/" element={<SecondCol />}></Route>
              <Route path="/review" element={<Review />}></Route>
              <Route path="/goods" element={<Goods />}></Route>
            </Route>
            <Route path="/order" element={<OrderRegistration />}></Route>
            <Route path="/loginPage" element={<LoginPage />}></Route>
            <Route path="/cards" element={<GoodsCards />}></Route>
          </Routes>
          <Cart />
        </Router>
      </div>
    </div >
  );
}

export default App;
