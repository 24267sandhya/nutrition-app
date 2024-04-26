import React from 'react'
import Button from './Button'

const HeroSection = () => {
  return (
    <>
        <div className='flex flex-row m-16'>
            <div className=''>
                <p className='text-[64px] font-bold w-2/3'>Energize your <span className='text-orange-600'>healthy</span> lifestyle</p>
                <p className='text-[18px] font-medium m-8 ml-0 w-2/3'>Discover a world of nutritious recipes, expert health tips, and
personalized guidance to energize your journey to well-being.</p>
                <Button/>
            </div>
            <div>
                <div className='w-[700px] h-[480px] rounded-2xl'>
                    <img src="https://tse4.mm.bing.net/th?id=OIP.XLcUPAzJGkddFyYTjL4e_QHaDt&pid=Api&P=0&h=180" alt="Food" className='w-[700px] h-[480px] rounded-[200px]'/>
                </div>
            </div>
        </div>
    </>
  )
}

export default HeroSection