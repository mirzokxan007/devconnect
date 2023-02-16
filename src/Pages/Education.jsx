import React, { useState } from 'react'
import Headers_2 from '../Components/Headers_2'
import { Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';

const Education = () => {
    

    const navigate = useNavigate();
 const [values, setValues] = useState({
   school:"",
   degree:"",
   fieldofstudy:"",
   from:""
 });

 async function handleCreate(e) {
   e.preventDefault();

   try {
     let {
       data
     } = await axios.put("/profile/education", values);

    
   

     toast("Education added", { type: "success" });
     
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
        <h2 className='h1'>Add An Education</h2>
        <h3 className='h3 my-3'>
        <i className=" fas fa-code-branch"></i>
        Add any school or bootcamp that you have attended
        </h3>
        <div className="form-group">
        <div className="my-3">
            <input
              type="text"
              name="school"
              id="company"
              placeholder="* School or Bootcamp"
              className=" form-control"
              required
              value={values.school}
              onChange={handleInputChange}
            />
          </div>
          <div className="my-3">
            <input
              type="text"
              name="degree"
              id="company"
              placeholder="* Degree or Certificate"
              className=" form-control"
              value={values.degree}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="my-3 ">
            <input
              type="text"
              name="fieldofstudy"
              id="study"
              placeholder="Field of Study"
              className="form-control"
              value={values.fieldofstudy}
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
                <label htmlFor="chkPan">
                   <input type="checkbox" id='chkPan' className=' mx-2' />
                </label> Current School
            </p>
          </div>

          <div className="my-3 w-100 ">
            <label htmlFor="name">To date
              <input className='w-100' type="date" name='' />
              </label>
          </div>

          <div className="my-3">
            <Form.Group
              className="mb-3 my-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Control
                // onChange={handleInputChange}
                as="textarea"
                placeholder="Programm description "
                rows={3}
                // value={values.bio}
                // onChange={handleInputChange}
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

export default Education
