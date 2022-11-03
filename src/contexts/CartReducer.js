import {ActionTypes} from "./ActionTypes.js";

const Storage = (cartItems) => {
   localStorage.setItem(
      "cartItems",
      JSON.stringify(cartItems.length > 0 ? cartItems : [])
   );
};

export const sumItems = (cartItems) => {
   Storage(cartItems);
   let itemCount = cartItems.reduce(
      (total, product) => total + product.quantity,
      0
   );
   let total = cartItems
      .reduce((total, product) => total + product.price * product.quantity, 0)
      .toFixed(2);
   return { itemCount, total };
};

const CartReducer = (state, action) => {
  const {REMOVE_ITEM, ADD_TO_CART, INCREASE, DECREASE,CLEAR, CHECKOUT} = ActionTypes
   switch (action.type) {
      case ADD_TO_CART:
         if (!state.cartItems.find((item) => item.id === action.payload.id)) {
            state.cartItems.push({
               ...action.payload,
               quantity: 1,
            });
         }

         return {
            ...state,
            ...sumItems(state.cartItems),
            cartItems: [...state.cartItems],
         };

      case REMOVE_ITEM:
         return {
            ...state,
            ...sumItems(
               state.cartItems.filter((item) => item.id !== action.payload.id)
            ),
            cartItems: [
               ...state.cartItems.filter((item) => item.id !== action.payload.id),
            ],
         };

      case INCREASE:
         state.cartItems = state.cartItems.map((prod) => {
            if (prod.id === action.payload.id) {
               prod.quantity = action.payload.quantity;
               return prod;
            }
            return prod;
         })
         return {
            ...state,
            ...sumItems(state.cartItems),
            cartItems: [...state.cartItems],
         };

      case DECREASE:
         state.cartItems = state.cartItems.map((prod) => {
            if (prod.id === action.payload.id) {
               prod.quantity = action.payload.quantity;
               return prod;
            }
            return prod;
         })
         return {
            ...state,
            ...sumItems(state.cartItems),
            cartItems: [...state.cartItems],
         };

      case CLEAR:
         return {
            cartItems: [],
            ...sumItems([]),
         };

      case CHECKOUT:
         return {
            cartItems: [],
            checkout: true,
            ...sumItems([]),
         };
      default:
         return state;
   }
};

export default CartReducer;