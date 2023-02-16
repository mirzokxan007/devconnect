import React, { useState } from 'react'
import Headers_2 from '../Components/Headers_2'
import { Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';

const CreateProfile = () => {
    const [open, setOpen] = useState(false);
    function handleToggleSidebar() {
      setOpen(!open);
    }

    const navigate = useNavigate();
 const [values, setValues] = useState({
   company:"",
   website:"",
   location:"",
   status:"",
   skills:"",
   githubusername:"",
   bio:"",
   twitter:"",
   facebook:"",
   linkedin:"",
   youtube:"",
   instagram:"",
 });

 async function handleCreate(e) {
   e.preventDefault();

   try {
     let {
       data
     } = await axios.post("/profile", values);

    
   

     toast("Profile created", { type: "success" });
     
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
        <h2 className='h1'>Create Your Profile</h2>
        <h3 className='h3 my-3'>
        <i className=" fa-solid fa-user"></i>
        Let's get some information to make your
        </h3>
        <div className="form-group">
          <select  value={values.status}
              onChange={handleInputChange}
             required className='w-100 py-2' name="status">
            <option>* Select Professional Status</option>
            <option value="Developer">Developer</option>
            <option value="Junior Developer">Junior Developer</option>
            <option value="Senior Developer">Senior Developer</option>
            <option value="Manager">Manager</option>
            <option value="Student or Learning">Student or Learning</option>
            <option value="Instructor">Instructor or Teacher</option>
            <option value="Intern">Intern</option>
            <option value="Other">Other</option>
          </select>
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
            <p className="small disable">
              Could be your own company or one you work for
            </p>
          </div>

          <div className="my-3">
            <input
              type="text"
              name="website"
              id="website"
              placeholder="Website"
              className="form-control"

              value={values.website}
              onChange={handleInputChange}
            />
            <p className="small disable">
              Could be your own or a company website
            </p>
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
            <p className="small disable">
              City state suggested (eg. Boston, MA)
            </p>
          </div>

          <div className="my-3 ">
            <input
              type="text"
              name="skills"
              id="skills"
              placeholder="* Skills"
              className="form-control"
              required
              value={values.skills}
              onChange={handleInputChange}
            />
            <p className="small disable">
              Please use comma separated values (eg. HTML,CSS,JavaScript,PHP
            </p>
          </div>

          <div className="my-3 ">
            <input
              type="text"
              name="githubusername"
              id="githubuser"
              placeholder="Github Username"
              className="form-control"
              value={values.githubusername}
              onChange={handleInputChange}
            />
            <p className="small disable">
              If you want your latest repos and a Github link, include your
              username
            </p>
          </div>

          <div className="my-3">
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Control
                // onChange={handleInputChange}
                as="textarea"
                placeholder="A short bio of your self "
                rows={3}
                name="bio"
                value={values.bio}
                onChange={handleInputChange}
              />
            </Form.Group>

            <p className="small disable">Tell us a little about yourself</p>
          </div>
          <div>
         <button className='opens' onClick={handleToggleSidebar}>Add Social Network Links</button><small className='mx-3'>Optional</small>
       </div>
       {open && 
        <aside>
          <div>
          <div className="form-group my-3 social-input">
              <i className="fab mx-3 twitter fa-twitter fa-2x" />
              <input className='w-75'
                type="text"
                placeholder="Twitter URL"
                name="twitter"
                // value={twitter}
                // onChange={onChange}
              />
            </div>

            <div className="form-group my-3 social-input">
              <i className="fab mx-3 facebook fa-facebook fa-2x" />
              <input className='w-75'
                type="text"
                placeholder="Facebook URL"
                name="facebook"
                // value={facebook}
                // onChange={onChange}
              />
            </div>

            <div className="form-group my-3 social-input">
              <i className="fab mx-2 youtub fa-youtube fa-2x" />
              <input className='w-75'
                type="text"
                placeholder="YouTube URL"
                name="youtube"
                // value={youtube}
                // onChange={onChange}
              />
            </div>

            <div className="form-group my-3 social-input">
              <i className="fab mx-3 linkden fa-linkedin fa-2x" />
              <input className='w-75'
                type="text"
                placeholder="Linkedin URL"
                name="linkedin"
                // value={linkedin}
                // onChange={onChange}
              />
            </div>

            <div className="form-group my-3 social-input">
              <i className="fab mx-3 insta fa-instagram fa-2x" />
              <input className='w-75'
                type="text"
                placeholder="Instagram URL"
                name="instagram"
                // value={instagram}
                // onChange={onChange}
              />
            </div>

          </div>
        </aside>}
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

export default CreateProfile
