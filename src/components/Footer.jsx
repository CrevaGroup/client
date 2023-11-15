import { NavLink } from "react-router-dom";

import Logo from "../assets/logo.png";
import Linkedin from "../assets/UilLinkedin.svg";
import Instagram from "../assets/PhInstagramLogo.svg";
import WhatsApp from "../assets/MdiWhatsapp.svg";
import Gmail from "../assets/BxBxlGmail.svg";

function Footer() {
  return (
    <footer className="bg-custom-gray dark:bg-[#C3A3D0] text-black dark:text-white py-6">
      <div className="container mx-auto text-center">
        <hr className="border-gray-400 mb-4" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="mx-auto text-left mt-5">
            <div className="mb-2">
              <NavLink to="/">Inicio</NavLink>
            </div>
            <div className="mb-2">
              <NavLink to="/services">Nuestros Servicio</NavLink>
            </div>
            <div className="mb-2">
              <NavLink to="/blog">Blog</NavLink>
            </div>
            <div className="mb-2">
              <NavLink to="/community">Comunidad Creva</NavLink>
            </div>
            <div className="mb-2">
              <NavLink to="/team">Equipo de Desarrollo</NavLink>
            </div>
          </div>
          <div>
            <img
              src={Logo}
              alt="Logo Footer"
              className="w-1/2  mx-auto"
              style={{ width: `90px` }}
            />
            <p className="mt-5">&copy; 2023 CreVa Group</p>
            <p>Todos los derechos reservados.</p>
          </div>
        </div>
        <div className="flex justify-center mt-2">
          <div className="mx-4">
            <a href="https://www.instagram.com/creva.group/" target="_blank">
              <img
                src={Instagram}
                alt="Instagram"
                className=""
                style={{ width: `40px` }}
              />
            </a>
          </div>
          <div className="mx-4">
            <a
              href="https://www.linkedin.com/company/creva-group/"
              target="_blank"
            >
              <img
                src={Linkedin}
                alt="Linkedin Logo"
                style={{ width: `40px` }}
              />
            </a>
          </div>
          <div className="mx-4">
            <a href={`mailto:crevagroup.global@gmail.com`} target="_blank">
              <img
                src={Gmail}
                alt="Gmail"
                className=""
                style={{ width: `40px` }}
              />
            </a>
          </div>
          <div className="mx-4">
            <a
              href="https://api.whatsapp.com/send?phone=5491167867530&text=%C2%A1Hola%21+Quiero+conocer+m%C3%A1s+sobre+los+servicios+de+CreVa+Group."
              target="_blank"
            >
              <img
                src={WhatsApp}
                alt="WhatsApp"
                className=""
                style={{ width: `40px` }}
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
