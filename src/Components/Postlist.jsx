import axios from 'axios'
import React, { useEffect,useState } from 'react'
import { Link } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom'

const Postlist = ({datarefresh}) => {
  const [data, useData] = useState();

  useEffect(() => {
    async function getMe() {
      try {
        let { data } = await axios.get("/posts/");
        useData(data);
      } catch (error) {
        
      }
    }
    getMe();
  }, [datarefresh]);

     

// .log(data);
  return (
    <div>
      
      {data?.map(({ text,name,date,avatar,likes,user,_id }) => (
      <div className="user d-flex  my-3">
            <div className="user_left">
            <Link to={`/view/${user}`} >
            <img width={120} src={avatar} alt="" />
            <p className='post_name'>{name}</p></Link>
            </div>
            <div className="user_right ">
                <p className='  post_text my-2'>{text}</p>
                <small>Posted on: {date}</small>
            <div className="butns my-3 d-flex">
                <button className='likes'><i className="fa-solid fa-thumbs-up"></i>
                {likes.length}
                </button>
                <button className='likes'><i className="fa-solid fa-thumbs-down"></i></button>
                <button className='dis'> <Link className='text-white text-decoration-none' to={`/single/${_id}`}> Discussion</Link></button>
            </div>
            </div>
        </div>
         ))} 
         <p className="loader"></p>
    </div>
  )
}

export default Postlist
