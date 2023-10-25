import React from "react";


const ServiceCards = () => {
    return(
        <div
            className="group relative items-center justify-center overflow-hidden cursor-pointer hover:shadow-xl hover:shadow-black/30 transition-shadow w-[352px] h-[480px] lg:w-96"
        >
            <div
                className="w-[352px] h-[480px] lg:w-96"
            >
                <img
                    className="h-full w-full object-cover  group-hover:scale-105 transition-transform duration-500"
                    src="https://mandomedio.com/wp-content/uploads/2020/07/CV-2-1024x683.jpg"
                    alt="cv"
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
                        className="text-2xl font-bold text-red text-white"
                    >
                        Capacitacion para entrevistas
                    </h1>
                    <p
                        className="text-lg italic text-white mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                        Te ayudamos a que puedas desarrollar todo tu potencial a la hora de desempeñarte en una entrevista laboral.

Presentación personal
Preguntas frecuentes de reclutadores
Pensamiento analítico
Qué no decir en una entrevista
Qué preguntar cómo candidato


Modalidad:
Reunión virtual de aproximadamente 1 hora de duración con uno de nuestros expertos en selección de personal.

                    </p>
                    <button
                        onClick={()=>{alert('Hello')}}
                        className="rounded-full shadow shadow-black/60 bg-neutral-900 py-2 px-3.5 text-sm capitalize text-white"
                    >
                        Buy now
                    </button>
                </div>

            </div>
        </div>
    )
}

export default ServiceCards;