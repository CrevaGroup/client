import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import home from "../assets/home.svg";
import burguer from "../assets/burguer.svg";
import close from "../assets/close.svg";
import service from "../assets/service.svg";
import community from "../assets/community.svg";
import blog from "../assets/blog.svg";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../Redux/Actions/actions";

const Navbar = () => {
  const [navHandler, setNavHandler] = useState(true);
  const toogleNav = () => {
    setNavHandler(!navHandler);
  };
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();

  const additionalClass = navHandler ? "absolute opacity-0 hidden " : "";
  const burguerHandler = navHandler ? burguer : close;
  const logoutHandler = () => {
    dispatch(logout())
  }

  return (
    <div className="p-3 lg:flex  lg:items-center lg:justify-between" style={{backgroundColor: `#C3A3D0`}}>
      <div className="flex justify-between items-center">
        <span className="text-2xl flex">
          <NavLink to={"/"}>
            <img className="h-10 inline mr-4 cursor-pointer" src={logo} />
          </NavLink>
          <p className="  text-3xl font-georgia font-bold cursor-default">
            Creva
          </p>
        </span>
        <span className="w-12 h-10 ml-auto cursor-pointer lg:hidden mx-2 block">
          <img onClick={toogleNav} src={burguerHandler} />
        </span>
      </div>

      <ul
        className={`lg:flex lg:items-center  z-[-1] lg:z-auto lg:static w-full left:0 lg:w-auto lg:py-0 py-4 lg:pl-0 pl-7 lg:opacity-100  ${additionalClass}`}
      >
        <li className={`mx-4 flex items-center h-8 my-4`}>
          <img className="h-6 mr-4 lg:hidden" src={home} />
          <NavLink to={"/"}>
            <p
              onClick={toogleNav}
              className={`text-lg hover:text-violet-500 duration-500 lg:cursor-pointer my-6 lg:my-0 `}
            >
              Inicio
            </p>
          </NavLink>
        </li>

        <li className="mx-4 flex items-center h-8  my-4">
          <img className="h-6 mr-4 lg:hidden" src={service} />
          <NavLink to={"/services"}>
            <p
              onClick={toogleNav}
              className="text-lg hover:text-violet-500 duration-500 lg:cursor-pointer my-6 lg:my-0 "
            >
              Servicios
            </p>
          </NavLink>
        </li>

        <li className="mx-4 flex items-center  h-8 my-4">
          <img className="h-6 mr-4 lg:hidden" src={blog} />
          <NavLink to={"/blog"}>
            <p
              onClick={toogleNav}
              className="text-lg hover:text-violet-500 duration-500 lg:cursor-pointer my-6 lg:my-0 "
            >
              Blog
            </p>
          </NavLink>
        </li>

        <li className="mx-4 flex items-center h-8 my-4">
          <img className="h-6 mr-4 lg:hidden" src={community} />
          <NavLink to={"/community"}>
            <p
              onClick={toogleNav}
              className="text-lg hover:text-violet-500 duration-500 cursor-pointer my-6 lg:my-0 "
            >
              Comunidad Creva
            </p>
          </NavLink>
        </li>

        <li className="mx-4 text-center lg:text-start">
          {
            user?.fullName === undefined ? <NavLink to={"/login"}>
              <p
                onClick={toogleNav}
                className="text-lg h-10 hover:text-violet-500 duration-500 lg:cursor-pointer my-6 lg:my-0  border-2 border-violet-900 rounded-lg lg:border-none lg:rounded-none lg:h-fit flex items-center justify-center"
              >
                Iniciar Sesion
              </p>
            </NavLink> : <NavLink>
              <p
                onClick={toogleNav}
                className="text-lg h-10 hover:text-violet-500 duration-500 lg:cursor-pointer my-6 lg:my-0  border-2 border-violet-900 rounded-lg lg:border-none lg:rounded-none lg:h-fit flex items-center justify-center"
              >Mi Perfil</p></NavLink>
          }
        </li>

        <li className="mx-3 text-center lg:text-start">
          {
            user?.fullName === undefined ? <NavLink to={"/register"}>
              <p
                onClick={toogleNav}
                className="text-lg  hover:text-black duration-500 lg:cursor-pointer my-6 lg:my-0  bg-dark-violet p-2  mx-1 rounded-lg font-bold text-white"
              >
                Registrarse
              </p>
            </NavLink> :
              <p
                onClick={() => {
                  toogleNav();
                  logoutHandler();
                }}
                className="text-lg  hover:text-black duration-500 lg:cursor-pointer my-6 lg:my-0  bg-dark-violet p-2  mx-1 rounded-lg font-bold text-white"
              >
                Cerrar Sesion
              </p>

          }
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
