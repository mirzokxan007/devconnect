import React from 'react'
import { Link } from 'react-router-dom'
import Headers_2 from '../Components/Headers_2'

const Dashboard = () => {

  return (
    <div>
        <Headers_2/>
        <main className='dashboard container container w-75'>
     <form >
        <h2 className='h1 '>Dashboard</h2>
        <h3 className='h3 my-3'>
        <i className=" fa-solid fa-user"></i>
       Welcome mirzokxan
        </h3>
        <p>You have not yet setup a profile, please add some info</p>
           <button><Link className='link_1' to="/createprofile">Create Profil</Link></button>
        </form>
    </main>
    </div>
  )
}

export default Dashboard
