import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Fondo from "../assets/FondoCarrusel.png";

function Carrusel() {
  const config = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 8000,
  };

  return (
    <div className="max-w-2xl lg:m-auto mr-2 overflow-hidden">
      <Slider {...config}>
        <div className="relative">
          <img
            src={Fondo}
            className="block w-full h-96 object-cover rounded-3xl"
            alt="Fondo 1"
          />
          <span className="absolute p-8 inset-0 flex items-center justify-center text-2xl font-semibold text-black sm:text-3xl dark:text-gray-800">
            Muchos profesionales se enfrentan a un desafío común: no cuentan con
            las herramientas necesarias para buscar trabajo de manera efectiva.
          </span>
        </div>
        <div className="relative">
          <img
            src={Fondo}
            className="block w-full h-96 object-cover rounded-3xl"
            alt="Fondo 2"
          />
          <span className="absolute p-8 inset-0 flex items-center justify-center text-2xl font-semibold text-black sm:text-3xl dark:text-gray-800">
            ¿Cómo redactar un currículum que destaque? ¿Cómo generar el impacto
            deseado en una entrevista? ¿Cómo conseguir que las empresas te
            encuentren en LinkedIn?
          </span>
        </div>
        <div className="relative">
          <img
            src={Fondo}
            className="block w-full h-96 object-cover rounded-3xl"
            alt="Fondo 3"
          />
          <span className="absolute p-8 inset-0 flex items-center justify-center text-2xl font-semibold text-black sm:text-3xl dark:text-gray-800">
            En Creva estamos para brindar esas respuestas e impulsar a la gente
            a alcanzar su máximo potencial
          </span>
        </div>
      </Slider>
    </div>
  );
}

export default Carrusel;
