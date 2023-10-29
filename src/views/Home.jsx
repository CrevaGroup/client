import React from "react";
import { useNavigate } from "react-router-dom";

import SearchBar from "../components/SearchBar";
import Services from "../components/Services";
import Footer from "../components/Footer";
import Consulting from "../assets/Online-consulting-amico.png";
import Blog from "../assets/Status-update-amico.png";
import TestimonialCard from "./TestimonialCard";
import { Button } from "@material-tailwind/react";

const Home = () => {
  const navigate = useNavigate();

  function navigateBlog() {
    navigate("/Blog");
  }

  return (
    <div className="bg-custom-gray">
      <div className="flex flex-col lg:flex-row">
        <div
          style={{ textAlign: "start", marginLeft: "-0px", margin: "20px" }}
          className="lg:w-1/2 lg:pr-10 mt-10 ml-10"
        >
          <h1 className="text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl">
            Visualizamos un futuro donde cada persona esté equipada con el
            conocimiento y las herramientas necesarias para alcanzar su máximo
            potencial.
          </h1>
          <h2 className="text-base lg:text-3xl lg:text-xl xl:text-2xl">
            Si buscas asistencia online para potenciar tu búsqueda de
            crecimiento laboral, ¡Bienvenid@, llegaste al lugar indicado!
          </h2>
          <SearchBar />
        </div>
        <div className="lg:w-1/3 mt-10 lg:mt-0 mx-auto lg:ml-62">
          <img
            src={Consulting}
            alt="Consulta"
            className="rounded-lg object-cover object-center mx-auto"
            style={{
              maxWidth: `100%`,
              marginTop: "0",
            }}
          />
        </div>
      </div>

      <div>
        <h1 className="text-2xl lg:text-3xl xl:text-4xl 2xl:text-4xl mt-5 text-center lg:p-4 p-16">
          Nuestro Blog
        </h1>
        <div
          style={{ height: "500px" }}
          className="mt-5 flex items-center justify-center"
        >
          <div
            style={{ height: "400px" }}
            className="bg-white p-4 rounded shadow-xl w-full max-w-md lg:max-w-3xl xl:max-w-3xl 2xl:max-w-4xl mx-4 lg:mx-10 xl:mx-20 2xl:mx-40"
          >
            <div
              style={{
                alignItems: "center",
                marginTop: "-50px",
              }}
              className="flex flex-col lg:flex-row items-center justify-center lg:justify-between mt-5"
            >
              <div
                className="lg:w-1/2 flex items-center mb-4 lg:mb-0"
                style={{ marginTop: "-30px" }}
              >
                <img
                  style={{ height: "450px", width: "400px" }}
                  src={Blog}
                  alt="Blog"
                  className="w-full lg:w-96 max-w-full"
                />
              </div>
              <div className="lg:w-1/2 text-center lg:text-left">
                <h1 className="text-center mb-4 text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
                  Pasa a ver nuestro blog
                </h1>
                <div className="text-center lg:text-left">
                  <Button
                    style={{ display: "flex", justifyContent: "center" }}
                    onClick={navigateBlog}
                    className="bg-dark-violet py-2 px-4 block mx-auto lg:inline-block"
                  >
                    Ver Blog
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h1 className="text-3xl mt-40 text-center">Reseñas</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          width: "100%",
        }}
        className="flex flex-wrap justify-center items-center"
      >
        <div className=" p-4">
          <TestimonialCard />
        </div>
        <div className="p-4">
          <TestimonialCard />
        </div>
        <div className=" p-4">
          <TestimonialCard />
        </div>
      </div>
      <Services />
      <Footer />
    </div>
  );
};

export default Home;
