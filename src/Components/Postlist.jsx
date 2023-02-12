import React from 'react'

const Postlist = () => {
  return (
    <div>
      <div className="user d-flex  my-3">
            <div className="user_left">
            <img width={120} src="https://gravatar.com/avatar/ad7f517159350ae1997713b686130c98?d=mm&r=pg&s=200" alt="" />
            <p className=''>Jonibek</p>
            </div>
            <div className="user_right ">
                <p className='my-2'>Tugadi</p>
                <small>Posted on 12.02.2023</small>
            <div className="butns my-3 d-flex">
                <button className='likes'><i class="fa-solid fa-thumbs-up"></i></button>
                <button className='likes'><i class="fa-solid fa-thumbs-down"></i></button>
                <button className='dis'>Discussion</button>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Postlist
