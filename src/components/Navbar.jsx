import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className>
      <ul className='flex text-center justify-evenly p-8 bg-slate-200'>
        <Link to='/'><li className='text-xl text-black p-4 rounded-lg hover:bg-black hover:text-white'>Home</li></Link>
        <Link to='/about'><li className='text-xl text-black p-4 rounded-lg hover:bg-black hover:text-white'>About</li></Link>
        <Link to='/contact'><li className='text-xl text-black p-4 rounded-lg hover:bg-black hover:text-white'>Contact</li></Link>
        <Link to='/products'><li className='text-xl text-black p-4 rounded-lg hover:bg-black hover:text-white'>Product List</li></Link>
        <Link to='/profile'><li className='text-xl text-black p-4 rounded-lg hover:bg-black hover:text-white'>Profile</li></Link>
      </ul>
    </div>
  )
}

export default Navbar
