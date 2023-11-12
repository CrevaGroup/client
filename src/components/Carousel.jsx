import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Fondo from "../assets/FondoCarrusel.png"

function Carrusel() {
    const config = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <div className="max-w-2xl m-auto">
            <Slider {...config}>
                <div className="relative">
                    <img src={Fondo} className="block w-full h-96 object-cover" alt="Fondo 1" />
                    <span className="absolute p-8 inset-0 flex items-center justify-center text-2xl font-semibold text-white sm:text-3xl dark:text-gray-800">
                        Muchos profesionales se enfrentan a un desafío común: no cuentan con las herramientas necesarias para buscar trabajo de manera efectiva.
                    </span>
                </div>
                <div className="relative">
                    <img src={Fondo} className="block w-full h-96 object-cover" alt="Fondo 2" />
                    <span className="absolute p-8 inset-0 flex items-center justify-center text-2xl font-semibold text-white sm:text-3xl dark:text-gray-800">
                        ¿Cómo redactar un currículum que destaque? ¿Cómo generar el impacto deseado en una entrevista? ¿Cómo conseguir que las empresas te encuentren en LinkedIn?
                    </span>
                </div>
                <div className="relative">
                    <img src={Fondo} className="block w-full h-96 object-cover" alt="Fondo 3" />
                    <span className="absolute p-8 inset-0 flex items-center justify-center text-2xl font-semibold text-white sm:text-3xl dark:text-gray-800">
                        En Creva estamos para brindar esas respuestas e impulsar a la gente a alcanzar su máximo potencial
                    </span>
                </div>
            </Slider>
        </div>
    )
}

// <div className="h-56 sm:h-64 xl:h-80 2xl:h-96" style={{ width: `654px` }}>
//     <Carousel>
//         <div className="flex items-center justify-center bg-purple-200" style={{ width: `654px`, height: `250px` }}>
//             <p className="p-6">Muchos profesionales se enfrentan a un desafío común:
//                 no cuentan con las herramientas necesarias para buscar trabajo de manera efectiva.</p>
//         </div>
//         <div className="flex items-center justify-center bg-purple-200" style={{ width: `654px`, height: `250px` }}>
//             <p className="p-6">
//                 ¿Cómo redactar un currículum que destaque?¿Cómo generar el impacto deseado en una entrevista? ¿Cómo conseguir que las empresas te encuentren en LinkedIn?</p>
//         </div>
//         <div className="flex items-center justify-center bg-purple-200" style={{ width: `654px`, height: `250px` }}>
//             <p className="p-6">
//                 En Creva estamos para brindar esas respuestas e impulsar a la gente a alcanzar su máximo potencial
//             </p>
//         </div>
//     </Carousel>
// </div>

export default Carrusel;