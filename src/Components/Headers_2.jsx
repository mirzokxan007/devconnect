import React from 'react'
import { Link } from 'react-router-dom'

const Headers_2 = () => {
  return (
    <div>
    <header className='header_home d-flex justify-content-between align-items-center'>
        <h1 className="h3 my-2 ">
        <i className='fas fa-code' aria-hidden="true"></i>
         DevConnector</h1>
         <ul className='d-flex mx-3 my-2 justify-content-between align-items-center'>
            <li className='mx-3 fs-6'><Link to="/developers">Developers</Link></li>
            <li  className='mx-3 fs-6'><Link  to="/post">Posts</Link></li>
            <li  className='mx-3 fs-6'><Link  to="/dashboard"><i className="fa-solid fa-user"></i>Dashboard</Link></li>
            <li className='mx-3 fs-6'><Link to="/login"><i className="fa-solid fa-right-from-bracket"></i>Logiout</Link></li>
         </ul>
    </header>
</div>
  )
}

export default Headers_2
