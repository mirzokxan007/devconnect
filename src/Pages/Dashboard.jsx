import React,{useEffect, useState} from 'react'
// import { Link, useNavigate } from 'react-router-dom'
import Headers_2 from '../Components/Headers_2'
// import axios from "axios";
import DashboardList from '../Components/DashboardList';
import Dashboard_two from '../Components/Dashboard_two';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Dashboard = () => {
  
  let [nameme, setName] = useState ();
  const navigate = useNavigate()
  useEffect(() => {
    let token = localStorage.getItem("token")


    if(!token) return navigate("/login")

    async function getMe() {
      try {
        let {data} = await axios.get("/profile/me")
        setName(data)

     
      } catch (error) {
        
      }
    }

    getMe();
  }, [])
  

  return (
    <div>
        <Headers_2/>
        {nameme?<DashboardList/>: <Dashboard_two/>  }
         
       
       
        
    </div>
  )
}

export default Dashboard
