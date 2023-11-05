import React, { useState } from "react";
import SocialMedia from "../assets/Social media-amico.png";
import GroupChat from "../assets/Group Chat-bro.png";
import TestimonialCard from "./TestimonialCard";
import Comentario from "../components/Comentarios";
import { comentarios as initialComentarios } from "../components/comentariosData";
import Footer from "../components/Footer";
import { useSelector } from "react-redux";

const Community = () => {
  const [comentarios, setComentarios] = useState(initialComentarios);
  const [nuevoComentario, setNuevoComentario] = useState("");
  const [votoComentario, setVotoComentario] = useState(0);
  const user = useSelector(state => state.user);


  const handleComentarioChange = (e) => {
    setNuevoComentario(e.target.value);
  };

  const handleComentarioSubmit = () => {
    if (nuevoComentario.trim() !== "") {
      const nuevoId = comentarios.length + 1;
      const nuevoComentarioObj = {
        id: nuevoId,
        nombre: "Tu Nombre",
        comentario: nuevoComentario,
        imagenPerfil: "URL de tu imagen de perfil",
        voto: votoComentario,
      };

      setComentarios([...comentarios, nuevoComentarioObj]);
      setNuevoComentario("");
      setVotoComentario(0);
    }
  };

  return (
    <div>
      <div className="bg-custom-gray min-h-screen p-4 text-dark-gray-blue cursor-default">
        <div className="text-center">
          <h1 className="text-3xl md:text-5xl  mt-4">
            Nuestra Comunidad
          </h1>
          <img
            src={SocialMedia}
            alt="Imagen de la comunidad"
            className="my-2 mx-auto w-2/3 md:w-1/3 h-auto"
          />
        </div>
        <div className="my-4 text-center">
          <h2 className="text-3xl md:text-5xl ">Testimonios</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Testimonio 1 */}
          <div className="max-w-md m-4 rounded-lg shadow-lg">
            <TestimonialCard />
          </div>

          {/* Testimonio 2 */}
          <div className="max-w-md m-4 rounded-lg shadow-lg">
            <TestimonialCard />
          </div>

          {/* Testimonio 3 */}
          <div className="max-w-md m-4 rounded-lg shadow-lg">
            <TestimonialCard />
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="text-center">
            <h2 className="text-3xl font-semibold">
              Pasa a dejar tu comentario
            </h2>
          </div>
          <div className="flex">
            <img
              style={{ width: "800px" }}
              src={GroupChat}
              alt="Imagen de la comunidad"
              className="h-auto"
            />
          </div>
        </div>

        <div className="w-full md:w-2/4 p-4 mx-auto">
          <div className="bg-white rounded-lg shadow-md p-4">
            <h3 className="text-xl font-semibold">Deja tu comentario</h3>
            <textarea
              disabled={user?.fullName === undefined ? true : false}
              className="w-full mt-2 p-2 border rounded disabled:cursor-not-allowed"
              placeholder="Escribe tu comentario..."
              value={nuevoComentario}
              onChange={handleComentarioChange}
            />
            <div className="flex items-center mt-4">
              <p className="mr-4">Votar tu comentario:</p>
              {[1, 2, 3, 4, 5].map((valor) => (
                <span
                  key={valor}
                  className={`cursor-pointer ${
                    votoComentario >= valor
                      ? "text-yellow-500"
                      : "text-gray-400"
                  }`}
                  onClick={() => setVotoComentario(valor)}
                >
                  &#9733;
                </span>
              ))}
            </div>
            <button
              disabled={user?.fullName === undefined ? true : false}
              className="bg-dark-violet text-white px-4 py-2 rounded mt-4 disabled:bg-dark-violet/70 disabled:cursor-not-allowed "
              onClick={handleComentarioSubmit}
            >
              Publicar
            </button>
          </div>
        </div>

        <div className="my-4">
          <h2 className="text-2xl md:text-3xl text-center font-semibold">
            Comentarios
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 m-4">
            {comentarios.map((comentario) => (
              <div key={comentario.id}>
                <Comentario
                  nombre={comentario.nombre}
                  comentario={comentario.comentario}
                  imagenPerfil={comentario.imagenPerfil}
                  voto={comentario.voto}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Community;
