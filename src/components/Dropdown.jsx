import React, { useContext, useReducer } from 'react';
import { BsChevronDown } from 'react-icons/bs'
import SortReducer from '../contexts/SortReducer';


const Dropdown = () => {
   const [state,dispatch] = useReducer(SortReducer)
   return (
      <div className='primary-navigation sm:bg-transparent rounded-lg bg-gray-900 w-full '>
         <ul>
            <li><span className="flex gap-4 items-center font-semibold md:text-xl sm:text-base text-3xl py-2 sm:px-6">Сортировка <BsChevronDown /></span>
               <ul className="dropdown">
                  <li onClick={() => dispatch({ type: "SORT_BY_TITLE" })}>Название</li>
                  <li onClick={() => dispatch({ type: "DESCEND" })}>Сначала дешевле</li>
                  <li onClick={() => dispatch({ type: "ASCEND" })}>Сначала дороже</li>
                  <li onClick={() => dispatch({ type: "SORT_BY_SLICE" })}>Количество кусочков</li>
               </ul>
            </li>
         </ul>
      </div>
   );
}

export default Dropdown;
