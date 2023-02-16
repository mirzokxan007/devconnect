import React, { useState } from 'react'
import Headers_2 from '../Components/Headers_2'
import { Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';

const Experience = () => {
    const [open, setOpen] = useState(false);
    function handleToggleSidebar() {
      setOpen(!open);
    }

    const navigate = useNavigate();
 const [values, setValues] = useState({
   company:"",
   from:"",
   title:""
 });
 async function handleCreate(e) {
   e.preventDefault();

   try {
     let {
       data
     } = await axios.put("/profile/experience", values);

    
   

     toast("Experience added", { type: "success" });
     
     navigate("/dashboard");
   } catch (error) {
      toast("error", { type: "error" });
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
      <Headers_2/>
      <main className='sign_in container container w-75'>
     <form onSubmit={handleCreate} >
        <h2 className='h1'>Add An Experience</h2>
        <h3 className='h3 my-3'>
        <i className=" fas fa-code-branch"></i>
        Add any developer/programming positions that you have had in the past
        </h3>
        <div className="form-group">
        <div className="my-3">
            <input
              type="text"
              name="title"
              id="job"
              placeholder="* Job Title"
              className=" form-control"
              value={values.title}
              onChange={handleInputChange}
            />
          </div>
          <div className="my-3">
            <input
              type="text"
              name="company"
              id="company"
              placeholder="Company"
              className=" form-control"
              value={values.company}
              onChange={handleInputChange}
            />
          </div>

          <div className="my-3 ">
            <input
              type="text"
              name="location"
              id="location"
              placeholder="Location"
              className="form-control"
              value={values.location}
              onChange={handleInputChange}
            />
          </div>    
          <div className="my-3 ">
            <label htmlFor="name">Form date</label>
            <input className='w-100' type="date" name='from'
            value={values.from}
            onChange={handleInputChange} />
          </div>
           
          <div className="my-3 ">
            <p className='d-flex align-items-center'>
            <input type="checkbox" className='mx-2' /> Current Job
            </p>
          </div>

          <div className="my-3 ">
            <label htmlFor="name">To date</label>
            <input className='w-100' type="date" name='form' />
          </div>

          <div className="my-3">
            <Form.Group
              className="mb-3 my-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Control
                // onChange={handleInputChange}
                as="textarea"
                name='bio'
                placeholder="Job description "
                rows={3}
                value={values.bio}
                onChange={handleInputChange}
              />
            </Form.Group>

            {/* <p className="small disable">Tell us a little about yourself</p> */}
          </div>
          <button className="my-2 mx-2 btn  btn-info">Send</button>
          <Link className="btn btn-light my-1" to="/dashboard">
            Go Back
          </Link>
        </div>
        </form>
        </main>
    </>
  )
}

export default Experience
