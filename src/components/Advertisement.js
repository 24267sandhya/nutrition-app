import React from 'react'
import Button from './Button'

const Advertisement = () => {
  return (
    <>
        <div className='bg-white flex items-center justify-center m-20'>
            <div className='bg-orange-600 w-[70vw] h-[40vh] rounded-lg flex flex-col items-center p-5'>
                <p className='text-white text-[48px]'>Nutrition made easy</p>
                <p className='text-white text-[48px]'>Join Now!</p>
                <div className='flex justify-center p-8'>
                <Button/>
                </div>
            </div>
        </div>
    </>
  )
}

export default Advertisement