import React from 'react'
import Headers_2 from '../Components/Headers_2'

const OtherPages = () => {
  return (
    <div>
        <Headers_2/>
        <div className='container d-flex leroo justify-content-around align-items-center w-75'>
            <img width={300} src="https://i.gifer.com/origin/78/787899e9d4e4491f797aba5c61294dfc_w200.gif" alt="" />
            <div className="note">
            <h1 className='dinasaur'><i className="fa-solid text-danger mx-3 fa-circle-exclamation"></i>Page Not Found</h1>
            <p className='h1 '>Sorry, this page does not exist</p>
            </div>
        </div>
    </div>
  )
}

export default OtherPages
