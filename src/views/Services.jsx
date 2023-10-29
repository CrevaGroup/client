import React, { useState } from "react";
import Footer from "../components/Footer";
import AllServiceCards from "../components/AllServiceCards";
import cv from "../assets/cv.png";
import interview from "../assets/interview.png";
import job from "../assets/job-search.png";
import profile from "../assets/linkedin-profile.png";
import Filters from "../components/Filters";
import EditDocument from "../assets/EditDocument.svg";
import NewServices from "../components/NewServices";

const Services = () => {
    const [create, setCreate] = useState(false)

  function disableHandler(){
    setCreate(create?false : true)
  }

  return (
      <div className="bg-custom-gray h-full pt-4 lg:pt-8">
      <div className="flex flex-col items-center justify-center text-dark-gray-blue cursor-default">
        <div className="flex items-center mb-2">
          <p className="text-2xl lg:text-3xl font-bold mr-2">
            Nuestros servicios
          </p>
          <button onClick={disableHandler}>
            <img
              src={EditDocument}
              alt="EditDocument"
              style={{ width: `30px` }}
              />
          </button>
        </div>
        <p className="text-xl">Potenciá tu carrera</p>
      </div>
              {create && <NewServices />}

      <div>
        <Filters />
      </div>

      <div className="flex lg:min-h-screen items-center justify-center  lg:my-8 ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-10  gap-x-64 min-w-screen my-8 justify-center items-center">
          <AllServiceCards img={cv} />
          <AllServiceCards img={profile} />
          <AllServiceCards img={job} />
          <AllServiceCards img={interview} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Services;
