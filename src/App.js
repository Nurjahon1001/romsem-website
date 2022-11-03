import { React } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Goods from "./pages/goods/Goods";
import MainPage from "./pages/mainPage/mainPage";
import GoodsCards from "./pages/GoodsCard/GoodsCards";
import Review from "./pages/Review/Review";
import OrderRegistration from "./pages/orderRegistration/OrderRegistration.js";
import LoginPage from "./components/LoginPage";
import Cart from "./pages/cart/Cart";
import SecondCol from "./pages/mainPage/secondCol/SecondCol";

// bismillah

function App() {
  return (
    <div className="App">
      <div className="wrapper">
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
            <Route path="/" element={<Navigate replace to="/" />} />
          </Routes>
          <Cart />
        </Router>
      </div>
    </div>
  );
}

export default App;
