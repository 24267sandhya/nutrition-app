import React from 'react'

const LatestArticlesCard = () => {
  return (
    <>
      <div className='w-[265px] h-[300px] flex flex-col rounded-lg shadow-md'>
        <div className='w-[265px] h-[165px]'>
          <img src="https://tse2.mm.bing.net/th?id=OIP.4PKS2_RBBJLhE7ttUn9KSgHaEK&pid=Api&P=0&h=180" alt="" className='w-full h-full'/>
        </div>
        <div className=''>
          <p className='text-[15px] font-semibold'>Diet, Fitness</p>
          <p className='text-[10px] font-normal m-3 ml-0'>Get all the protein you need on a plant based diet</p>
          <div className='flex flex-row justify-between'>
            <p className='text-[10px] font-normal'>May 25, 2023</p>
            <p className='text-[10px] font-normal'>5 min</p>
          </div>
        </div>
        <div className='w-[265px] h-[42px] bg-white border-t-2 flex items-center justify-end'>
          <p className='flex mr-3 text-[12px]'>Read More</p>
          <p></p>
        </div>
      </div>
    </>
  )
}

export default LatestArticlesCard