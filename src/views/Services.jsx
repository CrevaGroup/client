import React from "react";
import Footer from "../components/Footer";
import AllServiceCards from "../components/AllServiceCards";
import cv from '../assets/cv.png'
import interview from '../assets/interview.png'
import job from '../assets/job-search.png'
import profile from '../assets/linkedin-profile.png'

const Services = () => {
    return(
        <div
            className="bg-custom-gray h-full pt-4 lg:pt-8"
        >
            <div
                className=" flex flex-col items-center justify-center text-dark-gray-blue cursor-default"
            >
                <p
                    className="text-2xl  lg:text-3xl font-bold"
                >Nuestros servicios</p>

                <p
                    className="text-xl"
                >Potenciá tu carrera</p>
            </div>

            <div
                className="flex lg:min-h-screen items-center justify-center  lg:my-8 "
            >

                <div
                className="grid grid-cols-1 lg:grid-cols-2 gap-y-10  gap-x-64 min-w-screen my-8 justify-center items-center"
            >
                <AllServiceCards img={cv}/>
                <AllServiceCards img={profile}/>
                <AllServiceCards img={job}/>
                <AllServiceCards img={interview}/>

            </div>
            </div>
            <Footer/>
        </div>
    )
}


export default Services;