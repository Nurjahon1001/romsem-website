import { useReducer, useState } from "react";
// import { INCREASE } from "./ActionTypes.js";
import CartContext from './CartContext.js'
import CartReducer from "./CartReducer.js"
import { sumItems } from './CartReducer.js'
import {defaultProducts} from '../constants/data/defaultProducts.js'
import useLocalStorage from "../hooks/useLocalStorage.jsx";

const storage = localStorage.getItem("cartItems")
   ? JSON.parse(localStorage.getItem("cartItems"))
   : [];

const CardState = ({ children }) => {

   const initialState = {
      cartItems: storage,
      ...sumItems(storage),
      checkout: false
   }

   const [state, dispatch] = useReducer(CartReducer, initialState)

   const addToCart = (payload) => {
      dispatch({ type: "ADD_TO_CART", payload })
   }

   const increase = (payload) => {
      dispatch({ type: 'INCREASE', payload })
   }

   const decrease = (payload) => {
      console.log("cart state side:", payload);
      dispatch({ type: "DECREASE", payload })
   }

   const removeFromCart = (payload) => {
      dispatch({ type: "REMOVE_ITEM", payload })
   }

   const handleCheckout = (payload) => {
      dispatch({ type: "CHECKOUT", payload })
   }

   const clear = (payload) => {
      dispatch({ type: "CLEAR", payload })
   }

   const [isShowBasket, setIsShowBasket] = useState(false);
   const [isModalOpen, setIsModalOpen] = useState(false);
   const [ productsData, setProductsData] = useState(defaultProducts)
   const [isLoggedIn, setIsLoggedIn] = useLocalStorage('isLoggedIn', false)

   return (
      <CartContext.Provider
         value={{
            addToCart,
            increase,
            decrease,
            removeFromCart,
            handleCheckout,
            clear,
            isShowBasket,
            setIsShowBasket,
            isModalOpen,
            setIsModalOpen,
            productsData,
            setProductsData,
            isLoggedIn,
            setIsLoggedIn,
            ...state
         }}
      >
         {children}
      </CartContext.Provider>
   )
}

export default CardState;