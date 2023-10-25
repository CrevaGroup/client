import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    const [navHandler, setNavHandler] = useState(true);

    const toogleNav = () => {
        setNavHandler(!navHandler);
    }
    
    const additionalClass = navHandler ? "absolute opacity-0" : "";

    return(
        <div className="  p-5  bg-light-violet lg:flex  lg:items-center lg:justify-between">
            <div
                className="flex justify-between items-center"
            >
                <span
                    className="text-2xl flex"
                >
                    <img
                        className="h-10 inline mr-4"
                        src="data:image/png;base64,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"
                    />
                        <p
                            className="  text-3xl font-georgia font-bold"
                        >Creva</p>
                </span>
                <span
                className="w-12 h-10 ml-auto cursor-pointer lg:hidden mx-2 block"
            >
                <img 
                onClick={toogleNav}
               src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/2048px-Hamburger_icon.svg.png"/>
            
            </span>
            </div>
            
            <ul className={`lg:flex lg:items-center lg:ml-auto z-[-1] lg:z-auto lg:static w-full left:0 lg:w-auto lg:py-0 py-4 lg:pl-0 pl-7 lg:opacity-100  ${additionalClass}`}>
                <li className={`mx-4 `}>
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
            
                <li className="mx-4">
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

                    
                <li className="mx-4">
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
                    
                <li className="mx-4">
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
            
                <li className="mx-4">
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
            
                <li className="mx-4">
                    <NavLink
                        to={'/login'}
                    >
                        <p  
                            onClick={toogleNav}
                            className="text-xl hover:text-violet-500 duration-500 lg:cursor-pointer my-6 lg:my-0 ">
                        Iniciar Sesion
                    </p>
                    </NavLink>
                </li>
            
                <li className="mx-4">
                    <NavLink
                        to={'/register'}
                    >
                        <p  
                            onClick={toogleNav}
                            className="text-xl hover:text-violet-500 duration-500 lg:cursor-pointer my-6 lg:my-0  bg-dark-violet p-2  mx-1 rounded-xl font-bold text-white">
                        Registrarse
                    </p>
                    </NavLink>
                </li>
            
            </ul>
                        
        </div>
    )
}

export default Navbar;