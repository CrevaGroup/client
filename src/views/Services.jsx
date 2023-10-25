import React from "react";
import ServiceCards from "../components/ServiceCards";

const Services = () => {
    return(
        <div
            className="bg-custom-gray h-full pt-4 lg:pt-8"
        >
            <div
                className=" flex items-center justify-center text-dark-gray-blue cursor-default"
            >
                <p
                    className="text-2xl  lg:text-3xl"
                >Nuestros servicios</p>

            </div>

            <div
                className="flex min-h-screen items-center justify-center  my-8"
            >

                <div
                className="grid grid-cols-1 lg:grid-cols-2 gap-y-10  gap-x-64 min-w-screen my-8 justify-center items-center "
            >
                <ServiceCards/>
                <ServiceCards/>
                <ServiceCards/>
                <ServiceCards/>

            </div>
            </div>

        </div>
    )
}


export default Services;