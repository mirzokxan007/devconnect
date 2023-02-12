import axios from "axios";
import React, {  useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Header from '../Components/Header'

const Register = () => {

  const [values, setValues] = useState({
    name: "",
    email:"",
    password: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    let token = localStorage.getItem("token")
    if(token) navigate("/dashboard")
  }, [])

  async function handleRegister(e) {
    e.preventDefault();
 
    if (values.password !== values.confirmedPassword)
      return toast("Passwords do not match", { type: "error" });
  
  
  //register
 
 
 try {
   let {data : {token},message} = await axios.post("/users", values);
   localStorage.setItem("token",token);
   axios.defaults.headers.common["x-auth-token"] =` Bearer ${token}`;
  
   toast("Successfull log in ",{type:"success"})


    navigate("/dashboard");
 } catch (error) {
  toast("User already exists",{type:"error"})

   console.log(error);
 }
 }
 
 function  handleInputChange(e){
   setValues((oldValues)=>({
     ...oldValues,[e.target.name]:e.target.value,
   }));
 }

  return (
    <>
      <Header/>
      <main className="sign_up container w-75">
        <form onSubmit={handleRegister} >
        <h2 className='h1'>Sign Up</h2>
        <h3 className='h3 my-3'>
        <i className=" fa-solid fa-user"></i>
        Sign Into Your Account
        </h3>
        <input value={values.name} onChange={handleInputChange} required className=" my-3 w-100 " type="text"  name="name" id="name" placeholder="Name" />
        <input value={values.email} onChange={handleInputChange} required className="  w-100 " type="mail"  name="email" id="email" placeholder="Email Adress" />
        <p>This site uses Gravatar so if you want a profile image, use a Gravatar email</p>
        {/* <button type="button" onClick={(e)=>handleshowhidepassword(e)} value={checktype} className="fa-solid show   fa-eye-slash" ></button>   */}
        {/* <input   placeholder='Password' required onChange={handleInputChange} value={values.password} min={4} className='w-100' type={checktype} name='password' id="password" />  */}
        <input   type="password"
            name="password"
            id="password"
            placeholder="Password"
            className="form-control"
            required
            min={6}
            value={values.password}
            onChange={handleInputChange}
          />

        <input  type="password"
            name="confirmedPassword"
            id="confirmedPassword"
            placeholder="Confirm Password"
            className="my-3 form-control"
            required
            min={6}
            value={values.confirmedPassword}
            onChange={handleInputChange}
       
         />

        <button to="/dashboard" className='my-2 reg px-2 py-2 '  >Register</button>
        <div className="bot d-flex ">
          <h6 className='my-1'>Already have an account?</h6>
         <Link to="/login">Sign in</Link>
        </div>
        </form>
      </main>  
    </>
  )
};

export default Register
