import {
   SORT_BY_TITLE,
   ASCEND,
   DESCEND,
   SORT_BY_SLICE,
   RETURN_TO_DEFAULT
} from './ActionTypes.js'
import { defaultProducts } from '../constants/data/defaultProducts';
import CartContext from './CartContext.js';
import { useContext } from 'react'
const SortReducer = (state, action) => {
   const { productsData, setProductsData } = useContext(CartContext)
   switch (action.type) {
      case SORT_BY_TITLE: {
         defaultProducts.sort((a, b) => {
            if (a.title.toLowerCase() < b.title.toLowerCase()) return -1;
            if (a.title.toLowerCase() > b.title.toLowerCase()) return 1;
            return 0;
         })
         setProductsData(state)
         break;
      }
      case ASCEND: {
         const ascendedProducts = defaultProducts.sort((a, b) => b.price - a.price)
         setProductsData(state)
         break;
      }
      case DESCEND: {
         const descendedProducts = defaultProducts.sort((a, b) => a.price - b.price)
         setProductsData(descendedProducts)
         break;
      }
      case SORT_BY_SLICE: {
         const sortedBySlice = defaultProducts.sort((a, b) => a.slice - b.slice)
         setProductsData(sortedBySlice)
         break
      }
      default:
         return state
   }
}

export default SortReducer