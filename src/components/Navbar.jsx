import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import logo from '../assets/logo.png'
import home from '../assets/home.svg'
import burguer from '../assets/burguer.svg'
import contact from '../assets/contact.svg'
import close from '../assets/close.svg'
import service from '../assets/service.svg'
import team from '../assets/team.svg'
import community from '../assets/community.svg'
import blog from '../assets/blog.svg'


const Navbar = () => {
    const [navHandler, setNavHandler] = useState(true);
    const toogleNav = () => {
        setNavHandler(!navHandler);
    }
    
    const additionalClass = navHandler ? "absolute opacity-0 hidden " : "";
    const burguerHandler = navHandler ? burguer : close; 

    return(
        <div className="  p-5  bg-custom-gray lg:flex  lg:items-center lg:justify-between ">
            <div
                className="flex justify-between items-center"
            >
                <span
                    className="text-2xl flex"
                >
                    <NavLink
                        to={'/'}
                    >
                        <img
                        className="h-10 inline mr-4 cursor-pointer"
                        src={logo}
                    />
                    </NavLink>
                        <p
                            className="  text-3xl font-georgia font-bold cursor-default"
                        >Creva</p>
                    
                </span>
                <span
                className="w-12 h-10 ml-auto cursor-pointer lg:hidden mx-2 block"
            >
                <img 
                onClick={toogleNav}
               src={burguerHandler}/>
            
            </span>
            </div>
            
            <ul className={`lg:flex lg:items-center lg:ml-auto z-[-1] lg:z-auto lg:static w-full left:0 lg:w-auto lg:py-0 py-4 lg:pl-0 pl-7 lg:opacity-100  ${additionalClass}`}>
                <li className={`mx-4 flex items-center h-8 my-4`}>


                    <img className= 'h-6 mr-4 lg:hidden'src={home}/>
                    <NavLink
                        to={'/'}
                    >
                        
                        <p  
                            onClick={toogleNav}
                            className={`text-xl hover:text-violet-500 duration-500 lg:cursor-pointer my-6 lg:my-0 `}>
                        Inicio
                    </p>
                    </NavLink>
                </li>
            
                <li className="mx-4 flex items-center h-8  my-4">
                    
                    <img className= 'h-6 mr-4 lg:hidden'src={service}/>
                    <NavLink
                        to={'/services'}
                        
                    >
                        <p  
                            onClick={toogleNav}
                            className="text-xl hover:text-violet-500 duration-500 lg:cursor-pointer my-6 lg:my-0 ">
                        Nuestros Servicios
                        </p>
                    </NavLink>

                </li>

                    
                <li className="mx-4 flex items-center  h-8 my-4">
                    <img className= 'h-6 mr-4 lg:hidden'src={team}/>
                    <NavLink
                        to={'/team'}
                    >
                        <p  
                            onClick={toogleNav}
                            className="text-xl hover:text-violet-500 duration-500 lg:cursor-pointer my-6 lg:my-0 ">
                        Equipo
                    </p>
                    </NavLink>
                </li>
                    
                <li className="mx-4 flex items-center  h-8 my-4">
                    <img className= 'h-6 mr-4 lg:hidden'src={blog}/>
                    <NavLink
                        to={'/blog'}
                    >
                        <p  
                            onClick={toogleNav}
                            className="text-xl hover:text-violet-500 duration-500 lg:cursor-pointer my-6 lg:my-0 ">
                        Blog
                    </p>
                    </NavLink>
                </li>
            
                <li className="mx-4 flex items-center h-8 my-4">
                    <img className= 'h-6 mr-4 lg:hidden' src={contact}/>
                    <NavLink
                        to={'/contact'}
                    >
                        <p  
                            onClick={toogleNav}
                            className="text-xl hover:text-violet-500 duration-500 lg:cursor-pointer my-6 lg:my-0 ">
                        Contacto
                    </p>
                    </NavLink>
                </li>
                <li className="mx-4 flex items-center h-8 my-4">
                    <img className= 'h-6 mr-4 lg:hidden' src={community}/>

                    <p
                        className="text-xl hover:text-violet-500 duration-500 cursor-pointer my-6 lg:my-0 "
                    >Comunidad Creva</p>
                </li>
            
                <li
                    className="mx-4 text-center lg:text-start"
                >
                    <NavLink
                        to={'/login'}
                    >
                        <p  
                            onClick={toogleNav}
                            className="text-xl hover:text-violet-500 duration-500 lg:cursor-pointer my-6 lg:my-0  border-2 border-violet-900 rounded-xl lg:border-none lg:rounded-none">
                        Iniciar Sesion
                    </p>
                    </NavLink>
                </li>
            
                <li className="mx-3 text-center lg:text-start">
                    <NavLink
                        to={'/register'}
                    >
                        <p  
                            onClick={toogleNav}
                            className="text-xl hover:text-black duration-500 lg:cursor-pointer my-6 lg:my-0  bg-dark-violet p-2  mx-1 rounded-xl font-bold text-white">
                        Registrarse
                    </p>
                    </NavLink>
                </li>
            
            </ul>
                        
        </div>
    )
}

export default Navbar;