import React, {useContext} from 'react'
import CartContext from '../contexts/CartContext'

function Checkout() {

   const {clear, itemCount, total} = useContext(CartContext)
   const { setIsModalOpen } = useContext(CartContext)
   const { setIsShowBasket } = useContext(CartContext)

   function toggleModal () {
      setIsShowBasket(false)
      setIsModalOpen(true)
   }

  return (
    <div className='border p-3 bg-orange-400 fixed bottom-0 px-6 text-white'>
      <div className='flex gap-2'>
      <p className='text-lg font-semibold'>Total Items: </p>
      <p className='text-2xl font-bold'>{itemCount}</p>
      </div>
      <div className='flex gap-2'>
         <p className='text-lg font-semibold'>Total payment: </p>
         <p className='text-2xl font-bold'>{total} COM</p>
      </div>
      <div className='flex gap-1 mt-2'>
         <button className='checkoutBtn' onClick={() => toggleModal()}>
            checkout
         </button>
         <button className='checkoutBtn' onClick={clear}>clear</button>
      </div>
    </div>
  )
}

export default Checkout