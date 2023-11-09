import React, { useState } from "react";
import {
  MdDashboard,
  MdOutlineNotificationsActive,
  MdKeyboardArrowDown,
  MdOutlineManageSearch,
} from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { PiUsersThreeBold, PiMoneyBold } from "react-icons/pi";
import { BiLogOut } from "react-icons/bi";
import { AiOutlineMenuFold, AiOutlineClose } from "react-icons/ai";
import { RiCheckboxBlankCircleFill } from "react-icons/ri";
import { BsGraphUp } from "react-icons/bs";
import imgSvg from "../assets/job-search.png";
import logo from "../assets/Blanco-transparente-Logo.png";

import ProfileUser from "../components/ProfileUser";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import Sales from "../components/Sales";
import ChartComponent from "../components/ChartComponent";
import CLients from "../components/CLients";
import MainDashboard from "../components/mainDashboard";

export default function Dashboard() {
  const [sidebar, setSidebar] = useState(false);
  const handleSidebar = () => {
    setSidebar(!sidebar);
  };

  return (
    <div className="min-h-screen grid grid-col-1 lg:grid-cols-6">
      <div
        style={{ background: "#C2A3D1" }}
        className={`fixed lg:static w-[80%] md:w-[40%]  lg:w-full top-0 z-50 transition-all ${
          sidebar ? "-left-0" : "-left-full"
        } -left-full w-full h-full  col-span-1 p-8 border-r`}
      >
        <div className="text-center py-4 pl-12">
          <a href="">
            <img
              src={logo}
              alt=""
              className=" h-[50px] w-[50px]uppercase font-bold tracking-[2px]"
            />
          </a>
        </div>
        <div className=" flex flex-col justify-between h-[800px]">
          <nav>
            <ul>
              <li>
                <Link
                  to="/services"
                  className="flex items-center gap-4 hover:bg-purple-400  text-gray-200 p-4 hover:text-white rounded-lg transition-colors font-semibold"
                >
                  <MdDashboard />
                  Dashboard
                </Link>
              </li>

              <li>
                <Link
                  to="profile"
                  className="flex items-center gap-4 hover:bg-purple-400  text-gray-200 p-4 hover:text-white rounded-lg transition-colors font-semibold"
                >
                  <CgProfile />
                  Perfil
                </Link>
              </li>
              <li>
                <Link
                  to="/chart"
                  className="flex items-center gap-4 hover:bg-purple-400  text-gray-200 p-4 hover:text-white rounded-lg transition-colors font-semibold"
                >
                  <BsGraphUp />
                  Grafica
                </Link>
              </li>
              <li>
                <Link
                  to="/sales"
                  className="flex items-center gap-4 hover:bg-purple-400  text-gray-200 p-4 hover:text-white rounded-lg transition-colors font-semibold"
                >
                  <PiMoneyBold />
                  Ventas
                </Link>
              </li>
              <li>
                <Link
                  to="/clients"
                  className="flex items-center gap-4 hover:bg-purple-400  text-gray-200 p-4 hover:text-white rounded-lg transition-colors font-semibold"
                >
                  <PiUsersThreeBold />
                  Clientes
                </Link>
              </li>
            </ul>
          </nav>
          <div className="flex flex-col gap-4">
            <img src={imgSvg} alt="Image" />
            <div className="bg-purple-300 p-8 flex flex-col gap-4 rounded-3xl">
              <h3 className="text-xl  text-center">Get update</h3>
              <p className="text-gray-200 text-center">
                Lorem ipsum dolor sit amet consectetur.
              </p>
              <button className="bg-purple-600 text-white p-2 rounded-lg">
                Learn more
              </button>
            </div>
            <a
              href="#"
              className="flex items-center gap-4 hover:bg-purple-400  text-gray-200 p-4 hover:text-white rounded-lg transition-colors font-semibold"
            >
              <BiLogOut />
              Logout
            </a>
          </div>
        </div>
      </div>

      <button
        onClick={handleSidebar}
        className="block lg:hidden fixed bottom-4 right-4 bg-purple-600 p-2 text-white rounded-full text-2xl z-40"
      >
        {sidebar ? <AiOutlineClose /> : <AiOutlineMenuFold />}
      </button>
      <div className="col-span-5">
        <header className="flex flex-col md:flex-row gap-4 items-center justify-between bg-gray700 p-4 lg:pl-12 w-full">
          <form className="w-full lg:w-[30%] order-1 md:w-[40%] md:-order-none">
            <div className="relative">
              <MdOutlineManageSearch className="absolute left-2 top-3" />
              <input
                type="text"
                className="w-full py-2 pl-8 pr-4 bg-gray-100 outline-none rounded-lg"
                placeholder="Buscar"
              />
            </div>
          </form>
          <nav className="w-full md:w-[60%] lg:w-[70%] flex justify-center md:justify-end">
            <ul className="flex items-center gap-4">
              <li>
                <a href="#" className="relative">
                  <MdOutlineNotificationsActive className="text-xl" />
                  <RiCheckboxBlankCircleFill className="absolute -right-1 -top-1 text-[12px] text-red-500" />
                </a>
              </li>
              <li>
                <a className="flex items-center gap-1" href="#">
                  Alvaro Lopez <MdKeyboardArrowDown />
                </a>
              </li>
            </ul>
          </nav>
        </header>
        <div className="p-4 lg:p-12 bg-gray-100">
          <Routes>
            <Route path="/services" element={<MainDashboard />} />
            <Route path="/profile" element={<ProfileUser />} />
            <Route path="/chart" element={<ChartComponent />} />
            <Route path="/sales" element={<Sales />} />
            <Route path="/clients" element={<CLients />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
