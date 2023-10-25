import React from "react";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import Consulting from "../../public/Online-consulting-amico.png";
import Blog from "../../public/Status-update-amico.png";

const Home = () => {
  return (
    <div className="bg-custom-gray">
      <div className="flex">
        <div className="mt-10 ml-10">
          <h1 className="text-3xl">Visualizamos un futuro donde cada </h1>
          <h1 className="text-3xl">persona esté equipada con el </h1>
          <h1 className="text-3xl">conocimiento y las</h1>
          <h1 className="text-3xl">herramientas necesarias para </h1>
          <h1 className="text-3xl">alcanzar su máximo potencial.</h1>
          <h2 className="text-xl">Si buscas asistencia online para potenciar tu búsqueda</h2>
          <h2 className="text-xl">de crecimiento laboral,</h2>
          <h2 className="text-xl">¡Bienvenid@, llegaste al lugar indicado!</h2>
          <SearchBar />
        </div>
        <div className="ml-auto mr-20">
          <img src={Consulting} alt="Consulta" className="w-96" />
          <div className="bg-custom-gray h-full">
            <p>
              Creva significa “Crear Valor” el que muchas veces está ahí pero no sabemos cómo demostrarlo. Potenciamos a las personas en su búsqueda de crecimiento profesional desde cualquier parte del mundo y de diversas culturas.
            </p>
          </div>
        </div>
      </div>
      <h1 className="text-3xl mt-20 flex justify-center">Nuestro Blog</h1>
      <div className="mt-10 ml-10 mr-10 bg-white p-4 rounded overflow-visible">
        <img src={Blog} alt="Blog" className="relative top-[-10px] w-96" />
      </div>
      <h1 className="text-3xl mt-20 flex justify-center">Reseñas</h1>
      {/* Cuadros de reseñas */}
      <div className="flex justify-center">
        <div className="bg-white w-40 h-32 m-4"></div>
        <div className="bg-white w-40 h-32 m-4"></div>
        <div className="bg-white w-40 h-32 m-4"></div>
      </div>
    </div>
  );
};

export default Home;