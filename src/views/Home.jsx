import React from "react";

import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";

import Consulting from "../../public/Online-consulting-amico.png";
import Blog from "../../public/Status-update-amico.png";

const Home = () => {
  return (
    <div className="bg-custom-gray">
      <Navbar />
      <div class="flex">
        <div class="mt-10 ml-10">
          <h1 class="text-3xl">Visualizamos un futuro donde cada </h1>
          <h1 class="text-3xl">persona este equipada con el </h1>
          <h1 class="text-3xl">conocimiento y las</h1>
          <h1 class="text-3xl">herramientas necesarias para </h1>
          <h1 class="text-3xl">alcanzar su máximo potencial.</h1>
          <h2 class="text-xl">Si buscás asistencia online para potenciar tu busqueda</h2>
          <h2 class="text-xl">de crecimiento laboral,</h2>
          <h2 class="text-xl">¡Bienvenid@, llegaste al lugar indicado!</h2>
          <SearchBar />
        </div>
        <div class="ml-auto mr-20">
          <img src={Consulting} alt="Consulta" class="w-96" />
        </div>
      </div>
      <h1 class="text-3xl mt-20 flex justify-center">Nuestro Blog</h1>
      <div class="mt-10 ml-10 mr-10 bg-white p-4 rounded overflow-visible">
        <img src={Blog} alt="Blog" class="relative top-[-10px] w-96" />
      </div>
      <h1 class="text-3xl mt-20 flex justify-center">Reseñas</h1>
      {/* Cuadros de reseñas  */}
      <div class="flex justify-center">
        <div class="bg-white w-40 h-32 m-4"></div>
        <div class="bg-white w-40 h-32 m-4"></div>
        <div class="bg-white w-40 h-32 m-4"></div>
      </div>
    </div>
  );
};

export default Home;
