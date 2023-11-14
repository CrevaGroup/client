import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../Redux/Actions/actions";
import { CgProfile } from "react-icons/cg";
import { PiUsersThreeBold, PiMoneyBold } from "react-icons/pi";
import { BiLogOut, BiLogOutCircle } from "react-icons/bi";
import { AiOutlineMenuFold, AiOutlineClose } from "react-icons/ai";
import { RiCheckboxBlankCircleFill } from "react-icons/ri";
import { BsGraphUp } from "react-icons/bs";
import { GrConfigure } from "react-icons/gr";
import imgSvg from "../assets/job-search.png";
import logo from "../assets/Blanco-transparente-Logo.png";
import Sales from "../components/Sales.jsx";
import ChartComponent from "../components/ChartComponent.jsx";
import CLients from "../components/CLients.jsx";
import MainDashboard from "../components/MainDashboard.jsx";
import ProfileUser from "../components/ProfileUser.jsx";
import { BrowserRouter as Router, Link, Route, Routes, useNavigate, NavLink } from "react-router-dom";
import {
  MdDashboard,
  MdKeyboardArrowDown,
  MdOutlineManageSearch,
  MdOutlineHelpOutline,
} from "react-icons/md";

export default function Dashboard() {

  const navigate = useNavigate()

  const [sidebar, setSidebar] = useState(false);
  const handleSidebar = () => {
    setSidebar(!sidebar);
  };
  const dispatch = useDispatch();
  
  const logoutHandler = () => {
    navigate('/')
    dispatch(logout());
  };

  const user = useSelector(state => state.user)

  useEffect(()=>{
    if(Object.keys(user).length){
      if(!user.admin) navigate('/')
    }
  },[user])

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className=" min-h-screen grid  grid-col-1 lg:grid-cols-6 ">
      <div
        style={{
          background: "#C2A3D1",
        }}
        className={`fixed lg:static w-[80%] md:w-[40%] lg:w-full top-0 z-50 bg-white transition-all ${
          sidebar ? "left-0" : "-left-full"
        } h-full overflow-y-scroll col-span-1 p-8 border-r`}
      >
        <div className="  text-center py-4 pl-12">
          <a href="">
            <img
              src={logo}
              alt=""
              className="h-[50px] w-[50px]uppercase font-bold tracking-[2px]"
            />
          </a>
        </div>
        <div className=" flex flex-col justify-between h-[800px]">
          <nav>
            <ul>
              <li>
                <Link
                  to="newservices"
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
              {/* <li>
                <Link
                  to="chart"
                  className="flex items-center gap-4 hover:bg-purple-400  text-gray-200 p-4 hover:text-white rounded-lg transition-colors font-semibold"
                >
                  <BsGraphUp />
                  Grafica
                </Link>
              </li> */}
              <li>
                <Link
                  to="sales"
                  className="flex items-center gap-4 hover:bg-purple-400  text-gray-200 p-4 hover:text-white rounded-lg transition-colors font-semibold"
                >
                  <PiMoneyBold />
                  Ventas
                </Link>
              </li>
              <li>
                <Link
                  to="clients"
                  className="flex items-center gap-4 hover:bg-purple-400  text-gray-200 p-4 hover:text-white rounded-lg transition-colors font-semibold"
                >
                  <PiUsersThreeBold />
                  Clientes
                </Link>
              </li>
            </ul>
          </nav>
          <div className="flex flex-col gap-4 justify-between h-full">
            <img src={imgSvg} alt="Image" />
            <button
              onClick={logoutHandler}
              className="flex items-center gap-4 hover:bg-purple-400  text-gray-200 p-4 hover:text-white rounded-lg transition-colors font-semibold"
            >
              <BiLogOut />
              Cerrar Sesión
            </button>
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
            {/* <div className="relative">
              <MdOutlineManageSearch className="absolute left-2 top-3" />
              <input
                type="text"
                className="w-full py-2 pl-8 pr-4 bg-gray-100 outline-none rounded-lg"
                placeholder="Buscar"
              />
            </div> */}
          </form>

          <nav className="w-full md:w-[60%] lg:w-[70%] flex justify-center md:justify-end">
            <ul className="flex items-center gap-4">
              <li><NavLink to={'/'}>Cerrar</NavLink></li>
              <li className="relative">
                {/* Agrega el menú desplegable aquí */}
                <div
                  className={`${
                    dropdownOpen ? "block" : "hidden"
                  } absolute p-2  mt-7 right-0 w-[150px] bg-white border rounded-lg shadow-lg`}
                >
                  <ul className="py-2  ">
                    <li>
                      <a
                        href="#"
                        className="p-1 flex justify-between hover:bg-purple-400 transition-colors rounded-lg items-center"
                      >
                        Configuración <GrConfigure />
                      </a>
                    </li>
                    <li>
                      <a
                        onClick={logoutHandler}
                        href="#"
                        className="p-1 flex justify-between hover:bg-purple-400 transition-colors rounded-lg items-center"
                      >
                        Cerrar Sesión <BiLogOutCircle />
                      </a>
                    </li>
                  </ul>
                </div>
                {/* Fin del menú desplegable */}
                <a
                  className="flex items-center gap-1 cursor-pointer"
                  onClick={toggleDropdown}
                >
                  {user.fullName} <MdKeyboardArrowDown />
                </a>
              </li>
            </ul>
          </nav>
        </header>
        <div className="p-4 lg:p-12 bg-gray-100">
          <Routes>
            <Route path="/newservices" element={<MainDashboard />} />
            <Route path="/profile" element={<ProfileUser />} />
            {/* <Route path="/chart" element={<ChartComponent />} /> */}
            <Route path="/sales" element={<Sales />} />
            <Route path="/clients" element={<CLients />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
