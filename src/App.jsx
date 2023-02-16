import { Route, Routes } from "react-router-dom"
import First from "./Pages/Home"
// import Home from "./Pages/Home"
import Login from "./Pages/Login"
import Profile from "./Pages/Profile"
import Register from "./Pages/Register"
import CompleteProfile from "./Pages/CompleteProfile"
import Dashboard from "./Pages/Dashboard"
// import Dashboard from "./Pages/Dashboard_two"
import Post from "./Pages/Post"
// import Headers_2 from "./Components/Headers_2"
import CreateProfile from "./Pages/CreateProfile"
import Developers from "./Pages/Developers"
import ViewProfile from "./Pages/ViewProfile"
import Experience from "./Pages/Experience"
import Education from "./Pages/Education"
import OtherPages from "./Pages/OtherPages"
import Single from "./Pages/Single"
// import Dashboard_two from "./Pages/Dashboard_two"

function App() {

  return (
    <div >
      <Routes>
           <Route path="/dashboard" element={<Dashboard/>}/>
           {/* <Route path="/dashboard_two" element={<Dashboard_two/>}/> */}
           <Route path="/post" element={<Post/>}/>
           <Route path="/single/:postid" element={<Single/>}/>
            <Route path="/createprofile" element={<CreateProfile/>}/>
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/view/:id" element={<ViewProfile/>}/>
            <Route path="/developers" element={<Developers/>}/>
            <Route path="/complete-profile" element={<CompleteProfile/>}/>     
            <Route path="/experience" element={<Experience/>}/>     
            <Route path="/education" element={<Education/>}/>     
        <Route path="/" element={<First  />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/*" element={<OtherPages/>} />
      </Routes>
    </div>
  )
}

export default App
