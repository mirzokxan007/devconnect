import React from 'react'
import { Link } from 'react-router-dom'
import Headers_2 from '../Components/Headers_2'

const ViewProfile = () => {
  return (
    <div>
        <Headers_2/>
        <main className='just-view container container w-75'>
        <form >
            <Link to="/developers" className='back_to' >Back To Profiles</Link>
            <div className="user_about text-center ">
                <img className='' width={250} src="https://gravatar.com/avatar/045c2457648f3ecbf3f41dcb45e208d0?d=mm&r=pg&s=200" alt="" />
                <h1 className='my-3'>Jonibek</h1>
                <p className='my-3 h3'>Developer at Tribute</p>
            </div>
            <div className="bios text-center">
              <h3 className='my-3'>Jonibek's Bio</h3>
              <p className='my-3'>2+ years of experience. FullStack developer. Mentor</p><hr />
              <h3 className='my-3'>Skill Set</h3>
              <ul className='d-flex my-3 justify-content-around'>
                <li><i class="mx-2 fa-solid fa-check"></i>HTML</li>
                <li><i class="mx-2 fa-solid fa-check"></i>CSS</li>
                <li><i class="mx-2 fa-solid fa-check"></i>JS</li>
                <li><i class="mx-2 fa-solid fa-check"></i>React.js</li>
                <li><i class="mx-2 fa-solid fa-check"></i>Node.js</li>
                <li><i class="mx-2 fa-solid fa-check"></i>Expressjs</li>
                <li><i class="mx-2 fa-solid fa-check"></i>MongoDB</li>
                <li><i class="mx-2 fa-solid fa-check"></i>NestJS</li>
              </ul>
            </div>
            <div className="third d-flex">
              <div  className="w-50 express">
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit sunt quam minima suscipit harum quasi hic tempora, odio tenetur. Provident minus eveniet nostrum excepturi, distinctio animi sit debitis veniam nulla.</p>
              </div>
              <div  className=" w-50 edu">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, ab!</p>
              </div>
            </div>
        </form>
        </main>
    </div>
  )
}

export default ViewProfile
