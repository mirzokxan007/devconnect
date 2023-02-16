import axios from 'axios';
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const DevelopList = () => {
  // let data = ({bio,company,skills})
  // let token = localStorage.getItem("token");
  // useEffect(() => {

  //   async function getdevelop() {
  //     try {
  //       let {data} = await axios.get("/posts")
        
  //     
  //     }
  //   }

  //   getdevelop();
    
  // }, [])
  return (
    <div>
      <div className="develop_1 d-flex justify-content-between align-items-center">

                <div className="img">
                      <img src="https://gravatar.com/avatar/045c2457648f3ecbf3f41dcb45e208d0?d=mm&r=pg&s=200" alt="" />
                </div>

                <div className="right_dev w-50">
                        <h4>Jonibek</h4>
                        <p>Developer at Tribute</p>
                        <Link to="/view" className='view'>View Profile</Link>
                </div>

                <div className="skill">
                      <li><i className="fa-solid fa-check"></i>HTMl</li> 
                      <li><i className="fa-solid fa-check"></i>CSS</li> 
                      <li><i className="fa-solid fa-check"></i>BOOTSTRAP</li> 
                      <li><i className="fa-solid fa-check"></i>js</li> 
                 </div>
        </div>
    </div>
  )
}

export default DevelopList
