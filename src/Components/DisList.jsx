import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const DisList = ({datarefresh}) => {
  const [data, useData] = useState();
  const {postid} =useParams();
  // console.log(postid);
  useEffect(() => {
    async function getMe() {
      try {
        let { data } = await axios.get(`/posts/${postid} `);

        useData(data.comments);
        console.log(data);
      } catch (error) {
        
      }
    }
    getMe();
  }, [datarefresh]);

     
  return (
    <div>
        <main>
        {data?.map(({ text,name,avatar }) => (
      <div className="user1 d-flex  w-100 container ">
            <div className="user_left ">
            <img width={120} src={avatar}  alt="" />
            <p className='post_name'>{name}</p>
            </div>
            <div className="user_right  ">
                <p className='  post_text my-2'>{text}</p>
                <small>Posted on: 20202</small>
            <div className="butns my-3 d-flex">
                {/* <button className='disq'><i className="fa-solid fa-thumbs-down"></i></button> */}
                <button className='dis bg-danger'> <Link className='text-white text-decoration-none'> <i class= "px-3 fa-solid fa-xmark"></i></Link></button>
            </div>
            </div>  
        </div>
        ))} 
        </main>
    </div>
  )
}

export default DisList
