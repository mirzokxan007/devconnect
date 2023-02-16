import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import DevelopList from '../Components/DevelopList'
import Header from '../Components/Header'
import Headers_2 from '../Components/Headers_2'

const Developers = () => {
  let token = localStorage.getItem("token")

  const [data , useData] = useState()
  useEffect(() => {

    async function getdevelop() {
      try {
        let {data} = await axios.get("/profile")
         useData(data)

      } catch (error) {
       
      }
    }

    getdevelop();
    
  }, [])




  return (
    <div>
    { token ? <Headers_2/> : <Header/>}
    <main className='sign_in container container w-75'>
     <form >
        <h2 className='h1'>Developers</h2>
        <h3 className='h3 my-3'>
        <i className=" fab fa-connectdevelop"></i>
        Browse and connect with developers
        
        
            
          
        </h3>
        


        {data?.map(({ company , user, skills }) => (
            

<div>
      <div className="develop_1 d-flex justify-content-between align-items-center">

                <div className="img">
                      <img className='' src={user?.avatar} alt="" />
                </div>

                <div className="right_dev w-50">
                        <h4>{user?.name}</h4>
                        <p className='lolq mx-3'>{company}</p>
                        <Link to={`/view/${user?._id}`} className='view'>View Profile</Link>
                </div>

                <ul className="skill  ">
                  {skills?.map(skil=>
                
                      <li><i className="fa-solid fa-check"></i>{skil}</li> 
                      )}
                 </ul>
        </div>
    </div>




            ))}
<p className="loader"></p>
            
        </form>
        </main>
        </div>
  )
}

export default Developers


