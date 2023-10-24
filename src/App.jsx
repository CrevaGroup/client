import { Route, Routes } from "react-router-dom";

import Home from "./views/Home";
import Services from "./views/Services";
import Team from "./views/Team";
import Contact from "./views/Contact";
import Blog from "./views/Blog";

import "./App.css";

function App() {

  return (
    <div className="font-orkney">
      <Routes>
        <Route path="/" element = {<Home/>}/>
        <Route path="/Services" element={<Services />}/>
        <Route path="/Team" element={<Team />}/>
        <Route path="/Blog" element={<Blog />}/>
        <Route path="/Contact" element={<Contact />}/>
        <Route path="/Login" element={<Login />}/>
        <Route path="/Register" element={<Register />}/>
      </Routes>
    </div>
  );
}

export default App
