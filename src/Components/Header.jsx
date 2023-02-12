import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
        <header className='header_home d-flex justify-content-between align-items-center'>
            <h1 className="h3 my-2 ">
            <i className='fas fa-code' aria-hidden="true"></i>
             DevConnector</h1>
             <ul className='d-flex mx-3 my-2 justify-content-between align-items-center'>
                <li className='mx-3'>Developers</li>
                <li  className='mx-3'><Link to="/register">Register</Link></li>
                <li className='mx-3'><Link href="/login">Login</Link></li>
             </ul>
        </header>
    </div>
  )
}

export default Header
