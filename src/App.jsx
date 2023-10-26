import { Route, Routes } from "react-router-dom";

import Home from "./views/Home";
import Services from "./views/Services";
import Team from "./views/Team";
import Contact from "./views/Contact";
import Blog from "./views/Blog";
import Login from "./views/Login";
import Register from "./views/Register";

import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="font-orkney">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/team" element={<Team />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
