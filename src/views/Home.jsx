import React from "react";
import test from '../assets/test.png'
const Home = () => {
    return(
        <div className="bg-custom-gray h-screen  py-4 lg">
            <div
                className="lg:flex lg:justify-center items-center "
            >

                <div
                className="border border-violet-800 rounded-3xl    cursor-default mx-4 lg:w-1/2 h-min"
            >
                <p
                    className="mx-8 my-4 text-justify text-dark-gray-blue"
                ><span
                    className="font-bold font-georgia text-2xl"
                >Creva </span>
                <span
                    className="text-xl"
                >
                    significa “Crear Valor” el que muchas veces está ahí pero no sabemos cómo demostrarlo.
                </span>
                <br/>
                <span
                    className="text-xl"
                >
                     Potenciamos a las personas en su búsqueda de crecimiento profesional desde cualquier parte del mundo y de diversas culturas.
                </span>
                </p>
                </div>
                <img src={test}/>
            </div>
            
        </div>
    )
}

export default Home;