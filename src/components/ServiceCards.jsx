import React from "react";
import example from '../assets/example.png'


const ServiceCards = () => {
    return(
        <div
            className="group relative items-center justify-center overflow-hidden cursor-default hover:shadow-xl hover:shadow-black/30 transition-shadow w-[352px] h-[448px] lg:w-[416px] lg:h-[544px] rounded-3xl"
        >
            <div
                className="w-[352px] h-[448px] lg:h-[544px] lg:w-[448px]"
            >
                <img
                    className="h-full w-full object-cover  group-hover:scale-105 transition-transform duration-500"
                    src={example}
                    alt="ex"
                >
                </img>
                <div
                    className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"
                >
                </div>
                <div
                    className="absolute inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[75%] group-hover:translate-y-0 transition-all duration-500"
                >
                    <h1
                        className="text-2xl font-bold text-custom-violet"
                    >
                        Capacitacion para entrevistas
                    </h1>
                    <div
                        className="text-lg italic text-light-gray mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-start "
                    >
                        <p
                            className="my-2 text-center text-xl"
                        >
                                Te ayudamos a que puedas desarrollar todo tu potencial a la hora de desempeñarte en una entrevista laboral.

                        </p>
                        <ul
                            className="my-2 ml-8 hidden lg:block"
                        >
                            <li>
                                Presentación personal
                            </li>
                            <li> 
                                Preguntas frecuentes de reclutadores
                            </li>
                            <li>
                                Pensamiento analítico
                            </li>
                            <li>
                                Qué no decir en una entrevista
                            </li>
                            <li>

                                Qué preguntar cómo candidato
                            </li>
                        </ul>
                        <p
                            className="my-2 text-xl"
                        >
                            Modalidad:                            
                        </p>
                                                <ul>
                            <li>
                                Reunión virtual de aproximadamente 1 hora de duración con uno de nuestros expertos en selección de personal.

                            </li>
                        </ul>
                        </div>


                        <div className=" w-2/3 flex items-center  ml-auto">
                            <button
                                onClick={() => { alert('Hello') }}
                                className="rounded-full shadow shadow-black/60 bg-dark-violet py-2 px-3.5  capitalize text-white  font-bold text-xl hover:text-semidark-gray duration-500"
                            >
                                Buy now
                            </button>
                            <div className=" ml-2">
                                <p className="text-white font-bold text-2xl ">$20</p>
                            </div>
                        </div>

                </div>

            </div>
        </div>
    )
}

export default ServiceCards;