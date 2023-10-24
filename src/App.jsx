import {Routes, Route} from "react-router-dom"

import Blog from "../src/Views/Blog"
import Contact from "../src/Views/Contact"
import Home from "../src/Views/Home"
import Login from "../src/Views/Login"
import Register from "../src/Views/Register"
import Services from "../src/Views/Services"
import Team from "../src/Views/Team"

import './App.css'

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/Services" element={<Services />}/>
        <Route path="/Team" element={<Team />}/>
        <Route path="/Blog" element={<Blog />}/>
        <Route path="/Contact" element={<Contact />}/>
        <Route path="/Login" element={<Login />}/>
        <Route path="/Register" element={<Register />}/>
      </Routes>
    </div>
  )
}

export default App;