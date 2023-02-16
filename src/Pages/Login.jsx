import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import Header from '../Components/Header'

const Login = () => {

  const [values, setValues] = useState({
    email:"",
    password: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    let token = localStorage.getItem("token");
    if (token) navigate("/dashboard");
  }, []);

  async function handleLogin(e) {
    e.preventDefault();

    // Validations ...

    try {
      // Login
      let {
        data: { token },
      } = await axios.post("/auth", values);

      localStorage.setItem("token", token);
      axios.defaults.headers.common["x-auth-token"] = token;

      toast("Logined successfully!😮‍💨 " ,{ type: "success" });

      navigate("/dashboard");
    } catch (error) {
      toast("Invalid Gradientals", { type: "error" });
      
    }
  }

  function handleInputChange(e) {
    setValues((oldValues) => ({
      ...oldValues,
      [e.target.name]: e.target.value,
    }));
  }




  return (
    <>
    <Header/>
    <main className='sign_in container container w-75'>
     <form onSubmit={handleLogin} >
        <h2 className='h1'>Sign In</h2>
        <h3 className='h3 my-3'>
        <i className=" fa-solid fa-user"></i>
        Sign Into Your Account
        </h3>
        <input value={values.email} onChange={handleInputChange} required className="my-3  w-100 " type="email"  name="email" id="email" placeholder="Email Adress" />
        <input value={values.password}
            onChange={handleInputChange}
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            className="form-control"
            required
            min={6}
          />
         
           <button className='my-3 sign_in reg px-2 py-2 '  >Login</button>
           <div className="bot d-flex">
           <h6 className='my-1'>Don't have an account?</h6>
           <Link to="/register" className='mx-2 '>Sign Up</Link>
           </div>
        </form>
    </main>
    </>
  )
}

export default Login
