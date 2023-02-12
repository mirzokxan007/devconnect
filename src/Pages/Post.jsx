import React from 'react'
import Headers_2 from '../Components/Headers_2'
import Postlist from '../Components/Postlist'

const Post = () => {
  return (
    <div>
      <Headers_2/>
      <main className='post container container w-75'>
     <form >
        <h2 className='h1 '>Posts</h2>
        <h3 className='h3 my-3'>
        <i className=" fa-solid fa-user"></i>
       Welcome to the comunity
        </h3>
        <button className='w-100 say text-align-left'>  Say something...</button>
        <textarea name="text" className='w-100 my-3' cols="100" rows="5" placeholder='Create post'></textarea>
        <button className=' sub text-align-left'>Submit</button>
        </form>
        <Postlist/>
    </main>
    </div>
  )
}

export default Post
