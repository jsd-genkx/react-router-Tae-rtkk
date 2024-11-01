import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Profile = () => {
  return (
    <div>
      <h1>PROFILE</h1>
      <Link to='info' ><p>ProfileInfo Page</p></Link>
      <Link to='user' ><p>UserProfile Page</p></Link>
      <Link to='order' ><p>Orders Page</p></Link>
      <Link to='settings' ><p>Settings Page</p></Link>
      <Outlet />
    </div>
  )
}

export default Profile
