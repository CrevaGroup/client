import { NavLink } from "react-router-dom";

import LogoBlanco from "../assets/Blanco-transparente-Logo.png"

function Footer(){
    return(
        <footer className="bg-custom-gray text-black py-6">
      <div className="container mx-auto text-center">
        <hr className="border-gray-400 mb-4" />
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <img src={LogoBlanco} alt="Logo Footer" className="w-1/2  mx-auto"/>
            <p className="mt-5">&copy; 2023 CreVa Group</p>
                <p>Todos los derechos reservados.</p>
          </div>
          <div className="text-center">
          <div className="mb-2">
            <NavLink to="/">Inicio</NavLink>
          </div>
            <div className="mb-2">
            <NavLink to="/Services">Nuestros Servicio</NavLink>
            </div>
            <div className="mb-2">
            <NavLink to="/Team">Equipo</NavLink>
            </div>
            <div className="mb-2">
            <NavLink to="/Blog">Blog</NavLink>
            </div>
            <div className="mb-2">
            <NavLink to="/Comunidad">Comunidad Creva</NavLink>
            </div>
            <div className="mb-2">
            <NavLink to="/Contacto">Contacto</NavLink>
            </div>
            <div className="mb-2"></div>
          </div>
          <div>
            <div className="mb-2">
            <NavLink to="https://www.instagram.com/creva.group/">Instagram</NavLink>
            </div>
            <div className="mb-2">
            <NavLink to="https://www.linkedin.com/company/creva-group/">Linkedin</NavLink>
            </div>
          </div>
        </div>
        
      </div>
    </footer>
    )
}

export default Footer;