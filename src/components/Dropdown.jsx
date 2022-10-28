import React, { useContext, useReducer } from 'react';
import { BsChevronDown } from 'react-icons/bs'
import SortReducer from '../contexts/SortReducer';
import {HiBars3CenterLeft} from 'react-icons/hi2'


const Dropdown = () => {
   const [state,dispatch] = useReducer(SortReducer)
   return (
      <div className='primary-navigation sm:bg-transparent rounded-lg w-full '>
         <ul>
            <li className='w-full px-4'>
               <span className="flex gap-4 items-center justify-between font-semibold md:text-xl sm:text-base text-2xl py-2 sm:px-6">
                  <span className='flex gap-3 items-center'>
                     <HiBars3CenterLeft classname="sm:hidden block"/> Сортировка
                  </span> 
                     <BsChevronDown />
               </span>
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
