import { NavLink } from "react-router-dom";
import Footer from "../components/Footer";

import Contacto from "../assets/Contact-us-amico.png";
import Instagram from "../assets/SkillIconsInstagram.svg";
import WhatsApp from "../assets/LogosWhatsappIcon.svg";
import Gmail from "../assets/LogosGoogleGmail.png";

function Contact() {
  return (
    <div className="bg-custom-gray">
      <h1 className="text-5xl flex justify-center">Contactanos</h1>
      <div className="flex flex-col lg:flex-row items-center justify-center">
        <div className="w-1/2 lg:w-97 mb-5 lg:mb-0 mr-20">
          <img src={Contacto} alt="Contactanos" className="w-97" />
        </div>
        <div className="w-1/2 lg:w-auto">
          <h2 className="text-3xl flex justify-center mb-5">
            Ponte en contacto con nosotros
          </h2>
          <div className="flex flex-col items-center justify-center text-center">
            <h4 className="mb-5 text-xl">Envianos un email</h4>
            <NavLink to={`mailto:crevagroup.global@gmail.com`}>
              <img src={Gmail} alt="Gmail" className="w-40 mb-5" />
            </NavLink>
            <h4 className="mb-5 text-xl">Siguenos en nuestras redes</h4>
            <NavLink
              to="https://www.instagram.com/creva.group/"
              target="_blank"
            >
              <img src={Instagram} alt="Instagram" className="w-40 mb-5" />
            </NavLink>
            <h4 className="mb-5 text-xl">
              Mandanos un mensaje para un contacto directo
            </h4>
            <NavLink to="https://api.whatsapp.com/send?phone=5491167867530&text=%C2%A1Hola%21+Quiero+conocer+m%C3%A1s+sobre+los+servicios+de+CreVa+Group.">
              <img src={WhatsApp} alt="WhatsApp" className="w-40 mb-10" />
            </NavLink>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
