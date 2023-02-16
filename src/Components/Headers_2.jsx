import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';

const Headers_2 = () => {
  const navigate = useNavigate();
  function handleLogout() {
    toast("Logged out", { type: "info" });
     localStorage.removeItem("token");
   // delete axios.defaults.headers.common["x-auth-token"];
  
    navigate("/login");
  }

  return (
    <div>
    <header className='header_home d-flex justify-content-between align-items-center'>
        <h1 className="h3 my-2 ">
        <i className='fas fa-code' aria-hidden="true"></i>
         DevConnector</h1>
         <ul className='d-flex mx-3 my-2 justify-content-between align-items-center'>
            <li className='mx-3 fs-6'><Link to="/developers">Developers</Link></li>
            <li  className='mx-3 fs-6'><Link  to="/post">Posts</Link></li>
            <li  className='mx-3 fs-6'><Link  to="/dashboard"><i className="fa-solid fa-user"></i>Dashboard</Link></li>
            <li className='mx-3 fs-6'><button className='button_log' onClick={handleLogout}><i className="fa-solid fa-right-from-bracket"></i>Logiout</button></li>
         </ul>
    </header>
</div>
  )
}

export default Headers_2
