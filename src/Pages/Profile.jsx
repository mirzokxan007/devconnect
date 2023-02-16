import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Profile = () => {

  const [data, useData] = useState();

  useEffect(() => {
    async function getMe() {
      try {
        let { data } = await axios.get("/profile/");
        useData(data);
      } catch (error) {
    
      }
    }
    getMe();
  }, []);

  return (
    <div>
     profile
    </div>
  )
}

export default Profile
