import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Profile = () => {
  return (
    <div className=' text-center justify-center m-auto p-20 text-3xl flex flex-col w-1/2'>
      <h1 className='p-8 bg-black text-white w-full flex text-center justify-center border-spacing-1 border border-gray-400'>PROFILE</h1>
      <Link to='info' ><p className='p-8 border border-gray-400 hover:bg-slate-300'>ProfileInfo Page</p></Link>
      <Link to='user' ><p className='p-8 border border-gray-400 hover:bg-slate-300'>UserProfile Page</p></Link>
      <Link to='order' ><p className='p-8 border border-gray-400 hover:bg-slate-300'>Orders Page</p></Link>
      <Link to='settings' ><p className='p-8 border border-gray-400 hover:bg-slate-300'>Settings Page</p></Link>
      <Outlet />
    </div>
  )
}

export default Profile
