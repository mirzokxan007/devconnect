import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Headers_2 from '../Components/Headers_2'
// import Calendar from 'react-calendar';

const ViewProfile = () => {
  const {id} = useParams()
  let token = localStorage.getItem("token")
 
  const [data , useData] = useState()
  useEffect(() => {

    async function getdevelop() {
        let {data} = await axios.get(`profile/user/${id}`)
         useData(data)
   
      } 

    getdevelop();
    
  }, [])

  return (
    <div>
        <Headers_2/>
        <main className='just-view container container w-75'>
        <form >
            <Link to="/developers" className='back_to' >Back To Profiles</Link>
            <div className="user_about text-center ">
                <img className='' width={250} src={data?.user?.avatar} alt="" />
                <h1 className='my-3'>{data?.user?.name}</h1>
                <p className='my-3 h3'>{data?.company}</p>
            </div>
            <div className="bios text-center">
              <h3 className='my-3'>{data?.user?.name}'s Bio</h3>
              <p className='my-3'>{data?.bio}</p><hr />
              <h3 className='my-3'>Skill Set</h3>
              <ul className='d-flex my-3 justify-content-around'>
              {data?.skills?.map((n) => (
                <li>
                  <i className="fa-solid fs-7 fa-check"></i>
                  {n}
                </li>
              ))}
              </ul>
            </div>
            <div className="third d-flex">
              <div  className="w-50 express">
                <h2>Experience</h2>
                <p><span className='spot1'>{data?.experience[0]?.company}</span></p>
                <p><span className='spot1'>{data?.experience[0]?.from}</span></p>
                <p><span className='spot'> Position:</span>{data?.experience[0]?.title}</p>
                <p><span className='spot'> Location:</span>{data?.experience[0]?.location}</p>
                <p><span className='spot'>Description:</span>{data?.experience[0]?.description} </p>
              </div>
              <div  className=" w-50 edu">
                <h2>Education</h2>
                <p>Time: {data?.education[0]?.from}</p>
                <p>Degree: {data?.education[0]?.degree}</p>
                <p>Field Of Study: {data?.education[0]?.fieldofstudy}</p>
                <p>School: {data?.education[0]?.school}</p>
              </div>
            </div>
        </form>
        
        </main>
    </div>
  )
}

export default ViewProfile
