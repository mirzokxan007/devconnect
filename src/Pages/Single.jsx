import axios from 'axios'
import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import DisList from '../Components/DisList'
import Headers_2 from '../Components/Headers_2'

const Single = () => {
  let [posts, setPosts] = useState([]);
  let [values, setValues] = useState({
    post: "",
  });

 const {postid} = useParams();

  function handleFormSubmit(e) {
    e.preventDefault();

    async function post() {
      let { data } = await axios.post(`/posts/comment/${postid}` ,{text:values.post});
  
     
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
     <form  onSubmit={handleFormSubmit} >
      <div className="user1 d-flex  w-100 container ">
            <div className="user_left ">
            <img width={120} src="https://gravatar.com/avatar/f6b8dab0deed25acc37903df5aed1007?d=mm&r=pg&s=200" alt="" />
            <p className='post_name'>test</p>
            </div>
            <div className="user_right  ">
                <p className='  post_text my-2'>test</p>
                <small>Posted on: 20202</small>
            <div className="butns my-3 d-flex">
                <button className='disq'><i className="fa-solid fa-thumbs-up"></i>  
                </button>
                <button className='disq'><i className="fa-solid fa-thumbs-down"></i></button>
                <button className='dis'> <Link className='text-white text-decoration-none' to="/single"> Discussion</Link></button>
            </div>
            </div>  
        </div>
        <button className='w-100 say my-3 text-align-left'>  Leave a Comment</button>
        <textarea value={values.post} onChange={handleInputChange} name="post" className='w-100 my-3' cols="100" rows="5" placeholder='Create post'></textarea>
        <button className=' sub text-align-left'>Submit</button>
        <DisList datarefresh={posts}/>
        </form>
    </main>
    </div>
  )
}

export default Single
