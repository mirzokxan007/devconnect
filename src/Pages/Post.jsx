import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Headers_2 from '../Components/Headers_2'
import Postlist from '../Components/Postlist'

const Post = () => {
  // const [data, useData] = useState();
  let [posts, setPosts] = useState([]);
  let [values, setValues] = useState({
    post: "",
  });



  function handleFormSubmit(e) {
    e.preventDefault();

    async function post() {
      let { data } = await axios.post("/posts",{text:values.post});
      console.log(data);
     
      setPosts(data)
      toast("Posted " ,{ type: "info" });
    }
    post();
    values.post = "";
  }

  function handleInputChange(e) {
    setValues((oldValues) => ({
      ...oldValues,
      [e.target.name]: e.target.value,
    }));
  }
 


  return (
    <div>
      <Headers_2/>
      <main className='post container container w-75'>
     <form onSubmit={handleFormSubmit} >
        <h2 className='h1 '>Posts</h2>
        <h3 className='h3 my-3'>
        <i className=" fa-solid fa-user"></i>
       Welcome to the comunity
        </h3>
        <button className='w-100 say text-align-left'>  Say something...</button>
        <textarea value={values.post} onChange={handleInputChange}  name="post" className='w-100 my-3' cols="100" rows="5" placeholder='Create post'></textarea>
        <button className=' sub text-align-left'>Submit</button>
        </form>
       <Postlist datarefresh={posts}/>
    </main>
    </div>
  )
}

export default Post


