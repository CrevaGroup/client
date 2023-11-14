import React, { useEffect, useState } from "react";

function DarkMode() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const htmlElement = document.documentElement;
    if (theme === "dark") {
      htmlElement.classList.add("dark");
    } else {
      htmlElement.classList.remove("dark");
    }
  }, [theme]);
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };
  return (
    <div className="w-[90%] absolute lg:fixed z-200 lg:top-[100px]  right-[0px] top-[20px]">
      <label class="switch-button" for="switch">
        <div class="switch-outer">
          <input
            id="switch"
            type="checkbox"
            onClick={toggleTheme}
            className={` theme-switch__checkbox px-4 py-2 rounded focus:outline-none focus:ring focus:border-blue-300 ${
              theme === "dark" ? "bg-gray-800 text-white" : ""
            }`}
            checked={theme === "light"}
          />
          <div class="button">
            <span class="button-toggle"></span>
            <span class="button-indicator"></span>
          </div>
        </div>
      </label>
    </div>
  );
}

export default DarkMode;
