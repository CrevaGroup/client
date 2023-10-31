import { Route, Routes } from "react-router-dom";
import React from "react";

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
      <Routes>
        <Route
          path="/"
          element={
            <React.Fragment>
              <Navbar />
              <Home />
            </React.Fragment>
          }
        />
        <Route
          path="/services"
          element={
            <React.Fragment>
              <Navbar />
              <Services />
            </React.Fragment>
          }
        />
        <Route
          path="/team"
          element={
            <React.Fragment>
              <Navbar />
              <Team />
            </React.Fragment>
          }
        />
        <Route
          path="/blog"
          element={
            <React.Fragment>
              <Navbar />
              <Blog />
            </React.Fragment>
          }
        />
        <Route
          path="/contact"
          element={
            <React.Fragment>
              <Navbar />
              <Contact />
            </React.Fragment>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
