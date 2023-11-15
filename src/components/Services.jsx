import { useNavigate } from "react-router-dom";

import { Button } from "@material-tailwind/react";

import Servicios from "../assets/Social-strategy-amico.png";

function Services() {
  const navigate = useNavigate();

  function navigateServices() {
    navigate("/Services");
  }

  return (
    <div className="mt-20 mb-20 flex items-center justify-center dark:text-white">
      <div className="bg-white dark:bg-[#C3A3D0] p-4 rounded shadow-xl">
        <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between mt-5 mx-10 dark:bg-[#C3A3D0] p-4 rounded overflow-visible">
          <div>
            <h1 className="text-4xl mb-2 lg:mb-0">Comienza tu camino </h1>
            <h1 className="text-4xl mb-2 lg:mb-0">hacia tu</h1>
            <h1 className="text-4xl mb-2 lg:mb-0">máximo potencial</h1>
            <Button
              onClick={navigateServices}
              className="mt-5 bg-dark-violet py-2 px-4"
            >
              Nuestros Servicios
            </Button>
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
