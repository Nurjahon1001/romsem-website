import React from 'react'
import Korzina from '../components/Korzina'
import MainSection from './MainSection'

function Ofermleniye() {
    return (
        <div className='flex'>
            <div className='basis-4/5'>
                <MainSection />

            </div>
            <div className='basis-1/5'>
                <Korzina />

            </div>
        </div>
    )
}

export default Ofermleniye