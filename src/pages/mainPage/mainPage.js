import React from 'react'
import Sidebar from '../../components/Sidebar'
import ThirdCol from './ThirdCol'
import {Outlet} from 'react-router-dom'

export default function MainPage() {

  return (
    <div className='flex justify-between'>
      <Sidebar />
      <Outlet/>
      <ThirdCol />
    </div>
  )
}
