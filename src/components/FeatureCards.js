import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

const FeatureCards = (data) => {
  return (
    <>
        <Link to={data.to}>
        <div className='w-[289px] h-[313px] bg-orange-500 hover:bg-orange-700 flex flex-col items-center pt-5 rounded-lg'>
            <div className='w-[75px] h-[75px] bg-slate-200 rounded-lg flex justify-center items-center'>{data.icon}</div>
            <div className='flex flex-col justify-center items-center'>
              <p className='text-white text-[24px] font-semibold m-6'>{data.topic}</p>
              <p className='text-white text-center'>{data.about}</p>
            </div>
            <div className='m-4'>
              <div className='w-[52px] h-[52px] bg-slate-200 rounded-lg flex justify-center items-center'>
              <FaArrowRight size={18} color='gray'/>
              </div>
            </div>
        </div>
        </Link>
    </>
  )
}

export default FeatureCards