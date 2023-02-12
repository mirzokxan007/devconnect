import React from 'react'
import { Link } from 'react-router-dom'
import DevelopList from '../Components/DevelopList'
import Headers_2 from '../Components/Headers_2'

const Developers = () => {
  return (
    <div>
    <Headers_2/>
    <main className='sign_in container container w-75'>
     <form >
        <h2 className='h1'>Developers</h2>
        <h3 className='h3 my-3'>
        <i className=" fab fa-connectdevelop"></i>
          Browse and connect with developers
        </h3>
            <DevelopList/>
            <DevelopList/>
        </form>
        </main>
        </div>
  )
}

export default Developers
