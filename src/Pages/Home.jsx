import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../Components/Header'
import "../index.scss"


const Home = () => {
  return (
    <div className='home' >
      <Header/>
      <div className="d-flex sort container w-75 justify-content-center text-center align-items-center">
      <div className="center_p  ">
        <h1 className='my-3'>Developer Connector</h1>
        <p>Create a developer profile/portfolio, share posts and get help from other developers</p>
        <div className="buttons">
          <Link to="/register" className="btn my-3 btn_1 btn-info">Sign Up</Link>
          <Link to="/login" className="btn btn_2">Login</Link>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Home
