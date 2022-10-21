import React from 'react'
import Basket from '../../components/Basket'
import MainSection from './MainSection'

function orderRegistration() {
   return (
      <div className='lg:flex bg-gray-200 lg:bg-transparent px-2 md:px-0 w-full'>
         <div className='lg:basis-4/5'>
            <MainSection />
         </div>
         <div className='lg:basis-1/5 md:mt-40 sm:mt-0 lg:mt-0'>
            <Basket />
         </div>
      </div>
   )
}

export default orderRegistration