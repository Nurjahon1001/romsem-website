import { useReducer } from "react";
import useLocalStorage from "../hooks/useLocalStorage.jsx";
import CartContext from './CartContext.js'
import CartReducer from "./CartReducer.js"
import {sumItems} from './CartReducer.js'

const storage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

const CardState = ({children}) => {

   const initialState = {
      cartItems: storage,
      ...sumItems(storage),
      checkout: false 
   }

  const [state, dispatch] = useReducer(CartReducer, initialState)

  const addToCart = (payload) => {
   dispatch({type: "ADD_TO_CART", payload})
  }

  const increase = (payload) => {
   dispatch({type: "INCREASE", payload})
  }

  const decrease = (payload) => {
   dispatch({type: "DECREASE", payload})
  }

  const removeFromCart = (payload) => {
   dispatch({type: "REMOVE_ITEM", payload})
  }

  const handleCheckout = (payload) => {
   dispatch({type: "CHECKOUT", payload})
  }

  const [isShowBasket, setIsShowBasket] = useLocalStorage(true);
  
  return (
   <CartContext.Provider
      value={{
         addToCart,
         increase,
         decrease,
         removeFromCart,
         handleCheckout,
         isShowBasket,
         setIsShowBasket,
         ...state
      }}
   >
      {children}
   </CartContext.Provider>
  )
}

export default CardState;