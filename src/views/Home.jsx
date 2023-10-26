import React from "react";
import { useNavigate } from "react-router-dom";

import SearchBar from "../components/SearchBar";
import Services from "../components/Services";
import Footer from "../components/Footer";
import Consulting from "../assets/Online-consulting-amico.png";
import Blog from "../assets/Status-update-amico.png";

import { Button } from "@material-tailwind/react";

const Home = () => {
  const navigate = useNavigate();

  function navigateBlog() {
    navigate("/Blog");
  }

  return (
    <div className="bg-custom-gray">
      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-1/2 lg:pr-10 mt-10 ml-10">
          <h1 className="text-3xl">Visualizamos un futuro donde cada </h1>
          <h1 className="text-3xl">persona este equipada con el </h1>
          <h1 className="text-3xl">conocimiento y las</h1>
          <h1 className="text-3xl">herramientas necesarias para </h1>
          <h1 className="text-3xl">alcanzar su máximo potencial.</h1>
          <h2 className="text-xl mt-5">
            Si buscás asistencia online para potenciar tu busqueda
          </h2>
          <h2 className="text-xl">de crecimiento laboral,</h2>
          <h2 className="text-xl">¡Bienvenid@, llegaste al lugar indicado!</h2>
          <SearchBar />
        </div>
        <div className="lg:w-1/2 mt-10 lg:mt-0">
          <img src={Consulting} alt="Consulta" className="w-full h-auto rounded-lg object-cover object-center"/>
        </div>
      </div>
      <h1 className="text-3xl mt-40 flex justify-center">Nuestro Blog</h1>
      <div className="mt-5 flex items-center justify-center">
        <div className="bg-white p-4 rounded">
          <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between mt-5 mx-10 bg-white p-4 rounded overflow-visible">
            <div className="flex items-center mb-4 lg:mb-0">
              <img src={Blog} alt="Blog" className="relative top-[-10px] w-96"/>
            </div>
            <div className="text-center">
              <h1 className="mb-4 text-2xl lg:text-3xl">Pasa a ver nuestro blog</h1>
              <Button onClick={navigateBlog} className="bg-dark-violet py-2 px-4">Ver Blog</Button>
            </div>
          </div>
        </div>
      </div>
      <h1 className="text-3xl mt-40 flex justify-center">Reseñas</h1>
      <div className="flex justify-center items-center flex-col lg:flex-row">
        <div className="bg-white w-48 h-40 m-4"></div>
        <div className="bg-white w-48 h-40 m-4"></div>
        <div className="bg-white w-48 h-40 m-4"></div>
      </div>
      <Services />
      <Footer />
    </div>
  );
};

export default Home;
