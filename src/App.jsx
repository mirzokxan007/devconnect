import { Route, Routes } from "react-router-dom"
import First from "./Pages/Home"
// import Home from "./Pages/Home"
import Login from "./Pages/Login"
import Profile from "./Pages/Profile"
import Register from "./Pages/Register"
import CompleteProfile from "./Pages/CompleteProfile"
import Dashboard from "./Pages/Dashboard"
import Post from "./Pages/Post"
import Headers_2 from "./Components/Headers_2"
import CreateProfile from "./Pages/CreateProfile"
import Developers from "./Pages/Developers"
import ViewProfile from "./Pages/ViewProfile"

function App() {

  return (
    <div >
      <Routes>
           <Route path="/dashboard" element={<Dashboard/>}/>
           <Route path="/post" element={<Post/>}/>
            <Route path="/createprofile" element={<CreateProfile/>}/>
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/view" element={<ViewProfile/>}/>
            <Route path="/developers" element={<Developers/>}/>
            <Route path="/complete-profile" element={<CompleteProfile/>}/>     
        <Route path="/" element={<First  />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
      </Routes>
    </div>
  )
}

export default App
