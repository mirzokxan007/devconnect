import axios from 'axios'
import React, { useEffect,useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Dashboard_two = () => {
  let [nameme, setName] = useState ();
  const navigate = useNavigate()
  useEffect(() => {
    let token = localStorage.getItem("token")


    if(!token) return navigate("/login")

    async function getMe() {
      try {
        let {data} = await axios.get("/auth")
        setName(data)

  
      } catch (error) {
      }
    }

    getMe();
  }, [])
  return (
    <div>
       <main className='dashboard container container w-75'>
     <form >
        <h2 className='h1 '>Dashboard</h2>
        <h3 className='h3 my-3'>
        <i className=" fa-solid fa-user"></i>
          Welcome {nameme?.name} 
        </h3> 
        <p>You have not yet setup a profile, please add some info</p>
           <button><Link className='link_1' to="/createprofile">Create Profil</Link></button>
        </form>
        {/* <div className="current_links d-flex w-75 justify-content-center ">
       <Link className='container ' to="/experience" > Add experience</Link>
       <Link className='container ' to="/education" > Add education</Link>
       </div> */}
    </main>
    </div>
  )
}

export default Dashboard_two
