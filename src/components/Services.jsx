import { useNavigate } from "react-router-dom";

import { Button } from "@material-tailwind/react";

import Servicios from "../assets/Social-strategy-amico.png";

function Services() {
  const navigate = useNavigate();

  function navigateServices() {
    navigate("/Services");
  }

  return (
    <div className="mt-40 flex items-center justify-center">
      <div className="bg-white p-4 rounded">
        <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between mt-5 mx-10 bg-white p-4 rounded overflow-visible">
          <div>
            <h1 className="text-4xl mb-2 lg:mb-0">Empieza con</h1>
            <h1 className="text-4xl mb-2 lg:mb-0">CreVa Group hoy</h1>
            <h3 className="text-xl mb-4 lg:mb-0">Empieza a optimizar tu búsqueda laboral hoy.</h3>
            <Button onClick={navigateServices} className="mt-5 bg-dark-violet py-2 px-4">Nuestros Servicios</Button>
          </div>
          <div className="flex items-center">
            <img src={Servicios} alt="Nuestros Servicios" className="w-80" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
