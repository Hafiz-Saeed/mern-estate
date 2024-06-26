import React from 'react'
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className='bg-slate-300 shadow-md'>
      <div className='flex justify-between items-center max-w-6xl mx-auto p-3 '>
        <Link to={"/"}>
          <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
            <span className='text-slate-500'>Xoxo</span>
            <span className='text-slate-700'>Estate</span>
          </h1>
        </Link>
        <form className='bg-slate-100 shadow-sm p-3 rounded-lg flex items-center'>
          <input type="text" placeholder='Search Here...' className='bg-transparent focus:outline-none text-gray-600 w-24 sm:w-64' />
          <i class="fa-solid fa-magnifying-glass"></i>
        </form>

        <ul className='flex gap-4'>
          <Link to={'/'}>        <li className='hidden sm:inline text-slate-700 hover:underline cursor-pointer'>Home</li>
          </Link>
          <Link to={'/about'}><li className='hidden sm:inline text-slate-700 hover:underline cursor-pointer'>About</li></Link>
          <Link to={'/sign-in'}>          <li className=' text-slate-700 hover:underline cursor-pointer' >Sign in</li>
</Link>
        </ul>

      </div>
    </header>
  )
}

export default Header