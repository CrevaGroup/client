import React from "react";
import Filters from "./Filters";
import { RiDropboxFill } from "react-icons/ri";

function MainDashboard() {
  return (
    <div className="p-12">
      <div>
        <h1 className="text-3xl font-semibold flex py-8 justify-center">
          Servicios
        </h1>
        <form className="w-full md:-order-none">
          <div className="relative">
            <Filters />
          </div>
        </form>
        <div className="mb-8">
          <p className="text-gray-400">
            Lorem ipsum dolor sit.{" "}
            <span className="text-purple-500 font-semibold">4</span> services!
          </p>
        </div>
        {/* Card */}
        <div className="bg-white rounded-2xl p-8 flex flex-col md:flex-row gap-8 w-full shadow-lg m-3">
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
          <div className="w-full md:w-[20%] ">
            <h3 className="text-xl text-gray-500 mb-2 ">8.8 - 13.7k PLN</h3>
            <p className="text-gray-500">2 days ago</p>
          </div>
        </div>
        {/* Card */}
        <div className="bg-white rounded-2xl p-8 flex flex-col md:flex-row gap-8 w-full shadow-lg m-3">
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
          <div className="w-full md:w-[20%] ">
            <h3 className="text-xl text-gray-500 mb-2 ">8.8 - 13.7k PLN</h3>
            <p className="text-gray-500">2 days ago</p>
          </div>
        </div>
        {/* Card */}
        <div className="bg-white rounded-2xl p-8 flex flex-col md:flex-row gap-8 w-full shadow-lg m-3">
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
          <div className="w-full md:w-[20%] ">
            <h3 className="text-xl text-gray-500 mb-2 ">8.8 - 13.7k PLN</h3>
            <p className="text-gray-500">2 days ago</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainDashboard;
