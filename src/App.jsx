import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Home from "./views/Home";
import Services from "./views/Services";
import Team from "./views/Team";
import Contact from "./views/Contact";
import Blog from "./views/Blog";
import Login from "./views/Login";
import Register from "./views/Register";
import Community from "./views/Community";
import Success from "./views/Success";
import Failure from "./views/Failure";
import Dashboard from "./views/Dashboard";

import Navbar from "./components/Navbar";
import ProfileUser from "./components/ProfileUser";
import AlertNotif from "./components/AlertNotif";

import "./App.css";
import { setLocalStorage, getConfig } from "./Redux/Actions/actions";
import DarkMode from "./components/darkMode";

function App() {
  const dispatch = useDispatch();

  const popupComponent = useSelector((state) => state.popupComponent);
  const popup = useSelector((state) => state.popup);

  useEffect(() => {
    dispatch(setLocalStorage("user"));
    dispatch(getConfig());
  }, []);

  return (
    <div className="font-orkney">
      <DarkMode />
      {popupComponent.type === "PERFIL" && (
        <div className="flex fixed items-center justify-center w-full h-full bg-black bg-opacity-60 z-20 l-0">
          <ProfileUser />
        </div>
      )}
      {popup.type !== "" && (
        <div className="fixed bottom-4 right-4 z-20">
          <AlertNotif />
        </div>
      )}
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
        />{" "}
        <Route
          path="/community"
          element={
            <React.Fragment>
              <Navbar />
              <Community />
            </React.Fragment>
          }
        />
        <Route path="/dashboard/*" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/Success" element={<Success />} />
        <Route path="/Failure" element={<Failure />} />
      </Routes>
    </div>
  );
}

export default App;
