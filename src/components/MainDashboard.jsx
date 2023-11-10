import React, { useState } from "react";
import { RiDropboxFill } from "react-icons/ri";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

import NewServices from "./NewServices";

function MainDashboard() {
  const [mostrarNuevoServicio, setMostrarNuevoServicio] = useState(false);

  const toggleNuevoServicio = () => {
    setMostrarNuevoServicio(!mostrarNuevoServicio);
  };
  const [closeSer, setCloseSer] = useState(false);
  const handleCloseSer = () => {
    setCloseSer(!closeSer);
  };
  return (
    <div className="p-12">
      <div>
        <div className="flex flex-col justify-center items-center  align-center">
          <button
            onClick={() => {
              handleCloseSer();
              toggleNuevoServicio();
            }}
            className="px-4 flex items-center gap-2 py-2 bg-purple-100 text-gray-700 rounded-lg mb-4"
          >
            Crear nuevo servicio
            {closeSer ? <MdKeyboardArrowDown /> : <MdKeyboardArrowUp />}
          </button>
          <form
            className={`w-full md:-order-none transition-all duration-500 ease-in-out ${
              mostrarNuevoServicio
                ? "visible opacity-100"
                : "invisible opacity-0"
            }`}
          >
            <div className="relative">
              {mostrarNuevoServicio && <NewServices />}
            </div>
          </form>
        </div>
        <div className="mb-8">
          <p className="text-gray-400">
            Lorem ipsum dolor sit.{" "}
            <span className="text-purple-500 font-semibold">4</span> services!
          </p>
        </div>
        {/* Card */}
        <a
          href="#"
          className="bg-white rounded-2xl p-8 flex flex-col md:flex-row gap-8 w-full shadow-lg m-3 border-2 border-transparent hover:border-purple-400 transition-all"
        >
          {/* icons */}
          <div className=" w-full md:w-[10%] flex items-center justify-start md:justify-center ">
            <RiDropboxFill className="text-7xl bg-purple-100 text-purple-700 p-4" />
          </div>
          <div className="w-full md:w-[70%]">
            {/* title */}
            <h1 className="text-xl flex items-center gap-4 mb-2">
              Lorem, ipsum.{" "}
              <span className="text-xs font-bold text-purple-700 bg-purple-100 py-1 px-2">
                Lorem
              </span>{" "}
              <span className="text-xs font-bold text-green-700 bg-green-100 py-1 px-2 ">
                Lorem
              </span>
            </h1>
            <p className="text-gray-500 ">lorem ---- lorem</p>
          </div>
          {/* time */}
          <div className="w-full md:w-[20%]  flex flex-col items-end">
            <h3 className="text-xl text-gray-500 mb-2 ">8.8 - 13.7k PLN</h3>
            <p className="text-gray-500">2 days ago</p>
          </div>
        </a>
        {/* Card */}
        <a
          href="#"
          className="bg-white rounded-2xl p-8 flex flex-col md:flex-row gap-8 w-full shadow-lg m-3 border-2 border-transparent hover:border-purple-400 transition-all"
        >
          {/* icons */}
          <div className=" w-full md:w-[10%] flex items-center justify-start md:justify-center">
            <RiDropboxFill className="text-7xl bg-purple-100 text-purple-700 p-4" />
          </div>
          <div className="w-full md:w-[70%]">
            {/* title */}
            <h1 className="text-xl flex items-center gap-4 mb-2">
              Lorem, ipsum.{" "}
              <span className="text-xs font-bold text-purple-700 bg-purple-100 py-1 px-2">
                Lorem
              </span>{" "}
              <span className="text-xs font-bold text-green-700 bg-green-100 py-1 px-2 ">
                Lorem
              </span>
            </h1>
            <p className="text-gray-500 ">lorem ---- lorem</p>
          </div>
          {/* time */}
          <div className="w-full md:w-[20%] flex flex-col items-end">
            <h3 className="text-xl text-gray-500 mb-2 ">8.8 - 13.7k PLN</h3>
            <p className="text-gray-500">2 days ago</p>
          </div>
        </a>
        {/* Card */}
        <a
          href="#"
          className="bg-white rounded-2xl p-8 flex flex-col md:flex-row gap-8 w-full shadow-lg m-3 border-2 border-transparent hover:border-purple-400 transition-all"
        >
          {/* icons */}
          <div className=" w-full md:w-[10%] flex items-center justify-start md:justify-center">
            <RiDropboxFill className="text-7xl bg-purple-100 text-purple-700 p-4" />
          </div>
          <div className="w-full md:w-[70%]">
            {/* title */}
            <h1 className="text-xl flex items-center gap-4 mb-2">
              Lorem, ipsum.{" "}
              <span className="text-xs font-bold text-purple-700 bg-purple-100 py-1 px-2">
                Lorem
              </span>{" "}
              <span className="text-xs font-bold text-green-700 bg-green-100 py-1 px-2 ">
                Lorem
              </span>
            </h1>
            <p className="text-gray-500 ">lorem ---- lorem</p>
          </div>
          {/* time */}
          <div className="w-full md:w-[20%] flex flex-col items-end ">
            <h3 className="text-xl text-gray-500 mb-2 ">8.8 - 13.7k PLN</h3>
            <p className="text-gray-500">2 days ago</p>
          </div>
        </a>
      </div>
    </div>
  );
}

export default MainDashboard;
