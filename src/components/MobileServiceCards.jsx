import { Collapse } from "@material-tailwind/react";
import React, { useState } from "react";
import example from '../assets/example.png'
const MobileServiceCards = () => {
    const [open,setOpen] = useState(false);

    const cardHandler = () => {
        setOpen(curr => !curr);
    }

    return(
        <div
            className={`lg:hidden   overflow-hidden   rounded-3xl transition-all duration-300`}
        >
 
            <div
            >
                    <div
                        className={`flex flex-col  items-center justify-center text-center  bg-gradient-to-b from-dark-violet to-black `}
                    >
                        
                        <h1
                        className="flex text-2xl font-bold text-custom-violet lg:hidden h-16  text-center items-center"

                    >
                        Capacitacion para entrevistas
                    </h1>
                    <button
                        className=" bg-dark-violet p-2 rounded-full font-semibold  my-2 w-[104px] text-light-gray "
                        onClick={()=>cardHandler()}
                    >{open ? 'Ver menos' : 'Ver mas'}</button>
                    </div>
                <Collapse
                    open={open}
                >
                    <div>
                       <div
            className={`block group relative items-center justify-center overflow-hidden cursor-default  w-[352px] h-[576px]  rounded-br-3xl rounded-bl-3xl lg:hidden transition-all duration-300`}
        >
                            <img
                    className="h-full w-full object-cover "
                    src={example}
                    alt="ex"
                >
                </img>
            <div
                className="w-[352px] h-[576px] "
            >

                <div
                    className="absolute inset-0 bg-black bg-opacity-80"
                >
                </div>
                <div
                    className="absolute inset-0 flex flex-col items-center justify-center px-9 text-center "
                >

                    <div
                        className="text-lg italic text-light-gray mb-3  text-start "
                    >
                        <p
                            className="my-2 text-center text-xl"
                        >
                                Te ayudamos a que puedas desarrollar todo tu potencial a la hora de desempeñarte en una entrevista laboral.

                        </p>
                        <ul
                            className="my-2 ml-8 "
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
                            className="my-2 text-xl text-white"
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
                    </div>
                </Collapse>
            
            </div>
        </div>
    )
}

export default MobileServiceCards;
