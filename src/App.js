import { React } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Goods from "./pages/goods/Goods";
import MainPage from "./pages/mainPage/mainPage";
import GoodsCards from './pages/goodsCard/GoodsCards'
import Review from './pages/review/Review'
import OrderRegistration from './pages/orderRegistration/orderRegistration'
import LoginPage from "./components/LoginPage";
import Cart from './pages/cart/Cart'
import SecondCol from './pages/mainPage/secondCol/SecondCol'

// bismillah

function App() {

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
