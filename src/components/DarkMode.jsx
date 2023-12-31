import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function DarkMode() {

  const location = useLocation()

  const [theme, setTheme] = useState(localStorage.getItem("theme"));

  useEffect(() => {
    const htmlElement = document.documentElement;
    if (theme === "dark") {
      htmlElement.classList.add("dark");
      localStorage.setItem("theme", "dark")
    } else {
      htmlElement.classList.remove("dark");
      localStorage.setItem("theme", "light")
    }
  }, [theme]);
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };
  return (
    <div className={`z-20 h-0 fixed lg:absolute top-5 flex justify-end mx-6 w-[93%] bg-[#C3A3D0] lg:w-[100px] lg:right-[-1%]  lg:top-[10%]  ${location.pathname === "/dashboard/newservices" || location.pathname === "/dashboard/profile" || location.pathname === "/dashboard/sales" || location.pathname === "/dashboard/clients" || location.pathname === "/login" || location.pathname === "/register" ? "hidden":""}`}>
      <label className="switch-button" htmlFor="switch">
        <div className="switch-outer">
          <input
            id="switch"
            type="checkbox"
            onChange={toggleTheme}
            className={`theme-switch__checkbox px-4 py-2 rounded focus:outline-none focus:ring focus:border-blue-300 ${
              theme === "dark" ? "bg-gray-800 text-white" : ""
            }`}
            checked={theme === "light"}
          />
          <div className="button">
            <span className="button-toggle"></span>
            <span className="button-indicator"></span>
          </div>
        </div>
      </label>
    </div>
  );
}

export default DarkMode;
