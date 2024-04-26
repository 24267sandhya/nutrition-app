import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
        <div className='h-[10vh] w-full bg-orange-600 flex flex-row justify-between items-center'>
        <div className=' mr-10'>
            <p className='text-[48px] font-bold text-black'>Nutri<span className='text-[48px] font-bold text-white'>App🍎</span></p>
        </div>
        <div className='flex flex-row gap-16'>
            <Link to="/" className='text-[20px] font-semibold hover:text-white'>Home</Link>
            <Link to="/about-us" className='text-[20px] font-semibold hover:text-white'>About Us</Link>
            <p className='text-[20px] font-semibold hover:text-white'>Services</p>
            <p className='text-[20px] font-semibold hover:text-white'>Contact Us</p>
        </div>
        <div className='flex flex-row gap-8 mr-5'>
            <p>Login</p>
            <p>Logout</p>
        </div>
        </div>
    </>
  )
}

export default Navbar