import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';

const DashboardList = () => {
  
  function handledelete() {

    async function getMe() {
      try {
        await axios.delete("/profile");
         localStorage.removeItem("token");
         toast("Account deleted", {type: "info"} )
        navigate("/register");
      } catch (error) {
        console.log(error);
           toast("Error", { type: "error" }); 
      }
    }
    getMe();
  }

  let [namem, setNam] = useState ();
  const navigat = useNavigate()
  useEffect(() => {
    let token = localStorage.getItem("token")


    if(!token) return navigat("/login")

    async function getMe() {
      try {
        let {data} = await axios.get("/auth")
        setNam(data)

        console.log(data);
      } catch (error) {
          console.log(error);
      }
    }

    getMe();
  }, [])


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
      <main className='dashboard container container w-75'>

        <h2 className='h1 '>Dashboard</h2>
        <h3 className='h3 my-3'>
        <i className=" fa-solid fa-user"></i>
       Welcome {namem?.name}
        </h3>   
  
        </main>
        <ul className='w-75 hero container d-flex'>
            <li className='px-3'><Link to="/createprofile" className='links'><i className="fas mx-2 fa-user-circle "></i>Edit profile</Link></li>
            <li className='px-3'><Link to="/experience" className='links'><i className="fab mx-2   fa-black-tie "></i>Add experience</Link></li>
            <li className='px-3'><Link to="/education" className='links'><i className="fas mx-2   fa-graduation-cap "></i>Add education</Link></li>
        </ul>
        <div className='container container w-75'>
          <h2 className='my-3'>Experience Credentials</h2>
        <table className=" w-75 table table-bordered  ">
          <thead className="table-active">
            <tr>
              <th scope="col">Company</th>
              <th scope="col">Title</th>
              <th scope="col">Years</th>
              <th scope="col"> </th>
            </tr>
          </thead>
          <tbody>
              {nameme?.experience[0]?<tr>
              <th scope="row">{nameme?.experience[0]?.company}</th>
              <td>{nameme?.experience[0]?.title}</td>
              <td>{nameme?.experience[0]?.from}</td>
              <td>
                <button  className="btn btn-danger">Delete</button>
              </td>
            </tr>:""}
            
          </tbody>
        </table>
        </div>
        <div className='container container w-75'>
          <h2 className='my-3'>Education Credentials</h2>
        <table className=" w-75 table table-bordered  ">
          <thead className="table-active">
            <tr>
              <th scope="col">School</th>
              <th scope="col">Degree</th>
              <th scope="col">Years</th>
              <th scope="col"> </th>
            </tr>
          </thead>
          <tbody>
          {nameme?.education[0]?<tr>
              <th scope="row">{nameme?.education[0]?.school}</th>
              <td>{nameme?.education[0]?.degree}</td>
              <td>{nameme?.education[0]?.from}</td>
              <td>
                <button className="btn btn-danger">Delete</button>
              </td>
            </tr>:""}
          </tbody>
        </table>
        <button onClick={handledelete} className='btn btn-danger'><Link className='bg-danger leko' to="/createprofile"><i className="mx-3 fa-solid fa-user"></i>Delete Profil</Link></button>
        </div>
    </div>
  )
}

export default DashboardList
